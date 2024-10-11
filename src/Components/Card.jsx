import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard = ({ img, title }) => {
    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem', margin: "25px" }} className="text-center">
            <Card.Img variant="top" src={img} alt="Meme" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant="primary" onClick={() => navigate(`/edit/?url=${img}`)}>Edit</Button>
            </Card.Body>
        </Card>
    );
}

export default MemeCard;
