export const focusedRule = (pageIndex: number, carouselCurrentPage: number) => {
    if (pageIndex + 1 === carouselCurrentPage) return 'active'; 
    if (pageIndex === carouselCurrentPage) return 'prepared'; 
    return 'unmounted' 
}


export const nextToFocusRule = (pageIndex: number, carouselCurrentPage: number) : 'prepared' | 'unmounted'=> {
    if (pageIndex + 1 === carouselCurrentPage) return 'prepared';
    return 'unmounted'
}

export const restRule = (pageIndex: number, carouselCurrentPage: number): 'unmounted' => 'unmounted'


export const ruleSelector = [focusedRule,nextToFocusRule,restRule]