export const focusedRule = (pageIndex: number, carouselCurrentPage: number): 'active' | 'prepared' | 'unmounted' => {

    if (pageIndex === carouselCurrentPage) return 'active';

    if (pageIndex === carouselCurrentPage + 1) return 'prepared';

    if (pageIndex === carouselCurrentPage - 1 && carouselCurrentPage > 0) return 'prepared';

    return 'unmounted';
}

export const nextToFocusRule = (pageIndex: number, carouselCurrentPage: number): 'prepared' | 'unmounted' => {
    if (pageIndex === carouselCurrentPage) return 'prepared';
    return 'unmounted'
}

export const restRule = (pageIndex: number, carouselCurrentPage: number): 'unmounted' => 'unmounted'


export const ruleSelector = [focusedRule, nextToFocusRule, restRule]