import React, { useEffect, useState } from "react";
import NewTracks from "../../components/produce/newTracks";
import Sequencers from "../../components/sequencers";
import TrackAdder from "../../components/produce/trackAdder";
import CoverGens from "../../components/coverGens";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { CoverGenHeightState, trackAtomFamily } from "../../store/atoms";
import NewChat from "../../components/produce/newChat";

function Produce() {
  const [trackIds, setTrackIds] = useState([] as object[][]);
  // const firstTrack = useRecoilValue(trackAtomFamily(0));

  //components\sequencers\chat.tsx에서 변경되는 클래스명 상태입니다.
  const CoverGenHeight = useRecoilValue(CoverGenHeightState);
  const [heightClassName, setHeightClassName] = useState("h-0 opacity-0");

  useEffect(() => {
    if (!trackIds.length) return;
    if (!trackIds.at(-1).length) return setHeightClassName("h-0 opacity-0");
    setHeightClassName("h-72 opacity-100");
  }, [trackIds]);

  if (!trackIds.length) return <NewTracks setTrackIds={setTrackIds} />;
  // if (!firstTrack.request_description) {
  //   return <Sequencers trackIds={trackIds} />;
  // }

  //폴더구조 - 시퀀서스 -> 시퀀서 -> 악기선택/채팅/음악재생
  return (
    <div>
      <div className={`${CoverGenHeight}  transition-all duration-1000`}>
        <CoverGens />
      </div>
      <Sequencers trackIds={trackIds} setTrackIds={setTrackIds} />
      <div className={`${heightClassName}  transition-all duration-1000`}>
        <TrackAdder setTrackIds={setTrackIds} trackIds={trackIds} />
      </div>
    </div>
  );
}

export default Produce;

//음악 제작 페이지 비즈니스 로직

/*
 * 트랙 배열을 만들고 트랙 갯수에 따른 
 * 장르, 감정 태그, 길이 선택
 * 최초에 만들어지는 트랙의 악기는 '피아노', [Genre : Classical Music / Keywords : Rainy Day, Sad / Length : over 20 notations / Instrument: Piano] Please make a classical music good to listen when it rains
 * 트랙을 만든 결과에 따라 '유저가 보낸 프롬프트', 전체 프롬프트 저장
 * UI에는 유저가 보낸 프롬프트를 저장, 새로운 프롬프트를 생성할 떄에는 전체 프롬프트를 발송
 * (가령 피아노, 베이스, 기타 순으로 만든 경우 '피아노', '피아노, 베이스', '피아노, 베이스, 기타'를 만든 프롬프트가 저장되어있음.)
 * 



*/

export async function getServerSideProps(context) {
  const { id } = context.params;
  // id를 이용하여 데이터를 가져오거나 API 호출 등의 로직을 수행할 수 있습니다.
  // 예를 들어, `/music/${id}`에 대한 데이터를 가져오는 경우:

  // const res = await fetch(`https://api.example.com/music/${id}`);
  // const data = await res.json();

  // 가져온 데이터를 props로 전달합니다.
  return {
    props: {
      // id,
    },
  };
}