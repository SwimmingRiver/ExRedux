Redux 연습
===
### 개요

친구랑 만들어 보자고 했던 웹페이지가 생각나 만들어 보려고 하는데, redux를 사용하면 더 편할 것 같아서, 영상 강의 등을 통해서 학습하기 위해 만듦
주로 강의를 통한 클론 코딩이 될 것
## 정리
Redux
설치: redux,react-redux

store 생성: import {createStore} from 'redux';
	    const store = createStore(reducer); // 상수로 선언

reducer 생성: function reducer(currentState,action){
	const newState = {...currentState}	
	return	
		 }
		//paremeter인자는 현재 state값,state를 어떻게 바꿀지에 대한 정보
		//return 값이 새로운 state의 값
		//state 불변성 유지를 위해 새로운 state로 복제한다
action:state를 바꾸는 행동
dispatch:action을 실행
 
function reducer(currentState,action){
	const newState = {...currentState}	
	if(currentState===undefined)	
		return	{number:1,}
		 }// state의 기본 값 설정(1)

---
import {Provider,useSelector,useDispatch,connect} from 'react-redux';
--
Provider:Component로 사용할 부분을 감싸준다. 
prop store 필수 <Provider store={store}><...></...></Provider> 

useSelector:어떤 state 값을 사용할지 선택
함수를 인자로 받음, useSelector(function)

useDispatch:state 값을 변경
	const dispatch = useDispatch();
	
connect:재사용시 필요
	function A(state,ownProps){//보통 mapStateToProps라고 명명
		return (...)
	}   
		export default connect (store에서 state를 가져오는 함수A)(component);//A가 return하는 값을 component의 props로 추가할 수 있다
--
## redux-toolkit:
	{
	createAction을 이용해서 action의 type 정의
	createReducer는 createReducer(state초기값,{
		[action의 type]:()=>{} *state의 불변성(?)을 유지할 필요없음 ex) state.push(...) 가능
		}) 형식으로 사용 (다른 제어문을 이용할 필요 없음) 
		configureStore createStore와 비슷하고 default(?)를 가지고 있음,devTools 활용에 용이하다
		createSlice({
		name:"aReducer",
		initialState:[],
		reducer:{...}
		})  형태로 선언하고 action까지 제공함
	}
###### 기타
---
createStore를 쓰니까 에러가 생겨서 strictMode를 꺼서 사용하니 잘됐다(X).
=>redux-toolkit 사용을 권장하며 configureStore로 대체가능하고,createStore도 취소선이 생기지만 사용에는 문제가 없다  
 영상 강의들이 제작될 때는 사용됐던 것 같은데 현재 버젼에서는 다른 방법으로 대체된거 같다. 
