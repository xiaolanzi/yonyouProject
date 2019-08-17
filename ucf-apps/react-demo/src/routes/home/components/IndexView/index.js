/**
 * App模块
 */

import { actions, connect} from 'mirrorx';
import React, { Component } from 'react';
import { Table, Button } from 'tinper-bee';
import Grid from 'bee-complex-grid';
import 'bee-complex-grid/build/Grid.css';

import './index.less';


class IndexView extends Component {
    constructor(props) {
        super(props);
    }
    
    columns = [
        {
            title: '用户名',
            dataIndex: "username",
            key: "username",
            width: 300
        },
        {
            title: '性别',
            dataIndex: "sex",
            key: "sex",
            width: 500
        },
        {
            title: '年龄',
            dataIndex: "age",
            key: "age",
            width: 200
        }
    ];
    getData = () => {
        actions.home.loadData()
    }
    freshData = () => {
        actions.home.loadData()
    }
    onDataNumSelect = () => {
        actions.home.loadData()
    }
    render() {
        const { data } = this.props
        let paginationObj = {
            items:10,//一页显示多少条
            total:data.length,//总共多少条、
            freshData:this.freshData,//点击下一页刷新的数据
            onDataNumSelect:this.onDataNumSelect, //每页大小改变触发的事件
            showJump:false,
            noBorder:true
        }
        return (
            <div className="app-wrap">
                <Grid
                    className="demo"
                    columns={this.columns}
                    data={data}
                    paginationObj={paginationObj}
                    multiSelect={true}
                />
                <Button onClick={this.getData}>
                    heiheiehi
                </Button>
            </div>
        );
    }
}

IndexView.displayName = "IndexView";
export default IndexView;
