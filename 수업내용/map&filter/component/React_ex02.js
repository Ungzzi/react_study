import React, { Component } from 'react';
import './React_ex.css';

class React_ex02 extends Component {
    state = {
        nameValue: "", titleValue: "", boardList: [], searchWord: "", searchType: "", searchList: []
    }
    render() {
        let { nameValue, titleValue, boardList, searchWord, searchType, searchList } = this.state
        return (
            <div>
                <fieldset>
                    작성자 : <input type="text" onChange={(e) => { this.setState(state => ({ nameValue: e.target.value })) }} />
                    제목 : <input type="text" onChange={(e) => { this.setState(state => ({ titleValue: e.target.value })) }} />
                    <button onClick={() => {
                        this.setState(state => ({ boardList: boardList.concat({ id: boardList.length + 1, userName: nameValue, boardTitle: titleValue }) }))
                    }}>작성</button>
                </fieldset>
                <select name="" id="" onChange={(e) => { this.setState(state => ({ searchType: e.target.value })) }}>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>
                <input type="text" onChange={(e) => { this.setState(state => ({ searchWord: e.target.value })) }} />
                <button onClick={() => {
                    let newBoard;
                    if (searchType === 'title') {
                        newBoard = boardList.filter(item => item.boardTitle.includes(searchWord));
                    }
                    else if (searchType === 'writer') {
                        newBoard = boardList.filter(item => item.userName.includes(searchWord));
                    }
                    this.setState(state => ({ searchList: newBoard }));
                }}>검색</button>
                <button onClick={() => { this.setState(state => ({ searchList: boardList })) }}>전체</button>
                <table>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                    </tr>
                    {boardList.map((value) => {
                        return <tr key={value.id} onDoubleClick={() => {
                            let newList = boardList.filter(value2 => value2.id !== value.id);
                            this.setState(state => ({ boardList: newList }));
                        }}>
                            <td>{value.id}</td>
                            <td>{value.boardTitle}</td>
                            <td>{value.userName}</td>
                        </tr>
                    })}
                </table>
                <div>검색결과</div>
                <table>
                    {searchList.map((value) => {
                        return <tr key={value.id} onDoubleClick={() => {
                            let newList = searchList.filter(value2 => value2.id !== value.id);
                            this.setState(state => ({ boardList: newList }));
                        }}>
                            <td>{value.id}</td>
                            <td>{value.boardTitle}</td>
                            <td>{value.userName}</td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default React_ex02;