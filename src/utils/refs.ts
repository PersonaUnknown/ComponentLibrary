export type TypewriterRef = {
	typeForward: () => void;
	startTyping: () => void;
};

export type TextAlongPathRef = {
	play: () => void;
	rewind: () => void;
	pause: () => void;
	reset: () => void;
};

export type CarouselRef = {
	scrollLeft: () => void;
	scrollRight: () => void;
};

export interface ModalRef {
	onShow: () => void;
	onHide: () => void;
}

export interface DrawerRef {
	onShow: () => void;
	onHide: () => void;
}