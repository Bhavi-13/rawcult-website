import React, { useState } from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

function CheckOut() {
    const [slide, setSlide] = useState(1);
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('');
    const cartItems = [
        // Your cart items data here
    ];

    const handleNext = () => {
        if (slide === 1) {
            setSlide(2);
        } else if (slide === 2) {
            setSlide(3);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            {slide === 1 && (
                <Slide1
                    setAddress={setAddress}
                    setMobile={setMobile}
                    onNext={handleNext}
                />
            )}
            {slide === 2 && (
                <Slide2
                    selectedPayment={selectedPayment}
                    setPayment={setSelectedPayment}
                    onNext={handleNext}
                />
            )}
            {slide === 3 && <Slide3 cartItems={cartItems} />}
        </div>
    );
}

export default CheckOut;
