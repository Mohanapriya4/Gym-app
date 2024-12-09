import { delay } from 'framer-motion'
import Image1 from '../Components/Assets/yogaa1.jpg'
import Image2 from '../Components/Assets/yoga2.png'
import Image3 from '../Components/Assets/yoga3.jpg'
import Image4 from '../Components/Assets/fitness.jpg'
import Image5 from '../Components/Assets/fitness2.jpg'
import Image6 from '../Components/Assets/muscle-1.png'
import Image7 from '../Components/Assets/muscle-2.jpg'


export const NavbarMenu=[
    {
        id:1,
        title:"Home",
        link:"/"
    },
    {
        id:2,
        title:"Trainer",
        link:"#"
    },
    {
        id:3,
        title:"Program",
        link:"#"
    },
    {
        id:4,
        title:"Blogs",
        link:"#"
    },
    {
        id:5,
        title:"Pricing",
        link:"#"
    }
]

export const ProductsData = [
    {
        id:1,
        category:"Yoga",
        image:Image1,
        title:"Yoga for the Soul",
        info:"info",
        price:"$100"
    },
    {
        id:2,
        category:"Fitness",
        image:Image4,
        title:"Barbell",
        info:"info",
        price:"$100"
    },
    {
        id:3,
        category:"Yoga",
        image:Image2,
        title:"Adho Mukha Svanasana",
        info:"info",
        price:"$100"
    },
    {
        id:4,
        category:"Fitness",
        image:Image5,
        title:"treadmill",
        info:"info",
        price:"$100"
    },
    {
        id:5,
        category:"Muscles",
        image:Image6,
        title:"Lat pulldown",
        info:"info",
        price:"$100"
    },
    {
        id:6,
        category:"Muscles",
        image:Image7,
        title:"Chest workout",
        info:"info",
        price:"$100"
    },
    {
        id:7,
        category:"Yoga",
        image:Image3,
        title:"Virabhadrasana",
        info:"info",
        price:"$100"
    },
]

export const FeedbackData =[
        {
          id:1,
          name: "Aarav Sharma",
          text: "Joining this gym has been the best decision for my fitness journey. The trainers are incredibly supportive. I’ve seen amazing progress in just three months!",
          img:"https://picsum.photos/200/300?random=1",
          delay:0.2
        },
        { 
          id:2,
          name: "Sofia Patel",
          text: "I love the variety of classes offered here, from yoga to high-intensity workouts. The flexible schedule and clean environment make it a pleasure to work out every day!",
          img:"https://picsum.photos/200/300?random=2",
          delay:0.5
        },
        {
          id:3,
          name: "Rohan Verma",
          text: "The atmosphere at this gym is so motivating! The staff is friendly, and I appreciate the personalized workout plans tailored to my goals.",
          img:"https://picsum.photos/200/300?random=3",
          delay:0.8
        },
        {
          id:4,
          name: "Maya Iyer",
          text: "The gym is spacious, well-maintained, and equipped with everything you need. The group classes are my favorite—they’re fun and challenging!",
          img:"https://picsum.photos/200/300?random=4",
          delay:1.1
        }
      
]