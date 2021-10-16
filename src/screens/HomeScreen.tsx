import {useState, useEffect, useMemo} from 'react';
import Header from '../components/Header/Header';
import { useQuery } from 'react-query';
import Loader from '../components/Loader/Loader';
import { useSelector} from 'react-redux';
import { RootState } from '../redux/store';
import { useHistory } from 'react-router-dom';

interface TimeInterFace {
    days?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
}

const HomeScreen = () => {
    const [timeLeft, setTimeLeft] = useState<TimeInterFace>(getTimeRemaining("December 31 2021"));
    const userLogin = useSelector((state: RootState) => state.userLogin)
    const { userInfo } = userLogin;
    const history = useHistory();

    if(!userInfo){
        history.push('/login')
    }

    useEffect(() => {
        const timer=setTimeout(() => {
            setTimeLeft(getTimeRemaining("December 31 2021"));
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    function getTimeRemaining(endtime: string){
        const total = Date.parse(endtime) - Date.parse(`${new Date()}`);
        const seconds = Math.floor( (total/1000) % 60 );
        const minutes = Math.floor( (total/1000/60) % 60 );
        const hours = Math.floor( (total/(1000*60*60)) % 24 );
        const days = Math.floor( total/(1000*60*60*24) );
        let timeLeft = {};

        if(total > 0){
            timeLeft = {
                days,
                hours,
                minutes,
                seconds
            };
        }
        return timeLeft
        
    }

//Usequery to fetch data from jsonplaceholder api
const { isLoading,  data } = useQuery('user', () =>
    fetch(`https://jsonplaceholder.typicode.com/users/1`).then(res =>
        res.json()
    )
    
)

// UseMemo to avoid rerendering of the image and the text
const result = useMemo(()=>{
    console.log(data);
    // console.error(error);
    return {
        id: data?.id,
        username: data?.company?.bs,
    }
},[data])


    return (
        <>
        <Header />
            <h4 className="py-4 text-center">VisionNFT will be open for trade in</h4>
            <section className="center_section">
                <div className="timer_container d-flex ">
                    <div className="timer_day d-flex flex-column justify-content-center align-items-center">
                        <span>{`${timeLeft.days}`}</span>
                        <span>Days</span>
                    </div>
                    :<div className="timer_day d-flex flex-column justify-content-center align-items-center">
                        <span>{`${timeLeft.hours}`}</span>
                        <span>Hours</span>
                    </div>
                    :<div className="timer_day d-flex flex-column justify-content-center align-items-center">
                        <span>{`${timeLeft.minutes}`}</span>
                        <span>Minutes</span>
                    </div>
                    :<div className="timer_day d-flex flex-column justify-content-center align-items-center">
                        <span>{`${timeLeft.seconds}`}</span>
                        <span>Seconds</span>
                    </div>
                </div>
            </section>
            {isLoading ? <Loader/> : <section className="center_section">
                <div>
                    <img src={`https://robohash.org/${result?.id}`} alt="visionNFT" />
                    <h4 className="py-4">{result?.username}</h4>
                </div>
            </section>}
        </>
    )
}

export default HomeScreen;