/**
 * Types defined for Component Cards
 */
export interface ComponentSection {
    header: string;
    components: ComponentCardData[];
}

export interface ComponentCardData {
    href: string;
    label: string;
    description: string;
}

/**
 * Types defined for Prop Table
 */
export interface PropTableRow {
    prop: string;
    type: string;
    default: string;
    description: string;
}