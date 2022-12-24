import Head from 'next/head'
import Nav from '../components/Navigation/Navigation'
import MyCard from '../components/Cards/Card'
import avatar from '../public/avatar.png'
import Image from "next/image";
import Modal from "react-bootstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { aaudio_1 } from '../public'
import { aaudio_2 } from '../public'
import { aaudio_3 } from '../public'
import { aaudio_4 } from '../public'
import { schoolmusicsite_1 } from '../public'
import { schoolmusicsite_2 } from '../public'
import { schoolmusicsite_3 } from '../public'
import { schoolmusicsite_4 } from '../public'
import { coffeeshop1 } from '../public'
import { coffeeshop2 } from '../public'
import { useEffect } from 'react';
import * as $ from 'jquery'



export default function Home() {



  return (
    <div>
      <Head>
        <title>Austin's Portfolio</title>
        <meta name="description" content="Austin Allen Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav></Nav>
        <section className="bg-blue-100">
          <div className="flex flex-col text-center p-10 py-10">


            <Image height="250" width="250" src={avatar} className="relative m-auto rounded-full" alt="any" objectFit="cover"></Image>
            <h2 className="text-14xl py-2 text-cyan-200 float-right font-medium dark:text-cyan-800 md:text-6xl block">
              Hello, I'm Austin Allen
            </h2>

            <h3 className="text-4xl py-2 dark:text-slate-700 md:text-2xl block">
              Front-end web developer and UI/UX designer.
            </h3>
            <h5 className="w-96 text-sm self-center py-2 dark:text-slate-400 block">
              2019 B.S. in Information Systems Management at Northern Arizona University
            </h5>
          </div>


        </section>

        <section>
          <h2 className="text-center my-5 text-14xl text-cyan-600">Browse My Portfolio</h2>
          <div className='flex flex-col my-8 space-x-2 items-center'>
            <div className="mx-10" id="gallery">
              <div className="flex flex-row col-12 col-sm-6 col-lg-3 mb-12">
                <MyCard className="hover:opacity-90 inline-block" dataTarget="#aaudio_modal" src={aaudio_1}></MyCard>
                <h2 className="inline-block float-right">Lorem ipsum</h2>
              </div>

              <div className="col-12 col-sm-6 col-lg-3 mb-12">
                <MyCard className="hover:opacity-70" dataTarget="#coffeeshop_modal" src={coffeeshop1}></MyCard>
              </div>

              <div className="col-12 col-lg-3">
                <MyCard dataTarget="#schoolsite_modal" src={schoolmusicsite_1}></MyCard>
              </div>
            </div>

            <div className="modal fade" id="aaudio_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body flex flex-row">

                    <Carousel interval={null} variant="dark">

                      <Carousel.Item>
                        <Carousel.Caption>
                          {/* <div className="inline-block slide-info float-right ml-10"> */}
                          <h3 className="text-white">Home page</h3>

                          {/* </div> */}
                        </Carousel.Caption>
                        <img
                          className="w-screen"
                          src={aaudio_1}
                          alt="First slide"
                        />



                      </Carousel.Item>

                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={aaudio_2}
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h3>Sign up page</h3>
                          <p>User signs for account so they can receive service from site</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={"d-block w-100"}
                          src={aaudio_3}
                          alt="Third slide"
                        />


                      </Carousel.Item>
                    </Carousel>
                    {/* <Carousel dynamicHeight>
                      <div>
                        <p className="legend">Home page</p>
                        <img src={aaudio_1} />
                      </div>

                      <div>
                        <img src={aaudio_2} />
                        <p className="legend">Sign Up Page</p>
                      </div>
                      <div>
                        <img src={aaudio_3} />
                        <p className="legend">Before and After Sample Page</p>
                      </div>
                      <div>
                        <img src={aaudio_4} />
                        <p className="legend">Pricing Page</p>
                      </div>
                    </Carousel> */}
                  </div>
                </div>
                <div className="modal-footer cursor-auto">
                  <button role="button" className="btn btn-secondary cursor-pointer" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>


            <div className="modal fade" id="schoolsite_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Carousel interval={null}>
                      <div>
                        <p className="legend">Home page</p>
                        <img src={schoolmusicsite_1} />
                      </div>

                      <div>
                        <img src={schoolmusicsite_2} />
                        <p className="legend">Sign Up Page</p>
                      </div>
                      <div>
                        <img src={schoolmusicsite_3} />
                        <p className="legend">Before and After Sample Page</p>
                      </div>
                      <div>
                        <img src={schoolmusicsite_4} />
                        <p className="legend">Pricing Page</p>
                      </div>
                    </Carousel>
                  </div>
                </div>
                <div className="modal-footer cursor-auto">
                  <button role="button" className="btn btn-secondary cursor-pointer" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="coffeeshop_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Carousel interval={null} variant="dark">

                      <Carousel.Item>
                        {/* <Carousel.Caption>

                        </Carousel.Caption> */}
                        <img src={coffeeshop2} />

                        <h3 className="text-xl text-center">Shopping cart/add to cart system</h3>
                      </Carousel.Item>

                      <Carousel.Item>
                        <img src={coffeeshop1} />

                      </Carousel.Item>

                    </Carousel>
                  </div>
                </div>
                <div className="modal-footer cursor-auto">
                  <button role="button" className="btn btn-secondary cursor-pointer" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>


          </div>
        </section>

      </main>

    </div >
  )
}
