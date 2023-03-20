import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ name, nickname });
    return () => {
      console.log("clean up");
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChangeName} />
        <input name="nickname" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름:</b> {name}
        <b>닉네임: </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
