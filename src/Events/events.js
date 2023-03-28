// "id":{
//     "title": "",
//     "description": "",
//     "image": ,
//     "date": "",
//     "content": "",
// 
//     "sections": [
//          {"type":"",
//           "title":"Section Title",         
//           "data":[
//              card,
//              card,
//              ...
//          ]},
//          ...
//     ]
// 
//      if type=="TS" : card = { title , tubtitle }
//      if type=="PTS": card = { picture , title , subtitle }


// export const categories = [ 'events', 'competitions', 'workshops']

import case_samadhan_back from './banners/case_samadhan_back.png'
import case_samadhan_text from './banners/case_samadhan_text.png'
import case_samadhan from './banners/case_samadhan_full.png'
import rangreza_back from './banners/rangreza_back.png'
import rangreza_text from './banners/rangreza_text.png'
import rangreza from './banners/rangreza_full.png'
import satirical_spardha_back from './banners/satirical_spardha_back.png'
import satirical_spardha_text from './banners/satirical_spardha_text.png'
import satirical_spardha from './banners/satirical_spardha_full.png'
import social_sawaal_back from './banners/social_sawaal_back.png'
import social_sawaal_text from './banners/social_sawaal_text.png'
import social_sawaal from './banners/social_sawaal_full.png'
import social_tasveer_back from './banners/social_tasveer_back.png'
import social_tasveer_text from './banners/social_tasveer_text.png'
import social_tasveer from './banners/social_tasveer_full.png'
import rakshin from './banners/rakshin.png'
import rakshin_back from './banners/rakshin_back.png'
import rakshin_text from './banners/rakshin_text.png'

import art_e_deewar from './banners/art_e_deewar.png'
import art_e_deewar_back from './banners/art_e_deewar_back.png'
import art_e_deewar_text from './banners/art_e_deewar_text.png'
import coming_soon from './banners/coming_soon.png'
import gender_sensitization from './banners/gender_sensitization.png'
import gender_sensitization_text from './banners/gender_sensitization_text.png'
import gender_sensitization_back from './banners/gender_sensitization_back.png'



export const events = 
{
"nyayri_panel_discussion":{
    "title": "Nyayri Panel Discussion",
    "description": "",
    "image_back": coming_soon,
    // "image_text": null,
    "image": coming_soon,
    "date": "30th March",
    "time": "6pm - 7pm",
    "venue": "LH111",
    "content": "",
    "rank":"6",
    "time-order": "15",
    "category":"event",
    "register":null,
    "fields":[{title:"Your questions for panel",required:false}],
    "sections": []
    },

"aaghaaz":{
    "title": "Aaghaaz-e-kaizen",
    "description": "The opening ceremony of Kaizen",
    "image_back": coming_soon,
    // "image_text": null,
    "image": coming_soon,
    "date": "31st March",
    "time": "6:30pm - 8:30pm",
    "venue": "Seminar Hall",
    "content": "The opening ceremony of Kaizen will be commenced with the traditional inauguration by lighting the lamp, followed by a beautiful song by the students of NAB NGO and a cultural dance performance. The chief guest would deliver a speech, highlighting the importance of social service in our society. The official declaration of the start of the Kaizen will mark the beginning of a series of exciting events and activities planned for the duration of the fest.",
    "rank":"6",
    "time-order":"20",
    "category":"event",
    "register":null,
    "fields":[],
    "sections": []
},
"social_sawaal":{
    "title": "THE SOCIAL SAWAAL",
    "description": "A quizzing competition for school students to encourage young minds",
    "image_back": social_sawaal_back,
    "image_text": social_sawaal_text,
    "image": social_sawaal,
    "date": "1st April",
    "time": "11:00am - 1:30pm",
    "venue": "LH121",
    "content": "A quizzing competition for school students, is a flagship event at Kaizen '23, where we encourage young minds to become aware of the social aspects of humanity and compete against the brightest minds in the NCR region",
    "rank":"2",
    "time-order":"30",
    "category":"competition",
    "register":null,
    "fields":[],
    "sections": []
},     
"social_convention":{
    "title": "SOCIAL CONVENTION",
    "description": "SevaSummit: The Social Symposium",
    "image_back": coming_soon,
    "image_text": null,
    "image": coming_soon,
    "date": "1st April",
    "time": "10:30am - 1pm",
    "venue": "Seminar Hall",
    "content": "SevaSummit: The Social Symposium",
    "rank":"61",
    "time-order":"40",
    "category":"event",
    "register":null,
    "fields":[],
    "sections": []
},
"ingenious_geeks":{
    "title": "INGENIOUS GEEKS 2.0",
    "description": "A science exhibition competition for school students to showcase their creative innovative mind",
    "image_back": coming_soon,
    "image_text": null,
    "image": coming_soon,
    "date": "1st April",
    "time": "11:00am - 1:00pm",
    "venue": "LHC Center",
    "content": "A science exhibition competition for school students to showcase their creative innovative mind",
    "rank":"9",
    "time-order":"50",
    "category":"competition",
    'rulebook':'https://drive.google.com/file/d/12d7VWu8OWXT8DI-Z5DiQjP1bNRd5zmoQ/view?usp=share_link',
    "register":null,
    "fields":[],
    "sections": []
},
"soch":{
    "title": "SOCH",
    "description": " A workshop on Gender Sensitization",
    "image_back": gender_sensitization_back,
    "image_text": gender_sensitization_text,
    "image": gender_sensitization,
    "date": "1st April",
    "time": "2:00pm - 3:00pm",
    "venue": "LH-408",
    "content": "This workshop will be based on Gender Sensitization, where we’ll discuss about all about different types of Gender, Myths & Facts about LGBTQ+ Community and intreact with speakers from the community.",
    "rank":"1",
    "time-order":"60",
    "category":"workshop", 
    "register":null,
    "fields": [],
    "sections": [],
    'whatsapp':"http://chat.whatsapp.com/FnRsRtn3Kf10SAmrsMNpVa"
},
"sakshi":{
    "title": "SAKSHI",
    "description": "A workshop on Stop Child Sexual Abuse",
    "image_back": rakshin_back,
    "image_text": rakshin_text,
    "image": rakshin,
    "date": "1st April",
    "time": "11:00am - 12:30pm",
    "venue": "LH-418",
    "content": "Sakshi NGO is a non-profit organization based in India that focuses on providing education, healthcare, and empowerment programs for underprivileged children and women in rural areas. Their aim is to create sustainable development and improve the quality of life for marginalized communities.Sakshi will be conducting a workshop.Topic - Stop Child Sexual Abuse POCSO Act 2012",
    "rank":"0",
    "time-order":"70",
    "category":"workshop",
    "register":null,
    // "contact":["Parth Soni:  +91 9116535915","Shriya Gharat: +91 9834169551"],
    // "deadline":"March 28th, 2023, 11:59 PM",
    "fields":[],
    "sections": [],
    'whatsapp':"https://chat.whatsapp.com/C5rwUvYimfxDqNF3GO9qWp"
},
"yuva_chetna":{
    "title": "YUVA CHETNA",
    "description": "Panel discussion on Youth Engagement in Social Work",
    "image_back": coming_soon,
    "image_text": null,
    "image": coming_soon,
    "date": "1st April",
    "time": "4:00pm - 5:00pm",
    "venue": "Seminar Hall",
    "content": "The event Yuva Chetna is a panel discussion featuring IAS and IPS officers, aiming to encourage youth to become active agents of change and participate in addressing critical issues in society. The discussion will inspire young people to use their skills and knowledge to make a difference in their communities. ",
    "rank":"612",
    "time-order":"80",
    "category":"event",
    "register":null,
    "fields":[],
    "sections": []
},
// "style_green":{
//     "title": "STYLE GREEN",
//     "description": "A stage to exhibit recyclable and sustainable fashion",
//     "image_back": coming_soon,
//     "image_text": null,
//     "image": coming_soon,
//     "date": "1st April",
//     "time": "7:00pm - 9:30pm",
//     "venue": "LH114, 108, 111",
//     "content": "A stage to exhibit recyclable and sustainable fashion.",
//     "rank":"11",
//     "time-order":"90",
//     "category":"competition",
//     "rulebook":'',
//     "register":null,
//     "fields":[],
//     "sections": []
// },

"case_samadhan":{
    "title": "CASE SAMADHAN",
    "description": "A social case study competition to address real-world problems through critical thinking and innovation",
    "image_back": case_samadhan_back,
    "image_text": case_samadhan_text,
    "image": case_samadhan,
    "date": "2nd April",
    "time": "10:00 am - 1:00 pm",
    "venue": "LH-308",
    "content": "A social case study competition to address real-world problems through critical thinking and innovation",
    "rank":"4",
    "time-order":"100",
    "category":"competition",
    "rulebook": "https://www.canva.com/design/DAFbfwBMwX0/j0J_fWp93dn1yGr62G2DHw/edit?utm_content=DAFbfwBMwX0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    "register":null,
    "register-text":"Register as audience",
    "fields":[],
    "sections": []
},
"goonj":{
    "title": "GOONJ",
    "description": "A workshop on Menstrual Health & Hygiene",
    "image_back": coming_soon,
    "image_text": null,
    "image": coming_soon,
    "date": "2nd April",
    "time": "1:00pm - 2:00pm",
    "venue": "LH-310",
    "content": "Goonj is a social organization based in India that aims to address the basic needs of underprivileged communities, such as clothing, sanitary pads, and school supplies, through a unique model of resource mobilization and distribution. They also provide disaster relief and rehabilitation programs during emergencies. Goonj will be conducting a workshop. Topic - Menstrual Health & Hygiene",
    "rank":"12",
    "time-order":"130",
    "category":"workshop",
    "register":null,
    "fields":[],
    "sections": [],
    'whatsapp':"https://chat.whatsapp.com/JKtXLxebalr77eQmWlY5op"
}, 
"shiksha_talk":{
    "title": "SHIKSHA TALK",
    "description": " Empowering Rural India Through Education",
    "image_back": coming_soon,
    "image_text": null,
    "image": coming_soon,
    "date": "2nd April",
    "time": "11:00am - 12:00pm",
    "venue": "Seminar Hall",
    "content": "The event will host a panel discussion with renowned and respected educators who have experience working with rural communities. They will discuss the challenges faced by rural areas in accessing education and share innovative approaches to improving education outcomes.        ",
    "rank":"631",
    "time-order":"120",
    "category":"event",
    "register":null,
    "fields":[{title:"Your questions for panel",required:false}],
    "sections": []
},
"sociopreneur_samvad":{
    "title": "SOCIOPRENEUR SAMVAD",
    "description": "Pioneering change through Innovation",
    "image_back": coming_soon,
    "image_text": null,
    "image": coming_soon,
    "date": "2nd April",
    "time": "2:00pm - 3:30pm",
    "venue": "LH111",
    "content": "The Sociopreneur Samvad is an exciting event for those passionate about social entrepreneurship and making a positive impact on the society. The distinguished guests will provide their valuable personal experiences about the subject, the obstacles they faced and the solutions they utilized to overcome them. Join for an enlightening event!!",
    "rank":"601",
    "time-order":"140",
    "category":"event",
    "register":null,
    "fields":[{title:"Your questions for panel",required:false}],
    "sections": []
},

"satirical_spardha":{
    "title": "SATIRICAL SPARDHA",
    "description": "A parody making competition to bring attention to social issues and inspire positive change in our society",
    "image_back": satirical_spardha_back,
    "image_text": satirical_spardha_text,
    "image": satirical_spardha,
    "date": "2nd April",
    "time": "3:30pm - 5:30pm",
    "venue": "Seminar Hall",
    "content": "A parody is a creative work that imitates or mocks a well-known piece of art, literature, or music in a humorous way. Therefore, we are using the power of parody to bring attention to social issues and inspire positive change in our society            ",
    "rank":"5",
    "time-order":"150",
    "category":"competition",
    "register":null,
    "register-text":"Register as audience",    
    "fields":[],
    "sections": []
},
"social_tasveer":{
    "title": "SOCIAL TASVEER",
    "description": "A photo story competition on social issues to picture the change you want to see in the world",
    "image_back": social_tasveer_back,
    "image_text": social_tasveer_text,
    "image": social_tasveer,
    "date": "30th March",
    "time": "6:45pm - 8:45pm",
    "venue": "Online",
    "content": "A photostory competition on social issues to picture the change you want to see in the world",
    "rank":"4",
    "time-order":"10",
    "category":"competition",    
    "register":"https://unstop.com/competitions/social-tasveer-photostory-competition-kaizen23-iit-delhi-635027",
    "fields":[],
    "sections": []
},           
"closing_ceremony":{
    "title": "CLOSING CEREMONY",
    "description": "SevaSummit: The Social Symposium",
    "image_back": coming_soon,
    "image_text": null,
    "image": coming_soon,
    "date": "2nd April",
    "time": "6:00pm - 8:30pm",
    "venue": "Seminar Hall",
    "content": "The closing ceremony of the social festival Kaizen will be an amazing event, featuring a live painting by FACC, followed by a mesmerising music performance by Music club IITD, and a captivating guest performance.Also, the prize distribution ceremony, to recognize the participation of students. The chief guest will be Mr Shyam Sunder Paliwal, and the guest speakers will be Kirti Bharti and Aneesh Karma. The chief guest speech will culminate in a successful conclusion to the festival. The event will leave everyone motivated to continue their pursuit of growth and improvement.",
    "rank":"61",
    "time-order":"160",
    "category":"event",
    "register":null,
    "fields":[],
    "sections": []
},
"rangreza":{
    "title": "RANGREZA",
    "description": "Fashion Show",
    "image_back": rangreza_back,
    "image_text": rangreza_text,
    "image": rangreza,
    "date": "1st April",
    "time": "8:00 pm - 10:00 pm",
    "venue": "Dogra Hall",
    "content": "Fashion Show",
    "rank":"5",
    "time-order":"170",
    "category":"competition",
    "rulebook": "https://www.canva.com/design/DAFbfwBMwX0/j0J_fWp93dn1yGr62G2DHw/edit?utm_content=DAFbfwBMwX0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    "register":null,
    "register-text":"Register as audience",    
    "fields":[],
    "sections": []
},
"art-e-deewar":{
    "title": "Art-e-Deewar",
    "description": "A STREET ART COMPETITION",
    "image_back": art_e_deewar_back,
    "image_text": art_e_deewar_text,
    "image": art_e_deewar,
    "date": "2nd April",
    "time": "6:00pm - 8:30pm",
    "venue": null,
    "content": "A STREET ART COMPETITION",
    "rank":"3",
    "time-order":"160",
    "category":"competition",
    "register":null,
    "fields":[],
    "sections": []
}, 
}
