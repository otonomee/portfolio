import Head from 'next/head'
import Nav from '../components/Navigation/Navigation'
import HeroSection from '../components/HeroSection/HeroSection'
import MyCard from '../components/Cards/Card'
import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/Footer'
import avatar from '../public/avatar.png'
import Image from "next/image";
import { Modal, Card, Button } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.min.css";
import aaudio_1 from '../public/aaudio-1.jpeg'
import aaudio_2 from '../public/aaudio-2.jpg'
import aaudio_3 from '../public/aaudio-3.jpg'
import aaudio_4 from '../public/aaudio-4.jpeg'
import schoolmusicsite_1 from '../public/virtualpiano-drumkit-1.png'
import schoolmusicsite_2 from '../public/virtualpiano-drumkit-2.png'
import schoolmusicsite_3 from '../public/virtualpiano-drumkit-3.png'
import schoolmusicsite_4 from '../public/virtualpiano-drumkit-4.png'
import coffeeshop1 from '../public/coffeeshop1.jpg'
import coffeeshop2 from '../public/coffeeshop2.jpg'
import { useEffect } from 'react';
import * as $ from 'jquery';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Austin Allen Portfolio</title>
        <meta name="description" content="Austin Allen Portfolio" />
        <link rel="icon" href="/avataricon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      </Head>

      <main>
        <Nav></Nav>
        <HeroSection />
        <section id="" className='bg-gray-800 pt-10'>
          <h2 className="line-divider bg-gray-800 "><span className="span-line-divider text-yellow-50 bg-gray-800">Projects / Portfolio</span></h2>

          <div className='bg-gray-800 flex flex-col space-x-2 items-center'>

            {/* COFFEE SHOP SITE */}
            <h3 className='text-center px-10 text-3xl -mt-5 text-yellow-50 font-thin italic'>Harry & Sally`&apos;`s Coffee Co.</h3>
            <span className='text-yellow-50 text-sm font-extralight -mt-3 mb-4'>(click images to expand)</span>
            <div className="flex image-cards">
              <button className="left-img mb-10 rounded-md bg-yellow-50" data-bs-toggle="modal" data-bs-target="#coffeeshop1_modal">
                <Card className="bg-yellow-600 rounded-xl">
                  <span className="image-lbl shadow-md text-gray-900 text-lg border-yellow-300 border-4 py-1 font-light rounded-md bg-transparent">Home page
                    <br /></span>
                  <Image className="card-image hover:opacity-80 rounded" src={coffeeshop1} alt='any' width='275' />
                </Card>

              </button>
              <button className="left-img mb-10 rounded-md bg-yellow-50 mt-[10px]" data-bs-toggle="modal" data-bs-target="#coffeeshop2_modal">
                <Card className="bg-yellow-600 rounded-xl">
                  <span className="image-lbl shadow-md text-gray-900 text-lg border-yellow-300 border-4 py-1 font-light rounded-md bg-transparent">Add to cart & checkout
                    <br /></span>
                  <Image className="card-image hover:opacity-80 rounded" src={coffeeshop2} alt='any' width='275' />
                </Card>
              </button>
            </div>

            {/* DIVIDER */}
            <hr style={{
              background: 'white',
              color: 'white',
              borderColor: 'white',
              height: '3px',
              width: '90%',
              marginBottom: '45px',
            }} />

            {/* AIRCRAFT AUDIO SITE */}

            <h3 className='text-center px-10 text-3xl -mt-5 text-yellow-50 font-thin italic'>Aircraft Audio Mastering</h3>
            <span className='text-white text-sm font-extralight -mt-3 mb-4'>(click images to expand)</span>
            <div className="flex flex-col image-cards place-items-start">
              <div className="flex flex-col flex-wrap justify-center items-start">
                <button className="left-img mb-10 rounded-md bg-yellow-50" data-bs-toggle="modal" data-bs-target="#aaudio1_modal">
                  <Card className="bg-yellow-600 rounded-xl">
                    <span className="image-lbl shadow-md text-gray-900 text-lg border-yellow-300 border-4 py-1 font-light rounded-md bg-transparent">Home Page
                      <br /></span>
                    <Image width='325' className="card-image hover:opacity-80 rounded" src={aaudio_1} alt='any' />
                  </Card>
                </button>

                <button className="left-img mb-10 rounded-md bg-yellow-50" data-bs-toggle="modal" data-bs-target="#aaudio4_modal">
                  <Card className="bg-yellow-600 rounded-xl">
                    <span className="image-lbl shadow-md text-gray-900 text-lg border-yellow-300 border-4 py-1 font-light rounded-md bg-transparent">Pricing Content
                      <br /></span>
                    <Image height='300' className="card-image hover:opacity-80 rounded" src={aaudio_4} alt='any' width='275' />
                  </Card>
                </button>
              </div>


              <button className="left-img mb-10 rounded-md bg-yellow-50" data-bs-toggle="modal" data-bs-target="#aaudio2_modal">
                <Card className="bg-yellow-600 rounded-xl">
                  <span className="image-lbl shadow-md text-gray-900 text-lg border-yellow-300 border-4 py-1 font-light rounded-md bg-transparent">Sign-Up Page
                    <br /></span>
                  <Image height='300' className="card-image hover:opacity-80 rounded" src={aaudio_2} alt='any' width='275' />
                </Card>
              </button>
            </div>

            {/* DIVIDER */}
            <hr style={{
              background: 'white',
              color: 'white',
              borderColor: 'white',
              height: '3px',
              width: '90%',
              marginBottom: '45px',
            }} />

            {/* SCHOOL MUSIC SITE */}

            <h3 className='text-center px-10 text-3xl -mt-5 text-yellow-50 font-thin italic'>Music Games & Activities</h3>
            <span className='text-white text-sm font-extralight -mt-3 mb-4'>(click images to expand)</span>
            <div className="flex flex-col image-cards place-items-start">
              <div className="flex flex-col flex-wrap justify-center items-start">
                <button className="left-img mb-10 rounded-md bg-yellow-50" data-bs-toggle="modal" data-bs-target="#schoolsite1_modal">
                  <Card className="bg-yellow-600 rounded-xl">
                    <span className="image-lbl shadow-md text-gray-900 text-lg border-yellow-300 border-4 py-1 font-light rounded-md bg-transparent">Interactive Keyboard
                      <br /></span>
                    <Image width='325' className="card-image hover:opacity-80 rounded" src={schoolmusicsite_1} alt='any' />
                  </Card>
                </button>

                <button className="left-img mb-10 rounded-md bg-yellow-50" data-bs-toggle="modal" data-bs-target="#schoolsite2_modal">
                  <Card className="bg-yellow-600 rounded-xl">
                    <span className="image-lbl shadow-md text-gray-900 text-lg border-yellow-300 border-4 py-1 font-light rounded-md bg-transparent">Interactive Drums
                      <br /></span>
                    <Image height='300' className="card-image hover:opacity-80 rounded" src={schoolmusicsite_2} alt='any' width='275' />
                  </Card>
                </button>
              </div>

              <div className="flex flex-col flex-wrap justify-center items-start mb-10">
                <button className="left-img mb-10 rounded-md bg-yellow-50" data-bs-toggle="modal" data-bs-target="#schoolsite3_modal">
                  <Card className="bg-yellow-600 rounded-xl">
                    <span className="image-lbl shadow-md text-gray-900 text-lg border-yellow-300 border-4 py-1 font-light rounded-md bg-transparent">Pitch Activity
                      <br /></span>
                    <Image height='300' className="card-image hover:opacity-80 rounded" src={schoolmusicsite_3} alt='any' width='275' />
                  </Card>
                </button>

                <button className="left-img mb-10 rounded-md bg-yellow-50" data-bs-toggle="modal" data-bs-target="#schoolsite4_modal">
                  <Card className="bg-yellow-600 rounded-xl">
                    <span className="image-lbl shadow-md text-gray-900 text-lg border-yellow-300 border-4 py-1 font-light rounded-md bg-transparent">Note Identification
                      <br /></span>
                    <Image height='300' className="card-image hover:opacity-80 rounded" src={schoolmusicsite_4} alt='any' width='275' />
                  </Card>
                </button>
              </div>
            </div>

            {/* DIVIDER */}
            <hr style={{
              background: 'white',
              color: 'white',
              borderColor: 'white',
              height: '3px',
              width: '90%',
              marginBottom: '45px',
            }} />



            {/* MODALS */}
            <div className="modal fade" id="coffeeshop1_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-20" style={{ width: '650px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={coffeeshop1} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="coffeeshop2_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-28" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={coffeeshop2} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="aaudio1_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-28" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={aaudio_1} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="aaudio2_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-28" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={aaudio_2} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="aaudio3_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-28" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={aaudio_3} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="aaudio4_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-28" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={aaudio_4} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="schoolsite1_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-28" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={schoolmusicsite_1} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="schoolsite2_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-28" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={schoolmusicsite_2} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="schoolsite3_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-28" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={schoolmusicsite_3} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

            <div className="modal fade" id="schoolsite4_modal" role="dialog" aria-hidden="true">
              <div className="modal-dialog" style={{ pointerEvents: "auto" }} role="document">
                <div className="modal-content -ml-28" style={{ width: '700px' }}>
                  <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Image src={schoolmusicsite_4} alt='any' width='1000' height='2000'></Image>
                  </div>
                </div>
                <div className="modal-footer cursor-auto -mr-20">
                  <button role="button" className="btn btn-secondary cursor-pointer w-32 bg-white text-black hover:opacity-90" aria-label="Close" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>


          </div>
        </section>

      </main>

      <div className="footer-container flex flex-col items-center">


        <div id='contact' className="block mt-2">
          <span className="block">Reach out <a href="mailto:austinrallen96@gmail.com">via email</a>, LinkedIn or Github!</span>
          <ul className="list-inline inline-flex">
            <li><a target="_blank" rel="noreferrer" href="https://github.com/otonomee"><i className="fa fa-github fa-fw bg-github-footer" aria-hidden="true"></i></a></li>

            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/austin-allen-a7129b116/"><i className="fa fa-linkedin fa-fw bg-linkedin-footer" aria-hidden="true"></i></a></li>

            <li><a target="_blank" rel="noreferrer" href="mailto:austinrallen96@gmail.com"><i className="fa fa-envelope-o fa-fw bg-envelope" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div >
  )
}
