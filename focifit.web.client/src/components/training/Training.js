import React from 'react';
import './training.css';
import Scroll from '../common/Scroll';
class Training extends React.Component {
   componentDidMount() {
      let divs = document.querySelectorAll('.naccs .menu div');
      let lis = document.querySelectorAll('.naccs ul li');
      console.log(divs);
      for (let i = 0; i < divs.length; i++) {
         divs[i].addEventListener('click', function() {
            if (!divs[i].classList.contains('active')) {
               for (let j = 0; j < divs.length; j++) {
                  divs[j].classList.remove('active');
                  lis[j].classList.remove('active');
               }
               divs[i].classList.add('active');
               lis[i].classList.add('active');
            }
         });
      }
   }

   render() {
      return (
         <div className="naccs">
            <div className="grid">
               <div className="gc gc--1-of-3">
                  <div className="menu">
                     <div className="active">
                        <span className="light" />
                        <span>Chest</span>
                     </div>
                     <div>
                        <span className="light" />
                        <span>Back</span>
                     </div>
                     <div>
                        <span className="light" />
                        <span>Shoulders</span>
                     </div>
                     <div>
                        <span className="light" />
                        <span>Quads</span>
                     </div>
                     <div>
                        <span className="light" />
                        <span>Hamstrings</span>
                     </div>
                     <div>
                        <span className="light" />
                        <span>Glutes</span>
                     </div>
                     <div>
                        <span className="light" />
                        <span>Biceps</span>
                     </div>
                     <div>
                        <span className="light" />
                        <span>Triceps</span>
                     </div>
                     <div>
                        <span className="light" />
                        <span>Abs</span>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center' }} className="gc gc--2-of-3">
                  <ul className="nacc">
                     <li className="active">
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px'
                           }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 width: '100%',
                                 marginBottom: '5px',
                                 padding: '10px 0px',
                                 borderRadius: '2px',
                                 boxShadow: '3px 3px 20px rgba(0, 0, 0, .8)',
                                 textAlign: 'center',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Equipment</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Secondary</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px'
                           }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 width: '100%',
                                 marginBottom: '5px',
                                 padding: '10px 0px',
                                 borderRadius: '2px',
                                 boxShadow: '3px 3px 20px rgba(0, 0, 0, .8)',
                                 textAlign: 'center',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Equipment</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Secondary</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px'
                           }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 width: '100%',
                                 marginBottom: '5px',
                                 padding: '10px 0px',
                                 borderRadius: '2px',
                                 boxShadow: '3px 3px 20px rgba(0, 0, 0, .8)',
                                 textAlign: 'center',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Equipment</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Secondary</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px'
                           }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 width: '100%',
                                 marginBottom: '5px',
                                 padding: '10px 0px',
                                 borderRadius: '2px',
                                 boxShadow: '3px 3px 20px rgba(0, 0, 0, .8)',
                                 textAlign: 'center',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Equipment</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Secondary</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px'
                           }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 width: '100%',
                                 marginBottom: '5px',
                                 padding: '10px 0px',
                                 borderRadius: '2px',
                                 boxShadow: '3px 3px 20px rgba(0, 0, 0, .8)',
                                 textAlign: 'center',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Equipment</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Secondary</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px'
                           }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 width: '100%',
                                 marginBottom: '5px',
                                 padding: '10px 0px',
                                 borderRadius: '2px',
                                 boxShadow: '3px 3px 20px rgba(0, 0, 0, .8)',
                                 textAlign: 'center',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Equipment</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Secondary</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px'
                           }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 width: '100%',
                                 marginBottom: '5px',
                                 padding: '10px 0px',
                                 borderRadius: '2px',
                                 boxShadow: '3px 3px 20px rgba(0, 0, 0, .8)',
                                 textAlign: 'center',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Equipment</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Secondary</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px'
                           }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 width: '100%',
                                 marginBottom: '5px',
                                 padding: '10px 0px',
                                 borderRadius: '2px',
                                 boxShadow: '3px 3px 20px rgba(0, 0, 0, .8)',
                                 textAlign: 'center',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Equipment</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Secondary</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px'
                           }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 width: '100%',
                                 marginBottom: '5px',
                                 padding: '10px 0px',
                                 borderRadius: '2px',
                                 boxShadow: '3px 3px 20px rgba(0, 0, 0, .8)',
                                 textAlign: 'center',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Equipment</span>
                              </div>
                              <div style={{ padding: '0px 62px' }}>
                                 <span>Secondary</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                    <tr>
                                       <td>cell1</td>
                                       <td>cell2</td>
                                       <td>cell3</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      );
   }
}
export default Training;
