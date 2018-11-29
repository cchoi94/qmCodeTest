import React, { Component } from 'react';
import classes from './TodoList.css';

import jsonData from '../../data.json';
import Moment from 'moment';
import CardList from '../../components/CardList/CardList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            checkedBoxArr: [],
            imgPrefix: 'https://dev-quartermaster.imgix.net/'
        }
        this.handleCBoxClick=this.handleCBoxClick.bind(this)
    }


    componentDidMount() {
        this.getData();
    }

    getData() {
        const dataArr = [];
        jsonData.data.map(el => {
            dataArr.push(el)
        })
        this.setState({
            data: dataArr
        })
    }

    handleCBoxClick(completed, index) {
        // const newArray = [...this.state.checkedBoxArr];
        // newArray.push(index)
        // this.setState({
        //     checkedBoxArr: newArray
        // })
        return !completed
    }

    render () {
        return (
           <div className={classes.ToDoContainer}>
                <AppBar position="static">
                    <Toolbar className={classes.ToDoHeader}>
                        <Typography variant="h6" color="inherit">
                            To Do List
                        </Typography>
                            {Moment().format('MMMM Do YYYY')}
                    </Toolbar>
                </AppBar>
                <CardList
                    info = {this.state.data}
                    imgPrefix = {this.state.imgPrefix}
                    boxClick = {this.handleCBoxClick}
                />
           </div> 
        )
    }
}

export default TodoList