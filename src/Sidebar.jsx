import React from 'react';

export default class Sidebar extends React.Component{
    getSortField(){
        return <div className="sidebarList">
            <div>
            <strong className="sortLabel">Sort by</strong><br/>
            <select className="sortList">
                <option name="relevance" value="Relevance">Relevance</option>
                <option name="popularity" value="popularity">Populality</option>
                <option name="popularity" value="priceLowtoHigh">Price: Low to High</option>
                <option name="priceLowtoHigh" value="priceLowtoHigh">Price: Low to High</option>
            </select>
            </div>
            <div className="sortByDiv">
            <strong className="sortLabel">By Price</strong><br/>
            <select className="sortList">
                <option name="Under $25" value="Under$25">Under $25</option>
                <option name="$25to$50" value="$25 to $50">$25 to $50</option>
                <option name="$50to$100" value="$50 to $100">$50 to $100</option>
                <option name="$100andabove" value="$100 and above">$100 and above</option>
                
            </select>
            </div>
            <div className="sortByDiv">
            <strong className="sortLabel">By Dealer</strong><br/>
            <select className="sortList">
                <option name="Dealer1" value="Dealer 1">Dealer 1</option>
                <option name="Dealer2" value="Dealer 2">Dealer 2</option>
                <option name="Dealer3" value="Dealer 3">Dealer 3</option>
                <option name="Dealer4" value="Dealer 4">Dealer 4</option>
                
            </select>
            </div>
            <div className="sortByDiv">
            <strong className="sortLabel">By Brand</strong><br/>
            <select className="sortList">
                <option name="Brand1" value="Brand 1">Brand 1</option>
                <option name="Brand2" value="Brand 2">Brand 2</option>
                <option name="Brand3" value="Brand 3">Brand 3</option>
                <option name="Brand4" value="Brand 4">Brand 4</option>
            </select>
            </div>
        </div>
    }
    render(){
        return <div className="">
                {this.getSortField()}
        </div>
    }
}