import React, { useState } from 'react';
import data from '../../JSON/data.json';
import Card from '../Card/Card';

const FoodSelection = () => {

    const foodData = data;
    const breakfast = foodData.filter((e) =>
        e.catagory === 'breakfast'
    );

    const lunch = foodData.filter((e) =>
        e.catagory === 'lunch'
    );

    const dinner = foodData.filter((e) =>
        e.catagory === 'dinner'
    );


    const [card, setCard] = useState(lunch);

    const [btnStyle, setBtnStyle] = useState({
        
        breakfast : {},
        lunch : {
            "color": "#f83447",
            "borderBottom": "2px solid #f83447"
        },
        dinner : {}
    });

    

    

    const handleClick = (e) => {
            if(e.target.value === 'breakfast'){
                setCard(breakfast);

                const Style = {
                    breakfast : {
                        "color": "#f83447",
                        "borderBottom": "2px solid #f83447"
                    },
                    lunch : {},
                    dinner : {}
                }

                setBtnStyle(Style);
            }
            if(e.target.value === 'lunch'){
                setCard(lunch);
                const Style = {
                    breakfast : {},
                    lunch : {
                        "color": "#f83447",
                        "borderBottom": "2px solid #f83447"
                    },
                    dinner : {}
                }

                setBtnStyle(Style);
            }
            if(e.target.value === 'dinner'){
                setCard(dinner);
                const Style = {
                    breakfast : {},
                    lunch : {},
                    dinner : {
                        "color": "#f83447",
                        "borderBottom": "2px solid #f83447"
                    }
                }

                setBtnStyle(Style);
            }
    }

    

    return (

        <div className='pb-10 h-auto space'>
            
            <div  className='flex justify-center space-x-6 pt-5 pb-8 font font-semibold text-gray-700 text-xl  items-center flex-row' style={{fontFamily : 'Bebas Neue, cursive'}}>

                <button onClick={handleClick} value='breakfast'  className=' p-2  tracking-wide' style={btnStyle.breakfast}>BREAKFAST</button>
                <button onClick={handleClick} value='lunch' className='p-2 tracking-wide' style={btnStyle.lunch}>LUNCH</button>
                <button onClick={handleClick} value='dinner' className='p-2 tracking-wide ' style={btnStyle.dinner}>DINNER</button>
            </div>

            <div className='flex flex-wrap justify-between px-36 flex-row'>
                    {
                        card.map((cards) => <Card value={cards}></Card> )
                    }
            </div>

            <div className=' flex justify-center items-center pt-6'>
                <button className='text-white text-xl w-72 h-12 bg-gray-400 rounded-md' style={{"fontFamily" : 'Bebas Neue'}}>CHECKOUT YOUR FOOD</button>
                
            </div>

        </div>
    );
};

export default FoodSelection;