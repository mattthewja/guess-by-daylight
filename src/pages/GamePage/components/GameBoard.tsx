type props = {
    portraits: string[]
}

export default function GameBoard({ portraits }: props) {
    return (<>
        <div className="game-grid">
            {portraits.map((p) => {
                return <img key={p} src={p} />
                // add a img card component here
            })}
        </div>
    </>)
}