/*eslint-disable*/
import { AppContext } from '../components/App'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import '../assets/styles/createRoom.css'
import createNewRoomCallback from '../util/createNewRoom'
import {fetchQuestionData} from '../util/fetchQuestionData'
import PlayerQuestion from '../components/PlayerQuestion'
import { voteMcq } from '../util/voteMcq'
import createNewRoom from "../util/createNewRoom";
import {createMcqQuestion} from "../util/createMcqQuestion";
import {loginuser} from "../util/loginuser"
export default function LoginUser(){

    useContext(AppContext)
      return (
          <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <a className="navbar-brand" href="/">PollMe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contactus">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Login</a> </li>
                        </ul>
                    </div>
                </div>
    </nav>


    <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">

                    <div className="col-lg-6">
                 <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                        <h3 className="mb-0 mr-4 mt-2">Login to your account</h3>
                    </div>
                    <div className="row px-3 mb-4">
                        <div className="line"></div>
                    </div>
                    <div className="row px-3">
                       <label className="mb-1"><h4 className="mb-0 text-sm">Username</h4></label>
                        <input
                              type='text'
                              className='mb-4'
                              placeholder='Enter username..'

                        />
                    </div>
                  <div className="row px-3">
                       <label className="mb-1"><h4 className="mb-0 text-sm">Password</h4></label>
                        <input
                              type='password'
                              className='mb-4'
                              placeholder='Enter password..'

                        />
                    </div>


                 {/*
                  <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center">Login</button> </div>
                 */}

                    <div className='row mb-3 px-3'>

              <div
              className="get-started btn btn-primary btn-lg px-4 me-sm-3 hover:shadow-lg ease-linear transition-all duration-150" >
                Login
              </div>

                    </div>

                </div>
            </div>


            <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                        <div className="row">
                        <img

    src={require('assets/img/pattern_react.png').default}
    alt='...'
  />  </div>
                        <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> </div>
                    </div>
                </div>


                </div>
            </div>
    </section>



    </>
      )

}
