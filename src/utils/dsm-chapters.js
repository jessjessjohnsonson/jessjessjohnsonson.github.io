  // Helper function to get chapter by ID
  export const getChapterById = (id) => {
    return dsmChapters.find(chapter => chapter.id === id);
  };
  
  // Helper function to get subchapter by ID across all chapters
  export const getSubchapterById = (subchapterId) => {
    for (const chapter of dsmChapters) {
      if (chapter.subchapters) {
        const subchapter = chapter.subchapters.find(sub => sub.id === subchapterId);
        if (subchapter) {
          return subchapter;
        }
      }
    }
    return null;
  };
  
  // Helper function to get disorder by ID across all subchapters
  export const getDisorderById = (disorderId) => {
    for (const chapter of dsmChapters) {
      if (chapter.subchapters) {
        for (const subchapter of chapter.subchapters) {
          if (subchapter.disorders) {
            const disorder = subchapter.disorders.find(disorder => disorder.id === disorderId);
            if (disorder) {
              return disorder;
            }
          }
        }
      }
    }
    return null;
  };

export const dsmChapters = [
    {
        id: "neurodevelopmental-disorders",
        title: "Neurodevelopmental Disorders",
        link: "/psychology/dsm/neurodevelopmental-disorders",
        description: "Cognitive and motor impairments that onset in early childhood.",
        image: "/public/images/travis_orange_mist.jpg",
        subchapters: [
            {
                id: "intellectual-developmental-disorders",
                title: "Intellectual Developmental Disorders",
                link: "/psychology/dsm/neurodevelopmental-disorders/intellectual-developmental-disorders",
                description: "Intellectual developmental disorders.",
                image: "/public/images/travis_orange_mist.jpg",
                disorders: [
                    {
                        id: 'intellectual-disability',
                        title: 'Intellectual Disability     (Intellectual Developmental Disorder)',
                        link: '/psychology/dsm/neurodevelopmental-disorders/intellectual-disability',
                        description: 'Intellectual disability.',
                        image: '/public/images/travis_orange_mist.jpg'
                    },
                    {
                        id: 'global-developmental-delay',
                        title: 'Global Developmental Delay',
                        link: '/psychology/dsm/neurodevelopmental-disorders/global-developmental-delay',
                        description: 'Global developmental delay.',
                        image: '/public/images/travis_orange_mist.jpg'
                    },
                    {
                        id: 'unspecified-intellectual-developmental-disorder',
                        title: 'Unspecified Intellectual Developmental Disorder',
                        link: '/psychology/dsm/neurodevelopmental-disorders/unspecified-intellectual-developmental-disorder',
                        description: 'Unspecified intellectual developmental disorder.',
                        image: '/public/images/travis_orange_mist.jpg'
                    }
                ]
            },
            {
                id: "communication-disorders",
                title: "Communication Disorders",
                link: "/psychology/dsm/neurodevelopmental-disorders/communication-disorders",
                description: "Communication disorders.",
                image: "/public/images/travis_orange_mist.jpg",
                disorders: [
                    {
                        id: 'language-disorder',
                        title: 'Language Disorder',
                        link: '/psychology/dsm/neurodevelopmental-disorders/language-disorder',
                        description: 'Language disorder.',
                        image: '/public/images/travis_orange_mist.jpg'
                    },
                    {
                        id: 'speech-sound-disorder',
                        title: 'Speech Sound Disorder',
                        link: '/psychology/dsm/neurodevelopmental-disorders/speech-sound-disorder',
                        description: 'Speech sound disorder.',
                        image: '/public/images/travis_orange_mist.jpg'
                    },
                    {
                        id: 'child-onset-fluency-disorder',
                        title: 'Child-Onset Fluency Disorder (Stuttering)',
                        link: '/psychology/dsm/neurodevelopmental-disorders/child-onset-fluency-disorder',
                        description: 'Child-onset fluency disorder (stuttering).',
                        image: '/public/images/travis_orange_mist.jpg'
                    },
                    {
                        id: 'social-communication-disorder',
                        title: 'Social (Pragmatic) Communication Disorder',
                        link: '/psychology/dsm/neurodevelopmental-disorders/social-communication-disorder',
                        description: 'Social (pragmatic) communication disorder.',
                        image: '/public/images/travis_orange_mist.jpg'
                    },
                    {
                        id: 'unspecified-communication-disorder',
                        title: 'Unspecified Communication Disorder',
                        link: '/psychology/dsm/neurodevelopmental-disorders/unspecified-communication-disorder',
                        description: 'Unspecified communication disorder.',
                        image: '/public/images/travis_orange_mist.jpg'
                    }
                ]
            },
            {
                id: 'autism-spectrum-disorder',
                title: 'Autism Spectrum Disorder',
                link: '/psychology/dsm/neurodevelopmental-disorders/autism-spectrum-disorder',
                description: 'Autism spectrum disorder.',
                image: '/public/images/travis_orange_mist.jpg',
                disorders: []
            },
            {
                id: 'attention-deficit-hyperactivity-disorder',
                title: 'Attention Deficit Hyperactivity Disorder (ADHD)',
                link: '/psychology/dsm/neurodevelopmental-disorders/attention-deficit-hyperactivity-disorder',
                description: 'Attention deficit hyperactivity disorder.',
                image: '/public/images/travis_orange_mist.jpg',
                disorders: []
            },
            {
                id: 'specific-learning-disorder',
                title: 'Specific Learning Disorder',
                link: '/psychology/dsm/neurodevelopmental-disorders/specific-learning-disorder',
                description: 'Specific learning disorder.',
                image: '/public/images/travis_orange_mist.jpg',
                disorders: [
                    {
                        id: 'developmental-coordination-disorder',
                        title: 'Developmental Coordination Disorder',
                        link: '/psychology/dsm/neurodevelopmental-disorders/developmental-coordination-disorder',
                        description: 'Developmental coordination disorder.',
                        image: '/public/images/travis_orange_mist.jpg'
                    },
                    {
                        id: 'dyslexia',
                        title: 'Dyslexia',
                        link: '/psychology/dsm/neurodevelopmental-disorders/dyslexia',
                        description: 'Dyslexia.',
                        image: '/public/images/travis_orange_mist.jpg'
                    },
                    {
                        id: 'dysgraphia',
                        title: 'Dysgraphia',
                        link: '/psychology/dsm/neurodevelopmental-disorders/dysgraphia',
                        description: 'Dysgraphia.',
                        image: '/public/images/travis_orange_mist.jpg'
                    },
                    {
                        id: 'dyscalculia',
                        title: 'Dyscalculia',
                        link: '/psychology/dsm/neurodevelopmental-disorders/dyscalculia',
                        description: 'Dyscalculia.',
                        image: '/public/images/travis_orange_mist.jpg'
                    }
                ]
            },
            {
                id: 'motor-disorder',
                title: 'Motor Disorder',
                link: '/psychology/dsm/neurodevelopmental-disorders/motor-disorder',
                description: 'Motor disorder.',
                image: '/public/images/travis_orange_mist.jpg',
                disorders: []
            }
        ]
    },
    {
        id: "schizophrenia-spectrum-disorders",
        title: "Schizophrenia Spectrum and Other Psychotic Disorders",
        link: "/psychology/dsm/schizophrenia-spectrum-disorders",
        description: "Psychotic disorders that are not due to substance abuse or medication.",
        image: "/public/images/travis_reflected_sky.jpg",
        disorders: []
    },
    {
        id: "bipolar-disorders",
        title: "Bipolar and Related Disorders",
        link: "/psychology/dsm/bipolar-disorders",
        description: "Bipolar disorder and related disorders.",
        image: "/public/images/travis_wide_sunrise.jpg",
        disorders: []
    },
    {
        id: "depressive-disorders",
        title: "Depressive Disorders",
        link: "/psychology/dsm/depressive-disorders",
        description: "Depressive disorders.",
        image: "/public/images/travis_moon_lake.jpg",
        disorders: []
    },
    {
        id: "anxiety-disorders",
        title: "Anxiety Disorders",
        link: "/psychology/dsm/anxiety-disorders",
        description: "Anxiety disorders.",
        image: "/public/images/travis_rising_mist.jpg",
        disorders: []
    },
    {
        id: "obsessive-compulsive-disorders",
        title: "Obsessive-Compulsive and Related Disorders",
        link: "/psychology/dsm/obsessive-compulsive-disorders",
        description: "Obsessive-compulsive and related disorders.",
        image: "/public/images/travis_colorful_sunrise.jpg",
        disorders: []
    },
    {
        id: "trauma-and-stressor-related-disorders",
        title: "Trauma- and Stressor-Related Disorders",
        link: "/psychology/dsm/trauma-and-stressor-related-disorders",
        description: "Trauma- and stressor-related disorders.",
        image: "/public/images/travis_even_waves.jpg",
        disorders: []
    },
    {
        id: "dissasociative-disorders",
        title:  "Dissasociative Disorders",
        link: "/psychology/dsm/dissasociative-disorders",
        description: "Dissasociative disorders.",
        image: "/public/images/travis_mountain_sunrise.jpg",
        disorders: []
    },
    {
        id: "elimination-disorders",
        title: "Elimination Disorders",
        link: "/psychology/dsm/elimination-disorders",
        description: "Elimination disorders.",
        image: "/public/images/travis_bumpy_clouds.jpg",
        disorders: []
    },
    {
        id: "sleep-wake-disorders",
        title: "Sleep-Wake Disorders",
        link: "/psychology/dsm/sleep-wake-disorders",
        description: "Sleep-wake disorders.",
        image: "/public/images/travis_calm_lake.jpg",
        disorders: []
    },
    {
        id: "sexual-dysfunctions",
        title: "Sexual Dysfunctions",
        link: "/psychology/dsm/sexual-dysfunctions",
        description: "Sexual dysfunctions.",
        image: "/public/images/travis_upside_down_sky.jpg",
        disorders: []
    },
    {
        id: "gender-dysphoria",
        title:  "Gender Dysphoria",
        link: "/psychology/dsm/gender-dysphoria",
        description: "Gender dysphoria.",
        image: "/public/images/travis_symmetric_lake.jpg",
        disorders: []
    },
    {
        id: "disruptive-disorders",
        title: "Disruptive, Impulse-Control, and Conduct Disorders",
        link: "/psychology/dsm/disruptive-disorders",
        description: "Disruptive, impulse-control, and conduct disorders.",
        image: "/public/images/travis_mountain_sunrise.jpg",
        disorders: []
    },
    {
        id: "substance-related-disorders",
        title: "Substance-Related and Addictive Disorders",
        link: "/psychology/dsm/substance-related-disorders",
        description: "Substance-related and addictive disorders.",
        image: "/public/images/travis_early_sunrise.jpg",
        disorders: []
    },
    {
        id: "neurocognitive-disorders",
        title: "Neurocognitive Disorders",
        link: "/psychology/dsm/neurocognitive-disorders",
        description: "Neurocognitive disorders.",
        image: "/public/images/travis_foggy_lake.jpg",
        disorders: []
    },
    {
        id: "personality-disorders",
        title: "Personality Disorders",
        link: "/psychology/dsm/personality-disorders",
        description: "Personality disorders.",
        image: "/public/images/travis_reflected_clouds_with_color.jpg",
        disorders: []
    },
    {
        id: "paraphilic-disorders",
        title:  "Paraphilic Disorders",
        link: "/psychology/dsm/paraphilic-disorders",
        description: "Paraphilic disorders.",
        image: "/public/images/travis_sail_boat.jpg",
        disorders: []
    },
    {
        id: "other-mental-disorders",
        title: "Other Mental Disorders",
        link: "/psychology/dsm/other-mental-disorders",
        description: "Other mental disorders.",
        image: "/public/images/travis_colorful_sunrise.jpg",
        disorders: []
    },
    {
        id: "medication-induced-movement-disorders",
        title:  "Medication-Induced Movement Disorders and Other Adverse Effects of Medication",
        link: "/psychology/dsm/medication-induced-movement-disorders",
        description: "Medication-induced movement disorders and other adverse effects of medication.",
        image: "/public/images/travis_reflected_clouds.jpg",
        disorders: []
    }
  ]
