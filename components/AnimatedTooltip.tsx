import type { ReactNode } from 'react';
import { Tooltip } from 'radix-ui';


type AnimatedTooltipProps = {
    children: ReactNode,
    tooltip: ReactNode,
    side?: Tooltip.TooltipContentProps['side'],
    open?: boolean,
    defaultOpen?: boolean,
    onOpenChange?: (open: boolean) => void,
}

export default function AnimatedTooltip(props: AnimatedTooltipProps) {
    return (
        <Tooltip.Root
            open={props.open}
            defaultOpen={props.defaultOpen}
            onOpenChange={props.onOpenChange}
        >
            <Tooltip.Trigger asChild>
                {props.children}
            </Tooltip.Trigger>
            <Tooltip.Content
                className="z-20 bg-black text-white px-2.5 py-1.5 rounded text-sm data-[state=delayed-open]:data-[side=top]:animate-slide-down-fade data-[state=delayed-open]:data-[side=bottom]:animate-slide-up-fade data-[state=delayed-open]:data-[side=left]:animate-slide-right-fade data-[state=delayed-open]:data-[side=right]:animate-slide-left-fade"
                side={props.side}
                sideOffset={5}
            >
                {props.tooltip}
                <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
        </Tooltip.Root>
    )
}
