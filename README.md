# 36기 1차 프로젝트 Wesely

## 프로젝트 소개

- 제목 : 생활용품 정기구독 사이트 [WISELY](https://www.wiselycompany.com/home/main)를 모티브로 한 프로젝트
- 선정이유
  - FE 측면: 반응형 사이트, 케럿셀, 아코디언, 상품 내부 옵션별 이미지 삽입, 리뷰 평점 분포 그래프, 평점 표현 시 소수 한 자리 반올림, 쿼리파라미터(페이지네이션, 오더링) 구현 가능
  - BE 측면: 일반구매 및 정기구독 조건 구분, 상품 내부 옵션별 데이터 구성, 상품별 평점 계산 시 서브쿼리 사용, 쿼리파라미터(페이지네이션, 오더링), 로그인, 회원가입, 장바구니 담기 및 수량 조절 기능 구현 가능
- 개발은 초기 세팅부터 직접 구현했으며, 하단 데모 영상에서 보이는 부분은 프론트 백엔드 연결을 통해 사용 가능한 서비스를 구현한 영상입니다
- [구현 기능 데모 영상](https://youtu.be/LgIgJsmdHhU)

---

### 개발 인원 및 기간

- 팀명: 위즐리(WESELY)
- 개발기간 : 2022년 08월 16일 ~ 2022년 08월 25일 (10일)
- 개발인원 : 프론트엔드 3명, 백엔드 3명
  - FE : 김다현, 김진혁, 문준기
    - [FE-김다현 github 링크](https://github.com/dalgit/36-1st-wesely-frontend.git)
    - [FE-문준기 github 링크](https://github.com/wecode-bootcamp-korea/36-1st-wesely-frontend.git)
    - [FE-김진혁 github 링크](https://github.com/HYUKSKEE/36-1st-wesely-frontend.git)
  - BE : 박명호, 이솔, 정재하

---

### 기술스택

- 프론트엔드 : <img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React.js-58c3cc?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/Sass-58c3cc?style=flat-square&logo=Sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/React.js-58c3cc?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/CRA-58c3cc?style=flat-square&logo=Create-React-App&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Router Dom-gray?style=flat-square&logo=React-Router&logoColor=F6BB43"/>
  <img src="https://img.shields.io/badge/scss-4AA8D8?style=flat-square&logo=Sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/eslint-000066?style=flat-square&logo=eslint&logoColor=white"/>
  <img src="https://img.shields.io/badge/prettier-00CC00?style=flat-square&logo=eslint&logoColor=white"/>
- 백엔드 : <img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-008000?style=flat-square&logo=Node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000080?style=flat-square&logo=Express&logoColor=white"/>
  <img src="https://img.shields.io/badge/ MySQL8.0-6441a5?style=flat-square&logo=MySQL&logoColor=white"/>
  <img src="https://img.shields.io/badge/Postman-F6BB43?style=flat-square&logo=Postman&logoColor=white"/>
  <img src="https://img.shields.io/badge/Bcrypt-F6BB43?style=flat-square&logo=Bcrypt&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-F6BB43?style=flat-square&logo=JWT&logoColor=white"/>
- 협업 툴 : <img src="https://img.shields.io/badge/Notion-1c1c1c?style=flat-square&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-553830?style=flat-square&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Gather-8B00F?style=flat-square&logo=Gather&logoColor=white"/>

---

### FE 구현 기능

|      Page      |    담당    | 구현 사항                                                                                                                                                                                                                                                                                                                 |                                                                                                                                      구현이미지                                                                                                                                       |
| :------------: | :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Login & SignUp | **문준기** | <ul><li>백엔드와 실시간 유효성 검사 <li>유효성 검사 후 회원가입 실시 <li>JWT 토큰 받아서 localStorage 저장 </ul>                                                                                                                                                                                                          | <img src="https://user-images.githubusercontent.com/85611408/187024119-5a5161a1-2530-4a60-a925-a9a5c2639311.gif" width=400px height=250px> <img src="https://user-images.githubusercontent.com/85611408/187024117-30e676fc-b1ef-4f3d-bb01-087d91e03ae8.gif" width=400px height=250px> |
|      Cart      | **문준기** | <ul><li>상품 수량, 조절, 삭제 <li>백엔드랑 통신후 실시간 재고 반영 <li>정기 구독 주기 선택 <li>포인트 결제 </ul>                                                                                                                                                                                                          |                                                                      <img src="https://user-images.githubusercontent.com/85611408/187024116-fbcbc1a5-7e4a-4215-95fc-52bfed3357ec.gif" width=400px height=250px>                                                                       |
|     Detail     | **김진혁** | <ul><li>상품 옵션 선택시 옵션 폼 생성 <li>상품 옵션별 수량, 조절, 삭제 <li>상품 정보 아코디언 <li>장바구니 담기 POST <li>장바구니 담기 후 모달 생성 <li>장바구니 라우터 (장바구니 이동 버튼 클릭 후 장바구니 이동) <li>리뷰 데이터 페이지네이션 <li>Under Bar 스크롤 이벤트 (특정 영역 스크롤시 Under Bar 생성 제거)</ul> |                                                                      <img src="https://user-images.githubusercontent.com/85611408/187024922-6eb36435-bc2e-46d1-bbe5-0c2119b34753.gif" width=400px height=250px>                                                                       |
|     Footer     | **김진혁** | <ul><li>Footer : 영역별 상수 데이터 분리</ul>                                                                                                                                                                                                                                                                             |                                                                      <img src="https://user-images.githubusercontent.com/85611408/187025041-dc2fa1de-91bb-45b7-8732-92c57336482c.JPG" width=800px height=250px>                                                                       |
|      Main      | **김다현** | 메인 캐러셀<ul><li>기본 슬라이드</li> <li>무한 슬라이드 <li>자동 슬라이드 </ul> 카테고리 라우터<ul><li>선택한 제품의 카테고리로 이동 </ul>인기있는 제품 리스트를 이용한 멀티 캐러셀<ul>                                                                                                                                   |                                                                      <img src="https://user-images.githubusercontent.com/85611408/187024112-ec901567-fcee-45ad-95ab-d247062fac6d.gif" width=400px height=250px/>                                                                      |
|  Product List  | **김다현** | <ul><li>제품 품절 확인<li>카테고리 별 제품 불러오기<li>정렬 기능 </ul>                                                                                                                                                                                                                                                    |                                                                      <img src="https://user-images.githubusercontent.com/85611408/187024111-45d3d746-bdc6-499f-9f90-1dbb995e8de3.gif" width=400px height=250px/>                                                                      |
|    Nav Bar     | **김다현** | <ul><li>메인 Nav Bar와 서브 Nav Bar를 이용한 2중 스크롤 이벤트 구현 </ul>                                                                                                                                                                                                                                                 |                                                                      <img src="https://user-images.githubusercontent.com/85611408/187025247-f5a17db4-1626-4a73-9f13-ad2c0f11b1dc.gif" width=400px height=250px/>                                                                      |

### BE 구현 기능

- 박명호 [(github링크)](https://github.com/seatbelt92)
  - 홈 화면
  - 제품 페이지
- 이솔 [(github링크)](https://github.com/isol78)
  - 로그인
  - 회원가입
- 정재하 [(github링크)](https://github.com/JeongJaeHa)
  - 장바구니 페이지
