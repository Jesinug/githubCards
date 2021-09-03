import Card from "../Card/Card";
import './CardList.css';


const CardList = (props) => (
    <div className='cardList'>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);

export default CardList;