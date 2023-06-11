import "./MyInfo.css"
import uncheckedImg from "./Icon/unchecked.svg";
import checkedImg from "./Icon/checked.svg";
import {useEffect, useRef, useState} from "react";

export default function MyInfo(){
    const [userInfo, setUserInfo] = useState({
        user_sn: 0,
        address: "",
    })
    //const [address, setAddress] = useState("") //Todo DB에서 받아오기
    const address = useRef("주소");
    const setAddress = (e) => {
        address.current = e.target.value;
    }
    //Todo get
    // name
    // address
    const updateUser = () => {
        setUserInfo({...userInfo, address: {address}})
        console.log(userInfo.address);
        const post = {
            userInfo: userInfo,
        };

        fetch ("url", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        });
    }

   return (
        <div className="my-info-page">
            <div className="top-text">
                나의 기본정보
            </div>
            <div className="body-container">
                <div className="padding-box">
                    <div className="input-text-box">
                        <input type="text" disabled="true" value="name"/>
                    </div>
                    <div className="input-text-box">
                        <input type="text" disabled="true" value="kakao..."/>
                    </div>
                    <div className="input-text-box">
                        <input type="text" placeholder="비밀번호 (8~16자리 영문/숫자 조합)" />
                    </div>
                    <div data-v-2ecae326="" className="special_signInfo">※ 특수기호는 ! @ # $ % ^ * + = - 가능합니다</div>
                    <div className="input-text-box">
                        <input type="text" placeholder="비밀번호 확인 (8~16자리 영문/숫자 조합)" />
                    </div>
                    <div className="number-area">
                        <div className="number-area-left">
                            <div>
                                <select disabled="true" className="alvolo-select">
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="019">019</option>
                                </select>
                            </div>
                        </div>
                        <div className="number-area-right">
                            <div className="input-number-box">
                                <input type="number" disabled="true" placeholder="12341234" />
                                <span className="btn-modify-number-gray">수정</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="padding-box2">
                    <div className="input-text-box">
                        <input type="text" disabled="true" value="birthday"/>
                    </div>
                    <div className="mail-area">
                        <div className="mail-area-left">
                            <div className="alvolo-input">
                                <input type="text" placeholder="이메일" onInput="" className="input-defalut" />
                            </div>
                        </div>
                        @
                        <div className="mail-area-right">
                            <input type="text" placeholder="직접입력" className="mail-area-right-direct" />
                            <div className="select-box">
                                <select className="alvolo-select">
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="direct">직접입력</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="box-text-alvolo-input-auth">
                        <input type="address" placeholder="주소" value={address} onChange={setAddress} className="alvolo-input-default"/>
                        <span className="btn-modify-number-gray"> 주소찾기</span>
                    </div>
                    <div className="membership-check-toggle">
                        <div className="check-toggle">
                            <div className="check_toggle_whole">
                                <img src={uncheckedImg} className="checkImg" />
                                <div className="toggle-txt"></div>
                            </div>
                        </div>
                        <div className="context">SMS 수신 동의</div>
                        <div className="check-toggle">
                            <div className="check_toggle_whole">
                                <img src={uncheckedImg} className="checkImg" />
                                <div className="toggle-txt"></div>
                            </div>
                        </div>
                        <div className="context">E-mail 수신 동의</div>
                    </div>
                </div>
                <div className="edit-membership-button-container">
                    <div className="gray-button">취소</div>
                    <div className="blue-button" onClick={updateUser}>확인</div>
                </div>
            </div>
        </div>
    )
}