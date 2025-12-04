import React, { memo, useCallback, useRef, useState } from "react";

import { source, videoStatus } from "@/types";
import { StyleSheet, View } from "react-native";
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import { CarouselItem } from "./sub/carouselItem";
import { PagerIndicator } from "./sub/PageIndicator";
import { restRule } from "./utils";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: 300,
    },
    idicatorStyles: {
        position: 'absolute',
        top: 10,
        right: 10
    }
});


interface props {
    sources: source[]
}

export const Carousel = memo( // en este archivo se gestionaria la lectura de la matriz de videos 
    (props: props): React.JSX.Element => {

        const { sources } = props

        const [currentPage, setCurrentPage] = useState<number>(1);

        const pagerRef = useRef<null | PagerView>(null);


        const handlePageChange = (event: PagerViewOnPageSelectedEvent) => {
            setCurrentPage(event.nativeEvent.position + 1);
        }


        const getItemStatus = useCallback(
            (pageIndex: number): videoStatus => {
                return restRule(pageIndex, currentPage)
            },
            [currentPage, restRule]
        )

        return (
            <View style={styles.container}>
                <PagerView initialPage={0} style={styles.container} onPageSelected={handlePageChange} ref={pagerRef}>
                    {
                        sources.map(
                            (item, index) => (
                                <CarouselItem source={item} key={index} itemStatus={getItemStatus(index)} />
                            )
                        )
                    }
                </PagerView>
                <View style={styles.idicatorStyles}>
                    <PagerIndicator currentPage={currentPage} totalPages={sources.length} />
                </View>
            </View>
        );
    }

)



