interface CommentIconProps {
    size?: number;
    color?: string;
}

export const CommentIcon = ({
    size = 20,
    color = "#666666"
}: CommentIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${size}px`} viewBox="0 -960 960 960" width={`${size}px`} fill={color}>
            <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/>
        </svg>
    )
}
