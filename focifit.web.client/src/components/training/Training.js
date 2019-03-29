import React from 'react';
import './training.css';
import Scroll from '../common/Scroll';
import WgerService from '../../services/WgerService';
import {
   SHOULDERS,
   BICEPS,
   CALVES,
   TRICEPS,
   GLUTES,
   BACK,
   ABS,
   HAMSTRINGS,
   CHEST,
   QUADS
} from '../../services/musclesConstants';

class Training extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         muscle: CHEST,
         exerciseCount: 0,
         exercises: [],
         equipment: []
      };
   }
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

      WgerService.ReadAllEquipment(this.onSuccessEquipment, this.onError);
   }

   onSuccessEquipment = response => {
      console.log('equipment', response);
      this.setState({ equipment: response.data.result }, () => {
         WgerService.ReadExerciseByMuscle(this.state.muscle, this.onSuccess, this.onError);
      });
   };

   handleClick = event => {
      console.log('CLICKLED');
      this.setState({ exercises: [] }, () => {});
      WgerService.ReadExerciseByMuscle(event.target.id, this.onSuccess, this.onError);
   };

   onSuccess = response => {
      console.log('success object', response);
      this.setState({ exerciseCount: response.data.count, exercises: response.data.results }, () => {});
   };

   // setEqupipmentStrings = data => {
   //    let equipment = [];
   //    console.log('equipmentsss', this.state.exercises)

   //    for(let i = 0; i < this.state.exercises.length; i++) {
   //       for(let j = 0; j < this.state.exercises.equipment.length; j++) {
   //          for(let k = 0; k < this.state.equipment.length; k++) {
   //             if(this.state.exercises.equipment[j] === this.state.equipment[k].id) {
   //                equipment.push(equipment[k].name);
   //             }
   //          }
   //       }
   //    }

   onError = error => {
      console.log(error);
   };

   render() {
      return (
         <div className="naccs">
            <div className="grid">
               <div className="gc gc--1-of-3">
                  <div className="menu">
                     <div id={CHEST} onClick={this.handleClick} className="active">
                        <span className="light" />
                        <span>Chest</span>
                     </div>
                     <div id={BACK} onClick={this.handleClick}>
                        <span className="light" />
                        <span>Back</span>
                     </div>
                     <div id={SHOULDERS} onClick={this.handleClick}>
                        <span className="light" />
                        <span>Shoulders</span>
                     </div>
                     <div id={QUADS} onClick={this.handleClick}>
                        <span className="light" />
                        <span>Quads</span>
                     </div>
                     <div id={HAMSTRINGS} onClick={this.handleClick}>
                        <span className="light" />
                        <span>Hamstrings</span>
                     </div>
                     <div id={GLUTES} onClick={this.handleClick}>
                        <span className="light" />
                        <span>Glutes</span>
                     </div>
                     <div id={BICEPS} onClick={this.handleClick}>
                        <span className="light" />
                        <span>Biceps</span>
                     </div>
                     <div id={TRICEPS} onClick={this.handleClick}>
                        <span className="light" />
                        <span>Triceps</span>
                     </div>
                     <div id={ABS} onClick={this.handleClick}>
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
                              marginTop: '25px',
                              width: '550px'
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
                                 textAlign: 'left',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ width: '50%', textAlign: 'center' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ width: '40%', textAlign: 'center' }}>
                                 <span>Equipment</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    {this.state.exercises.map(exercise => {
                                       return (
                                          <tr>
                                             <td style={{ borderRight: '1px solid rgba(220,220,220, .1)' }}>
                                                <h3>{exercise.name}</h3>
                                             </td>
                                             <td style={{ width: '40%' }} />
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px',
                              width: '550px'
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
                                 textAlign: 'left',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ width: '50%', textAlign: 'center' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ width: '40%', textAlign: 'center' }}>
                                 <span>Equipment</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    {this.state.exercises.map(exercise => {
                                       return (
                                          <tr>
                                             <td style={{ borderRight: '1px solid rgba(220,220,220, .1)' }}>
                                                <h3>{exercise.name}</h3>
                                             </td>
                                             <td style={{ width: '40%' }} />
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px',
                              width: '550px'
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
                                 textAlign: 'left',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ width: '50%', textAlign: 'center' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ width: '40%', textAlign: 'center' }}>
                                 <span>Equipment</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    {this.state.exercises.map(exercise => {
                                       return (
                                          <tr>
                                             <td style={{ borderRight: '1px solid rgba(220,220,220, .1)' }}>
                                                <h3>{exercise.name}</h3>
                                             </td>
                                             <td style={{ width: '40%' }} />
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px',
                              width: '550px'
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
                                 textAlign: 'left',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ width: '50%', textAlign: 'center' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ width: '40%', textAlign: 'center' }}>
                                 <span>Equipment</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    {this.state.exercises.map(exercise => {
                                       return (
                                          <tr>
                                             <td style={{ borderRight: '1px solid rgba(220,220,220, .1)' }}>
                                                <h3>{exercise.name}</h3>
                                             </td>
                                             <td style={{ width: '40%' }} />
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px',
                              width: '550px'
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
                                 textAlign: 'left',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ width: '50%', textAlign: 'center' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ width: '40%', textAlign: 'center' }}>
                                 <span>Equipment</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    {this.state.exercises.map(exercise => {
                                       return (
                                          <tr>
                                             <td style={{ borderRight: '1px solid rgba(220,220,220, .1)' }}>
                                                <h3>{exercise.name}</h3>
                                             </td>
                                             <td style={{ width: '40%' }} />
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px',
                              width: '550px'
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
                                 textAlign: 'left',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ width: '50%', textAlign: 'center' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ width: '40%', textAlign: 'center' }}>
                                 <span>Equipment</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    {this.state.exercises.map(exercise => {
                                       return (
                                          <tr>
                                             <td style={{ borderRight: '1px solid rgba(220,220,220, .1)' }}>
                                                <h3>{exercise.name}</h3>
                                             </td>
                                             <td style={{ width: '40%' }} />
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px',
                              width: '550px'
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
                                 textAlign: 'left',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ width: '50%', textAlign: 'center' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ width: '40%', textAlign: 'center' }}>
                                 <span>Equipment</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    {this.state.exercises.map(exercise => {
                                       return (
                                          <tr>
                                             <td style={{ borderRight: '1px solid rgba(220,220,220, .1)' }}>
                                                <h3>{exercise.name}</h3>
                                             </td>
                                             <td style={{ width: '40%' }} />
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px',
                              width: '550px'
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
                                 textAlign: 'left',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ width: '50%', textAlign: 'center' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ width: '40%', textAlign: 'center' }}>
                                 <span>Equipment</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    {this.state.exercises.map(exercise => {
                                       return (
                                          <tr>
                                             <td style={{ borderRight: '1px solid rgba(220,220,220, .1)' }}>
                                                <h3>{exercise.name}</h3>
                                             </td>
                                             <td style={{ width: '40%' }} />
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                           </Scroll>
                        </div>
                     </li>
                     <li>
                        <div
                           style={{
                              color: 'white',
                              marginTop: '25px',
                              width: '550px'
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
                                 textAlign: 'left',
                                 background: 'rgba(0, 0, 0, .7)'
                              }}
                           >
                              <div style={{ width: '50%', textAlign: 'center' }}>
                                 <span>Name</span>
                              </div>
                              <div style={{ width: '40%', textAlign: 'center' }}>
                                 <span>Equipment</span>
                              </div>
                           </div>
                           <Scroll>
                              <table style={{ marginTop: '0px', width: '100%' }}>
                                 <tbody>
                                    {this.state.exercises.map(exercise => {
                                       return (
                                          <tr>
                                             <td style={{ borderRight: '1px solid rgba(220,220,220, .1)' }}>
                                                <h3>{exercise.name}</h3>
                                             </td>
                                             <td style={{ width: '40%' }} />
                                          </tr>
                                       );
                                    })}
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
