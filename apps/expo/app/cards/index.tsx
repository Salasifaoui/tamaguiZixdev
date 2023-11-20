import { YStack,Paragraph } from "tamagui";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import {Cards} from 'app/features/zixdev-libs/cards-product/card'

export default function CardScreen() {
    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }
    // useEffect(() => {
    //     fetchProducts().then(data => console.log(data));
    // }
    // , [])

    const renderSearchBar = () => {
        return (
            <YStack>
                <Paragraph>Search</Paragraph>
            </YStack>
        )
    }
  return (
    <>
    <Stack.Screen
        options={{
            headerShown: true,
          headerTitle: 'Cards',
          headerRight: renderSearchBar,
        }}
      />
  <Cards />
    </>
    
        
  )
}

