import { forwardRef, Fragment, type Ref, useEffect, useImperativeHandle, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import type { CarouselRef } from "../../utils/refs";

interface Props {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

/**
 * Carousel component that displays one component at a time. 
 * Includes touch swipe + mouse dragging controls + useRef support w/ buttons to navigate.
 */
const Carousel = forwardRef(({
    children,
    className
}: Props,
    ref: Ref<CarouselRef>
) => {
    const [featureIndex, setFeatureIndex] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const featureLength = Array.isArray(children) ? children.length : 1;   
    // Desktop / Mouse Scrolling Controls
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const mouseCoords = useRef({
        startX: 0,
        scrollLeft: 0,
    });
    // Mobile / Touch Scrolling Controls
    const touchRef = useRef<{
        touchStart: number | null;
        touchEnd: number | null;
    }>({
        touchStart: null,
        touchEnd: null,
    });
    const minSwipeDistance = 50; 
    /**
     * Touch Control Swiping
     */
    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchRef.current = {
            touchStart: e.targetTouches[0].clientX,
            touchEnd: null,
        }
    }
    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchRef.current.touchEnd = e.targetTouches[0].clientX;
    }
    const onTouchEnd = () => {
        if (!touchRef.current.touchStart || !touchRef.current.touchEnd) {
            return;
        }
        const distance = touchRef.current.touchStart - touchRef.current.touchEnd;
        const isLeftSwipe = distance < -minSwipeDistance;
        const isRightSwipe = distance > minSwipeDistance;
        if (isLeftSwipe) {
            scrollLeft();
        } else if (isRightSwipe) {
            scrollRight();
        }
    }
    /**
     * Scroll carousel to show the specific feature
     * @param index index of feature to scroll to
     */
    const scrollCarousel = (index: number) => {
        if (carouselRef.current === null) {
            return;
        }
        const carouselWidth = carouselRef.current?.scrollWidth || 0;
        const percentage = index / featureLength;
        const newLeft = carouselWidth * percentage;
        carouselRef.current?.scrollTo({
            behavior: "smooth",
            left: newLeft
        });
        setFeatureIndex(index);
    }
    const scrollLeft = () => {
        const newIndex = featureIndex === 0 ? featureLength - 1 : featureIndex - 1;
        scrollCarousel(newIndex);
    }
    const scrollRight = () => {
        const newIndex = (featureIndex + 1) % featureLength;
        scrollCarousel(newIndex);
    }
    /**
     * Begin scrolling + Keep track of current scroll offset
     */
    const handlePointerDown = (e: React.PointerEvent) => {
        if (carouselRef.current === null) {
            return;
        }
        const startX = e.pageX - carouselRef.current.offsetLeft;
        const scrollLeft = carouselRef.current.scrollLeft;
        mouseCoords.current = {
            startX, scrollLeft
        };
        setIsScrolling(true);
    }
    /**
     * Stop scrolling and check where to snap the carousel (prev, curr, or next feature)
     */
    const handlePointerUp = () => {
        if (carouselRef.current === null || !isScrolling) {
            return;
        }
        setIsScrolling(false);
        const scrollDiff = carouselRef.current.scrollLeft - mouseCoords.current.scrollLeft;
        const carouselWidth = carouselRef.current.scrollWidth;
        const cardWidth = carouselWidth / featureLength;
        const scrollPercentage = scrollDiff / cardWidth;
        if (scrollPercentage >= 0.04) {
            const newIndex = Math.min(featureIndex + 1, featureLength - 1);
            scrollCarousel(newIndex);
        } else if (scrollPercentage <= -0.04
        ) {
            const newIndex = Math.max(0, featureIndex - 1);
            scrollCarousel(newIndex);
        } else {
            scrollCarousel(featureIndex);
        }
    }
    /**
     * Move carousel horizontally based on dragging the mouse
     */
    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isScrolling || carouselRef.current === null) {
            return;
        }
        e.preventDefault();
        const currX = e.pageX - carouselRef.current.offsetLeft;
        const walkX = (currX - mouseCoords.current.startX) * 1.5;
        carouselRef.current.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    }
    /**
     * Automatically update showcase on window resize
     */
    useEffect(() => {
        const onResize = () => {
            scrollCarousel(featureIndex);
        }
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    /**
     * CarouselRef handler
     */
    useImperativeHandle(ref, () => ({
        scrollLeft,
        scrollRight
    }));
    return (
        <div 
            ref={carouselRef}
            className={twMerge(
                "mx-8 md:mx-0 touch-none cursor-grab active:cursor-grabbing select-none flex flex-row overflow-x-auto overflow-y-hidden no-scrollbar",
                className
            )}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {
                Array.isArray(children) ?
                children.map((child, index) => {
                    const key = `child-${index}`;
                    return (
                        <Fragment key={key}>
                            {child}
                        </Fragment>
                    );
                }) :
                children
            }
        </div>
    );
});

export default Carousel;