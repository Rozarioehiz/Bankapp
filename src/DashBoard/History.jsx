import React from 'react'
import "./History.css"

const History = () => {
    return (
        <main className='fullDiv'>
            <div className='leftSideBarDiv'></div>

            <div className='rightSideBarDiv'>
                <article className='welcomeDiv'></article>

                <article className='transactionHistiorDiv'>
                    <div className='RoundDiv'></div>
                    <p>Transaction History</p>
                </article>

                <article className='dateDiv'>
                    <div className='rectangleTransactionDiv'>
                        <p>All</p>
                        <p>Transfer</p>
                        <p>Withdraw</p>
                        <p>Deposit</p>
                        <p>Electronics</p>
                        <p>Betting</p>
                        <p>Airtime</p>
                    </div>
                </article>

                <div className='TodayDiv'><p>Today</p></div>
                <article className='historyDivMain'>
                    <div className='historPararaph'>
                        <div className='cardItem'>
                            <article className='round01Div'></article>
                            <article className='wordsDiv'>
                                <samp style={{ fontWeight: "bold" }}>Transfer</samp>
                                <samp>Jan 18th,2024 02:20:33</samp>
                            </article>

                            <article className='amountDiv'>
                                <samp style={{ fontWeight: "bold" }}>N600.00</samp>
                                <samp style={{ color: "green" }}>Succesful</samp>
                            </article>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}

export default History