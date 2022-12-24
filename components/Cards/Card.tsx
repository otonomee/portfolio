import { render } from "@headlessui/react/dist/utils/render";
import Image from "next/image";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Card(props:any) {
//     return (
//         <div className="flex-column shadow-lg h-15 text-center">
//             <Image height="250" width="250" src={props.img} className="relative m-auto" alt="any" objectFit="cover"></Image>
//             <button>Test</button>
//             </div>
//         )
// }

export default function MyCard(props: any) {
    return (
        <button data-bs-toggle="modal" data-bs-target={props.dataTarget} >
            <Card className={props.className} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>


                </Card.Body>
            </Card>
        </button>
    );
}
