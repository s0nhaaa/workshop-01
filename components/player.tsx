import { Player } from '@/types/player'

interface PlayerProps {
  player: Player | undefined
}

export default function Player({ player }: PlayerProps) {
  return (
    <>
      {player && (
        <div
          className='transition-transform duration-[0.4s] grid-cell group z-10'
          data-color={player.color}
          data-direction={player.direction}
          style={{ transform: `translate3d(${16 * player.x + 'px'}, ${16 * player.y - 4 + 'px'}, 0)` }}>
          <div className="bg-[url('/shadow.png')] grid-cell" />
          <div
            className="
              bg-[url('/characters.png')] 
              grid-cell
              group-data-[color=red]:character-red 
              group-data-[color=orange]:character-orange
              group-data-[color=yellow]:character-yellow
              group-data-[color=green]:character-green
              group-data-[color=purple]:character-purple
              group-data-[direction=right]:character-direction-right
              will-change-transform
              z-10
            "
          />
          <div className='absolute left-[-5px] text-[5px] text-[white] font-bold uppercase whitespace-nowrap px-0.5 py-px rounded-[3px] -top-3 bg-[#333]'>
            <span>{player.name}</span>
            <span className='text-[gold] ml-px'>{player.coins}</span>
          </div>
          <div className=" absolute top-[-18px] w-[7px] h-[5px] left-[5px] bg-[url('/arrow.png')]"></div>
        </div>
      )}
    </>
  )
}
