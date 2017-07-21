// jquery document on ready..
$(function() {

  function getDoctors() { //only returns the list of dummy doctors.
    return [
      {
        name: "Eric Meinhardt",
        reviewScore: 3.5,
        specialty: "Dermatologist",
        imageUrl: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAjJAAAAJDc4YzY3MTA5LTE5MmQtNGE2MC04NGVlLTU5OTg1OWE2YzZiMQ.jpg",
        details: "Dr. Meinhardt is a Board Certified Dermatologist and the founder and medical director of California Dermatology Specialists, a practice that is based on the concept that outstanding dermatologic care requires not only a correct diagnosis and treatment plan but also a strong patient-physician relationship.  Dr. Meinhardt is passionate about working with patients to develop individualized and easy to understand treatment plans."
      },
          {
        name: "Shamsa Amersi",
        reviewScore: 5,
        specialty: "Gynecologist",
        imageUrl: "https://doctorcareanywhere.com/media/1285/professional-london.png",
        details: "I am thrilled to share with you that we have opened our office door and are ready to have you visit us in our beautiful new office in Santa Monica. As a female obstetrician & gynecologist, I recognize the importance of providing the best personalized care for patients that encompass compassion, and comprehensive focused attention to all aspects of a woman's well being. Over the past year, it became very clear to me that in order to practice excellent medicine I needed to be in a setting where patients were given 100% access to me only, in lieu of being in an assembly line for whichever doctor was available, regardless of whether they knew you, your story and what truly matters to you."
      },
          {
        name: "Emily Bruckner",
        reviewScore: 4.2,
        specialty: "Pediatrician",
        imageUrl: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAANEAAAAJDZlZDJhNTNiLTI0MTUtNGM0ZC05ODkzLTdlMzBjYzczYjNlMA.jpg",
        details: "Emily Bruckner was born and raised in Sherman Oaks, California. Growing up as the daughter, niece, and sister of pediatricians, taking care of children and families has been a part of her life for as long as she can remember. She graduated Suma Cum Laude from Duke University with a Bachelors of Science in Psychology and Neuroscience.  She completed her medical training at UCLA School of Medicine, where she was selected to be a member of the Alpha Omega Alpha Honor Society. She then went on to complete her internship and residency in Pediatrics at Children's Hospital of Los Angeles, where her parents, uncle, and brother had all trained before her. After residency, she worked at Tribeca Pediatrics in Venice, California, before very happily joining the Westside Pediatrics team in 2015. "
      },
      {
        name: "Dorothy Klein",
        reviewScore: 5,
        specialty: "Pediatrician",
        imageUrl: "http://images.agoramedia.com/everydayhealth/gcms/DrMarlaDubinsky-200x200.jpg",
        details: "Dorothy Klein is a diplomate of the American Board of Pediatrics. She is originally from Virginia and received her undergraduate degree in Human Biology from Stanford University. She then graduated with honors from Tulane University School of Medicine in New Orleans. She came back to California to complete her internship and residency in Pediatrics at Mattel Children's Hospital at UCLA and Cedars Sinai Medical Center. After residency, Dr. Klein worked as an attending pediatric hospitalist at UCLA. Prior to joining Westside Pediatrics, she spent one year in the Outback of Australia working in rural and remote pediatric medicine with the Royal Flying Doctor Service. Along with her husband Patrick, and two boys, Kai and Ryan, she is happy to be home in Los Angeles."
      },
      {
        name: "Haleh Bakshandeh",
        reviewScore: 4,
        specialty: "Dermatologist",
        imageUrl: "https://storage.googleapis.com/treatspace-media/thumb1/u-45397/thumb1_0.png",
        details: "Dr. Bakshandeh treats skin conditions such as adult and teenage acne, eczema, scalp issues, such as alopecia and dandruff, hair and nail disorders, psoriasis, age spots/brown spots, sun damage, and skin cancer. She offers full body skin cancer screenings as well as mole removal and skin cancer surgery. Dr. Bakshandeh also treats expecting mothers, and practices pediatric dermatology. There are many skin conditions that are exclusive to this special group of patients."
      },
      {
        name: "Jade Singer",
        reviewScore: 2.7,
        specialty: "Gynecologist",
        imageUrl: "http://c3155192.r92.cf0.rackcdn.com/assets/uploads/agent/photo/24652/medium_449e7eefbe3ebae5daf9730d20d22728.jpg",
        details: "Jade has a unique ability to connect with her patients, from adolescence through menopause, providing them high-quality, state-of-the-art medical services in a caring and comfortable environment. Dedicated to the belief that she can be a part of each woman's quest for optimal health, she offers accurate information and encourages women to be active participants in decisions that are vital to their well-being. In addition, Jade is fully committed to the concept of prevention, encouraging her patients to make healthy choices in their daily lives."
      },
          {
        name: "Jennifer Keagle",
        reviewScore: 4.5,
        specialty: "Plastic surgeon",
        imageUrl: "https://storage.googleapis.com/treatspace-media/thumb1/u-116/thumb1_9.png",
        details: "Dedicated to building warm, open relationships with her patients, Dr. Jennifer Keagle is among the most credentialed of all Los Angeles plastic surgeons — outstanding among the few who are double board-certified, but also as one of the few women plastic surgeons in the area."
      },
      {
        name: "Daniel Yamini",
        reviewScore: 3.9,
        specialty: "Plastic surgeon",
        imageUrl: "https://www.kennedyhealthalliance.org/sites/default/files/styles/teaser/public/images/Pieretti_Anthony%28whitecoat%29.jpg?itok=hlDeMfuM&c=88452f60755abb4961cefc831efd8845",
        details: "Dr. Daniel Yamini grew up in Westlake Village, a northern suburb of Los Angeles. As a highly motivated and accomplished student, he was honored as the valedictorian at the top-ranked Westlake High School. That distinction, among others, earned him a scholarship to Stanford University to pursue his undergraduate education in biology and psychology. While at Stanford, Dr. Yamini focused on merging the study of human biology with adult and child psychology. In fact, Dr. Yamini was a part-time instructor at the prestigious Stanford Bing School for Children to study child behavior and development."
      },
      {
        name: "Rena Keynigshteyn",
        reviewScore: 4.6,
        specialty: "Pediatrician",
        imageUrl: "https://storage.googleapis.com/treatspace-media/thumb1/u-111/thumb1_12.png",
        details: "Dr. Rena Keynigshteyn is a pediatrician in Culver City, California. She is affiliated with multiple hospitals in the area, including Cedars-Sinai Medical Center and Saint John's Health Center. She is one of the doctors at Cedars-Sinai Medical Center and Saint John's Health Center who specialize in Pediatrics."
      },
      {
        name: "Lawrence Kagan",
        reviewScore: 2,
        specialty: "Dermatologist",
        imageUrl: "https://storage.googleapis.com/treatspace-media/thumb1/u-108/thumb1_7.png",
        details: "Lawrence Kagan is a UCLA honors graduate, with a Bachelors of Science degree in Biochemistry. He received his medical training at USC Keck School of Medicine, and completed his internship and residency in Pediatrics at Children's Hospital Los Angeles. In addition to passionately studying neonatal, general pediatric and adolescent medicine at CHLA, he had the opportunity to train under some of the greatest minds in subspecialty pediatrics, diagnosing and managing the rarest and most complicated childhood ailments. Prior to opening Westside Pediatrics, he worked as an attending physician at the CHLA Emergency Department as well as at Cedars Sinai Urgent Care. Dr. Kagan is a native of Los Angeles.  He and his wife, Cathy, currently live in Pacific Palisades with their two children, Reese and Colin."
      },
      {
        name: "Alek K. Wong",
        reviewScore: 5,
        specialty: "Plastic surgeon",
        imageUrl: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAchAAAAJDQ4NDg3MjI0LTI4N2EtNDVhZC05YjQzLWQ4ODY0NmFlOGM3NA.jpg",
        details: "Dr. Alex K. Wong is the Program Director for our Microvascular Surgery Fellowship Program and an Associate Professor of Surgery in the Division of Plastic and Reconstructive Surgery with attending staff appointments at Keck University Hospital of USC, LAC+USC Medical Center, Huntington Memorial Hospital, and Garfield Medical Center. He specializes in microsurgical free tissue transfer for the management of complex wounds, post-oncologic reconstruction, and abdominal wall reconstruction. He is one of a few surgeons nationally that offers surgery for the treatment of lymphedema. Dr. Wong performs aesthetic surgery of the face, breast, and body and is a Diplomat of the American Board of Plastic Surgery and a Fellow of the American College of Surgeons. He is also a Member of the American Society of Plastic Surgeons, American Society for Reconstructive Microsurgery, World Society for Reconstructive Microsurgery, and Plastic Surgery Research Council. Dr. Wong has been named one of Pasadena Magazine's Top Doctors for annually since 2010, and a Rising Star for 2013 and 2014 by SuperDoctors/Los Angeles Magazine. "
      },
      {
        name: "Charles Kim",
        reviewScore: 1.5,
        specialty: "Plastic Surgeon",
        imageUrl: "https://www.topdoctors.es/files/Doctor/results/57d03864-cc70-466a-9c79-1ff88ac97da0.png",
        details: "Charles Kim is dedicated to providing the most personalized attention to his patients each step of the way. His extensive training in facial and body enhancement and his exceptional artistic skills have made him one of the top plastic surgeons in LA and Orange County. Dr Kim is constantly working to provide the latest, cutting edge services to his patients in the safest way. His main goal with his patients is to find the best options for rejuvenating existing positive traits while creating subtle differences which improve the overall aesthetic image. Dr Kim’s honesty and exceptional artistic eye have resulted in genuine trusting relationships with his patients which last a lifetime."
      },
    ];
  }


  class Doctors {
    constructor(doctors) {
      this.doctors = doctors;
      this.displaying = [];
      this.details;
    }

    findDoctors(option, value) {
      let that = this;
      let bySpecialty = option === 'specialty' || option === 'searchbar';
      
      if (bySpecialty) { //we want to return all specialty doctors to update whats displaying
        this.displaying = [];
      }

      that.doctors.forEach(function(doctor) {

          if (bySpecialty && (doctor[option] === value || (doctor['name']).toLowerCase().includes(value))) { //when sort by specialty or searchbar
            that.displaying.push(doctor);
          } else if (doctor[option] === value) { //when clicked on a doctor set its details
            that.details = doctor.details;
          }

      });
    }

    displayDoctors() {
      let container = $("#recommended-doctors");
      container.empty();
      let that = this;
      that.displaying.forEach(function(doctor) {
        let template = $("<div class='doctors'></div>");
        let photo = $(`<img src=${doctor.imageUrl}>`);
        let reviewTemplate = that.starTemplate(doctor.reviewScore);
        let info = $(`<div class="doc-info">
                        <h4 class="docs-name">${doctor.name}</h4>
                        <span class="docs-specialty">${doctor.specialty}</span>
                      </div>`);
        info.append(reviewTemplate);
        template.append(photo, info);
        container.append(template);
      });
    }

    sortBy(option) { //later on we can replace option with different sorting keywords and just write the code for those sorting options
      //for the very first time we want to display the entire object of doctors
      let toDisplay = this.displaying.length === 0 ? this.doctors : this.displaying;

      if (option === "reviewScore") {
        this.displaying = toDisplay.sort(function(a, b) {
          return b.reviewScore - a.reviewScore;
        });
      }
    }

    starTemplate(reviewScore) { //creates <i> elements depending on the reviewscore
      let template = $('<div class="ratings"></div>');
      let wholeNum = false;
      
      if (reviewScore % 1 == 0) {
        wholeNum = true;
      } else {
        reviewScore = Math.floor(reviewScore); 
      }

      for(let i = 0; i < reviewScore; i++) {
        let star = $('<i class="fa fa-star">');
        template.append(star);
      }

      if(!wholeNum) {
        let halfStar = $('<i class="fa fa-star-half">');
        template.append(halfStar);
      }

      return template; 
    }
  }

  
  let doctors = new Doctors(getDoctors()); //here we initilize the doctors class
  doctors.sortBy("reviewScore"); //start them sorted, but not necessary
  doctors.displayDoctors(); //display the doctors

  //below are all the event handlers

  //click event that show the info of the doctor you clicked on
  $(document).on('click', '.doctors', function(e) { 
    let doctorsName = $(this).find('.docs-name').html();
    let doctor = doctors.findDoctors('name', doctorsName);
    let description = $('#description');

    description.empty();
    description.append(`<p>${doctors.details}</p>`);
  });


  //event to handle changing the specified specialty
  $('select').change(function() {
    let optionValue = $( "select option:selected" ).text();
    $('#search-bar').val(""); //empty out the search bar
    $('#description').empty();
    doctors.findDoctors("specialty", optionValue);
    doctors.sortBy("reviewScore");
    doctors.displayDoctors();
  });

  //event to search for a doctors name -
  //only triggers after you stopped typing for over 1.3seconds  (much more efficient that after every keystroke)
  var timer;
  $('#search-bar').keyup(function () {
    clearTimeout(timer);
    timer = setTimeout(function (event) {
      var text = $('#search-bar').val().toLowerCase();
      $('#description').empty();
      doctors.findDoctors("searchbar", text);
      doctors.displayDoctors();
    }, 1300);
  });
});