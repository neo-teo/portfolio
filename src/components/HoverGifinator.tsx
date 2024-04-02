
type HoverGifinatorProps = {
    gifSrc: string;
    label: string;
    updateGif: (newGif: string | undefined) => void;
};

export default function HoverGifinator({ gifSrc, label, updateGif }: HoverGifinatorProps) {
    return (
        <div className="flex bg-yellow-100 border border-transparent hover:border-black hover:border-dashed">
            <div
                className=""
                onMouseEnter={() => updateGif(gifSrc)}
                onMouseLeave={() => updateGif(undefined)}
            >
                <span className="hover:cursor-pointer whitespace-nowrap">{label}</span>
            </div>
        </div>
    );
};