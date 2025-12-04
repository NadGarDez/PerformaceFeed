import React, { memo, useRef, useState } from "react";

import { source } from "@/types";
import { StyleSheet, View } from "react-native";
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import { CarouselVideo } from "./sub/CarouselVideo";
import { PagerIndicator } from "./sub/PageIndicator";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: 300
    },
    idicatorStyles: {
        position: 'absolute',
        top: 10,
        right: 10
    }
});

const numberOfVideos = Array(10).fill(0);

interface  props {
    sources: source[]
}

export const Carousel = memo(
    (props: props): React.JSX.Element => {

        const {sources} = props

        const [currentPage, setCurrentPage] = useState<number>(1);

        const pagerRef = useRef<null | PagerView>(null);


        const handlePageChange = (event: PagerViewOnPageSelectedEvent) => {
            setCurrentPage(event.nativeEvent.position + 1);
        }

        return (
            <View style={styles.container}>
                <PagerView initialPage={0} style={styles.container} onPageSelected={handlePageChange} ref={pagerRef}>
                    {
                        sources.map(
                            (item, index) => (
                                <CarouselVideo key={index} />
                            )
                        )
                    }

                </PagerView>
                <View style={styles.idicatorStyles}>
                    <PagerIndicator currentPage={currentPage} totalPages={numberOfVideos.length} />
                </View>
            </View>
        );
    }

)



