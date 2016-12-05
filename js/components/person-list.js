import React from 'react';
import Person from './person';

//props
export default function PersonList() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                    imageUrl="https://scontent.cdninstagram.com/t51.2885-19/11377856_626372960798542_1396263462_a.jpg"
                    job="Male model" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
}

// Person.defaultProps = {
//     imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
// };

// export default function PersonList() {
//     return (
//         <div className="person-list">
//             <Person />
//             <Person />
//             <Person />
//             <Person />
//             <Person />
//         </div>
//     );
// }

//stateless component
// export default function PersonList() {
//     const people = [];
//     for (let i=0; i<5; i++) {
//         people.push(<Person />);
//     }
//     return (
//         <div className="person-list">
//             {people}
//         </div>
//     );
// }

//stateful component method
// export default class PersonList extends React.Component {
//     render() {
//         const people = [];
//         for (let i=0; i<5; i++) {
//             people.push(<Person />);
//         }
//         return (
//             <div className="person-list">
//                 {people}
//             </div>
//         );
//     }
// }