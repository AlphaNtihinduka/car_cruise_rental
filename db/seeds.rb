# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

users = User.create(name: "Natacha", email: "natacha@gmail.com", password: "natacha123")

cars = Car.create([
    { image: "/assets/Cruise-A.png" , name: "Cruise-A" , description:"Yellow fast Ford with a luxurious interior. Ready to give you the best comfort. ", price_per_day: 300.0 , user_id: 1 }, 

    { image: "/assets/Cruise-B.png" , name: "Cruise-B" , description:"Simple ashy-black BMW for your daily use.", price_per_day: 750.0 , user_id: 1 },

    { image: "/assets/Cruise-C.png" , name: "Cruise-C", description: "Red Range Rover Evoque with a beautiful interior.Ready to serve you on your special occasions." , price_per_day: 50.0 , user_id: 1 },
    
    { image: "/assets/Cruise-D.png" , name: "Cruise-D", description: "Deep red BMW M4. The best for that executive look.", price_per_day: 750.0  , user_id: 1 },

    { image: "/assets/Cruise-E.png" , name: "Cruise-E", description: "Silver BMW M140. The best for that executive look." , price_per_day: 20.0  , user_id: 1 },

    { image: "/assets/Cruise-F.png" , name: "Cruise-F", description: "White Ford . The best for your long distance trips." , price_per_day: 120.0  , user_id: 1 }, 

    { image: "/assets/Cruise-G.png" , name: "Cruise-G", description: "Deep red BMW M4. The best for that executive look. ", price_per_day: 750.0  , user_id: 1 },

    { image: "/assets/Cruise-H.png" , name: "Cruise-H", description: "White Range Rover Evoque with a beautiful interior.Ready to serve you on your special occasions." , price_per_day: 300.0 , user_id: 1 }, 

    { image: "/assets/Cruise-I.png" , name: "Cruise-I", description: "Silver BMW M5. The best for that luxurious look.", price_per_day: 1000.0  , user_id: 1 },

    { image: "/assets/Cruise-J.png" , name: "Cruise-J", description: "Blue BMW X6.The best for off-road journeys." , price_per_day: 500.0  , user_id: 1 }, 

    { image: "/assets/Cruise-K.png" , name: "Cruise-K", description: "White BMW M4.The best for sporty events.", price_per_day: 750.0  , user_id: 1 }, 

    { image: "/assets/Cruise-L.png" , name: "Cruise-L", description: "White BMW M5.The best for your family vacation." , price_per_day: 1000.0  , user_id: 1 }
   
 ])

 reservations = Reservation.create([
    { days: 5 , pick_date: "12/6/2022" , car_id: 3 , user_id: 1 }, 

    { days: 7, pick_date: "12/5/2022" , car_id: 6 , user_id: 1 },

    { days: 20 , pick_date: "12/6/2022" , car_id: 1 , user_id: 1 },  
       
 ])