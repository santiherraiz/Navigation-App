import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
    color: 'primary' | 'secondary' | 'terciary';
    variant?: 'contained' | 'text-only';
    children: string;
    className?: string;
}

const CustomButton = ({children, color = 'primary', variant='contained', onPress, onLongPress, className}: Props) => {
    
    const btncolor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        terciary: 'bg-terciary',
    } [color];

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        terciary: 'text-terciary',
    } [color];

    if (variant === 'text-only') {
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text
                    className={`font-semibold text-lg text-center ${textColor}`}
                >
                    {children}
                </Text>
            </Pressable>
        )
    }

    return (
        <Pressable
            className={`p-4 rounded-md ${btncolor} active:opacity-70 mt-3 `}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text
                className={`font-semibold text-lg text-center text-white`}
            >
                {children}
            </Text>
        </Pressable>
    )

}

export default CustomButton