(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const LT="Paintings and Drawings",FT="Paintings and sketches I've done.",zT=["/sketches","/paintings"],us=Object.freeze(Object.defineProperty({__proto__:null,description:FT,order:zT,title:LT},Symbol.toStringTag,{value:"Module"})),BT="Anxiety Disorders",jT="Excessive fear (response to real or perceived danger) or anxiety (anticipation of danger).",UT=["/separation-anxiety-disorder","/selective-mutism","/specific-phobia","/social-anxiety-disorder","/panic-disorder","/agoraphobia","/generalized-anxiety-disorder","/substance-induced-anxiety-disorder","/anxiety-disorder-due-to-another-medical-condition","/other-specified-anxiety-disorder","/unspecified-anxiety-disorder"],cs=Object.freeze(Object.defineProperty({__proto__:null,description:jT,order:UT,title:BT},Symbol.toStringTag,{value:"Module"})),HT="Bipolar and Related Disorders",$T="Manic and hypomanic episodes with depressive episodes.",WT=["/bipolar-I-disorder","/bipolar-II-disorder","/cyclothymic-disorder","/substance-induced-bipolar-disorder","/bipolar-disorder-due-to-another-medical-condition","/other-specified-bipolar-disorder","/unspecified-bipolar-disorder","/unspecified-mood-disorder","/bipolar-specifiers"],ds=Object.freeze(Object.defineProperty({__proto__:null,description:$T,order:WT,title:HT},Symbol.toStringTag,{value:"Module"})),VT="Depressive Disorders",YT="Sad, empty, or irritable mood with loss of interest or pleasure in nearly all activities.",qT=["/major-depressive-disorder","/persistent-depressive-disorder","/premenstrual-dysphoric-disorder","/substance-induced-depressive-disorder","/depressive-disorder-due-to-another-medical-condition","/other-specified-depressive-disorder","/unspecified-depressive-disorder","/unspecified-mood-disorder"],hs=Object.freeze(Object.defineProperty({__proto__:null,description:YT,order:qT,title:VT},Symbol.toStringTag,{value:"Module"})),QT="The DSM Taxonomy Since 1952",GT="The DSM-5 diagnoses shown over time as they appear (or don't) in prior versions of the DSM since 1952.",KT=["/neurodevelopmental-disorders","/schizophrenia-spectrum-disorders","/bipolar-and-related-disorders","/depressive-disorders","/anxiety-disorders","/obsessive-compulsive-disorders","/trauma-and-stressor-related-disorders","/personality-disorders","/paraphilic-disorders"],fs=Object.freeze(Object.defineProperty({__proto__:null,description:GT,order:KT,title:QT},Symbol.toStringTag,{value:"Module"})),XT="Communication Disorders",JT="communication-disorders",ZT="Deficits in language, speech, and nonverbal communication.",eE=["/language-disorder","/speech-sound-disorder","/child-onset-fluency-disorder","/social-communication-disorder","/unspecified-communication-disorder"],ps=Object.freeze(Object.defineProperty({__proto__:null,description:ZT,order:eE,slug:JT,title:XT},Symbol.toStringTag,{value:"Module"})),tE="Neurodevelopmental Disorders",nE="Deficits in intellectual, adaptive (life skills), communication, motor, and social skills that onset during the developmental period.",iE=["/intellectual-development-disorders","/communication-disorders","/autism-spectrum-disorder","/attention-deficit-hyperactivity-disorder","/specific-learning-disorder","/motor-disorders","/other-specified-neurodevelopmental-disorder","/unspecified-neurodevelopmental-disorder"],ms=Object.freeze(Object.defineProperty({__proto__:null,description:nE,order:iE,title:tE},Symbol.toStringTag,{value:"Module"})),rE="Intellectual Development Disorders",oE="Conditions that delay intellectual and adaptive milestones during the developmental period.",sE=["/intellectual-disability","/global-developmental-delay","/unspecified-intellectual-developmental-disorder"],gs=Object.freeze(Object.defineProperty({__proto__:null,description:oE,order:sE,title:rE},Symbol.toStringTag,{value:"Module"})),aE="Motor Disorders",lE="Malfunctions of the nervous system that cause involuntary or uncontrollable movements or actions of the body.",uE=["/developmental-coordination-disorder","/stereotypic-movement-disorder","/tic-disorders"],ys=Object.freeze(Object.defineProperty({__proto__:null,description:lE,order:uE,title:aE},Symbol.toStringTag,{value:"Module"})),cE="Tic Disorders",dE="Conditions involving involuntary, sudden, recurrent movements or vocalizations, such as eye blinking, shoulder shrugging, thread clearing, grunting, or in some cases words and phrases.",hE=["/tourettes-disorder","/persistent-tic-disorder","/provisional-tic-disorder","/other-specified-tic-disorder","/unspecified-tic-disorder"],vs=Object.freeze(Object.defineProperty({__proto__:null,description:dE,order:hE,title:cE},Symbol.toStringTag,{value:"Module"})),fE="Obsessive-Compulsive Disorders",pE="Recurrent and persistent intrusive thoughts, images, or urges and repetitive behaviors that an individual feels driven to perform.",mE=["/obsessive-compulsive-disorder","/body-dysmorphic-disorder","/hoarding-disorder","/trichotillomania","/excoriation-disorder","/substance-induced-obsessive-compulsive-disorder","/obsessive-compulsive-disorder-due-to-another-medical-condition","/other-specified-obsessive-compulsive-disorder","/unspecified-obsessive-compulsive-disorder"],bs=Object.freeze(Object.defineProperty({__proto__:null,description:pE,order:mE,title:fE},Symbol.toStringTag,{value:"Module"})),gE="Paraphilic Disorders",yE="Intense and persistent sexual interest other than sexual interest in genital stimulation or preparatory fondling with phenotypically normal, physically mature, consenting human partners.",vE=["/voyeuristic-disorder","/exhibitionistic-disorder","/frotteuristic-disorder","/sexual-masochism-disorder","/sexual-sadism-disorder","/pedophilic-disorder","/fetishistic-disorder","/transvestic-disorder","/other-specified-paraphilic-disorder","/unspecified-paraphilic-disorder"],bE=`The term paraphilia denotes an intense and persistent sexual interest other than sexual interest in genital stimulation or preparatory fondling with phenotypically normal, 
physically mature, consenting human partners. A paraphilic disorder is a paraphilia that is currently causing distress or impairment to the individual or whose satisfaction has caused personal harm, or risk of harm, to others. 
The paraphilic disorders are presented in groups ordered by anomalous activity preferences, subdivided into courtship disorders (voyeuristic, 
exhibitionistic, and frotteuristic disorders), and algolagnic disorders which involve pain and suffering (masochism and sadism). The second group is based on anomalous target preferences (
pedophilic, fetishistic, and transvestic disorders).`,Ts=Object.freeze(Object.defineProperty({__proto__:null,description:yE,header_text:bE,order:vE,title:gE},Symbol.toStringTag,{value:"Module"})),TE="Cluster A Personality Disorders",EE="Personality disorders characterized by odd-eccentric behavior and thought patterns.",wE=["/paranoid-personality-disorder","/schizoid-personality-disorder","/schizotypal-personality-disorder"],Es=Object.freeze(Object.defineProperty({__proto__:null,description:EE,order:wE,title:TE},Symbol.toStringTag,{value:"Module"})),xE="Cluster B Personality Disorders",_E="Personality disorders characterized dramatic-emotional behavior.",SE=["/antisocial-personality-disorder","/borderline-personality-disorder","/histrionic-personality-disorder","/narcissistic-personality-disorder"],ws=Object.freeze(Object.defineProperty({__proto__:null,description:_E,order:SE,title:xE},Symbol.toStringTag,{value:"Module"})),kE="Personality Disorders",DE="Enduring patterns of inner experience and behavior that deviate markedly from cultural norms, is pervasive and inflexible, onsets in adolescence or early adulthood, is stable over time, and leads to distress or impairment.",IE=`Personality disorders are organized in the DSM by clusters. 
Cluster A is described as odd-eccentric and includes paranoid, schizoid, and schizotypal personality disorders.
Cluster B is described as dramatic-emotional and includes antisocial, borderline, histrionic, and narcissistic personality disorders. 
Cluster C is described as anxious-fearful and includes avoidant, dependent, and obsessive-compulsive personality disorders.
An alternative to the categorical approach to personality disorders is a dimensional perspective in which personality disorders represent maladaptive variants of personality traits that merge imperceptibly into normality and into one another.`,CE=["/general-personality-disorder","/cluster-a","/cluster-b","/cluster-c"],xs=Object.freeze(Object.defineProperty({__proto__:null,description:DE,header_text:IE,order:CE,title:kE},Symbol.toStringTag,{value:"Module"})),AE="Schizophrenia Spectrum and Other Psychotic Disorders",OE="Delusions, hallucinations, and disorganized thought and speech.",PE=["/delusional-disorder","/brief-psychotic-disorder","/schizophreniform-disorder","/schizophrenia","/schizoaffective-disorder","/substance-induced-psychotic-disorder","/psychotic-disorder-due-to-another-medical-condition","/other-specified-schizophrenia-spectrum-disorder","/unspecified-schizophrenia-spectrum-disorder"],_s=Object.freeze(Object.defineProperty({__proto__:null,description:OE,order:PE,title:AE},Symbol.toStringTag,{value:"Module"})),NE="Trauma- and Stressor-Related Disorders",ME="Disorders that explicitly require a traumatic or stressful event as a diagnostic criterion.",RE=["/reactive-attachment-disorder","/disinhibited-social-engagement-disorder","/posttraumatic-stress-disorder","/acute-stress-disorder","/adjustment-disorders","/prolongued-grief-disorder"],Ss=Object.freeze(Object.defineProperty({__proto__:null,description:ME,order:RE,title:NE},Symbol.toStringTag,{value:"Module"})),LE="Translations",FE="My translations of songs from Spanish to English, sometimes vice versa, and sometimes from other languages.",zE="translations",ks=Object.freeze(Object.defineProperty({__proto__:null,description:FE,slug:zE,title:LE},Symbol.toStringTag,{value:"Module"})),BE="Web Apps",jE="Little web apps I made to learn Spanish (fairly successfully) and German (less successfully).",UE="webapps",HE=["/jesspanish","/jessprache"],Ds=Object.freeze(Object.defineProperty({__proto__:null,description:jE,order:HE,slug:UE,title:BE},Symbol.toStringTag,{value:"Module"})),$E={title:"Agoraphobia",description:"Excessive fear or anxiety about situations involving in public or enclosed spaces.",prevalence:"1-7%"},WE=`## DSM-5 
1. Marked fear or anxiety about two (or more) of the following five situations:  
    1. Using public transportation (e.g., automobiles, buses, trains, ships, planes).  
    2. Being in open spaces (e.g., parking lots, marketplaces, bridges).  
    3. Being in enclosed places (e.g., shops, theaters, cinemas).  
    4. Standing in line or being in a crowd.  
    5. Being outside of the home alone.  
2. The individual fears or avoids these situations because of thoughts that escape might be difficult or help might not be available in the event of developing panic-like symptoms or other incapacitating or embarrassing symptoms (e.g., fear of falling in the elderly, fear of incontinence).  
3. The agoraphobic situations almost always provoke fear or anxiety.  
4. The agoraphobic situations are actively avoided, require the presence of a companion, or are endured with intense fear or anxiety.  
5. The fear or anxiety is out of proportion to the actual danger posed by the agoraphobic situations and to the sociocultural context.  
6. The fear, anxiety, or avoidance is persistent, typically lasting for 6 months or more.  
7. The fear, anxiety, or avoidance causes clinically significant distress or impairment in social or occupational functioning.  
8. If another medical condition (e.g., inflammatory bowel disease, Parksinson's disease) is present, the fear, anxiety, or avoidance is clearly excessive.  
9. The fear, anxiety, or avoidance is not better explained by the symptoms of another mental disorder—for example, the symptoms are not confined to specific phobia, situational type; do not involve only social situations (as in social anxiety disorder); and are not related exclusively to obsessions (as in obsessive-compulsive disorder), perceived defects or flaws in physical appearance (as in body dysmorphic disorder), reminders of traumatic events (as in posttraumatic stress disorder), or fear of separation (as in SAD).  
<i>Note, agoraphobia is diagnosed irrespective of the presence of panic disorder. If an individual’s presentation meets criteria for panic disorder and agoraphobia, both diagnoses should be assigned.</i>

#### Differential Diagnosis
- Specific phobia, situational type  
- SAD
- Social anxiety disorder  
<i>Note, in social anxiety disorder, the fear is more about being negatively evaluated by other people.</i>
- Panic disorder  
- Acute stress disorder and PTSD  
- MDD  
- Avoidance related to other medical conditions`,vd=Object.freeze(Object.defineProperty({__proto__:null,attributes:$E,markdown:WE},Symbol.toStringTag,{value:"Module"})),VE={title:"Anxiety Disorder Due to Another Medical Condition",description:"Panic attacks or anxiety brought on by another medical condition."},YE=`## DSM-5
1. Panic attacks or anxiety is predominant in the clinical picture.  
2. There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.  
3. The disturbance is not better explained by another medical disorder.  
4. The disturbance does not occur exclusively during the course of a delirium.  
5. The disturbance causes clinically significant distress or impairment in  social or occupational functioning.  

#### Differential Diagnosis
- Delirium and major or mild neurocognitive disorder  
- Mixed presentation of symptoms (e.g., mood and anxiety)  
- Substance/medication-induced anxiety disorder  
- Anxiety disorder (not due to a known medical condition)  
- Illness anxiety disorder  
- Adjustment disorders`,bd=Object.freeze(Object.defineProperty({__proto__:null,attributes:VE,markdown:YE},Symbol.toStringTag,{value:"Module"})),qE={title:"Generalized Anxiety Disorder",description:"Excessive anxiety or worry about a number of events or activities.",prevalence:null,acronyms:"GAD"},QE=`## DSM-5
1. Excessive anxiety and worry (apprehensive expectation), occurring more days than not for at least 6 months, about a number of events or activities (such as work or school performance).  
2. The individual finds it difficult to control the worry.  
3. The anxiety and worry are associated with three (or more) of the following six symptoms (with at least some symptoms having been present for more days than not for the past 6 months):  
<i>Note, only one item is required in children.</i>  
    1. Restlessness or feeling keyed up or on edge  
    2. Being easily fatigued  
    3. Difficulty concentrating or mind going blank  
    4. Irritability  
    5. Muscle tenion  
    6. Sleep disturbance (difficulty falling or staying asleep, or restlessness, unsatisfying sleep)  
4. The anxiety, worry, or physical symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
5. The disturbance is not attributable to the effects of a substance or another medical condition.  
6. The disturbance is not better explained by another mental disorder (e.g., anxiety or worry about having panic attacks in panic disorder, negative evaluation in social anxiety disorder, contamination or other obsessions in OCD, separation from attachment figures in SAD, reminders of traumatic events in PTSD, gaining weight in anorexia nervosa, physical complaints in somatic symptom disorder, perceived appearance flaws in body dysmorphic disorder, having a serious illness in illness anxiety disorder, or the content of delusional beliefs in schizophrenia or delusional
disorder).  

#### Differential Diagnosis
- Anxiety disorder due to another medical condition  
- Substance/medication-induced anxiety disorder  
- Social anxiety disorder  
- SAD 
- Panic disorder  
- Illness anxiety disorder and somatic symptom disorder  
- OCD  
- PTSD and adjustment disorders  
- Depressive, bipolar, and psychotic disorders`,Td=Object.freeze(Object.defineProperty({__proto__:null,attributes:qE,markdown:QE},Symbol.toStringTag,{value:"Module"})),GE={title:"Other Specified Anxiety Disorder",description:"Panic attacks or anxiety that dominate the clinical picture but do not meet full criteria for a specified reason."},KE=`## DSM-5
This category applies to presentations in which symptoms characteristic of an anxiety disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the anxiety disorders diagnostic class, and do not meet criteria for adjustment disorder
with anxiety or adjustment disorder with mixed anxiety and depressed mood. The other specified anxiety disorder category is used in situations in which the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for any specific anxiety disorder. For example:  
- Limited-symptom attacks.  
- Generalized anxiety occurring less often than “more days than not.”  
- Khyâl cap (wind attacks)  
- Ataque de nervios (attack of nerves)  `,Ed=Object.freeze(Object.defineProperty({__proto__:null,attributes:GE,markdown:KE},Symbol.toStringTag,{value:"Module"})),XE={title:"Panic Disorder",description:"Recurrent, unexpected panic attacks followed by maladaptive behavior changes and persistent worry about additional panic attacks.",prevalence:"2-3%"},JE=`## DSM-5
1. Recurrent unexpected panic attacks, defined by an abrupt surge of intense fear or intense discomfort that reaches peak within minutes and during which four or more of the following symptoms occur:  
    1. Palpitations, pounding heart, or accelerated heart rate  
    2. Sweating  
    3. Trembling or shaking  
    4. Sensations of shortness of breath or being smothered  
    5. Feelings of choking  
    6. Chest pain or discomfort  
    7. Nausea or abdominal distress  
    8. Feeling dizzy, unsteady, light-headed, or faint  
    9. Chills or heat sensations  
    10. Paresthesias (numbness or tingling sensations)  
    11. Derealization (feelings of unreality) or depersonalization (being detached from oneself)  
    12. Fear of losing control or "going crazy"  
    13. Fear of dying  
2. At least one or the attacks has been followed by 1 month of one or more of the following:  
    1. Persistent concern or worry about additional panic attacks or their consequences (e.g., losing control, having a heart attack, “going crazy”).  
    2. A significant maladaptive change in behavior related to the attacks (e.g., behaviors designed to avoid having panic attacks, such as avoidance of exercise or unfamiliar situations).  
3. The disturbance is not attributable to the effects of a substance or another medical condition.  
4. The disturbance is not better explained by another mental disorder (e.g., the panic attacks do not occur only in response to feared social situations, as in social anxiety disorder; in response to circumscribed phobic objects or situations, as in specific phobia; in response to obsessions, as in  OCD; in response to reminders of traumatic events, as in PTSD; or in response to separation from attachment figures, as in SAD).

#### Differential Diagnosis
- Only limited-symptom panic attacks  
- Anxiety disorder due to another medical condition  
- Substance/medication-induced anxiety disorder  
- Other mental disorders with panic attacks as an associated feature (e.g., other anxiety disorders and psychotic disorders)`,wd=Object.freeze(Object.defineProperty({__proto__:null,attributes:XE,markdown:JE},Symbol.toStringTag,{value:"Module"})),ZE={title:"Selective Mutism",description:"Failure to speak in specific social situations."},ew=`## DSM-5
1. Consistent failure to speak in specific social situations in which there is an expectation for speaking (e.g., at school) despite speaking in other situations.  
2. The disturbance interferes with educational or occupational achievement or with social communication.  
3. The disturbance persists at least 1 month.  
4. The failure to speak is not attributable to a lack of knowledge of, or comfort with, the spoken language required in the social situation.  
5. The disturbance is not better explained by a communication disorder (e.g., childhood-onset fluency disorder) and does not occur exclusively during the course of ASD, schizophrenia, or another psychotic disorder.

#### Differential Diagnosis
- Silent period in immigrant children learning a second language  
- Communication disorders  
- Neurodevelopmental disorders and schizophrenia and other psychotic disorders  
- Social anxiety disorder  `,xd=Object.freeze(Object.defineProperty({__proto__:null,attributes:ZE,markdown:ew},Symbol.toStringTag,{value:"Module"})),tw={title:"Separation Anxiety Disorder",description:"Excessive fear or anxiety of separation from major attachment figures.",prevalence:"4% in children, 0.9-1.9% in adults",acronyms:"SAD"},nw=`## DSM-5
1. Developmentally inappropriate and excessive fear or anxiety of separation from major attachment figures, as evidenced by at least three of the following symptoms:  
    1. Recurrent excessive distress when anticipating or experiencing separation from home or from major attachment figures.  
    2. Persistent and excessive worry about losing major attachment figures or about possible harm to them (e.g., illness, injury, disasters, death).  
    3. Persistent and excessive worry about experiencing an untoward event (e.g., getting lost, being kidnapped, becoming ill) that causes separation from a major attachment figure.  
    4. Persistent reluctance or refusal to go out, away from home, to school, to work, or elsewhere due to fear of separation.  
    5. Persistent and excessive fear of or reluctance toward being left alone or without major attachment figures.  
    6. Persistent reluctance or refusal to sleep away from home or to go to sleep without being near a major attachment figure.  
    7. Repeated nightmares involving the theme of separation.  
    8. Repeated complaints of physical symptoms (e.g., headaches, stomachaches, nausea, vomiting) when separation from major figures occurs or is anticipated.  
2. The fear, anxiety, or avoidance lasts at least 4 weeks in children and adolescents and 6 months or more in adults.  
3. The symptoms cause clinically significant distress or impairment in social or occupational functioning.  
4. The symptoms are not better explained by another mental disorder, such as refusing to leave home because of excessive resistance to change in autism spectrum disorder; delusions or hallucinations concerning separation in psychotic disorders; refusal to go outside without a trusted companion in agoraphobia; worries about ill health or other harm befalling significant others in generalized anxiety disorder; or concerns about having an illness in illness
anxiety disorder.  

#### Differential Diagnosis
- GAD  
- Panic disorder  
- Agoraphobia  
- Conduct disorder  
- Social anxiety disorder  
- PTSD  
- Illness anxiety disorder  
- Prolonged grief disorder  
- Depressive and bipolar disorders  
- ODD  
- Psychotic disorders  
- Personality disorders`,_d=Object.freeze(Object.defineProperty({__proto__:null,attributes:tw,markdown:nw},Symbol.toStringTag,{value:"Module"})),iw={title:"Social Anxiety Disorder",description:"Excessive fear or anxiety in social situations which the person is exposed to possible scrutiny by others.",prevalence:"7%"},rw=`## DSM-5
1. Marked fear or anxiety about one or more social situations in which the person is exposed to possible scrutiny by others. Examples include social interactions (e.g., having a conversation, meeting unfamiliar people), being observed (e.g., eating or drinking), and performing in front of others (e.g., giving a speech).  
<i>Note, in children the anxiety must occur in peer settings and not just during interactions with adults.</i>  
2. The individual fears that he or she will act in a way or show anxiety symptoms that will be negatively evaluated (i.e., will be humiliating or embarrassing; will lead to rejection or offend others).  
3. The social situations almost always provoke fear or anxiety.  
<i>Note, fear and anxiety in children may present as crying, tantrums, freezing, or clinging.</i>  
4. The social situations are avoided or endured with intense fear or anxiety.  
5. The fear or anxiety is out of propotion to the actual threat posed by the social situation and to the sociocultural context.  
6. The fear, anxiety, or avoidance is persistent, typically lasting for 6 months or more.  
7. The fear, anxiety, or avoidance causes clinically significant distress or impairment in social or occuptational functioning.  
8. The fear, anxiety, or avoidance is not attributable to the effects of a substance or another medical condition.  
9. The fear, anxiety, or avoidance is not better explained by the symptoms of another mental disorder, such as panic disorder, body dysmorphic disorder, or autism spectrum disorder.  
10. If another medical condition (e.g., Parkinson’s disease, obesity, disfigurement from burns or injury) is present, the fear, anxiety, or avoidance is clearly unrelated or is excessive.  

###### Specifiers
- Performance only (i.e., speaking or performing in public)

#### Differential Diagnosis
- Normative shyness  
- Agoraphobia  
- Panic disorder  
- GAD  
- SAD 
- Specific phobias  
- Selective mutism  
- MDD  
- Body dysmorphic disorder  
- Delusional disorder  
- ASD  
- Personality disorders  
- Other mental disorders  
- Other medical conditions  
- ODD`,Sd=Object.freeze(Object.defineProperty({__proto__:null,attributes:iw,markdown:rw},Symbol.toStringTag,{value:"Module"})),ow={title:"Specific Phobia",description:"Excessive fear or anxiety about a specific object or situation.",prevalence:"8-12%"},sw=`Somes interesting facts from the DSM:  
- Approximately 75% of those with a specific phobia fear more than one situation or object.  
- Women are nearly doubly affected by specific phobias.  
- Specific phobia is associated with both suicidal thoughts and attempts, and is associated with a transition from ideation to attempt; a study in Germany found that 30% of first suicide attempts in individuals 14-24 could be attributed to specific phobia.  
- People with specific phobia are at increased risk for developing other disorders, such as anxiety disorders, depressive and bipolar disorders, substance-related disorders, somatic symptom and related disorders, and personality disorders, particularly dependent personality disorder.

## DSM-5
1. Marked fear or anxiety about a specific object or situation (e.g., flying, heights, animals, receiving an injection, seeing blood).  
<i>Note, fear and anxiety in children may present as crying, tantrums, freezing, or clinging.</i>  
2. The phobic object or situation almost always provokes immediate fear or anxiety.  
3. The phobic object or situation is actively avoided or endured with intense fear or anxiety.  
4. The fear or anxiety is out of proportion to the actual danger posed by the specific object or situation and to the sociocultural context.  
5. The fear, anxiety, or avoidance is persistent, typically lasting 6 months or more.  
6. The fear, anxiety, or avoidance causes cinically significant distress or impairment in social or occupational functioning.  
7. The disturbance is not better explained by the symptoms of another mental disorder, including fear, anxiety, and avoidance of situations associated with panic-like symptoms or other incapacitating symptoms (as in agoraphobia); objects or situations related to obsessions (as in OCD); reminders of traumatic events (as in PTSD); separation from home or attachment figures (as in SAD); or social situations (as in social anxiety disorder).  

###### Specifiers
- Phobic stimulus:  
    - Animal (spiders, insects, dogs)  
    - Natural environment (heights, storms, water)  
    - Blood-injection-injury (needles, invasive medical procedures)  
    - Situational (airplanes, elevators, enclosed spaces)  
    - Other (situations that may lead to choking or vomiting, loud sounds, costumed characters)

#### Differential Diagnosis
- Agoraphobia  
- Social anxiety disorder  
- SAD 
- Panic disorder  
- OCD  
- Trauma- and stressor-related disorders  
- Eating disorders  
- Schizophrenia spectrum and other psychotic disorders  `,kd=Object.freeze(Object.defineProperty({__proto__:null,attributes:ow,markdown:sw},Symbol.toStringTag,{value:"Module"})),aw={title:"Substance/Medication-Induced Anxiety Disorder",description:"Panic attacks or anxiety brought on by exposure to or withdrawal from a substance or medication."},lw=`## DSM-5
1. Panic attacks or anxiety is predominant in the clinical picture.  
2. There is evidence from the history, physical examination, or laboratory findings of both:  
    1. The symptoms developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.  
    2. The involved substance/medication is capable of producing the symptoms.  
3. The disturbance is not better explained by an anxiety disorder that is not substance/medication-induced. Such evidence of an independent anxiety disorder could include the following:  
The symptoms precede the onset of the substance/medication use; the symptoms persist for a substantial period of time (e.g., about 1 month) after the cessation of acute withdrawal or severe intoxication; or there is other evidence suggesting the existence of an independent non-substance/medication-induced anxiety disorder (e.g., a history of recurrent nonsubstance/medication-related episodes).  
4. The disturbance does not occur exclusively during the course of a delirium.  
5. The disturbance causes clinically significant distress or impairment in social or occupational functioning.  
<i>Note, this diagnosis should be made instead of a diagnosis of substance intoxication or substance withdrawal only when the anxiety symptoms predominate in the clinical picture and they are sufficiently severe to warrant clinical attention.</i>  

###### Specifiers
- With onset during intoxication  
- With onset during withdrawal  
- With onset after medication use

#### Differential Diagnosis
- Substance intoxication and substance withdrawal  
- Independent anxiety disorder (i.e., not induced by a substance/medication)  
- Delirium  
- Anxiety disorder due to another medical condition`,Dd=Object.freeze(Object.defineProperty({__proto__:null,attributes:aw,markdown:lw},Symbol.toStringTag,{value:"Module"})),uw={title:"Unspecified Anxiety Disorder",description:"Panic attacks or anxiety that dominate the clinical picture but do not meet full criteria for an unspecified reason."},cw=`## DSM-5
This category applies to presentations in which symptoms characteristic of an anxiety disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the anxiety disorders diagnostic class, and do not meet criteria for adjustment disorder
with anxiety or adjustment disorder with mixed anxiety and depressed mood. The unspecified anxiety disorder category is used in situations in which the clinician chooses not to specify the reason that the criteria are not met for a specific anxiety disorder and includes presentations in which there is insufficient information to make a more specific diagnosis (e.g., emergency rooms).`,Id=Object.freeze(Object.defineProperty({__proto__:null,attributes:uw,markdown:cw},Symbol.toStringTag,{value:"Module"})),dw={title:"Bipolar I Disorder",description:"Recurrent manic episodes, typically alternating with major depressive episodes over time.",prevlance:"1.5%"},hw=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 

## DSM-5-TR
1. Criteria have been met for at least one manic episode
(Criteria 1–4 under “Manic Episode” below).  
2. At least one manic episode is not better explained by
schizoaffective disorder and is not superimposed on schizophrenia, schizophreniform disorder, delusional disorder, or other specified or unspecified schizophrenia
spectrum and other psychotic disorder.  

###### Manic Episode  
1. A distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally and persistently increased activity or energy, lasting at least 1 week and present most of the day, nearly every day (or any duration if hospitalization is necessary).  
2. During the period of mood disturbance and increased energy or activity, three (or more) of the following symptoms (four if the mood is only irritable) are present to a significant degree and represent a noticeable change from usual behavior:  
    1. Inflated self-esteem or grandiosity.  
    2. Decreased need for sleep (e.g., feels rested after only 3 hours of sleep).  
    3. More talkative than usual or pressure to keep talking.  
    4. Flight of ideas or subjective experience that thoughts are racing.  
    5. Distractibility (i.e., attention too easily drawn to unimportant or irrelevant external stimuli), as reported or observed.  
    6. Increase in goal-directed activity (either socially, at work or school, or sexually) or psychomotor agitation (i.e., purposeless non-goal-directed activity).  
    7. Excessive involvement in activities that have a high potential for painful consequences (e.g., engaging in unrestrained buying sprees, sexual indiscretions, or foolish business investments).  
3. The mood disturbance is sufficiently severe to cause marked impairment in social or occupational functioning or to necessitate hospitalization to prevent harm to self or others, or there are psychotic features.  
4. The episode is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication, other treatment) or another medical condition.  

###### Hypomanic Episode  
1. A distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally and persistently increased activity or energy, lasting at least 4 consecutive days and present most of the day, nearly every day.  
2. During the period of mood disturbance and increased energy and activity, three (or more) of the following symptoms (four if the mood is only irritable) have persisted, represent a noticeable change from usual behavior, and have been present to a significant degree:  
    1. Inflated self-esteem or grandiosity.  
    2. Decreased need for sleep (e.g., feels rested after only 3 hours of sleep).  
    3. More talkative than usual or pressure to keep talking.  
    4. Flight of ideas or subjective experience that thoughts are racing.  
    5. Distractibility (i.e., attention too easily drawn to unimportant or irrelevant external stimuli), as reported or observed.  
    6. Increase in goal-directed activity (either socially, at work or school, or sexually) or psychomotor agitation.  
    7. Excessive involvement in activities that have a high potential for painful consequences (e.g., engaging in unrestrained buying sprees, sexual indiscretions, or foolish business investments).  
3. The episode is associated with an unequivocal change in functioning that is uncharacteristic of the individual when not symptomatic.  
4. The disturbance in mood and the change in functioning are observable by others.  
5. The episode is not severe enough to cause marked impairment in social or occupational functioning or to necessitate hospitalization. If there are psychotic features, the episode is, by definition, manic.  
6. The episode is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication, other treatment) or another medical condition.  

###### Major Depressive Episode  
1. Five (or more) of the following symptoms have been present during the same 2-week period and represent a change from previous functioning; at least one of the symptoms is either (a) depressed mood or (b) loss of interest or pleasure.  
    1. Depressed mood most of the day, nearly every day, as indicated by either subjective report (e.g., feels sad, empty, or hopeless) or observation made by others (e.g., appears tearful). (Note: In children and adolescents, can be irritable mood.)  
    2. Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day (as indicated by either subjective account or observation).  
    3. Significant weight loss when not dieting or weight gain (e.g., a change of more than 5% of body weight in a month), or decrease or increase in appetite nearly every day. (Note: In children, consider failure to make expected weight gain.)  
    4. Insomnia or hypersomnia nearly every day.  
    5. Psychomotor agitation or retardation nearly every day (observable by others, not merely subjective feelings of restlessness or being slowed down).  
    6. Fatigue or loss of energy nearly every day.  
    7. Feelings of worthlessness or excessive or inappropriate guilt (which may be delusional) nearly every day (not merely self-reproach or guilt about being sick).  
    8. Diminished ability to think or concentrate, or indecisiveness, nearly every day (either by subjective account or as observed by others).  
    9. Recurrent thoughts of death (not just fear of dying), recurrent suicidal ideation without a specific plan, or a suicide attempt or a specific plan for committing suicide.  
2. The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
3. The episode is not attributable to the physiological effects of a substance or another medical condition.  
Note: Responses to a significant loss (e.g., bereavement,
financial ruin, losses from a natural disaster, a serious medical illness or disability) may include the feelings of intense sadness, rumination about the loss, insomnia, poor appetite, and weight loss noted in Criterion A, which may resemble a depressive episode. Although such symptoms may be understandable or considered appropriate to the loss, the presence of a major depressive episode in addition to the normal response to a significant loss should also be carefully considered. This decision inevitably requires the exercise of clinical judgment based on the individual’s history and the cultural norms for the expression of distress in the context of loss.

###### Specifiers
- Current or most recent manic episode:  
    - Severity (mild, moderate, severe)  
    - With psychotic features 
    - In partial remission  
    - In full remission
- Current or most recent hypomanic episode:  
    - Severity (mild, moderate, severe)  
    - With psychotic features 
    - In partial remission  
    - In full remission
- Current or most recent major depression episode: 
    - Severity (mild, moderate, severe)  
    - With psychotic features 
    - In partial remission  
    - In full remission
- Current or most recent episode, unspecified:  
    - Severity (mild, moderate, severe)  
    - With psychotic features 
    - In partial remission  
    - In full remission
- With anxious distress  
- With mixed features  
- With rapid cycling  
- With melancholic features  
- With atypical features (e.g., mood brightens in response to positive events, hypersomnia, leaden paralysis, long-standing pattern of interpersonal rejection sensitivity)  
- With mood-congruent psychotic features (i.e., the content of delusions and hallucinations is consistent with the manic themes of grandiosity, invulnerability, etc.)  
- With mood-incongruent psychotic features (i.e., the content of delusions and hallucinations does not involve the manic themes of grandiosity, invulnerability, etc. or is mixed)  
- with catatonia 
- With peripartum onset  
- With seasonal pattern
- Remission status if full criteria are not currently met for a manic, hypomanic, or major depressive episode.
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 

## DSM-IV
Listed as Bipolar I Disorder, Single Manic Episode, Most Recent Episode Hypomanic, Most Recent Episode Manic, Most Recent Episode Mixed, Most Recent Episode Depressed, Most Recent Episode Unspecified.   

###### Bipolar I Disorder, Single Manic Episode
1. Presence of only one Manic Episode and no past Major Depressive Episodes.  
<i>Note: Recurrence is defined as either a change in polarity from depression or an interval of at least 2 months without manic symptoms.</i>  
2. The Manic Episode is not better accounted for by Schizoaffective Disorder and is not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.  

###### Specifiers
- Mixed: if symptoms meet criteria for a Mixed Episode  
- Severity/Psychotic/Remission Specifiers  
- With Catatonic Features  
- With Postpartum Onset

#### Bipolar I Disorder, Most Recent Episode Hypomanic
1. Currently (or most recently) in a Hypomanic Episode.  
2. There has previously been at least one Manic Episode or Mixed Episode.  
3. The mood symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
4. The mood episodes in Criteria A and B are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.
 
###### Specifiers
- Longitudinal Course Specifiers (With and Without Interepisode Recovery)  
- With Seasonal Pattern  
- With Rapid Cycling

#### Bipolar I Disorder, Most Recent Episode Manic
1. Currently (or most recently) in a Manic Episode.  
2. There has previously been at least one Major Depressive Episode, Manic Episode, or Mixed Episode.  
3. The mood episodes in Criteria 1 and 2 are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.  

###### Specifiers
- Longitudinal Course Specifiers (With and Without Interepisode Recovery)  
- With Seasonal Pattern  
- With Rapid Cycling  
(For current or most recent episode)
- Severity/Psychotic/Remission Specifiers  
- With Catatonic Features  
- With Postpartum Onset  

#### Bipolar I Disorder, Most Recent Episode Mixed
1. Currently (or most recently) in a Mixed Episode  
2. There has previously been at least one Major Depressive Episode, Manic Episode, or Mixed Episode  
3. The mood episodes in Criteria A and B are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.  

###### Specifiers
- Longitudinal Course Specifiers (With and Without Interepisode Recovery)  
- With Seasonal Pattern  
- With Rapid Cycling  
(For current and most recent episode)  
- Severity/Psychotic/Remission Specifiers  
- With Catatonic Features  
- With Postpartum Onset

#### Bipolar I Disorder, Most Recent Episode Depressed
1. Currently (or most recently) in a Major Depressive Episode  
2. There has previously been at least one Manic Episode or Mixed Episode  
3. The mood episodes in Criteria 1 and 2 are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.

###### Specifiers
- Longitudinal Course Specifiers (With and Without Interepisode Recovery)  
- With Seasonal Pattern  
- With Rapid Cycling  
(For current and most recent episode)  
- Severity/Psychotic/Remission Specifiers  
- Chronic
- With Melancholic Features  
- With Atypical Features  
- With Postpartum Onset

#### Bipolar I Disorder, Most Recent Episode Unspecified
1. Criteria, except for duration, are currently (or most recently) met for a Manic, a Hypomanic, a Mixed, or a Major Depressive Episode  
2. There has previously been at least one Manic Episode or Mixed Episode  
3. The mood symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
4. The mood symptoms in Criteria A and B are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.  
5. The mood symptoms in Criteria 1 and 2 are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication, or other treatment) or a general medical condition (e.g., hyperthyroidism).

###### Specifiers
- Longitudinal Course Specifiers (With and Without Interepisode Recovery)  
- With Seasonal Pattern  
- With Rapid Cycling  

###### Manic Episode  
1. A distinct period of abnormally and persistently elevated, expansive, or irritable mood, lasting at least 1 week (or any duration if hospitalization is necessary).  
2. During the period of mood disturbance, three (or more) of the following symptoms have persisted (four if the mood is only irritable) and have been present to a significant degree:  
    1. Inflated self-esteem or grandiosity  
    2. Decreased need for sleep (e.g., feels rested after only 3 hours of sleep)  
    3. More talkative than usual or pressure to keep talking  
    4. Flight of ideas or subjective experience that thoughts are racing  
    5. Distractibility (i.e., attention too easily drawn to unimportant or irrelevant external stimuli)  
    6. Increase in goal-directed activity (either socially, at work or school, or sexually) or psychomotor agitation  
    7. Excessive involvement in pleasurable activities that have a high potential for painful consequences (e.g., engaging in unrestrained buying sprees, sexual indiscretions, or foolish business investments)  
3. The symptoms do not meet criteria for a Mixed Episode  
4. The mood disturbance is sufficiently severe to cause marked impairment in occupational functioning or in usual social activities or relationships with others, or to necessitate hospitalization to prevent harm to self or others, or there are psychotic features.  
5. The symptoms are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication, or other treatment) or a general medical condition (e.g., hyperthyroidism). 

###### Mixed Episode
1. The criteria are met both for a Manic Episode and for a Major Depressive Episode (except for duration) nearly every day during at least a 1-week period.  
2. The mood disturbance is sufficiently severe to cause marked impairment in occupational functioning or in usual social activities or relationships with others, or to necessitate hospitalization to prevent harm to self or others, or there are psychotic features.  
3. The symptoms are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication, or other treatment) or a general medical condition (e.g., hyperthyroidism).

###### Hypomanic Episode
1. A distinct period of persistently elevated, expansive, or irritable mood, lasting throughout at least 4 days, that is clearly different from the usual nondepressed mood.  
2. During the period of mood disturbance, three (or more) of the following symptoms have persisted (four if the mood is only irritable) and have been present to a significant degree:  
    1. Inflated self-esteem or grandiosity  
    2. Decreased need for sleep (e.g., feels rested after only 3 hours of sleep)  
    3. More talkative than usual or pressure to keep talking  
    4. Flight of ideas or subjective experience that thoughts are racing  
    5. Distractibility (i.e., attention too easily drawn to unimportant or irrelevant external stimuli)  
    6. Increase in goal-directed activity (either socially, at work or school, or sexually) or psychomotor agitation  
    7. Excessive involvement in pleasurable activities that have a high potential for painful consequences (e.g., the person engages in unrestrained buying sprees, sexual indiscretions, or foolish business investments)  
3. The episode is associated with an unequivocal change in functioning that is uncharacteristic of the person when not symptomatic.  
4. The disturbance in mood and the change in functioning are observable by others.  
5. The episode is not severe enough to cause marked impairment in social or occupational functioning, or to necessitate hospitalization, and there are no psychotic features.  
6. The symptoms are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication, or other treatment) or a general medical condition (e.g., hyperthyroidism).

###### Major Depressive Episode
1. Five (or more) of the following symptoms have been present during the same 2-week period and represent a change from previous functioning; at least one of the symptoms is either (1) depressed mood or (2) loss of interest or pleasure.  
    1. Depressed mood most of the day, nearly every day, as indicated by either subjective report (e.g., feels sad or empty) or observation made by others (e.g., appears tearful). Note: In children and adolescents, can be irritable mood.  
    2. Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day (as indicated by either subjective account or observation made by others)  
    3. Significant weight loss when not dieting or weight gain (e.g., a change of more than 5% of body weight in a month), or decrease or increase in appetite nearly every day. Note: In children, consider failure to make expected weight gains.  
    4. Insomnia or hypersomnia nearly every day  
    5. Psychomotor agitation or retardation nearly every day (observable by others, not merely subjective feelings of restlessness or being slowed down)  
    6. Fatigue or loss of energy nearly every day  
    7. Feelings of worthlessness or excessive or inappropriate guilt (which may be delusional) nearly every day (not merely self-reproach or guilt about being sick)  
    8. Diminished ability to think or concentrate, or indecisiveness, nearly every day (either by subjective account or as observed by others)  
    9. Recurrent thoughts of death (not just fear of dying), recurrent suicidal ideation without a specific plan, or a suicide attempt or a specific plan for committing suicide  
2. The symptoms do not meet criteria for a Mixed Episode  
3. The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
4. The symptoms are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition (e.g., hypothyroidism).  
5. The symptoms are not better accounted for by Bereavement, i.e., after
the loss of a loved one, the symptoms persist for longer than 2 months or are characterized by marked functional impairment, morbid preoccupation with worthlessness, suicidal ideation, psychotic symptoms, or psychomotor retardation.
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 

## DSM-III
Listed as Bipolar disorder, Mixed, Manic, or Depressed.  

#### Bipolar Disorder, Mixed
1. Current (or most recent) episode involves the full symptomatic picture of both manic and major depressive episodes, intermixed or rapidly alternating every few days.  
2. Depressive symptoms are prominent and last at least a full day.  

#### Bipolar Disorder, Manic
1. Currently (or most recently) in a manic episode. (If there has been a previous manic episode, the current episode need not meet the full criteria for a manic episode.)  

#### Bipolar Disorder, Depressed
1. Has had one or more manic episodes  
2. Currently (or most recently) in a major depressive episode. (If there has been a previous major depressive episode, the current episode of depression need not meet the full criteria for a major depressive episode.)

###### Manic Episode
1. One or more distinct periods with a predominantly elevated, expansive, or irritable mood. The elevated or irritable mood must be a prominent part of the illness and relatively persistent, although it may alternate or intermingle with depressive mood.  
2. Duration of at least one week (or any duration if hospitalization is necessary), during which, for most of the time, at least three of the following symptoms have persisted (four if the mood is only irritable) and have been present to a significant degree:  
    1. Increase in activity (either socially, at work, or sexually) or physical restlessness  
    2. More talkative than usual or pressure to keep talking  
    3. Flight of ideas or subjective experience that thoughts are racing  
    4. Inflated self-esteem (grandiosity, which may be delusional)  
    5. Decreased need for sleep  
    6. Distractibility, i.e., attention is too easily drawn to unimportant or irrevelant external stimuli  
    7. Excessive involvement in activities that have high potentional for painful consequences which is not recognized, e.g., buying sprees, sexual indiscretions, foolish business investments, reckless driving  
3. Neither of the following dominates the clinical picture when an affective syndrome is absent (i.e., symptoms in Criteria 1 and 2 above):  
    1. Preoccupation with a mood-incongruent delusion or hallucination  
    2. Bizarre behavior  
4. Not superimposed on either Schizophrenia, Schizophreniform Disorder, or a Paranoid Disorder  
5. Not due to any Organic Mental Disorder, such as Substance Intoxication  

##### Specifiers
- In Remission  
- With Psychotic Features  
    - Mood-congruent Psychotic Features  
    - Mood-incongruent Psychotic Features  
        - Delusions or hallucinations  
        - Catatonic symptoms (stupor, mutism, negativism, posturing)  
- Without Psychotic Features  
- Unspecified

###### Major Depressive Episode
1. Dysphoric mood or loss of interest or pleasure in all or almost ail usual activities and pastimes. The dysphoric mood is characterized by symptoms such as the following: depressed, sad,, blue, hopeless, low, down in the dumps, irritable. The mood disturbance must be prominent and relatively persistent, but not necessarily the most dominant symptom, and does not include momentary shifts from one dysphoric mood to another dysphoric mood, e.g., anxiety to depression to anger, such as are seen in states of acute psychotic turmoil. (For children under six, dysphoric mood may
have to be inferred from a persistently sad facial expression.)  
2. At least four of the following symptoms have each been present nearly every day for a period of at least two weeks (in children under six, at least three of the first four).  
    1. Poor appetite or significant weight loss (when not dieting) or increased appetite or significant weight gain (in children under six, consider failure to make expected weight gains)  
    2. Insomnia or hypersomnia  
    3. Psychomotor agitation or retardation (but not merely subjective feelings of restlessness or being slowed down) (in children under six, hypoactivity)  
    4. Loss of interest or pleasure in usual activities, or decrease in sexual drive not limited to a period when delusional or hallucinating (In children under six, signs of apathy)  
    5. Loss of energy; fatigue  
    6. Feelings of worthlessness, self-reproach, or excessive or inappropriate guilt (either may be delusional)  
    7. Complaints or evidence of diminished ability to think or concentrate, such as slowed thinking, or indecisiveness not associated with marked loosening of associations or incoherence  
    8. Recurrent thoughts of death, suicidal ideation, wishes to be dead, or suicide attempt  
3. Neither of the following dominates the clinical picture when an affective syndrome is absent (i.e., symptoms in Criteria 1 and 2 above):  
    1. Preoccupation with a mood-incongruent delusion or hallucination  
    2. Bizarre behavior  
4. Not superimposed on either Schizophrenia, Schizophreniform Disorder, or a Paranoid Disorder  
5. Not due to any Organic Mental Disorder, such as Substance Intoxication  

##### Specifiers
- In Remission  
- With Psychotic Features  
    - Mood-congruent Psychotic Features  
    - Mood-incongruent Psychotic Features  
        - Delusions or hallucinations  
        - Catatonic symptoms (stupor, mutism, negativism, posturing)  
- Without Psychotic Features 
- With Melancholia: Loss of pleasure in all or almost all activities, lack of reactivity to usually pleasurable stimuli (doesn't fete! much better, evert temporarily, when something good happens), and at least three of the following:  
    -  Distinct quality of depressed mood, i.e., the depressed mood is perceived as distinctly different from the kind of feeling experienced following the death of a loved one  
    - The depression is regularly worse in the morning  
    - Early morning awakening (at least two hours before usual time of awakening)  
    - Marked psychomotor retardation or agitation  
    - Significant anorexia or weight loss  
    - Excessive or inappropriate guilt  
- Without Melancholia
- Unspecified
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 

## DSM-II
Listed as Manic-Depressive Illness (also referred to as Manic-Depressive Psychosis), Manic Type, Depressed Type, or Circular Type.   

These disorders are marked by severe mood swings and a tendency to remission and recurrence. Patients may be given this diagnosis in the absence of a previous history of affective psychosis if there is no obvious precipitating event. This disorder is divided into three
major subtypes: manic type, depressed type, and circular type.

#### Manic-Depressive Illness (Psychosis), Manic Type
This disorder consists exclusively of manic episodes. These episodes are characterized by excessive elation, irritability, talkativeness, flight of ideas, and accelerated speech and motor activity. Brief periods of depression sometimes occur, but they are never true depressive episodes.

#### Manic-Depressive Illness (Psychosis), Depressed Type
This disorder consists exclusively of depressive episodes. These episodes are characterized by severely depressed mood and by mental and motor retardation progressing occasionally to stupor. Uneasiness, apprehension, perplexity and agitation may also be present.
When illusions, hallucinations, and delusions (usually of guilt or of hypochondriacal or paranoid ideas) occur, they are attributable to the dominant mood disorder. Because it is a primary mood disorder, this psychosis differs from the Psychotic depressive reaction, which is more easily attributable to precipitating stress. Cases incompletely labelled as "psychotic depression" should be classified here rather than under Psychotic depressive reaction.

#### Manic-Depressive Illness (Psychosis), Circular Type
This disorder is distinguished by at least one attack of both a depressive episode and a manic episode. This phenomenon makes clear why manic and depressed types are combined into a single category. (In DSM-I these cases were diagnosed under "Manic depressive reaction, other.") The current episode should be specified and
coded as one of the following:  
    - Manic-Depressive Illness, Circular Type, Manic  
    - Manic-Depressive Illness, Circular Type, Depressed
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 

## DSM
Listed as Manic Depressive Reactions, Manic Type, Depressive Type, and Other.  

These groups comprise the psychotic reactions which fundamentally are marked by severe mood swings, and a tendency to remission and recurrence. Various accessory symptoms such as illusions, delusions, and hallucinations may be added to the fundamental affective alteration.  
Manic depressive reaction is synonymous with the term manic depressive
psychosis. The reaction will be further classified into the appropriate one of the following types: manic, depressed, or other.

#### Manic Depressive Reaction, Manic Type
This group is characterized by elation or irritability, with overtalkativeness, flight of ideas, and increased motor activity. Transitory, often momentary, episodes of depression may occur, but will not change the classification from the manic type of reaction.  

#### Manic Depressive Reaction, Depressive Type
Here will be classified those cases with outstanding depression of mood and with mental and motor retardation and inhibition; in some cases there is much uneasiness and apprehension. Perplexity, stupor or agitation may be prominent symptoms, and may be added to the diagnosis as manifestations.  

#### Manic Depressive Reaction, Other
Here will be classified only those cases with marked mixtures of the cardinal manifestations of the above two phases (mixed type), or those cases where continuous alternation of the two phases occur (circular type). Other specified varieties of manic depressive reaction (manic stupor or unproductive mania) will also be included here.`,Cd=Object.freeze(Object.defineProperty({__proto__:null,attributes:dw,markdown:hw},Symbol.toStringTag,{value:"Module"})),fw={title:"Bipolar II Disorder",description:"Recurrent hypomanic episodes, typically alternating with major depressive episodes over time."},pw=`The DSM-5 no longer considers bipolar II to be a less severe diagnosis than bipolar I, insofar as the burden of depression and unstable moods in bipolar II often incur serious impairments in social and work life.

<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 

## DSM-5-TR
For a diagnosis of bipolar II disorder, it is necessary to meet the following criteria for a current or past hypomanic episode and the following criteria for a current or past major depressive episode (see the Bipolar I section for the Hypomanic Episode and Major Depressive Episode criteria):  
1.   Criteria have been met for at least one hypomanic episode (Criteria 1–6 under “Hypomanic Episode” above) and at least one major depressive episode (Criteria 1–3 under “Major Depressive Episode” above).  
2. There has never been a manic episode.  
3. At least one hypomanic episode and at least one major
depressive episode are not better explained by schizoaffective disorder and are not superimposed on
schizophrenia, schizophreniform disorder, delusional
disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorder.  
4. The symptoms of depression or the unpredictability caused by frequent alternation between periods of depression and hypomania causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.

###### Specifiers
Current or most recent episodes: 
- Hypomanic 
    - With anxious distress 
    - With mixed features  
    - With rapid cycling  
    - With peripartum onset  
    - With seasonal pattern 
- Depressed  
    - With anxious distress 
    - With mixed features  
    - With rapid cycling  
    - With melancholic features  
    - With atypical features  
    - With mood-congruent psychotic features  
    - With mood-incongruent psychotic features  
    - With catatonia
    - With peripartum onset  
    - With seasonal pattern
- In partial remission  
- In full remission 
- Severity of major depressive episode if present (mild, moderate, severe)
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 

## DSM-IV
Listed as Bipolar II Disorder.  

1. Presence (or history) of one or more Major Depressive Episodes  
2. Presence (or history) of at least one Hypomanic Episode  
3. There has never been a Manic Episode  
4. The mood symptoms in Criteria 1 and 2 are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.  
5. The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  

###### Specifiers
- Hypomanic: if currently (or most recently) in a Hypomanic Episode  
- Depressed: if currently (or most recently) in a Major Depressive Episode  
- Severity/Psychotic/Remission Specifiers  
- Chronic  
- With Catatonic Features  
- With Melancholic Features  
- With Atypical Features  
- With Postpartum Onset  
- Longitudinal Course Specifiers (With and Without Interepisode Recovery)  
- With Seasonal Pattern  
- With Rapid Cycling
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 

## DSM-III
Referenced under Atypical Bipolar Disorder:  
This is a residual category for individuals with manic features that cannot be classified as Bipolar Disorder or as Cyclothymic Disorder. For example, an individual who previously had a major depressive episode and now has an episode of illness with some manic features (hypomanic episode), but not of sufficient severity and duration to meet the criteria for a manic episode. Such cases have been referred to as "Bipolar II."
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 

## DSM
Does not appear.
</div>`,Ad=Object.freeze(Object.defineProperty({__proto__:null,attributes:fw,markdown:pw},Symbol.toStringTag,{value:"Module"})),mw={title:"Bipolar and Related Disorder Due to Another Medical Condition",description:"Prominent bipolar symptoms caused by another medication condition."},gw=`## DSM-5
1. A prominent and persistent disturbance in mood that predominates in the clinical picture and is characterized by abnormally elevated, expansive, or irritable mood and abnormally increased activity or energy. 
2. There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.  
3. The disturbance is not better explained by another mental disorder.  
4. The disturbance does not occur exclusively during the course of delirium.  
5. The disturbance causes clinically significant distress or impairment in social or occupational functioning, or necessitates hospitalization to prevent harm
to self or others, or there are psychotic features.

###### Specifiers
- With manic features  
- With manic- or hypomanic-like episode  
- With mixed features (i.e., symptoms of depression are also present but do not predominate in the clinical picture)

#### Differential Diagnosis
- Delirium and major or mild neurocognitive disorder  
- Symptoms of catatonia and acute anxiety  
- Medication-induced depressive or manic symptoms`,Od=Object.freeze(Object.defineProperty({__proto__:null,attributes:mw,markdown:gw},Symbol.toStringTag,{value:"Module"})),yw={title:"Cyclothymic Disorder",description:"Mood cycling between hypomania and depressive episodes over two years that does not meet the criteria for bipolar I or II.",prevalence:"0.04-2.5%"},vw=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 

## DSM-5-TR
1. For at least 2 years (at least 1 year in children and
adolescents) there have been numerous periods with
hypomanic symptoms that do not meet criteria for a
hypomanic episode and numerous periods with depressive
symptoms that do not meet criteria for a major depressive episode.  
2. During the above 2-year period (1 year in children and adolescents), Criterion 1 symptoms have been present for at least half the time and the individual has not been without the symptoms for more than 2 months at a time.  
3. Criteria for a major depressive, manic, or hypomanic episode have never been met.   
4. The symptoms in Criterion 1 are not better explained by schizoaffective disorder, schizophrenia, schizophreniform disorder, delusional disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorder.  
5. The symptoms are not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition (e.g., hyperthyroidism).  
6. The symptoms cause clinically significant distress or
impairment in social, occupational, or other important areas of functioning.

###### Specifiers
- With anxious distress
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 

## DSM-IV
Listed as Cyclothymic Disorder.  

1. For at least 2 years, the presence of numerous periods with hypomanic symptoms and numerous periods with depressive symptoms that do not meet criteria for a Major Depressive Episode. Note: In children and adolescents, the duration must be at least 1 year.  
2. During the above 2-year period (1 year in children and adolescents), the person has not been without the symptoms in Criterion 1 for more than 2 months at a time.  
3. No Major Depressive Episode, Manic Episode, or Mixed Episode has been present during the first 2 years of the
disturbance.  
4. The symptoms in Criterion 1 are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not
Otherwise Specified.  
5. The symptoms are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition (e.g., hyperthyroidism).  
6. The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
</div>  
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 

## DSM-III
Listed as Cyclothymic Disorder.  

1. During the past two years, numerous periods during which some symptoms characteristic of both the depressive and the manic syndromes were present, but were not of sufficient severity and duration to meet the criteria for a major depressive or manic episode.  
2. The depressive periods and hypomanic periods may be separated by periods of normal mood lasting as long as months at a time, they may be intermixed, or they may alternate.  
3. During depressive periods there is depressed mood or loss of interest or pleasure in all or almost all, usual activities and pastimes, and at least three of the
following:  
    1. Insomnia or hypersomnia  
    2. Low energy or chronic fatigue  
    3. Feelings of inadequacy  
    4. Decreased effectiveness or productivity at school, work, or home  
    5. Decreased attention, concentration, or ability to think clearly  
    6. Social withdrawal  
    7. Loss of interest in or enjoyment of sex  
    8. Restriction of involvement in pleasurable activities; guilt over past activities  
    9. Feeling slowed down  
    10. Less talkative than usual  
    11. Pessimistic attitude toward the future, or brooding about past events  
    12. Tearfulness or crying  
During hypomanic periods there is an elevated, expansive, or irritable mood and at least three of the following:  
    1. Decreased need for sleep  
    2. More energy than usual  
    3. Inflated self-esteem  
    4. Increased productivity, often associated with unusual and self-imposed working hours  
    5. Sharpened and unusually creative thinking  
    6. Uninhibited people-seeking (extreme gregariousness)  
    7. Hypersexuality without recognition or possibility of painful consequences  
    8. Excessive involveemnt in pleasureable activities with lack of concern for the high potential for painful consequences, e.g., buying sprees, foolish business investments, reckless driving  
    9. Physical restlessness  
    10. More talkative than usual  
    11. Overoptimism or exaggeration of past achievements  
    12. Inappropriate laughing, joking, punning  
4. Absence of psychotic features such as delusions, hallucinations, incoherence, or loosening of associations.  
5. Not due to any other mental disorder, such as partial remission of Bipolar Disorder. However, Cyclothymic Disorder may precede Bipolar Disorder.
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 

## DSM-II
`,Pd=Object.freeze(Object.defineProperty({__proto__:null,attributes:yw,markdown:vw},Symbol.toStringTag,{value:"Module"})),bw={title:"Other Specified Bipolar and Related Disorder",description:"Bipolar symptoms with a specific reason for not meeting criteria for other bipolar diagnoses."},Tw=`This diagnosis is given when characteristic bipolar symptoms cause clinically significant distress or impairment in social or occupational functioning, but do not meet the full criteria for any more specific bipolar disorder. The "other specified" category is used when clinicians choose to communicate the specific reason that the the criteria are not met, such as:  
- Short-duration hypomanic episodes (2-3 days) and major depressive episodes.  
- Hypomanic episodes with insufficient symptoms and major depressive episodes. 
- Hypomanic episode without prior major depressive episode.  
- Short-duration cyclothymia (less than 2 years).  
- Manic episode superimposed on schizophrenia, schizophreniform disorder, delusional disorder, or other specified and unspecified schizophrenia spectrum and other psychotic disorder.`,Nd=Object.freeze(Object.defineProperty({__proto__:null,attributes:bw,markdown:Tw},Symbol.toStringTag,{value:"Module"})),Ew={title:"Substance/Medication-Induced Bipolar and Related Disorder",description:"Prominent bipolar symptoms during or soon after substance/medication use or withdrawal."},ww=`This diagnosis is given instead of substance intoxication or substance withdrawal only when the bipolar symptoms predominate and are sufficiently severe to warrant clinical attention.

## DSM-5
1. A prominent and persistent disturbance in mood that predominates in the clinical picture and is characterized by abnormally elevated, expansive, or irritable mood and abnormally increased activity or energy.  
2. There is evidence from the history, physical examination, or laboratory findings of both:  
    1. The symptoms developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.  
    2. The involved substance/medication is capable of producing the symptoms.  
3. The disturbance is not better explained by a bipolar or related disorder that is not substance/medication-induced.  
4. The disturbance does not occur exclusively during the course of delirium.  
5. The disturbance causes clinically significant distress or impairment in social or occupational functioning.

###### Specifiers
- With onset during intoxication  
- With onset during withdrawal  
- With onset after medication use`,Md=Object.freeze(Object.defineProperty({__proto__:null,attributes:Ew,markdown:ww},Symbol.toStringTag,{value:"Module"})),xw={title:"Unspecified Bipolar and Related Disorder",description:"Bipolar symptoms without a specific reason for not meeting criteria for other bipolar diagnoses."},_w='This diagnosis is given when characteristic bipolar symptoms cause clinically significant distress or impairment in social or occupational functioning, but do not meet the full criteria for any more specific bipolar disorder. The "unspecified" category is used when clinicians choose not to communicate the specific reason that the the criteria are not met, including presentiations in which there is insufficient information to make a more specific diagnosis (e.g., emergency rooms).',Rd=Object.freeze(Object.defineProperty({__proto__:null,attributes:xw,markdown:_w},Symbol.toStringTag,{value:"Module"})),Sw={title:"Unspecified Mood Disorder",description:"Mood disturbance symptoms that do not meet full critiria for a bipolar or depressive disorder, and it is difficult to distinguish between unspecific bipolar disorder or unspecified depressive disorder."},kw="This diagnosis is given when characteristic mood disorder symptoms predominate and cause clinically significant impairment in social or occupational functioning but do not meet the full criteria for any bipolar or depressive disorders and it is difficult to choose between unspecific bipolar and related disorder and unspecified depressive disorder (e.g., acute agitation).",Ld=Object.freeze(Object.defineProperty({__proto__:null,attributes:Sw,markdown:kw},Symbol.toStringTag,{value:"Module"})),Dw={title:"Depressive Disorder Due to Another Medical Condition",description:"Persistent depressed mood or lack of interest or pleasure due to another medical condition."},Iw=`## DSM-5
1. A prominent and persistent disturbance in mood that predominates in the clinical picture and is characterized by depressed mood or markedly diminished interest or pleasure in all, or almost all, activities.  
2. There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.  
3. The symptoms are not better explained by another mental disorder (e.g., adjustment disorder, with depressed mood, in
which the stressor is a serious medical condition).  
4. The symptoms do not occur exclusively during the course of delirium.  
5. The symptoms cause clinically significant distress or impairment in social or occupational functioning.  

###### Specifiers
- With depressive features (i.e., full criteria for a major depressive episode are not met)  
- With major depressive-like episode (i.e., full criteria except Criterion 3 are met for a major depressive episode)  
- With mixed features (symptoms of mania or hypomania are also present but do not dominate the clinical picture)  

#### Differential Diagnosis
- Depressive disorders not due to another medical condition  
- Delirium and major or mild neurocognitive disorder  
- Adjustment disorders  
- Demoralization  
<i>Note, Demoralization typically lacks the anhedonia associated with depressive disorder due to another medical condition, and individuals will generally find pleasure in previously meaningful activities and be able to experience moments of happiness.</i>`,Fd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Dw,markdown:Iw},Symbol.toStringTag,{value:"Module"})),Cw={title:"Disruptive Mood Dysregulation Disorder",description:"Chronic severe irritability in children lasting over one year.",acronyms:"DMDD"},Aw=`This diagnosis was added to the DSM-5 to address concerns about the overdiagnosis of bipolar disorder in children. Rates of conversion from severe, nonepisodic irritability to bipolar disorder are very low, and children diagnosed with DMDD are more at risk of developing unipolar depressive and/or anxiety disorders in adulthood. 

## Diagnostic Critiera
1. Severe recurrent temper outbursts (verbal or physical aggression) that are grossly out of proportion in intensity and duration to the situation or provocation.  
2. The temper outbursts are inconsistent with developmental level.  
3. The temper outbursts occur, on average, three or more times per week.  
4. The mood between temper outbursts is persistently irritable or angry most of the day, nearly every day, and is observable by others.  
5. The symptoms above have been present for 12 or more months; throughout that period, there has not been a period of 3 or more consecutive months without all of the symptoms above.  
6. The symptoms are present in at least 2 of 3 settings — at home, at school, with peers — and are severe in at least 1 of these.  
7. The diagnosis should not be made for the first time before age 6 or after age 18.  
8. By history or observation, the age of onset is before 10 years.  
9. There has never been a distinct period lasting more than 1 day during which the full symptoms criteria (except duration) for a manic or hypomanic episode have been met.  
10. The behaviors do not occur exclusively during an episode of MDD and are not better explained by another mental disorder (e.g., ASD, PTSD, SAD).  
<i>Note, this diagnosis cannot coexist with ODD, intermittent explosive disorder, or bipolar disorder, but it can exist with others like MDD, ADHD, conduct disorder, and substance use disorders. If the person has ever met the criteria for a manic or hypomanic episode, the diagnosis DMDD should not be assigned. If the person fulfills criteria for ODD, the diagnosis should only be DMDD.</i>  
11. The symptoms are not attributable to the physiological effects of a substance or another medical or neurological condition.  

#### Differential Diagnosis
- Bipolar disorders  
<i>Note, bipolar disorders manifest in children, as they do in adults, in discrete episodes of mood perturbation, whereas in DMDD the irritable mood is persistent over many months.</i>  
- ODD  
<i>Note, while the symptoms of ODD and DMDD are quite similar, the persistent mood symptoms of DMDD are rare in children with ODD.</i>  
- ADHD  
- MDD  
- Anxiety disorders  
- ASD  
- Intermittent explosive disorder`,zd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Cw,markdown:Aw},Symbol.toStringTag,{value:"Module"})),Ow={title:"Major Depressive Disorder",description:"Depressed mood and loss of interest or pleasure in nearly all activities for at least two weeks, along with psychomotor, behavioral, and cognitive changes.",prevalence:"7%"},Pw=`## DSM-5
1. Five or more of the following symptoms have been present during the same 2-week period and represent a change from previous functioning. At least one of the symptoms is either depressed mood or loss of interest or pleasure.  
    1. Depressed mood most of the day, nearly every day, as indicated by either subjective report (e.g., feels sad, empty, hopeless) or observation by others (e.g., appears tearful).  
    <i>Note, in children and adolescents, this can be irritable mood.</i>  
    2. Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day.  
    3. Significant weight loss when not dieting or weight gain.  
    4. Insomnia or hypersomnia nearly every day.  
    5. Psychomotor agitation or retardation nearly every day that is observable to others.  
    6. Fatigue or loss of energy nearly every day.  
    7. Feelings of worthlessness or excessive/inappropriate guilt nearly every day.  
    8. Diminished ability to think or concentrate, or indecisiveness, nearly every day.  
    9. Recurrent thoughts about death (not just fear of dying), recurrent suicidal ideation without a specific plan, or a suicide attempt or specific plan for committing suicide.  
2. The symptoms cause clinically significant distress or impairment in social or occupational functioning.  
3. The episode is not attributable to the physiological effects of a substance or another medical condition.  
4. At least one major depressive episode is not better explained by schizoaffective disorder and is not superimposed on schizophrenia, schizophreniform disorder, delusional disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorders.  
5. There has never been a manic episode or a hypomanic episode.  
<i>This exclusion does not apply if any manic- or hypomanic-like episodes were substance-induced or attributable to the effects of another medical condition.</i>

###### Specifiers
- Severity:  
    - Mild  
    - Moderate  
    - Severe  
- With psychotic features  
- In partial remission  
- In full remission  
- Unspecified  
- With anxious distress  
- With mixed features  
- With melancholic features  
- With atypical features  
- With mood-congruent psychotic features  
- With mood-incongruent psychotic features  
- With catatonia  
- With peripartum onset  
- With seasonal pattern

#### Differential Diagnosis
- Manic episodes with irritable mood or with mixed features  
- Bipolar I disorder, bipolar II disorder, or other specified bipolar and related disorder  
- Depressive disorder due to another medical condition  
- Substance-medication-induced depressive disorder  
- Persistent depressive disorder  
- Premenstrual dysphoric disorder  
- DMDD  
- Major depressive episodes superimposed on schizophrenia, delusional disorder, schizophreniform disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorder.  
- Schizoaffective disorder  
- ADHD  
- Adjustment disorder with depressed mood  
- Bereavement  
- Sadness  
<i>Note, periods of sadness are inherent parts of the human experience and should not be diagnosed as MDD unless criteria are met for severity, duration, and functional impairment.</i>`,Bd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Ow,markdown:Pw},Symbol.toStringTag,{value:"Module"})),Nw={title:"Other Specified Depressive Disorder",description:"Depressed mood or lack of interest or pleasure that dominate the clinical picture but do not meet full criteria for a specified reason."},Mw=`This diagnosis is given when characteristic symptoms of a depressive disorder cause clinically
significant distress or impairment in social or occupational functioning and predominate the clinical picture, but do not meet the full criteria for any of the disorders in the depressive disorders class and do not meet criteria for adjustment disorder with depressed mood or adjustment disorder with mixed anxiety and depressed mood. The "other" specified depressive disorder category is used when the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for any specific depressive disorder. Some examples include:  
- Recurrent brief depression — depressed mood and at least four other symptoms of depression for 2-13 days at least once per month (not associated with menstrual cycle) for at least 12 consecutive months.  
- Short-duration depressive episode (4-13 days)  
- Depressive episode with insufficient symptoms  
- Major depressive episode superimposed on schizophrenia, schizophreniform disorder, delusional disorder, or other specified and unspecified schizophrenia spectrum and other psychotic disorder.`,jd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Nw,markdown:Mw},Symbol.toStringTag,{value:"Module"})),Rw={title:"Persistent Depressive Disorder",description:"Depressed mood for more days than not over a 2-year period."},Lw=`The DSM-5 consolidated chronic MDD and dysthymic disorder into persistent depressive disorder, which is characterized by a 2-year period of depressed mood for more days than not. If criteria for a major depressive epsidoe are met at any time within the 2-year period, both MDD and persistent depressive disorder, with intermittent major depressive epidoes should be diagnosed. 

## DSM-5
1. Depressed mood for most of the day, for more days than not, as indicated by either subjective account or observation by others, for at least 2 years.  
<i>Note, in children and adolescents, mood can be irritable and duration must be ast least 1 year</i>  
2. Two or more of the following symptoms must be present duration depressed mood:  
    1. Poor appetite or overeating  
    2. Insomnia or hypersomnia  
    3. Low energy or fatigue  
    4. Low self-esteem  
    5. Poor concentration or difficulty making decisions  
    6. Feelings of hopelessness  
3. During the 2-year period (1 year for children or adolescents) of symptoms, there has never been a period for more than 2 months without symptoms.  
4. Criteria for a major depressive episode may be continuously present for 2 years.  
5. There has never been a manic or hypomanic episode.  
6. The symptoms are not better explained by a persistent schizoaffective disorder, schizophrenia, delusional disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorder.  
7. The symptoms are not attributable to the physiological effects of a substance or another medical condition.  
8. The symptoms cause clinically significant distress or impairment in social or occupational functioning.

###### Specifiers
- With anxious distress  
- With atypical features  
- In partial remission  
- In full remission  
- Early onset (before 21 years of age)  
- Late onset (at 21 years of age or older)  
- With pure dysthymic syndrome (criteria for major depressive episode have not been met in the preceding 2 years)  
- With persistent major depressive episode (criteria for major depressive episode have been met throughout the preceding 2 years)  
- With intermittent major depressive episodes, with current episode  
- With intermittent major depressive episodes, without current episode  
- Severity:  
    - Mild  
    - Moderate  
    - Severe

#### Differential Diagnosis
- MDD  
- Other specified depressive disorder  
- Bipolar I and bipolar II disorders  
- Cyclothymic disorder  
- Psychotic disorders  
- Depressive or bipolar and related disorder due to another medical condition  
- Substance/medication-induced depressive or bipolar and related disorder  
- Personality disorders`,Ud=Object.freeze(Object.defineProperty({__proto__:null,attributes:Rw,markdown:Lw},Symbol.toStringTag,{value:"Module"})),Fw={title:"Premenstrual Dysphoric Disorder",description:"Marked differences in mood, energy levels, behavior and relationships with others during the onset of menses.",prevalence:"1.3-5.8%"},zw=`## DSM-5
1. In the majority of menstrual cycles during the preceding year, at least five symptoms must be present in the final week before onset of menses, start to <i>improve</i> within a few days after the onset of menses, and become <i>minimal</i> or abset in the week postmenses.  
<i>Note, these should be confirmed by prospective daily ratings during at least two symptomatic cycles.</i>
    1. One or more of the following must be present of the five (when combined with those listed in (b)):  
        1. Marked affective lability — mood swings, feeling suddenly sad or tearful, increased sensitivity to rejection.  
        2. Marked irritability or anger or increased interpersonal conflicts.  
        3. Marked depressed mood, feelings of hopelessness, or self-deprecating thoughts.  
        4. Marked anxiety, tension, and/or feelings of being keyed up or on edge.  
    2. One or more of the following must be present of the five (when combined with those listed in (a)):  
        1. Decreased interest in usual activities  
        2. Subjective difficulty in concentration  
        3. Lethargy, easy fatiguability, or marked lack of energy  
        4. Marked change in appetite — overeating, specific food cravings  
        5. Hypersomnia or insomnia  
        6. A sense of being overwhelmed or out of control  
        7. Physical symptoms — breast tenderness or swelling, joint or muscle pain, a sensation of bloating or weight gain.  
2. The symptoms cause clinically significant distress or interference in social or occupational activities.  
3. The symptoms are not merely an exacerbation of the symptoms of another disorder, such as MDD, panic disorder, persistent depressive disorder, or a personality disorder (although it may co-occur with any of these).  
4. The symptoms are not attributable to the effects of a substance or another medical condition.

#### Differential Diagnosis
- Premenstrual syndrome  
- Dysmenorrhea  
- Bipolar disorder, MDD, and persistent depressive disorder  
- Use of hormonal treatments  
- Other medical conditions`,Hd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Fw,markdown:zw},Symbol.toStringTag,{value:"Module"})),Bw={title:"Substance/Medication-Induced Depressive Disorder",description:"Persistent depressed mood and loss of interest or pleasure due to intoxication, use, or withdrawal from a substance or medication."},jw=`## DSM-5
1. Depressed mood or markedly diminished interest or pleasure in almost all activities that dominates in the clinical picture.  
2. There is evidence from the history, physical examination, or laboratory findings of both:  
    1. The symptoms developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.  
    2. The substance/medication is capable of producing the symptoms.  
3. The symptoms are not better explained by a depressive disorder that is not substance/medication-induced (e.g., symptoms preceded the substance/medication use).  
4. The symptoms do not occur exclusively during the course of delirium.  
5. The symptoms cause clinically significant distress or impairment in social or occupational functioning. 

###### Specifiers
- With onset during intoxication  
- With onset during withdrawal  
- With onset after medication use 

#### Differential Diagnosis
- Substance intoxication and withdrawal  
- Independent depressive disorder  
- Depressive disorder due to another medical condition  `,$d=Object.freeze(Object.defineProperty({__proto__:null,attributes:Bw,markdown:jw},Symbol.toStringTag,{value:"Module"})),Uw={title:"Unpecified Depressive Disorder",description:"Depressed mood or lack of interest or pleasure that dominate the clinical picture but do not meet full criteria for an unspecified reason."},Hw=`This diagnosis is given when characteristic symptoms of a depressive disorder cause clinically
significant distress or impairment in social or occupational functioning and predominate the clinical picture, but do not meet the full criteria for any of the disorders in the depressive disorders class and do not meet criteria for adjustment disorder with depressed mood or adjustment disorder with mixed anxiety and depressed mood. The "unspecified" depressive disorder category is used when the clinician chooses not to communicate the specific reason that the presentation does not meet the criteria for any specific depressive disorder, or when there is insufficient information to make a more specific diagnosis (e.g., emergency rooms).`,Wd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Uw,markdown:Hw},Symbol.toStringTag,{value:"Module"})),$w={title:"Unspecified Mood Disorder",description:"Mood disturbance symptoms that do not meet full critiria for a bipolar or depressive disorder, and it is difficult to distinguish between unspecific bipolar disorder or unspecified depressive disorder."},Ww=`This diagnosis is given when characteristic mood disorder symptoms predominate and cause clinically significant impairment in social or occupational functioning but do not meet the full criteria for any bipolar or depressive disorders and it is difficult to choose between unspecific bipolar and related disorder and unspecified depressive disorder (e.g., acute agitation).

###### Specifiers
- With anxious distress  
- With mixed features  
- With melancholic features  
- With atypical features  
- With psychotic features  
    - With mood-congruent psychotic features  
    - With mood-incongruent psychotic features  
- With catatonia  
- With peripartum onset  
- With seasonal pattern  
- In partial remission  
- In full remission  
- Severity:  
    - Mild  
    - Moderate  
    - Severe`,Vd=Object.freeze(Object.defineProperty({__proto__:null,attributes:$w,markdown:Ww},Symbol.toStringTag,{value:"Module"})),Vw={title:"Attention Deficit Hyperactivity Disorder",description:"Persistent pattern of inattention and/or hyperactivity-impulsivity that is present before the age of 12 and interferes with social, academic, or occupational functioning.",prevalence:"5-7% in children, 2-4% in adults",synonyms:"Attention Deficit Disorder",acronyms:"ADHD"},Yw=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. A persistent pattern of inattention and/or hyperactivityimpulsivity that interferes with functioning or development, as characterized by (1) and/or (2):  
    <b>Inattention</b>  
    Six (or more) of the following symptoms have persisted for at least 6 months to a degree that is inconsistent with developmental level and that negatively impacts directly on social and academic/occupational activities:   
    <i>Note: The symptoms are not solely a manifestation of oppositional behavior, defiance, hostility, or failure to understand tasks or instructions. For older adolescents and adults (age 17 and older), at least five symptoms are required.</i>  
        1. Often fails to give close attention to details or makes careless mistakes in schoolwork, at work, or during other activities (e.g., overlooks or misses details, work is inaccurate).  
        2. Often has difficulty sustaining attention in tasks or play activities (e.g., has difficulty remaining focused during lectures, conversations, or lengthy reading).  
        3. Often does not seem to listen when spoken to directly (e.g., mind seems elsewhere, even in the absence of any obvious distraction).  
        4. Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace (e.g., starts tasks but quickly loses focus and is easily sidetracked).  
        5. Often has difficulty organizing tasks and activities (e.g., difficulty managing sequential tasks; difficulty keeping materials and belongings in order; messy, disorganized work; has poor time management; fails to meet deadlines).  
        6. Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort (e.g., schoolwork or homework; for older adolescents and adults, preparing reports, completing forms, reviewing lengthy papers).  
        7. Often loses things necessary for tasks or activities (e.g., school materials, pencils, books, tools, wallets, keys, paperwork, eyeglasses, mobile telephones).  
        8. Is often easily distracted by extraneous stimuli (for older adolescents and adults, may include unrelated thoughts).  
        9. Is often forgetful in daily activities (e.g., doing chores, running errands; for older adolescents and adults, returning calls, paying bills, keeping appointments).  
    <b>Hyperactivity-Impulsivity</b>  
    Six (or more) of the following symptoms have persisted for at least 6 months to a degree that is inconsistent with  developmental level and that negatively impacts directly on social and academic/occupational activities:  
    <i>Note: The symptoms are not solely a manifestation of oppositional behavior, defiance, hostility, or a failure to understand tasks or instructions. For older adolescents and adults (age 17 and older), at least five symptoms are required.</i>  
        1. Often fidgets with or taps hands or feet or squirms in seat.  
        2. Often leaves seat in situations when remaining seated is expected (e.g., leaves his or her place in the classroom, in the office or other workplace, or in other situations that require remaining in place).  
        3. Often runs about or climbs in situations where it is inappropriate. (Note: In adolescents or adults, may be limited to feeling restless.)  
        4. Often unable to play or engage in leisure activities quietly.  
        5. Is often “on the go,” acting as if “driven by a motor” (e.g., is unable to be or uncomfortable being still for extended time, as in restaurants, meetings; may be experienced by others as being restless or difficult to keep up with).  
        6. Often talks excessively.  
        7. Often blurts out an answer before a question has been completed (e.g., completes people’s sentences; cannot wait for turn in conversation).  
        8. Often has difficulty waiting his or her turn (e.g., while waiting in line).  
        9. Often interrupts or intrudes on others (e.g., butts into conversations, games, or activities; may start using other people’s things without asking or receiving permission; for adolescents and adults, may intrude into or take over what others are doing).  
2. Several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years.  
3. Several inattentive or hyperactive-impulsive symptoms are present in two or more settings (e.g., at home, school, or work; with friends or relatives; in other activities).  
4. There is clear evidence that the symptoms interfere with, or reduce the quality of, social, academic, or occupational functioning.  
5. The symptoms do not occur exclusively during the course of schizophrenia or another psychotic disorder and are not better explained by another mental disorder (e.g., mood disorder, anxiety disorder, dissociative disorder, personality disorder, substance intoxication or withdrawal).  

###### Specifiers
ADHD can also be diagnosed as Other Specific or Unspecified.

- Combined presentation — If enough symptoms of both Inattention and Hyperativity-Impulsivity criteria were present for the past 6 months.  
- Predominantly inattentive presentation — If 6 or more symptoms of Inattention are present, but not Hyperactivity-Impulsivity, were present for the past 6 months.  
- Predominantly hyperative-impulsive presentation — If enough symptoms of Hyperactivity-Impulsivity, but not Impulsivity, were present for the past 6 months.  
- In partial remission — When full criteria were previously met, fewer than the full criteria have been met for the past 6 months, and the symptoms still result in impairment in social, academic, or occupational functioning.  
- Severity:
    - Mild — Few, if any, symptoms in excess of those required to make the diagnosis are present, and symptoms result in no more than minor impairments in social, academic, or occupational functioning.  
    - Moderate — Symptoms or functional impairment between "Mild" and "Severe" are present.  
    - Severe — Many symptoms in excess of those required to make the diagnosis, or several symptoms that are particularly severe, are present, or the symptoms result in marked impairment in social or occupational functioning.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Attention-Deficit/Hyperactivity Disorder.

1. Either (a) or (b):  
    1. Six (or more) of the following symptoms of <b>inattention</b> have persisted for at least 6 months to a degree that is maladaptive and inconsistent with developmental level:  
    <b>Inattention</b>  
        1. Often fails to give close attention to details or makes careless mistakes in schoolwork, work, or other activities.  
        2. Often has difficulty sustaining attention in tasks or play activities.  
        3. Often does not seem to listen when spoken to directly.  
        4. Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace (not due to oppositional behavior or failure to understand instructions).  
        5. Often has difficulty organizing tasks and activities.  
        6. Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort (such as schoolwork or homework).  
        7. Often loses things necessary for tasks or activities (e.g., toys, school assignments, pencils, books, or tools).  
        8. Is often easily distracted by extraneous stimuli.  
        9. Is often forgetful in daily activities.  
    2. Six (or more) of the following symptoms of <b>hyperactivity-impulsivity</b> have persisted for at least 6 months to a degree that is maladaptive and inconsistent with developmental level:  
    <b>Hyperactivity</b>  
        1. Often fidgets with hands or feet or squirms in seat.  
        2. Often leaves seat in classroom or in other situations in which remaining seated is expected.  
        3. Often runs about or climbs excessively in situations in which it is inappropriate (in adolescents or adults, may be limited to subjective feelings of restlessness).  
        4. Often has difficulty playing or engaging in leisure activities quietly.  
        5. Is often "on the go" or often acts as if "driven by a motor".  
        6. Often talks excessively.  
    <b>Impulsivity</b>  
        7. Often blurts out answers before questions have been completed.  
        8. Often has difficulty awaiting turn.  
        9. Often interrupts or intrudes on others (e.g., butts into conversations or games).  
2. Some hyperactivity-impulsive or inattentive symptoms that caused impairment were present before age 7 years.  
3. Some impairment from the symptoms is present in two or more settings (e.g., at school [or work] and at home).  
4. There must be clear evidence of clinically significant impairment in social, academic, or occupational functioning.  
5. The symptoms do not occur exclusively during the course of a Pervasive Developmental Disorder, Schizophrenia, or other Psychotic Disorder and are not better accounted for by another mental disorder (e.g., Mood Disorder, Anxiety Disorder, Dissociative Disorder, or a Personality Disorder).  

###### Specifiers
- Attention-Deficit/Hyperactivity Disorder, Combined Type: if both Criteria Al and A2 are met for the past 6 months.  
- Attention-Deficit/Hyperactivity Disorder, Predominantly Inattentive Type: if Criterion Al is met but Criterion A2 is not met for the past 6 months.  
- Attention-Deficit/Hyperactivity Disorder, Predominantly
Hyperactive-Impulsive Type: if Criterion A2 is met but Criterion Al is not met for the past 6 months.
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Attention Deficit Disorder with Hyperactivity, without Hyperactivity, or Residual Type.

The child displays, for his or her mental and chronological age, signs of developmentally inappropriate inattention, impulsivity, and hyperactivity. The signs must be reported by adults in the child's environment, such as parents and teachers. Because the symptoms are typically variable, they may not be observed directly by the clinician. When the reports of teachers and parents conflict, primary consideration should be given to the teacher reports because of greater familiarity with age-appropriate norms. Symptoms typically worsen in situations that require self-application, as in the classroom. Signs of the disorder may be absent when the child is in a new or a one-to-one situation.
The number of symptoms specified is for children between the ages of eight and ten, the peak age range for referral. In younger children, more severe forms of the symptoms and a greater number of symptoms are usually present. The opposite is true of older children.  
1. <b>Inattention.</b> At least three of the following:  
    1. Often fails to finish things he or she starts  
    2. Often doesn't seem to listen  
    3. Easily distracted  
    4. Has difficulty concentrating on schoolwork or other tasks requiring sustained attention  
    5. Has difficulty sticking to a play activity  
2. <b>Impulsivity.</b> At least three of the following:  
    1. Often acts before thinking  
    2. Shifts excessively from one activity to another  
    3. Has difficulty organizing work (this not being due to cognitive impairment)  
    4. Needs a lot of supervision  
    5. Frequently calls out in class  
    6. Has difficulty awaiting turn in games or group situations  
3. <b>Hyperactivity.</b> At least two of the following:  
    1. Runs about or climbs on things excessively  
    2. Has difficulty sitting still or fidgets excessively  
    3. Has difficulty staying seated  
    4. Moves about excessively during sleep  
    5. Is always "on the go" or acts as if "driven by a motor"  
4. Onset before the age of seven.  
5. Duration of at least six months.  
6. Not due to Schizophrenia, Affective Disorder, or Severe or Profound Mental Retardation.
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Not listed as a distinct disorder, although the non-psychotic organic brain syndromes category notes that "in children mild brain damage often manifests itself by hyperactivity, short attention span, easy distractability, and impulsiveness."
</div>

<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Not listed.`,Yd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Vw,markdown:Yw},Symbol.toStringTag,{value:"Module"})),qw={title:"Autism Spectrum Disorder",description:"Deficits in social communication and interaction with restricted, repetitive behaviors or interests. Often includes difficulty with changes in routine, intense focus on specific topics, and sensory sensitivities.",prevalence:"0.7-1%",synonyms:null,acronyms:"ASD"},Qw=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Persistent deficits in social communication and social interaction across multiple contexts, as manifested by all of the following, currently or by history (examples are illustrative, not exhaustive; see text):  
    1. Deficits in social-emotional reciprocity, ranging, for example, from abnormal social approach and failure of normal back-and-forth conversation; to reduced sharing of interests, emotions, or affect; to failure to initiate or respond to social interactions.  
    2. Deficits in nonverbal communicative behaviors used for social interaction, ranging, for example, from poorly integrated verbal and nonverbal communication; to abnormalities in eye contact and body language or deficits in understanding and use of gestures; to a total lack of facial expressions and nonverbal communication.  
    3. Deficits in developing, maintaining, and understanding relationships, ranging, for example, from difficulties adjusting behavior to suit various social contexts; to difficulties in sharing imaginative play or in making friends; to absence of interest in peers.  
2. Restricted, repetitive patterns of behavior, interests, or activities, as manifested by at least two of the following, currently or by history:  
    1. Stereotyped or repetitive motor movements, use of objects, or speech (e.g., simple motor stereotypies, lining up toys or flipping objects, echolalia, idiosyncratic phrases).  
    2. Insistence on sameness, inflexible adherence to routines, or ritualized patterns of verbal or nonverbal behavior (e.g., extreme distress at small changes, difficulties with transitions, rigid thinking patterns, greeting rituals, need to take same route or eat same food every day).  
    3. Highly restricted, fixated interests that are abnormal in intensity or focus (e.g., strong attachment to or preoccupation with unusual objects, excessively circumscribed or perseverative interests).  
    4. Hyper- or hyporeactivity to sensory input or unusual interest in sensory aspects of the environment (e.g., apparent indifference to pain/temperature, adverse response to specific sounds or textures, excessive smelling or touching of objects, visual fascination with lights or movement).  
3. Symptoms must be present in the early developmental period (but may not become fully manifest until social demands exceed limited capacities, or may be masked by learned strategies in later life).  
4. Symptoms cause clinically significant impairment in social, occupational, or other important areas of current functioning.  
5. These disturbances are not better explained by intellectual developmental disorder (intellectual disability) or global developmental delay. Intellectual developmental disorder and autism spectrum disorder frequently co-occur; to make
comorbid diagnoses of autism spectrum disorder and intellectual developmental disorder, social communication should be below that expected for general developmental level.

###### Specifiers
- Requiring very substantial support  
- Requiring substantial support  
- Requiring support  
- With or without accompanying intellectual impairment  
- With or without accompanying language impairment  
- Associated with a known genetic or othe rmedical condition or environmental factor  
- Associated with a neurodevelopmental, mental, or behavioral problem  
- With catatonia  
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Appears as Autistic Disorder, Rett's Disorder, Childhood Disintegrative Disorder, Asperger's Disorder, and Pervasive Developmental Disorder NOS, all under Pervasive Developmental Disorders in the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.  

<i>Autistic Disorder</i>  
1. A total of six (or more) items from (a), (b), and (c), with at least two from (a), and one each from (b) and (c):  
    1. qualitative impairment in social interaction, as manifested by at least two of the following:  
        1. marked impairment in the use of multiple nonverbal behaviors such as eye-to-eye gaze, facial expression, body postures, and gestures to regulate social interaction  
        2. failure to develop peer relationships appropriate to developmental level  
        3. a lack of spontaneous seeking to share enjoyment, interests, or achievements with other people (e.g., by a lack of showing, bringing, or pointing out objects of interest)  
        4. lack of social or emotional reciprocity  
    2. qualitative impairments in communication as manifested by at least one of the following:  
        1. delay in, or total lack of, the development of spoken language (not accompanied by an attempt to compensate through alternative modes of communication such as gesture or mime)  
        2. in individuals with adequate speech, marked impairment in the ability to initiate or sustain a conversation with others  
        3. stereotyped and repetitive use of language or idiosyncratic language  
        4. lack of varied, spontaneous make-believe play or social imitative play appropriate to developmental level  
    3. restricted repetitive and stereotyped patterns of behavior, interests, and activities, as manifested by at least one of the following:  
        1. encompassing preoccupation with one or more stereotyped and restricted patterns of interest that is abnormal either in intensity or focus  
        2. apparently inflexible adherence to specific, nonfunctional routines or rituals  
        3. stereotyped and repetitive motor mannerisms (e.g., hand or finger flapping or twisting, or complex whole-body movements)  
        4. persistent preoccupation with parts of objects  
2. Delays or abnormal functioning in at least one of the following areas, with onset prior to age 3 years: (1) social interaction, (2) language as used in social communication, or (3) symbolic or imaginative play.  
3. The disturbance is not better accounted for by Rett's Disorder or Childhood Disintegrative Disorder.  

<i>Rett's Disorder</i>  
1. All of the following:  
    1. apparently normal prenatal and perinatal development  
    2. apparently normal psychomotor development through the first 5 months after birth  
    3. normal head circumference at birth  
2. Onset of all of the following after the period of normal development:  
    1. deceleration of head growth between ages 5 and 48 months  
    2. loss of previously acquired purposeful hand skills between ages 5 and 30 months with the subsequent development of stereotyped hand movements (e.g., hand-wringing or hand washing)  
    3. loss of social engagement early in the course (although often social interaction develops later)  
    4. appearance of poorly coordinated gait or trunk movements  
    5. severely impaired expressive and receptive language development with severe psychomotor retardation  

<i>Childhood Disintegrative Disorder</i>  
1. Apparently normal development for at least the first 2 years after birth as manifested by the presence of age-appropriate verbal and nonverbal communication, social relationships, play, and adaptive behavior.  
2. Clinically significant loss of previously acquired skills (before age 10 years) in at least two of the following areas:  
    1. expressive or receptive language  
    2. social skills or adaptive behavior  
    3. bowel or bladder control  
    4. play  
    5. motor skills  
3. Abnormalities of functioning in at least two of the following areas:  
    1. qualitative impairment in social interaction (e.g., impairment in nonverbal behaviors, failure to develop peer relationships, lack of social or emotional reciprocity)  
    2. qualitative impairments in communication (e.g., delay or lack of spoken language, inability to initiate or sustain a conversation, stereotyped and repetitive use of language, lack of varied makebelieve play)  
    3. restricted, repetitive, and stereotyped patterns of behavior, interests, and activities, including motor stereotypies and mannerisms  
4. The disturbance is not better accounted for by another specific Pervasive Developmental Disorder or by Schizophrenia.  

<i>Asperger's Disorder</i>  
1. Qualitative impairment in social interaction, as manifested by at least two of the following:  
    1. marked impairment in the use of multiple nonverbal behaviors such as eye-to-eye gaze, facial expression, body postures, and gestures to regulate social interaction  
    2. failure to develop peer relationships appropriate to developmental level  
    3. a lack of spontaneous seeking to share enjoyment, interests, or achievements with other people (e.g., by a lack of showing, bringing, or pointing out objects of interest to other people)  
    4. lack of social or emotional reciprocity  
2. Restricted repetitive and stereotyped patterns of behavior, interests, and activities, as manifested by at least one of the following:  
    1. encompassing preoccupation with one or more stereotyped and restricted patterns of interest that is abnormal either in intensity or focus  
    2. apparently inflexible adherence to specific, nonfunctional routines or rituals  
    3. stereotyped and repetitive motor mannerisms (e.g., hand or finger flapping or twisting, or complex whole-body movements)  
    4. persistent preoccupation with parts of objects  
3. The disturbance causes clinically significant impairment in social, occupational, or other important areas of functioning.  
4. There is no clinically significant general delay in language (e.g., single words used by age 2 years, communicative phrases used by age 3 years).  
5. There is no clinically significant delay in cognitive development or in the development of age-appropriate self-help skills, adaptive behavior (other than in social interaction), and curiosity about the environment in childhood.  
6. Criteria are not met for another specific Pervasive Developmental Disorder or Schizophrenia.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Referred to as Infantile Autism and Childhood Onset Pervasive Development Disorder under Pervasive Developmental Disorders in the Infancy, Childhood, and Adolescence section.  

#### Criteria
<i>Infantile Autism</i>  
1. Onset before 30 months of age.  
2. Pervasive lack of responsiveness to other people (autism).  
3. Gross deficits in language development.  
4. If speech; is present, peculiar speech patterns such as immediate and delayed echolalia, metaphorical language, pronominal reversal.  
5. Bizarre responses to various aspects of the environment, e.g., resistance to change, peculiar interest in or attachments to animate or inanimate objects.  
6. Absence of delusions, hallucinations, loosening of associations, and incoherence as in Schizophrenia.  

<i>Childhood Onset Pervasive Development Disorder</i>  
1. Gross and sustained impairment in social relationships, e.g., lack of appropriate affective responsivity, inappropriate clinging, asociality, lack of empathy.  
2. At least three of the following:  
    1. sudden excessive anxiety manifested by such symptoms as freefloating anxiety, catastrophic reactions to everyday occurrences, inability to be consoled when upset, unexplained panic attacks  
    2. constricted or inappropriate affect, including lack of appropriate fear reactions, unexplained rage reactions, and extreme mood lability  
    3. resistance to change in the environment (e,g., upset if dinner time is changed), or insistence on doing things in the same manner every time (e.g., putting on clothes always in the same order)  
    4. oddities of motor movement, such as peculiar posturing, peculiar hand or finger movements, or walking on tiptoe  
    5. abnormalities of speech, such as questionlike melody, monotonous voice  
    6. hyper- or hypo-sensitivity to sensory stimuli, e.g., hyperacusis  
    7. self-mutilation, e.g., biting or hitting self, head banging  
3. Onset of the full syndrome after 30 months of age and before 12 years of age.  
4. Absence of delusions, hallucinations, incoherence, or marked loosening of associations.
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
"Autistic behavior" and "autistic thinking" included as part of Schizophrenia, Childhood Type and Schizoid Personality.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
"Autistic, unrealistic thinking" included as part of Schizophrenic Reaction, Paranoid Type and "autism" as a "Psychotic reactions in children, manifesting primarily autism" included as part of Schizophrenic Reaction, Childhood Type, as well as "autistic thinking" as part of Schizoid Personality. 
</div>

<div class="dsm-date">
1911
</div>

<div class="dsm-box"> 

## Eugen Bleuler

Dr. Eugen Bleuler, a Swiss psychiatrist and director of the famous Burghölzli hospital, coined the term "autism" to describe a characteristic of schizophrenia (another term of his invention) in which psychotic patients appeared totally withdrawn, turned inward, oblivious to others, self-absorbed.`,qd=Object.freeze(Object.defineProperty({__proto__:null,attributes:qw,markdown:Qw},Symbol.toStringTag,{value:"Module"})),Gw={title:"Child Onset Fluency Disorder (Stuttering)",description:"Persistent disturbance in fluency and time patterning of speech with onset in childhood.",prevalence:"5-10% (1% in adults)",synonyms:"Stuttering"},Kw=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Disturbances in the normal fluency and time patterning of speech that are inappropriate for the individual’s age and language skills, persist over time, and are characterized by frequent and marked occurrences of one (or more) of the
following:  
    1. Sound and syllable repititions.  
    2. Sound prolongations of consonants as well as vowels.  
    3. Broken words (e.g., pauses within a word).  
    4. Audible or silent blocking (filled or unfilled pauses in speech).  
    5. Circumlocutions (word substitutions to avoid problematic words).  
    6. Words produced with an excess of physical tension.  
    7. Monosyllabic whole-word repetitions (e.g., “I-I-I-I see him”).  
2. The disturbance causes anxiety about speaking or limitations in effective communication, social participation, or academic or occupational performance, individually or in any combination.  
3. The onset of symptoms is in the early developmental period.   
<i>Note, later-onset cases are diagnosed as adult-onset fluency disorder.</i> 
4. The disturbance is not attributable to a speech-motor or sensory deficit, dysfluency associated with neurological insult (e.g., stroke, tumor, trauma), or another medical condition and is not better explained by another mental disorder. 
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Stuttering under Communication Disorders in the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.  

1. Disturbance in the normal fluency and time patterning of speech (inappropriate for the individual's age), characterized by frequent occurrences of one or more of the following:  
    1. sound and syllable repetitions  
    2. sound prolongations  
    3. interjections  
    4. broken words (e.g., pauses within a word)  
    5. audible or silent blocking (filled or unfilled pauses in speech)  
    6. circumlocutions (word substitutions to avoid problematic words)  
    7. words produced with an excess of physical tension  
    8. monosyllabic whole-word repetitions (e.g., "I-I-I-I see him")  
2. The disturbance in fluency interferes with academic or occupational achievement or with social communication.  
3. If a speech-motor or sensory deficit is present, the speech difficulties are in excess of those usually associated with these problems.
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Stuttering under Other Disorders with Physical Manifestations in the Disorders Usually First Evident in Infancy, Childhood, or Adolescence section.  

1. Frequent repetitions or prolongations of sounds, syllables, or words or frequent, unusual hesitations and pauses that disrupt the rhythmic flow of speech.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM (1952)
Does not appear.
</div>
</div>`,Qd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Gw,markdown:Kw},Symbol.toStringTag,{value:"Module"})),Xw={title:"Language Disorder",description:"Deficits in the acquisition or use of language across several all modalities (written, spoken, signed, other).",prevalence:"7%",synonyms:"Specific Language Impairment",acronyms:"DLD, SLI"},Jw=`Prior to the DSM-III, when the psychiatric culture was based primarily on psychodynamic theories, impairments in language acquisition were assumed to be symptoms of broader emotional or developmental disorders. The DSM-III documented Developmental Language Disorder as a distinct diagnostic category in an effort to recategorize disorders based on empirical data and operational criteria. In the DSM-IV and -5, the categorization underwent changes that reflected what was being seen clinically (e.g., rare instances of purely receptive impairment with no expressive impairment) and advances in linguistics and developmental neuropsychology. Ultimately, the DSM-5 consolidated impairments in language acquisition and use as Language Disorder.

<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Persistent difficulties in the acquisition and use of language across modalities (i.e., spoken, written, sign language, or other) due to deficits in comprehension or production that include the following:  
    1. Reduced vocabulary (word knowledge and use).  
    2. Limited sentence structure (ability to put words and word endings together to form sentences based on the rules of grammar and morphology).  
    3. Impairments in discourse (ability to use vocabulary and connect sentences to explain or describe a topic or series of events or have a conversation).  
2. Language abilities are substantially and quantifiably below
those expected for age, resulting in functional limitations in effective communication, social participation, academic achievement, or occupational performance, individually or in
any combination.  
3. Onset of symptoms is in the early developmental period.  
4. The difficulties are not attributable to hearing or other sensory impairment, motor dysfunction, or another medical or neurological condition and are not better explained by intellectual developmental disorder (intellectual disability) or global developmental delay.  
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as both Expressive Language Disorder and Mixed Receptive-Expressive Language Disorder under the Communications Disorders section.

<b>Expressive Language Disorder</b>
1. The scores obtained from standardized individually administered measures of expressive language development are substantially below those obtained from standardized measures of both nonverbal intellectual capacity and receptive language development. The disturbance may be manifest clinically by symptoms that include having a markedly limited vocabulary, making errors in tense, or having difficulty recalling words or producing sentences with developmentally appropriate length or complexity.  
2. The difficulties with expressive language interfere with academic or occupational achievement or with social communication.  
3. Criteria are not met for Mixed Receptive-Expressive Language Disorder or a Pervasive Developmental Disorder.  
4. If Mental Retardation, a speech-motor or sensory deficit, or environmental deprivation is present, the language difficulties are in excess of those usually associated with these problems.  

<b>Mixed Receptive-Expressive Language Disorder</b>  
1. The scores obtained from a battery of standardized individually administered measures of both receptive and expressive language development are substantially below those obtained from standardized measures of nonverbal intellectual capacity. Symptoms include those for Expressive Language Disorder as well as difficulty understanding words, sentences, or specific types of words, such as spatial terms.  
2. The difficulties with receptive and expressive language significantly interfere with academic or occupational achievement or with social communication.  
3. Criteria are not met for a Pervasive Developmental Disorder.  
4. If Mental Retardation, a speech-motor or sensory deficit, or environmental deprivation is present, the language difficulties are in excess of those usually associated with these problems.
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Developmental Language Disorder with two types: expressive and receptive, under the Infancy, Childhood, or Adolescence Disorders.  

<b>Developmental Language Disorder, Expressive Type</b>  
1. Failure to develop vocal expression (encoding) of language despite relatively intact comprehension of language.  
2. Presence of inner language (the presence of age-appropriate concepts, such as understanding the purpose and use of a particular household object).  
3. Not due to Mental Retardation, Childhood Onset Pervasive Developmental Disorder, hearing impairment, or trauma.  

<b>Developmental Language Disorder, Receptive Type</b>  
1. Failure to develop comprehension (decoding) and vocal expression (encoding) of language.  
2. Not due to hearing impairment trauma, Mental Retardation, or Childhood Onset Pervasive Developmental Disorder.
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>

<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.
</div>
</div>`,Gd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Xw,markdown:Jw},Symbol.toStringTag,{value:"Module"})),Zw={title:"Social (Pragmatic) Communication Disorder",description:"Deficits in comprehension and use of verbal and nonverbal communication, including problems with non-literal, ambiguous information as well as grammar and sentence structure.",prevalence:null,synonyms:"Semantic Pragmatic Disorder",acronyms:"SPCD"},ex=`SPCD, also called semantic pragmatic disorder, is a new diagnostic category in the DSM-5 as a separate diagnosis from ASD to distinguish the individuals who experience social communication difficulties without the restrictive and repetitive behaviors associated with ASD. It is thought to stem from deficits in information processing as opposed to the use of language. The condition impairs a person's ability to grasp the central meaning or saliency of events, leading to a preference for routine things in which new relevance does not have to be deduced. People with SPCD often develop eccentric interests but are not as obsessive as those with ASD.  

Symptoms of SPCD include:  
- Delayed language development  
- Word search pauses, jargoning, word order errors, word category errors, verb conjugation errors, and other language difficulties  
- Stuttering or cluttered speech  
- Repeating words or phrases  
- Tendency to be literal, concrete, and prefer facts to stories  
- Impaired reading comprehension  
- Following conversations (one-sided or off-topic conversations)  
- Getting lost in the details of stories  
- Reading body language  
- Distinguishing offensive remarks

<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Persistent difficulties in the social use of verbal and nonverbal communication as manifested by all of the following:  
    1. Deficits in using communication for social purposes, such as greeting and sharing information, in a manner that is appropriate for the social context.  
    2. Impairment of the ability to change communication to match context or the needs of the listener, such as speaking differently in a classroom than on a playground, talking differently to a child than to an adult, and avoiding use of overly formal language.  
    3. Difficulties following rules for conversation and storytelling, such as taking turns in conversation, rephrasing when misunderstood, and knowing how to use verbal and nonverbal signals to regulate interaction.  
    4. Difficulties understanding what is not explicitly stated (e.g., making inferences) and nonliteral or ambiguous meanings of language (e.g., idioms, humor, metaphors, multiple meanings that depend on the context for interpretation).  
2. The deficits result in functional limitations in effective communication, social participation, social relationships, academic achievement, or occupational performance, individually or in combination.  
3. The onset of the symptoms is in the early developmental period (but deficits may not become fully manifest until social communication demands exceed limited capacities).  
4. The symptoms are not attributable to another medical or neurological condition or to low abilities in the domains of word structure and grammar, and are not better explained by autism spectrum disorder, intellectual developmental disorder (intellectual disability), global developmental delay, or another mental disorder.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Does not appear.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Does not appear.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.
</div>
</div>`,Kd=Object.freeze(Object.defineProperty({__proto__:null,attributes:Zw,markdown:ex},Symbol.toStringTag,{value:"Module"})),tx={title:"Speech Sound Disorder",description:"Impairments in spoken sounds, including addition, omission, distortion, and substitution of word phonemes.",prevalence:"8-9%",acronyms:"SSD",synonyms:"Phonological Disorder"},nx=`<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Persistent difficulty with speech sound production that interferes with speech intelligibility or prevents verbal communication of messages.  
2. The disturbance causes limitations in effective communication that interfere with social participation, academic achievement, or occupational performance, individually or in any combination.  
3. Onset of symptoms is in the early developmental period.  
4. The difficulties are not attributable to congenital or acquired conditions, such as cerebral palsy, cleft palate, deafness or hearing loss, traumatic brain injury, or other medical or neurological conditions.

</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Phonological Disorder under the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.

1. Failure to use developmentally expected speech sounds that are appropriate for age and dialect (e.g., errors in sound production, use, representation, or organization such as, but not limited to, substitutions of one sound for another [use of /t/ for target /k/ sound] or omissions of sounds such as final consonants).  
2. The difficulties in speech sound production interfere with academic or
occupational achievement or with social communication.  
3. If Mental Retardation, a speech-motor or sensory deficit, or environmental deprivation is present, the speech difficulties are in excess of those usually associated with these problems.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Developmental Articulation Disorder under Specific Developmental Disorders in the Infancy, Childhood, and Adolescence Disorders section.  

1. Failure to develop consistent articulations of the later-acquired speech sounds, such as r, sh, th, f, z, l, or ch.
2. Not due to Developmental Language Disorder, Mental Retardation, Childhood Onset Pervasive Developmental Disorder, or physical disorders.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM 
Does not appear.
</div>`,Xd=Object.freeze(Object.defineProperty({__proto__:null,attributes:tx,markdown:nx},Symbol.toStringTag,{value:"Module"})),ix={title:"Unspecified Communication Disorder",description:"Deficits in communication and criteria are not met for communication or neurodevelopmental disorder or when there is insufficient data to determine a more specific diagnosis.",prevalence:null,acronyms:"UCD",synonyms:null},rx=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
This category applies to presentations in which symptoms characteristic of communication disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for communication disorder or for any of the disorders in the neurodevelopmental disorders diagnostic class. The unspecified communication disorder category is used in situations in which the clinician chooses not to specify the reason that the criteria are not met for communication disorder or for a specific neurodevelopmental disorder, and includes presentations in which there is insufficient information to make a more specific diagnosis.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Communication Disorder Not Otherwise Specified.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Does not appear.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.
</div>
</div>`,Jd=Object.freeze(Object.defineProperty({__proto__:null,attributes:ix,markdown:rx},Symbol.toStringTag,{value:"Module"})),ox={title:"Global Developmental Delay",description:"Missed developmental milestones before the child is able to undergo more evaluation for more specific conditions (~5 years old).",prevalence:"5-10%",acronyms:"GDD",synonyms:null},sx=`<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
The DSM-5 introduced a new diagnostic category specifically for children under the age of 5 who miss developmental milestones in intellectual functioning. GDD acts as a placeholder diagnosis to encourage early interventions but avoid labeling children with an IDD diagnosis, as very young children often catch up in development.

#### Description
This diagnosis is reserved for individuals under the age of 5 years when the clinical severity level cannot be reliably assessed during early childhood. This category is diagnosed when an individual fails to meet expected developmental milestones in several areas of intellectual functioning, and applies to individuals who are unable to undergo systematic assessments of intellectual functioning, including children who are too young to participate in standardized testing. This category requires reassessment after a period of time.
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Does not appear as distinct diagnosis from unspecified mental retardation for children under the age of 5.
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Does not appear as distinct diagnosis from unspecified mental retardation for children under the age of 5.
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear as distinct diagnosis from unspecified mental retardation for children under the age of 5.
</div>

<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.
</div>`,Zd=Object.freeze(Object.defineProperty({__proto__:null,attributes:ox,markdown:sx},Symbol.toStringTag,{value:"Module"})),ax={title:"Intellectual Developmental Disorder (Intellectual Disability)",description:"Deficits in intellectual functioning and adaptive behavior that begin during the developmental period.",prevalence:"1-3%",acronyms:"ID, IDD",synonyms:"Intellectual Disability"},lx=`<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
Renamed to Intellectual Developmental Disorder (Intellectual Disability) and housed under the Neurodevelopmental Disorders section.

#### Criteria
1. Deficits in intellectual functions, such as reasoning, problem solving, planning, abstract thinking, judgment, academic learning, and learning from experience, confirmed by both clinical assessment and individualized, standardized intelligence testing.  
2. Deficits in adaptive functioning that result in failure to meet developmental and sociocultural standards for personal independence and social responsibility. Without ongoing support, the adaptive deficits limit functioning in one or more activities of daily life, such as communication, social participation, and independent living, across multiple environments, such as home, school, work, and community.  
3. Onset of intellectual and adaptive deficits during the developmental period.   

###### Specifiers 
- Mild  
- Moderate  
- Severe  
- Profound  

<!-- #### Differential Diagnosis
- Major and mild neurocognitive disorders  
- Communication disorders and SLD  
- ASD -->

</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Mental Retardation under the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.  

#### Criteria
1. Significantly subaverage intellectual functioning: an IQ of approximately 70 or below on an individually administered IQ test (for infants, a clinical judgment of significantly subaverage intellectual functioning).  
2. Concurrent deficits or impairments in present adaptive functioning (i.e., the person's effectiveness in meeting the standards expected for his or her age by his or her cultural group) in at least two of the following areas: communication, self-care, home living, social/interpersonal skills, use of community resources, self-direction, functional academic skills, work, leisure, health, and safety.  
3. The onset is before age 18 years.

###### Specifiers
- Mild Mental Retardation  
- Moderate Mental Retardation  
- Severe Mental Retardation  
- Profound Mental Retardation  
- Mental Retardation, Severity Unspecified 
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Mental Retardation under the Disorders Usually First Evident In Infancy, Childhood, or Adolescence section. 

#### Criteria
1. Significantly subaverage general intellectual functioning: an IQ of 70 or below on an individually administered IQ test (for infants, since available intelligence tests do not yield numerical values, a clinical judgment of significant subaverage intellectual functioning).  
2. Concurrent deficits or impairments in adaptive behavior, taking the person's age into consideration.  
3. Onset before the age of 18.

###### Specifiers
- Mild (IQ 50-70)  
- Moderate (IQ 35-49)  
- Severe (IQ 20-34)  
- Profound (IQ < 20)
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Listed as Mental Retardation.  

#### Description
Mental retardation refers to subnormal general intellectual functioning which originates during the developmental period and is associated with impairment of either learning and social adjustment or maturation, or both.

###### Specifiers
- Borderline mental retardation (IQ 68-85)  
- Mild mental retardation (IQ 52-67)  
- Moderate mental retardation (IQ 36-51)  
- Severe mental retardation (IQ 20-35)  
- Profound mental retardation (IQ < 20)

</div>

<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Listed as Mental Deficiency for cases involving "a defect of intelligence existing since birth, without demonstrated organic brain disease or known prenatal cause" and "Chronic Brain Syndrome" for cases that "result from relatively permanent, more or less irreversible, diffuse impairment of cerebral tissue function". When the etiology of the intellectual functioning impairment was known, a specific chronic brain syndrome (e.g., associated with congential cranial anomaly) was diagnosed alongside the Mental deficiency qualifier.  

#### Description
Here will be classified those cases presenting primarily a defect of intelligence existing since birth, without demonstrated organic brain disease or known prenatal cause. This group will include only those cases formerly known as familial or "idiopathic" mental deficiencies. The degree of intelligence defect will be specified as mild, moderate, or severe, and the current I.Q. rating, with the name of the test used, will be added to the diagnosis. In general, mild refers to functional (vocational) impairment, as would be expected with I.Q.'s of approximately 70 to 85; moderate is used for functional impairment requiring special training and guidance, such as would be expected with I.Q.'s of about 50-70; severe refers to the functional impairment requiring custodial or complete protective care, as would be expected with I.Q.'s below 50. The degree of defect is estimated from other factors than merely psychological test scores, namely, consideration of cultural, physical and emotional determinants, as well as school, vocational and social effectiveness. The diagnosis may be modified by the appropriate qualifying phrase, when, in addition to the intellectual defects, there are significant psychotic, neurotic, or behavioral reactions.  

###### Specifiers
- Familial or hereditary  
- Idiopathic (cause unknown)  
- Severity (Mild, Moderate, Severe)
</div>
</div>`,eh=Object.freeze(Object.defineProperty({__proto__:null,attributes:ax,markdown:lx},Symbol.toStringTag,{value:"Module"})),ux={title:"Unspecified Intellectual Developmental Disorder (Intellectual Disability)",description:"Strong evidence of intellectual developmental delays but insufficient information to make a more specific diagnosis.",prevalence:null,acronyms:"Unspecified IDD",synonyms:null},cx=`<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
#### Description
This category is reserved for individuals over the age of 5 years when assessment of the degree of intellectual developmental disorder (intellectual disability) by means of locally available procedures is rendered difficult or impossible because of associated sensory or physical impairments, as in blindness or prelingual deafness; locomotor disability; or presence of severe problem behaviors or co-occurring mental disorder. This category should only be used in exceptional circumstances and requires reassessment after a period of time.
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Mental Retardation, Severity Unspecified under the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.  

#### Description
The diagnosis of Mental Retardation, Severity Unspecified, should be used when there is a strong presumption of Mental Retardation but the person cannot be successfully tested by standard intelligence tests. This may be the case when children, adolescents, or adults are too impaired or uncooperative to be tested or, with infants, when there is a clinical judgment of significantly subaverage intellectual functioning, but the available tests (e.g., the Bayley Scales of Infant Development, Cattell Infant Intelligence Scales, and others) do not yield IQ values. In general, the younger the age, the more difficult it is to assess for the presence of Mental Retardation except in those with profound impairment.
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Unspecified Mental Retardation under the Disorders Usually First Evident in Infancy, Childhood, Or Adolescence section.  

#### Description
This category should be used when there is a strong presumption of Mental Retardation but the individual is untestable by standard intelligence tests. This may be the case when children, adolescents or adults are too impaired or uncooperative to be tested. In the case of infants, since the available tests, such as the Bayley, Cattel, and others, do not yield numerical IQ values, this may be the case when there is a clinical judgment of significant subaverage intellectual functioning. In general, the younger the age, the more difficult it is to make a diagnosis of Mental Retardation, except for those with profound impairment.
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Listed as Unspecified Mental Retardation.

#### Description
This classification is reserved for patients whose intellectual functioning has not or cannot be evaluated precisely but which is recognized as clearly subnormal.
</div>

<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included in "Mental Deficiency" but without a specifier for the inability to fully test and/or specify the diagnosis.
</div>
</div>`,th=Object.freeze(Object.defineProperty({__proto__:null,attributes:ux,markdown:cx},Symbol.toStringTag,{value:"Module"})),dx={title:"Developmental Coordination Disorder",description:"Deficits in motor skills that significantly impair a child's daily living or academic success.",prevalence:"5-6%",synonyms:"Dyspraxia",acronyms:"DCD"},hx=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5
1. The acquisition and execution of coordinated motor skills is
substantially below that expected given the individual’s chronological age and opportunity for skill learning and use.
Difficulties are manifested as clumsiness (e.g., dropping or
bumping into objects) as well as slowness and inaccuracy of performance of motor skills (e.g., catching an object, using scissors or cutlery, handwriting, riding a bike, or participating in sports).  
2. The motor skills deficit in Criterion 1 significantly and
persistently interferes with activities of daily living appropriate to chronological age (e.g., self-care and self-maintenance) and impacts academic/school productivity, prevocational and vocational activities, leisure, and play.  
3. Onset of symptoms is in the early developmental period.  
4. The motor skills deficits are not better explained by
intellectual developmental disorder (intellectual disability) or
visual impairment and are not attributable to a neurological
condition affecting movement (e.g., cerebral palsy, muscular
dystrophy, degenerative disorder).
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Developmental Coordination Disorder.  

1. Performance in daily activities that require motor coordination is substantially below that expected given the person's chronological age and measured intelligence. This may be manifested by marked delays in achieving motor milestones (e.g., walking, crawling, sitting), dropping things, "clumsiness," poor performance in sports, or poor handwriting.  
2. The disturbance in Criterion 1 significantly interferes with academic achievement or activities of daily living.  
3. The disturbance is not due to a general medical condition (e.g., cerebral palsy, hemiplegia, or muscular dystrophy) and does not meet criteria for a Pervasive Developmental Disorder.  
4. If Mental Retardation is present, the motor difficulties are in excess of those usually associated with it.

</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Not listed.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Not listed.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Not listed.
</div>`,nh=Object.freeze(Object.defineProperty({__proto__:null,attributes:dx,markdown:hx},Symbol.toStringTag,{value:"Module"})),fx={title:"Stereotypic Movement Disorder",description:"Repetitive, seemingly driven, purposeless movements, such as hand shaking/waving, body rocking, head banging, self biting, or hitting one's own body.",prevalence:"3-4%",synonyms:null,acronyms:"SMD"},px=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Repetitive, seemingly driven, purposeless movements, such as hand shaking/waving, body rocking, head banging, self biting, or hitting one's own body.  
2. The repetitive motor behaviour interferes with social, academic, or other activities and may result in self-injury.  
3. Onset is in the early developmental period.  
4. The repetitive motor behaviour is not attributable to the physiological effects of a substance or neurological condition and is not better explained by another neurodevelopmental or mental disorder (e.g., trichotillomania, obsessive-compulsive disorder).  

###### Specifiers
- With or without self-injurious behavior (or behavior that would result in injury if not prevented)  
- Associated with a known medical or genetic condition, neurodevelopmental disorder, or environmental factor (e.g., Lesch-Nyhan syndrome, intellectual disability, intrauterine alcohol exposure).  
- Severity:  
    - Mild —  Stereotypies are present but do not significantly impair functioning or cause self-harm.  
    - Moderate — Stereotypies cause some impairment in daily activities and social interactions or may lead to mild self-harm.   
    - Severe — Stereotypies cause significant impairment in daily activities, social interactions, or result in frequent or severe self-injurious behavior.  
- With self-injurious behavior, such as head banging or self-biting.  
- With associated medical or genetic condition.
</div>

<div class="dsm-timeline">
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Stereotypic Movement Disorder.  

1. Repetitive, seemingly driven, and nonfunctional motor behavior (e.g., hand shaking or waving, body rocking, head banging, mouthing of objects, self-biting, picking at skin or bodily orifices, hitting own body).  
2. The behavior markedly interferes with normal activities or results in self-inflicted bodily injuries that requires medical treatment (or would result in an injury if preventative measures were not used).  
3. If Mental Retardation is present, the stereotypic or self-injurious behavior is of sufficient severity to become a focus of treatment.  
4. The behavior is not better accouted for by a compulsion (as in Obsessive-Compulsive Disorder), a tick (as in Tic Disorder), a stereotypy that is part of a Pervasive Developmental Disorder, or hair pulling (as in Trichotillomania).  
5. The behavior is not due to the direct physiological effects of a substance or a general medical condition.  
6. The behavior persists for 4 weeks or longer.

###### Specifiers
- With Self-Injurious Behavior: if the behavior results in bodily damage that requires specific treatment (or that would result in bodily damage if protective measures were not used).
</div>

<div class="dsm-timeline">
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Not listed as a separate disorder from other tic disorders, although Atypical Stereotyped Movement Disorder is included.  

This category is for conditions such as head banging, rocking, repetitive hand movements consisting of quick, rhythmic, small hand rotations, or repetitive voluntary movements that typically involve the fingers or arms. These disorders are distinguishable from tics in that they consist of voluntary movements and
are not spasmodic. Moreover, unlike individuals with a Tic Disorder, those with these conditions are not distressed by the symptoms and may even appear to derive enjoyment from the repetitive activities. Though bizarre posturing or movements may occur in adults, these conditions are found almost exclusively
in children. They are especially prevalent among individuals with Mental Retardation or Pervasive Developmental Disorders and among children suffering from grossly inadequate social stimulation, but they may also occur in the absence of a concurrent mental disorder.
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Not listed.
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Not listed.
</div>`,ih=Object.freeze(Object.defineProperty({__proto__:null,attributes:fx,markdown:px},Symbol.toStringTag,{value:"Module"})),mx={title:"Other Specified Tic Disorder",description:"Symptoms of a Tic Disorder that do not fit the criteria for another diagnosis and the clinician chooses to specify the reason why.",prevalence:null,acronyms:"OSTD",synonyms:null},gx=`The OSTD diagnosis is given when tic symptoms are present but the symptoms do not fit a more specific diagnosis <i>and</i> the clinician is able to specify the reason why. These reasons include:  
- Onset is after age 18  
- Tics last less than 4 weeks  
- Tics can be attributed to another medical condition, such as brain injury or medication  
- Atypical tic presentations, i.e., tics do not fit typical motor or vocal patterns. Some examples include:  
    - Complex behavioral sequences that blur the line between tics and compulsions, like arranging objects in specific patterns.  
    - Sensory urges or phantom sensations, such as persistent feelings of something crawling on the skin, internal "electrical" sensations, or an overwhelming urge to experience certain tactile sensations.  
    - Blocking tics in which motor activity or speech is briefly interrupted by pauses.  
    - Respiratory tics involving complex breathing patterns, breath-holding, or hyperventilation.  
    - Tics with unusual triggers like specific environmental stimuli or emotional states rather than following the typical waxing and waning pattern of most tic disorders.`,rh=Object.freeze(Object.defineProperty({__proto__:null,attributes:mx,markdown:gx},Symbol.toStringTag,{value:"Module"})),yx={title:"Persistent (Chronic) Tic Disorder",description:"A single motor or vocal tic persisting for over one year.",prevalence:"0.02-.16%",synonyms:"Chronic Tic Disorder, Persistent Motor or Vocab Tic Disorder, Chronic Motor or Vocab Tic Disorder",acronyms:null},vx=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5
1. Single or multiple motor or vocal tics have been
present during the illness, but not both motor and vocal.  
2. The tics may wax and wane in frequency but have persisted for more than 1 year since first tic onset.  
3. Onset is before 18 years.  
4. The disturbance is not attributable to the physiological effects of a substance (e.g., cocaine) or another medical condition (e.g., Huntington’s disease, postviral encephalitis).  
5. Criteria have never been met for Tourette’s disorder.

###### Specifiers
- Motor tics only  
- Vocal tics only
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Chronic Motor or Vocal Tic Disorder.  

1. Single or multiple motor or vocal tics (i.e., sudden, rapid, recurrent, nonrhythmic, stereotyped motor movements or vocalizations), but not both, have been present at some time during the illness.  
2. The tics occur many times a day nearly every day or intermittently throughout a period of more than 1 year, and during this period there was never a tic-free period of more than 3 consecutive months.  
3. The disturbance causes marked distress or significant impairment in social, occupational, or other important areas of functioning.  
4. The onset is before age 18 years.  
5. The disturbance is not due to the direct physiological effects of a substance (e.g., stimulants) or a general medical condition (e.g., Huntington's disease or postviral encephalitis).  
6. Criteria have never been met for Tourette's Disorder.  
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Chronic Motor Tic Disorder.

1. Presence of recurrent, involuntary, repetitive, rapid, purposeless movements (tics) involving no more than three muscle groups at any one time.  
2. Unvarying intensity of the tics over weeks or months.  
3. Ability to suppress the movements voluntarily for minutes to hours.  
4. Duration of at least one year.
</div> 
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Not listed.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Not listed, though tics are included as a Neurotic Traits symptom.
</div> `,oh=Object.freeze(Object.defineProperty({__proto__:null,attributes:yx,markdown:vx},Symbol.toStringTag,{value:"Module"})),bx={title:"Provisional Tic Disorder",description:"One or more motor or vocal tics persistenting for less than a year.",acronyms:null,synonyms:null,prevalence:"10%"},Tx=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Single or multiple motor and/or vocal tics.    
2. The tics have been present for less than 1 year since first tic onset.
3. Onset is before 18 years.  
4. The disturbance is not attributable to the physiological effects of a substance (e.g., cocaine) or another medical condition (e.g., Huntington’s disease, postviral encephalitis).  
5. Criteria have never been met for Tourette’s disorder or
persistent (chronic) motor or vocal tic disorder.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Transient Tic Disorder.  

1. Single or multiple motor and/or vocal tics (i.e., sudden, rapid, recurrent, nonrhythmic, stereotyped motor movements or vocalizations).  
2. The tics occur many times a day, nearly every day for at least 4 weeks, but for no longer than 12 consecutive months.  
3. The disturbance causes marked distress or significant impairment in social, occupational, or other important areas of functioning.  
4. The onset is before age 18 years.  
5. The disturbance is not due to the direct physiological effects of a substance (e.g., stimulants) or a general medical condition (e.g., Huntington's disease or postviral encephalitis).  
6. Criteria have never been met for Tourette's Disorder or Chronic Motor or Vocal Tic Disorder.

###### Specifiers
- Single Episode  
- Recurrent
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Transient Tic Disorder.  

1. Onset during childhood or early adolescence.  
2. Presence of recurrent, involuntary, repetitive, rapid, purposeless, motor movements (tics).  
3. Ability to suppress the movements voluntarily for minutes to hours.  
4. Variation in the intensity of the symptoms over weeks or months.  
5. Duration of at least one month but not more than one year.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Not listed.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Not listed.
</div>`,sh=Object.freeze(Object.defineProperty({__proto__:null,attributes:bx,markdown:Tx},Symbol.toStringTag,{value:"Module"})),Ex={title:"Tourette's Disorder",description:"Multiple, multifacted (motor and vocal) tics persisting for over one year.",prevalence:"0.3-0.9%",synonyms:"Tourette's Syndrome",acronyms:"TS"},wx=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Both multiple motor and one or more vocal tics have
been present at some time during the illness, although not
necessarily concurrently.   
2. The tics may wax and wane in frequency but have persisted for more than 1 year since first tic onset. 
3. Onset is before 18 years.  
4. The disturbance is not attributable to the physiological effects of a substance (e.g., cocaine) or another medical condition (e.g., Huntington’s disease, postviral encephalitis).  
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Tourette's Disorder.  

1. Both multiple motor and one or more vocal tics have been present at some time during the illness, although not necessarily concurrently. (A tic is a sudden, rapid, recurrent, nonrhythmic, stereotyped motor movement or vocalization.)  
2. The tics occur many times a day (usually in bouts) nearly every day or intermittently throughout a period of more than 1 year, and during this period there was never a tic-free period of more than 3 consecutive months.  
3. The disturbance causes marked distress or significant impairment in social, occupational, or other important areas of functioning.  
4. The onset is before age 18 years.  
5. The disturbance is not due to the direct physiological effects of a substance (e.g., stimulants) or a general medical condition (e.g., Huntington's disease or postviral encephalitis).
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Tourette's Disorder.  

1. Age at onset between 2 and 15 years.  
2. Presence of recurrent, involuntary, repetitive, rapid, purposeless motor movements affecting multiple muscle groups.  
3. Multiple vocal tics.  
4. Ability to suppress movements voluntarily for minutes to hours.  
5. Variations in the intensity of the symptoms over weeks or months.  
6. Duration of more than one year.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Not listed.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Not listed.
</div>
</div>`,ah=Object.freeze(Object.defineProperty({__proto__:null,attributes:Ex,markdown:wx},Symbol.toStringTag,{value:"Module"})),xx={title:"Unspecified Tic Disorder",description:"Tic symptoms are present but do not fulfill more specific criteria or there is insufficient information.",prevalence:null,acronyms:null,synonyms:null},_x=`The Unspecified Tic Disorder diangosis is given when:  
- There are tic symptoms but they do not meet the full criteria of a specific tic disorder or there is insufficient information.  
- The clinician chooses not to specify the reason why criteria aren't met.  `,lh=Object.freeze(Object.defineProperty({__proto__:null,attributes:xx,markdown:_x},Symbol.toStringTag,{value:"Module"})),Sx={title:"Other Specified Neurodevelopmental Disorder",description:"Symptoms of a neurodevelopmental disorder that do not meet full criteria for a more specific disorder for a specific reason."},kx='This diagnosis is given when symptoms of a neurodevelopmental disorder are present but do not fulfill the criteria for a more specific diagnosis and the clinician chooses to specify the reason why. For example, "Neurodevelopmental disorder associated with prenatal alcohol exposure".',uh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Sx,markdown:kx},Symbol.toStringTag,{value:"Module"})),Dx={title:"Specific Learning Disorder",description:"Persistent significant difficulty performing arithmetical calculations.",prevalence:"3-7%",synonyms:"Specific Learning Disorder with impairment in mathematics",acronyms:"SLD"},Ix=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Difficulties learning and using academic skills, as indicated by the presence of at least one of the following symptoms that have persisted for at least 6 months, despite the provision of interventions that target those difficulties:  
    1. Inaccurate or slow and effortful word reading (e.g., reads single words aloud incorrectly or slowly and hesitantly, frequently guesses words, has difficulty sounding out words).  
    2. Difficulty understanding the meaning of what is read (e.g., may read text accurately but not understand the sequence, relationships, inferences, or deeper meanings of what is read).  
    3. Difficulties with spelling (e.g., may add, omit, or substitute vowels or consonants).  
    4. Difficulties with written expression (e.g., makes multiple grammatical or punctuation errors within sentences; employs poor paragraph organization; written expression of ideas lacks clarity).  
    5. Difficulties mastering number sense, number facts, or calculation (e.g., has poor understanding of numbers, their magnitude, and relationships; counts on fingers to add single-digit numbers instead of recalling the math fact as peers do; gets lost in the midst of arithmetic computation and may switch procedures).  
    6. Difficulties with mathematical reasoning (e.g., has severe difficulty applying mathematical concepts, facts, or procedures to solve quantitative problems).  
2. The affected academic skills are substantially and quantifiably below those expected for the individual’s chronological age, and cause significant interference with academic or occupational performance, or with activities of daily living, as confirmed by individually administered standardized achievement measures and comprehensive clinical assessment. For individuals age 17 years and older, a documented history of impairing learning difficulties may be substituted for the standardized assessment.  
3. The learning difficulties begin during school-age years but may not become fully manifest until the demands for those affected academic skills exceed the individual’s limited capacities (e.g., as in timed tests, reading or writing lengthy complex reports for a tight deadline, excessively heavy academic loads).  
4. The learning difficulties are not better accounted for by intellectual disabilities, uncorrected visual or auditory acuity, other mental or neurological disorders, psychosocial adversity, lack of proficiency in the language of academic instruction, or inadequate educational instruction.  
<i>Note: The four diagnostic criteria are to be met based on a
clinical synthesis of the individual’s history  (developmental, medical, family, educational), school reports, and psychoeducational assessment.</i>

###### Specifiers
- Severity
    - Mild —  Some difficulties in one or two academic areas and are able to compensive with accommodations and support.  
    - Moderate — Considerable difficulties in one or more academic areas and require intensive and sustained support to achieve proficiency.  
    - Severe —  Extreme difficulties in several academic areas and require substantial and ongoing support to perform even basic academic tasks.  
- With impairment in reading (dyslexia)  
    - Reading comprehension  
    - Reading rate or fluency  
    - Word reading accuracy  
- With impairment in writing (dysgraphia)  
    - Spelling accuracy  
    - Grammar and punctuation accuracy  
    - Clarity and organization of written expression  
- With impairment in mathematics (dyscalculia)  
    - Number sense  
    - Memorization of arithmetic facts  
    - Accurate or fluent calculation  
    - Accurate math reasoning  
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as separate Learning Disorders: Reading Disorder, Mathematics Disorder, Disorder of Written Expression, and Learning Disorder Not Otherwise Specified.  

<b>Reading Disorder</b>  
1. Reading achievement, as measured by individually administered standardized tests of reading accuracy or comprehension, is substantially below that expected given the person's chronological age, measured intelligence, and age-appropriate education.  
2. The disturbance in Criterion 1 significantly interferes with academic achievement or activities of daily living that require reading skills.  
3. If a sensory deficit is present, the reading difficulties are in excess of those usually associated with it.

<b>Mathematics Disorder</b>  
1. Mathematical ability, as measured by individually administered standardized tests, is substantially below that expected given the person's chronological age, measured intelligence, and age-appropriate education.  
2. The disturbance in Criterion 1 significantly interferes with academic achievement or activities of daily living that require mathematical ability.  
3. If a sensory deficit is present, the difficulties in mathematical ability are in excess of those usually associated with it.  

<b>Disorder of Written Expression</b>  
1. Writing skills, as measured by individually administered standardized tests (or functional assessments of writing skills), are substantially below those expected given the person's chronological age, measured intelligence, and age-appropriate education.  
2. The disturbance in Criterion 1 significantly interferes with academic achievement or activities of daily living that require the composition of written texts (e.g., writing grammatically correct sentences and organized paragraphs).  
3. If a sensory deficit is present, the difficulties in writing skills are in excess of those usually associated with it.

<b>Learning Disorder Not Otherwise Specified</b>  
This category is for disorders in learning that do not meet criteria for any specific Learning Disorder. This category might include problems in all three areas (reading, mathematics, written expression) that together significantly interfere with academic achievement even
though performance on tests measuring each individual skill is not substantially below that expected given the person's chronological age, measured intelligence, and ageappropriate education.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Developmental Reading Disorder, Developmental Arithmetic Disorder, Developmental Language Disorder, and Developmental Articulation Disorder.  

<b>Developmental Reading Disorder</b>  
Performance on standardized, individually administered tests of reading skill is significantly below the expected level, given the individual's schooling, chronological age, and mental age (as determined by an individually administered IQ test). In addition, in school, the child's performance on tasks requiring reading skills is significantly below his or her intellectual capacity.  

<b>Developmental Arithmetic Disorder</b>  
Performance on standardized/ individually administered tests of arithmetic achievement is significantly below expected level, given the individual's schooling, chronological age, and mental age (as determined by an individually administered IQ test), in addition, in school, the child's performance on tasks requiring arithmetic skills is significantly below his or her intellectual capacity.  

<b>Developmental Language Disorder, Expressive Type</b>  
1. Failure to develop vocal expression (encoding) of language despite relatively intact comprehension of language.  
2. Presence of inner language (the presence of age-appropriate concepts, such as understanding; the purpose and use of a particular household
object).  
3. Not due to Mental Retardation, Childhood Onset Pervasive Developmental Disorder, hearing impairment, or trauma.  

<b>Developmental Language Disorder, Receptive Type</b>  
1. Failure to develop comprehension (decoding) and vocal expression (encoding) of language.  
2. Not due to hearing impairment trauma, Mental Retardation, or Childhood Onset Pervasive Developmental Disorder.  

<b>Developmental Articulation Disorder</b>  
1. Failure to develop consistent articulations of the later-acquired speech sounds, such as r, sh, th, f, z, l, or ch.  
2. Not due to Developmental Language Disorder, Mental Retardation, Childhood Onset Pervasive Developmental Disorder, or physical disorders.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Appears as a code but is not defined.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Appears as a code but is not defined.
</div>`,ch=Object.freeze(Object.defineProperty({__proto__:null,attributes:Dx,markdown:Ix},Symbol.toStringTag,{value:"Module"})),Cx={title:"Unspecified Neurodevelopmental Disorder",description:"Symptoms of a neurodevelopmental disorder that do not meet full criteria for a more specific disorder."},Ax="This diagnosis is given when symptoms of a neurodevelopmental disorder are present but do not fulfill the criteria for a more specific diagnosis and the clinician chooses not to specify the reason why, which includes presentations in which there is insufficient information to make a more specific diagnosis (e.g., in emergency rooms).",dh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Cx,markdown:Ax},Symbol.toStringTag,{value:"Module"})),Ox={title:"Body Dysmorphic Disorder",description:"Preoccupation with one or more imagined or exaggerated defect in physical appearance.",prevalence:"2.5% in U.S. women, 2.2% in U.S. men",synonyms:"Dysmorphophobia"},Px=`The DSM-5 notes that individuals with body dysmorphic disorder report that they look "unattractive", "not right", "hideous", or even "like a monster". These preoccupations are commonly focused on the skin, hair, or nose, but any body area can be the focus of concern (e.g., eyes, teeth, weight, stomach, breasts, legs, face, lips, chin, eyebrows, genitals).  
Body dysmorphic disorder is associated with ideas or delusions of reference in which individuals believe that other people take special notice of them or mock how they look. The disorder has been connected to abnormalities in emotion recognition, attention, and executive function, as well as information-processing biases and inaccuracies. Interesetingly, visual processing abnormalities have also been identified, with a bias for analyzing and encoding details rather than holistic or configural aspects of visual stimuli.

<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Preoccupation with one or more perceived defects or flaws in physical appearance that are not observable or appear slight to others.  
2. At some point during the course of the disorder, the individual has performed repetitive behaviors (e.g., mirror checking, excessive grooming, skin picking, reassurance seeking) or mental acts (e.g., comparing his or her appearance with that of others) in response to the appearance concerns.  
3. The preoccupation causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
4. The appearance preoccupation is not better explained by concerns with body fat or weight in an individual whose symptoms meet diagnostic criteria for an eating disorder.  

####### Specifiers  
- With muscle dysmorphia (almost exclusively occurs in men)  
- With good or fair insight  
- With poor insight  
- With abset insight/delusional beliefs

##### Differential Diagnosis
- Normal appearance and clearly noticeable physical defects  
- Eating disorders  
- Other obsessive-compulsive and related disorders  
- Illness anxiety disorder  
- MDD  
- Anxiety disorders  
- Psychotic disorders  
- Other disorders and symptoms (e.g., gender dysphoria, olfactory reference disorder/syndrome, Koro)
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box">

## DSM-IV
<i>Listed under Somatoform Disorders with the same name.</i>  

1. Preoccupation with an imagined defect in appearance. If a slight physical anomaly is present, the person's concern is markedly excessive.  
2. The preoccupation causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
3. The preoccupation is not better accounted for by another mental disorder (e.g., dissatisfaction with body shape and size in Anorexia Nervosa).  
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
<i>Listed under Somatoform Disorders as an example of an Atypical Somatoform Disorder.</i>  

This is a residual category to be used when the predominant disturbance is the presentation of physical symptoms or complaints not explainable on the basis of demonstrable organic findings or a known pathophysiological mechanism and apparently linked to psychological factors.  
An example of cases that can be classified here include those of individuals who are preoccupied with some imagined defect in physical appearance that is 
out of proportion to any actual physical abnormality that may exist. This syndrome has sometimes been termed "Dysmorphophobia."
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box">

## DSM-II
<i>Does not appear.</i>
</div>

<div class="dsm-date">
1952
</div>

<div class="dsm-box">

## DSM 
<i>Does not appear.</i>
</div>

</div>`,hh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Ox,markdown:Px},Symbol.toStringTag,{value:"Module"})),Nx={title:"Excoration (Hair-Picking) Disorder",description:"Recurrent skin picking resulting in skin lesions.",prevalence:"2.1-3.1%"},Mx=`Skin picking may be accompanied by a range of behaviors or rituals involving skin or scabs. Thus, individuals may search for a particular kind of scab to pull, and they may examine, play with, or mouth or swallow the skin after it has been pulled.

## DSM-5-TR (2022)
1. Recurrent skin picking resulting in skin lesions.  
2. Repeated attempts to decrease or stop skin picking.  
3. The skin picking causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
4. The skin picking is not attributable to the physiological effects of a substance (e.g., cocaine) or another medical condition (e.g., scabies).  
5. The skin picking is not better explained by symptoms of another mental disorder (e.g., delusions or tactile hallucinations in a psychotic disorder, attempts to improve a perceived defect or flaw in appearance in body dysmorphic disorder, stereotypies in stereotypic movement disorder, or intention to harm oneself in nonsuicidal self-injury).

#### Differential Diagnosis
- Psychotic disorder  
- Other obsessive-compulsive and related disorders  
- Neurodevelopmental disorders  
- Dermatitis artefacta  
- Other disorders  
- Other medical conditions  
- Substance/medication-induced disorders

## DSM-IV (1994)
<i>Appears as an associated feature to Trichotillomania ("Nail biting, scratching, gnawing, and excoriation may be associated with Trichotillomania.")</i>

## DSM-III (1980)
<i>Does not appear.</i>

## DSM-II (1968)
<i>Does not appear.</i>

## DSM (1952)
<i>Does not appear.</i>`,fh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Nx,markdown:Mx},Symbol.toStringTag,{value:"Module"})),Rx={title:"Hoarding Disorder",description:"Distress and difficulty discarding or parting with possessions, regardless of their actual value.",prevalence:"1.5-6%"},Lx=`Individuals with hoarding disorder purposefully save possessions and experience distress (e.g., anxiety, frustration, regret, sadness, guilt) when facing the prospect of discarding them. They accumulate large numbers of items that fill up and clutter active living areas to the extend that their intended use is no longer possible.  
Common features of those with hoarding disorder are indecisiveness, perfectionism, avoidance, procrastination, difficulty planning and organizing tasks, and distractability. In fact, indecisiveness is a prominent feature of individuals with hoarding disorder and their first-degree relatives. 

## DSM-5-TR (2022)
1. Persistent difficulty discarding or parting with possessions, regardless of their actual value.  
2. This difficulty is due to a perceived need to save the items and to distress associated with discarding them.  
3. The difficulty discarding possessions results in the accumulation of possessions that congest and clutter active living areas and substantially compromises their intended use. If living areas are uncluttered, it is only because of the interventions of third parties (e.g., family members, cleaners,
authorities).  
4. The hoarding causes clinically significant distress or impairment in social, occupational, or other important areas of functioning (including maintaining a safe environment for self and others).  
5. The hoarding is not attributable to another medical condition (e.g., brain injury, cerebrovascular disease, Prader-Willi syndrome).  
6. The hoarding is not better explained by the symptoms of another mental disorder (e.g., obsessions in OCD, decreased energy in MDD, delusions in schizophrenia or another psychotic disorder, cognitive deficits in major neurocognitive disorder, restricted interests in ASD).

###### Specifiers
- With excessive acquisition (80-90% of cases) 
- With good or fair insight  
- With poor insight  
- With absent insight/delusional beliefss

#### Differential Diagnosis
Hoarding disorder is not diagnosed if the accumulation of objects is judged to be a direct consequence of these diagnoses:  
- Other medical conditions (e.g., traumatic brain injury, surgical resection for treatment of a tumor or seizure control, cerebrovascular disease)  
- Neurodevelopmental disorders (e.g., ASD, ID)  
- Schizophrenia spectrum and other psychotic disorders  
- Major depressive episode  
- OCD  
<i>Note, hoarding behavior in OCD is generally unwanted and highly distressing, and the person feels no pleasure or reward. Excessive acquisition is usually not present, but may be due to a specific obsessions (e.g., the need to buy things that have been touched in order to avoid contaminating others), not because of a genuine desire to possess the items. People with OCD who hoard are more likely to accumulate bizarre items, such as trash, feces, urine, fingernail clippings, hair, used diapers, or rotten food, which are very unusual in hoarding disorder.  
- Neurocognitive disorders (e.g., degenerative disorders like Alzheimer's disease) 

## DSM-IV (1994)
<i>Does not appear.</i>

## DSM-III (1980)
<i>Does not appear.</i>

## DSM-II (1968)
<i>Does not appear.</i>

## DSM (1952)
<i>Does not appear.</i>`,ph=Object.freeze(Object.defineProperty({__proto__:null,attributes:Rx,markdown:Lx},Symbol.toStringTag,{value:"Module"})),Fx={title:"Obsessive-Compulsive and Related Disorder Due to Another Medical Condition",description:"Obsessive-compulsive symptoms due to another medical condition."},zx=`## DSM-5-TR (2022)
1. Obsessions, compulsions, preoccupations with appearance, hoarding, skin picking, hair pulling, other body-focused repetitive behaviors, or other symptoms characteristic of obsessive-compulsive and related disorder predominate in the clinical picture.  
2. There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.  
3. The disturbance is not better explained by another mental disorder.  
4. The disturbance does not occur exclusively during the course of a delirium.  
5. The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.  

###### Specifiers
- With obsessive-compulsive disorder–like symptoms  
- With appearance preoccupations  
- With hoarding symptoms  
- With hair-pulling symptoms  
- With skin-picking symptoms

#### Differential Diagnosis
- Delirium  
- Mixed presentation of symptoms (e.g., mood and obsessive-compulsive and related symptoms) judged to be due to another medical condition  
- Substance/medication-induced obsessive-compulsive and related disorders  
- Obsessive-compulsive and related disorders (primary)  
- Illness anxiety disorder  
- Associated feature of another mental disorder  
- Other specified obsessive-compulsive and related disorder or unspecified
obsessive-compulsive and related disorder 

## DSM-IV (1994)
<i>Listed under the Anxiety Disorders section as "Anxiety Disorder Due to a General Medical Condition, with obsessive-compulsive symptoms".</i>  

1. Prominent anxiety, Panic Attacks, or obsessions or compulsions predominate in the clinical picture.  
2. There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct physiological consequence of a general medical condition.  
3. The disturbance is not better accounted for by another mental disorder (e.g., Adjustment Disorder With Anxiety in which the stressor is a serious general medical condition).  
4. The disturbance does not occur exclusively during the course of a delirium.  
5. The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.  

###### Specifiers
- With Generalized Anxiety  
- With Panic Attacks  
- With Obsessive-Compulsive Symptoms

## DSM-III (1980)
<i>Does not appear.</i>

## DSM-II (1968)
<i>Does not appear.</i>

## DSM (1952) 
<i>Does not appear.</i>`,mh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Fx,markdown:zx},Symbol.toStringTag,{value:"Module"})),Bx={title:"Obsessive-Compulsive Disorder",description:"Recurrent intrusive thoughts, urges, or images that cause anxiety (obsessions) and/or repetitive, ritualistic behaviors that are unrealistically or excessively applied in response to an obsession or according to rigid rules (compulsions).",acronyms:"OCD",prevalence:"1.2%"},jx=`## DSM-5-TR (2022)
1. Presence of obsessions, compulsions, or both, as defined by:  
<i>Obsessions</i>  
    1. Recurrent and persistent thoughts, urges, or images that are experienced, at some time during the disturbance, as intrusive and unwanted, and that in most individuals cause marked anxiety or distress.  
    2. The individual attempts to ignore or suppress such thoughts, urges, or images, or to neutralize them with some other thought or action (i.e., by performing a compulsion).  
<i>Compulsions</i>  
    1. Repetitive behaviors (e.g., hand washing, ordering, checking) or mental acts (e.g., praying, counting, repeating words silently) that the individual feels driven to perform in response to an obsession or according to rules that must be applied rigidly.  
    2. The behaviors or mental acts are aimed at preventing or reducing anxiety or distress, or preventing some dreaded event or situation; however, these behaviors or mental acts are not connected in a realistic way with what they are designed to neutralize or prevent, or are clearly excessive.  
    <i>Note, young children may not be able to articulate the aims of these behaviors or mental acts.</i>  
2. The obsessions or compulsions are time-consuming (e.g., take more than 1 hour per day) or cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
3. The obsessive-compulsive symptoms are not attributable to the effects of a substance or another medication condition.  
4. The disturbance is not better explained by the symptoms of another mental disorder (e.g., excessive worries, as in GAD; preoccupation with appearance, as in body dysmorphic disorder; difficulty discarding or parting with possessions, as in hoarding disorder; hair pulling, as in trichotillomania [hair-pulling disorder]; skin picking, as in excoriation [skin-picking] disorder; stereotypies, as in stereotypic movement disorder; ritualized eating behavior, as in eating disorders; preoccupation with substances or gambling, as in substance-related and addictive disorders; preoccupation with having an illness, as in illness anxiety disorder; sexual urges or fantasies, as in paraphilic disorders; impulses, as in disruptive, impulse-control, and conduct disorders; guilty ruminations, as in MDD; thought insertion or delusional preoccupations, as in schizophrenia spectrum and other psychotic disorders; or repetitive patterns of behavior, as in ASD).  

###### Specifiers
- With good or fair insight — the individual recognizes that OCD beliefs are definitely or probably not true or that they may or may not be true.  
- With poor insight — The individual thinks OCD beliefs are probably true.  
- With absent insight/delusional beliefs — The individual is completely convinced that OCD beliefs are true.  
- Tic-related

#### Differential Diagnosis
- Anxiety disorders  
- MDD  
<i>Note, ruminative thoughts in MDD are usually mood-congruent and not necessarily experienced as intrusive or distressing, and are not linked to compulsions.</i>  
- Other obsessive-compulsive and related disorders  
- Eating disorders  
- Tics and stereotyped movements  
- Psychotic disorders  
- Other compulsive-like behaviors (e.g., compulsive sexual behavior in paraphilias, gambling disorder, substance use disorders)  
- OCPD  
<i>Note, OCPD is not characterized by intrusive thoughts, images, urges, or repetitive behaviors. Instead, it involves an enduring and pervasive maladaptive pattern of excessive perfectionism and rigid control. Both diagnoses can be given to a person who manifests both sets of symptoms.</i>

## DSM-IV (1994)
<i>Listed under Anxiety Disorders by the name "Obsessive-Compulsive Disorder".</i>   
The DSM-IV notes that "the most common obsessions are repeated thoughts about contamination, repeated doubts, a need to have things in a particular order, aggressive or horrific impulses, and sexual imagery".  
1. Either obsessions or compulsions:  
<i>Obsessions</i>  
    1. recurrent and persistent thoughts, impulses, or images that are experienced, at some time during the disturbance, as intrusive and inappropriate and that cause marked anxiety or distress.  
    2. the thoughts, impulses, or images are not simply excessive worries about real-life problems.  
    3. the person attempts to ignore or suppress such thoughts, impulses, or images, or to neutralize them with some other thought or action.  
    4. the person recognizes that the obsessional thoughts, impulses, or images are a product of his or her own mind (not imposed from without as in thought insertion).  
<i>Compulsions</i>  
    1. repetitive behaviors (e.g., hand washing, ordering, checking) or mental acts (e.g., praying, counting, repeating words silently) that the person feels driven to perform in response to an obsession, or according to rules that must be applied rigidly.  
    2. the behaviors or mental acts are aimed at preventing or reducing distress or preventing some dreaded event or situation; however, these behaviors or mental acts either are not connected in a realistic way with what they are designed to neutralize or prevent or are clearly excessive.  
2. At some point during the course of the disorder, the person has recognized that the obsessions or compulsions are excessive or unreasonable.  
<i>Note, this does not apply to children.</i>  
3. The obsessions or compulsions cause marked distress, are time consuming (take more than 1 hour a day), or significantly interfere with the person's normal routine, occupational (or academic) functioning, or usual social activities or relationships.  
4. If another Axis I disorder is present, the content of the obsessions or compulsions is not restricted to it (e.g., preoccupation 'with food in the presence of an Eating Disorder; hair pulling in the presence of Trichotillomania; concern with appearance in the presence of Body
Dysmorphic Disorder; preoccupation with drugs in the presence of a Substance Use Disorder; preoccupation with having a serious illness in the presence of Hypochondriasis; preoccupation with sexual urges or fantasies in the presence of a Paraphilia; or guilty ruminations in the
presence of Major Depressive Disorder).  
5. The disturbance is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.  

###### Specifiers
- With Poor Insight — if, for most of the time during the current episode, the person does not recognize that the obsessions and compulsions are excessive or unreasonable.

## DSM-III (1980)
The DSM-III lists under "Obsessive Compulsive Disorder" under the Anxiety Disorders section, and notes that "the most common obsessions are repetitive thoughts of violence, contamination, and doubt (e.g., repeatedly wondering whether one has performed some action, such as having hurt someone in a traffic accident).  

1. Either obsessions or compulsions:  
    Obsessions: recurrent, persistent Wets, thoughts, images, or impulses that are ego-dystonic, i.e., they are not experienced as voluntarily produced, but rather as thoughts that invade consciousness and are experienced as senseless or repugnant. Attempts are made to ignore or suppress them.  
    Compulsions: repetitive and seemingly purposeful behaviors that are performed according to certain rules or in a stereotyped fashion. The behavior is not an end in itself, but is designed to produce or prevent some future event or situation. However, either the activity is not connected in a realistic way with what it is designed to produce or prevent, or may be clearly excessive. The act is performed with a sense of subjective compulsion coupled with a desire to resist the compulsion (at least initially). The individual generally recognizes the senselessness of the behavior (this may not be true for young children) and does not derive pleasure from carrying out the activity, although it provides a release of tension.  
2. The obsessions or compulsions are a significant source of distress to the individual or interfere with social or role functioning.  
3. Not due to another mental disorder, such as Tourette's Disorder, Schizophrenia, Major Depression, or Organic Mental Disorder.  

## DSM-II (1968)
The DSM-II list "Obsessive compulsive neurosis" under the Neuroses section alongside anxiety neurosis, hysterical neurosis (dissociative and conversion type), phobic neurosis, depressive neurosis, neurasthenic neurosis (chronic weakness and fatigue), depersonalization neurosis, and hypochondriacal neurosis. Similar to the psychoneurotic reactions of the original DSM, the Neuroses section description specifies that "anxiety is the chief characteristic of neuroses".

#### Criteria
This disorder is characterized by the persistent intrusion of unwanted thoughts, urges, or actions that the patient is unable to stop. The thoughts may consist of single words or ideas, ruminations, or trains of thought often perceived by the patient as nonsensical. The actions vary from simple movements to complex rituals such as repeated handwashing. Anxiety and distress are often present either if the patient is prevented from completing his compulsive ritual or if he is concerned about being unable to control it himself.  

## DSM (1952)
The original DSM lists "Obsessive compulsive reaction" under Psychoneurotic Disorders or Psychoneurotic Reactions alongside anxiety reaction, dissociative reaction, conversion reaction, phobic reaction, and depressive reaction. This version of the DSM states that "the chief characteristic of [psychoneurotic disorders] is 'anxiety' which may be directly felt and expressed or which may be unconsciously and automatically controlled by the utilization of various psychological defence mechanisms (depressions, conversion, displacement, etc.)" and that those defense mechanisms used to cope with anxiety result in the various psychoneurotic reactions.

#### Criteria 
In this reaction the anxiety is associated with the persistence of unwanted ideas and of repetitive impulses to perform acts which may be considered morbid by the patient. The patient himself may regard his ideas and behavior as unreasonable, but nevertheless is compelled to carry out his rituals. The diagnosis will specify the symptomatic expression of such reactions, as touching, counting, ceremonials, hand-washing, or recurring thoughts (accompanied often by a compulsion to repetitive action). This category includes many cases formerly classified as "psychasthenia."`,gh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Bx,markdown:jx},Symbol.toStringTag,{value:"Module"})),Ux={title:"Other Specified Obsessive Compulsive Disorder",description:"Obsessive-compulsive symptoms that dominate the clinical picture but do not meet full criteria for a specified reason."},Hx=`## DSM-5-TR (2022)
This category applies to presentations in which symptoms characteristic of an obsessive-compulsive and related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the obsessive-compulsive and related disorders diagnostic class. The other specified obsessive-compulsive and related disorder category is used in situations in which the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for any specific obsessive-compulsive and related disorder. This is done by recording “other specified obsessive-compulsive and related disorder” followed by the specific reason (e.g., “obsessional jealousy”).  
Examples of presentations that can be specified using the “other specified” designation include the following:  
- Body dysmorphic–like disorder with actual flaws — Similar to body dysmorphic disorder except that the defects or flaws in physical appearance are clearly observable by others (i.e., they are more noticeable than “slight”). In such cases, the preoccupation with these flaws is clearly excessive and causes significant impairment or distress.  
- Body dysmorphic–like disorder without repetitive behaviors — Presentations that meet body dysmorphic disorder except that the individual has never performed repetitive behaviors or mental acts in response to the appearance concerns.  
- Other body-focused repetitive behavior disorder — Presentations involving recurrent body-focused repetitive behaviors other than hair pulling and skin picking (e.g., nail biting, lip biting, cheek chewing) that are accompanied by repeated attempts to decrease or stop the behaviors and that cause clinically significant distress or impairment in social, occupational, or other important areas of  functioning.  
- Obsessional jealousy — Nondelusional preoccupation with a partner’s perceived infidelity. The preoccupations may lead to repetitive behaviors or mental acts in response to the infidelity concerns; they cause clinically significant distress or impairment in social, occupational, or other important areas of functioning; and they are not better explained by another mental disorder such as delusional disorder, jealous type, or paranoid personality disorder.  
- Olfactory reference disorder (olfactory reference syndrome) — This is characterized by the individual’s persistent preoccupation with the belief that he or she emits a foul or offensive body odor that is unnoticeable or only slightly noticeable to others; in response to this preoccupation, these individuals often engage in repetitive and excessive behaviors such as repeatedly checking for body odor, excessive showering, or seeking reassurance, as well as excessive attempts to camouflage the perceived odor. These symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning. In traditional Japanese psychiatry, this disorder is known as jikoshu-kyofu, a variant of taijin kyofusho.  
- Shubo-kyofu — A variant of taijin kyofusho that is similar to body dysmorphic disorder and is characterized by excessive fear of having a bodily deformity.  
- Koro — Related to dhat syndrome, an episode of sudden
and intense anxiety that the penis in males (or the vulva and
nipples in females) will recede into the body, possibly leading
to death.

## DSM-IV (1994)
<i>Does not appear<i>

## DSM-III (1980)
<i>Does not appear.</i>

## DSM-II (1968)
<i>Does not appear.</i>

## DSM (1952)
<i>Does not appear.</i>`,yh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Ux,markdown:Hx},Symbol.toStringTag,{value:"Module"})),$x={title:"Substance/Medication-Induced Obsessive Compulsive and Related Disorder",description:null},Wx=`## DSM-5-TR
1. Obsessions, compulsions, skin picking, hair pulling, other body-focused repetitive behaviors, or other symptoms characteristic of the  obsessive-compulsive and related disorders predominate in the clinical picture.  
2. There is evidence from the history, physical examination, or laboratory findings of both:  
    1. The symptoms developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.  
    2. The involved substance/medication is capable of producing the symptoms.  
3. The disturbance is not better explained by an obsessive-compulsive and related disorder that is not substance/medication-induced. Such evidence of an independent obsessive-compulsive and related disorder could include the following:  
    The symptoms precede the onset of the substance/medication use; the symptoms persist for a substantial period of time (e.g., about 1 month) after the cessation of acute withdrawal or severe intoxication; or there is other evidence suggesting the existence of an independent non-substance/medication-induced obsessive-compulsive and related disorder (e.g., a history of recurrent non-substance/medication-related episodes).  
4. The disturbance does not occur exclusively during the course of a delirium.  
5. The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.

###### Specifiers
- With onset during intoxication  
- With onset during withdrawal  
- With onset after medication use

#### Differential Diagnosis
- Substance intoxication and substance withdrawal  
- Obsessive-compulsive and related disorder (i.e., not induced by a substance)  
- Obsessive-compulsive and related disorder due to another medical condition.  
- Delirium

## DSM-IV (1994)
<i>Appears in the Anxiety Disorders section as Substance-Induced Anxiety Disorder "with obsessive-compulsive symptoms".</i>

## DSM-III (1980)
<i>Does not appear.</i>

## DSM-II (1968)
<i>Does not appear.</i>

## DSM (1952)
<i>Does not appear.</i>`,vh=Object.freeze(Object.defineProperty({__proto__:null,attributes:$x,markdown:Wx},Symbol.toStringTag,{value:"Module"})),Vx={title:"Trichotillomania (Hair-Pulling Disorder)",description:"Recurrent pulling out of one’s hair, resulting in hair loss.",prevalence:"1-2%"},Yx=`Hair pulling is often accompanied by rituals or certain behaviors involving hair. Individuals may search for a particular kind of hair to pull (e.g., hairs with a specific texture or color), try to pull out hair in a specific way (e.g., so that the root comes out intact), or may visually examine or tactilely or orally manipulate the hair after it has been pulled (e.g., rolling the hair between the fingers, pulling the strand between the teeth, biting the hair into pieces, or swallowing the hair).  
The majority of individuals with trichotillomania also have one or more other body-focused repetitive behaviors, including skin picking, nail biting, and lip chewing. The disorder is more common in individuals with OCD and their first-degree relatives.

## DSM-5-TR (2022)
1. Recurrent pulling out of one’s hair, resulting in hair loss.  
2. Repeated attempts to decrease or stop hair pulling.  
3. The hair pulling causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
4. The hair pulling or hair loss is not attributable to another medical condition (e.g., a dermatological condition).  
5. The hair pulling is not better explained by the symptoms of another mental disorder (e.g., attempts to improve a perceived defect or flaw in appearance in body dysmorphic disorder).

#### Differential Diagnosis
- Normative hair removal/manipulation  
- Other obsessive-compulsive and related disorders  
<i>Note, individuals with OCD and symmetry concerns may pull out hairs as part of their symmetry rituals, and individuals with body dysmorphic disorder may remove body hair that they perceive as ugly, asymmetrical, or abnormal; in such cases a diagnosis of trichotillomania is not given.</i>  
- Stereotypic movement disorder  
- Psychotic disorder  
- Another medical condition  
- Substance-related disorders

## DSM-IV (1994)
1. Recurrent pulling out of one's hair resulting in noticeable hair loss.  
2. An increasing sense of tension immediately before pulling out the hair or when attempting to resist the behavior.  
3. Pleasure, gratification, or relief when pulling out the hair.  
4. The disturbance is not better accounted for by another mental disorder and is not due to a general medical condition (e.g., a dermatological condition).  
5. The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.

## DSM-III (1980)
<i>Appears in the section for Special symptoms or syndromes not elsewhere classified as an example of the "Other and unspecified" category under "Hair plucking".</i>

## DSM-II (1968)
<i>Does not appear.</i>

## DSM (1952)
<i>Does not appear.</i>`,bh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Vx,markdown:Yx},Symbol.toStringTag,{value:"Module"})),qx={title:"Unspecified Obsessive Compulsive Disorder",description:"Obsessive-compulsive symptoms that dominate the clinical picture but do not meet full criteria for an unspecified reason."},Qx=`## DSM-5-TR
This category applies to presentations in which symptoms characteristic of an obsessive-compulsive and related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the obsessive-compulsive and related disorders diagnostic class. The unspecified obsessive-compulsive and related disorder category is used in situations in which the clinician chooses not to specify the reason that the criteria are not met for a specific obsessive-compulsive and related disorder and includes presentations in which there is insufficient information to make a more specific diagnosis (e.g., in emergency room settings).

## DSM-IV (1994)
<i>Does not appear<i>

## DSM-III (1980)
<i>Does not appear.</i>

## DSM-II (1968)
<i>Does not appear.</i>

## DSM (1952)
<i>Does not appear.</i>`,Th=Object.freeze(Object.defineProperty({__proto__:null,attributes:qx,markdown:Qx},Symbol.toStringTag,{value:"Module"})),Gx={title:"Exhibitionistic Disorder",description:"Recurrent and intense sexual arousal from the exposure of one's genitals to an unsuspecting person."},Kx=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Over a period of at least 6 months, recurrent and intense sexual arousal from the exposure of one's genitals to an unsuspecting person, as manifested by fantasies, urges, or behaviors.  
2. The individual has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.

###### Specifiers
- Sexually aroused by exposing genitals to prepubertal children  
- Sexually aroused by exposing genitals to physically mature individuals  
- Sexually aroused by exposing genitals to prepubertal children and to physically mature individuals  
- In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to expose one’s genitals are restricted.  
- In full remission: The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Exhibitionism in the Sexual and Gender Identity Disorders section.  

1. Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving the exposure of one's genitals to an unsuspecting stranger.  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Exhibitionism in the Psychosexual Disorders section.

Repetitive acts of exposing the genitals to an unsuspecting stranger for the purpose of achieving sexual excitement, with no attempt at further sexual activity with the stranger.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Exhibitionism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..  

This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included under general Sexual Deviation diagnosis.  

This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as "psychopathic personality with pathologic sexuality." The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).
</div>
</div>`,Eh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Gx,markdown:Kx},Symbol.toStringTag,{value:"Module"})),Xx={title:"Fetishistic Disorder",description:"Recurrent and intense sexual arousal from either the use of nonliving objects or a highly specific focus on nongenital body parts."},Jx=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Over a period of at least 6 months, recurrent and intense sexual arousal from either the use of nonliving objects or a highly specific focus on nongenital body par(s), as manifested by fantasies, urges, or behaviors.  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
3. The fetish objects are not limited to articles of clothing used in cross-dressing (as in transvestic disorder) or devices specifically designed for the purpose of tactile genital stimulation (e.g., vibrator).  

###### Specifiers
- Body part(s)  
- Nonliving object(s)  
- Other  
- In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to engage in fetishistic behaviors are restricted.  
- In full remission: There has been no distress or impairment in social, occupational, or other areas of functioning for at least 5 years while in an uncontrolled environment.
</div>  

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV 
Listed as Fetishism in the Sexual and Gender Identity Disorders section.  

1. Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving the use of nonliving objects (e.g., female undergarments).  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
3. The fetish objects are not limited to articles of female clothing used in cross-dressing (as in Transvestic Fetishism) or devices designed for the purpose of tactile genital stimulation (e.g., a vibrator).
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Fetishism in the Psychosexual Disorders section.  

1. The use of nonliving objects (fetishes) is a repeatedly preferred or exclusive method of achieving sexual excitement.  
2. The fetishes are not limited to articles of female clothing used in cross-dressing (Transvestism) or to objects designed to be used for the purpose of sexual stimulation (e.g., vibrator).
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Fetishism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..  

This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included under general Sexual Deviation diagnosis.  

This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as "psychopathic personality with pathologic sexuality." The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).
</div>
</div>`,wh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Xx,markdown:Jx},Symbol.toStringTag,{value:"Module"})),Zx={title:"Frotteuristic Disorder",description:"Recurrent and intense sexual arousal from touching or rubbing against a nonconsenting person."},e_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Over a period of at least 6 months, recurrent and intense sexual arousal from touching or rubbing against a nonconsenting person, as manifested by fantasies, urges, or behaviors.  
2. The individual has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  

###### Specifiers
- In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to touch or rub against a nonconsenting person are restricted.  
- In full remission: The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Frotteurism in the Sexual and Gender Identity Disorders section.  

1. Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving touching and rubbing against a nonconsenting person.  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed under Atypical Paraphilia in the Psychosexual Disorders section.  

This is a residual category for individuals with Paraphilias that cannot be classified in any of the other categories. Such conditions include: Coprophilia (feces); Frotteurism (rubbing); Klismaphilia (enema); Mysophilia (filth); Necrophilia (corpse); Telephone Scatologia (lewdness); and Urophilia (urine).
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Frotteurism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..  

This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included as Sexual Deviation.  

This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as "psychopathic personality with pathologic sexuality." The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).
</div>
</div>`,xh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Zx,markdown:e_},Symbol.toStringTag,{value:"Module"})),t_={title:"Other Specified Paraphilic Disorder",description:"Paraphilic presentations that cannot be classified by another diagnostic class for a specific reason but cause clinically significant distress or impairment."},n_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
This category applies to presentations in which symptoms characteristic of a paraphilic disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the paraphilic disorders diagnostic class. The other specified paraphilic disorder category is used in situations in which the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for any specific paraphilic disorder. This is done by recording “other specified paraphilic disorder” followed by the specific reason (e.g., “zoophilia”).
Examples of presentations that can be specified using the “other specified” designation include, but are not limited to, recurrent and intense sexual arousal involving telephone scatologia (obscene phone calls), necrophilia (corpses), zoophilia (animals), coprophilia (feces), klismaphilia (enemas), or urophilia (urine) that has been present for at least 6 months and causes marked distress or impairment in social, occupational, or other important areas of functioning. Other specified paraphilic disorder can be specified as in remission and/or as occurr in a controlled environment.
</div> 

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Paraphilia Not Otherwise Specified in the Sexual and Gender Identity Disorders section.  

This category is included for coding Paraphilias that do not meet the criteria for any of the specific categories. Examples include, but are not limited to, telephone scatologia (obscene phone calls), necrophilia (corpses), partialism (exclusive focus on part of body), zoophilia (animals), coprophilia (feces), klismaphilia (enemas), and urophilia (urine).
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Includes a separate category for Zoophilia, as well as Atypical Paraphilia in the Psychosexual Disorders section.  

<i>Zoophilia</i>  
The act or fanlaisy of engaging in sexual activity with animals is a repeatedly preferred or exclusive method of achieving sexual excitement.

</i>Atypical Paraphilia</i>  
This is a residual category for individuals with Paraphilias that cannot be classified in any of the other categories. Such conditions include: Coprophilia (feces); Frotteurism (rubbing); Klismaphilia (enema); Mysophilia (filth); Necrophilia (corpses); Telephone Scatologia (lewdness); and Urophilia (urine).
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Included as Other Sexual Deviation or Unspecified Sexual Deviation subtypes of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included under general Sexual Deviation diagnosis.  

This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as "psychopathic personality with pathologic sexuality." The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).
</div>
</div>`,_h=Object.freeze(Object.defineProperty({__proto__:null,attributes:t_,markdown:n_},Symbol.toStringTag,{value:"Module"})),i_={title:"Pedophilic Disorder",description:"Recurrent and intense sexually arousing fantasies, sexual urges, or behaviors involving sexual activity with a prepubescent child (generally age 13 years or younger)."},r_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving sexual activity with a prepubescent child or children (generally aged 13 years or younger).  
2. The individual has acted on these sexual urges, or the sexual urges or fantasies cause marked distress or interpersonal difficulty.  
3. The individual is at least age 16 years and at least 5 years older than the child or children in Criterion 1.  
<i>Note, does not include an individual in late adolescence involved in an ongoing relationship with a 12- or 13-year-old.</i>  

###### Specifiers
- Exclusive type (attracted only to children)  
- Nonexclusive type  
- Sexually attracted to males  
- Sexually attracted to females  
- Sexually attracted to both  
- Limited to incest
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Pedophilia in the Sexual and Gender Identity Disorders section.  

1. Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving sexual activity with a prepubescent child or children (generally aged 13 years or younger).  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
3. The person is at least 16 years and at least 5 years older than the child or children in Criterion 1.  
<i>Note, does not include an individual in late adolescence involved in an ongoing relationship with a 12- or 13-year-old.</i>  

###### Specifiers
- Sexually attracted to Males  
- Sexually attracted to Females  
- Sexually attracted to Both  
- Limited to Incest
- Exclusive Type (attracted only to children)  
- Nonexclusive Type  
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Pedophilia in the Psychosexual Disorders section.  

1. The act or fantasy of engaging in sexual activity with prepubertal children is a repeatedly preferred or exclusive method of achieving sexual excitement.  
2. If the individual is an adult, the prepubertal children are at least ten years younger than the individual. If the individual is a late adolescent, no precise age different is required, and clinical judgment must take into account the age difference as well as the sexual maturity of the child.
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Pedophilia included as a subtype of Sexual Deviation in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..  

This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included under general Sexual Deviation diagnosis.  

This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as "psychopathic personality with pathologic sexuality." The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).
</div>
</div>`,Sh=Object.freeze(Object.defineProperty({__proto__:null,attributes:i_,markdown:r_},Symbol.toStringTag,{value:"Module"})),o_={title:"Sexual Masochism Disorder",description:"Recurrent and intense sexual arousal from the act of being humiliated, beaten, bound, or otherwise made to suffer."},s_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Over a period of at least 6 months, recurrent and intense sexual arousal from the act of being humiliated, beaten, bound, or otherwise made to suffer, as manifested by fantasies, urges, or behavior.  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  

###### Specifiers
- With asphyxiophilia: If the individual engages in the practice of achieving sexual arousal related to restriction of breathing.  
- In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to engage in masochistic sexual behaviors are restricted.  
- In full remission: There has been no distress or impairment in social, occupational, or other areas of functioning for at least 5 years while in an uncontrolled environment.
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Sexual Masochism in the Sexual and Gender Identity Disorders section.  

1. Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving the act (real, not simulated) of being humiliated, bound, or otherwise made to suffer.  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Sexual Masochism in the Psychosexual Disorders section.  

Either (1) or (2):  
1. A preferred or exclusive mode of producing sexual excitement is to be humiliated, bound, beaten, or otherwise made to suffer.  
2. The individual has intentionally participated in an activity in which he or she was physically harmed or his or her life was threatened, in order to produce sexual excitement.  
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Masochism included as a subtype of Sexual Deviation in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..  

This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Not listed.
</div>
</div>`,kh=Object.freeze(Object.defineProperty({__proto__:null,attributes:o_,markdown:s_},Symbol.toStringTag,{value:"Module"})),a_={title:"Sexual Sadism Disorder",description:"Recurrent and intense sexual arousal from the physical or psychological suffering of another person."},l_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Over a period of at least 6 months, recurrent and intense sexual arousal from the physical or psychological suffering of another person, as manifested by fantasies, urges, or behaviors.  
2. The individual has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  

###### Specifiers
- In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to engage in sadistic sexual behaviors are restricted.  
- In full remission: The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment.
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Sexual Sadism in the Sexual and Gender Identity Disorders section.  

1. Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving acts (real, not simulated) in which the psychological or physical suffering (including humiliation) of the victim is sexually exciting to the person.  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Sexual Sadism in the Psychosexual Disorders section.  

One of the following:  
1. On a nonconsenting partner, the individual has repeatedly intentionally inflicted psychological or physical suffering in order to produce sexual excitement.  
2. With a consenting partner, the repeatedly preferred or exclusive mode of achieving sexual excitement combines humilitation with simulated or mildly injurious bodily suffering.  
3. On a consenting partner, bodily injury that is extensive, permanent, or possibly mortal is inflicted in order to achieve sexual excitement.
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Sadism included as a subtype of Sexual Deviation in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..  

This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included under general Sexual Deviation diagnosis.  

This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as "psychopathic personality with pathologic sexuality." The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).
</div>
</div>`,Dh=Object.freeze(Object.defineProperty({__proto__:null,attributes:a_,markdown:l_},Symbol.toStringTag,{value:"Module"})),u_={title:"Transvestic Disorder",description:"Recurrent and intense sexual arousal from cross-dressing."},c_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Over a period of at least 6 months, recurrent and intense sexual arousal from cross-dressing, as manifested by fantasies, urges, or behaviors.  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  

###### Specifiers
- With fetishism: If sexually aroused by fabrics, materials, or garments.  
- With autogynephilia: If sexually aroused by thoughts or images of self as a woman.  
- In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to cross-dress are restricted.  
- In full remission: There has been no distress or impairment in social, occupational, or other areas of functioning for at least 5 years while in an uncontrolled environment.
</div>

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Transvestic Fetishism in the Sexual and Gender Identity Disorders section.  

1. Over a period of at least 6 months, in a heterosexual male, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving cross-dressing.  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  

###### Specifiers
- With Gender Dysphoria: If the person has persistent discomfort with gender role or identity.
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Transvestism in the Psychosexual Disorders section.  

1. Recurrent and persistent cross-dressing by a heterosexual male.  
2. Use of cross-dressing for the purpose of sexual excitement, at least initially in the course of the disorder.  
3. Intense frustration when the cross-dressing is interfered with.  
4. Does not meet the criteria for Transsexualism.  
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Transvestitism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..  

This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included under general Sexual Deviation diagnosis.  

This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as "psychopathic personality with pathologic sexuality." The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).
</div>
</div>`,Ih=Object.freeze(Object.defineProperty({__proto__:null,attributes:u_,markdown:c_},Symbol.toStringTag,{value:"Module"})),d_={title:"Unspecified Paraphilic Disorder",description:"Paraphilic presentations that cannot be classified by another diagnostic class without specific reason but cause clinically significant distress or impairment."},h_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
This category applies to presentations in which symptoms characteristic of a paraphilic disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the paraphilic disorders diagnostic class. The unspecified paraphilic disorder category is used in situations in which the clinician chooses not to specify the reason that the criteria are not met for a specific paraphilic disorder, and includes presentations in which there is insufficient information to make a more specific diagnosis.
</div> 

<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Paraphilia Not Otherwise Specified in the Sexual and Gender Identity Disorders section.  

This category is included for coding Paraphilias that do not meet the criteria for any of the specific categories. Examples include, but are not limited to, telephone scatologia (obscene phone calls), necrophilia (corpses), partialism (exclusive focus on part of body), zoophilia (animals), coprophilia (feces), klismaphilia (enemas), and urophilia (urine).
</div>

<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Atypical Paraphilia in the Psychosexual Disorders section.  

This is a residual category for individuals with Paraphilias that cannot be classified in any of the other categories. Such conditions include: Coprophilia (feces); Frotteurism (rubbing); Klismaphilia (enema); Mysophilia (filth); Necrophilia (corpses); Telephone Scatologia (lewdness); and Urophilia (urine).
</div>

<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Included as Other Sexual Deviation or Unspecified Sexual Deviation subtypes of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included under general Sexual Deviation diagnosis.  

This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as "psychopathic personality with pathologic sexuality." The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).
</div>
</div>`,Ch=Object.freeze(Object.defineProperty({__proto__:null,attributes:d_,markdown:h_},Symbol.toStringTag,{value:"Module"})),f_={title:"Voyeuristic Disorder",description:"Intense and recurrent sexual arousal from observing an unsuspecting person who is naked, disrobing, or engaging in sexual activity.",prevalence:"unknown"},p_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Over a period of at least 6 months, recurrent and intense sexual arousal from observing an unsuspecting person who is naked, in the process of disrobing, or engaging in sexual activity, as manifested by fantasies, urges, or behaviors.  
2. The individual has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
3. The individual experiencing the arousal and/or acting on the urges is at least 18 years of age.  

###### Specifiers
- In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to engage in voyeuristic behavior are restricted.  
- In full remission: The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Voyeurism in the Sexual and Gender Identity Disorders section.

1. Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving the act of observing an unsuspecting person who is naked, in the process of disrobing, or engaging in sexual activity.  
2. The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 

## DSM-III
Listed as Voyeurism in the Psychosexual Disorders section.

1. The individual repeatedly observes unsuspecting people who are naked, in the act of disrobing, or engaging in sexual activity and no sexual activity with the observed people is sought.  
2. The observing is the repeatedly preferred or exclusive method of achieving sexual excitement.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Voyeurism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..  

This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Included under general Sexual Deviation diagnosis.  

This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as "psychopathic personality with pathologic sexuality." The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).
</div>
</div>`,Ah=Object.freeze(Object.defineProperty({__proto__:null,attributes:f_,markdown:p_},Symbol.toStringTag,{value:"Module"})),m_={title:"Paranoid Personality Disorder",description:"A pattern of distrust and suspiciousness such that others' motives are interpreted as malevolent."},g_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. A pervasive distrust and suspiciousness of others such that their motives are interpreted as malevolent, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:  
    1. Suspects, without sufficient basis, that others are exploiting, harming, or deceiving him or her.  
    2. Is preoccupied with unjustified doubts about the loyalty or trustworthiness of friends or associates.  
    3. Is reluctant to confide in others because of unwarranted fear that the information will be used maliciously against him or her.  
    4. Reads hidden demeaning or threatening meanings into benign remarks or events.  
    5. Persistently bears grudges (i.e., is unforgiving of insults, injuries, or slights).  
    6. Perceives attacks on his or her character or reputation that are not apparent to others and is quick to react angrily or to counterattack.  
    7. Has recurrent suspicions, without justification, regarding fidelity of spouse or sexual partner.  
2. Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, or another psychotic disorder and is not attributable to the physiological effects of another medical condition.  
<i>Note, if criteria are met prior to the onset of schizophrenia, add
“premorbid,” i.e., “paranoid personality disorder (premorbid).”</i>  
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
1. A pervasive distrust and suspiciousness of others such that their motives are interpreted as malevolent, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:  
    1. suspects, without sufficient basis, that others are exploiting, harming, or deceiving him or her  
    2. is preoccupied with unjustified doubts about the loyalty or trustworthiness of friends or associates  
    3. is reluctant to confide in others because of unwarranted fear that the information will be used maliciously against him or her  
    4. reads hidden demeaning or threatening meanings into benign remarks or events  
    5. persistently bears grudges, i.e., is unforgiving of insults, injuries, or slights  
    6. perceives attacks on his or her character or reputation that are not apparent to others and is quick to react angrily or to counterattack  
    7. has recurrent suspicions, without justification, regarding the fidelity of spouse or sexual partner  
2. Does not occur exclusively during the course of Schizophrenia, a Mood Disorder With Psychotic Features, or another Psychotic Disorder and is not due to the direct physiological effects of a general medical condition.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Paranoid Personality Disorder in the Personality Disorders section. Paranoid Disorders also included as a separate section.  

1. Pervasive, unwarranted suspiciousness and mistrust of people as indicated by at least three of the following:  
    1. expectation of trickery or harm  
    2. hypervigilence, manifested by continual scanning of the environment for signs of threat, or taking unneeded precautions  
    3. guardedness or secretiveness  
    4. avoidance of accepting blame when warranted  
    5. questioning the loyalty of others  
    6. intense, narrowly focused searching for confirmation of bias, with loss of appreciation of total context  
    7. overconcern with hidden motives and special meanings  
    8. pathological jealousy  
2. Hypersensitivity as indicated by at least two of the following:  
    1. tendency to be easily slighted and quick to take offense  
    2. exaggeration of difficulties, e.g., "making mountains out of molehills"  
    3. readiness to counterattack when any threat is perceived  
    4. inability to relax  
3. Restricted affectivity as indicated by at least two of the following:  
    1. appearance of being "cold" and unemotional  
    2. pride taken in always being objective, rational, and unemotional  
    3. lack of a true sense of humor  
    4. absence of passive, soft, tender, and sentimental feelings  
4. Not due to another mental disorder such as Schizophrenia or a Paranoid Disorder.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Listed as Paranoid Personality in the Personality Disorders section. Paranoid States also included in the Psychoses Not Attributed to Physical Conditions Listed Previously section, including Alcohol Paranoid State.  

<i>Paranoid Personality</i>  
This behavioral pattern is characterized by hypersensitivity, rigidity, unwarranted suspicion, jealousy, envy, excessive self-importance, and a tendency to blame others and ascribe evil motives to them. These characteristics often interfere with the patient's ability to maintain satisfactory interpersonal relations. Of course, the presence of suspicion of itself does not justify this diagnosis, since the suspicion may be warranted in some instances.  

<i>Alcohol Paranoid State</i>  
This term describes a paranoid state which develops in chronic alcoholics, generally male, and is characterized by excessive jealousy and delusions of infidelity by the spouse. Patients diagnosed under primary paranoid states or schizophrenia should not be included here even if they drink to excess.  

<i>Paranoid States</i>  
These are psychotic disorders in which a delusion, generally persecutory or grandiose, is the essential abnormality. Disturbances in mood, behavior and thinking (including hallucinations) are derived from this delusion. This distinguishes paranoid states from the affective psychoses and schizophrenias, in which mood and thought disorders, respectively, are the central abnormalities. Most authorities, however, question whether disorders in this group are distinct clinical entities and not merely variants of schizophrenia or paranoid personality.  

<i>Paranoia</i>  
This extremely rare condition is characterized by gradual development of an intricate, complex, and elaborate paranoid system based on and often preceeding logically from misinterpretation of an actual event. Frequently the patient considers himself endowed with unique and superior ability. In spite of a chronic course the condition does not seem to interfere with the rest of the patient's thinking and personality.  
<i>Involutional Paranoid State (Involutional Paraphrenia)</i>  
This paranoid psychosis is characterized by delusion formation with onset in the involutional period. Formerly it was classified as a paranoid variety of involutional psychotic reaction. The absence of conspicuous thought disorders typical of schizophrenia distinguishes it from that group.  
<i>Other Paranoid State</i>  
This is a residual category for paranoid psychotic reactions not classified earlier. 

</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Listed as Paranoid Reactions.  

In this group are to be classified those cases showing persistent delusions, generally persecutory or grandiose, ordinarily without hallucinations. The emotional responses and behavior are consistent with the ideas held. Intelligence is well preserved. This category does not include those reactions properly classifiable under Schizophrenic reaction, paranoid type.  

<i>Paranoia</i>  
This type of psychotic disorder is extremely rare. It is characterized by an intricate, complex, and slowly developing paranoid system, often logically elaborated after a false interpretation of an actual occurence. Frequently, the patient considers himself endowed with superior or unique ability. The paranoid system is particularly isolated from much of the normal stream of consciousness, without hallucinations and with relative intactness and preservation of the remainder of the personality, in spite of a chronic and prolonged course.  
<i>Paranoid States</i>  
This type of paranoid disorder is characterized by paranoid delusions. It lacks the logical nature of systematization seen in paranoia; yet it does not manifest the bizarre fragmentation and deterioration of the schizophrenic reactions. It is likely to be of relatively short duration, though it may be persistent and chronic.  

</div>`,Oh=Object.freeze(Object.defineProperty({__proto__:null,attributes:m_,markdown:g_},Symbol.toStringTag,{value:"Module"})),y_={title:"Schizoid Personality Disorder",description:"A pattern of detachment from social relationships and restricted expression of emotion."},v_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. A pervasive pattern of detachment from social relationships and a restricted range of expression of emotions in interpersonal settings, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:  
    1. Neither desires not enjoys close relationships, including being part of a family.  
    2. Almost always chooses solitary activities.  
    3. Has little, if any, interest in having sexual experiences with another person.  
    4. Takes pleasure in few, if any, activities.  
    5. Lacks close friends or confidants other than first-degree relatives.  
    6. Appears indifferent to the priase or criticism of others.  
    7. Shows emotional coldness, detachment, or flattened affectivity.  
2. Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, another psychotic disorder, or autism spectrum disorder and is not attributable to the physiological effects of another medical condition.  
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Schizoid Personality Disorder in the Personality Disorders section.  
1. A pervasive pattern of detachment from social relationships and a restricted range of expression of emotions in interpersonal settings, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:  
    1. Neither desires nor enjoys close relationships, including being part of a family.  
    2. Almost always chooses solitary activities.  
    3. Has little, if any, interest in having sexual experiences with another person.  
    4. Takes pleasure in few, if any, activities.  
    5. Lacks close friends or confidants other than first-degree relatives.  
    6. Appears indifferent to the praise or criticism of others.  
    7. Shows emotional coldness, detachment, or flattened affectivity.  
2. Does not occur exclusively during the course of Schizophrenia, a Mood Disorder With Psychotic Features, another Psychotic Disorder, or a Pervasive Developmental Disorder and is not due to the direct physiological effects of a general medical condition.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Includes Schizoid Disorder of Childhood or Adolescence in the Other Disorders of Infancy, Childhood, or Adolescence section, as well as Schizoid Personality Disorder in the Personality Disorders section.  

<i>Schizoid Disorder of Childhood or Adolescence</i>  
1. No close friend of similar age other than a relative or a similarly socially isolated child.  
2. No apparent interest in making friends.  
3. No pleasure from usual peer interactions.  
4. General avoidance of nonfamilial social contacts, especially with peers.  
5. No interest in activities that involve other children (such as team sports, clubs).  
6. Duration of the disturbance of at least three months.  
7. Not due to Pervasive Developmental Disorder; Conduct Disorder, Undersocialized, Nonaggressive; or any psychotic disorder, such as Schizophrenia.  
8. If 18 or older, does not meet the criteria for Schizoid Personality Disorder.  

<i>Schizoid Personality Disorder</i>  
The following are characteristic of the individual's current and long-term functioning, are not limited to episodes of illness, and cause either significant impairment in social or occupational functioning or subjective distress.  
1. Emotional coldness and aloofness, and absence of warm, tender feelings for others.  
2. Indifference to praise or criticism or to the feelings of others.  
3. Close friendships with no more than one or two persons, including family members.  
4. No eccentricities of speech, behavior, or thought characteristic of Schizotypal Personality Disorder.  
5. Not due to a psychotic disorder such as Schizophrenia or Paranoid Disorder.  
6. If under 18, does not meet the criteria for Schizoid Disorder of Childhood or Adolescence. 
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Listed as Schizoid Personality in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section.  

This behavior pattern manifests shyness, over-sensitivity, seclusiveness, avoidance of close or competitive relationships, and often eccentricity. Autistic thinking without loss of capacity to recognize reality is common, as is daydreaming and the inability to express hostility and ordinary aggressive feelings. These patients react to disturbing experiences and conflicts with apparent detachment.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Listed as Schizoid Personality in the Personality Disorders section.  

Inherent traits in such personalities are (1) avoidance of close relationships with others, (2) inability to express directly hostility or even ordinary aggressive feelings, and (3) autistic thinking. These qualities result early in coldness, aloofness, emotional detachment, fearfulness, avoidance of competition, and day dreams revolving around the need for omnipotence. As children, they are usually quiet, shy, obedient, sensitive and retiring. At puberty, they frequently become more withdrawn, then manifesting the aggregate of personality traits known as introversion, namely, quietness, seclusiveness, "shut-in-ness", and unsociability, often with eccentricity.
</div>
</div>`,Ph=Object.freeze(Object.defineProperty({__proto__:null,attributes:y_,markdown:v_},Symbol.toStringTag,{value:"Module"})),b_={title:"Schizotypal Personality Disorder",description:"A pattern of social and interpersonal deficits marked by acute discomfort with, and reduced capacity for, close relationships and cognitive or perceptual distortions and eccentricities of behavior."},T_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. A pervasive pattern of social and interpersonal deficits marked by acute discomfort with, and reduced capacity for, close relationships as well as by cognitive or perceptual distortions and eccentricities of behavior, beginning by early adulthood and present in a variety of contexts, as indicated by five (or more) of the following:  
    1. Ideas of reference (excluding delusions of reference).  
    2. Odd beliefs or magical thinking that influences behavior and is inconsistent with subcultural norms (e.g., superstitiousness, belief in clairvoyance, telepathy, or "sixth sense"; in children and adolescents, bizarre fantasies or preoccupations).  
    3. Unusual perceptual experiences, including bodily sensations.  
    4. Odd thinking and speech (e.g., vague, circumstantial, metaphorical, overelaborate, or stereotyped).  
    5. Suspiciousness or paranoid ideation.  
    6. Inappropriate or constricted affect.  
    7. Behavior or appearance that is odd, eccentric, or peculiar.  
    8. Lack of close friends or confidants other than first-degree relatives.  
    9. Excessive social anxiety that does not diminish with familiarity and tends to be associated with paranoid fears rather than negative judgments about self.  
2. Does not occur exclusively during the course of
schizophrenia, a bipolar disorder or depressive disorder with psychotic features, another psychotic disorder, or autism spectrum disorder.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Schizotypal Personality Disorder in the Personality Disorders section.  

1. A pervasive pattern of social and interpersonal deficits marked by acute discomfort with, and reduced capacity for, close relationships as well as by cognitive or perceptual distortions and eccentricities of behavior, beginning by early adulthood and present in a variety of contexts, as indicated by five (or more) of the following:  
    1. Ideas of reference (excluding delusions of reference).  
    2. Odd beliefs or magical thinking that influences behavior and is inconsistent with subcultural norms (e.g., superstitiousness, belief in clairvoyance, telepathy, or "sixth sense"; in children and adolescents, bizarre fantasies or preoccupations).  
    3. Unusual perceptual experiences, including bodily illusions.  
    4. Odd thinking and speech (e.g., vague, circumstantial, metaphorical, overelaborate, or stereotyped).  
    5. Suspiciousness or paranoid ideation.  
    6. Inappropriate or constricted affect.  
    7. Behavior or appearance that is odd, eccentric, or peculiar.  
    8. Lack of close friends or confidants other than first-degree relatives.  
    9. Excessive social anxiety that does not diminish with familiarity and tends to be associated with paranoid fears rather than negative judgments about self.  
2. Does not occur exclusively during the course of
Schizophrenia, a Mood Disorder With Psychotic Features, another Psychotic Disorder, or a Pervasive Developmental Disorder.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Schizotypal Personality Disorder in the Personality Disorders section, with an introduction to Schizotypal Personality Disorder as it is first broken out from Schizoid Personality in the DSM-III.

<i>Intro</i>
Schizoid and Schizotypal Personality Disorders are new diagnostic categories. In the past, the term Schizoid was applied to individuals with defects in the capacity to form social relationships. In addition, the term was applied to individuals with various eccentricities of communication or behavior. Because recent evidence suggests a possible relationship between the latter group of individuals and a family history of chronic Schizophrenia, they are diagnosed in this manual separately as having Schizotypal Personality Disorder. The term Schizotypal is given to this category because, in addition, the features of this disorder are frequently present in individuals with Schizophrenia, Residual Type.  
Some Cases previously diagnosed as Borderline, Latent, or Simple Schizophrenia are likely to be classified in this manual as Schizotypal Personality Disorder.  
Individuals with defects in the capacity to form social relationships but without eccentricities of communication or behavior are diagnosed here as having Schizoid Personality Disorder, even though the term is more inclusive in other classifications and suggests a relationship to Schizophrenia.  

<i>Schizotypal Personality Disorder</i>  
The following characteristics of the individual's current and long-term functioning, are not limited to episodes of illness, and cause either significant impairment in social or occupational functioning or subjective distress.  
1. At least four of the following:  
    1. Magical thinking, e.g., superstitiousness, clairvoyance, telepathy, "6th sense", "others can feel my feelings" (in children and adolescents, bizarre fantasies or preoccupations).  
    2. Ideas of reference.  
    3. Social isolation, e.g., no close friends or confidants, social contacts limited to essential everyday tasks.  
    4. Recurrent illusions, sensing the presence of a force or a person not actually present (e.g., "I felt as if my dead mother were in the room with me"), depersonalization, or derealization not associated with panic attacks.  
    5. Odd speech (without loosening of associations or incoherence), e.g., speech that is digressive, vague, overelaborate, circumstantial, metaphorical.  
    6. Inadequate rapport in face-to-face interaction due to constricted or inappropriate affect, e.g., aloof, cold.  
    7. Suspiciousness or paranoid ideation.  
    8. Undue social anxiety or hypersensitivity to real or imagined criticism.  
2. Does not meet criteria for Schizophrenia.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear (included in Schizoid Personality Disorder).
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear (included in Schizoid Personality Disorder).
</div>`,Nh=Object.freeze(Object.defineProperty({__proto__:null,attributes:b_,markdown:T_},Symbol.toStringTag,{value:"Module"})),E_={title:"Antisocial Personality Disorder",description:"A pattern of disregard for and violation of the rights of others."},w_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. A pervasive pattern of disregard for and violation of the rights of others, occurring since age 15 years, as indicated by three (or more) of the following:  
    1. Failure to conform to social norms with respect to lawful behaviors, as indicated by repeatedly performing acts that are grounds for arrest.  
    2. Deceitfulness, as indicated by repeated lying, use of aliases, or conning others for personal profit or pleasure.  
    3. Impulsivity or failure to plan ahead.  
    4. Irritability and aggressiveness, as indicated by repeate physical fights or assaults.  
    5. Reckless disregard or safety of self or others.  
    6. Consistent irresponsibility, as indicated by repeated failure to sustain consistent work behavior or honor financial obligations.  
    7. Lack of remore, as indicated by being indifferent to or rationalizing having hurt, mistreated, or stolen from another.  
2. The individual is at least age 18 years.  
3. There is evidence of conduct disorder with onset before age 15 years.  
4. The occurrence of antisocial behavior is not exclusively during the course of schizophrenia or bipolar disorder.
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Antisocial Personality Disorder in the Personality Disorders section.  
1. There is a pervasive pattern of disregard for and violation of the rights of others occurring since age 15 years, as indicated by three (or more) of the following:  
    1. Failure to conform to social norms with respect to lawful behaviors as indicated by repeatedly performing acts that are grounds for arrest.  
    2. Deceitfulness, as indicated by repeated lying, use of aliases, or conning others for personal profit or pleasure.  
    3. Impulsivity or failure to plan ahead.  
    4. Irritability and aggressiveness, as indicated by repeated physical fights or assults.  
    5. Reckless disregard for safety of self or others.  
    6. Consistent irresponsibility, as indicated by repeated failure to sustain consistent work behavior or honor financial obligations.  
    7. Lack of remorse, as indicated by being indifferent to or rationalizing having hurt, mistreated, or stolen from another.
2. The individual is at least age 18 years.  
3. There is evidence of Conduct Disorder with onset before age 15 years.  
4. The occurrence of antisocial behavior is not exclusively during the course of Schizophrenia or a Manic Episode.
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Antisocial Personality Disorder in the Personality Disorders section.  
1. Current age at least 18.  
2. Onset before age 15 as indicated by a history of three or more of the following before that age:  
    1. Truancy (positive if it amounted to at least five days per year for at least two years, not including the last year of school).  
    2. Expulsion or suspension from school for misbehavior.  
    3. Delinquency (arrested or referred to juvenile court because of behavior).  
    4. Running away from home overnight at least twice while living in parental or parental surrogate home.  
    5. Persistent lying.  
    6. Repeated sexual intercourse in a casual relationship.  
    7. Repeated drunkenness or substance abuse.  
    8. Thefts.  
    9. Vandalism.  
    10. School grades markedly below expectations in relation to estimated or known IQ (may have resulted in repeating a year).  
    11. Chronic violations of rules at home and/or at school (other than truancy).  
    12. Initation of fights.  
3. At least four of the following manifestations of the disorder since age 18:  
    1. Inability to sustain consistent work behavior, as indicated by any of the following: (a) too frequent job changes (e.g., three or more jobs in five years not accounted for by nature of job or economic or seasonal fluctuation), (b) significant unemployment (e.g., six months or more in five years when expected to work), (c) serious absenteeism from work (e.g., average three days or more of lateness or absence per month), (d), walking off several jobs without other jobs in sight (Note: similar behavior in an academic setting during the last few years of school may substitute for this criterion in individuals who by reason of their age or circumstances have not had an opportunity to demonstrate occupational adjustment).  
    2. Lack of ability to function as a responsible parent as evidenced by one or more of the following: (a) too frequent job changes (e.g., three or more jobs in five years not accounted for by nature of job or economic or seasonal fluctuation), (b) significant unemployment (e.g., six months or more in fix years when expected to work), (c) serious absenteeism from work (e.g., average three days or more of lateness or absence per month), (d) walking off several jobs without other jobs in sight (Note: similar behavior in an academic settings during the last few years of school may substitute for this criterion in individuals who by reason of their age or circumstances have not had an opportunity to demonstrate occupational adjustment)`,Mh=Object.freeze(Object.defineProperty({__proto__:null,attributes:E_,markdown:w_},Symbol.toStringTag,{value:"Module"})),x_={title:"General Personality Disorder",description:null},__=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. An enduring pattern of inner experience and behavior that deviates markedly from the expectations of the individual's culture. This pattern is manifested in two (or more) of the following areas:  
    1. Cognition (i.e., ways of perceiving and interpreting self, other people, and events).  
    2. Affectivity (i.e., the range, intensity, lability, and appropriateness of emotional response).  
    3. Interpersonal functioning.  
    4. Impulse control.  
2. The enduring pattern is inflexible and pervasive across a broad range of personal and social situations.  
3. The enduring pattern leads to clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
4. The pattern is stable and of long duration, and its onset can be traced back at least to adolescence or early adulthood.  
5. The enduring pattern is not better explained as a manifestation or consequence of another mental disorder.  
6. The enduring pattern is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medication condition (e.g., head trauma).
</div>
</div>`,Rh=Object.freeze(Object.defineProperty({__proto__:null,attributes:x_,markdown:__},Symbol.toStringTag,{value:"Module"})),S_={title:"Brief Psychotic Disorder",description:"Psychotic symptoms lasting less than 1 month.",prevalence:"2-7% of first-onset psychosis in several countries",synonyms:null,acronyms:null},k_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Presence of one (or more) of the following symptoms. At
least one of these must be (a), (b), or (c):  
    1. Delusions  
    2. Hallucinations  
    3. Disorganized speech (e.g., frequent derailment or incoherence)  
    4. Grossly disorganized or catatonic behavior  
<i>Note: Do not include a symptom if it is a culturally sanctioned response.</i>  
2. Duration of an episode of the disturbance is at least 1 day but less than 1 month, with eventual full return to premorbid level of functioning.  
3. The disturbance is not better explained by major depressive or bipolar disorder with psychotic features or another psychotic disorder such as schizophrenia or catatonia, and is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.

###### Specifiers
- With marked stressor(s) (brief reactive pscyhosis)
- Without marked stressor(s)  
- With paripartum onset   
- With catatonia  
- Severity:  
    - 0 — Absent  
    - 1 — Equivocal  
    - 2 — Mild  
    - 3 — Moderate  
    - 4 — Severe
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Brief Psychotic Disorder.  

1. Presence of one (or more) of the following symptoms:  
    1. Delusions  
    2. Hallucinations  
    3. Disorganized speech (e.g., frequent derailment or incoherence)  
    4. Grossly disorganized or catatonic behavior  
<i>Note: Do not include a symptom if it is a culturally sanctioned response.</i>   
2. Duration of an episode of the disturbance is at least 1 day but less than 1 month, with eventual full return to premorbid level of functioning.  
3. The disturbance is not better accounted for by a Mood Disorder With Psychotic Features, Schizoaffective Disorder, or Schizophrenia and is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.  

###### Specifiers
- With Marked Stressor(s) (brief reactive psychosis): If symptoms occur shortly after and apparently in response to events that, singly or together, would be markedly stressful to almost anyone in similar circumstances in
the person's culture.  
- Without Marked Stressor(s): If psychotic symptoms do not occur shortly after, or are not apparently in response to events that, singly or together, would be markedly stressful to almost anyone in similar circumstances in the person's culture.  
- With Postpartum Onset: If onset within 4 weeks postpartum.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Brief Reactive Psychosis.  

1. Psychotic symptoms appear immediately following a recognizable psychosocial stressor that would evoke significant symptoms of distress in almost anyone.  
2. The clinical picture involves emotional turmoil and at least one of the following psychotic symptoms:  
    1. Incoherence or loosening of associations  
    2. Delusions  
    3. Hallucinations  
    4. Behavior that is grossly disorganized or catatonic  
3. The psychotic symptoms last more than a few hours but less than two weeks, and there is an eventual return to the premorbid level of functioning.  
<i>Note: The diagnosis can be made soon after the onset of the psychotic symptoms without waiting for the expected recovery. If the psychotic symptoms last more than two weeks, the  diagnosis should be changed.</i>  
4. No period of increasing psychopathology immediately preceded the psychosocial stressor.  
5. The disturbance is not due to any other mental disorder, such as an Organic Mental Disorder, manic episode, or Factitious Disorder with Psychological Symptoms.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Not listed.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Not listed.
</div>`,Lh=Object.freeze(Object.defineProperty({__proto__:null,attributes:S_,markdown:k_},Symbol.toStringTag,{value:"Module"})),D_={title:"Delusional Disorder",description:"Limited psychotic symptoms (i.e., one or more delusion that may be culturally plausible) lasting more than 1 month but cannot be attributed to any other condition.",prevalence:"0.2%",synonyms:null,acronyms:null},I_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. The presence of one (or more) delusions with a duration of 1 month or longer.  
2. Criterion 1 for schizophrenia has never been met.  
<i>Note: Hallucinations, if present, are not prominent and are related to the delusional theme (e.g., the sensation of being infested with insects associated with delusions of infestation).</i>  
3. Apart from the impact of the delusion(s) or its ramifications, functioning is not markedly impaired, and behavior is not obviously bizarre or odd.  
4. If manic or major depressive episodes have occurred, these have been brief relative to the duration of the delusional periods.  
5. The disturbance is not attributable to the physiological effects of a substance or another medical condition and is not better explained by another mental disorder, such as body dysmorphic disorder or obsessive-compulsive disorder.  

###### Specifiers
- Erotomanic type — The central theme of the delusion is that another person is in love with the individual.  
- Grandiose type — The central theme of the delusion is the conviction of having some great (but unrecognized) talent or insight or having made some important discovery.  
- Jealous type — The central theme of the delusion is that their spouse or lover is unfaithful.  
- Persecutory type — The central theme of the delusion involves the individual's belief that they are being conspired against, cheated, spied upon, followed, poisoned or drugged, maliciously maligned, harassed, or obstructed in the pursuit of long-term goals.  
- Somatic type — The central theme of the delusion involves bodily functions or sensations.  
- Mixed type — Applies when there are multiple themes to the delusion(s) and no one predominates.  
- Unspecified type — Applies when the dominant delusional belief cannot be clearly determined or is not described by any one specific subtype.  
- With bizarre content — Delusions are deemed bizarre if they are clearly implausible, not understandable, and not derived from ordinary life experiences. For example, a belief that a stranger has removed their internal organs and replaced them with someone else's organs without leaving any wounds or scars.  
- First episode, currently in acute episode  
- First episode, currently in partial remission  
- First episode, currently in full remission  
- Multiple episodes, currently in acute episode 
- Multiple episodes, currently in partial remission  
- Multiple episodes, currently in full remission  
- Continuous  
- Unspecified  
- Severity
</div> 
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Delusional Disorder.  

1. Nonbizarre delusions (i.e., involving situations that occur in real life, such as being followed, poisoned, infected, loved at a distance, or deceived by spouse or lover, or having a disease) of at least 1 month's duration.  
2. Criterion 1 for Schizophrenia has never been met. Note: Tactile and olfactory hallucinations may be present in Delusional Disorder if they are related to the delusional theme.  
3. Apart from the impact of the delusion(s) or its ramifications, functioning is not markedly impaired and behavior is not obviously odd or bizarre.  
4. If mood episodes have occurred concurrently with delusions, their total duration has been brief relative to the duration of the delusional periods.  
5. The disturbance is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.  

###### Specifiers
- Erotomanic Type: Delusions that another person, usually of higher status, is in love with the individual.  
- Grandiose Type: Delusions of inflated worth, power, knowledge, identity, or special relationship to a deity or famous person.  
- Jealous Type: Delusions that the individual's sexual partner is unfaithful.  
- Persecutory Type: Delusions that the person (or someone to whom the person is close) is being malevolently treated in some way.  
- Somatic Type: Delusions that the person has some physical defect or general medical condition.
- Mixed Type: Delusions characteristic of more than one of the above types but no one theme predominates.  
- Unspecified Type
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Does not appear.  
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.
</div>`,Fh=Object.freeze(Object.defineProperty({__proto__:null,attributes:D_,markdown:I_},Symbol.toStringTag,{value:"Module"})),C_={title:"Other Specified Schizophrenia Spectrum and Other Psychotic Disorder",description:"Psychotic symptoms unable to be classified as a more specific disorder with the reason specified."},A_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 

## DSM-5-TR
This diagnosis is given when there are characteristic symptoms of schizophrenia spectrum and other psychotic disorer that cause significant distress or impairment in social or occupational functioning, but the person does not fit the full criteria for any of the disorders in the class or there is insufficient information to make a more specific diagnosis (e.g., emergency rooms). The "other" diagnosis is used when clinicians choose to communicate the specific reason that the presentation does not meet other diagnosis criteria (e.g., persistent auditory hallucinations).
</div>`,zh=Object.freeze(Object.defineProperty({__proto__:null,attributes:C_,markdown:A_},Symbol.toStringTag,{value:"Module"})),O_={title:"Psychotic Disorder Due to Another Medical Condition",description:"Psychotic symptoms caused by another medical condition.",prevalence:"0.21-0.54%"},P_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 

## DSM-5-TR
1. Prominent hallucinations or delusions.  
2. There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.  
3. The disturbance is not better explained by another mental disorder.  
4. The disturbance does not occur exclusively during the course of a delirium.  
5. The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.

###### Specifiers
- With delusions  
- With hallucinations  
- Severity (0-4)
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 

## DSM-IV
Listed as Psychotic Disorder Due to a General Medical Condition.  

#### Psychotic Disorder to a General Medical Condition
1. Prominent hallucinations or delusions.  
2. There is evidence from the history, physical examination, or laboratory
findings that the disturbance is the direct physiological consequence of
a general medical condition.  
3. The disturbance is not better accounted for by another mental disorder.  
4. The disturbance does not occur exclusively during the course of a delirium.  

###### Specifiers
- With Delusions: if delusions are the predominant symptom  
- With Hallucinations: if hallucinations are the predominant symptom  
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 

## DSM-III
Listed dispersed among the Organic Mental Disorders.  
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 

## DSM-II
Listed as Psychosis associated with intracranial infection,  other cerebral condition, and  other physical condition in the Organic Brain Syndromes section. 
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 

## DSM
Listed as Psychotic Reaction to other diagnoses.
</div>`,Bh=Object.freeze(Object.defineProperty({__proto__:null,attributes:O_,markdown:P_},Symbol.toStringTag,{value:"Module"})),N_={title:"Schizoaffective Disorder",description:"Psychotic symptoms that occur both with and without major mood episodes (depression or mania), in which mood episodes are present for the majority of the illness duration.",prevalence:"0.3%",acronyms:null,synonyms:null},M_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 

## DSM-5-TR
1. <i>Schizophrenia Symptoms + Major Mood Episode:</i> An uninterrupted period of illness during which there is a major mood episode (major depressive or manic) concurrent with Criterion 1 of schizophrenia.  
2. <i>Psychotic-only Period:</i> Delusions or hallucinations for 2 or more weeks in the absence of a major mood episode (depressive or manic) during the lifetime duration of the illness.  
3. <i>Mood Symptom Prominence:</i> Symptoms that meet criteria for a major mood episode are present for the majority of the total duration of the active and residual portions of the illness.  
4. The disturbance is not attributable to the effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.

###### Specifiers
- First episode, currently in acute episode  
- First episode, currently in partial remission  
- First episode, currently in full remission  
- Multiple episodes, currently in acute episode  
- Multiple episodes, currently in partial remission  
- Multiple episodes, currently in full remission  
- Continuous  
- Unspecified
- Bipolar type (manic or mixed episodes present)  
- Depressive type (only major depressive episodes present)  
- With catatonia  
- Severity of delusions, hallucinations, disorganized speech, and negative symptoms:  
    - 0 — Absent  
    - 1 — Equivocal  
    - 2 — Mild  
    - 3 — Moderate  
    - 4 — Severe
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 

## DSM-IV
Listed as Schizoaffective Disorder.  

1. An uninterrupted period of illness during which, at some time, there is
either a Major Depressive Episode, a Manic Episode, or a Mixed Episode concurrent with symptoms that meet Criterion 1 for Schizophrenia.  
2. During the same period of illness, there have been delusions or hallucinations for at least 2 weeks in the absence of prominent mood
symptoms.  
3. Symptoms that meet criteria for a mood episode are present for a
substantial portion of the total duration of the active and residual periods of the illness.  
4. The disturbance is not due to the direct physiological effects of a
substance (e.g., a drug of abuse, a medication) or a general medical
condition.  

###### Specifiers
- Bipolar Type: if the disturbance includes a Manic or a Mixed Episode (or
a Manic or a Mixed Episode and Major Depressive Episodes)  
- Depressive Type: if the disturbance only includes Major Depressive
Episodes
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 

## DSM-III
Listed as Schizoaffective Disorder but without diagnostic criteria due to inadequate research showing it as distinct from Schizophreniform Disorder, Major Depression or Bipolar Disorder with Mood-congruent or Mood-incongruent Psychotic Features, or Schizophrenia with a superimposed Atypical Affective Disorder.  
Examples of cases that may appropriately be diagnosed as Schizoaffective
Disorder include:
An episode of affective illness in which preoccupation with a moodincongruent delusion or hallucination dominates the clinical picture
when affective symptoms are no longer present.
An episode of illness in which currently there is a full affective syndrome with prominent mood-incongruent psychotic features but in which inadequate information about the presence of previous nonaffective psychotic features makes it difficult to differentiate between Schizophrenia or Schizophreniform Disorder (with a superimposed Atypical Affective Disorder) and Affective Disorder.
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 

## DSM
Does not appear.
</div>`,jh=Object.freeze(Object.defineProperty({__proto__:null,attributes:N_,markdown:M_},Symbol.toStringTag,{value:"Module"})),R_={title:"Schizophrenia",description:"Delusions, hallucinations, disorganized speech, catatonic or disorganized behavior, and/or diminished emotional expression and motivation lasting more than 6 months.",prevalence:"0.3-0.7%",acronyms:null,synonyms:null},L_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 

## DSM-5-TR
1. <i>Characteristic Symptoms: </i>  Two (or more) of the following, each present for a significant portion of time during a 1-month period (or less if successfully treated). At least one must be (a) (b) or (c):    
    1. Delusions  
    2. Hallucinations  
    3. Disorganized speech (e.g., derailment or incoherence)  
    4. Grossly disorganized or catatonic behavior  
    5. Negative symptoms (i.e., diminished emotional expression or avolution)  
2. <i>Social/Occupational Dysfunction: </i> For a significant portion of the time since the onset of the disturbance, one or more major areas of functioning such as work, interpersonal relations, or self-care are markedly below the level achieved prior to the onset (or when the onset is in childhood or adolescence, failure to achieve expected level of interpersonal, academic, or occupational achievement).  
3. <i>Duration:</i> Continuous signs of the disturbance persist for at least 6 months. This 6-month period must include at least 1 month of symptoms (or less if successfully treated) that meet Criterion A (i.e., active-phase symptoms) and may include periods of prodromal or residual symptoms. During these prodromal or residual periods, the signs of the disturbance may be manifested by only negative symptoms or two or more symptoms listed in Criterion A present in an attenuated form (e.g., odd beliefs, unusual perceptual experiences).  
4. <i>Schizoaffective and Mood Disorder Exclusion:</i>  Schizoaffective Disorder and Mood Disorder With Psychotic Features have been ruled out because either (1) no major depressive, manic, or mixed episodes have occurred concurrently with the active-phase symptoms; or (2) if mood episodes have occurred during active-phase symptoms, their total duration has been brief relative to the duration of the active and residual periods.  
5. <i> Substance/General Medical Condition Exclusion: </i> The disturbance is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.  
6. <i> Relationship to a Pervasive Developmental Disorder: </i> If there is a history of autistic disorder or another pervasive developmental disorder, the additional diagnosis of schizophrenia is made only if prominent delusions or hallucinations are also present for at least a month (or less if successfully treated).

###### Specifiers
- First episode, currently in acute episode  
- First episode, currently in partial remission  
- First episode, currently in full remission  
- Multiple episodes, currently in acute episode  
- Multiple episodes, currently in partial remission  
- Multiple episodes, currently in full remission  
- Continuous  
- Unspecified
- With catatonia  
- Severity of delusions, hallucinations, disorganized speech, and negative symptoms:  
    - 0 — Absent 
    - 1 — Equivocal (e.g., odd or unusual beliefs that are not held with full conviction, fleeting or vague hallucinatory perceptual experiences that are not fully formed or distressing, occasional difficulty staying on topic or a slight loosening of associations, occasional or subtle unusual movements or mannerisms that are not overly bizarre or disruptive)  
    - 2 — Mild (e.g., fixed, false beliefs but not highly elaborate, infrequent, non-distressing hallucinations, speech is sometimes difficult to follow due to derailment or incoherence, brief catatonic features, noticeable decrease in facial expressivity or vocal prosody, reduced motivation or social withdrawal while maintaining basic care)  
    - 3 — Moderate (clear, well-formed delusions that influence their behavior, frequent, distressing hallucinations that influence their behavior, often difficult to follow due to significant derailment, tangentiality, or incoherence, prominent catatonic features, clear and consistent decrease in emotional expression and marked social withdrawal)  
    - 4 — Severe (e.g., delusions are pervasive, highly elaborate, and significantly dictate their behavior, severe and persistent hallucinations that are highly distressing and profoundly influence their actions, speech is almost impossible to follow, characterized by word salad or mutism, prolongued and extreme catatonic features, complete absense of emotional expression, profound avolition, and severe social isolation)
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 

## DSM-IV
Listed as Schizophrenia with Subtypes defined.  

1. <i>Characteristic symptoms:</i> Two (or more) of the following, each present for a significant portion of time during a 1-month period (or less if successfully treated):  
    1. Delusions  
    2. Hallucinations  
    3. Disorganized speech (e.g., frequent derailment or incoherence)  
    4. Grossly disorganized or catatonic behavior  
    5. Negative symptoms, i.e., affective flattening, alogia, or avolition  
<i>Note: Only one Criterion A symptom is required if delusions are bizarre or hallucinations consist of a voice keeping up a running commentary on the person's behavior or thoughts, or two or more voices conversing with each other.</i>  
2. <i>Social/occupational dysfunction:</i> For a significant portion of the time since the onset of the disturbance, one or more major areas of functioning such as work, interpersonal relations, or self-care are markedly below the level achieved prior to the onset (or when the onset is in childhood or adolescence, failure to achieve expected level of interpersonal, academic, or occupational achievement).  
3. <i>Duration:</i> Continuous signs of the disturbance persist for at least 6 months. This 6-month period must include at least 1 month of symptoms (or less if successfully treated) that meet Criterion 1 (i.e.,
active-phase symptoms) and may include periods of prodromal or residual symptoms. During these prodromal or residual periods, the signs of the disturbance may be manifested by only negative symptoms or two or more symptoms listed in Criterion 1 present in an attenuated
form (e.g., odd beliefs, unusual perceptual experiences).  
4. <i>Schizoaffective and Mood Disorder Exclusion:</i> Schizoaffective Disorder and Mood Disorder With Psychotic Features have been ruled out because either (1) no Major Depressive, Manic, or Mixed Episodes have occurred concurrently with the active-phase symptoms; or (2) if mood episodes have occurred during active-phase symptoms, their total duration has been brief relative to the duration of the active and residual periods.  
5. <i>Substance/general medical condition exclusion:</i> The disturbance is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.  
6. <i>Relationship to a Pervasive Developmental Disorder:</i> If there is a history of Autistic Disorder or another Pervasive Developmental Disorder, the additional diagnosis of Schizophrenia is made only if prominent delusions or hallucinations are also present for at least a month (or less if successfully treated).

#### Specifier
Classification of longitudinal course (can be applied only after at least 1 year has elapsed since the initial onset of active-phase symptoms):  
- Episodic With Interepisode Residual Symptoms (episodes are defined by the reemergence of prominent psychotic symptoms); also specify if With Prominent Negative Symptoms  
- Episodic With No Interepisode Residual Symptoms  
- Continuous (prominent psychotic symptoms are present throughout the period of observation); also specify if With Prominent Negative Symptoms  
- Single Episode In Partial Remission; also specify if With Prominent  
- Negative Symptoms  
- Single Episode In Full Remission  
- Other or Unspecified Pattern  

#### Paranoid Type
A type of Schizophrenia in which the following criteria are met:  
1. Preoccupation with one or more delusions or frequent auditory hallucinations.  
2. None of the following is prominent: disorganized speech, disorganized or catatonic behavior, or flat or inappropriate affect.  

#### Disorganized Type
A type of Schizophrenia in which the following criteria are met:
1. All of the following are prominent:  
    1. Disorganized speech  
    2. Disorganized behavior  
    3. Flat or inappropriate affect  
2. The criteria are not met for Catatonic Type. 

#### Catatonic Type
A type of Schizophrenia in which the clinical picture is dominated by at least two of the following:    
1. Motoric immobility as evidenced by catalepsy (including waxy flexibility) or stupor  
2. Excessive motor activity (that is apparently purposeless and not influenced by external stimuli)  
3. Extreme negativism (an apparently motiveless resistance to all instructions or maintenance of a rigid posture against attempts to be moved) or mutism  
4. Peculiarities of voluntary movement as evidenced by posturing (voluntary assumption of inappropriate or bizarre postures), stereotyped movements, prominent mannerisms, or prominent grimacing
5. Echolalia or echopraxia

#### Undifferentiated Type
A type of Schizophrenia in which symptoms that meet Criterion 1 are present, but the criteria are not met for the Paranoid, Disorganized, or Catatonic Type.

#### Residual Type
A type of Schizophrenia in which the following criteria are met:  
1. Absence of prominent delusions, hallucinations, disorganized speech, and grossly disorganized or catatonic behavior.  
2. There is continuing evidence of the disturbance, as indicated by the presence of negative symptoms or two or more symptoms listed in Criterion 1 for Schizophrenia, present in an attenuated form (e.g., odd beliefs, unusual perceptual experiences).
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 

## DSM-III
Listed as Schizophrenic Disorder.

1. At least one of the following during a phase of the illness:  
    1. Bizarre delusions (content is patently absurd and has no possible basis in fact), such as delusions of being controlled, thought broadcasting, thought insertion/or thought withdrawal.  
    2. Somatic, grandiose, religious, nihilistic, or other delusions without persecutery or jealous content.  
    3. Delusions with persecutory or jealous content if accompanied by hallucinations of any type.  
    4. Auditory hallucinations in which either a voice keeps up a running commentary on the individual's behavior or thoughts, or two or more voices converse with each other.
    5. Auditory hallucinations on several occasions with content of more than one or two words, having no apparent relation to depression or elation.  
    6. Incoherence, marked loosening of associations, markedly illogical thinking, or marked poverty of content of speech if associated with at least one of the following:
        1. Blunted, flat, or inappropriate affect  
        2. Delusions or hallucinations  
        3. Catatonic or other grossly disorganized behavior  
2. Deterioration from a previous level of functioning in such areas as work, socail relations, and self-care.  
3. Duration: Continuous/signs of th& fitness for at least six months at some time during the person's life, with some signs of the illness at present. The six-month period must include an active phase during which there
were symptoms from 1, with or without a prodromal or residual phase, as defined below.  
    <i>Prodromal phase:</i> A deterioration in functioning before the active phase of the illness not due to a disturbance in mood or to a Substance Use Disorder and involving at least two of the symptoms noted below.  
    <i>Residual phase:</i> Persistence, following the active phase of the illness, of at least two of the symptoms noted below, not due to a disturbance in mood or to a Substance Use Disorder.  
    <i>Prodromal or Residual Symptoms</i>  
    1. Social isolation or withdrawal  
    2. Marked impairment in role functioning as wage-earner, student, or homemaker  
    3. Markedly peculiar behavir (e.g., collecting garbage, talking to self in public, or hoarding food)  
    4. Marked impairment in personal hygiene and grooming  
    5. Blunted, flat, or inappropriate affect  
    6. Digressive, vague, overelaborate, circumstantial, or metaphorical speech  
    7. Odd or bizarre ideation, or magical thinking, e.g., superstitiousness, clairvoyance, telepathy, "sixth sense," "others can feel my feelings", overvalued ideas, ideas of reference  
    8. Unusual perceptual experiences, e.g., recurrent illusions, sensing the presence of a force or person not actually present  
4. The full depressive or manic syndrome (criteria 1 and 2 of major depressive or manic episode), if present, developed after any psychotic symptoms, or was brief in duration relative to the duration of the psychotic symptoms in 1.  
5. Onset of prodromal or active phase of the illness before age 45.  
6. Not due to any Organic Mental Disorder or Mental Retardation.
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 

## DSM-II
Listed as Schizophrenia with Types defined.  

This large category includes a group of disorders manifested by characteristic disturbances of thinking, mood and behavior. Disturbances in thinking are marked by alterations of concept formation which may lead to misinterpretation of reality and sometimes to delusions and hallucinations, which frequently appear psychologically self-protective. Corollary mood changes include ambivalent, constricted and inappropriate emotional responsiveness and loss of empathy with others. Behavior may be withdrawn, regressive and bizarre. The schizophrenias, in which the mental status is attributable primarily to a thought disorder, are to be distinguished from the Major affective illnesses (q.v.) which are dominated by a mood disorder. The Paranoid states (q.v.) are distinguished from schizophrenia by the narrowness of their distortions of reality and by the absence of other psychotic symptoms.

#### Simple Type
This psychosis is characterized chiefly by a slow and insidious reduction of external attachments and interests and by apathy and indifference leading to impoverishment of interpersonal relations, mental deterioration, and adjustment on a lower level of functioning. In general, the condition is less dramatically psychotic than are the hebephrenic, catatonic, and paranoid types of schizophrenia. Also, it contrasts with schizoid personality, in which there is little or no progression of the disorder.

#### Hebephrenic Type
This psychosis is characterized by disorganized thinking, shallow and inappropriate affect, unpredictable giggling, silly and regressive behavior and mannerisms, and frequent hypochondriacal complaints. Delusions and hallucinations, if present, are transient and not well
organized.

#### Catatonic Type (Excited or Withdrawn)
It is frequently possible and useful to distinguish two subtypes of catatonic schizophrenia. One is marked by excessive and sometimes violent motor activity and excitement and the other by generalized inhibition manifested by stupor, mutism, negativism, or waxy flexibility. In time, some cases deteriorate to a vegetative state.

#### Paranoid Type
This type of schizophrenia is characterized primarily by the presence of persecutory or grandiose delusions, often associated with hallucinations. Excessive religiosity is sometimes seen. The patient's attitude is frequently hostile and aggressive, and his behavior tends to be consistent with his delusions. In general the disorder does not manifest the gross personality disorganization of the hebephrenic and catatonic types, perhaps because the patient uses the mechanism of projection, which ascribes to others characteristics he cannot accept in himself. Three subtypes of the disorder may sometimes be differentiated, depending on the predominant symptoms: hostile, grandiose, and hallucinatory.

#### Acute Schizophrenic Episode
This diagnosis does not apply to acute episodes of schizophrenic disorders described elsewhere. This condition is distinguished by the acute onset of schizophrenic symptoms, often associated with confusion, perplexity, ideas of reference, emotional turmoil, dreamlike dissociation, and excitement, depression, or fear. The acute onset distinguishes this condition from simple schizophrenia. In time these patients may take on the characteristics of catatonic, hebephrenic or paranoid schizophrenia, in which case their diagnosis should be changed accordingly. In many cases the patient recovers
within weeks, but sometimes his disorganization becomes progressive. More frequently remission is followed by recurrence. (In DSM-I this condition was listed as "Schizophrenia, acute undifferentiated type.")

#### Latent Type
This category is for patients having clear symptoms of schizophrenia but no history of a psychotic schizophrenic episode. Disorders sometimes designated as incipient, pre-psychotic, pseudoneurotic, pseudopsychopathic, or borderline schizophrenia are categorized here. (This
category includes some patients who were diagnosed in DSM-I under "Schizophrenic reaction, chronic undifferentiated type." Others formerly included in that DSM-I category are now classified under Schizophrenia, other [and unspecified] types (q.v.).)

#### Schizo-affective Type (Excited or Depressed)
This category is for patients showing a mixture of schizophrenic symptoms and pronounced elation or depression. 

#### Childhood Type
This category is for cases in which schizophrenic symptoms appear before puberty. The condition may be manifested by autistic, atypical, and withdrawn behavior; failure to develop identity separate from the mother's; and general unevenness, gross immaturity and inadequacy in development. These developmental defects may result in
mental retardation, which should also be diagnosed. (This category is for use in the United States and does not appear in ICD-8. It is equivalent to "Schizophrenic reaction, childhood type" in DSM-I.)

#### Chronic Undifferentiated Type
This category is for patients who show mixed schizophrenic symptoms and who present definite schizophrenic thought, affect and behavior not classifiable under the other types of schizophrenia. It is
distinguished from Schizoid personality (q.v.). (This category is equivalent to "Schizophrenic reaction, chronic undifferentiated type" in DSM-I except that it does not include cases now diagnosed as Schizophrenia, latent type and Schizophrenia, other [and unspecified]
types.)

#### Other and Unspecified Types
This category is for any type of schizophrenia not previously described. (In DSM-I "Schizophrenic reaction, chronic undifferentiated type" included this category and also what is now called Schizophrenia, latent type and Schizophrenia, chronic undifferentiated type.)
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 

## DSM
Listed as Schizophrenic Reactions with Types defined.  

This term is synonymous with the formerly used term dementia praecox. It represents a group of psychotic reactions characterized by fundamental disturbances in reality relationships and concept formations, with affective, behavioral, and intellectual disturbances in varying degrees and mixtures. The disorders are marked by strong tendency to retreat from reality, by emotional disharmony, unpredictable disturbances in stream of thought, regressive behavior, and in some, by a tendency to "deterioration." The predominant symptomatology will be the determining factor in classifying such patients into types.

#### Schizophrenic Reaction, Simple Type
This type of reaction is characterized chiefly by reduction in external attachments and interests and by impoverishment of human relationships. It often involves adjustment on a lower psychobiological level of functioning, usually accompanied by apathy and indifference but rarely by conspicuous delusions or hallucinations. The simple type of schizophrenic reaction characteristically manifests an increase in the severity of symptoms over long periods, usually with apparent mental deterioration, in contrast to the schizoid personality, in which there is little if any change.

#### Schizophrenic Reaction, Hebephrenic Type
These reactions are characterized by shallow, inappropriate affect, unpredictable giggling, silly behavior and mannerisms, delusions, often of a somatic nature, hallucinations, and regressive behavior.

#### Schizophrenic Reaction, Catatonic Type
These reactions are characterized by conspicuous motor behavior, exhibiting either marked generalized inhibition (stupor, mutism, negativism and waxy flexibility) or excessive motor activity and excitement. The individual
may regress to a state of vegetation.

#### Schizophrenic Reaction, Paranoid Type
This type of reaction is characterized by autistic, unrealistic thinking, with mental content composed chiefly of delusions of persecution, and/or of grandeur, ideas of reference, and often hallucinations. It is often characterized by unpredictable'behavior, with a fairly constant attitude of hostility and aggression. Excessive religiosity may be present with or without delusions of persecution. There may be an expansive delusional system of omnipotence, genius, or special ability. The systematized paranoid hypochondriacal states are included in this group.

#### Schizophrenic Reaction, Acute Undifferentiated Type
This reaction includes cases exhibiting a wide variety of schizophrenic symptomatology, such as confusion of thinking and turmoil of emotion, manifested by perplexity, ideas of reference, fear and dream states, and
dissociative phenomena. These symptoms appear acutely, often without apparent precipitating stress, but exhibiting historical evidence of prodromal symptoms. Very often the reaction is accompanied by a pronounced affective coloring of either excitement or depression. The symptoms often clear in a matter of weeks, although there is a tendency for them to recur. Cases usually are grouped here in the first, or an early, attack. If the reaction subsequently progresses, it ordinarily crystallizes into one of the other definable reaction types.

#### Schizophrenic Reaction, Chronic Undifferentiated Type
The chronic schizophrenic reactions exhibit a mixed symptomatology, and when the reaction cannot be classified in any of the more clearly defined types, it will be placed in this group. Patients presenting  definite schizophrenic thought, affect and behavior beyond that of the schizoid personality, but not classifiable as any other type of schizophrenic reaction, will also be placed in this group. This includes the so-called "latent," "incipient," and "pre-psychotic" schizophrenic reactions.

#### Schizophrenic Reaction, Schizo-affective Type
This category is intended for those cases showing significant admixtures of schizophrenic and affective reactions. The mental content may be predominantly schizophrenic, with pronounced elation or depression. Cases may show predominantly affective changes with schizophrenic-like thinking or bizarre behavior. The prepsychotic personality may be at variance, or inconsistent, with expectations based on the presenting psychotic symptomatology. On prolonged observation, such cases usually prove to be basically schizophrenic in nature.

#### Schizophrenic Reaction, Childhood Type
Here will be classified those schizophrenic reactions occurring before puberty. The clinical picture may differ from schizophrenic reactions occurring in other age periods because of the immaturity and plasticity of the
patient at the time of onset of the reaction. Psychotic reactions in children, manifesting primarily autism, will be classified here. Special symptomatology may be added to the diagnosis as manifestations.

#### Schizophrenic Reaction, Residual Type
This term is to be applied to those patients who, after a definite psychotic, schizophrenic reaction, have improved sufficiently to be able to get along in the community, but who continue to show recognizable residual disturbance
of thinking, affectivity, and/or behavior.`,Uh=Object.freeze(Object.defineProperty({__proto__:null,attributes:R_,markdown:L_},Symbol.toStringTag,{value:"Module"})),F_={title:"Schizophreniform Disorder",description:"Delusions, hallucinations, disorganized speech, catatonic or disorganized behavior, and/or diminished emotional expression and motivation lasting 1-6 months.",prevalence:"0.4-1%",synonyms:null,acronyms:null},z_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Two (or more) of the following, each present for a significant portion of time during a 1-month period (or less if successfully treated). At least one of these must be (a), (b), or (c):  
    1. Delusions  
    2. Hallucinations  
    3. Disorganized speech (e.g., frequent derailment or
incoherence)  
    4. Grossly disorganized or catatonic behavior  
    5. Negative symptoms (i.e., diminished emotional expression or avolition)  
2. An episode of the disorder lasts at least 1 month but less than 6 months. When the diagnosis must be made without waiting for recovery, it should be qualified as “provisional.”  
3. Schizoaffective disorder and depressive or bipolar disorder with psychotic features have been ruled out because either 1) no major depressive or manic episodes have occurred concurrently with the active-phase symptoms, or 2) if mood episodes have occurred during active-phase symptoms, they have been present for a minority of the total duration of the active and residual periods of the illness.  
4. The disturbance is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.

###### Specifiers
- With good prognostic features: This specifier requires the presence of at least two of the following features: onset of prominent psychotic symptoms within 4 weeks of the first noticeable change in usual behavior or functioning; confusion or perplexity; good premorbid social and occupational functioning; and absence of blunted or flat affect.  
- Without good prognostic features: This specifier is applied if two or more of the above features have not been present.  
- With catatonia  
- Severity of delusions, hallucinations, disorganized speech, and negative symptoms:  
    - 0 — Absent  
    - 1 — Equivocal  
    - 2 — Mild  
    - 3 — Moderate  
    - 4 — Severe
</div>  
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
1. Criteria 1, 4, and 5 of Schizophrenia are met.  
2. An episode of the disorder (including prodromal, active, and residual phases) lasts at least 1 month but less than 6 months. (When the diagnosis must be made without waiting for recovery, it should be qualified as "Provisional.")  

###### Specifiers
- Without Good Prognostic Features  
- With Good Prognostic Features: as evidenced by two (or more) of the following:  
    1. onset of prominent psychotic symptoms within 4 weeks of the first noticeable change in usual behavior or functioning  
    2. confusion or perplexity at the height of the psychotic episode  
    3. good premorbid social and occupational functioning  
    4. absence of blunted or flat affect
</div>  
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Schizophreniform Disorder.  

1. Meets all of the criteria for Schizophrenia except for duration.  
2. The illness (including prodromal, active, and residual phases) lasts more than two weeks but less than six months.
</div>  
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.
</div>`,Hh=Object.freeze(Object.defineProperty({__proto__:null,attributes:F_,markdown:z_},Symbol.toStringTag,{value:"Module"})),B_={title:"Substance/Medication-Induced Psychotic Disorder",description:"Psychotic symptoms caused by the use of or withdrawal from substances or medications."},j_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 

## DSM-5-TR
1. Presence of one or both of the following symptoms:  
    1. Delusions  
    2. Hallucinations  
2. There is evidence from the history, physical examination, or laboratory findings of booth (a) and (b):  
    1. The symptoms in Criterion 1 developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.  
    2. The involved substance/medication is capable of producing the symptoms in Criterion 1.  
3. The disturbance is not better explained by a psychotic disorder that is not substance/medication-induced. Such evidence of an independent psychotic disorder could include the following:
The symptoms preceded the onset of the substance/medication use; the symptoms persist for a substantial period of time (e.g., about 1 month) after the cessation of acute withdrawal or severe intoxication; or there is other evidence of an independent nonsubstance/medication-induced psychotic disorder (e.g., a history of recurrent non-substance/medication-related episodes).  
4. The disturbance does not occur exclusively during the course of a delirium.  
5. The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning. 

###### Specifiers
- With onset during intoxication  
- With onset during withdrawal  
- With onset after medication use  
- Severity (0-4)  

The ICD-10 includes specifiers for various substances (e.g., alcohol, cannabis, phencyclidine, cocaine, and several others) along with mild, moderate or severe, and without use indicators.
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 

## DSM-IV
Listed as Substance-Induced Psychotic Disorder.  

#### Substance-Induced Psychotic Disorder
1. Prominent hallucinations or delusions.  
<i>Note: Do not include hallucinations if the person has insight that they are substance induced.</i>  
2. There is evidence from the history, physical examination, or laboratory
findings of either (a) or (b):  
    1. the symptoms in Criterion 1 developed during, or within a month of, Substance Intoxication or Withdrawal  
    2. medication use is etiologically related to the disturbance  
3. The disturbance is not better accounted for by a Psychotic Disorder that is not substance induced. Evidence that the symptoms are better accounted for by a Psychotic Disorder that is not substance induced might include the following: the symptoms precede the onset of the substance use (or medication use); the symptoms persist for a substantial period of time (e.g., about a month) after the cessation of acute withdrawal or severe intoxication, or are substantially in excess of what would be expected given the type or amount of the substance used or the duration of use; or there is other evidence that suggests the existence of an independent non-substance-induced Psychotic Disorder (e.g., a history of recurrent non-substance-related episodes).  
4. The disturbance does not occur exclusively during the course of a delirium.

###### Specifiers
- With Onset During Intoxication: if criteria are met for Intoxication with the substance and the symptoms develop during the intoxication
syndrome  
- With Onset During Withdrawal: if criteria are met for Withdrawal from
the substance and the symptoms develop during, or shortly after, a
withdrawal syndrome
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 

## DSM-III
Listed as Substance-induced... hallucinosis, delirium, delusional disorder, withdrawal, affective disorder, etc.
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 

## DSM-II
Listed as "toxic effect of substances chiefly nonmedicinal as to source" and "accidental poisoning by other solid and liquid substances".  
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 

## DSM
Listed as "Acute Brain Syndrome, drug or poison intoxication" and "Acute Brain Syndrome, alcohol intoxication".
</div>`,$h=Object.freeze(Object.defineProperty({__proto__:null,attributes:B_,markdown:j_},Symbol.toStringTag,{value:"Module"})),U_={title:"Unspecified Schizophrenia Spectrum and Other Psychotic Disorder",description:"Psychotic symptoms unable to be classified as a more specific disorder with the reason unspecified."},H_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 

## DSM-5-TR
This diagnosis is given when there are characteristic symptoms of schizophrenia spectrum and other psychotic disorer that cause significant distress or impairment in social or occupational functioning, but the person does not fit the full criteria for any of the disorders in the class or there is insufficient information to make a more specific diagnosis (e.g., emergency rooms). The "unspecified" diagnosis is used when clinicians choose not to communicate the specific reason that the presentation does not meet other diagnosis criteria.
</div>`,Wh=Object.freeze(Object.defineProperty({__proto__:null,attributes:U_,markdown:H_},Symbol.toStringTag,{value:"Module"})),$_={title:"Acute Stress Disorder",description:"Intrusions, negative mood, dissociation, avoidance, and arousal symptoms lasting 3 days to 1 month after a traumatic event."},W_=`<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. Exposure to actual or threatened death, serious injury, or sexual violence in one (or more) of the following ways:  
    1. Directly experiencing the traumatic event(s).  
    2. Witnessing, in person, the event(s) as it occurred to others.  
    3. Learning that the event(s) occurred to a close family member or close friend. <i>Note, in cases of actual or threatened death of a family member or friend, the event(s) must have been violent or accidental.</i>  
    4. Experiencing repeated or extreme exposure to aversive details of the traumatic event(s) (e.g., first responders collecting human remains, police officers repeatedly exposed to details of child abuse).  
2. Presence of nine (or more) of the following symptoms from any of the five categories of intrusion, negative mood, dissociation, avoidance, and arousal, beginning or worsening after the traumatic event(s) occurred:  
    <b>Intrusion Symptoms</b>  
    1. Recurrent, involuntary, and intrusive distressing memories of the traumatic event(s). <i>Note, in children, repetitive play may occur in which themes or aspects of the traumatic event(s) are expressed.</i>  
    2. Recurrent distressing dreams in which the content and/or affect of the dream are related to the event(s). <i> Note, in children, there may be frightening dreams without recognizable content.</i>  
    3. Dissociative reactions (e.g., flashbacks) in which the individual feels or acts as if the traumatic event(s) were recurring. (Such reactions may occur on a continuum, with the most extreme expression being a complete loss of awareness of present surroundings.) <i>Note, in children, trauma-specific reenactment may occur in play.</i>  
    4. Intense or prolonged psychological distress or marked physiological reactions in response to internal or external cues that symbolize or resemble an aspect of the traumatic event(s).  
    <b>Negative Mood</b>  
    5. Persistent inability to experience positive emotions (e.g., inability to experience happiness, satisfaction, or loving feelings).  
    <b>Dissociative Symptoms</b>  
    6. An altered sense of the reality of one's surroundings or onself (e.g., seeing onself from another's perspective, being in a daze, time slowing).  
    7. Inability to remember an important aspect of the traumatic event(s) (typically due to dissociative amnesia and not to other factors such as head injury, alcohol, or drugs).  
    <b>Avoidance Symptoms</b>  
    8. Efforts to avoid distressing memories, thoughts, or feelings about or closely associated with the traumatic event(s).  
    9. Efforts to avoid external reminders (people, places, conversations, activities, objects, situations) that arouse distressing memories, thoughts, or feelings about or closely associated with the traumatic event(s).  
    <b>Arousal Symptoms</b>  
    10. Sleep disturbance (e.g., difficulty falling or staying asleep, restless sleep).  
    11. Irritable behavior and angry outbursts (with little or no provocation), typically expressed as verbal or physical aggression toward people or objects.  
    12. Hypervigilence.  
    13. Problems with concentration.  
    14. Exaggerated startle response.  
3. Duration of the disturbance (symptoms in Criterion 2) is 3 days to 1 months after trauma exposure.  
<i>Note, symptoms typically begin immediately after the trauma, but persistence for at least 3 days and up to a month is needed to meet disorder criteria.</i>  
4. The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.  
5. The disturbance is not attributable to the physiological effects of a substance (e.g., medication or alcohol) or another medical condition (e.g., mild traumatic brain injury) and is not better explained by brief psychotic disorder.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Acute Stress Disorder in the Anxiety Disorders section.  

1. The person has been exposed to a traumatic event in which both of the following were present:  
    1. The person experienced, witnessed, or was confronted with an event or events that involve actual or threatened death or serious injury, or a threat to the physical integrity of self or others.  
    2. The person's response involved intense fear, helplessness, or horror.  
2. Either while experiencing or after experiencing the distressing event, the individual has three (or more) of the following dissociative symptoms:  
    1. A subjective sense of numbing, detachment, or absense of emotional responsiveness.  
    2. A reduction in awareness of his or her surroundings (e.g., "being in a daze").  
    3. Derealization.  
    4. Depersonalization.  
    5. Dissociative amnesia (i.e., inability to recall an important aspect of the trauma).  
3. The traumatic event is persistently reexperienced in at least one fo the following ways: recurrent images, thoughts, dreams, illusions, flashback episodes, or a sense of reliving the experience; or distress on exposure to reminders of the traumatic event.  
4. Marked avoidance of stimuli that arouse recollections of the trauma (e.g., thoughts, feelings, conversations, activities, places, people).  
5. Marked symptoms of anxiety or increased arousal (e.g., dificulty sleeping, irritability, poor concentration, hypervigilence, exaggerated startle response, motor restlessness).  
6. The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning or imapirs the individual's ability to pursue some necessary task, such as obtaining necessary assistance  or mobilizing personal resources by telling family members about the traumatic experience.  
7. The disturbance lasts for a minimum of 2 days and a maximum of 4 weeks and occurs within 4 weeks of the traumatic event.  
8. The disturbance is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition, is not better accounted for by Brief Psychotic Disorder, and is not merely an exacerbation of a preexisting Axis I or Axis II disorder.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Does not appear.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.
</div>`,Vh=Object.freeze(Object.defineProperty({__proto__:null,attributes:$_,markdown:W_},Symbol.toStringTag,{value:"Module"})),V_={title:"Disinhibited Social Engagement Disorder",description:"A pattern of behavior in which a child actively approaches and interacts with unfamiliar adults due to severe neglect."},Y_=`<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. A pattern of behavior in which a child actively approaches and interacts with unfamiliar adults and exhibits at least two of the following:  
    1. Reduced or absent reticence in approaching and interacting with unfamiliar adults.  
    2. Overly familiar verbal or physical behavior (that is not consistent with culturally sanctioned and with age-appropriate social boundaries).  
    3. Diminished or absent checking back with adult caregiver after venturing away, even in unfamiliar settings.  
    4. Willingness to go off with an unfamiliar adult with minimal or no hesitation.  
2. The behaviors in Criterion 1 are not limited to impulsivity (as in ADHD) but include socially disinhibited behavior.  
3. The child has experienced a pattern of extremes of insufficient care as evidenced by at least one of the following:  
    1. Social neglect or deprivation in the form of persistent lack of having basic emotional needs for comfort, stimulation, and affect met by caregiving adults.  
    2. Repeated changes of primary caregivers that limit opportunities to form stable attachments (e.g., frequent changes in foster care).  
    3. Rearing in unusual settings that severely limit opportunities to form selective attachments (e.g., insitutions with high child-to-caregiver ratios).  
4. The care in Criterion 3 is presumed to be responsible for the disturbed behavior in Criterion 1 (e.g., the disturbances in Criterion 1 began following the pathogenic care in Criterion 3).  
5. The child has a developmental age of at least 9 months.  

###### Specifiers
- Persistent: The disorder has been present for more than 12 months.  
- Severity 
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as a subtype of Reactive Attachment Disorder of Infancy of Early Childhood, Disinhibited Type.
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Does not appear.
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.
</div>`,Yh=Object.freeze(Object.defineProperty({__proto__:null,attributes:V_,markdown:Y_},Symbol.toStringTag,{value:"Module"})),q_={title:"Posttraumatic Stress Disorder",description:"Persistent (over 1 month) intrusions, negative mood, dissociation, avoidance, and arousal symptoms after a traumatic event."},Q_=`<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
#### In Individuals Older Than 6 Years
1. Exposure to actual or threatened death, serious injury, or sexual violence in one (or more) of the following ways:  
    1. Directly experiencing the traumatic event(s)  
    2. Witnessing, in person, the event(s) as it occurred to others  
    3. Learning that the traumatic event(s) occurred to a close family member or close friend. In cases of actual or threatened death of a family member or friend, the event(s) must have been violent or accidental.  
    4. Experiencing repeated or extreme exposure to aversive details of the traumatic event(s) (e.g., first responders collecting human remains; police officers repeatedly exposed to details of child abuse).  
    <i>Note, Criterion 1.d does not apply to exposure through electronic media, television, movies, or pictures, unless this exposure is work related.</i>  
2. Presence of one (or more) of the following intrusion symptoms associated with the traumatic event(s), beginning after the traumatic event(s) occurred:  
    1. Recurrent, involuntary, and intrusive distressing memories of the traumatic event(s).  
    <i>Note, in children older than 6 years, repetitive play may occur in which themes or aspects of the traumatic event(s) are expressed.</i>  
    2. Recurrent distressing dreams in which the content and/or affect of the dream are related to the traumatic event(s).  
    <i>Note, in children, there may be frightening dreams without recognizable content.</i>  
    3. Dissociative reactions (e.g., flashbacks) in which the individual feels or acts as if the traumatic event(s) were recurring. (Such reactions may occur on a continuum, with the most extreme expression being a complete loss of the awareness of present surroundings.)  
    4. Intense or prolonged psychological distress at exposure to internal or external cues that symbolize or resemble an aspect of the traumatic event(s).  
    5. Marked physiological reactions to internal or external cues that symbolize or resemble an aspect of the traumatic event(s).  
3. Persistent avoidance of stimuli associated with the traumatic event(s), beginning after the traumatic event(s) occurred, as evidenced by one or both of the following:  
    1. Avoidance of or efforts to avoid distressing memories, thoughts, or feelings about closely associated with the traumatic event(s).  
    2. Avoidance of or efforts to avoid external reminders (people, places, conversations, activities, objects, situations) that arouse distressing memories, thoughts, or feelings about or closely associated with the traumatic event(s).  
4. Negative alterations in cognitions and mood associated with the traumatic event(s), beginning or worsening after the traumatic event(s) occurred, as evidenced by two (or more) of the following:  
    1. Inability to remember an important aspect of the traumatic event(s) (typically due to dissociate amnesia and not to other factors such as head injury, alcohol, or drugs).  
    2. Persistent and exaggerated negative beliefs or expectations about oneself, others, or the world (e.g., "I am bad", "No one can be trusted", "The world is completely dangerous", "My whole nervous system is permanently ruined").  
    3. Persistent, distorted cognitions about the cause or consequences of the traumatic event(s) that lead the individual to blame himself/herself or others.  
    4. Persistent negative emotional state (e.g., fear, horror, anger, guilt, or shame).  
    5. Markedly diminished interested or participation in significant activities.  
    6. Feelings of detachment or estrangement from others.  
    7. Persistent inability to experience positive emotions (e.g., inability to experience happiness, satisfaction, or loving feelings).  
5. Marked alterations in arousal and reactivity associated with the traumatic event(s), beginning or worsening after the traumatic event(s) occurred, as evidenced by two (or more) of the following:  
    1. Irritable behavior and angry outbursts (with little or no provocation) typically expressed as verbal or physical aggression toward people or objects.  
    2. Reckless or self-destructive behavior.  
    3. Hypervigilence.  
    4. Exaggerated startle response.  
    5. Problems with concentration.  
    6. Sleep disturbance (e.g., difficulty falling or staying asleep or restless sleep).  
6. Duration of the disturbance (Criteria 2, 3, 4, and 5) is more than 1 month.  
7. The disturbance causes clinically significant distress or impairment in social, occupation, or other important areas of functioning.  
8. The disturbance is not attributable to the physiological effects of a substance (e.g., medication, alcohol) or another medical condition.  

###### Specifiers
- With dissociative symptoms: The individual’s symptoms meet the criteria for posttraumatic stress disorder, and in addition, in response to the stressor, the individual experiences persistent or recurrent symptoms of either of the
following:  
    - Depersonalization: Persistent or recurrent experiences of feeling detached from, and as if one were an outside observer of, one’s mental processes or body (e.g., feeling as though one were in a dream; feeling a sense of unreality of self or body or of time moving slowly).  
    - Derealization: Persistent or recurrent experiences of unreality of surroundings (e.g., the world around the individual is experienced as unreal, dreamlike, distant, or distorted).  
- With delayed expression: If the full diagnostic criteria are not met until at least 6 months after the event (although the onset and expression of some symptoms may be immediate).

#### In Children 6 Years and Younger
1. In children 6 years and younger, exposure to actual or threatened death, serious injury, or sexual violence in one (or more) of the following ways:  
    1. Directly experiencing the traumatic event(s).  
    2. Witnessing, in person, the event(s) as it occurred to others, especially primary caregivers.  
    3. Learning that the traumatic event(s) occurred to a parent or caregiving figure.  
2. Presence of one (or more) of the following intrusion symptoms associated with the traumatic event(s), beginning after the traumatic event(s) occurred:  
    1. Recurrent, involuntary, and intrusive distressing memories of the traumatic event(s).  
    <i>Note. spontaneous and intrusive memories may not necessarily appear distressing and may be expressed as play reenactment.</i>  
    2. Recurrent distressing dreams in which the content and/or affect of the dream are related to the traumatic event(s).  
    <i>Note, it may not be possible to ascertain that the frightening content is related to the traumatic event.</i>  
    3. Dissociative reactions (e.g., flashbacks) in which the child feels or acts as if the traumatic event(s) were recurring. (Such reactions may occur on a continuum, with the most extreme expression being a complete loss of awareness of present surroundings.) Such trauma-specific reenactment may occur in play.  
    4. Intense or prolonged psychological distress at exposure to internal or external cues that symbolize or resemble an aspect of the traumatic event(s).  
    5. Marked physiological reactions to reminders of the traumatic event(s).  
3. One (or more) of the following symptoms, representing either persistent avoidance of stimuli associated with the traumatic event(s) or negative alterations in cognitions and mood associated with the traumatic event(s), must be present, beginning after the event(s) or worsening after the event(s):  
    <b>Persistent Avoidance of Stimuli</b>
    1. Avoidance of or efforts to avoid activities, places, or physical reminders that arouse recollections of the traumatic event(s).  
    2. Avoidance of or efforts to avoid people, conversations, or interpersonal situations that arouse recollections of the traumatic event(s).  
    <b>Negative Alterations in Cognitions</b>  
    3. Substantially increased frequency of negative emotional states (e.g., fear, guilt, sadness, shame, confusion).  
    4. Markedly diminished interest or participation in significant activities, including constriction of play.  
    5. Socially withdrawn behavior.  
    6. Persistent reduction in expression of positive emotions.  
4. Alterations in arousal and reactivity associated with the traumatic event(s), beginning or worsening after the traumatic event(s) occurred, as evidenced by two (or more) of the following:  
    1. Irritable behavior and angry outbursts (with little or no provocation) typically expressed as verbal or physical aggression toward people or objects (including extreme temper tantrums).  
    2. Hypervigilance.  
    3. Exaggerated startle response.  
    4. Problems with concentration.  
    5. Sleep disturbance (e.g., difficulty falling or staying asleep or restless sleep).  
5. The duration of the disturbance is more than 1 month.  
6. The disturbance causes clinically significant distress or impairment in relationships with parents, siblings, peers, or other caregivers or with school behavior.  
7. The disturbance is not attributable to the physiological effects of a substance (e.g., medication or alcohol) or another medical condition.  

###### Specifiers
- With dissociative symptoms:  
    - Depersonalization: Persistent or recurrent experiences of feeling detached from, and as if one were an outside observer of, one’s mental processes or body (e.g., feeling as though one were in a dream; feeling a sense of unreality of self or body or of time moving slowly).  
    - Derealization: Persistent or recurrent experiences of unreality of surroundings (e.g., the world around the individual is experienced as unreal, dreamlike, distant, or distorted).  
- With delayed expression  
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Posttraumatic Stress Disorder in the Anxiety Disorders section.  

1. The person has been exposed to a traumatic event in which both of the following were present:  
    1. The person experienced, witnessed, or was confronted with an event or events that involved actual or threatened death or serious injury, or a threat to the physical integrity of self or others  
    2. The person's response involved intense fear, helplessness, or horror.   
    <i>Note, in children, this may be expressed instead by disorganized or agitated behavior.</i>  
2. The traumatic event is persistently reexperienced in one (or more) of the following ways:  
    1. Recurrent and intrusive distressing recollections of the event, including images, thoughts, or perceptions.  
    <i>Note, in young children, repetitive play may occur in which themes or aspects of the trauma are expressed.</i>  
    2. Recurrent distressing dreams of the event.  
    <i>Note, in children, there may be frightening dreams without recognizable content.</i>  
    3. Acting or feeling as if the traumatic event were recurring (includes a sense of reliving the experience, illusions, hallucinations, and dissociative flashback episodes, including those that occur on awakening or when intoxicated).  
    <i>Note, in young children, trauma-specific reenactment may occur.</i>  
    4. Intense psychological distress at exposure to internal or external cues that symbolize or resemble an aspect of the traumatic event  
    5. Physiological reactivity on exposure to internal or external cues that symbolize or resemble an aspect of the traumatic event.  
3. Persistent avoidance of stimuli associated with the trauma and numbing of general responsiveness (not present before the trauma), as indicated by three (or more) of the following:  
    1. Efforts to avoid thoughts, feelings, or conversations associated with the trauma  
    2. Efforts to avoid activities, places, or people that arouse recollections of the trauma  
    3. Inability to recall an important aspect of the trauma  
    4. Markedly diminished interest or participation in significant activities  
    5. eeling of detachment or estrangement from others  
    6. Restricted range of affect (e.g., unable to have loving feelings)  
    7. Sense of a foreshortened future (e.g., does not expect to have a career, marriage, children, or a normal life span)  
4. Persistent symptoms of increased arousal (not present before the trauma), as indicated by two (or more) of the following:  
    1. Difficulty falling or staying asleep  
    2. Irritability or outbursts of anger  
    3. Difficulty concentrating  
    4. Hypervigilance  
    5. Exaggerated startle response  
5. Duration of the disturbance (symptoms in Criteria B, C, and D) is more than 1 month.  
6. The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.  

###### Specifiers
- Acute: if duraction of symptoms is less than 3 months  
- Chronic: if duraction of symptoms is 3 months or more  
- With Delayed Onset: if onset of symptoms is at least 6 months after the stressor
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed under Other specified adjustment reactions as Prolonged posttraumatic stress disorder. Also references "concentration camp syndrome" as a synonym.  
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.  
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.  
</div>`,qh=Object.freeze(Object.defineProperty({__proto__:null,attributes:q_,markdown:Q_},Symbol.toStringTag,{value:"Module"})),G_={title:"Reactive Attachment Disorder",description:"A consistent pattern of inhibited, emotionally withdrawn behavior toward adult caregivers due to severe neglect."},K_=`<div class = "dsm-timeline">

<div class="dsm-date">
2022
</div>

<div class="dsm-box"> 

## DSM-5-TR
1. A consistent pattern of inhibited, emotionally withdrawn behavior toward adult caregivers, manifested by both of the following:  
    1. The child rarely or minimally seeks comfort when distressed.  
    2. The child rarely or minimally responds to comfort when distressed.  
2. A persistent social and emotional disturbance characterized by at least two of the following:  
    1. Minimal social and emotional responsiveness to others.  
    2. Limited positive affect.  
    3. Episodes of unexplained irritability, sadness, or fearfulness that are evident even during nonthreatening interactions with adult caregivers.  
3. The child has experienced a pattern of extremes of insufficient care as evidenced by at least one of the following:  
    1. Social neglect or deprivation in the form of persistent lack of having basic emotional needs for comfort, stimulation, and affection met by caregiving adults.  
    2. Repeated changes of primary caregivers that limit opportunities to form stable attachments (e.g., frequent changes in foster care).  
    3. Rearing in unusual settings that severely limit opportunities to form selective attachments (e.g., institutions with high child-to-carefiver ratios).  
4. The care in Criterion 3 is presumed to be responsible for the disturbed behavior in Criterion 1 (e.g., the disturbance in Criterion 1 began following the lack of adequate care in Criterion 3).  
5. The criteria are not met for autism spectrum disorder.  
6. The disturbance is evident before age 5 years.  
7. The child has developmental age of at least 9 months.  

###### Specifiers
- Persistent: The disorder has been present for more than 12
months.  
- Severity: Reactive attachment disorder is specified as severe when a child exhibits all symptoms of the disorder, with each symptom manifesting at relatively high levels.
</div>
<div class="dsm-date">
1994
</div>

<div class="dsm-box"> 

## DSM-IV
Listed as Reactive Attachment Disorder of Infancy or Early Childhood with subtypes Inhibited or Disinhibited.  

1. Markedly disturbed and developmentally inappropriate social relatedness in most contexts, beginning before age 5 years, as evidenced by either (a) or (b):  
    1. Persistent failure to initiate or respond in a developmentally appropriate fashion to most social interactions, as manifest by excessively inhibited, hypervigilant, or highly ambivalent and contradictory responses (e.g., the child may respond to caregivers with a mixture of approach, avoidance, and resistance to comforting, or may exhibit frozen watchfulness)  
    2. Diffuse attachments as manifest by indiscriminate sociability with marked inability to exhibit appropriate selective attachments (e.g., excessive familiarity with relative strangers or lack of selectivity in choise of attachment figures)  
2. The disturbance in Criterion 1 is not accounted for solely by developmental delay (as in Mental Retardation) and does not meet criteria for a Pervasive Developmental Disorder.  
3. Pathogenic care as evidenced by at least one of the following:  
    1. Persistent disregard of the child's basic emotional needs for comfort, stimulation, and affection  
    2. Persistent disregard of the child's basic physical needs  
    3. Repeated changes of primary caregiver that prevent formation of stable attachments (e.g., frequent changes in foster care)  
4. There is a presumption that the care in Criterion 3 is responsible for the disturbed behavior in Criterion 1 (e.g., the disturbances in Criterion 1 began following the pathogenic care in Criterion 3).  

###### Specifiers
- Inhibited Type: if Criterion 1.1 predominates in the clinical presentation  
- Disinhibited Type: if Criterion 1.2 predominates in the clinical presentation
</div>
<div class="dsm-date">
1980
</div>

<div class="dsm-box"> 

## DSM-III
Listed as Reactive Attachment Disorder of Infancy.  

1. Age at onset before eight months.  
2. Lack of the type of care that ordinarily leads to the development of affectional bonds to others, e.g., gross emotional neglect, imposed social isolation in an institution.  
3. Lack of developmentally appropriate signs of social responsivity, as indicated by at least several of the following (the total number of behaviors looked for will depend on the chronological age of the child, corrected for prematurity):  
    1. Lack of visual tracking of eyes and faces by an infant more than two months of age.  
    2. Lack of smiling in response to faces by an infant more than two months of age.  
    3. Lack of visual reciprocity in an infant of more than two months; lack of vocal reciprocity with caretaker in an infant of more than five months.  
    4. Lack of alerting and turning toward caretaker's voice by an infant of more than four months.  
    5. Lack of spontaneous reaching for the mother by an infant of more than four months.  
    6. Lack of anticipatory reaching when approached to be picked up by an infant more than five months of age.  
    7. Lack of participation in playful games with caretaker by an infant of more than five months.  
4. At least three of the following:  
    1. Weak cry  
    2. Excessive sleep  
    3. Lack of interest in the environment  
    4. Hypomotility  
    5. Poor muscle tone  
    6. Weak rooting and grasping in response to feeding attempts  
5. Weight loss or failure to gain appropriate amount of weight for age unexplainable by an physical disorder. In these cases, usually the failure to gain weight (falling weight percentile) is disproportionately greater than failure to gain length; head circumference is normal.  
6. Not due to a physical disorder, Mental Retardation, or Infantile Autism.  
7. The diagnosis is confirmed if the clinical picture is reversed shortly after institution of adequate caretaking, which frequently includes short-term hospitalization.  
</div>
<div class="dsm-date">
1968
</div>

<div class="dsm-box"> 

## DSM-II
Does not appear.
</div>
<div class="dsm-date">
1952
</div>

<div class="dsm-box"> 

## DSM
Does not appear.
</div>`,Qh=Object.freeze(Object.defineProperty({__proto__:null,attributes:G_,markdown:K_},Symbol.toStringTag,{value:"Module"})),X_={title:"Ana",category:"translation",image:"/images/ernst_stöhr_couple_by_a_lake.png"},J_=`<i>This is my English translation of Ismael Serrano's song "Ana".</i>  

Ana, life is so short  
And there are so many goodbyes  
Full of empty promises  

Ana, what will become of us  
When we fall and others take our place?  

Ana, where will the next battle be  
In which we lose the war against loneliness  

Ana, you will hear again  
The stones that happiness threw at your window  

Ana, life is so short  
Maybe I'll become a lie  
And won't know you tomorrow  

Ana, when I withhold a hug from you  
Remember then the year that we forged peace  

Ana, maybe I'll leave and never come back  
Maybe I'll die and you'll never have to curse me again  

Ana, I see you and declare with guilt  
That I want your presence more than I want peace  

Ana, what do I do with my songs?  
With a bundle of frost  
With my desire to kill?  

Ana, what do I do with the mountains  
Of papers that I've signed  
Swearing to die or love  

Swearing to die or love  

Ana`,Gh=Object.freeze(Object.defineProperty({__proto__:null,attributes:X_,markdown:J_},Symbol.toStringTag,{value:"Module"})),Z_={title:"Canción de las Simples Cosas",category:"translation",image:"/images/carl_moll_lilies.png"},eS=`<i>This is my English translation of César Isella's song "Song of the Simple Things".</i>  

One bids farewell, insensibly, to the little things  
Like a tree in autumn that loses its leaves  

In the end, it's sadness that is the slow death to the little things  
Those simple things that go on aching in the heart  

One always returns to those old places where he loved life  
And then he understands how absent are the dear things  

For that, my girl, don't go now, dreaming of the return  
For love is simple, and the simple things, time devours  

Stay here a little longer, in the bright light of midday  
Where you'll find the table set, with the bread in the sun  

For that, my girl, don't go now, dreaming of the return  
For love is simple, and the simple things, time devours  

One always returns to those old places where he loved life
`,Kh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Z_,markdown:eS},Symbol.toStringTag,{value:"Module"})),tS={title:"Con Te Partirò",category:"translation",image:"images/chagall_blue_world.jpg"},nS=`<i>This is my English translation of Andrea Bocelli's song "I Will Go With You".</i>  

When I am alone  
I dream of the horizon  
And words fail me  
Yes, I know  
There is no light in a room without sun  
If you are not with me  

Open the windows  
Show everyone my heart that you've ignited  
Lock inside me the light  
That you encountered on the street  

With you, I will go  
To countries I have never seen  
Or experienced, with you  
Now, yes, I will see them  
With you, I will set sail  
On ships over seas that   
I know  
No, no, no longer exist  
With you I will see them  

When you are far away  
I dream of the horizon  
And words fail me  
I know that you are with me  
You, my moon, are here with me  
My sun, you are here with me  
With me, with me, with me  

With you, I will go  
To countries I have never seen  
Or experienced, with you  
Now, yes, I will experience them  
With you, I will set sail  
On ships over seas that   
I know  
No, no, no longer exist  
With you, I will relive them  
With you I will set sail  
On ships over seas that I know no, no, no longer exist  
With you, I will relive them  
I will go with you  

I am with you
`,Xh=Object.freeze(Object.defineProperty({__proto__:null,attributes:tS,markdown:nS},Symbol.toStringTag,{value:"Module"})),iS={title:"Ese Arar en el Mar",category:"translation",image:"/images/gracia_barrios.png"},rS=`<i>This is my English translation of Chabuca Granda's song "That Plowing In the Sea".</i>  

When I forget, I will have forgotten  
I will live as if sleepwalking, free  
I will not long for an answer because I won't have asked  
I won't have forgiven, nor offended  

I will miss the rumination of my dreams  
And the sweet grinding, the hope  
That constant making of someone out of something  
That yearning for castles in the sky  

That plow in the sea of daydreams  
That eternal dreaming...  
Of adolescence`,Jh=Object.freeze(Object.defineProperty({__proto__:null,attributes:iS,markdown:rS},Symbol.toStringTag,{value:"Module"})),oS={title:"Gracias a la Vida",category:"translation",image:"/images/chagall.png"},sS=`<i>This is my English translation of Violeta Parra's song "Thanks to Life".</i>

Thanks to life that has given me so much  
It gave me two stars for eyes  
That perfectly distinguish the black from the white  
In the vaulted sky, its starry backdrop  
And in the crowds, the man that I love  

Thanks to life that has given me so much  
It gave me hearing  
That, in all its breadth  
Records the days and the nights  
Crickets and canaries  
Hammers, turbines, barking dogs and rain showers  

Thanks to life that has given me so much  
It gave me sound and letters  
With them I build the words  
That I think and declare  
Mother, friend, brother, and luminous light  
The path of the soul that I am loving  

Thanks to life that has given me so much  
It gave me the step  
Of my tired feet  
With them I walked over cities and puddles  
Beaches, deserts, mountains and plains  
And your house, your street, your patio  

Thanks to life that has given me so much  
It gave me a heart  
That shakes its frame  
When I see the fruit of the human brain  
When I see the good so far from the bad  
When I look into the depths of your clear eyes  

Thanks to life that has given me so much  
It gave me laughter and it gave me tears  
Thus, I discern joy from sorrow  
The two materials that make my song  
And all of your song that is the same song  
And everyone's song that is my own song  

Thanks to life
`,Zh=Object.freeze(Object.defineProperty({__proto__:null,attributes:oS,markdown:sS},Symbol.toStringTag,{value:"Module"})),aS={title:"Mariella",category:"translation",image:"/images/pelton-departure.jpg"},lS=`<i>This is my Spanish translation of the Leon Bridges' and Khruangbin's beautiful song "Mariella".</i>

Pelo negro como el cielo de medianoche  
Ojos como la jungla, eres algo salvaje  

Su dulce melodía canta dondequiera que voy   
Dando vueltas en mi cabeza, sentado en este camino  

Quizás escribiré una carta desde este viejo pueblito  
Abajo en Texas  
La guardaré para ti  

Mariella, Mariella, Mariella, Mariella  
Mariella, Mariella, Mari', podemos ir juntos?  

Aquí nada cambia, las estaciones pasan  
Dijiste 'hola', dijiste 'adios'  

Te arrancaste? Mariella, a dónde fuiste?  
A algún lugar nuevo, a algún lugar viejo  

Quizás yo no quiero vivir solo en un viejo pueblito  
Aquí en Texas  
Con el recuerdo de ti  

Mariella, Mariella, Mariella, Mariella  
Mariella, Mariella, Mariella, Mariella  
Mariella, Mariella, Mariella, Mariella  
Mariella, Mariella, Mariella, aferrándome a ti`,ef=Object.freeze(Object.defineProperty({__proto__:null,attributes:aS,markdown:lS},Symbol.toStringTag,{value:"Module"})),uS={title:"Tan Joven y Tan Viejo",category:"translation",image:"/images/twilight.png"},cS=`<i>My English translation of Joaquín Sabina's song "So Young and So Old".</i>  

The first thing I wanted was to get far away  
We, the kids that hated mirrors  
Glued Rita Hayworth's gloves and the streets of New York on the sticker album of resignation  
I hardly saw that life was winking her eye at me  
I asked that at her whim, she dispose of me  
She gave me the keys to the forbidden city  
All that I have, which is nothing, I gave to her  
And like that I grew up flying  

And flew so fast my own shadow lost sight of me  
I ruined my shirt to erase my footprints  
I confused the neon lights for stars  
I cheated at poker  
I defrauded my friends  
On a bench in the park  
I slept like a log  

For saying what I think without thinking about what I say  
They gave me more than a kiss, more than a slap  
What I know about forgetting I learned from the moon  
What I know about sin I had to look for myself  
Like a thief under some girl's skirt whose name I don't like to remember  
So for now, no goodbyes guys  
I fall asleep at the funerals of my generation  
Each night I reinvent myself  
I still get drunk  
So young and so old  
Like a rolling stone`,tf=Object.freeze(Object.defineProperty({__proto__:null,attributes:uS,markdown:cS},Symbol.toStringTag,{value:"Module"})),dS={title:"Vine del Norte",category:"translation",image:"/images/roberto_matta.png"},hS=`<i>This is my English translation of Ismael Serrano's song "I Came from the North".</i>  

I came from the north looking for a song and a cross  
There crossed a comet, and in its wake was you  
In Madrid it would keep on raining, sad like I left it  
And in Santiago with its lights, its November burned me  

It was after a concert, one night at your college  
There I met you once again  
"Come party with me tonight"  
"I accept your offer gladly, only on one condition:  
That this night doesn't end, and that I don't fall in love."  

On our way to the Alameda, you start to tell me of causes, chances, and struggles  
In those days and in the past  
In front of the Moneda, you hummed Jara  
You looked at me, "Standing like that, so strong, you have an air of Guevara about you"  

We went into a bar and someone was singing Fito  
"At this rate I'm going to fall in love, I just need another pisco"  
"Stop telling stories, come up here and sing me one of Silvio's songs"  
"Only if you give me a kiss" and everybody sang along with me  

We left the bar drunk, holding hands  
And in the street, as always, the cops were fucking around  
You shouted at them, "Murderers!" and we both started to run  
You were laughing and in your laugh I saw myself fall  

"Where have you been all this time?"  
"It's late, go home"  
And in your embrace I thought I heard the Parras singing for us from afar  
"I'd better go"  
I stayed right there, without you, shouting  
"I'll remember you, Amanda"  
"I'll remember you, Amanda"  

In time, I arrived back at my north  
With a song and a cross, with the wake of a comet, with your lie and your light  
In Madrid, it kept on raining just how I'd left it  
And in Santiago there are so many things… I'm dying to go back today`,nf=Object.freeze(Object.defineProperty({__proto__:null,attributes:dS,markdown:hS},Symbol.toStringTag,{value:"Module"})),fS={title:"Volver a los Diecisiete",category:"translation",image:"/images/chagall_lovers.png"},pS=`<i>This is my English translation of Violeta Parra's song "Back to seventeen" or "To be seventeen again". I love the original from Parra's album Las Últimas Composiciones as well as a cover done by Camila Gallardo.</i>  

To go back to seventeen after living a century  
Is like deciphering symbols without being an adequate sage  
Suddenly being so fragile again, like a second  
Feeling so deeply again, like a child in front of God  
That is how I feel in this fertile moment  

And so it goes, twisting, tangling like ivy on the wall  
Sprouting, growing like moss on the stone  

I step backward as you step forth  
The rainbow of our alliance has penetrated my nest  
With all its colors it has passed through my veins  
And even the strong chain with which destiny has tied us  
Is like a fine diamond that illuminates my tranquil soul  

What feeling can do, knowing could not  
Nor the clearest process, nor the broadest thought  
Everything changes in a moment  
Like a condescending magician that gently pulls us away from grudges and violence  
Only love with its science brings us back our innocence  

And so it goes, twisting, tangling like ivy on the wall  
Sprouting, growing like moss on the stone  

Love is a whirlwind of original purity  
Even to the ferocious animal she whispers her sweet trill  
She halts the pilgrims, frees the prisoners  
Love, with her care, turns the old man into a boy  
Only loving makes evil pure and sincere again  

The window flew wide open, as if by magic  
Love entered in her cloak like a warm morning  
At the sound of her beautiful song the jasmine started to bloom  
Flying like a Seraphim, she placed jewels in the sky  
And to my seventeenth birthday, the angel returned me  

And so it goes, twisting, tangling like ivy on the wall  
Sprouting, growing like moss on the stone  `,rf=Object.freeze(Object.defineProperty({__proto__:null,attributes:fS,markdown:pS},Symbol.toStringTag,{value:"Module"})),jy="/assets/2025_A_Tiny_Bernardo_At_the_Guggenheim-PUisG3S8.png",mS=Object.freeze(Object.defineProperty({__proto__:null,default:jy},Symbol.toStringTag,{value:"Module"})),gS="/assets/2025_Belvedere_Gardens-RT5tNUav.png",yS=Object.freeze(Object.defineProperty({__proto__:null,default:gS},Symbol.toStringTag,{value:"Module"})),vS="/assets/2025_Cats_In_Marrakesh-CAa5P-XE.png",bS=Object.freeze(Object.defineProperty({__proto__:null,default:vS},Symbol.toStringTag,{value:"Module"})),TS="/assets/2025_Varos_Sorceress_For_Natalia-C1nUj4fw.png",ES=Object.freeze(Object.defineProperty({__proto__:null,default:TS},Symbol.toStringTag,{value:"Module"})),wS="/assets/2025_Varos_Woman_For_Natalia-CtB40dqQ.png",xS=Object.freeze(Object.defineProperty({__proto__:null,default:wS},Symbol.toStringTag,{value:"Module"})),_S="/assets/2025_Vicuna_For_Pedro-NeUFjtVk.png",SS=Object.freeze(Object.defineProperty({__proto__:null,default:_S},Symbol.toStringTag,{value:"Module"}));var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uy={exports:{}},wl={},Hy={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),kS=Symbol.for("react.portal"),DS=Symbol.for("react.fragment"),IS=Symbol.for("react.strict_mode"),CS=Symbol.for("react.profiler"),AS=Symbol.for("react.provider"),OS=Symbol.for("react.context"),PS=Symbol.for("react.forward_ref"),NS=Symbol.for("react.suspense"),MS=Symbol.for("react.memo"),RS=Symbol.for("react.lazy"),Hp=Symbol.iterator;function LS(e){return e===null||typeof e!="object"?null:(e=Hp&&e[Hp]||e["@@iterator"],typeof e=="function"?e:null)}var $y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wy=Object.assign,Vy={};function zr(e,t,n){this.props=e,this.context=t,this.refs=Vy,this.updater=n||$y}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yy(){}Yy.prototype=zr.prototype;function sf(e,t,n){this.props=e,this.context=t,this.refs=Vy,this.updater=n||$y}var af=sf.prototype=new Yy;af.constructor=sf;Wy(af,zr.prototype);af.isPureReactComponent=!0;var $p=Array.isArray,qy=Object.prototype.hasOwnProperty,lf={current:null},Qy={key:!0,ref:!0,__self:!0,__source:!0};function Gy(e,t,n){var i,r={},o=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)qy.call(t,i)&&!Qy.hasOwnProperty(i)&&(r[i]=t[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Is,type:e,key:o,ref:s,props:r,_owner:lf.current}}function FS(e,t){return{$$typeof:Is,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function uf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is}function zS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wp=/\/+/g;function au(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zS(""+e.key):t.toString(36)}function wa(e,t,n,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Is:case kS:s=!0}}if(s)return s=e,r=r(s),e=i===""?"."+au(s,0):i,$p(r)?(n="",e!=null&&(n=e.replace(Wp,"$&/")+"/"),wa(r,t,n,"",function(u){return u})):r!=null&&(uf(r)&&(r=FS(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Wp,"$&/")+"/")+e)),t.push(r)),1;if(s=0,i=i===""?".":i+":",$p(e))for(var a=0;a<e.length;a++){o=e[a];var l=i+au(o,a);s+=wa(o,t,n,l,r)}else if(l=LS(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=i+au(o,a++),s+=wa(o,t,n,l,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Js(e,t,n){if(e==null)return e;var i=[],r=0;return wa(e,i,"","",function(o){return t.call(n,o,r++)}),i}function BS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xt={current:null},xa={transition:null},jS={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:xa,ReactCurrentOwner:lf};function Ky(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:Js,forEach:function(e,t,n){Js(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Js(e,function(){t++}),t},toArray:function(e){return Js(e,function(t){return t})||[]},only:function(e){if(!uf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=zr;xe.Fragment=DS;xe.Profiler=CS;xe.PureComponent=sf;xe.StrictMode=IS;xe.Suspense=NS;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;xe.act=Ky;xe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Wy({},e.props),r=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=lf.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)qy.call(t,l)&&!Qy.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Is,type:e.type,key:r,ref:o,props:i,_owner:s}};xe.createContext=function(e){return e={$$typeof:OS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:AS,_context:e},e.Consumer=e};xe.createElement=Gy;xe.createFactory=function(e){var t=Gy.bind(null,e);return t.type=e,t};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:PS,render:e}};xe.isValidElement=uf;xe.lazy=function(e){return{$$typeof:RS,_payload:{_status:-1,_result:e},_init:BS}};xe.memo=function(e,t){return{$$typeof:MS,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=xa.transition;xa.transition={};try{e()}finally{xa.transition=t}};xe.unstable_act=Ky;xe.useCallback=function(e,t){return xt.current.useCallback(e,t)};xe.useContext=function(e){return xt.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return xt.current.useDeferredValue(e)};xe.useEffect=function(e,t){return xt.current.useEffect(e,t)};xe.useId=function(){return xt.current.useId()};xe.useImperativeHandle=function(e,t,n){return xt.current.useImperativeHandle(e,t,n)};xe.useInsertionEffect=function(e,t){return xt.current.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return xt.current.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return xt.current.useMemo(e,t)};xe.useReducer=function(e,t,n){return xt.current.useReducer(e,t,n)};xe.useRef=function(e){return xt.current.useRef(e)};xe.useState=function(e){return xt.current.useState(e)};xe.useSyncExternalStore=function(e,t,n){return xt.current.useSyncExternalStore(e,t,n)};xe.useTransition=function(){return xt.current.useTransition()};xe.version="18.3.1";Hy.exports=xe;var R=Hy.exports;const Xy=of(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var US=R,HS=Symbol.for("react.element"),$S=Symbol.for("react.fragment"),WS=Object.prototype.hasOwnProperty,VS=US.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YS={key:!0,ref:!0,__self:!0,__source:!0};function Jy(e,t,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)WS.call(t,i)&&!YS.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:HS,type:e,key:o,ref:s,props:r,_owner:VS.current}}wl.Fragment=$S;wl.jsx=Jy;wl.jsxs=Jy;Uy.exports=wl;var Q=Uy.exports;function Zy({paintings:e,paintingInfo:t}){const i=Object.entries(e).map(([r,o])=>{const s=r.split("/").pop(),a=t[s];return{filePath:r,module:o,filename:s,...a}}).filter(r=>r.title).sort((r,o)=>r.year-o.year);return Q.jsx("div",{className:"gallery",children:Q.jsx("div",{className:"paintings-row",children:i.map(r=>Q.jsxs("div",{className:"painting-card",children:[Q.jsx("img",{src:r.module.default,alt:r.title,className:"painting-image"}),Q.jsxs("div",{className:"painting-info",children:[Q.jsx("p",{className:"title",children:r.title}),Q.jsx("p",{className:"year",children:r.year})]})]},r.filePath))})})}const qS="My paintings",QS=jy,cf=Object.assign({"/src/assets/johnson_paintings/2025_A_Tiny_Bernardo_At_the_Guggenheim.png":mS,"/src/assets/johnson_paintings/2025_Belvedere_Gardens.png":yS,"/src/assets/johnson_paintings/2025_Cats_In_Marrakesh.png":bS,"/src/assets/johnson_paintings/2025_Varos_Sorceress_For_Natalia.png":ES,"/src/assets/johnson_paintings/2025_Varos_Woman_For_Natalia.png":xS,"/src/assets/johnson_paintings/2025_Vicuna_For_Pedro.png":SS});console.log("Paintings found:",cf);const GS=Object.fromEntries(Object.keys(cf).map(e=>{const t=e.split("/").pop(),n=t.replace(/\.[^/.]+$/,""),[i,...r]=n.split("_"),o=r.join(" ");return[t,{year:Number(i),title:o}]}));function KS(){return Q.jsx(Zy,{paintings:cf,paintingInfo:GS})}const df=Object.freeze(Object.defineProperty({__proto__:null,default:KS,image:QS,title:qS},Symbol.toStringTag,{value:"Module"})),XS="/assets/2025_Bernardo-CaVJWtze.jpg",JS=Object.freeze(Object.defineProperty({__proto__:null,default:XS},Symbol.toStringTag,{value:"Module"})),ZS="/assets/2025_Bernardo_In_Delanies_Cafe-DxtsBlaF.jpg",e2=Object.freeze(Object.defineProperty({__proto__:null,default:ZS},Symbol.toStringTag,{value:"Module"})),t2="/assets/2025_Bola%C3%B1o_Scene-DzSzuH5_.jpg",n2=Object.freeze(Object.defineProperty({__proto__:null,default:t2},Symbol.toStringTag,{value:"Module"})),i2="/assets/2025_Desk-CG6SlABL.jpg",r2=Object.freeze(Object.defineProperty({__proto__:null,default:i2},Symbol.toStringTag,{value:"Module"})),e0="/assets/2025_Dolomites-BhSArGWH.jpg",o2=Object.freeze(Object.defineProperty({__proto__:null,default:e0},Symbol.toStringTag,{value:"Module"})),s2="/assets/2025_Karlskirche-DPXl9HZc.jpg",a2=Object.freeze(Object.defineProperty({__proto__:null,default:s2},Symbol.toStringTag,{value:"Module"})),l2="/assets/2025_Old_Man_In_Vienna-BDfOEdMo.jpg",u2=Object.freeze(Object.defineProperty({__proto__:null,default:l2},Symbol.toStringTag,{value:"Module"})),c2="/assets/2025_Venice-DqjVP0j9.jpg",d2=Object.freeze(Object.defineProperty({__proto__:null,default:c2},Symbol.toStringTag,{value:"Module"})),h2="/assets/2025_Waiting_For_Food_In_Cetara-BclIwKjM.jpg",f2=Object.freeze(Object.defineProperty({__proto__:null,default:h2},Symbol.toStringTag,{value:"Module"})),p2="My sketches",m2=e0,t0=Object.assign({"/src/assets/johnson_sketches/2025_Bernardo.jpg":JS,"/src/assets/johnson_sketches/2025_Bernardo_In_Delanies_Cafe.jpg":e2,"/src/assets/johnson_sketches/2025_Bolaño_Scene.jpg":n2,"/src/assets/johnson_sketches/2025_Desk.jpg":r2,"/src/assets/johnson_sketches/2025_Dolomites.jpg":o2,"/src/assets/johnson_sketches/2025_Karlskirche.jpg":a2,"/src/assets/johnson_sketches/2025_Old_Man_In_Vienna.jpg":u2,"/src/assets/johnson_sketches/2025_Venice.jpg":d2,"/src/assets/johnson_sketches/2025_Waiting_For_Food_In_Cetara.jpg":f2}),g2=Object.fromEntries(Object.keys(t0).map(e=>{const t=e.split("/").pop(),n=t.replace(/\.[^/.]+$/,""),[i,...r]=n.split("_"),o=r.join(" ");return[t,{year:Number(i),title:o}]}));function y2(){return Q.jsx(Zy,{paintings:t0,paintingInfo:g2})}const hf=Object.freeze(Object.defineProperty({__proto__:null,default:y2,image:m2,title:p2},Symbol.toStringTag,{value:"Module"})),n0="/assets/jesspanish-D3qJ7fiZ.png",v2="Jesspañol",b2=n0,i0="https://jesspanish.netlify.app/";function T2(){return Q.jsxs("div",{children:[Q.jsxs("div",{className:"p-8 text-center",children:[Q.jsx("p",{className:"mb-4",children:"My partner, Bernardo Subercaseaux, graciously started this web app to help me learn Spanish, which at first made me very interested in learning how to edit the code of the game and later on interested in learning Spanish."}),Q.jsx("p",{children:"The app includes a game for practicing:"}),Q.jsxs("ul",{className:"list-disc list-inside space-y-2 ml-6",children:[Q.jsxs("li",{children:[Q.jsx("b",{children:"Verbs and conjugations:"})," Users can practice conjugating verbs in all Spanish tenses (except those used exclusively in journalism) and add more verbs and conjugations to their own dictionary."]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Vocabulary:"})," Users can practice translating a set of English words to Spanish, Spanish words to English, and can add vocab words to their own dictionary with descriptions and categories."]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Forming sentences in Spanish:"})," Users try to write a sentence in Spanish using two random words from their vocabulary dictionary. An AI agent checks the grammar, spelling, and proper conjugation of verbs and provides the user with corrections."]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Translating sentences from English to Spanish:"})," An AI agent writes a sentence in English using two vocab words from the user's dictionary. The user tries to translate the sentence to Spanish, and the AI agent provides corrections."]})]})]}),Q.jsx("div",{style:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center"},children:Q.jsxs("a",{href:i0,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",flexDirection:"column",alignItems:"center",marginTop:"2rem",gap:"8px",textDecoration:"none"},children:[Q.jsx("img",{src:n0,alt:"Jesspanish thumbnail",style:{width:500,height:"auto",borderRadius:8,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}),Q.jsx("span",{style:{padding:"10px 14px",background:"#FDFAF5",color:"rgb(73, 73, 73)",borderRadius:10,fontWeight:600},children:"Check it out here"})]})})]})}const ff=Object.freeze(Object.defineProperty({__proto__:null,default:T2,image:b2,link:i0,title:v2},Symbol.toStringTag,{value:"Module"})),r0="/assets/jessprache-C0BZEKUK.png",E2="Jessprache",w2=r0,o0="https://jessprache.netlify.app/";function x2(){return Q.jsxs("div",{children:[Q.jsxs("div",{className:"p-8 text-center",children:[Q.jsx("p",{className:"mb-4",children:'I spent a summer in Vienna, Austria and always enjoyed the way German sounded, so I re-factored Jesspañol to Jessprache to ostensibly learn German. However, as someone told me in Vienna, "life is too short to learn German", and my level of speaking is virtually nonexistent, and my level of comprehension is specific to following yoga class instructions.'}),Q.jsx("p",{children:"The app includes a game for practicing:"}),Q.jsxs("ul",{className:"list-disc list-inside space-y-2 ml-6",children:[Q.jsxs("li",{children:[Q.jsx("b",{children:"Verbs and conjugations:"})," Users can practice conjugating verbs in all German tenses (except those used exclusively in journalism) and add more verbs and conjugations to their own dictionary."]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Vocabulary:"})," Users can practice translating a set of English words to German, German words to English, and can add vocab words to their own dictionary with descriptions and categories."]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Forming sentences in German:"})," Users try to write a sentence in German using two random words from their vocabulary dictionary. An AI agent checks the grammar, spelling, and proper conjugation of verbs and provides the user with corrections."]}),Q.jsxs("li",{children:[Q.jsx("b",{children:"Translating sentences from English to German:"})," An AI agent writes a sentence in English using two vocab words from the user's dictionary. The user tries to translate the sentence to German, and the AI agent provides corrections."]})]})]}),Q.jsx("div",{style:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center"},children:Q.jsxs("a",{href:o0,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",flexDirection:"column",alignItems:"center",marginTop:"2rem",gap:"8px",textDecoration:"none"},children:[Q.jsx("img",{src:r0,alt:"Jessprache thumbnail",style:{width:500,height:"auto",borderRadius:8,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}),Q.jsx("span",{style:{padding:"10px 14px",background:"#FDFAF5",color:"rgb(73, 73, 73)",borderRadius:10,fontWeight:600},children:"Check it out here"})]})})]})}const pf=Object.freeze(Object.defineProperty({__proto__:null,default:x2,image:w2,link:o0,title:E2},Symbol.toStringTag,{value:"Module"}));var nc={},s0={exports:{}},$t={},a0={exports:{}},l0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,J){var w=V.length;V.push(J);e:for(;0<w;){var de=w-1>>>1,ge=V[de];if(0<r(ge,J))V[de]=J,V[w]=ge,w=de;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var J=V[0],w=V.pop();if(w!==J){V[0]=w;e:for(var de=0,ge=V.length,S=ge>>>1;de<S;){var Oe=2*(de+1)-1,ct=V[Oe],Se=Oe+1,Vt=V[Se];if(0>r(ct,w))Se<ge&&0>r(Vt,ct)?(V[de]=Vt,V[Se]=w,de=Se):(V[de]=ct,V[Oe]=w,de=Oe);else if(Se<ge&&0>r(Vt,w))V[de]=Vt,V[Se]=w,de=Se;else break e}}return J}function r(V,J){var w=V.sortIndex-J.sortIndex;return w!==0?w:V.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,d=null,f=3,p=!1,g=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(V){for(var J=n(u);J!==null;){if(J.callback===null)i(u);else if(J.startTime<=V)i(u),J.sortIndex=J.expirationTime,t(l,J);else break;J=n(u)}}function A(V){if(x=!1,v(V),!g)if(n(l)!==null)g=!0,le(P);else{var J=n(u);J!==null&&Te(A,J.startTime-V)}}function P(V,J){g=!1,x&&(x=!1,m(z),z=-1),p=!0;var w=f;try{for(v(J),d=n(l);d!==null&&(!(d.expirationTime>J)||V&&!G());){var de=d.callback;if(typeof de=="function"){d.callback=null,f=d.priorityLevel;var ge=de(d.expirationTime<=J);J=e.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&i(l),v(J)}else i(l);d=n(l)}if(d!==null)var S=!0;else{var Oe=n(u);Oe!==null&&Te(A,Oe.startTime-J),S=!1}return S}finally{d=null,f=w,p=!1}}var b=!1,F=null,z=-1,q=5,D=-1;function G(){return!(e.unstable_now()-D<q)}function X(){if(F!==null){var V=e.unstable_now();D=V;var J=!0;try{J=F(!0,V)}finally{J?pe():(b=!1,F=null)}}else b=!1}var pe;if(typeof y=="function")pe=function(){y(X)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,te=ie.port2;ie.port1.onmessage=X,pe=function(){te.postMessage(null)}}else pe=function(){C(X,0)};function le(V){F=V,b||(b=!0,pe())}function Te(V,J){z=C(function(){V(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,le(P))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(V){switch(f){case 1:case 2:case 3:var J=3;break;default:J=f}var w=f;f=J;try{return V()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,J){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var w=f;f=V;try{return J()}finally{f=w}},e.unstable_scheduleCallback=function(V,J,w){var de=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?de+w:de):w=de,V){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=w+ge,V={id:h++,callback:J,priorityLevel:V,startTime:w,expirationTime:ge,sortIndex:-1},w>de?(V.sortIndex=w,t(u,V),n(l)===null&&V===n(u)&&(x?(m(z),z=-1):x=!0,Te(A,w-de))):(V.sortIndex=ge,t(l,V),g||p||(g=!0,le(P))),V},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(V){var J=f;return function(){var w=f;f=J;try{return V.apply(this,arguments)}finally{f=w}}}})(l0);a0.exports=l0;var _2=a0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S2=R,Ht=_2;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u0=new Set,jo={};function Qi(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(jo[e]=t,e=0;e<t.length;e++)u0.add(t[e])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=Object.prototype.hasOwnProperty,k2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},Yp={};function D2(e){return ic.call(Yp,e)?!0:ic.call(Vp,e)?!1:k2.test(e)?Yp[e]=!0:(Vp[e]=!0,!1)}function I2(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function C2(e,t,n,i){if(t===null||typeof t>"u"||I2(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _t(e,t,n,i,r,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ut[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ut[t]=new _t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ut[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ut[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ut[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ut[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ut[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ut[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ut[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mf,gf);ut[t]=new _t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mf,gf);ut[t]=new _t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mf,gf);ut[t]=new _t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ut[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});ut.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ut[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function yf(e,t,n,i){var r=ut.hasOwnProperty(t)?ut[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(C2(t,n,r,i)&&(n=null),i||r===null?D2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Vn=S2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zs=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),rc=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),d0=Symbol.for("react.context"),bf=Symbol.for("react.forward_ref"),oc=Symbol.for("react.suspense"),sc=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),h0=Symbol.for("react.offscreen"),qp=Symbol.iterator;function eo(e){return e===null||typeof e!="object"?null:(e=qp&&e[qp]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,lu;function go(e){if(lu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);lu=t&&t[1]||""}return`
`+lu+e}var uu=!1;function cu(e,t){if(!e||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?go(e):""}function A2(e){switch(e.tag){case 5:return go(e.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return e=cu(e.type,!1),e;case 11:return e=cu(e.type.render,!1),e;case 1:return e=cu(e.type,!0),e;default:return""}}function ac(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case sr:return"Portal";case rc:return"Profiler";case vf:return"StrictMode";case oc:return"Suspense";case sc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d0:return(e.displayName||"Context")+".Consumer";case c0:return(e._context.displayName||"Context")+".Provider";case bf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tf:return t=e.displayName||null,t!==null?t:ac(e.type)||"Memo";case ti:t=e._payload,e=e._init;try{return ac(e(t))}catch{}}return null}function O2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ac(t);case 8:return t===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function f0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function P2(e){var t=f0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ea(e){e._valueTracker||(e._valueTracker=P2(e))}function p0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=f0(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lc(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qp(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=yi(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function m0(e,t){t=t.checked,t!=null&&yf(e,"checked",t,!1)}function uc(e,t){m0(e,t);var n=yi(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cc(e,t.type,n):t.hasOwnProperty("defaultValue")&&cc(e,t.type,yi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cc(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yo=Array.isArray;function br(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+yi(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function dc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(yo(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yi(n)}}function g0(e,t){var n=yi(t.value),i=yi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Xp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function y0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?y0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ta,v0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Uo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N2=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(e){N2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xo[t]=xo[e]})});function b0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xo.hasOwnProperty(e)&&xo[e]?(""+t).trim():t+"px"}function T0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=b0(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var M2=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(e,t){if(t){if(M2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function pc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mc=null;function Ef(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gc=null,Tr=null,Er=null;function Jp(e){if(e=Os(e)){if(typeof gc!="function")throw Error(H(280));var t=e.stateNode;t&&(t=Dl(t),gc(e.stateNode,e.type,t))}}function E0(e){Tr?Er?Er.push(e):Er=[e]:Tr=e}function w0(){if(Tr){var e=Tr,t=Er;if(Er=Tr=null,Jp(e),t)for(e=0;e<t.length;e++)Jp(t[e])}}function x0(e,t){return e(t)}function _0(){}var du=!1;function S0(e,t,n){if(du)return e(t,n);du=!0;try{return x0(e,t,n)}finally{du=!1,(Tr!==null||Er!==null)&&(_0(),w0())}}function Ho(e,t){var n=e.stateNode;if(n===null)return null;var i=Dl(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var yc=!1;if(Un)try{var to={};Object.defineProperty(to,"passive",{get:function(){yc=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{yc=!1}function R2(e,t,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var _o=!1,$a=null,Wa=!1,vc=null,L2={onError:function(e){_o=!0,$a=e}};function F2(e,t,n,i,r,o,s,a,l){_o=!1,$a=null,R2.apply(L2,arguments)}function z2(e,t,n,i,r,o,s,a,l){if(F2.apply(this,arguments),_o){if(_o){var u=$a;_o=!1,$a=null}else throw Error(H(198));Wa||(Wa=!0,vc=u)}}function Gi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function k0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zp(e){if(Gi(e)!==e)throw Error(H(188))}function B2(e){var t=e.alternate;if(!t){if(t=Gi(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Zp(r),e;if(o===i)return Zp(r),t;o=o.sibling}throw Error(H(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==i)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function D0(e){return e=B2(e),e!==null?I0(e):null}function I0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=I0(e);if(t!==null)return t;e=e.sibling}return null}var C0=Ht.unstable_scheduleCallback,em=Ht.unstable_cancelCallback,j2=Ht.unstable_shouldYield,U2=Ht.unstable_requestPaint,Ye=Ht.unstable_now,H2=Ht.unstable_getCurrentPriorityLevel,wf=Ht.unstable_ImmediatePriority,A0=Ht.unstable_UserBlockingPriority,Va=Ht.unstable_NormalPriority,$2=Ht.unstable_LowPriority,O0=Ht.unstable_IdlePriority,xl=null,kn=null;function W2(e){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:q2,V2=Math.log,Y2=Math.LN2;function q2(e){return e>>>=0,e===0?32:31-(V2(e)/Y2|0)|0}var na=64,ia=4194304;function vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ya(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=vo(a):(o&=s,o!==0&&(i=vo(o)))}else s=n&~r,s!==0?i=vo(s):o!==0&&(i=vo(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-pn(t),r=1<<n,i|=e[n],t&=~r;return i}function Q2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G2(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-pn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Q2(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function bc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function P0(){var e=na;return na<<=1,!(na&4194240)&&(na=64),e}function hu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pn(t),e[t]=n}function K2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-pn(n),o=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~o}}function xf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-pn(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var Ce=0;function N0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var M0,_f,R0,L0,F0,Tc=!1,ra=[],ui=null,ci=null,di=null,$o=new Map,Wo=new Map,ii=[],X2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tm(e,t){switch(e){case"focusin":case"focusout":ui=null;break;case"dragenter":case"dragleave":ci=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":$o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(t.pointerId)}}function no(e,t,n,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Os(t),t!==null&&_f(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function J2(e,t,n,i,r){switch(t){case"focusin":return ui=no(ui,e,t,n,i,r),!0;case"dragenter":return ci=no(ci,e,t,n,i,r),!0;case"mouseover":return di=no(di,e,t,n,i,r),!0;case"pointerover":var o=r.pointerId;return $o.set(o,no($o.get(o)||null,e,t,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Wo.set(o,no(Wo.get(o)||null,e,t,n,i,r)),!0}return!1}function z0(e){var t=Mi(e.target);if(t!==null){var n=Gi(t);if(n!==null){if(t=n.tag,t===13){if(t=k0(n),t!==null){e.blockedOn=t,F0(e.priority,function(){R0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ec(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);mc=i,n.target.dispatchEvent(i),mc=null}else return t=Os(n),t!==null&&_f(t),e.blockedOn=n,!1;t.shift()}return!0}function nm(e,t,n){_a(e)&&n.delete(t)}function Z2(){Tc=!1,ui!==null&&_a(ui)&&(ui=null),ci!==null&&_a(ci)&&(ci=null),di!==null&&_a(di)&&(di=null),$o.forEach(nm),Wo.forEach(nm)}function io(e,t){e.blockedOn===t&&(e.blockedOn=null,Tc||(Tc=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,Z2)))}function Vo(e){function t(r){return io(r,e)}if(0<ra.length){io(ra[0],e);for(var n=1;n<ra.length;n++){var i=ra[n];i.blockedOn===e&&(i.blockedOn=null)}}for(ui!==null&&io(ui,e),ci!==null&&io(ci,e),di!==null&&io(di,e),$o.forEach(t),Wo.forEach(t),n=0;n<ii.length;n++)i=ii[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<ii.length&&(n=ii[0],n.blockedOn===null);)z0(n),n.blockedOn===null&&ii.shift()}var wr=Vn.ReactCurrentBatchConfig,qa=!0;function ek(e,t,n,i){var r=Ce,o=wr.transition;wr.transition=null;try{Ce=1,Sf(e,t,n,i)}finally{Ce=r,wr.transition=o}}function tk(e,t,n,i){var r=Ce,o=wr.transition;wr.transition=null;try{Ce=4,Sf(e,t,n,i)}finally{Ce=r,wr.transition=o}}function Sf(e,t,n,i){if(qa){var r=Ec(e,t,n,i);if(r===null)wu(e,t,i,Qa,n),tm(e,i);else if(J2(r,e,t,n,i))i.stopPropagation();else if(tm(e,i),t&4&&-1<X2.indexOf(e)){for(;r!==null;){var o=Os(r);if(o!==null&&M0(o),o=Ec(e,t,n,i),o===null&&wu(e,t,i,Qa,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else wu(e,t,i,null,n)}}var Qa=null;function Ec(e,t,n,i){if(Qa=null,e=Ef(i),e=Mi(e),e!==null)if(t=Gi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=k0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qa=e,null}function B0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H2()){case wf:return 1;case A0:return 4;case Va:case $2:return 16;case O0:return 536870912;default:return 16}default:return 16}}var si=null,kf=null,Sa=null;function j0(){if(Sa)return Sa;var e,t=kf,n=t.length,i,r="value"in si?si.value:si.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===r[o-i];i++);return Sa=r.slice(e,1<i?1-i:void 0)}function ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oa(){return!0}function im(){return!1}function Wt(e){function t(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oa:im,this.isPropagationStopped=im,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=Wt(Br),As=$e({},Br,{view:0,detail:0}),nk=Wt(As),fu,pu,ro,_l=$e({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(fu=e.screenX-ro.screenX,pu=e.screenY-ro.screenY):pu=fu=0,ro=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),rm=Wt(_l),ik=$e({},_l,{dataTransfer:0}),rk=Wt(ik),ok=$e({},As,{relatedTarget:0}),mu=Wt(ok),sk=$e({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),ak=Wt(sk),lk=$e({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uk=Wt(lk),ck=$e({},Br,{data:0}),om=Wt(ck),dk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fk[e])?!!t[e]:!1}function If(){return pk}var mk=$e({},As,{key:function(e){if(e.key){var t=dk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(e){return e.type==="keypress"?ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gk=Wt(mk),yk=$e({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Wt(yk),vk=$e({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),bk=Wt(vk),Tk=$e({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ek=Wt(Tk),wk=$e({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xk=Wt(wk),_k=[9,13,27,32],Cf=Un&&"CompositionEvent"in window,So=null;Un&&"documentMode"in document&&(So=document.documentMode);var Sk=Un&&"TextEvent"in window&&!So,U0=Un&&(!Cf||So&&8<So&&11>=So),am=" ",lm=!1;function H0(e,t){switch(e){case"keyup":return _k.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function kk(e,t){switch(e){case"compositionend":return $0(t);case"keypress":return t.which!==32?null:(lm=!0,am);case"textInput":return e=t.data,e===am&&lm?null:e;default:return null}}function Dk(e,t){if(lr)return e==="compositionend"||!Cf&&H0(e,t)?(e=j0(),Sa=kf=si=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return U0&&t.locale!=="ko"?null:t.data;default:return null}}var Ik={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ik[e.type]:t==="textarea"}function W0(e,t,n,i){E0(i),t=Ga(t,"onChange"),0<t.length&&(n=new Df("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ko=null,Yo=null;function Ck(e){tv(e,0)}function Sl(e){var t=dr(e);if(p0(t))return e}function Ak(e,t){if(e==="change")return t}var V0=!1;if(Un){var gu;if(Un){var yu="oninput"in document;if(!yu){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),yu=typeof cm.oninput=="function"}gu=yu}else gu=!1;V0=gu&&(!document.documentMode||9<document.documentMode)}function dm(){ko&&(ko.detachEvent("onpropertychange",Y0),Yo=ko=null)}function Y0(e){if(e.propertyName==="value"&&Sl(Yo)){var t=[];W0(t,Yo,e,Ef(e)),S0(Ck,t)}}function Ok(e,t,n){e==="focusin"?(dm(),ko=t,Yo=n,ko.attachEvent("onpropertychange",Y0)):e==="focusout"&&dm()}function Pk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(Yo)}function Nk(e,t){if(e==="click")return Sl(t)}function Mk(e,t){if(e==="input"||e==="change")return Sl(t)}function Rk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yn=typeof Object.is=="function"?Object.is:Rk;function qo(e,t){if(yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ic.call(t,r)||!yn(e[r],t[r]))return!1}return!0}function hm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fm(e,t){var n=hm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hm(n)}}function q0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?q0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Q0(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ha(e.document)}return t}function Af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lk(e){var t=Q0(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&q0(n.ownerDocument.documentElement,n)){if(i!==null&&Af(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=fm(n,o);var s=fm(n,i);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fk=Un&&"documentMode"in document&&11>=document.documentMode,ur=null,wc=null,Do=null,xc=!1;function pm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||ur==null||ur!==Ha(i)||(i=ur,"selectionStart"in i&&Af(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&qo(Do,i)||(Do=i,i=Ga(wc,"onSelect"),0<i.length&&(t=new Df("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ur)))}function sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},vu={},G0={};Un&&(G0=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function kl(e){if(vu[e])return vu[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in G0)return vu[e]=t[n];return e}var K0=kl("animationend"),X0=kl("animationiteration"),J0=kl("animationstart"),Z0=kl("transitionend"),ev=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(e,t){ev.set(e,t),Qi(t,[e])}for(var bu=0;bu<mm.length;bu++){var Tu=mm[bu],zk=Tu.toLowerCase(),Bk=Tu[0].toUpperCase()+Tu.slice(1);Ti(zk,"on"+Bk)}Ti(K0,"onAnimationEnd");Ti(X0,"onAnimationIteration");Ti(J0,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(Z0,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jk=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function gm(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,z2(i,t,void 0,e),e.currentTarget=null}function tv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;gm(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;gm(r,a,u),o=l}}}if(Wa)throw e=vc,Wa=!1,vc=null,e}function Fe(e,t){var n=t[Ic];n===void 0&&(n=t[Ic]=new Set);var i=e+"__bubble";n.has(i)||(nv(t,e,2,!1),n.add(i))}function Eu(e,t,n){var i=0;t&&(i|=4),nv(n,e,i,t)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[aa]){e[aa]=!0,u0.forEach(function(n){n!=="selectionchange"&&(jk.has(n)||Eu(n,!1,e),Eu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[aa]||(t[aa]=!0,Eu("selectionchange",!1,t))}}function nv(e,t,n,i){switch(B0(t)){case 1:var r=ek;break;case 4:r=tk;break;default:r=Sf}n=r.bind(null,t,n,e),r=void 0,!yc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function wu(e,t,n,i,r){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Mi(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}S0(function(){var u=o,h=Ef(n),d=[];e:{var f=ev.get(e);if(f!==void 0){var p=Df,g=e;switch(e){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":p=gk;break;case"focusin":g="focus",p=mu;break;case"focusout":g="blur",p=mu;break;case"beforeblur":case"afterblur":p=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bk;break;case K0:case X0:case J0:p=ak;break;case Z0:p=Ek;break;case"scroll":p=nk;break;case"wheel":p=xk;break;case"copy":case"cut":case"paste":p=uk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=sm}var x=(t&4)!==0,C=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var y=u,v;y!==null;){v=y;var A=v.stateNode;if(v.tag===5&&A!==null&&(v=A,m!==null&&(A=Ho(y,m),A!=null&&x.push(Go(y,A,v)))),C)break;y=y.return}0<x.length&&(f=new p(f,g,null,n,h),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==mc&&(g=n.relatedTarget||n.fromElement)&&(Mi(g)||g[Hn]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Mi(g):null,g!==null&&(C=Gi(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(x=rm,A="onMouseLeave",m="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(x=sm,A="onPointerLeave",m="onPointerEnter",y="pointer"),C=p==null?f:dr(p),v=g==null?f:dr(g),f=new x(A,y+"leave",p,n,h),f.target=C,f.relatedTarget=v,A=null,Mi(h)===u&&(x=new x(m,y+"enter",g,n,h),x.target=v,x.relatedTarget=C,A=x),C=A,p&&g)t:{for(x=p,m=g,y=0,v=x;v;v=nr(v))y++;for(v=0,A=m;A;A=nr(A))v++;for(;0<y-v;)x=nr(x),y--;for(;0<v-y;)m=nr(m),v--;for(;y--;){if(x===m||m!==null&&x===m.alternate)break t;x=nr(x),m=nr(m)}x=null}else x=null;p!==null&&ym(d,f,p,x,!1),g!==null&&C!==null&&ym(d,C,g,x,!0)}}e:{if(f=u?dr(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=Ak;else if(um(f))if(V0)P=Mk;else{P=Pk;var b=Ok}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Nk);if(P&&(P=P(e,u))){W0(d,P,n,h);break e}b&&b(e,f,u),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&cc(f,"number",f.value)}switch(b=u?dr(u):window,e){case"focusin":(um(b)||b.contentEditable==="true")&&(ur=b,wc=u,Do=null);break;case"focusout":Do=wc=ur=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,pm(d,n,h);break;case"selectionchange":if(Fk)break;case"keydown":case"keyup":pm(d,n,h)}var F;if(Cf)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else lr?H0(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(U0&&n.locale!=="ko"&&(lr||z!=="onCompositionStart"?z==="onCompositionEnd"&&lr&&(F=j0()):(si=h,kf="value"in si?si.value:si.textContent,lr=!0)),b=Ga(u,z),0<b.length&&(z=new om(z,e,null,n,h),d.push({event:z,listeners:b}),F?z.data=F:(F=$0(n),F!==null&&(z.data=F)))),(F=Sk?kk(e,n):Dk(e,n))&&(u=Ga(u,"onBeforeInput"),0<u.length&&(h=new om("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=F))}tv(d,t)})}function Go(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ga(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ho(e,n),o!=null&&i.unshift(Go(e,o,r)),o=Ho(e,t),o!=null&&i.push(Go(e,o,r))),e=e.return}return i}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ym(e,t,n,i,r){for(var o=t._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ho(n,o),l!=null&&s.unshift(Go(n,l,a))):r||(l=Ho(n,o),l!=null&&s.push(Go(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Uk=/\r\n?/g,Hk=/\u0000|\uFFFD/g;function vm(e){return(typeof e=="string"?e:""+e).replace(Uk,`
`).replace(Hk,"")}function la(e,t,n){if(t=vm(t),vm(e)!==t&&n)throw Error(H(425))}function Ka(){}var _c=null,Sc=null;function kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,$k=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,Wk=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(e){return bm.resolve(null).then(e).catch(Vk)}:Dc;function Vk(e){setTimeout(function(){throw e})}function xu(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Vo(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Vo(t)}function hi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Sn="__reactFiber$"+jr,Ko="__reactProps$"+jr,Hn="__reactContainer$"+jr,Ic="__reactEvents$"+jr,Yk="__reactListeners$"+jr,qk="__reactHandles$"+jr;function Mi(e){var t=e[Sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[Sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tm(e);e!==null;){if(n=e[Sn])return n;e=Tm(e)}return t}e=n,n=e.parentNode}return null}function Os(e){return e=e[Sn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function Dl(e){return e[Ko]||null}var Cc=[],hr=-1;function Ei(e){return{current:e}}function ze(e){0>hr||(e.current=Cc[hr],Cc[hr]=null,hr--)}function Le(e,t){hr++,Cc[hr]=e.current,e.current=t}var vi={},yt=Ei(vi),Ct=Ei(!1),Hi=vi;function Cr(e,t){var n=e.type.contextTypes;if(!n)return vi;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function At(e){return e=e.childContextTypes,e!=null}function Xa(){ze(Ct),ze(yt)}function Em(e,t,n){if(yt.current!==vi)throw Error(H(168));Le(yt,t),Le(Ct,n)}function iv(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(H(108,O2(e)||"Unknown",r));return $e({},n,i)}function Ja(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vi,Hi=yt.current,Le(yt,e),Le(Ct,Ct.current),!0}function wm(e,t,n){var i=e.stateNode;if(!i)throw Error(H(169));n?(e=iv(e,t,Hi),i.__reactInternalMemoizedMergedChildContext=e,ze(Ct),ze(yt),Le(yt,e)):ze(Ct),Le(Ct,n)}var Ln=null,Il=!1,_u=!1;function rv(e){Ln===null?Ln=[e]:Ln.push(e)}function Qk(e){Il=!0,rv(e)}function wi(){if(!_u&&Ln!==null){_u=!0;var e=0,t=Ce;try{var n=Ln;for(Ce=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Ln=null,Il=!1}catch(r){throw Ln!==null&&(Ln=Ln.slice(e+1)),C0(wf,wi),r}finally{Ce=t,_u=!1}}return null}var fr=[],pr=0,Za=null,el=0,Xt=[],Jt=0,$i=null,zn=1,Bn="";function Ai(e,t){fr[pr++]=el,fr[pr++]=Za,Za=e,el=t}function ov(e,t,n){Xt[Jt++]=zn,Xt[Jt++]=Bn,Xt[Jt++]=$i,$i=e;var i=zn;e=Bn;var r=32-pn(i)-1;i&=~(1<<r),n+=1;var o=32-pn(t)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,zn=1<<32-pn(t)+r|n<<r|i,Bn=o+e}else zn=1<<o|n<<r|i,Bn=e}function Of(e){e.return!==null&&(Ai(e,1),ov(e,1,0))}function Pf(e){for(;e===Za;)Za=fr[--pr],fr[pr]=null,el=fr[--pr],fr[pr]=null;for(;e===$i;)$i=Xt[--Jt],Xt[Jt]=null,Bn=Xt[--Jt],Xt[Jt]=null,zn=Xt[--Jt],Xt[Jt]=null}var jt=null,Bt=null,je=!1,fn=null;function sv(e,t){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Bt=hi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$i!==null?{id:zn,overflow:Bn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,Bt=null,!0):!1;default:return!1}}function Ac(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oc(e){if(je){var t=Bt;if(t){var n=t;if(!xm(e,t)){if(Ac(e))throw Error(H(418));t=hi(n.nextSibling);var i=jt;t&&xm(e,t)?sv(i,n):(e.flags=e.flags&-4097|2,je=!1,jt=e)}}else{if(Ac(e))throw Error(H(418));e.flags=e.flags&-4097|2,je=!1,jt=e}}}function _m(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function ua(e){if(e!==jt)return!1;if(!je)return _m(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kc(e.type,e.memoizedProps)),t&&(t=Bt)){if(Ac(e))throw av(),Error(H(418));for(;t;)sv(e,t),t=hi(t.nextSibling)}if(_m(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=hi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=jt?hi(e.stateNode.nextSibling):null;return!0}function av(){for(var e=Bt;e;)e=hi(e.nextSibling)}function Ar(){Bt=jt=null,je=!1}function Nf(e){fn===null?fn=[e]:fn.push(e)}var Gk=Vn.ReactCurrentBatchConfig;function oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var i=n.stateNode}if(!i)throw Error(H(147,e));var r=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function ca(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sm(e){var t=e._init;return t(e._payload)}function lv(e){function t(m,y){if(e){var v=m.deletions;v===null?(m.deletions=[y],m.flags|=16):v.push(y)}}function n(m,y){if(!e)return null;for(;y!==null;)t(m,y),y=y.sibling;return null}function i(m,y){for(m=new Map;y!==null;)y.key!==null?m.set(y.key,y):m.set(y.index,y),y=y.sibling;return m}function r(m,y){return m=gi(m,y),m.index=0,m.sibling=null,m}function o(m,y,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<y?(m.flags|=2,y):v):(m.flags|=2,y)):(m.flags|=1048576,y)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,y,v,A){return y===null||y.tag!==6?(y=Ou(v,m.mode,A),y.return=m,y):(y=r(y,v),y.return=m,y)}function l(m,y,v,A){var P=v.type;return P===ar?h(m,y,v.props.children,A,v.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ti&&Sm(P)===y.type)?(A=r(y,v.props),A.ref=oo(m,y,v),A.return=m,A):(A=Na(v.type,v.key,v.props,null,m.mode,A),A.ref=oo(m,y,v),A.return=m,A)}function u(m,y,v,A){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Pu(v,m.mode,A),y.return=m,y):(y=r(y,v.children||[]),y.return=m,y)}function h(m,y,v,A,P){return y===null||y.tag!==7?(y=ji(v,m.mode,A,P),y.return=m,y):(y=r(y,v),y.return=m,y)}function d(m,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ou(""+y,m.mode,v),y.return=m,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zs:return v=Na(y.type,y.key,y.props,null,m.mode,v),v.ref=oo(m,null,y),v.return=m,v;case sr:return y=Pu(y,m.mode,v),y.return=m,y;case ti:var A=y._init;return d(m,A(y._payload),v)}if(yo(y)||eo(y))return y=ji(y,m.mode,v,null),y.return=m,y;ca(m,y)}return null}function f(m,y,v,A){var P=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(m,y,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zs:return v.key===P?l(m,y,v,A):null;case sr:return v.key===P?u(m,y,v,A):null;case ti:return P=v._init,f(m,y,P(v._payload),A)}if(yo(v)||eo(v))return P!==null?null:h(m,y,v,A,null);ca(m,v)}return null}function p(m,y,v,A,P){if(typeof A=="string"&&A!==""||typeof A=="number")return m=m.get(v)||null,a(y,m,""+A,P);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Zs:return m=m.get(A.key===null?v:A.key)||null,l(y,m,A,P);case sr:return m=m.get(A.key===null?v:A.key)||null,u(y,m,A,P);case ti:var b=A._init;return p(m,y,v,b(A._payload),P)}if(yo(A)||eo(A))return m=m.get(v)||null,h(y,m,A,P,null);ca(y,A)}return null}function g(m,y,v,A){for(var P=null,b=null,F=y,z=y=0,q=null;F!==null&&z<v.length;z++){F.index>z?(q=F,F=null):q=F.sibling;var D=f(m,F,v[z],A);if(D===null){F===null&&(F=q);break}e&&F&&D.alternate===null&&t(m,F),y=o(D,y,z),b===null?P=D:b.sibling=D,b=D,F=q}if(z===v.length)return n(m,F),je&&Ai(m,z),P;if(F===null){for(;z<v.length;z++)F=d(m,v[z],A),F!==null&&(y=o(F,y,z),b===null?P=F:b.sibling=F,b=F);return je&&Ai(m,z),P}for(F=i(m,F);z<v.length;z++)q=p(F,m,z,v[z],A),q!==null&&(e&&q.alternate!==null&&F.delete(q.key===null?z:q.key),y=o(q,y,z),b===null?P=q:b.sibling=q,b=q);return e&&F.forEach(function(G){return t(m,G)}),je&&Ai(m,z),P}function x(m,y,v,A){var P=eo(v);if(typeof P!="function")throw Error(H(150));if(v=P.call(v),v==null)throw Error(H(151));for(var b=P=null,F=y,z=y=0,q=null,D=v.next();F!==null&&!D.done;z++,D=v.next()){F.index>z?(q=F,F=null):q=F.sibling;var G=f(m,F,D.value,A);if(G===null){F===null&&(F=q);break}e&&F&&G.alternate===null&&t(m,F),y=o(G,y,z),b===null?P=G:b.sibling=G,b=G,F=q}if(D.done)return n(m,F),je&&Ai(m,z),P;if(F===null){for(;!D.done;z++,D=v.next())D=d(m,D.value,A),D!==null&&(y=o(D,y,z),b===null?P=D:b.sibling=D,b=D);return je&&Ai(m,z),P}for(F=i(m,F);!D.done;z++,D=v.next())D=p(F,m,z,D.value,A),D!==null&&(e&&D.alternate!==null&&F.delete(D.key===null?z:D.key),y=o(D,y,z),b===null?P=D:b.sibling=D,b=D);return e&&F.forEach(function(X){return t(m,X)}),je&&Ai(m,z),P}function C(m,y,v,A){if(typeof v=="object"&&v!==null&&v.type===ar&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Zs:e:{for(var P=v.key,b=y;b!==null;){if(b.key===P){if(P=v.type,P===ar){if(b.tag===7){n(m,b.sibling),y=r(b,v.props.children),y.return=m,m=y;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ti&&Sm(P)===b.type){n(m,b.sibling),y=r(b,v.props),y.ref=oo(m,b,v),y.return=m,m=y;break e}n(m,b);break}else t(m,b);b=b.sibling}v.type===ar?(y=ji(v.props.children,m.mode,A,v.key),y.return=m,m=y):(A=Na(v.type,v.key,v.props,null,m.mode,A),A.ref=oo(m,y,v),A.return=m,m=A)}return s(m);case sr:e:{for(b=v.key;y!==null;){if(y.key===b)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(m,y.sibling),y=r(y,v.children||[]),y.return=m,m=y;break e}else{n(m,y);break}else t(m,y);y=y.sibling}y=Pu(v,m.mode,A),y.return=m,m=y}return s(m);case ti:return b=v._init,C(m,y,b(v._payload),A)}if(yo(v))return g(m,y,v,A);if(eo(v))return x(m,y,v,A);ca(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(m,y.sibling),y=r(y,v),y.return=m,m=y):(n(m,y),y=Ou(v,m.mode,A),y.return=m,m=y),s(m)):n(m,y)}return C}var Or=lv(!0),uv=lv(!1),tl=Ei(null),nl=null,mr=null,Mf=null;function Rf(){Mf=mr=nl=null}function Lf(e){var t=tl.current;ze(tl),e._currentValue=t}function Pc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){nl=e,Mf=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(It=!0),e.firstContext=null)}function rn(e){var t=e._currentValue;if(Mf!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(nl===null)throw Error(H(308));mr=e,nl.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var Ri=null;function Ff(e){Ri===null?Ri=[e]:Ri.push(e)}function cv(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,Ff(t)):(n.next=r.next,r.next=n),t.interleaved=n,$n(e,i)}function $n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ni=!1;function zf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fi(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ke&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,$n(e,n)}return r=i.interleaved,r===null?(t.next=t,Ff(i)):(t.next=r.next,r.next=t),i.interleaved=t,$n(e,n)}function Da(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xf(e,n)}}function km(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function il(e,t,n,i){var r=e.updateQueue;ni=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,h=u=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,x=a;switch(f=t,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=$e({},d,f);break e;case 2:ni=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=p,l=d):h=h.next=p,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);Vi|=s,e.lanes=s,e.memoizedState=d}}function Dm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(H(191,r));r.call(i)}}}var Ps={},Dn=Ei(Ps),Xo=Ei(Ps),Jo=Ei(Ps);function Li(e){if(e===Ps)throw Error(H(174));return e}function Bf(e,t){switch(Le(Jo,t),Le(Xo,e),Le(Dn,Ps),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hc(t,e)}ze(Dn),Le(Dn,t)}function Pr(){ze(Dn),ze(Xo),ze(Jo)}function hv(e){Li(Jo.current);var t=Li(Dn.current),n=hc(t,e.type);t!==n&&(Le(Xo,e),Le(Dn,n))}function jf(e){Xo.current===e&&(ze(Dn),ze(Xo))}var Ue=Ei(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Su=[];function Uf(){for(var e=0;e<Su.length;e++)Su[e]._workInProgressVersionPrimary=null;Su.length=0}var Ia=Vn.ReactCurrentDispatcher,ku=Vn.ReactCurrentBatchConfig,Wi=0,He=null,tt=null,rt=null,ol=!1,Io=!1,Zo=0,Kk=0;function ft(){throw Error(H(321))}function Hf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yn(e[n],t[n]))return!1;return!0}function $f(e,t,n,i,r,o){if(Wi=o,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ia.current=e===null||e.memoizedState===null?eD:tD,e=n(i,r),Io){o=0;do{if(Io=!1,Zo=0,25<=o)throw Error(H(301));o+=1,rt=tt=null,t.updateQueue=null,Ia.current=nD,e=n(i,r)}while(Io)}if(Ia.current=sl,t=tt!==null&&tt.next!==null,Wi=0,rt=tt=He=null,ol=!1,t)throw Error(H(300));return e}function Wf(){var e=Zo!==0;return Zo=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?He.memoizedState=rt=e:rt=rt.next=e,rt}function on(){if(tt===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=rt===null?He.memoizedState:rt.next;if(t!==null)rt=t,tt=e;else{if(e===null)throw Error(H(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},rt===null?He.memoizedState=rt=e:rt=rt.next=e}return rt}function es(e,t){return typeof t=="function"?t(e):t}function Du(e){var t=on(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var i=tt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((Wi&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,He.lanes|=h,Vi|=h}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,yn(i,t.memoizedState)||(It=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do o=r.lane,He.lanes|=o,Vi|=o,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Iu(e){var t=on(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=e(o,s.action),s=s.next;while(s!==r);yn(o,t.memoizedState)||(It=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function fv(){}function pv(e,t){var n=He,i=on(),r=t(),o=!yn(i.memoizedState,r);if(o&&(i.memoizedState=r,It=!0),i=i.queue,Vf(yv.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,ts(9,gv.bind(null,n,i,r,t),void 0,null),st===null)throw Error(H(349));Wi&30||mv(n,t,r)}return r}function mv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gv(e,t,n,i){t.value=n,t.getSnapshot=i,vv(t)&&bv(e)}function yv(e,t,n){return n(function(){vv(t)&&bv(e)})}function vv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yn(e,n)}catch{return!0}}function bv(e){var t=$n(e,1);t!==null&&mn(t,e,1,-1)}function Im(e){var t=wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},t.queue=e,e=e.dispatch=Zk.bind(null,He,e),[t.memoizedState,e]}function ts(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Tv(){return on().memoizedState}function Ca(e,t,n,i){var r=wn();He.flags|=e,r.memoizedState=ts(1|t,n,void 0,i===void 0?null:i)}function Cl(e,t,n,i){var r=on();i=i===void 0?null:i;var o=void 0;if(tt!==null){var s=tt.memoizedState;if(o=s.destroy,i!==null&&Hf(i,s.deps)){r.memoizedState=ts(t,n,o,i);return}}He.flags|=e,r.memoizedState=ts(1|t,n,o,i)}function Cm(e,t){return Ca(8390656,8,e,t)}function Vf(e,t){return Cl(2048,8,e,t)}function Ev(e,t){return Cl(4,2,e,t)}function wv(e,t){return Cl(4,4,e,t)}function xv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _v(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,xv.bind(null,t,e),n)}function Yf(){}function Sv(e,t){var n=on();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Hf(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function kv(e,t){var n=on();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Hf(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Dv(e,t,n){return Wi&21?(yn(n,t)||(n=P0(),He.lanes|=n,Vi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=n)}function Xk(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var i=ku.transition;ku.transition={};try{e(!1),t()}finally{Ce=n,ku.transition=i}}function Iv(){return on().memoizedState}function Jk(e,t,n){var i=mi(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cv(e))Av(t,n);else if(n=cv(e,t,n,i),n!==null){var r=wt();mn(n,e,i,r),Ov(n,t,i)}}function Zk(e,t,n){var i=mi(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cv(e))Av(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,yn(a,s)){var l=t.interleaved;l===null?(r.next=r,Ff(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=cv(e,t,r,i),n!==null&&(r=wt(),mn(n,e,i,r),Ov(n,t,i))}}function Cv(e){var t=e.alternate;return e===He||t!==null&&t===He}function Av(e,t){Io=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ov(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xf(e,n)}}var sl={readContext:rn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},eD={readContext:rn,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:rn,useEffect:Cm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4194308,4,xv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ca(4,2,e,t)},useMemo:function(e,t){var n=wn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=wn();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Jk.bind(null,He,e),[i.memoizedState,e]},useRef:function(e){var t=wn();return e={current:e},t.memoizedState=e},useState:Im,useDebugValue:Yf,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=Im(!1),t=e[0];return e=Xk.bind(null,e[1]),wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=He,r=wn();if(je){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),st===null)throw Error(H(349));Wi&30||mv(i,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Cm(yv.bind(null,i,o,e),[e]),i.flags|=2048,ts(9,gv.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=wn(),t=st.identifierPrefix;if(je){var n=Bn,i=zn;n=(i&~(1<<32-pn(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kk++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tD={readContext:rn,useCallback:Sv,useContext:rn,useEffect:Vf,useImperativeHandle:_v,useInsertionEffect:Ev,useLayoutEffect:wv,useMemo:kv,useReducer:Du,useRef:Tv,useState:function(){return Du(es)},useDebugValue:Yf,useDeferredValue:function(e){var t=on();return Dv(t,tt.memoizedState,e)},useTransition:function(){var e=Du(es)[0],t=on().memoizedState;return[e,t]},useMutableSource:fv,useSyncExternalStore:pv,useId:Iv,unstable_isNewReconciler:!1},nD={readContext:rn,useCallback:Sv,useContext:rn,useEffect:Vf,useImperativeHandle:_v,useInsertionEffect:Ev,useLayoutEffect:wv,useMemo:kv,useReducer:Iu,useRef:Tv,useState:function(){return Iu(es)},useDebugValue:Yf,useDeferredValue:function(e){var t=on();return tt===null?t.memoizedState=e:Dv(t,tt.memoizedState,e)},useTransition:function(){var e=Iu(es)[0],t=on().memoizedState;return[e,t]},useMutableSource:fv,useSyncExternalStore:pv,useId:Iv,unstable_isNewReconciler:!1};function dn(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Nc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?Gi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=wt(),r=mi(e),o=jn(i,r);o.payload=t,n!=null&&(o.callback=n),t=fi(e,o,r),t!==null&&(mn(t,e,r,i),Da(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=wt(),r=mi(e),o=jn(i,r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=fi(e,o,r),t!==null&&(mn(t,e,r,i),Da(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wt(),i=mi(e),r=jn(n,i);r.tag=2,t!=null&&(r.callback=t),t=fi(e,r,i),t!==null&&(mn(t,e,i,n),Da(t,e,i))}};function Am(e,t,n,i,r,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):t.prototype&&t.prototype.isPureReactComponent?!qo(n,i)||!qo(r,o):!0}function Pv(e,t,n){var i=!1,r=vi,o=t.contextType;return typeof o=="object"&&o!==null?o=rn(o):(r=At(t)?Hi:yt.current,i=t.contextTypes,o=(i=i!=null)?Cr(e,r):vi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function Om(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function Mc(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},zf(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=rn(o):(o=At(t)?Hi:yt.current,r.context=Cr(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Nc(e,t,o,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Al.enqueueReplaceState(r,r.state,null),il(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var n="",i=t;do n+=A2(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function Cu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var iD=typeof WeakMap=="function"?WeakMap:Map;function Nv(e,t,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){ll||(ll=!0,Vc=i),Rc(e,t)},n}function Mv(e,t,n){n=jn(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){Rc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Rc(e,t),typeof i!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Pm(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new iD;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=yD.bind(null,e,t,n),t.then(e,e))}function Nm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mm(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jn(-1,1),t.tag=2,fi(n,t,1))),n.lanes|=1),e)}var rD=Vn.ReactCurrentOwner,It=!1;function Tt(e,t,n,i){t.child=e===null?uv(t,null,n,i):Or(t,e.child,n,i)}function Rm(e,t,n,i,r){n=n.render;var o=t.ref;return xr(t,r),i=$f(e,t,n,i,o,r),n=Wf(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wn(e,t,r)):(je&&n&&Of(t),t.flags|=1,Tt(e,t,i,r),t.child)}function Lm(e,t,n,i,r){if(e===null){var o=n.type;return typeof o=="function"&&!ep(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rv(e,t,o,i,r)):(e=Na(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(s,i)&&e.ref===t.ref)return Wn(e,t,r)}return t.flags|=1,e=gi(o,i),e.ref=t.ref,e.return=t,t.child=e}function Rv(e,t,n,i,r){if(e!==null){var o=e.memoizedProps;if(qo(o,i)&&e.ref===t.ref)if(It=!1,t.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(It=!0);else return t.lanes=e.lanes,Wn(e,t,r)}return Lc(e,t,n,i,r)}function Lv(e,t,n){var i=t.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(yr,Lt),Lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Le(yr,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Le(yr,Lt),Lt|=i}else o!==null?(i=o.baseLanes|n,t.memoizedState=null):i=n,Le(yr,Lt),Lt|=i;return Tt(e,t,r,n),t.child}function Fv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lc(e,t,n,i,r){var o=At(n)?Hi:yt.current;return o=Cr(t,o),xr(t,r),n=$f(e,t,n,i,o,r),i=Wf(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wn(e,t,r)):(je&&i&&Of(t),t.flags|=1,Tt(e,t,n,r),t.child)}function Fm(e,t,n,i,r){if(At(n)){var o=!0;Ja(t)}else o=!1;if(xr(t,r),t.stateNode===null)Aa(e,t),Pv(t,n,i),Mc(t,n,i,r),i=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=At(n)?Hi:yt.current,u=Cr(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Om(t,s,i,u),ni=!1;var f=t.memoizedState;s.state=f,il(t,i,s,r),l=t.memoizedState,a!==i||f!==l||Ct.current||ni?(typeof h=="function"&&(Nc(t,n,h,i),l=t.memoizedState),(a=ni||Am(t,n,a,i,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,dv(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dn(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=At(n)?Hi:yt.current,l=Cr(t,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Om(t,s,i,l),ni=!1,f=t.memoizedState,s.state=f,il(t,i,s,r);var g=t.memoizedState;a!==d||f!==g||Ct.current||ni?(typeof p=="function"&&(Nc(t,n,p,i),g=t.memoizedState),(u=ni||Am(t,n,u,i,f,g,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=g),s.props=i,s.state=g,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return Fc(e,t,n,i,o,r)}function Fc(e,t,n,i,r,o){Fv(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return r&&wm(t,n,!1),Wn(e,t,o);i=t.stateNode,rD.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=Or(t,e.child,null,o),t.child=Or(t,null,a,o)):Tt(e,t,a,o),t.memoizedState=i.state,r&&wm(t,n,!0),t.child}function zv(e){var t=e.stateNode;t.pendingContext?Em(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Em(e,t.context,!1),Bf(e,t.containerInfo)}function zm(e,t,n,i,r){return Ar(),Nf(r),t.flags|=256,Tt(e,t,n,i),t.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Bc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bv(e,t,n){var i=t.pendingProps,r=Ue.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Le(Ue,r&1),e===null)return Oc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Nl(s,i,0,null),e=ji(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bc(n),t.memoizedState=zc,e):qf(t,s));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return oD(e,t,s,i,a,r,n);if(o){o=i.fallback,s=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=gi(a,o):(o=ji(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=e.child.memoizedState,s=s===null?Bc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=zc,i}return o=e.child,e=o.sibling,i=gi(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function qf(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function da(e,t,n,i){return i!==null&&Nf(i),Or(t,e.child,null,n),e=qf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oD(e,t,n,i,r,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Cu(Error(H(422))),da(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=Nl({mode:"visible",children:i.children},r,0,null),o=ji(o,r,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Or(t,e.child,null,s),t.child.memoizedState=Bc(s),t.memoizedState=zc,o);if(!(t.mode&1))return da(e,t,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(H(419)),i=Cu(o,i,void 0),da(e,t,s,i)}if(a=(s&e.childLanes)!==0,It||a){if(i=st,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,$n(e,r),mn(i,e,r,-1))}return Zf(),i=Cu(Error(H(421))),da(e,t,s,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=vD.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,Bt=hi(r.nextSibling),jt=t,je=!0,fn=null,e!==null&&(Xt[Jt++]=zn,Xt[Jt++]=Bn,Xt[Jt++]=$i,zn=e.id,Bn=e.overflow,$i=t),t=qf(t,i.children),t.flags|=4096,t)}function Bm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Pc(e.return,t,n)}function Au(e,t,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function jv(e,t,n){var i=t.pendingProps,r=i.revealOrder,o=i.tail;if(Tt(e,t,i.children,n),i=Ue.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bm(e,n,t);else if(e.tag===19)Bm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Le(Ue,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Au(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&rl(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Au(t,!0,n,null,o);break;case"together":Au(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Aa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sD(e,t,n){switch(t.tag){case 3:zv(t),Ar();break;case 5:hv(t);break;case 1:At(t.type)&&Ja(t);break;case 4:Bf(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;Le(tl,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Le(Ue,Ue.current&1),t.flags|=128,null):n&t.child.childLanes?Bv(e,t,n):(Le(Ue,Ue.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);Le(Ue,Ue.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return jv(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Le(Ue,Ue.current),i)break;return null;case 22:case 23:return t.lanes=0,Lv(e,t,n)}return Wn(e,t,n)}var Uv,jc,Hv,$v;Uv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jc=function(){};Hv=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Li(Dn.current);var o=null;switch(n){case"input":r=lc(e,r),i=lc(e,i),o=[];break;case"select":r=$e({},r,{value:void 0}),i=$e({},i,{value:void 0}),o=[];break;case"textarea":r=dc(e,r),i=dc(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ka)}fc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Fe("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};$v=function(e,t,n,i){n!==i&&(t.flags|=4)};function so(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function aD(e,t,n){var i=t.pendingProps;switch(Pf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return At(t.type)&&Xa(),pt(t),null;case 3:return i=t.stateNode,Pr(),ze(Ct),ze(yt),Uf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ua(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fn!==null&&(Qc(fn),fn=null))),jc(e,t),pt(t),null;case 5:jf(t);var r=Li(Jo.current);if(n=t.type,e!==null&&t.stateNode!=null)Hv(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(H(166));return pt(t),null}if(e=Li(Dn.current),ua(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[Sn]=t,i[Ko]=o,e=(t.mode&1)!==0,n){case"dialog":Fe("cancel",i),Fe("close",i);break;case"iframe":case"object":case"embed":Fe("load",i);break;case"video":case"audio":for(r=0;r<bo.length;r++)Fe(bo[r],i);break;case"source":Fe("error",i);break;case"img":case"image":case"link":Fe("error",i),Fe("load",i);break;case"details":Fe("toggle",i);break;case"input":Qp(i,o),Fe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Fe("invalid",i);break;case"textarea":Kp(i,o),Fe("invalid",i)}fc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&la(i.textContent,a,e),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&la(i.textContent,a,e),r=["children",""+a]):jo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Fe("scroll",i)}switch(n){case"input":ea(i),Gp(i,o,!0);break;case"textarea":ea(i),Xp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ka)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=y0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(n,{is:i.is}):(e=s.createElement(n),n==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,n),e[Sn]=t,e[Ko]=i,Uv(e,t,!1,!1),t.stateNode=e;e:{switch(s=pc(n,i),n){case"dialog":Fe("cancel",e),Fe("close",e),r=i;break;case"iframe":case"object":case"embed":Fe("load",e),r=i;break;case"video":case"audio":for(r=0;r<bo.length;r++)Fe(bo[r],e);r=i;break;case"source":Fe("error",e),r=i;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),r=i;break;case"details":Fe("toggle",e),r=i;break;case"input":Qp(e,i),r=lc(e,i),Fe("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=$e({},i,{value:void 0}),Fe("invalid",e);break;case"textarea":Kp(e,i),r=dc(e,i),Fe("invalid",e);break;default:r=i}fc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?T0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(e,l):typeof l=="number"&&Uo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Fe("scroll",e):l!=null&&yf(e,o,l,s))}switch(n){case"input":ea(e),Gp(e,i,!1);break;case"textarea":ea(e),Xp(e);break;case"option":i.value!=null&&e.setAttribute("value",""+yi(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?br(e,!!i.multiple,o,!1):i.defaultValue!=null&&br(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)$v(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(H(166));if(n=Li(Jo.current),Li(Dn.current),ua(t)){if(i=t.stateNode,n=t.memoizedProps,i[Sn]=t,(o=i.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:la(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&la(i.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Sn]=t,t.stateNode=i}return pt(t),null;case 13:if(ze(Ue),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&Bt!==null&&t.mode&1&&!(t.flags&128))av(),Ar(),t.flags|=98560,o=!1;else if(o=ua(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(H(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[Sn]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),o=!1}else fn!==null&&(Qc(fn),fn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Ue.current&1?nt===0&&(nt=3):Zf())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Pr(),jc(e,t),e===null&&Qo(t.stateNode.containerInfo),pt(t),null;case 10:return Lf(t.type._context),pt(t),null;case 17:return At(t.type)&&Xa(),pt(t),null;case 19:if(ze(Ue),o=t.memoizedState,o===null)return pt(t),null;if(i=(t.flags&128)!==0,s=o.rendering,s===null)if(i)so(o,!1);else{if(nt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=rl(e),s!==null){for(t.flags|=128,so(o,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)o=n,e=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Le(Ue,Ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ye()>Mr&&(t.flags|=128,i=!0,so(o,!1),t.lanes=4194304)}else{if(!i)if(e=rl(s),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),so(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!je)return pt(t),null}else 2*Ye()-o.renderingStartTime>Mr&&n!==1073741824&&(t.flags|=128,i=!0,so(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ye(),t.sibling=null,n=Ue.current,Le(Ue,i?n&1|2:n&1),t):(pt(t),null);case 22:case 23:return Jf(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Lt&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function lD(e,t){switch(Pf(t),t.tag){case 1:return At(t.type)&&Xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),ze(Ct),ze(yt),Uf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jf(t),null;case 13:if(ze(Ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ue),null;case 4:return Pr(),null;case 10:return Lf(t.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var ha=!1,mt=!1,uD=typeof WeakSet=="function"?WeakSet:Set,Z=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ve(e,t,i)}else n.current=null}function Uc(e,t,n){try{n()}catch(i){Ve(e,t,i)}}var jm=!1;function cD(e,t){if(_c=qa,e=Q0(),Af(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,d=e,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++u===r&&(a=s),f===o&&++h===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:e,selectionRange:n},qa=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,C=g.memoizedState,m=t.stateNode,y=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:dn(t.type,x),C);m.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(A){Ve(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return g=jm,jm=!1,g}function Co(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&Uc(t,n,o)}r=r.next}while(r!==i)}}function Ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Hc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wv(e){var t=e.alternate;t!==null&&(e.alternate=null,Wv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Sn],delete t[Ko],delete t[Ic],delete t[Yk],delete t[qk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vv(e){return e.tag===5||e.tag===3||e.tag===4}function Um(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ka));else if(i!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function Wc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Wc(e,t,n),e=e.sibling;e!==null;)Wc(e,t,n),e=e.sibling}var at=null,hn=!1;function Kn(e,t,n){for(n=n.child;n!==null;)Yv(e,t,n),n=n.sibling}function Yv(e,t,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:mt||gr(n,t);case 6:var i=at,r=hn;at=null,Kn(e,t,n),at=i,hn=r,at!==null&&(hn?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(hn?(e=at,n=n.stateNode,e.nodeType===8?xu(e.parentNode,n):e.nodeType===1&&xu(e,n),Vo(e)):xu(at,n.stateNode));break;case 4:i=at,r=hn,at=n.stateNode.containerInfo,hn=!0,Kn(e,t,n),at=i,hn=r;break;case 0:case 11:case 14:case 15:if(!mt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Uc(n,t,s),r=r.next}while(r!==i)}Kn(e,t,n);break;case 1:if(!mt&&(gr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ve(n,t,a)}Kn(e,t,n);break;case 21:Kn(e,t,n);break;case 22:n.mode&1?(mt=(i=mt)||n.memoizedState!==null,Kn(e,t,n),mt=i):Kn(e,t,n);break;default:Kn(e,t,n)}}function Hm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uD),t.forEach(function(i){var r=bD.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,hn=!1;break e;case 3:at=a.stateNode.containerInfo,hn=!0;break e;case 4:at=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(at===null)throw Error(H(160));Yv(o,s,r),at=null,hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ve(r,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qv(t,e),t=t.sibling}function qv(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),En(e),i&4){try{Co(3,e,e.return),Ol(3,e)}catch(x){Ve(e,e.return,x)}try{Co(5,e,e.return)}catch(x){Ve(e,e.return,x)}}break;case 1:cn(t,e),En(e),i&512&&n!==null&&gr(n,n.return);break;case 5:if(cn(t,e),En(e),i&512&&n!==null&&gr(n,n.return),e.flags&32){var r=e.stateNode;try{Uo(r,"")}catch(x){Ve(e,e.return,x)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&m0(r,o),pc(a,s);var u=pc(a,o);for(s=0;s<l.length;s+=2){var h=l[s],d=l[s+1];h==="style"?T0(r,d):h==="dangerouslySetInnerHTML"?v0(r,d):h==="children"?Uo(r,d):yf(r,h,d,u)}switch(a){case"input":uc(r,o);break;case"textarea":g0(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?br(r,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?br(r,!!o.multiple,o.defaultValue,!0):br(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ko]=o}catch(x){Ve(e,e.return,x)}}break;case 6:if(cn(t,e),En(e),i&4){if(e.stateNode===null)throw Error(H(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(x){Ve(e,e.return,x)}}break;case 3:if(cn(t,e),En(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(t.containerInfo)}catch(x){Ve(e,e.return,x)}break;case 4:cn(t,e),En(e);break;case 13:cn(t,e),En(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Kf=Ye())),i&4&&Hm(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(mt=(u=mt)||h,cn(t,e),mt=u):cn(t,e),En(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(Z=e,h=e.child;h!==null;){for(d=Z=h;Z!==null;){switch(f=Z,p=f.child,f.tag){case 0:case 11:case 14:case 15:Co(4,f,f.return);break;case 1:gr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{t=i,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){Ve(i,n,x)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){Wm(d);continue}}p!==null?(p.return=f,Z=p):Wm(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=b0("display",s))}catch(x){Ve(e,e.return,x)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Ve(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:cn(t,e),En(e),i&4&&Hm(e);break;case 21:break;default:cn(t,e),En(e)}}function En(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vv(n)){var i=n;break e}n=n.return}throw Error(H(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Uo(r,""),i.flags&=-33);var o=Um(e);Wc(e,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Um(e);$c(e,a,s);break;default:throw Error(H(161))}}catch(l){Ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dD(e,t,n){Z=e,Qv(e)}function Qv(e,t,n){for(var i=(e.mode&1)!==0;Z!==null;){var r=Z,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ha;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||mt;a=ha;var u=mt;if(ha=s,(mt=l)&&!u)for(Z=r;Z!==null;)s=Z,l=s.child,s.tag===22&&s.memoizedState!==null?Vm(r):l!==null?(l.return=s,Z=l):Vm(r);for(;o!==null;)Z=o,Qv(o),o=o.sibling;Z=r,ha=a,mt=u}$m(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Z=o):$m(e)}}function $m(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||Ol(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!mt)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:dn(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dm(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dm(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}mt||t.flags&512&&Hc(t)}catch(f){Ve(t,t.return,f)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Wm(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Vm(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ol(4,t)}catch(l){Ve(t,n,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(l){Ve(t,r,l)}}var o=t.return;try{Hc(t)}catch(l){Ve(t,o,l)}break;case 5:var s=t.return;try{Hc(t)}catch(l){Ve(t,s,l)}}}catch(l){Ve(t,t.return,l)}if(t===e){Z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Z=a;break}Z=t.return}}var hD=Math.ceil,al=Vn.ReactCurrentDispatcher,Qf=Vn.ReactCurrentOwner,nn=Vn.ReactCurrentBatchConfig,ke=0,st=null,Je=null,lt=0,Lt=0,yr=Ei(0),nt=0,ns=null,Vi=0,Pl=0,Gf=0,Ao=null,Dt=null,Kf=0,Mr=1/0,Rn=null,ll=!1,Vc=null,pi=null,fa=!1,ai=null,ul=0,Oo=0,Yc=null,Oa=-1,Pa=0;function wt(){return ke&6?Ye():Oa!==-1?Oa:Oa=Ye()}function mi(e){return e.mode&1?ke&2&&lt!==0?lt&-lt:Gk.transition!==null?(Pa===0&&(Pa=P0()),Pa):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:B0(e.type)),e):1}function mn(e,t,n,i){if(50<Oo)throw Oo=0,Yc=null,Error(H(185));Cs(e,n,i),(!(ke&2)||e!==st)&&(e===st&&(!(ke&2)&&(Pl|=n),nt===4&&ri(e,lt)),Ot(e,i),n===1&&ke===0&&!(t.mode&1)&&(Mr=Ye()+500,Il&&wi()))}function Ot(e,t){var n=e.callbackNode;G2(e,t);var i=Ya(e,e===st?lt:0);if(i===0)n!==null&&em(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&em(n),t===1)e.tag===0?Qk(Ym.bind(null,e)):rv(Ym.bind(null,e)),Wk(function(){!(ke&6)&&wi()}),n=null;else{switch(N0(i)){case 1:n=wf;break;case 4:n=A0;break;case 16:n=Va;break;case 536870912:n=O0;break;default:n=Va}n=nb(n,Gv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gv(e,t){if(Oa=-1,Pa=0,ke&6)throw Error(H(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var i=Ya(e,e===st?lt:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=cl(e,i);else{t=i;var r=ke;ke|=2;var o=Xv();(st!==e||lt!==t)&&(Rn=null,Mr=Ye()+500,Bi(e,t));do try{mD();break}catch(a){Kv(e,a)}while(!0);Rf(),al.current=o,ke=r,Je!==null?t=0:(st=null,lt=0,t=nt)}if(t!==0){if(t===2&&(r=bc(e),r!==0&&(i=r,t=qc(e,r))),t===1)throw n=ns,Bi(e,0),ri(e,i),Ot(e,Ye()),n;if(t===6)ri(e,i);else{if(r=e.current.alternate,!(i&30)&&!fD(r)&&(t=cl(e,i),t===2&&(o=bc(e),o!==0&&(i=o,t=qc(e,o))),t===1))throw n=ns,Bi(e,0),ri(e,i),Ot(e,Ye()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(H(345));case 2:Oi(e,Dt,Rn);break;case 3:if(ri(e,i),(i&130023424)===i&&(t=Kf+500-Ye(),10<t)){if(Ya(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){wt(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Dc(Oi.bind(null,e,Dt,Rn),t);break}Oi(e,Dt,Rn);break;case 4:if(ri(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var s=31-pn(i);o=1<<s,s=t[s],s>r&&(r=s),i&=~o}if(i=r,i=Ye()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hD(i/1960))-i,10<i){e.timeoutHandle=Dc(Oi.bind(null,e,Dt,Rn),i);break}Oi(e,Dt,Rn);break;case 5:Oi(e,Dt,Rn);break;default:throw Error(H(329))}}}return Ot(e,Ye()),e.callbackNode===n?Gv.bind(null,e):null}function qc(e,t){var n=Ao;return e.current.memoizedState.isDehydrated&&(Bi(e,t).flags|=256),e=cl(e,t),e!==2&&(t=Dt,Dt=n,t!==null&&Qc(t)),e}function Qc(e){Dt===null?Dt=e:Dt.push.apply(Dt,e)}function fD(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!yn(o(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ri(e,t){for(t&=~Gf,t&=~Pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pn(t),i=1<<n;e[n]=-1,t&=~i}}function Ym(e){if(ke&6)throw Error(H(327));_r();var t=Ya(e,0);if(!(t&1))return Ot(e,Ye()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var i=bc(e);i!==0&&(t=i,n=qc(e,i))}if(n===1)throw n=ns,Bi(e,0),ri(e,t),Ot(e,Ye()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Oi(e,Dt,Rn),Ot(e,Ye()),null}function Xf(e,t){var n=ke;ke|=1;try{return e(t)}finally{ke=n,ke===0&&(Mr=Ye()+500,Il&&wi())}}function Yi(e){ai!==null&&ai.tag===0&&!(ke&6)&&_r();var t=ke;ke|=1;var n=nn.transition,i=Ce;try{if(nn.transition=null,Ce=1,e)return e()}finally{Ce=i,nn.transition=n,ke=t,!(ke&6)&&wi()}}function Jf(){Lt=yr.current,ze(yr)}function Bi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$k(n)),Je!==null)for(n=Je.return;n!==null;){var i=n;switch(Pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xa();break;case 3:Pr(),ze(Ct),ze(yt),Uf();break;case 5:jf(i);break;case 4:Pr();break;case 13:ze(Ue);break;case 19:ze(Ue);break;case 10:Lf(i.type._context);break;case 22:case 23:Jf()}n=n.return}if(st=e,Je=e=gi(e.current,null),lt=Lt=t,nt=0,ns=null,Gf=Pl=Vi=0,Dt=Ao=null,Ri!==null){for(t=0;t<Ri.length;t++)if(n=Ri[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Ri=null}return e}function Kv(e,t){do{var n=Je;try{if(Rf(),Ia.current=sl,ol){for(var i=He.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ol=!1}if(Wi=0,rt=tt=He=null,Io=!1,Zo=0,Qf.current=null,n===null||n.return===null){nt=1,ns=t,Je=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Nm(s);if(p!==null){p.flags&=-257,Mm(p,s,a,o,t),p.mode&1&&Pm(o,u,t),t=p,l=u;var g=t.updateQueue;if(g===null){var x=new Set;x.add(l),t.updateQueue=x}else g.add(l);break e}else{if(!(t&1)){Pm(o,u,t),Zf();break e}l=Error(H(426))}}else if(je&&a.mode&1){var C=Nm(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Mm(C,s,a,o,t),Nf(Nr(l,a));break e}}o=l=Nr(l,a),nt!==4&&(nt=2),Ao===null?Ao=[o]:Ao.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Nv(o,l,t);km(o,m);break e;case 1:a=l;var y=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(pi===null||!pi.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var A=Mv(o,a,t);km(o,A);break e}}o=o.return}while(o!==null)}Zv(n)}catch(P){t=P,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function Xv(){var e=al.current;return al.current=sl,e===null?sl:e}function Zf(){(nt===0||nt===3||nt===2)&&(nt=4),st===null||!(Vi&268435455)&&!(Pl&268435455)||ri(st,lt)}function cl(e,t){var n=ke;ke|=2;var i=Xv();(st!==e||lt!==t)&&(Rn=null,Bi(e,t));do try{pD();break}catch(r){Kv(e,r)}while(!0);if(Rf(),ke=n,al.current=i,Je!==null)throw Error(H(261));return st=null,lt=0,nt}function pD(){for(;Je!==null;)Jv(Je)}function mD(){for(;Je!==null&&!j2();)Jv(Je)}function Jv(e){var t=tb(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?Zv(e):Je=t,Qf.current=null}function Zv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lD(n,t),n!==null){n.flags&=32767,Je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nt=6,Je=null;return}}else if(n=aD(n,t,Lt),n!==null){Je=n;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);nt===0&&(nt=5)}function Oi(e,t,n){var i=Ce,r=nn.transition;try{nn.transition=null,Ce=1,gD(e,t,n,i)}finally{nn.transition=r,Ce=i}return null}function gD(e,t,n,i){do _r();while(ai!==null);if(ke&6)throw Error(H(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(K2(e,o),e===st&&(Je=st=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fa||(fa=!0,nb(Va,function(){return _r(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=nn.transition,nn.transition=null;var s=Ce;Ce=1;var a=ke;ke|=4,Qf.current=null,cD(e,n),qv(n,e),Lk(Sc),qa=!!_c,Sc=_c=null,e.current=n,dD(n),U2(),ke=a,Ce=s,nn.transition=o}else e.current=n;if(fa&&(fa=!1,ai=e,ul=r),o=e.pendingLanes,o===0&&(pi=null),W2(n.stateNode),Ot(e,Ye()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ll)throw ll=!1,e=Vc,Vc=null,e;return ul&1&&e.tag!==0&&_r(),o=e.pendingLanes,o&1?e===Yc?Oo++:(Oo=0,Yc=e):Oo=0,wi(),null}function _r(){if(ai!==null){var e=N0(ul),t=nn.transition,n=Ce;try{if(nn.transition=null,Ce=16>e?16:e,ai===null)var i=!1;else{if(e=ai,ai=null,ul=0,ke&6)throw Error(H(331));var r=ke;for(ke|=4,Z=e.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Z=u;Z!==null;){var h=Z;switch(h.tag){case 0:case 11:case 15:Co(8,h,o)}var d=h.child;if(d!==null)d.return=h,Z=d;else for(;Z!==null;){h=Z;var f=h.sibling,p=h.return;if(Wv(h),h===u){Z=null;break}if(f!==null){f.return=p,Z=f;break}Z=p}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Co(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,Z=m;break e}Z=o.return}}var y=e.current;for(Z=y;Z!==null;){s=Z;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,Z=v;else e:for(s=y;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(P){Ve(a,a.return,P)}if(a===s){Z=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,Z=A;break e}Z=a.return}}if(ke=r,wi(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(xl,e)}catch{}i=!0}return i}finally{Ce=n,nn.transition=t}}return!1}function qm(e,t,n){t=Nr(n,t),t=Nv(e,t,1),e=fi(e,t,1),t=wt(),e!==null&&(Cs(e,1,t),Ot(e,t))}function Ve(e,t,n){if(e.tag===3)qm(e,e,n);else for(;t!==null;){if(t.tag===3){qm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pi===null||!pi.has(i))){e=Nr(n,e),e=Mv(t,e,1),t=fi(t,e,1),e=wt(),t!==null&&(Cs(t,1,e),Ot(t,e));break}}t=t.return}}function yD(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&n,st===e&&(lt&n)===n&&(nt===4||nt===3&&(lt&130023424)===lt&&500>Ye()-Kf?Bi(e,0):Gf|=n),Ot(e,t)}function eb(e,t){t===0&&(e.mode&1?(t=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):t=1);var n=wt();e=$n(e,t),e!==null&&(Cs(e,t,n),Ot(e,n))}function vD(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eb(e,n)}function bD(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(H(314))}i!==null&&i.delete(t),eb(e,n)}var tb;tb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ct.current)It=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return It=!1,sD(e,t,n);It=!!(e.flags&131072)}else It=!1,je&&t.flags&1048576&&ov(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Aa(e,t),e=t.pendingProps;var r=Cr(t,yt.current);xr(t,n),r=$f(null,t,i,e,r,n);var o=Wf();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,At(i)?(o=!0,Ja(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zf(t),r.updater=Al,t.stateNode=r,r._reactInternals=t,Mc(t,i,e,n),t=Fc(null,t,i,!0,o,n)):(t.tag=0,je&&o&&Of(t),Tt(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Aa(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=ED(i),e=dn(i,e),r){case 0:t=Lc(null,t,i,e,n);break e;case 1:t=Fm(null,t,i,e,n);break e;case 11:t=Rm(null,t,i,e,n);break e;case 14:t=Lm(null,t,i,dn(i.type,e),n);break e}throw Error(H(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:dn(i,r),Lc(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:dn(i,r),Fm(e,t,i,r,n);case 3:e:{if(zv(t),e===null)throw Error(H(387));i=t.pendingProps,o=t.memoizedState,r=o.element,dv(e,t),il(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=Nr(Error(H(423)),t),t=zm(e,t,i,n,r);break e}else if(i!==r){r=Nr(Error(H(424)),t),t=zm(e,t,i,n,r);break e}else for(Bt=hi(t.stateNode.containerInfo.firstChild),jt=t,je=!0,fn=null,n=uv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),i===r){t=Wn(e,t,n);break e}Tt(e,t,i,n)}t=t.child}return t;case 5:return hv(t),e===null&&Oc(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,s=r.children,kc(i,r)?s=null:o!==null&&kc(i,o)&&(t.flags|=32),Fv(e,t),Tt(e,t,s,n),t.child;case 6:return e===null&&Oc(t),null;case 13:return Bv(e,t,n);case 4:return Bf(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Or(t,null,i,n):Tt(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:dn(i,r),Rm(e,t,i,r,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,s=r.value,Le(tl,i._currentValue),i._currentValue=s,o!==null)if(yn(o.value,s)){if(o.children===r.children&&!Ct.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=jn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Pc(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Pc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Tt(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,xr(t,n),r=rn(r),i=i(r),t.flags|=1,Tt(e,t,i,n),t.child;case 14:return i=t.type,r=dn(i,t.pendingProps),r=dn(i.type,r),Lm(e,t,i,r,n);case 15:return Rv(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:dn(i,r),Aa(e,t),t.tag=1,At(i)?(e=!0,Ja(t)):e=!1,xr(t,n),Pv(t,i,r),Mc(t,i,r,n),Fc(null,t,i,!0,e,n);case 19:return jv(e,t,n);case 22:return Lv(e,t,n)}throw Error(H(156,t.tag))};function nb(e,t){return C0(e,t)}function TD(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,t,n,i){return new TD(e,t,n,i)}function ep(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ED(e){if(typeof e=="function")return ep(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bf)return 11;if(e===Tf)return 14}return 2}function gi(e,t){var n=e.alternate;return n===null?(n=tn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Na(e,t,n,i,r,o){var s=2;if(i=e,typeof e=="function")ep(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ar:return ji(n.children,r,o,t);case vf:s=8,r|=8;break;case rc:return e=tn(12,n,t,r|2),e.elementType=rc,e.lanes=o,e;case oc:return e=tn(13,n,t,r),e.elementType=oc,e.lanes=o,e;case sc:return e=tn(19,n,t,r),e.elementType=sc,e.lanes=o,e;case h0:return Nl(n,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case c0:s=10;break e;case d0:s=9;break e;case bf:s=11;break e;case Tf:s=14;break e;case ti:s=16,i=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=tn(s,n,t,r),t.elementType=e,t.type=i,t.lanes=o,t}function ji(e,t,n,i){return e=tn(7,e,i,t),e.lanes=n,e}function Nl(e,t,n,i){return e=tn(22,e,i,t),e.elementType=h0,e.lanes=n,e.stateNode={isHidden:!1},e}function Ou(e,t,n){return e=tn(6,e,null,t),e.lanes=n,e}function Pu(e,t,n){return t=tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wD(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tp(e,t,n,i,r,o,s,a,l){return e=new wD(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=tn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zf(o),e}function xD(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function ib(e){if(!e)return vi;e=e._reactInternals;e:{if(Gi(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(At(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(At(n))return iv(e,n,t)}return t}function rb(e,t,n,i,r,o,s,a,l){return e=tp(n,i,!0,e,r,o,s,a,l),e.context=ib(null),n=e.current,i=wt(),r=mi(n),o=jn(i,r),o.callback=t??null,fi(n,o,r),e.current.lanes=r,Cs(e,r,i),Ot(e,i),e}function Ml(e,t,n,i){var r=t.current,o=wt(),s=mi(r);return n=ib(n),t.context===null?t.context=n:t.pendingContext=n,t=jn(o,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=fi(r,t,s),e!==null&&(mn(e,r,s,o),Da(e,r,s)),s}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function np(e,t){Qm(e,t),(e=e.alternate)&&Qm(e,t)}function _D(){return null}var ob=typeof reportError=="function"?reportError:function(e){console.error(e)};function ip(e){this._internalRoot=e}Rl.prototype.render=ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Ml(e,t,null,null)};Rl.prototype.unmount=ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yi(function(){Ml(null,e,null,null)}),t[Hn]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=L0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ii.length&&t!==0&&t<ii[n].priority;n++);ii.splice(n,0,e),n===0&&z0(e)}};function rp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function SD(e,t,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=dl(s);o.call(u)}}var s=rb(t,i,e,0,null,!1,!1,"",Gm);return e._reactRootContainer=s,e[Hn]=s.current,Qo(e.nodeType===8?e.parentNode:e),Yi(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=dl(l);a.call(u)}}var l=tp(e,0,!1,null,null,!1,!1,"",Gm);return e._reactRootContainer=l,e[Hn]=l.current,Qo(e.nodeType===8?e.parentNode:e),Yi(function(){Ml(t,l,n,i)}),l}function Fl(e,t,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=dl(s);a.call(l)}}Ml(t,s,e,r)}else s=SD(n,t,e,r,i);return dl(s)}M0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vo(t.pendingLanes);n!==0&&(xf(t,n|1),Ot(t,Ye()),!(ke&6)&&(Mr=Ye()+500,wi()))}break;case 13:Yi(function(){var i=$n(e,1);if(i!==null){var r=wt();mn(i,e,1,r)}}),np(e,1)}};_f=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var n=wt();mn(t,e,134217728,n)}np(e,134217728)}};R0=function(e){if(e.tag===13){var t=mi(e),n=$n(e,t);if(n!==null){var i=wt();mn(n,e,t,i)}np(e,t)}};L0=function(){return Ce};F0=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}};gc=function(e,t,n){switch(t){case"input":if(uc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=Dl(i);if(!r)throw Error(H(90));p0(i),uc(i,r)}}}break;case"textarea":g0(e,n);break;case"select":t=n.value,t!=null&&br(e,!!n.multiple,t,!1)}};x0=Xf;_0=Yi;var kD={usingClientEntryPoint:!1,Events:[Os,dr,Dl,E0,w0,Xf]},ao={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DD={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=D0(e),e===null?null:e.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||_D,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{xl=pa.inject(DD),kn=pa}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kD;$t.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(t))throw Error(H(200));return xD(e,t,null,n)};$t.createRoot=function(e,t){if(!rp(e))throw Error(H(299));var n=!1,i="",r=ob;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,!1,i,r),e[Hn]=t.current,Qo(e.nodeType===8?e.parentNode:e),new ip(t)};$t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=D0(t),e=e===null?null:e.stateNode,e};$t.flushSync=function(e){return Yi(e)};$t.hydrate=function(e,t,n){if(!Ll(t))throw Error(H(200));return Fl(null,e,t,!0,n)};$t.hydrateRoot=function(e,t,n){if(!rp(e))throw Error(H(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=ob;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=rb(t,null,e,1,n??null,r,!1,o,s),e[Hn]=t.current,Qo(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Rl(t)};$t.render=function(e,t,n){if(!Ll(t))throw Error(H(200));return Fl(null,e,t,!1,n)};$t.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(H(40));return e._reactRootContainer?(Yi(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};$t.unstable_batchedUpdates=Xf;$t.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Ll(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Fl(e,t,n,!1,i)};$t.version="18.3.1-next-f1338f8080-20240426";function sb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sb)}catch(e){console.error(e)}}sb(),s0.exports=$t;var ab=s0.exports,Km=ab;nc.createRoot=Km.createRoot,nc.hydrateRoot=Km.hydrateRoot;var op={};Object.defineProperty(op,"__esModule",{value:!0});op.parse=MD;op.serialize=RD;const ID=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,CD=/^[\u0021-\u003A\u003C-\u007E]*$/,AD=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,OD=/^[\u0020-\u003A\u003D-\u007E]*$/,PD=Object.prototype.toString,ND=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function MD(e,t){const n=new ND,i=e.length;if(i<2)return n;const r=(t==null?void 0:t.decode)||LD;let o=0;do{const s=e.indexOf("=",o);if(s===-1)break;const a=e.indexOf(";",o),l=a===-1?i:a;if(s>l){o=e.lastIndexOf(";",s-1)+1;continue}const u=Xm(e,o,s),h=Jm(e,s,u),d=e.slice(u,h);if(n[d]===void 0){let f=Xm(e,s+1,l),p=Jm(e,l,f);const g=r(e.slice(f,p));n[d]=g}o=l+1}while(o<i);return n}function Xm(e,t,n){do{const i=e.charCodeAt(t);if(i!==32&&i!==9)return t}while(++t<n);return n}function Jm(e,t,n){for(;t>n;){const i=e.charCodeAt(--t);if(i!==32&&i!==9)return t+1}return n}function RD(e,t,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!ID.test(e))throw new TypeError(`argument name is invalid: ${e}`);const r=i(t);if(!CD.test(r))throw new TypeError(`argument val is invalid: ${t}`);let o=e+"="+r;if(!n)return o;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);o+="; Max-Age="+n.maxAge}if(n.domain){if(!AD.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);o+="; Domain="+n.domain}if(n.path){if(!OD.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);o+="; Path="+n.path}if(n.expires){if(!FD(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);o+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.partitioned&&(o+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"none":o+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return o}function LD(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function FD(e){return PD.call(e)==="[object Date]"}/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lb=e=>{throw TypeError(e)},zD=(e,t,n)=>t.has(e)||lb("Cannot "+n),Nu=(e,t,n)=>(zD(e,t,"read from private field"),n?n.call(e):t.get(e)),BD=(e,t,n)=>t.has(e)?lb("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Zm="popstate";function jD(e={}){function t(i,r){let{pathname:o,search:s,hash:a}=i.location;return is("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:bi(r)}return HD(t,n,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ze(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function UD(){return Math.random().toString(36).substring(2,10)}function eg(e,t){return{usr:e.state,key:e.key,idx:t}}function is(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?xi(t):t,state:n,key:t&&t.key||i||UD()}}function bi({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function HD(e,t,n,i={}){let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a="POP",l=null,u=h();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function h(){return(s.state||{idx:null}).idx}function d(){a="POP";let C=h(),m=C==null?null:C-u;u=C,l&&l({action:a,location:x.location,delta:m})}function f(C,m){a="PUSH";let y=is(x.location,C,m);u=h()+1;let v=eg(y,u),A=x.createHref(y);try{s.pushState(v,"",A)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(A)}o&&l&&l({action:a,location:x.location,delta:1})}function p(C,m){a="REPLACE";let y=is(x.location,C,m);u=h();let v=eg(y,u),A=x.createHref(y);s.replaceState(v,"",A),o&&l&&l({action:a,location:x.location,delta:0})}function g(C){return ub(C)}let x={get action(){return a},get location(){return e(r,s)},listen(C){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Zm,d),l=C,()=>{r.removeEventListener(Zm,d),l=null}},createHref(C){return t(r,C)},createURL:g,encodeLocation(C){let m=g(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(C){return s.go(C)}};return x}function ub(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:bi(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var To,tg=class{constructor(e){if(BD(this,To,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(Nu(this,To).has(e))return Nu(this,To).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){Nu(this,To).set(e,t)}};To=new WeakMap;var $D=new Set(["lazy","caseSensitive","path","id","index","children"]);function WD(e){return $D.has(e)}var VD=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function YD(e){return VD.has(e)}function qD(e){return e.index===!0}function hl(e,t,n=[],i={}){return e.map((r,o)=>{let s=[...n,String(o)],a=typeof r.id=="string"?r.id:s.join("-");if(Ee(r.index!==!0||!r.children,"Cannot specify children on an index route"),Ee(!i[a],`Found a route id collision on id "${a}".  Route id's must be globally unique within Data Router usages`),qD(r)){let l={...r,...t(r),id:a};return i[a]=l,l}else{let l={...r,...t(r),id:a,children:void 0};return i[a]=l,r.children&&(l.children=hl(r.children,t,s,i)),l}})}function oi(e,t,n="/"){return Ma(e,t,n,!1)}function Ma(e,t,n,i){let r=typeof t=="string"?xi(t):t,o=sn(r.pathname||"/",n);if(o==null)return null;let s=cb(e);GD(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=sI(o);a=rI(s[l],u,i)}return a}function QD(e,t){let{route:n,pathname:i,params:r}=e;return{id:n.id,pathname:i,params:r,data:t[n.id],handle:n.handle}}function cb(e,t=[],n=[],i=""){let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let u=In([i,l.relativePath]),h=n.concat(l);o.children&&o.children.length>0&&(Ee(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),cb(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:nI(u,o.index),routesMeta:h})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of db(o.path))r(o,s,l)}),t}function db(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=db(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function GD(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:iI(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var KD=/^:[\w-]+$/,XD=3,JD=2,ZD=1,eI=10,tI=-2,ng=e=>e==="*";function nI(e,t){let n=e.split("/"),i=n.length;return n.some(ng)&&(i+=tI),t&&(i+=JD),n.filter(r=>!ng(r)).reduce((r,o)=>r+(KD.test(o)?XD:o===""?ZD:eI),i)}function iI(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function rI(e,t,n=!1){let{routesMeta:i}=e,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,h=o==="/"?t:t.slice(o.length)||"/",d=fl({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),f=l.route;if(!d&&u&&n&&!i[i.length-1].route.index&&(d=fl({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(r,d.params),s.push({params:r,pathname:In([o,d.pathname]),pathnameBase:uI(In([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=In([o,d.pathnameBase]))}return s}function fl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=oI(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,{paramName:h,isOptional:d},f)=>{if(h==="*"){let g=a[f]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const p=a[f];return d&&!p?u[h]=void 0:u[h]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function oI(e,t=!1,n=!0){Ze(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function sI(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ze(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function sn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function aI(e,t="/"){let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?xi(e):e;return{pathname:n?n.startsWith("/")?n:lI(n,t):t,search:cI(i),hash:dI(r)}}function lI(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Mu(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sp(e){let t=hb(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function ap(e,t,n,i=!1){let r;typeof e=="string"?r=xi(e):(r={...e},Ee(!r.pathname||!r.pathname.includes("?"),Mu("?","pathname","search",r)),Ee(!r.pathname||!r.pathname.includes("#"),Mu("#","pathname","hash",r)),Ee(!r.search||!r.search.includes("#"),Mu("#","search","hash",r)));let o=e===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!i&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=aI(r,a),u=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}var In=e=>e.join("/").replace(/\/\/+/g,"/"),uI=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cI=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dI=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,pl=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function rs(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var fb=["POST","PUT","PATCH","DELETE"],hI=new Set(fb),fI=["GET",...fb],pI=new Set(fI),mI=new Set([301,302,303,307,308]),gI=new Set([307,308]),Ru={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yI={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},lo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},lp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vI=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),pb="remix-router-transitions",mb=Symbol("ResetLoaderData");function bI(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Ee(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],r=e.mapRouteProperties||vI,o={},s=hl(e.routes,r,void 0,o),a,l=e.basename||"/",u=e.dataStrategy||_I,h={unstable_middleware:!1,...e.future},d=null,f=new Set,p=null,g=null,x=null,C=e.hydrationData!=null,m=oi(s,e.history.location,l),y=!1,v=null,A;if(m==null&&!e.patchRoutesOnNavigation){let k=Kt(404,{pathname:e.history.location.pathname}),{matches:I,route:N}=pg(s);A=!0,m=I,v={[N.id]:k}}else if(m&&!e.hydrationData&&Qs(m,s,e.history.location.pathname).active&&(m=null),m)if(m.some(k=>k.route.lazy))A=!1;else if(!m.some(k=>k.route.loader))A=!0;else{let k=e.hydrationData?e.hydrationData.loaderData:null,I=e.hydrationData?e.hydrationData.errors:null;if(I){let N=m.findIndex(U=>I[U.route.id]!==void 0);A=m.slice(0,N+1).every(U=>!Kc(U.route,k,I))}else A=m.every(N=>!Kc(N.route,k,I))}else{A=!1,m=[];let k=Qs(null,s,e.history.location.pathname);k.active&&k.matches&&(y=!0,m=k.matches)}let P,b={historyAction:e.history.action,location:e.history.location,matches:m,initialized:A,navigation:Ru,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||v,fetchers:new Map,blockers:new Map},F="POP",z=!1,q,D=!1,G=new Map,X=null,pe=!1,ie=!1,te=new Set,le=new Map,Te=0,V=-1,J=new Map,w=new Set,de=new Map,ge=new Map,S=new Set,Oe=new Map,ct,Se=null;function Vt(){if(d=e.history.listen(({action:k,location:I,delta:N})=>{if(ct){ct(),ct=void 0;return}Ze(Oe.size===0||N!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let U=qt({currentLocation:b.location,nextLocation:I,historyAction:k});if(U&&N!=null){let K=new Promise(ne=>{ct=ne});e.history.go(N*-1),un(U,{state:"blocked",location:I,proceed(){un(U,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),K.then(()=>e.history.go(N))},reset(){let ne=new Map(b.blockers);ne.set(U,lo),We({blockers:ne})}});return}return Nn(k,I)}),n){RI(t,G);let k=()=>LI(t,G);t.addEventListener("pagehide",k),X=()=>t.removeEventListener("pagehide",k)}return b.initialized||Nn("POP",b.location,{initialHydration:!0}),P}function bn(){d&&d(),X&&X(),f.clear(),q&&q.abort(),b.fetchers.forEach((k,I)=>ve(I)),b.blockers.forEach((k,I)=>dt(I))}function qn(k){return f.add(k),()=>f.delete(k)}function We(k,I={}){b={...b,...k};let N=[],U=[];b.fetchers.forEach((K,ne)=>{K.state==="idle"&&(S.has(ne)?N.push(ne):U.push(ne))}),S.forEach(K=>{!b.fetchers.has(K)&&!le.has(K)&&N.push(K)}),[...f].forEach(K=>K(b,{deletedFetchers:N,viewTransitionOpts:I.viewTransitionOpts,flushSync:I.flushSync===!0})),N.forEach(K=>ve(K)),U.forEach(K=>b.fetchers.delete(K))}function ln(k,I,{flushSync:N}={}){var se,he;let U=b.actionData!=null&&b.navigation.formMethod!=null&&zt(b.navigation.formMethod)&&b.navigation.state==="loading"&&((se=k.state)==null?void 0:se._isRedirect)!==!0,K;I.actionData?Object.keys(I.actionData).length>0?K=I.actionData:K=null:U?K=b.actionData:K=null;let ne=I.loaderData?hg(b.loaderData,I.loaderData,I.matches||[],I.errors):b.loaderData,ue=b.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((oe,ye)=>ue.set(ye,lo)));let ee=z===!0||b.navigation.formMethod!=null&&zt(b.navigation.formMethod)&&((he=k.state)==null?void 0:he._isRedirect)!==!0;a&&(s=a,a=void 0),pe||F==="POP"||(F==="PUSH"?e.history.push(k,k.state):F==="REPLACE"&&e.history.replace(k,k.state));let re;if(F==="POP"){let oe=G.get(b.location.pathname);oe&&oe.has(k.pathname)?re={currentLocation:b.location,nextLocation:k}:G.has(k.pathname)&&(re={currentLocation:k,nextLocation:b.location})}else if(D){let oe=G.get(b.location.pathname);oe?oe.add(k.pathname):(oe=new Set([k.pathname]),G.set(b.location.pathname,oe)),re={currentLocation:b.location,nextLocation:k}}We({...I,actionData:K,loaderData:ne,historyAction:F,location:k,initialized:!0,navigation:Ru,revalidation:"idle",restoreScrollPosition:jp(k,I.matches||b.matches),preventScrollReset:ee,blockers:ue},{viewTransitionOpts:re,flushSync:N===!0}),F="POP",z=!1,D=!1,pe=!1,ie=!1,Se==null||Se.resolve(),Se=null}async function Hs(k,I){if(typeof k=="number"){e.history.go(k);return}let N=Gc(b.location,b.matches,l,k,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:U,submission:K,error:ne}=ig(!1,N,I),ue=b.location,ee=is(b.location,U,I&&I.state);ee={...ee,...e.history.encodeLocation(ee)};let re=I&&I.replace!=null?I.replace:void 0,se="PUSH";re===!0?se="REPLACE":re===!1||K!=null&&zt(K.formMethod)&&K.formAction===b.location.pathname+b.location.search&&(se="REPLACE");let he=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,oe=(I&&I.flushSync)===!0,ye=qt({currentLocation:ue,nextLocation:ee,historyAction:se});if(ye){un(ye,{state:"blocked",location:ee,proceed(){un(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),Hs(k,I)},reset(){let Ne=new Map(b.blockers);Ne.set(ye,lo),We({blockers:Ne})}});return}await Nn(se,ee,{submission:K,pendingError:ne,preventScrollReset:he,replace:I&&I.replace,enableViewTransition:I&&I.viewTransition,flushSync:oe})}function tu(){Se||(Se=FI()),Gr(),We({revalidation:"loading"});let k=Se.promise;return b.navigation.state==="submitting"?k:b.navigation.state==="idle"?(Nn(b.historyAction,b.location,{startUninterruptedRevalidation:!0}),k):(Nn(F||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:D===!0}),k)}async function Nn(k,I,N){q&&q.abort(),q=null,F=k,pe=(N&&N.startUninterruptedRevalidation)===!0,PT(b.location,b.matches),z=(N&&N.preventScrollReset)===!0,D=(N&&N.enableViewTransition)===!0;let U=a||s,K=N&&N.overrideNavigation,ne=N!=null&&N.initialHydration&&b.matches&&b.matches.length>0&&!y?b.matches:oi(U,I,l),ue=(N&&N.flushSync)===!0;if(ne&&b.initialized&&!ie&&AI(b.location,I)&&!(N&&N.submission&&zt(N.submission.formMethod))){ln(I,{matches:ne},{flushSync:ue});return}let ee=Qs(ne,U,I.pathname);if(ee.active&&ee.matches&&(ne=ee.matches),!ne){let{error:ht,notFoundMatches:Nt,route:De}=ru(I.pathname);ln(I,{matches:Nt,loaderData:{},errors:{[De.id]:ht}},{flushSync:ue});return}q=new AbortController;let re=rr(e.history,I,q.signal,N&&N.submission),se=new tg(e.unstable_getContext?await e.unstable_getContext():void 0),he;if(N&&N.pendingError)he=[Pi(ne).route.id,{type:"error",error:N.pendingError}];else if(N&&N.submission&&zt(N.submission.formMethod)){let ht=await $s(re,I,N.submission,ne,se,ee.active,N&&N.initialHydration===!0,{replace:N.replace,flushSync:ue});if(ht.shortCircuited)return;if(ht.pendingActionResult){let[Nt,De]=ht.pendingActionResult;if(Ft(De)&&rs(De.error)&&De.error.status===404){q=null,ln(I,{matches:ht.matches,loaderData:{},errors:{[Nt]:De.error}});return}}ne=ht.matches||ne,he=ht.pendingActionResult,K=Lu(I,N.submission),ue=!1,ee.active=!1,re=rr(e.history,re.url,re.signal)}let{shortCircuited:oe,matches:ye,loaderData:Ne,errors:et}=await Ws(re,I,ne,se,ee.active,K,N&&N.submission,N&&N.fetcherSubmission,N&&N.replace,N&&N.initialHydration===!0,ue,he);oe||(q=null,ln(I,{matches:ye||ne,...fg(he),loaderData:Ne,errors:et}))}async function $s(k,I,N,U,K,ne,ue,ee={}){Gr();let re=NI(I,N);if(We({navigation:re},{flushSync:ee.flushSync===!0}),ne){let oe=await Gs(U,I.pathname,k.signal);if(oe.type==="aborted")return{shortCircuited:!0};if(oe.type==="error"){let ye=Pi(oe.partialMatches).route.id;return{matches:oe.partialMatches,pendingActionResult:[ye,{type:"error",error:oe.error}]}}else if(oe.matches)U=oe.matches;else{let{notFoundMatches:ye,error:Ne,route:et}=ru(I.pathname);return{matches:ye,pendingActionResult:[et.id,{type:"error",error:Ne}]}}}let se,he=Eo(U,I);if(!he.route.action&&!he.route.lazy)se={type:"error",error:Kt(405,{method:k.method,pathname:I.pathname,routeId:he.route.id})};else{let oe=Sr(r,o,k,U,he,ue?[]:i,K),ye=await Si(k,oe,K,null);if(se=ye[he.route.id],!se){for(let Ne of U)if(ye[Ne.route.id]){se=ye[Ne.route.id];break}}if(k.signal.aborted)return{shortCircuited:!0}}if(Fi(se)){let oe;return ee&&ee.replace!=null?oe=ee.replace:oe=ug(se.response.headers.get("Location"),new URL(k.url),l)===b.location.pathname+b.location.search,await Mn(k,se,!0,{submission:N,replace:oe}),{shortCircuited:!0}}if(Ft(se)){let oe=Pi(U,he.route.id);return(ee&&ee.replace)!==!0&&(F="PUSH"),{matches:U,pendingActionResult:[oe.route.id,se,he.route.id]}}return{matches:U,pendingActionResult:[he.route.id,se]}}async function Ws(k,I,N,U,K,ne,ue,ee,re,se,he,oe){let ye=ne||Lu(I,ue),Ne=ue||ee||gg(ye),et=!pe&&!se;if(K){if(et){let Gt=Qr(oe);We({navigation:ye,...Gt!==void 0?{actionData:Gt}:{}},{flushSync:he})}let Ae=await Gs(N,I.pathname,k.signal);if(Ae.type==="aborted")return{shortCircuited:!0};if(Ae.type==="error"){let Gt=Pi(Ae.partialMatches).route.id;return{matches:Ae.partialMatches,loaderData:{},errors:{[Gt]:Ae.error}}}else if(Ae.matches)N=Ae.matches;else{let{error:Gt,notFoundMatches:Gn,route:Xs}=ru(I.pathname);return{matches:Gn,loaderData:{},errors:{[Xs.id]:Gt}}}}let ht=a||s,{dsMatches:Nt,revalidatingFetchers:De}=rg(k,U,r,o,e.history,b,N,Ne,I,se?[]:i,se===!0,ie,te,S,de,w,ht,l,e.patchRoutesOnNavigation!=null,oe);if(V=++Te,!e.dataStrategy&&!Nt.some(Ae=>Ae.shouldLoad)&&De.length===0){let Ae=Yt();return ln(I,{matches:N,loaderData:{},errors:oe&&Ft(oe[1])?{[oe[0]]:oe[1].error}:null,...fg(oe),...Ae?{fetchers:new Map(b.fetchers)}:{}},{flushSync:he}),{shortCircuited:!0}}if(et){let Ae={};if(!K){Ae.navigation=ye;let Gt=Qr(oe);Gt!==void 0&&(Ae.actionData=Gt)}De.length>0&&(Ae.fetchers=nu(De)),We(Ae,{flushSync:he})}De.forEach(Ae=>{Qe(Ae.key),Ae.controller&&le.set(Ae.key,Ae.controller)});let Kr=()=>De.forEach(Ae=>Qe(Ae.key));q&&q.signal.addEventListener("abort",Kr);let{loaderResults:Di,fetcherResults:Xr}=await qs(Nt,De,k,U);if(k.signal.aborted)return{shortCircuited:!0};q&&q.signal.removeEventListener("abort",Kr),De.forEach(Ae=>le.delete(Ae.key));let Qt=ma(Di);if(Qt)return await Mn(k,Qt.result,!0,{replace:re}),{shortCircuited:!0};if(Qt=ma(Xr),Qt)return w.add(Qt.key),await Mn(k,Qt.result,!0,{replace:re}),{shortCircuited:!0};let{loaderData:Jr,errors:Zr}=dg(b,N,Di,oe,De,Xr);se&&b.errors&&(Zr={...b.errors,...Zr});let ou=Yt(),Ii=Qn(V),Ks=ou||Ii||De.length>0;return{matches:N,loaderData:Jr,errors:Zr,...Ks?{fetchers:new Map(b.fetchers)}:{}}}function Qr(k){if(k&&!Ft(k[1]))return{[k[0]]:k[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function nu(k){return k.forEach(I=>{let N=b.fetchers.get(I.key),U=uo(void 0,N?N.data:void 0);b.fetchers.set(I.key,U)}),new Map(b.fetchers)}async function Vs(k,I,N,U){Qe(k);let K=(U&&U.flushSync)===!0,ne=a||s,ue=Gc(b.location,b.matches,l,N,I,U==null?void 0:U.relative),ee=oi(ne,ue,l),re=Qs(ee,ne,ue);if(re.active&&re.matches&&(ee=re.matches),!ee){Y(k,I,Kt(404,{pathname:ue}),{flushSync:K});return}let{path:se,submission:he,error:oe}=ig(!0,ue,U);if(oe){Y(k,I,oe,{flushSync:K});return}let ye=Eo(ee,se),Ne=new tg(e.unstable_getContext?await e.unstable_getContext():void 0),et=(U&&U.preventScrollReset)===!0;if(he&&zt(he.formMethod)){await Ys(k,I,se,ye,ee,Ne,re.active,K,et,he);return}de.set(k,{routeId:I,path:se}),await iu(k,I,se,ye,ee,Ne,re.active,K,et,he)}async function Ys(k,I,N,U,K,ne,ue,ee,re,se){Gr(),de.delete(k);function he(Ge){if(!Ge.route.action&&!Ge.route.lazy){let tr=Kt(405,{method:se.formMethod,pathname:N,routeId:I});return Y(k,I,tr,{flushSync:ee}),!0}return!1}if(!ue&&he(U))return;let oe=b.fetchers.get(k);L(k,MI(se,oe),{flushSync:ee});let ye=new AbortController,Ne=rr(e.history,N,ye.signal,se);if(ue){let Ge=await Gs(K,N,Ne.signal,k);if(Ge.type==="aborted")return;if(Ge.type==="error"){Y(k,I,Ge.error,{flushSync:ee});return}else if(Ge.matches){if(K=Ge.matches,U=Eo(K,N),he(U))return}else{Y(k,I,Kt(404,{pathname:N}),{flushSync:ee});return}}le.set(k,ye);let et=Te,ht=Sr(r,o,Ne,K,U,i,ne),De=(await Si(Ne,ht,ne,k))[U.route.id];if(Ne.signal.aborted){le.get(k)===ye&&le.delete(k);return}if(S.has(k)){if(Fi(De)||Ft(De)){L(k,Jn(void 0));return}}else{if(Fi(De))if(le.delete(k),V>et){L(k,Jn(void 0));return}else return w.add(k),L(k,uo(se)),Mn(Ne,De,!1,{fetcherSubmission:se,preventScrollReset:re});if(Ft(De)){Y(k,I,De.error);return}}let Kr=b.navigation.location||b.location,Di=rr(e.history,Kr,ye.signal),Xr=a||s,Qt=b.navigation.state!=="idle"?oi(Xr,b.navigation.location,l):b.matches;Ee(Qt,"Didn't find any matches after fetcher action");let Jr=++Te;J.set(k,Jr);let Zr=uo(se,De.data);b.fetchers.set(k,Zr);let{dsMatches:ou,revalidatingFetchers:Ii}=rg(Di,ne,r,o,e.history,b,Qt,se,Kr,i,!1,ie,te,S,de,w,Xr,l,e.patchRoutesOnNavigation!=null,[U.route.id,De]);Ii.filter(Ge=>Ge.key!==k).forEach(Ge=>{let tr=Ge.key,Up=b.fetchers.get(tr),RT=uo(void 0,Up?Up.data:void 0);b.fetchers.set(tr,RT),Qe(tr),Ge.controller&&le.set(tr,Ge.controller)}),We({fetchers:new Map(b.fetchers)});let Ks=()=>Ii.forEach(Ge=>Qe(Ge.key));ye.signal.addEventListener("abort",Ks);let{loaderResults:Ae,fetcherResults:Gt}=await qs(ou,Ii,Di,ne);if(ye.signal.aborted)return;if(ye.signal.removeEventListener("abort",Ks),J.delete(k),le.delete(k),Ii.forEach(Ge=>le.delete(Ge.key)),b.fetchers.has(k)){let Ge=Jn(De.data);b.fetchers.set(k,Ge)}let Gn=ma(Ae);if(Gn)return Mn(Di,Gn.result,!1,{preventScrollReset:re});if(Gn=ma(Gt),Gn)return w.add(Gn.key),Mn(Di,Gn.result,!1,{preventScrollReset:re});let{loaderData:Xs,errors:su}=dg(b,Qt,Ae,void 0,Ii,Gt);Qn(Jr),b.navigation.state==="loading"&&Jr>V?(Ee(F,"Expected pending action"),q&&q.abort(),ln(b.navigation.location,{matches:Qt,loaderData:Xs,errors:su,fetchers:new Map(b.fetchers)})):(We({errors:su,loaderData:hg(b.loaderData,Xs,Qt,su),fetchers:new Map(b.fetchers)}),ie=!1)}async function iu(k,I,N,U,K,ne,ue,ee,re,se){let he=b.fetchers.get(k);L(k,uo(se,he?he.data:void 0),{flushSync:ee});let oe=new AbortController,ye=rr(e.history,N,oe.signal);if(ue){let De=await Gs(K,N,ye.signal,k);if(De.type==="aborted")return;if(De.type==="error"){Y(k,I,De.error,{flushSync:ee});return}else if(De.matches)K=De.matches,U=Eo(K,N);else{Y(k,I,Kt(404,{pathname:N}),{flushSync:ee});return}}le.set(k,oe);let Ne=Te,et=Sr(r,o,ye,K,U,i,ne),Nt=(await Si(ye,et,ne,k))[U.route.id];if(le.get(k)===oe&&le.delete(k),!ye.signal.aborted){if(S.has(k)){L(k,Jn(void 0));return}if(Fi(Nt))if(V>Ne){L(k,Jn(void 0));return}else{w.add(k),await Mn(ye,Nt,!1,{preventScrollReset:re});return}if(Ft(Nt)){Y(k,I,Nt.error);return}L(k,Jn(Nt.data))}}async function Mn(k,I,N,{submission:U,fetcherSubmission:K,preventScrollReset:ne,replace:ue}={}){I.response.headers.has("X-Remix-Revalidate")&&(ie=!0);let ee=I.response.headers.get("Location");Ee(ee,"Expected a Location header on the redirect Response"),ee=ug(ee,new URL(k.url),l);let re=is(b.location,ee,{_isRedirect:!0});if(n){let et=!1;if(I.response.headers.has("X-Remix-Reload-Document"))et=!0;else if(lp.test(ee)){const ht=ub(ee,!0);et=ht.origin!==t.location.origin||sn(ht.pathname,l)==null}if(et){ue?t.location.replace(ee):t.location.assign(ee);return}}q=null;let se=ue===!0||I.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:he,formAction:oe,formEncType:ye}=b.navigation;!U&&!K&&he&&oe&&ye&&(U=gg(b.navigation));let Ne=U||K;if(gI.has(I.response.status)&&Ne&&zt(Ne.formMethod))await Nn(se,re,{submission:{...Ne,formAction:ee},preventScrollReset:ne||z,enableViewTransition:N?D:void 0});else{let et=Lu(re,U);await Nn(se,re,{overrideNavigation:et,fetcherSubmission:K,preventScrollReset:ne||z,enableViewTransition:N?D:void 0})}}async function Si(k,I,N,U){let K,ne={};try{K=await SI(u,k,I,U,N,!1)}catch(ue){return I.filter(ee=>ee.shouldLoad).forEach(ee=>{ne[ee.route.id]={type:"error",error:ue}}),ne}if(k.signal.aborted)return ne;for(let[ue,ee]of Object.entries(K))if(OI(ee)){let re=ee.result;ne[ue]={type:"redirect",response:II(re,k,ue,I,l)}}else ne[ue]=await DI(ee);return ne}async function qs(k,I,N,U){let K=Si(N,k,U,null),ne=Promise.all(I.map(async re=>{if(re.matches&&re.match&&re.request&&re.controller){let he=(await Si(re.request,re.matches,U,re.key))[re.match.route.id];return{[re.key]:he}}else return Promise.resolve({[re.key]:{type:"error",error:Kt(404,{pathname:re.path})}})})),ue=await K,ee=(await ne).reduce((re,se)=>Object.assign(re,se),{});return{loaderResults:ue,fetcherResults:ee}}function Gr(){ie=!0,de.forEach((k,I)=>{le.has(I)&&te.add(I),Qe(I)})}function L(k,I,N={}){b.fetchers.set(k,I),We({fetchers:new Map(b.fetchers)},{flushSync:(N&&N.flushSync)===!0})}function Y(k,I,N,U={}){let K=Pi(b.matches,I);ve(k),We({errors:{[K.route.id]:N},fetchers:new Map(b.fetchers)},{flushSync:(U&&U.flushSync)===!0})}function ce(k){return ge.set(k,(ge.get(k)||0)+1),S.has(k)&&S.delete(k),b.fetchers.get(k)||yI}function ve(k){let I=b.fetchers.get(k);le.has(k)&&!(I&&I.state==="loading"&&J.has(k))&&Qe(k),de.delete(k),J.delete(k),w.delete(k),S.delete(k),te.delete(k),b.fetchers.delete(k)}function Ie(k){let I=(ge.get(k)||0)-1;I<=0?(ge.delete(k),S.add(k)):ge.set(k,I),We({fetchers:new Map(b.fetchers)})}function Qe(k){let I=le.get(k);I&&(I.abort(),le.delete(k))}function Tn(k){for(let I of k){let N=ce(I),U=Jn(N.data);b.fetchers.set(I,U)}}function Yt(){let k=[],I=!1;for(let N of w){let U=b.fetchers.get(N);Ee(U,`Expected fetcher: ${N}`),U.state==="loading"&&(w.delete(N),k.push(N),I=!0)}return Tn(k),I}function Qn(k){let I=[];for(let[N,U]of J)if(U<k){let K=b.fetchers.get(N);Ee(K,`Expected fetcher: ${N}`),K.state==="loading"&&(Qe(N),J.delete(N),I.push(N))}return Tn(I),I.length>0}function ki(k,I){let N=b.blockers.get(k)||lo;return Oe.get(k)!==I&&Oe.set(k,I),N}function dt(k){b.blockers.delete(k),Oe.delete(k)}function un(k,I){let N=b.blockers.get(k)||lo;Ee(N.state==="unblocked"&&I.state==="blocked"||N.state==="blocked"&&I.state==="blocked"||N.state==="blocked"&&I.state==="proceeding"||N.state==="blocked"&&I.state==="unblocked"||N.state==="proceeding"&&I.state==="unblocked",`Invalid blocker state transition: ${N.state} -> ${I.state}`);let U=new Map(b.blockers);U.set(k,I),We({blockers:U})}function qt({currentLocation:k,nextLocation:I,historyAction:N}){if(Oe.size===0)return;Oe.size>1&&Ze(!1,"A router only supports one blocker at a time");let U=Array.from(Oe.entries()),[K,ne]=U[U.length-1],ue=b.blockers.get(K);if(!(ue&&ue.state==="proceeding")&&ne({currentLocation:k,nextLocation:I,historyAction:N}))return K}function ru(k){let I=Kt(404,{pathname:k}),N=a||s,{matches:U,route:K}=pg(N);return{notFoundMatches:U,route:K,error:I}}function OT(k,I,N){if(p=k,x=I,g=N||null,!C&&b.navigation===Ru){C=!0;let U=jp(b.location,b.matches);U!=null&&We({restoreScrollPosition:U})}return()=>{p=null,x=null,g=null}}function Bp(k,I){return g&&g(k,I.map(U=>QD(U,b.loaderData)))||k.key}function PT(k,I){if(p&&x){let N=Bp(k,I);p[N]=x()}}function jp(k,I){if(p){let N=Bp(k,I),U=p[N];if(typeof U=="number")return U}return null}function Qs(k,I,N){if(e.patchRoutesOnNavigation)if(k){if(Object.keys(k[0].params).length>0)return{active:!0,matches:Ma(I,N,l,!0)}}else return{active:!0,matches:Ma(I,N,l,!0)||[]};return{active:!1,matches:null}}async function Gs(k,I,N,U){if(!e.patchRoutesOnNavigation)return{type:"success",matches:k};let K=k;for(;;){let ne=a==null,ue=a||s,ee=o;try{await e.patchRoutesOnNavigation({signal:N,path:I,matches:K,fetcherKey:U,patch:(he,oe)=>{N.aborted||og(he,oe,ue,ee,r)}})}catch(he){return{type:"error",error:he,partialMatches:K}}finally{ne&&!N.aborted&&(s=[...s])}if(N.aborted)return{type:"aborted"};let re=oi(ue,I,l);if(re)return{type:"success",matches:re};let se=Ma(ue,I,l,!0);if(!se||K.length===se.length&&K.every((he,oe)=>he.route.id===se[oe].route.id))return{type:"success",matches:null};K=se}}function NT(k){o={},a=hl(k,r,void 0,o)}function MT(k,I){let N=a==null;og(k,I,a||s,o,r),N&&(s=[...s],We({}))}return P={get basename(){return l},get future(){return h},get state(){return b},get routes(){return s},get window(){return t},initialize:Vt,subscribe:qn,enableScrollRestoration:OT,navigate:Hs,fetch:Vs,revalidate:tu,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:ce,deleteFetcher:Ie,dispose:bn,getBlocker:ki,deleteBlocker:dt,patchRoutes:MT,_internalFetchControllers:le,_internalSetRoutes:NT},P}function TI(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Gc(e,t,n,i,r,o){let s,a;if(r){s=[];for(let u of t)if(s.push(u),u.route.id===r){a=u;break}}else s=t,a=t[t.length-1];let l=ap(i||".",sp(s),sn(e.pathname,n)||e.pathname,o==="path");if(i==null&&(l.search=e.search,l.hash=e.hash),(i==null||i===""||i===".")&&a){let u=up(l.search);if(a.route.index&&!u)l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index";else if(!a.route.index&&u){let h=new URLSearchParams(l.search),d=h.getAll("index");h.delete("index"),d.filter(p=>p).forEach(p=>h.append("index",p));let f=h.toString();l.search=f?`?${f}`:""}}return n!=="/"&&(l.pathname=l.pathname==="/"?n:In([n,l.pathname])),bi(l)}function ig(e,t,n){if(!n||!TI(n))return{path:t};if(n.formMethod&&!PI(n.formMethod))return{path:t,error:Kt(405,{method:n.formMethod})};let i=()=>({path:t,error:Kt(400,{type:"invalid-body"})}),o=(n.formMethod||"get").toUpperCase(),s=Eb(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!zt(o))return i();let d=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((f,[p,g])=>`${f}${p}=${g}
`,""):String(n.body);return{path:t,submission:{formMethod:o,formAction:s,formEncType:n.formEncType,formData:void 0,json:void 0,text:d}}}else if(n.formEncType==="application/json"){if(!zt(o))return i();try{let d=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:o,formAction:s,formEncType:n.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}Ee(typeof FormData=="function","FormData is not available in this environment");let a,l;if(n.formData)a=Jc(n.formData),l=n.formData;else if(n.body instanceof FormData)a=Jc(n.body),l=n.body;else if(n.body instanceof URLSearchParams)a=n.body,l=cg(a);else if(n.body==null)a=new URLSearchParams,l=new FormData;else try{a=new URLSearchParams(n.body),l=cg(a)}catch{return i()}let u={formMethod:o,formAction:s,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:l,json:void 0,text:void 0};if(zt(u.formMethod))return{path:t,submission:u};let h=xi(t);return e&&h.search&&up(h.search)&&a.append("index",""),h.search=`?${a}`,{path:bi(h),submission:u}}function rg(e,t,n,i,r,o,s,a,l,u,h,d,f,p,g,x,C,m,y,v){var pe;let A=v?Ft(v[1])?v[1].error:v[1].data:void 0,P=r.createURL(o.location),b=r.createURL(l),F;if(h&&o.errors){let ie=Object.keys(o.errors)[0];F=s.findIndex(te=>te.route.id===ie)}else if(v&&Ft(v[1])){let ie=v[0];F=s.findIndex(te=>te.route.id===ie)-1}let z=v?v[1].statusCode:void 0,q=z&&z>=400,D={currentUrl:P,currentParams:((pe=o.matches[0])==null?void 0:pe.params)||{},nextUrl:b,nextParams:s[0].params,...a,actionResult:A,actionStatus:z},G=s.map((ie,te)=>{let{route:le}=ie,Te=null;if(F!=null&&te>F?Te=!1:le.lazy?Te=!0:le.loader==null?Te=!1:h?Te=Kc(le,o.loaderData,o.errors):EI(o.loaderData,o.matches[te],ie)&&(Te=!0),Te!==null)return Xc(n,i,e,ie,u,t,Te);let V=q?!1:d||P.pathname+P.search===b.pathname+b.search||P.search!==b.search||wI(o.matches[te],ie),J={...D,defaultShouldRevalidate:V},w=ml(ie,J);return Xc(n,i,e,ie,u,t,w,J)}),X=[];return g.forEach((ie,te)=>{if(h||!s.some(S=>S.route.id===ie.routeId)||p.has(te))return;let le=o.fetchers.get(te),Te=le&&le.state!=="idle"&&le.data===void 0,V=oi(C,ie.path,m);if(!V){if(y&&Te)return;X.push({key:te,routeId:ie.routeId,path:ie.path,matches:null,match:null,request:null,controller:null});return}if(x.has(te))return;let J=Eo(V,ie.path),w=new AbortController,de=rr(r,ie.path,w.signal),ge=null;if(f.has(te))f.delete(te),ge=Sr(n,i,de,V,J,u,t);else if(Te)d&&(ge=Sr(n,i,de,V,J,u,t));else{let S={...D,defaultShouldRevalidate:q?!1:d};ml(J,S)&&(ge=Sr(n,i,de,V,J,u,t,S))}ge&&X.push({key:te,routeId:ie.routeId,path:ie.path,matches:ge,match:J,request:de,controller:w})}),{dsMatches:G,revalidatingFetchers:X}}function Kc(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,r=n!=null&&n[e.id]!==void 0;return!i&&r?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!r}function EI(e,t,n){let i=!t||n.route.id!==t.route.id,r=!e.hasOwnProperty(n.route.id);return i||r}function wI(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ml(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function og(e,t,n,i,r){let o;if(e){let l=i[e];Ee(l,`No route found to patch children into: routeId = ${e}`),l.children||(l.children=[]),o=l.children}else o=n;let s=t.filter(l=>!o.some(u=>gb(l,u))),a=hl(s,r,[e||"_","patch",String((o==null?void 0:o.length)||"0")],i);o.push(...a)}function gb(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>{var r;return(r=t.children)==null?void 0:r.some(o=>gb(n,o))}):!1}var sg=new WeakMap,yb=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let r=n[t.id];if(Ee(r,"No route found in manifest"),!r.lazy||typeof r.lazy!="object")return;let o=r.lazy[e];if(!o)return;let s=sg.get(r);s||(s={},sg.set(r,s));let a=s[e];if(a)return a;let l=(async()=>{let u=WD(e),d=r[e]!==void 0&&e!=="hasErrorBoundary";if(u)Ze(!u,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),s[e]=Promise.resolve();else if(d)Ze(!1,`Route "${r.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let f=await o();f!=null&&(Object.assign(r,{[e]:f}),Object.assign(r,i(r)))}typeof r.lazy=="object"&&(r.lazy[e]=void 0,Object.values(r.lazy).every(f=>f===void 0)&&(r.lazy=void 0))})();return s[e]=l,l},ag=new WeakMap;function xI(e,t,n,i,r){let o=n[e.id];if(Ee(o,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let h=ag.get(o);if(h)return{lazyRoutePromise:h,lazyHandlerPromise:h};let d=(async()=>{Ee(typeof e.lazy=="function","No lazy route function found");let f=await e.lazy(),p={};for(let g in f){let x=f[g];if(x===void 0)continue;let C=YD(g),y=o[g]!==void 0&&g!=="hasErrorBoundary";C?Ze(!C,"Route property "+g+" is not a supported property to be returned from a lazy route function. This property will be ignored."):y?Ze(!y,`Route "${o.id}" has a static property "${g}" defined but its lazy function is also returning a value for this property. The lazy route property "${g}" will be ignored.`):p[g]=x}Object.assign(o,p),Object.assign(o,{...i(o),lazy:void 0})})();return ag.set(o,d),d.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:d}}let s=Object.keys(e.lazy),a=[],l;for(let h of s){if(r&&r.includes(h))continue;let d=yb({key:h,route:e,manifest:n,mapRouteProperties:i});d&&(a.push(d),h===t&&(l=d))}let u=a.length>0?Promise.all(a).then(()=>{}):void 0;return u==null||u.catch(()=>{}),l==null||l.catch(()=>{}),{lazyRoutePromise:u,lazyHandlerPromise:l}}async function lg(e){let t=e.matches.filter(r=>r.shouldLoad),n={};return(await Promise.all(t.map(r=>r.resolve()))).forEach((r,o)=>{n[t[o].route.id]=r}),n}async function _I(e){return e.matches.some(t=>t.route.unstable_middleware)?vb(e,!1,()=>lg(e),(t,n)=>({[n]:{type:"error",result:t}})):lg(e)}async function vb(e,t,n,i){let{matches:r,request:o,params:s,context:a}=e,l={handlerResult:void 0};try{let u=r.flatMap(d=>d.route.unstable_middleware?d.route.unstable_middleware.map(f=>[d.route.id,f]):[]),h=await bb({request:o,params:s,context:a},u,t,l,n);return t?h:l.handlerResult}catch(u){if(!l.middlewareError)throw u;let h=await i(l.middlewareError.error,l.middlewareError.routeId);return l.handlerResult?Object.assign(l.handlerResult,h):h}}async function bb(e,t,n,i,r,o=0){let{request:s}=e;if(s.signal.aborted)throw s.signal.reason?s.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${s.method} ${s.url}`);let a=t[o];if(!a)return i.handlerResult=await r(),i.handlerResult;let[l,u]=a,h=!1,d,f=async()=>{if(h)throw new Error("You may only call `next()` once per middleware");h=!0,await bb(e,t,n,i,r,o+1)};try{let p=await u({request:e.request,params:e.params,context:e.context},f);return h?p===void 0?d:p:f()}catch(p){throw i.middlewareError?i.middlewareError.error!==p&&(i.middlewareError={routeId:l,error:p}):i.middlewareError={routeId:l,error:p},p}}function Tb(e,t,n,i,r){let o=yb({key:"unstable_middleware",route:i.route,manifest:t,mapRouteProperties:e}),s=xI(i.route,zt(n.method)?"action":"loader",t,e,r);return{middleware:o,route:s.lazyRoutePromise,handler:s.lazyHandlerPromise}}function Xc(e,t,n,i,r,o,s,a=null){let l=!1,u=Tb(e,t,n,i,r);return{...i,_lazyPromises:u,shouldLoad:s,unstable_shouldRevalidateArgs:a,unstable_shouldCallHandler(h){return l=!0,a?typeof h=="boolean"?ml(i,{...a,defaultShouldRevalidate:h}):ml(i,a):s},resolve(h){return l||s||h&&n.method==="GET"&&(i.route.lazy||i.route.loader)?kI({request:n,match:i,lazyHandlerPromise:u==null?void 0:u.handler,lazyRoutePromise:u==null?void 0:u.route,handlerOverride:h,scopedContext:o}):Promise.resolve({type:"data",result:void 0})}}}function Sr(e,t,n,i,r,o,s,a=null){return i.map(l=>l.route.id!==r.route.id?{...l,shouldLoad:!1,unstable_shouldRevalidateArgs:a,unstable_shouldCallHandler:()=>!1,_lazyPromises:Tb(e,t,n,l,o),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Xc(e,t,n,l,o,s,!0,a))}async function SI(e,t,n,i,r,o){n.some(u=>{var h;return(h=u._lazyPromises)==null?void 0:h.middleware})&&await Promise.all(n.map(u=>{var h;return(h=u._lazyPromises)==null?void 0:h.middleware}));let s={request:t,params:n[0].params,context:r,matches:n},l=await e({...s,fetcherKey:i,unstable_runClientMiddleware:u=>{let h=s;return vb(h,!1,()=>u({...h,fetcherKey:i,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}),(d,f)=>({[f]:{type:"error",result:d}}))}});try{await Promise.all(n.flatMap(u=>{var h,d;return[(h=u._lazyPromises)==null?void 0:h.handler,(d=u._lazyPromises)==null?void 0:d.route]}))}catch{}return l}async function kI({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:r,scopedContext:o}){let s,a,l=zt(e.method),u=l?"action":"loader",h=d=>{let f,p=new Promise((C,m)=>f=m);a=()=>f(),e.signal.addEventListener("abort",a);let g=C=>typeof d!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${t.route.id}]`)):d({request:e,params:t.params,context:o},...C!==void 0?[C]:[]),x=(async()=>{try{return{type:"data",result:await(r?r(m=>g(m)):g())}}catch(C){return{type:"error",result:C}}})();return Promise.race([x,p])};try{let d=l?t.route.action:t.route.loader;if(n||i)if(d){let f,[p]=await Promise.all([h(d).catch(g=>{f=g}),n,i]);if(f!==void 0)throw f;s=p}else{await n;let f=l?t.route.action:t.route.loader;if(f)[s]=await Promise.all([h(f),i]);else if(u==="action"){let p=new URL(e.url),g=p.pathname+p.search;throw Kt(405,{method:e.method,pathname:g,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(d)s=await h(d);else{let f=new URL(e.url),p=f.pathname+f.search;throw Kt(404,{pathname:p})}}catch(d){return{type:"error",result:d}}finally{a&&e.signal.removeEventListener("abort",a)}return s}async function DI(e){var i,r,o,s,a,l;let{result:t,type:n}=e;if(wb(t)){let u;try{let h=t.headers.get("Content-Type");h&&/\bapplication\/json\b/.test(h)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(h){return{type:"error",error:h}}return n==="error"?{type:"error",error:new pl(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:"data",data:u,statusCode:t.status,headers:t.headers}}return n==="error"?mg(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:(i=t.init)==null?void 0:i.status,headers:(r=t.init)!=null&&r.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new pl(((o=t.init)==null?void 0:o.status)||500,void 0,t.data),statusCode:rs(t)?t.status:void 0,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:rs(t)?t.status:void 0}:mg(t)?{type:"data",data:t.data,statusCode:(a=t.init)==null?void 0:a.status,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function II(e,t,n,i,r){let o=e.headers.get("Location");if(Ee(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!lp.test(o)){let s=i.slice(0,i.findIndex(a=>a.route.id===n)+1);o=Gc(new URL(t.url),s,r,o),e.headers.set("Location",o)}return e}function ug(e,t,n){if(lp.test(e)){let i=e,r=i.startsWith("//")?new URL(t.protocol+i):new URL(i),o=sn(r.pathname,n)!=null;if(r.origin===t.origin&&o)return r.pathname+r.search+r.hash}return e}function rr(e,t,n,i){let r=e.createURL(Eb(t)).toString(),o={signal:n};if(i&&zt(i.formMethod)){let{formMethod:s,formEncType:a}=i;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(i.json)):a==="text/plain"?o.body=i.text:a==="application/x-www-form-urlencoded"&&i.formData?o.body=Jc(i.formData):o.body=i.formData}return new Request(r,o)}function Jc(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function cg(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function CI(e,t,n,i=!1,r=!1){let o={},s=null,a,l=!1,u={},h=n&&Ft(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let f=d.route.id,p=t[f];if(Ee(!Fi(p),"Cannot handle redirect results in processLoaderData"),Ft(p)){let g=p.error;if(h!==void 0&&(g=h,h=void 0),s=s||{},r)s[f]=g;else{let x=Pi(e,f);s[x.route.id]==null&&(s[x.route.id]=g)}i||(o[f]=mb),l||(l=!0,a=rs(p.error)?p.error.status:500),p.headers&&(u[f]=p.headers)}else o[f]=p.data,p.statusCode&&p.statusCode!==200&&!l&&(a=p.statusCode),p.headers&&(u[f]=p.headers)}),h!==void 0&&n&&(s={[n[0]]:h},n[2]&&(o[n[2]]=void 0)),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function dg(e,t,n,i,r,o){let{loaderData:s,errors:a}=CI(t,n,i);return r.filter(l=>!l.matches||l.matches.some(u=>u.shouldLoad)).forEach(l=>{let{key:u,match:h,controller:d}=l,f=o[u];if(Ee(f,"Did not find corresponding fetcher result"),!(d&&d.signal.aborted))if(Ft(f)){let p=Pi(e.matches,h==null?void 0:h.route.id);a&&a[p.route.id]||(a={...a,[p.route.id]:f.error}),e.fetchers.delete(u)}else if(Fi(f))Ee(!1,"Unhandled fetcher revalidation redirect");else{let p=Jn(f.data);e.fetchers.set(u,p)}}),{loaderData:s,errors:a}}function hg(e,t,n,i){let r=Object.entries(t).filter(([,o])=>o!==mb).reduce((o,[s,a])=>(o[s]=a,o),{});for(let o of n){let s=o.route.id;if(!t.hasOwnProperty(s)&&e.hasOwnProperty(s)&&o.route.loader&&(r[s]=e[s]),i&&i.hasOwnProperty(s))break}return r}function fg(e){return e?Ft(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Pi(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function pg(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Kt(e,{pathname:t,routeId:n,method:i,type:r,message:o}={}){let s="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&t&&n?a=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:r==="invalid-body"&&(a="Unable to encode submission body")):e===403?(s="Forbidden",a=`Route "${n}" does not match URL "${t}"`):e===404?(s="Not Found",a=`No route matches URL "${t}"`):e===405&&(s="Method Not Allowed",i&&t&&n?a=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(a=`Invalid request method "${i.toUpperCase()}"`)),new pl(e||500,s,new Error(a),!0)}function ma(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,r]=t[n];if(Fi(r))return{key:i,result:r}}}function Eb(e){let t=typeof e=="string"?xi(e):e;return bi({...t,hash:""})}function AI(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function OI(e){return wb(e.result)&&mI.has(e.result.status)}function Ft(e){return e.type==="error"}function Fi(e){return(e&&e.type)==="redirect"}function mg(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function wb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function PI(e){return pI.has(e.toUpperCase())}function zt(e){return hI.has(e.toUpperCase())}function up(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Eo(e,t){let n=typeof t=="string"?xi(t).search:t.search;if(e[e.length-1].route.index&&up(n||""))return e[e.length-1];let i=hb(e);return i[i.length-1]}function gg(e){let{formMethod:t,formAction:n,formEncType:i,text:r,formData:o,json:s}=e;if(!(!t||!n||!i)){if(r!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(o!=null)return{formMethod:t,formAction:n,formEncType:i,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:s,text:void 0}}}function Lu(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function NI(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function uo(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function MI(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Jn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function RI(e,t){try{let n=e.sessionStorage.getItem(pb);if(n){let i=JSON.parse(n);for(let[r,o]of Object.entries(i||{}))o&&Array.isArray(o)&&t.set(r,new Set(o||[]))}}catch{}}function LI(e,t){if(t.size>0){let n={};for(let[i,r]of t)n[i]=[...r];try{e.sessionStorage.setItem(pb,JSON.stringify(n))}catch(i){Ze(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function FI(){let e,t,n=new Promise((i,r)=>{e=async o=>{i(o);try{await n}catch{}},t=async o=>{r(o);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Ki=R.createContext(null);Ki.displayName="DataRouter";var Ns=R.createContext(null);Ns.displayName="DataRouterState";var cp=R.createContext({isTransitioning:!1});cp.displayName="ViewTransition";var xb=R.createContext(new Map);xb.displayName="Fetchers";var zI=R.createContext(null);zI.displayName="Await";var Cn=R.createContext(null);Cn.displayName="Navigation";var zl=R.createContext(null);zl.displayName="Location";var An=R.createContext({outlet:null,matches:[],isDataRoute:!1});An.displayName="Route";var dp=R.createContext(null);dp.displayName="RouteError";function BI(e,{relative:t}={}){Ee(Ms(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=R.useContext(Cn),{hash:r,pathname:o,search:s}=Rs(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:In([n,o])),i.createHref({pathname:a,search:s,hash:r})}function Ms(){return R.useContext(zl)!=null}function Xi(){return Ee(Ms(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(zl).location}var _b="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sb(e){R.useContext(Cn).static||R.useLayoutEffect(e)}function jI(){let{isDataRoute:e}=R.useContext(An);return e?e3():UI()}function UI(){Ee(Ms(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(Ki),{basename:t,navigator:n}=R.useContext(Cn),{matches:i}=R.useContext(An),{pathname:r}=Xi(),o=JSON.stringify(sp(i)),s=R.useRef(!1);return Sb(()=>{s.current=!0}),R.useCallback((l,u={})=>{if(Ze(s.current,_b),!s.current)return;if(typeof l=="number"){n.go(l);return}let h=ap(l,JSON.parse(o),r,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:In([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,o,r,e])}var HI=R.createContext(null);function $I(e){let t=R.useContext(An).outlet;return t&&R.createElement(HI.Provider,{value:e},t)}function Rs(e,{relative:t}={}){let{matches:n}=R.useContext(An),{pathname:i}=Xi(),r=JSON.stringify(sp(n));return R.useMemo(()=>ap(e,JSON.parse(r),i,t==="path"),[e,r,i,t])}function WI(e,t,n,i){Ee(Ms(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=R.useContext(Cn),{matches:o}=R.useContext(An),s=o[o.length-1],a=s?s.params:{},l=s?s.pathname:"/",u=s?s.pathnameBase:"/",h=s&&s.route;{let m=h&&h.path||"";Ib(l,!h||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let d=Xi(),f;f=d;let p=f.pathname||"/",g=p;if(u!=="/"){let m=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=oi(e,{pathname:g});return Ze(h||x!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Ze(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),GI(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:In([u,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:In([u,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,i)}function VI(){let e=ZI(),t=rs(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:o},"ErrorBoundary")," or"," ",R.createElement("code",{style:o},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:r},n):null,s)}var YI=R.createElement(VI,null),qI=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?R.createElement(An.Provider,{value:this.props.routeContext},R.createElement(dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function QI({routeContext:e,match:t,children:n}){let i=R.useContext(Ki);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),R.createElement(An.Provider,{value:e},n)}function GI(e,t=[],n=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Ee(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),r=r.slice(0,Math.min(r.length,l+1))}let s=!1,a=-1;if(n)for(let l=0;l<r.length;l++){let u=r[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(a=l),u.route.id){let{loaderData:h,errors:d}=n,f=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!d||d[u.route.id]===void 0);if(u.route.lazy||f){s=!0,a>=0?r=r.slice(0,a+1):r=[r[0]];break}}}return r.reduceRight((l,u,h)=>{let d,f=!1,p=null,g=null;n&&(d=o&&u.route.id?o[u.route.id]:void 0,p=u.route.errorElement||YI,s&&(a<0&&h===0?(Ib("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,g=null):a===h&&(f=!0,g=u.route.hydrateFallbackElement||null)));let x=t.concat(r.slice(0,h+1)),C=()=>{let m;return d?m=p:f?m=g:u.route.Component?m=R.createElement(u.route.Component,null):u.route.element?m=u.route.element:m=l,R.createElement(QI,{match:u,routeContext:{outlet:l,matches:x,isDataRoute:n!=null},children:m})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?R.createElement(qI,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:C(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):C()},null)}function hp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function KI(e){let t=R.useContext(Ki);return Ee(t,hp(e)),t}function kb(e){let t=R.useContext(Ns);return Ee(t,hp(e)),t}function XI(e){let t=R.useContext(An);return Ee(t,hp(e)),t}function Bl(e){let t=XI(e),n=t.matches[t.matches.length-1];return Ee(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function JI(){return Bl("useRouteId")}function Db(){let e=kb("useLoaderData"),t=Bl("useLoaderData");return e.loaderData[t]}function ZI(){var i;let e=R.useContext(dp),t=kb("useRouteError"),n=Bl("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function e3(){let{router:e}=KI("useNavigate"),t=Bl("useNavigate"),n=R.useRef(!1);return Sb(()=>{n.current=!0}),R.useCallback(async(r,o={})=>{Ze(n.current,_b),n.current&&(typeof r=="number"?e.navigate(r):await e.navigate(r,{fromRouteId:t,...o}))},[e,t])}var yg={};function Ib(e,t,n){!t&&!yg[e]&&(yg[e]=!0,Ze(!1,n))}var vg={};function bg(e,t){!e&&!vg[t]&&(vg[t]=!0,console.warn(t))}function t3(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Ze(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:R.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Ze(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:R.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Ze(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:R.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var n3=["HydrateFallback","hydrateFallbackElement"],i3=class{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",e(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",t(n))}})}};function r3({router:e,flushSync:t}){let[n,i]=R.useState(e.state),[r,o]=R.useState(),[s,a]=R.useState({isTransitioning:!1}),[l,u]=R.useState(),[h,d]=R.useState(),[f,p]=R.useState(),g=R.useRef(new Map),x=R.useCallback((v,{deletedFetchers:A,flushSync:P,viewTransitionOpts:b})=>{v.fetchers.forEach((z,q)=>{z.data!==void 0&&g.current.set(q,z.data)}),A.forEach(z=>g.current.delete(z)),bg(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let F=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(bg(b==null||F,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!b||!F){t&&P?t(()=>i(v)):R.startTransition(()=>i(v));return}if(t&&P){t(()=>{h&&(l&&l.resolve(),h.skipTransition()),a({isTransitioning:!0,flushSync:!0,currentLocation:b.currentLocation,nextLocation:b.nextLocation})});let z=e.window.document.startViewTransition(()=>{t(()=>i(v))});z.finished.finally(()=>{t(()=>{u(void 0),d(void 0),o(void 0),a({isTransitioning:!1})})}),t(()=>d(z));return}h?(l&&l.resolve(),h.skipTransition(),p({state:v,currentLocation:b.currentLocation,nextLocation:b.nextLocation})):(o(v),a({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}))},[e.window,t,h,l]);R.useLayoutEffect(()=>e.subscribe(x),[e,x]),R.useEffect(()=>{s.isTransitioning&&!s.flushSync&&u(new i3)},[s]),R.useEffect(()=>{if(l&&r&&e.window){let v=r,A=l.promise,P=e.window.document.startViewTransition(async()=>{R.startTransition(()=>i(v)),await A});P.finished.finally(()=>{u(void 0),d(void 0),o(void 0),a({isTransitioning:!1})}),d(P)}},[r,l,e.window]),R.useEffect(()=>{l&&r&&n.location.key===r.location.key&&l.resolve()},[l,h,n.location,r]),R.useEffect(()=>{!s.isTransitioning&&f&&(o(f.state),a({isTransitioning:!0,flushSync:!1,currentLocation:f.currentLocation,nextLocation:f.nextLocation}),p(void 0))},[s.isTransitioning,f]);let C=R.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:v=>e.navigate(v),push:(v,A,P)=>e.navigate(v,{state:A,preventScrollReset:P==null?void 0:P.preventScrollReset}),replace:(v,A,P)=>e.navigate(v,{replace:!0,state:A,preventScrollReset:P==null?void 0:P.preventScrollReset})}),[e]),m=e.basename||"/",y=R.useMemo(()=>({router:e,navigator:C,static:!1,basename:m}),[e,C,m]);return R.createElement(R.Fragment,null,R.createElement(Ki.Provider,{value:y},R.createElement(Ns.Provider,{value:n},R.createElement(xb.Provider,{value:g.current},R.createElement(cp.Provider,{value:s},R.createElement(l3,{basename:m,location:n.location,navigationType:n.historyAction,navigator:C},R.createElement(o3,{routes:e.routes,future:e.future,state:n})))))),null)}var o3=R.memo(s3);function s3({routes:e,future:t,state:n}){return WI(e,void 0,n,t)}function a3(e){return $I(e.context)}function l3({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:r,static:o=!1}){Ee(!Ms(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=R.useMemo(()=>({basename:s,navigator:r,static:o,future:{}}),[s,r,o]);typeof n=="string"&&(n=xi(n));let{pathname:l="/",search:u="",hash:h="",state:d=null,key:f="default"}=n,p=R.useMemo(()=>{let g=sn(l,s);return g==null?null:{location:{pathname:g,search:u,hash:h,state:d,key:f},navigationType:i}},[s,l,u,h,d,f,i]);return Ze(p!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:R.createElement(Cn.Provider,{value:a},R.createElement(zl.Provider,{children:t,value:p}))}var Ra="get",La="application/x-www-form-urlencoded";function jl(e){return e!=null&&typeof e.tagName=="string"}function u3(e){return jl(e)&&e.tagName.toLowerCase()==="button"}function c3(e){return jl(e)&&e.tagName.toLowerCase()==="form"}function d3(e){return jl(e)&&e.tagName.toLowerCase()==="input"}function h3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function f3(e,t){return e.button===0&&(!t||t==="_self")&&!h3(e)}var ga=null;function p3(){if(ga===null)try{new FormData(document.createElement("form"),0),ga=!1}catch{ga=!0}return ga}var m3=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fu(e){return e!=null&&!m3.has(e)?(Ze(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${La}"`),null):e}function g3(e,t){let n,i,r,o,s;if(c3(e)){let a=e.getAttribute("action");i=a?sn(a,t):null,n=e.getAttribute("method")||Ra,r=Fu(e.getAttribute("enctype"))||La,o=new FormData(e)}else if(u3(e)||d3(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(i=l?sn(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Ra,r=Fu(e.getAttribute("formenctype"))||Fu(a.getAttribute("enctype"))||La,o=new FormData(a,e),!p3()){let{name:u,type:h,value:d}=e;if(h==="image"){let f=u?`${u}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else u&&o.append(u,d)}}else{if(jl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ra,i=null,r=La,s=e}return o&&r==="text/plain"&&(s=o,o=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:o,body:s}}function fp(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function y3(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function v3(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function b3(e,t,n){let i=await Promise.all(e.map(async r=>{let o=t.routes[r.route.id];if(o){let s=await y3(o,n);return s.links?s.links():[]}return[]}));return x3(i.flat(1).filter(v3).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Tg(e,t,n,i,r,o){let s=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var h;return n[u].pathname!==l.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return o==="assets"?t.filter((l,u)=>s(l,u)||a(l,u)):o==="data"?t.filter((l,u)=>{var d;let h=i.routes[l.route.id];if(!h||!h.hasLoader)return!1;if(s(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function T3(e,t,{includeHydrateFallback:n}={}){return E3(e.map(i=>{let r=t.routes[i.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o}).flat(1))}function E3(e){return[...new Set(e)]}function w3(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function x3(e,t){let n=new Set;return new Set(t),e.reduce((i,r)=>{let o=JSON.stringify(w3(r));return n.has(o)||(n.add(o),i.push({key:o,link:r})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _3=new Set([100,101,204,205]);function S3(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&sn(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Cb(){let e=R.useContext(Ki);return fp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function k3(){let e=R.useContext(Ns);return fp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var pp=R.createContext(void 0);pp.displayName="FrameworkContext";function Ab(){let e=R.useContext(pp);return fp(e,"You must render this element inside a <HydratedRouter> element"),e}function D3(e,t){let n=R.useContext(pp),[i,r]=R.useState(!1),[o,s]=R.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:h,onTouchStart:d}=t,f=R.useRef(null);R.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=m=>{m.forEach(y=>{s(y.isIntersecting)})},C=new IntersectionObserver(x,{threshold:.5});return f.current&&C.observe(f.current),()=>{C.disconnect()}}},[e]),R.useEffect(()=>{if(i){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},g=()=>{r(!1),s(!1)};return n?e!=="intent"?[o,f,{}]:[o,f,{onFocus:co(a,p),onBlur:co(l,g),onMouseEnter:co(u,p),onMouseLeave:co(h,g),onTouchStart:co(d,p)}]:[!1,f,{}]}function co(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function I3({page:e,...t}){let{router:n}=Cb(),i=R.useMemo(()=>oi(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?R.createElement(A3,{page:e,matches:i,...t}):null}function C3(e){let{manifest:t,routeModules:n}=Ab(),[i,r]=R.useState([]);return R.useEffect(()=>{let o=!1;return b3(e,t,n).then(s=>{o||r(s)}),()=>{o=!0}},[e,t,n]),i}function A3({page:e,matches:t,...n}){let i=Xi(),{manifest:r,routeModules:o}=Ab(),{basename:s}=Cb(),{loaderData:a,matches:l}=k3(),u=R.useMemo(()=>Tg(e,t,l,r,i,"data"),[e,t,l,r,i]),h=R.useMemo(()=>Tg(e,t,l,r,i,"assets"),[e,t,l,r,i]),d=R.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let g=new Set,x=!1;if(t.forEach(m=>{var v;let y=r.routes[m.route.id];!y||!y.hasLoader||(!u.some(A=>A.route.id===m.route.id)&&m.route.id in a&&((v=o[m.route.id])!=null&&v.shouldRevalidate)||y.hasClientLoader?x=!0:g.add(m.route.id))}),g.size===0)return[];let C=S3(e,s);return x&&g.size>0&&C.searchParams.set("_routes",t.filter(m=>g.has(m.route.id)).map(m=>m.route.id).join(",")),[C.pathname+C.search]},[s,a,i,r,u,t,e,o]),f=R.useMemo(()=>T3(h,r),[h,r]),p=C3(h);return R.createElement(R.Fragment,null,d.map(g=>R.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...n})),f.map(g=>R.createElement("link",{key:g,rel:"modulepreload",href:g,...n})),p.map(({key:g,link:x})=>R.createElement("link",{key:g,...x})))}function O3(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ob&&(window.__reactRouterVersion="7.6.2")}catch{}function P3(e,t){return bI({basename:t==null?void 0:t.basename,unstable_getContext:t==null?void 0:t.unstable_getContext,future:t==null?void 0:t.future,history:jD({window:t==null?void 0:t.window}),hydrationData:N3(),routes:e,mapRouteProperties:t3,hydrationRouteProperties:n3,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function N3(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:M3(e.errors)}),e}function M3(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,r]of t)if(r&&r.__type==="RouteErrorResponse")n[i]=new pl(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let o=window[r.__subType];if(typeof o=="function")try{let s=new o(r.message);s.stack="",n[i]=s}catch{}}if(n[i]==null){let o=new Error(r.message);o.stack="",n[i]=o}}else n[i]=r;return n}var Pb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ul=R.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:h,viewTransition:d,...f},p){let{basename:g}=R.useContext(Cn),x=typeof u=="string"&&Pb.test(u),C,m=!1;if(typeof u=="string"&&x&&(C=u,Ob))try{let q=new URL(window.location.href),D=u.startsWith("//")?new URL(q.protocol+u):new URL(u),G=sn(D.pathname,g);D.origin===q.origin&&G!=null?u=G+D.search+D.hash:m=!0}catch{Ze(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=BI(u,{relative:r}),[v,A,P]=D3(i,f),b=z3(u,{replace:s,state:a,target:l,preventScrollReset:h,relative:r,viewTransition:d});function F(q){t&&t(q),q.defaultPrevented||b(q)}let z=R.createElement("a",{...f,...P,href:C||y,onClick:m||o?t:F,ref:O3(p,A),target:l,"data-discover":!x&&n==="render"?"true":void 0});return v&&!x?R.createElement(R.Fragment,null,z,R.createElement(I3,{page:y})):z});Ul.displayName="Link";var R3=R.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:r=!1,style:o,to:s,viewTransition:a,children:l,...u},h){let d=Rs(s,{relative:u.relative}),f=Xi(),p=R.useContext(Ns),{navigator:g,basename:x}=R.useContext(Cn),C=p!=null&&$3(d)&&a===!0,m=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,y=f.pathname,v=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(y=y.toLowerCase(),v=v?v.toLowerCase():null,m=m.toLowerCase()),v&&x&&(v=sn(v,x)||v);const A=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let P=y===m||!r&&y.startsWith(m)&&y.charAt(A)==="/",b=v!=null&&(v===m||!r&&v.startsWith(m)&&v.charAt(m.length)==="/"),F={isActive:P,isPending:b,isTransitioning:C},z=P?t:void 0,q;typeof i=="function"?q=i(F):q=[i,P?"active":null,b?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let D=typeof o=="function"?o(F):o;return R.createElement(Ul,{...u,"aria-current":z,className:q,ref:h,style:D,to:s,viewTransition:a},typeof l=="function"?l(F):l)});R3.displayName="NavLink";var L3=R.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:r,state:o,method:s=Ra,action:a,onSubmit:l,relative:u,preventScrollReset:h,viewTransition:d,...f},p)=>{let g=U3(),x=H3(a,{relative:u}),C=s.toLowerCase()==="get"?"get":"post",m=typeof a=="string"&&Pb.test(a),y=v=>{if(l&&l(v),v.defaultPrevented)return;v.preventDefault();let A=v.nativeEvent.submitter,P=(A==null?void 0:A.getAttribute("formmethod"))||s;g(A||v.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:r,state:o,relative:u,preventScrollReset:h,viewTransition:d})};return R.createElement("form",{ref:p,method:C,action:x,onSubmit:i?l:y,...f,"data-discover":!m&&e==="render"?"true":void 0})});L3.displayName="Form";function F3(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nb(e){let t=R.useContext(Ki);return Ee(t,F3(e)),t}function z3(e,{target:t,replace:n,state:i,preventScrollReset:r,relative:o,viewTransition:s}={}){let a=jI(),l=Xi(),u=Rs(e,{relative:o});return R.useCallback(h=>{if(f3(h,t)){h.preventDefault();let d=n!==void 0?n:bi(l)===bi(u);a(e,{replace:d,state:i,preventScrollReset:r,relative:o,viewTransition:s})}},[l,a,u,n,i,t,e,r,o,s])}var B3=0,j3=()=>`__${String(++B3)}__`;function U3(){let{router:e}=Nb("useSubmit"),{basename:t}=R.useContext(Cn),n=JI();return R.useCallback(async(i,r={})=>{let{action:o,method:s,encType:a,formData:l,body:u}=g3(i,t);if(r.navigate===!1){let h=r.fetcherKey||j3();await e.fetch(h,n,r.action||o,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||s,formEncType:r.encType||a,flushSync:r.flushSync})}else await e.navigate(r.action||o,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||s,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[e,t,n])}function H3(e,{relative:t}={}){let{basename:n}=R.useContext(Cn),i=R.useContext(An);Ee(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),o={...Rs(e||".",{relative:t})},s=Xi();if(e==null){o.search=s.search;let a=new URLSearchParams(o.search),l=a.getAll("index");if(l.some(h=>h==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let h=a.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&r.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:In([n,o.pathname])),bi(o)}function $3(e,t={}){let n=R.useContext(cp);Ee(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Nb("useViewTransitionState"),r=Rs(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=sn(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=sn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return fl(r.pathname,s)!=null||fl(r.pathname,o)!=null}[..._3];/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function W3(e){return R.createElement(r3,{flushSync:ab.flushSync,...e})}function V3(){return Q.jsxs("div",{className:"header_bar",children:[Q.jsxs("p",{style:{fontSize:"15px"},children:["Get in touch with me at ",Q.jsx("a",{style:{fontStyle:"italic",fontSize:"15px"},href:"mailto: jessjessjohnsonson@gmail.com",children:"jessjessjohnsonson@gmail.com"})]}),Q.jsx(Ul,{to:"/",children:Q.jsx("button",{className:"home_button",children:"Home"})})]})}function Y3(){return Q.jsxs(Q.Fragment,{children:[Q.jsx(V3,{}),Q.jsx(a3,{})]})}function Eg(){const{header_text:e,children:t}=Db();if(!t||t.length===0)return Q.jsx("p",{className:"no-posts",children:"No content found"});let n=4,i=[];for(let r=0;r<n;r++)i.push([]);for(let r=0;r<t.length;r++)i[r%n].push(t[r]);return Q.jsxs(Q.Fragment,{children:[e?Q.jsx("p",{className:"page_header_text",children:e}):Q.jsx("p",{style:{height:"80px"}}),Q.jsx("div",{className:"card_container",style:{display:"flex",gap:"1rem"},children:i.map((r,o)=>Q.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"1rem"},children:r.map(s=>Q.jsx(q3,{post:s},s.link))},o))})]})}function q3({post:e}){const{title:t,image:n,description:i,link:r}=e;return Q.jsxs(Ul,{to:r,className:"card",children:[n&&Q.jsx("div",{className:"card_image_container",children:Q.jsx("img",{src:n,alt:t,loading:"lazy",className:"card_image"})}),Q.jsxs("div",{className:"card_content",children:[Q.jsx("h2",{className:"card_title",children:t}),i&&Q.jsx("p",{className:"card_description",children:i})]})]})}function wg(e){const t=[],n=String(e||"");let i=n.indexOf(","),r=0,o=!1;for(;!o;){i===-1&&(i=n.length,o=!0);const s=n.slice(r,i).trim();(s||!o)&&t.push(s),r=i+1,i=n.indexOf(",",r)}return t}function Mb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Q3=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,G3=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,K3={};function xg(e,t){return(K3.jsx?G3:Q3).test(e)}const X3=/[ \t\n\f\r]/g;function J3(e){return typeof e=="object"?e.type==="text"?_g(e.value):!1:_g(e)}function _g(e){return e.replace(X3,"")===""}let Ls=class{constructor(t,n,i){this.normal=n,this.property=t,i&&(this.space=i)}};Ls.prototype.normal={};Ls.prototype.property={};Ls.prototype.space=void 0;function Rb(e,t){const n={},i={};for(const r of e)Object.assign(n,r.property),Object.assign(i,r.normal);return new Ls(n,i,t)}function os(e){return e.toLowerCase()}let Pt=class{constructor(t,n){this.attribute=n,this.property=t}};Pt.prototype.attribute="";Pt.prototype.booleanish=!1;Pt.prototype.boolean=!1;Pt.prototype.commaOrSpaceSeparated=!1;Pt.prototype.commaSeparated=!1;Pt.prototype.defined=!1;Pt.prototype.mustUseProperty=!1;Pt.prototype.number=!1;Pt.prototype.overloadedBoolean=!1;Pt.prototype.property="";Pt.prototype.spaceSeparated=!1;Pt.prototype.space=void 0;let Z3=0;const me=Ji(),Ke=Ji(),Zc=Ji(),$=Ji(),Me=Ji(),kr=Ji(),Mt=Ji();function Ji(){return 2**++Z3}const ed=Object.freeze(Object.defineProperty({__proto__:null,boolean:me,booleanish:Ke,commaOrSpaceSeparated:Mt,commaSeparated:kr,number:$,overloadedBoolean:Zc,spaceSeparated:Me},Symbol.toStringTag,{value:"Module"})),zu=Object.keys(ed);let mp=class extends Pt{constructor(t,n,i,r){let o=-1;if(super(t,n),Sg(this,"space",r),typeof i=="number")for(;++o<zu.length;){const s=zu[o];Sg(this,zu[o],(i&ed[s])===ed[s])}}};mp.prototype.defined=!0;function Sg(e,t,n){n&&(e[t]=n)}function Ur(e){const t={},n={};for(const[i,r]of Object.entries(e.properties)){const o=new mp(i,e.transform(e.attributes||{},i),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),t[i]=o,n[os(i)]=i,n[os(o.attribute)]=i}return new Ls(t,n,e.space)}const Lb=Ur({properties:{ariaActiveDescendant:null,ariaAtomic:Ke,ariaAutoComplete:null,ariaBusy:Ke,ariaChecked:Ke,ariaColCount:$,ariaColIndex:$,ariaColSpan:$,ariaControls:Me,ariaCurrent:null,ariaDescribedBy:Me,ariaDetails:null,ariaDisabled:Ke,ariaDropEffect:Me,ariaErrorMessage:null,ariaExpanded:Ke,ariaFlowTo:Me,ariaGrabbed:Ke,ariaHasPopup:null,ariaHidden:Ke,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Me,ariaLevel:$,ariaLive:null,ariaModal:Ke,ariaMultiLine:Ke,ariaMultiSelectable:Ke,ariaOrientation:null,ariaOwns:Me,ariaPlaceholder:null,ariaPosInSet:$,ariaPressed:Ke,ariaReadOnly:Ke,ariaRelevant:null,ariaRequired:Ke,ariaRoleDescription:Me,ariaRowCount:$,ariaRowIndex:$,ariaRowSpan:$,ariaSelected:Ke,ariaSetSize:$,ariaSort:null,ariaValueMax:$,ariaValueMin:$,ariaValueNow:$,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Fb(e,t){return t in e?e[t]:t}function zb(e,t){return Fb(e,t.toLowerCase())}const eC=Ur({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:kr,acceptCharset:Me,accessKey:Me,action:null,allow:null,allowFullScreen:me,allowPaymentRequest:me,allowUserMedia:me,alt:null,as:null,async:me,autoCapitalize:null,autoComplete:Me,autoFocus:me,autoPlay:me,blocking:Me,capture:null,charSet:null,checked:me,cite:null,className:Me,cols:$,colSpan:null,content:null,contentEditable:Ke,controls:me,controlsList:Me,coords:$|kr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:me,defer:me,dir:null,dirName:null,disabled:me,download:Zc,draggable:Ke,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:me,formTarget:null,headers:Me,height:$,hidden:Zc,high:$,href:null,hrefLang:null,htmlFor:Me,httpEquiv:Me,id:null,imageSizes:null,imageSrcSet:null,inert:me,inputMode:null,integrity:null,is:null,isMap:me,itemId:null,itemProp:Me,itemRef:Me,itemScope:me,itemType:Me,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:me,low:$,manifest:null,max:null,maxLength:$,media:null,method:null,min:null,minLength:$,multiple:me,muted:me,name:null,nonce:null,noModule:me,noValidate:me,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:me,optimum:$,pattern:null,ping:Me,placeholder:null,playsInline:me,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:me,referrerPolicy:null,rel:Me,required:me,reversed:me,rows:$,rowSpan:$,sandbox:Me,scope:null,scoped:me,seamless:me,selected:me,shadowRootClonable:me,shadowRootDelegatesFocus:me,shadowRootMode:null,shape:null,size:$,sizes:null,slot:null,span:$,spellCheck:Ke,src:null,srcDoc:null,srcLang:null,srcSet:null,start:$,step:null,style:null,tabIndex:$,target:null,title:null,translate:null,type:null,typeMustMatch:me,useMap:null,value:Ke,width:$,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Me,axis:null,background:null,bgColor:null,border:$,borderColor:null,bottomMargin:$,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:me,declare:me,event:null,face:null,frame:null,frameBorder:null,hSpace:$,leftMargin:$,link:null,longDesc:null,lowSrc:null,marginHeight:$,marginWidth:$,noResize:me,noHref:me,noShade:me,noWrap:me,object:null,profile:null,prompt:null,rev:null,rightMargin:$,rules:null,scheme:null,scrolling:Ke,standby:null,summary:null,text:null,topMargin:$,valueType:null,version:null,vAlign:null,vLink:null,vSpace:$,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:me,disableRemotePlayback:me,prefix:null,property:null,results:$,security:null,unselectable:null},space:"html",transform:zb}),tC=Ur({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Mt,accentHeight:$,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:$,amplitude:$,arabicForm:null,ascent:$,attributeName:null,attributeType:null,azimuth:$,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:$,by:null,calcMode:null,capHeight:$,className:Me,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:$,diffuseConstant:$,direction:null,display:null,dur:null,divisor:$,dominantBaseline:null,download:me,dx:null,dy:null,edgeMode:null,editable:null,elevation:$,enableBackground:null,end:null,event:null,exponent:$,externalResourcesRequired:null,fill:null,fillOpacity:$,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:kr,g2:kr,glyphName:kr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:$,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:$,horizOriginX:$,horizOriginY:$,id:null,ideographic:$,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:$,k:$,k1:$,k2:$,k3:$,k4:$,kernelMatrix:Mt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:$,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:$,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:$,overlineThickness:$,paintOrder:null,panose1:null,path:null,pathLength:$,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Me,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:$,pointsAtY:$,pointsAtZ:$,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Mt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Mt,rev:Mt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Mt,requiredFeatures:Mt,requiredFonts:Mt,requiredFormats:Mt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:$,specularExponent:$,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:$,strikethroughThickness:$,string:null,stroke:null,strokeDashArray:Mt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:$,strokeOpacity:$,strokeWidth:null,style:null,surfaceScale:$,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Mt,tabIndex:$,tableValues:null,target:null,targetX:$,targetY:$,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Mt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:$,underlineThickness:$,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:$,values:null,vAlphabetic:$,vMathematical:$,vectorEffect:null,vHanging:$,vIdeographic:$,version:null,vertAdvY:$,vertOriginX:$,vertOriginY:$,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:$,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Fb}),Bb=Ur({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),jb=Ur({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:zb}),Ub=Ur({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),nC={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},iC=/[A-Z]/g,kg=/-[a-z]/g,rC=/^data[-\w.:]+$/i;function gp(e,t){const n=os(t);let i=t,r=Pt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&rC.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(kg,sC);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!kg.test(o)){let s=o.replace(iC,oC);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}r=mp}return new r(i,t)}function oC(e){return"-"+e.toLowerCase()}function sC(e){return e.charAt(1).toUpperCase()}const Hl=Rb([Lb,eC,Bb,jb,Ub],"html"),Hr=Rb([Lb,tC,Bb,jb,Ub],"svg");function Dg(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function Hb(e){return e.join(" ").trim()}var yp={},Ig=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,aC=/\n/g,lC=/^\s*/,uC=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,cC=/^:\s*/,dC=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,hC=/^[;\s]*/,fC=/^\s+|\s+$/g,pC=`
`,Cg="/",Ag="*",Ni="",mC="comment",gC="declaration",yC=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,i=1;function r(g){var x=g.match(aC);x&&(n+=x.length);var C=g.lastIndexOf(pC);i=~C?g.length-C:i+g.length}function o(){var g={line:n,column:i};return function(x){return x.position=new s(g),u(),x}}function s(g){this.start=g,this.end={line:n,column:i},this.source=t.source}s.prototype.content=e;function a(g){var x=new Error(t.source+":"+n+":"+i+": "+g);if(x.reason=g,x.filename=t.source,x.line=n,x.column=i,x.source=e,!t.silent)throw x}function l(g){var x=g.exec(e);if(x){var C=x[0];return r(C),e=e.slice(C.length),x}}function u(){l(lC)}function h(g){var x;for(g=g||[];x=d();)x!==!1&&g.push(x);return g}function d(){var g=o();if(!(Cg!=e.charAt(0)||Ag!=e.charAt(1))){for(var x=2;Ni!=e.charAt(x)&&(Ag!=e.charAt(x)||Cg!=e.charAt(x+1));)++x;if(x+=2,Ni===e.charAt(x-1))return a("End of comment missing");var C=e.slice(2,x-2);return i+=2,r(C),e=e.slice(x),i+=2,g({type:mC,comment:C})}}function f(){var g=o(),x=l(uC);if(x){if(d(),!l(cC))return a("property missing ':'");var C=l(dC),m=g({type:gC,property:Og(x[0].replace(Ig,Ni)),value:C?Og(C[0].replace(Ig,Ni)):Ni});return l(hC),m}}function p(){var g=[];h(g);for(var x;x=f();)x!==!1&&(g.push(x),h(g));return g}return u(),p()};function Og(e){return e?e.replace(fC,Ni):Ni}var vC=Ua&&Ua.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yp,"__esModule",{value:!0});yp.default=TC;var bC=vC(yC);function TC(e,t){var n=null;if(!e||typeof e!="string")return n;var i=(0,bC.default)(e),r=typeof t=="function";return i.forEach(function(o){if(o.type==="declaration"){var s=o.property,a=o.value;r?t(s,a,o):a&&(n=n||{},n[s]=a)}}),n}var $l={};Object.defineProperty($l,"__esModule",{value:!0});$l.camelCase=void 0;var EC=/^--[a-zA-Z0-9_-]+$/,wC=/-([a-z])/g,xC=/^[^-]+$/,_C=/^-(webkit|moz|ms|o|khtml)-/,SC=/^-(ms)-/,kC=function(e){return!e||xC.test(e)||EC.test(e)},DC=function(e,t){return t.toUpperCase()},Pg=function(e,t){return"".concat(t,"-")},IC=function(e,t){return t===void 0&&(t={}),kC(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(SC,Pg):e=e.replace(_C,Pg),e.replace(wC,DC))};$l.camelCase=IC;var CC=Ua&&Ua.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},AC=CC(yp),OC=$l;function td(e,t){var n={};return!e||typeof e!="string"||(0,AC.default)(e,function(i,r){i&&r&&(n[(0,OC.camelCase)(i,t)]=r)}),n}td.default=td;var PC=td;const NC=of(PC),Wl=$b("end"),On=$b("start");function $b(e){return t;function t(n){const i=n&&n.position&&n.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function MC(e){const t=On(e),n=Wl(e);if(t&&n)return{start:t,end:n}}function Po(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ng(e.position):"start"in e||"end"in e?Ng(e):"line"in e||"column"in e?nd(e):""}function nd(e){return Mg(e&&e.line)+":"+Mg(e&&e.column)}function Ng(e){return nd(e&&e.start)+"-"+nd(e&&e.end)}function Mg(e){return e&&typeof e=="number"?e:1}class vt extends Error{constructor(t,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?r=t:!o.cause&&t&&(s=!0,r=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?o.ruleId=i:(o.source=i.slice(0,l),o.ruleId=i.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=a?a.line:void 0,this.name=Po(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}vt.prototype.file="";vt.prototype.name="";vt.prototype.reason="";vt.prototype.message="";vt.prototype.stack="";vt.prototype.column=void 0;vt.prototype.line=void 0;vt.prototype.ancestors=void 0;vt.prototype.cause=void 0;vt.prototype.fatal=void 0;vt.prototype.place=void 0;vt.prototype.ruleId=void 0;vt.prototype.source=void 0;const vp={}.hasOwnProperty,RC=new Map,LC=/[A-Z]/g,FC=new Set(["table","tbody","thead","tfoot","tr"]),zC=new Set(["td","th"]),Wb="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function BC(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let i;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=qC(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=YC(n,t.jsx,t.jsxs)}const r={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:i,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Hr:Hl,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Vb(r,e,void 0);return o&&typeof o!="string"?o:r.create(e,r.Fragment,{children:o||void 0},void 0)}function Vb(e,t,n){if(t.type==="element")return jC(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return UC(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return $C(e,t,n);if(t.type==="mdxjsEsm")return HC(e,t);if(t.type==="root")return WC(e,t,n);if(t.type==="text")return VC(e,t)}function jC(e,t,n){const i=e.schema;let r=i;t.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=Hr,e.schema=r),e.ancestors.push(t);const o=qb(e,t.tagName,!1),s=QC(e,t);let a=Tp(e,t);return FC.has(t.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!J3(l):!0})),Yb(e,s,o,t),bp(s,a),e.ancestors.pop(),e.schema=i,e.create(t,o,s,n)}function UC(e,t){if(t.data&&t.data.estree&&e.evaluater){const i=t.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}ss(e,t.position)}function HC(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ss(e,t.position)}function $C(e,t,n){const i=e.schema;let r=i;t.name==="svg"&&i.space==="html"&&(r=Hr,e.schema=r),e.ancestors.push(t);const o=t.name===null?e.Fragment:qb(e,t.name,!0),s=GC(e,t),a=Tp(e,t);return Yb(e,s,o,t),bp(s,a),e.ancestors.pop(),e.schema=i,e.create(t,o,s,n)}function WC(e,t,n){const i={};return bp(i,Tp(e,t)),e.create(t,e.Fragment,i,n)}function VC(e,t){return t.value}function Yb(e,t,n,i){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=i)}function bp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function YC(e,t,n){return i;function i(r,o,s,a){const u=Array.isArray(s.children)?n:t;return a?u(o,s,a):u(o,s)}}function qC(e,t){return n;function n(i,r,o,s){const a=Array.isArray(o.children),l=On(i);return t(r,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function QC(e,t){const n={};let i,r;for(r in t.properties)if(r!=="children"&&vp.call(t.properties,r)){const o=KC(e,r,t.properties[r]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&zC.has(t.tagName)?i=a:n[s]=a}}if(i){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function GC(e,t){const n={};for(const i of t.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const o=i.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else ss(e,t.position);else{const r=i.name;let o;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const a=i.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else ss(e,t.position);else o=i.value===null?!0:i.value;n[r]=o}return n}function Tp(e,t){const n=[];let i=-1;const r=e.passKeys?new Map:RC;for(;++i<t.children.length;){const o=t.children[i];let s;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=r.get(l)||0;s=l+"-"+u,r.set(l,u+1)}}const a=Vb(e,o,s);a!==void 0&&n.push(a)}return n}function KC(e,t,n){const i=gp(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?Mb(n):Hb(n)),i.property==="style"){let r=typeof n=="object"?n:XC(e,String(n));return e.stylePropertyNameCase==="css"&&(r=JC(r)),["style",r]}return[e.elementAttributeNameCase==="react"&&i.space?nC[i.property]||i.property:i.attribute,n]}}function XC(e,t){try{return NC(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const i=n,r=new vt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=Wb+"#cannot-parse-style-attribute",r}}function qb(e,t,n){let i;if(!n)i={type:"Literal",value:t};else if(t.includes(".")){const r=t.split(".");let o=-1,s;for(;++o<r.length;){const a=xg(r[o])?{type:"Identifier",name:r[o]}:{type:"Literal",value:r[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}i=s}else i=xg(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(i.type==="Literal"){const r=i.value;return vp.call(e.components,r)?e.components[r]:r}if(e.evaluater)return e.evaluater.evaluateExpression(i);ss(e)}function ss(e,t){const n=new vt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Wb+"#cannot-handle-mdx-estrees-without-createevaluater",n}function JC(e){const t={};let n;for(n in e)vp.call(e,n)&&(t[ZC(n)]=e[n]);return t}function ZC(e){let t=e.replace(LC,eA);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function eA(e){return"-"+e.toLowerCase()}const Bu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},tA={};function Ep(e,t){const n=tA,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Qb(e,i,r)}function Qb(e,t,n){if(nA(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Rg(e.children,t,n)}return Array.isArray(e)?Rg(e,t,n):""}function Rg(e,t,n){const i=[];let r=-1;for(;++r<e.length;)i[r]=Qb(e[r],t,n);return i.join("")}function nA(e){return!!(e&&typeof e=="object")}const Lg=document.createElement("i");function wp(e){const t="&"+e+";";Lg.innerHTML=t;const n=Lg.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Ut(e,t,n,i){const r=e.length;let o=0,s;if(t<0?t=-t>r?0:r+t:t=t>r?r:t,n=n>0?n:0,i.length<1e4)s=Array.from(i),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<i.length;)s=i.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function Zt(e,t){return e.length>0?(Ut(e,e.length,0,t),e):t}const Fg={}.hasOwnProperty;function Gb(e){const t={};let n=-1;for(;++n<e.length;)iA(t,e[n]);return t}function iA(e,t){let n;for(n in t){const r=(Fg.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){Fg.call(r,s)||(r[s]=[]);const a=o[s];rA(r[s],Array.isArray(a)?a:a?[a]:[])}}}function rA(e,t){let n=-1;const i=[];for(;++n<t.length;)(t[n].add==="after"?e:i).push(t[n]);Ut(e,0,0,i)}function Kb(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function gn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Et=_i(/[A-Za-z]/),gt=_i(/[\dA-Za-z]/),oA=_i(/[#-'*+\--9=?A-Z^-~]/);function gl(e){return e!==null&&(e<32||e===127)}const id=_i(/\d/),sA=_i(/[\dA-Fa-f]/),aA=_i(/[!-/:-@[-`{-~]/);function ae(e){return e!==null&&e<-2}function Pe(e){return e!==null&&(e<0||e===32)}function we(e){return e===-2||e===-1||e===32}const Vl=_i(new RegExp("\\p{P}|\\p{S}","u")),qi=_i(/\s/);function _i(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function $r(e){const t=[];let n=-1,i=0,r=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&gt(e.charCodeAt(n+1))&&gt(e.charCodeAt(n+2)))r=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),r=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(i,n),encodeURIComponent(s)),i=n+r+1,s=""),r&&(n+=r,r=0)}return t.join("")+e.slice(i)}function _e(e,t,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return we(l)?(e.enter(n),a(l)):t(l)}function a(l){return we(l)&&o++<r?(e.consume(l),a):(e.exit(n),t(l))}}const lA={tokenize:uA};function uA(e){const t=e.attempt(this.parser.constructs.contentInitial,i,r);let n;return t;function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),_e(e,t,"linePrefix")}function r(a){return e.enter("paragraph"),o(a)}function o(a){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return ae(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const cA={tokenize:dA},zg={tokenize:hA};function dA(e){const t=this,n=[];let i=0,r,o,s;return a;function a(v){if(i<n.length){const A=n[i];return t.containerState=A[1],e.attempt(A[0].continuation,l,u)(v)}return u(v)}function l(v){if(i++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&y();const A=t.events.length;let P=A,b;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){b=t.events[P][1].end;break}m(i);let F=A;for(;F<t.events.length;)t.events[F][1].end={...b},F++;return Ut(t.events,P+1,0,t.events.slice(A)),t.events.length=F,u(v)}return a(v)}function u(v){if(i===n.length){if(!r)return f(v);if(r.currentConstruct&&r.currentConstruct.concrete)return g(v);t.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(zg,h,d)(v)}function h(v){return r&&y(),m(i),f(v)}function d(v){return t.parser.lazy[t.now().line]=i!==n.length,s=t.now().offset,g(v)}function f(v){return t.containerState={},e.attempt(zg,p,g)(v)}function p(v){return i++,n.push([t.currentConstruct,t.containerState]),f(v)}function g(v){if(v===null){r&&y(),m(0),e.consume(v);return}return r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:o}),x(v)}function x(v){if(v===null){C(e.exit("chunkFlow"),!0),m(0),e.consume(v);return}return ae(v)?(e.consume(v),C(e.exit("chunkFlow")),i=0,t.interrupt=void 0,a):(e.consume(v),x)}function C(v,A){const P=t.sliceStream(v);if(A&&P.push(null),v.previous=o,o&&(o.next=v),o=v,r.defineSkip(v.start),r.write(P),t.parser.lazy[v.start.line]){let b=r.events.length;for(;b--;)if(r.events[b][1].start.offset<s&&(!r.events[b][1].end||r.events[b][1].end.offset>s))return;const F=t.events.length;let z=F,q,D;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){if(q){D=t.events[z][1].end;break}q=!0}for(m(i),b=F;b<t.events.length;)t.events[b][1].end={...D},b++;Ut(t.events,z+1,0,t.events.slice(F)),t.events.length=b}}function m(v){let A=n.length;for(;A-- >v;){const P=n[A];t.containerState=P[1],P[0].exit.call(t,e)}n.length=v}function y(){r.write([null]),o=void 0,r=void 0,t.containerState._closeFlow=void 0}}function hA(e,t,n){return _e(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Rr(e){if(e===null||Pe(e)||qi(e))return 1;if(Vl(e))return 2}function Yl(e,t,n){const i=[];let r=-1;for(;++r<e.length;){const o=e[r].resolveAll;o&&!i.includes(o)&&(t=o(t,n),i.push(o))}return t}const rd={name:"attention",resolveAll:fA,tokenize:pA};function fA(e,t){let n=-1,i,r,o,s,a,l,u,h;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(i=n;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d={...e[i][1].end},f={...e[n][1].start};Bg(d,-l),Bg(f,l),s={type:l>1?"strongSequence":"emphasisSequence",start:d,end:{...e[i][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:l>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[n][1].start}},r={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[i][1].end={...s.start},e[n][1].start={...a.end},u=[],e[i][1].end.offset-e[i][1].start.offset&&(u=Zt(u,[["enter",e[i][1],t],["exit",e[i][1],t]])),u=Zt(u,[["enter",r,t],["enter",s,t],["exit",s,t],["enter",o,t]]),u=Zt(u,Yl(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),u=Zt(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",r,t]]),e[n][1].end.offset-e[n][1].start.offset?(h=2,u=Zt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):h=0,Ut(e,i-1,n-i+3,u),n=i+u.length-h-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function pA(e,t){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Rr(i);let o;return s;function s(l){return o=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===o)return e.consume(l),a;const u=e.exit("attentionSequence"),h=Rr(l),d=!h||h===2&&r||n.includes(l),f=!r||r===2&&h||n.includes(i);return u._open=!!(o===42?d:d&&(r||!f)),u._close=!!(o===42?f:f&&(h||!d)),t(l)}}function Bg(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const mA={name:"autolink",tokenize:gA};function gA(e,t,n){let i=0;return r;function r(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return Et(p)?(e.consume(p),s):p===64?n(p):u(p)}function s(p){return p===43||p===45||p===46||gt(p)?(i=1,a(p)):u(p)}function a(p){return p===58?(e.consume(p),i=0,l):(p===43||p===45||p===46||gt(p))&&i++<32?(e.consume(p),a):(i=0,u(p))}function l(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||gl(p)?n(p):(e.consume(p),l)}function u(p){return p===64?(e.consume(p),h):oA(p)?(e.consume(p),u):n(p)}function h(p){return gt(p)?d(p):n(p)}function d(p){return p===46?(e.consume(p),i=0,h):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||gt(p))&&i++<63){const g=p===45?f:d;return e.consume(p),g}return n(p)}}const Fs={partial:!0,tokenize:yA};function yA(e,t,n){return i;function i(o){return we(o)?_e(e,r,"linePrefix")(o):r(o)}function r(o){return o===null||ae(o)?t(o):n(o)}}const Xb={continuation:{tokenize:bA},exit:TA,name:"blockQuote",tokenize:vA};function vA(e,t,n){const i=this;return r;function r(s){if(s===62){const a=i.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return we(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function bA(e,t,n){const i=this;return r;function r(s){return we(s)?_e(e,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(Xb,t,n)(s)}}function TA(e){e.exit("blockQuote")}const Jb={name:"characterEscape",tokenize:EA};function EA(e,t,n){return i;function i(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),r}function r(o){return aA(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Zb={name:"characterReference",tokenize:wA};function wA(e,t,n){const i=this;let r=0,o,s;return a;function a(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),l}function l(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,s=gt,h(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=sA,h):(e.enter("characterReferenceValue"),o=7,s=id,h(d))}function h(d){if(d===59&&r){const f=e.exit("characterReferenceValue");return s===gt&&!wp(i.sliceSerialize(f))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(d)&&r++<o?(e.consume(d),h):n(d)}}const jg={partial:!0,tokenize:_A},Ug={concrete:!0,name:"codeFenced",tokenize:xA};function xA(e,t,n){const i=this,r={partial:!0,tokenize:P};let o=0,s=0,a;return l;function l(b){return u(b)}function u(b){const F=i.events[i.events.length-1];return o=F&&F[1].type==="linePrefix"?F[2].sliceSerialize(F[1],!0).length:0,a=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),h(b)}function h(b){return b===a?(s++,e.consume(b),h):s<3?n(b):(e.exit("codeFencedFenceSequence"),we(b)?_e(e,d,"whitespace")(b):d(b))}function d(b){return b===null||ae(b)?(e.exit("codeFencedFence"),i.interrupt?t(b):e.check(jg,x,A)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===null||ae(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(b)):we(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),_e(e,p,"whitespace")(b)):b===96&&b===a?n(b):(e.consume(b),f)}function p(b){return b===null||ae(b)?d(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(b))}function g(b){return b===null||ae(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(b)):b===96&&b===a?n(b):(e.consume(b),g)}function x(b){return e.attempt(r,A,C)(b)}function C(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),m}function m(b){return o>0&&we(b)?_e(e,y,"linePrefix",o+1)(b):y(b)}function y(b){return b===null||ae(b)?e.check(jg,x,A)(b):(e.enter("codeFlowValue"),v(b))}function v(b){return b===null||ae(b)?(e.exit("codeFlowValue"),y(b)):(e.consume(b),v)}function A(b){return e.exit("codeFenced"),t(b)}function P(b,F,z){let q=0;return D;function D(te){return b.enter("lineEnding"),b.consume(te),b.exit("lineEnding"),G}function G(te){return b.enter("codeFencedFence"),we(te)?_e(b,X,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(te):X(te)}function X(te){return te===a?(b.enter("codeFencedFenceSequence"),pe(te)):z(te)}function pe(te){return te===a?(q++,b.consume(te),pe):q>=s?(b.exit("codeFencedFenceSequence"),we(te)?_e(b,ie,"whitespace")(te):ie(te)):z(te)}function ie(te){return te===null||ae(te)?(b.exit("codeFencedFence"),F(te)):z(te)}}}function _A(e,t,n){const i=this;return r;function r(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return i.parser.lazy[i.now().line]?n(s):t(s)}}const ju={name:"codeIndented",tokenize:kA},SA={partial:!0,tokenize:DA};function kA(e,t,n){const i=this;return r;function r(u){return e.enter("codeIndented"),_e(e,o,"linePrefix",5)(u)}function o(u){const h=i.events[i.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):ae(u)?e.attempt(SA,s,l)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||ae(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),a)}function l(u){return e.exit("codeIndented"),t(u)}}function DA(e,t,n){const i=this;return r;function r(s){return i.parser.lazy[i.now().line]?n(s):ae(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),r):_e(e,o,"linePrefix",5)(s)}function o(s){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):ae(s)?r(s):n(s)}}const IA={name:"codeText",previous:AA,resolve:CA,tokenize:OA};function CA(e){let t=e.length-4,n=3,i,r;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(i=n;++i<t;)if(e[i][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(i=n-1,t++;++i<=t;)r===void 0?i!==t&&e[i][1].type!=="lineEnding"&&(r=i):(i===t||e[i][1].type==="lineEnding")&&(e[r][1].type="codeTextData",i!==r+2&&(e[r][1].end=e[i-1][1].end,e.splice(r+2,i-r-2),t-=i-r-2,i=r+2),r=void 0);return e}function AA(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function OA(e,t,n){let i=0,r,o;return s;function s(d){return e.enter("codeText"),e.enter("codeTextSequence"),a(d)}function a(d){return d===96?(e.consume(d),i++,a):(e.exit("codeTextSequence"),l(d))}function l(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),l):d===96?(o=e.enter("codeTextSequence"),r=0,h(d)):ae(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||ae(d)?(e.exit("codeTextData"),l(d)):(e.consume(d),u)}function h(d){return d===96?(e.consume(d),r++,h):r===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(o.type="codeTextData",u(d))}}class PA{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(t,i):t>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(t,n,i){const r=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&ho(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ho(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ho(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ho(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ho(this.left,n.reverse())}}}function ho(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function e1(e){const t={};let n=-1,i,r,o,s,a,l,u;const h=new PA(e);for(;++n<h.length;){for(;n in t;)n=t[n];if(i=h.get(n),n&&i[1].type==="chunkFlow"&&h.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(t,NA(h,n)),n=t[n],u=!0);else if(i[1]._container){for(o=n,r=void 0;o--;)if(s=h.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(r&&(h.get(r)[1].type="lineEndingBlank"),s[1].type="lineEnding",r=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;r&&(i[1].end={...h.get(r)[1].start},a=h.slice(r,n),a.unshift(i),h.splice(r,n-r+1,a))}}return Ut(e,0,Number.POSITIVE_INFINITY,h.slice(0)),!u}function NA(e,t){const n=e.get(t)[1],i=e.get(t)[2];let r=t-1;const o=[];let s=n._tokenizer;s||(s=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],u={};let h,d,f=-1,p=n,g=0,x=0;const C=[x];for(;p;){for(;e.get(++r)[1]!==p;);o.push(r),p._tokenizer||(h=i.sliceStream(p),p.next||h.push(null),d&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(h),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(x=f+1,C.push(x),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):C.pop(),f=C.length;f--;){const m=a.slice(C[f],C[f+1]),y=o.pop();l.push([y,y+m.length-1]),e.splice(y,2,m)}for(l.reverse(),f=-1;++f<l.length;)u[g+l[f][0]]=g+l[f][1],g+=l[f][1]-l[f][0]-1;return u}const MA={resolve:LA,tokenize:FA},RA={partial:!0,tokenize:zA};function LA(e){return e1(e),e}function FA(e,t){let n;return i;function i(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?o(a):ae(a)?e.check(RA,s,o)(a):(e.consume(a),r)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function zA(e,t,n){const i=this;return r;function r(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),_e(e,o,"linePrefix")}function o(s){if(s===null||ae(s))return n(s);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(i.parser.constructs.flow,n,t)(s)}}function t1(e,t,n,i,r,o,s,a,l){const u=l||Number.POSITIVE_INFINITY;let h=0;return d;function d(m){return m===60?(e.enter(i),e.enter(r),e.enter(o),e.consume(m),e.exit(o),f):m===null||m===32||m===41||gl(m)?n(m):(e.enter(i),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),x(m))}function f(m){return m===62?(e.enter(o),e.consume(m),e.exit(o),e.exit(r),e.exit(i),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===62?(e.exit("chunkString"),e.exit(a),f(m)):m===null||m===60||ae(m)?n(m):(e.consume(m),m===92?g:p)}function g(m){return m===60||m===62||m===92?(e.consume(m),p):p(m)}function x(m){return!h&&(m===null||m===41||Pe(m))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(i),t(m)):h<u&&m===40?(e.consume(m),h++,x):m===41?(e.consume(m),h--,x):m===null||m===32||m===40||gl(m)?n(m):(e.consume(m),m===92?C:x)}function C(m){return m===40||m===41||m===92?(e.consume(m),x):x(m)}}function n1(e,t,n,i,r,o){const s=this;let a=0,l;return u;function u(p){return e.enter(i),e.enter(r),e.consume(p),e.exit(r),e.enter(o),h}function h(p){return a>999||p===null||p===91||p===93&&!l||p===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(p):p===93?(e.exit(o),e.enter(r),e.consume(p),e.exit(r),e.exit(i),t):ae(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),h):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||ae(p)||a++>999?(e.exit("chunkString"),h(p)):(e.consume(p),l||(l=!we(p)),p===92?f:d)}function f(p){return p===91||p===92||p===93?(e.consume(p),a++,d):d(p)}}function i1(e,t,n,i,r,o){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(i),e.enter(r),e.consume(f),e.exit(r),s=f===40?41:f,l):n(f)}function l(f){return f===s?(e.enter(r),e.consume(f),e.exit(r),e.exit(i),t):(e.enter(o),u(f))}function u(f){return f===s?(e.exit(o),l(s)):f===null?n(f):ae(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),_e(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),h(f))}function h(f){return f===s||f===null||ae(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?d:h)}function d(f){return f===s||f===92?(e.consume(f),h):h(f)}}function No(e,t){let n;return i;function i(r){return ae(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n=!0,i):we(r)?_e(e,i,n?"linePrefix":"lineSuffix")(r):t(r)}}const BA={name:"definition",tokenize:UA},jA={partial:!0,tokenize:HA};function UA(e,t,n){const i=this;let r;return o;function o(p){return e.enter("definition"),s(p)}function s(p){return n1.call(i,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return r=gn(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),l):n(p)}function l(p){return Pe(p)?No(e,u)(p):u(p)}function u(p){return t1(e,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function h(p){return e.attempt(jA,d,d)(p)}function d(p){return we(p)?_e(e,f,"whitespace")(p):f(p)}function f(p){return p===null||ae(p)?(e.exit("definition"),i.parser.defined.push(r),t(p)):n(p)}}function HA(e,t,n){return i;function i(a){return Pe(a)?No(e,r)(a):n(a)}function r(a){return i1(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return we(a)?_e(e,s,"whitespace")(a):s(a)}function s(a){return a===null||ae(a)?t(a):n(a)}}const $A={name:"hardBreakEscape",tokenize:WA};function WA(e,t,n){return i;function i(o){return e.enter("hardBreakEscape"),e.consume(o),r}function r(o){return ae(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const VA={name:"headingAtx",resolve:YA,tokenize:qA};function YA(e,t){let n=e.length-2,i=3,r,o;return e[i][1].type==="whitespace"&&(i+=2),n-2>i&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&e[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:e[i][1].start,end:e[n][1].end},o={type:"chunkText",start:e[i][1].start,end:e[n][1].end,contentType:"text"},Ut(e,i,n-i+1,[["enter",r,t],["enter",o,t],["exit",o,t],["exit",r,t]])),e}function qA(e,t,n){let i=0;return r;function r(h){return e.enter("atxHeading"),o(h)}function o(h){return e.enter("atxHeadingSequence"),s(h)}function s(h){return h===35&&i++<6?(e.consume(h),s):h===null||Pe(h)?(e.exit("atxHeadingSequence"),a(h)):n(h)}function a(h){return h===35?(e.enter("atxHeadingSequence"),l(h)):h===null||ae(h)?(e.exit("atxHeading"),t(h)):we(h)?_e(e,a,"whitespace")(h):(e.enter("atxHeadingText"),u(h))}function l(h){return h===35?(e.consume(h),l):(e.exit("atxHeadingSequence"),a(h))}function u(h){return h===null||h===35||Pe(h)?(e.exit("atxHeadingText"),a(h)):(e.consume(h),u)}}const QA=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Hg=["pre","script","style","textarea"],GA={concrete:!0,name:"htmlFlow",resolveTo:JA,tokenize:ZA},KA={partial:!0,tokenize:tO},XA={partial:!0,tokenize:eO};function JA(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function ZA(e,t,n){const i=this;let r,o,s,a,l;return u;function u(S){return h(S)}function h(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),d}function d(S){return S===33?(e.consume(S),f):S===47?(e.consume(S),o=!0,x):S===63?(e.consume(S),r=3,i.interrupt?t:w):Et(S)?(e.consume(S),s=String.fromCharCode(S),C):n(S)}function f(S){return S===45?(e.consume(S),r=2,p):S===91?(e.consume(S),r=5,a=0,g):Et(S)?(e.consume(S),r=4,i.interrupt?t:w):n(S)}function p(S){return S===45?(e.consume(S),i.interrupt?t:w):n(S)}function g(S){const Oe="CDATA[";return S===Oe.charCodeAt(a++)?(e.consume(S),a===Oe.length?i.interrupt?t:X:g):n(S)}function x(S){return Et(S)?(e.consume(S),s=String.fromCharCode(S),C):n(S)}function C(S){if(S===null||S===47||S===62||Pe(S)){const Oe=S===47,ct=s.toLowerCase();return!Oe&&!o&&Hg.includes(ct)?(r=1,i.interrupt?t(S):X(S)):QA.includes(s.toLowerCase())?(r=6,Oe?(e.consume(S),m):i.interrupt?t(S):X(S)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(S):o?y(S):v(S))}return S===45||gt(S)?(e.consume(S),s+=String.fromCharCode(S),C):n(S)}function m(S){return S===62?(e.consume(S),i.interrupt?t:X):n(S)}function y(S){return we(S)?(e.consume(S),y):D(S)}function v(S){return S===47?(e.consume(S),D):S===58||S===95||Et(S)?(e.consume(S),A):we(S)?(e.consume(S),v):D(S)}function A(S){return S===45||S===46||S===58||S===95||gt(S)?(e.consume(S),A):P(S)}function P(S){return S===61?(e.consume(S),b):we(S)?(e.consume(S),P):v(S)}function b(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),l=S,F):we(S)?(e.consume(S),b):z(S)}function F(S){return S===l?(e.consume(S),l=null,q):S===null||ae(S)?n(S):(e.consume(S),F)}function z(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||Pe(S)?P(S):(e.consume(S),z)}function q(S){return S===47||S===62||we(S)?v(S):n(S)}function D(S){return S===62?(e.consume(S),G):n(S)}function G(S){return S===null||ae(S)?X(S):we(S)?(e.consume(S),G):n(S)}function X(S){return S===45&&r===2?(e.consume(S),le):S===60&&r===1?(e.consume(S),Te):S===62&&r===4?(e.consume(S),de):S===63&&r===3?(e.consume(S),w):S===93&&r===5?(e.consume(S),J):ae(S)&&(r===6||r===7)?(e.exit("htmlFlowData"),e.check(KA,ge,pe)(S)):S===null||ae(S)?(e.exit("htmlFlowData"),pe(S)):(e.consume(S),X)}function pe(S){return e.check(XA,ie,ge)(S)}function ie(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),te}function te(S){return S===null||ae(S)?pe(S):(e.enter("htmlFlowData"),X(S))}function le(S){return S===45?(e.consume(S),w):X(S)}function Te(S){return S===47?(e.consume(S),s="",V):X(S)}function V(S){if(S===62){const Oe=s.toLowerCase();return Hg.includes(Oe)?(e.consume(S),de):X(S)}return Et(S)&&s.length<8?(e.consume(S),s+=String.fromCharCode(S),V):X(S)}function J(S){return S===93?(e.consume(S),w):X(S)}function w(S){return S===62?(e.consume(S),de):S===45&&r===2?(e.consume(S),w):X(S)}function de(S){return S===null||ae(S)?(e.exit("htmlFlowData"),ge(S)):(e.consume(S),de)}function ge(S){return e.exit("htmlFlow"),t(S)}}function eO(e,t,n){const i=this;return r;function r(s){return ae(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return i.parser.lazy[i.now().line]?n(s):t(s)}}function tO(e,t,n){return i;function i(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Fs,t,n)}}const nO={name:"htmlText",tokenize:iO};function iO(e,t,n){const i=this;let r,o,s;return a;function a(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),l}function l(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),P):w===63?(e.consume(w),v):Et(w)?(e.consume(w),z):n(w)}function u(w){return w===45?(e.consume(w),h):w===91?(e.consume(w),o=0,g):Et(w)?(e.consume(w),y):n(w)}function h(w){return w===45?(e.consume(w),p):n(w)}function d(w){return w===null?n(w):w===45?(e.consume(w),f):ae(w)?(s=d,Te(w)):(e.consume(w),d)}function f(w){return w===45?(e.consume(w),p):d(w)}function p(w){return w===62?le(w):w===45?f(w):d(w)}function g(w){const de="CDATA[";return w===de.charCodeAt(o++)?(e.consume(w),o===de.length?x:g):n(w)}function x(w){return w===null?n(w):w===93?(e.consume(w),C):ae(w)?(s=x,Te(w)):(e.consume(w),x)}function C(w){return w===93?(e.consume(w),m):x(w)}function m(w){return w===62?le(w):w===93?(e.consume(w),m):x(w)}function y(w){return w===null||w===62?le(w):ae(w)?(s=y,Te(w)):(e.consume(w),y)}function v(w){return w===null?n(w):w===63?(e.consume(w),A):ae(w)?(s=v,Te(w)):(e.consume(w),v)}function A(w){return w===62?le(w):v(w)}function P(w){return Et(w)?(e.consume(w),b):n(w)}function b(w){return w===45||gt(w)?(e.consume(w),b):F(w)}function F(w){return ae(w)?(s=F,Te(w)):we(w)?(e.consume(w),F):le(w)}function z(w){return w===45||gt(w)?(e.consume(w),z):w===47||w===62||Pe(w)?q(w):n(w)}function q(w){return w===47?(e.consume(w),le):w===58||w===95||Et(w)?(e.consume(w),D):ae(w)?(s=q,Te(w)):we(w)?(e.consume(w),q):le(w)}function D(w){return w===45||w===46||w===58||w===95||gt(w)?(e.consume(w),D):G(w)}function G(w){return w===61?(e.consume(w),X):ae(w)?(s=G,Te(w)):we(w)?(e.consume(w),G):q(w)}function X(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),r=w,pe):ae(w)?(s=X,Te(w)):we(w)?(e.consume(w),X):(e.consume(w),ie)}function pe(w){return w===r?(e.consume(w),r=void 0,te):w===null?n(w):ae(w)?(s=pe,Te(w)):(e.consume(w),pe)}function ie(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||Pe(w)?q(w):(e.consume(w),ie)}function te(w){return w===47||w===62||Pe(w)?q(w):n(w)}function le(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function Te(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),V}function V(w){return we(w)?_e(e,J,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):J(w)}function J(w){return e.enter("htmlTextData"),s(w)}}const xp={name:"labelEnd",resolveAll:aO,resolveTo:lO,tokenize:uO},rO={tokenize:cO},oO={tokenize:dO},sO={tokenize:hO};function aO(e){let t=-1;const n=[];for(;++t<e.length;){const i=e[t][1];if(n.push(e[t]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",t+=r}}return e.length!==n.length&&Ut(e,0,e.length,n),e}function lO(e,t){let n=e.length,i=0,r,o,s,a;for(;n--;)if(r=e[n][1],o){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;e[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(o=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(s=n);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},h={type:"labelText",start:{...e[o+i+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,t],["enter",u,t]],a=Zt(a,e.slice(o+1,o+i+3)),a=Zt(a,[["enter",h,t]]),a=Zt(a,Yl(t.parser.constructs.insideSpan.null,e.slice(o+i+4,s-3),t)),a=Zt(a,[["exit",h,t],e[s-2],e[s-1],["exit",u,t]]),a=Zt(a,e.slice(s+1)),a=Zt(a,[["exit",l,t]]),Ut(e,o,e.length,a),e}function uO(e,t,n){const i=this;let r=i.events.length,o,s;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){o=i.events[r][1];break}return a;function a(f){return o?o._inactive?d(f):(s=i.parser.defined.includes(gn(i.sliceSerialize({start:o.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),l):n(f)}function l(f){return f===40?e.attempt(rO,h,s?h:d)(f):f===91?e.attempt(oO,h,s?u:d)(f):s?h(f):d(f)}function u(f){return e.attempt(sO,h,d)(f)}function h(f){return t(f)}function d(f){return o._balanced=!0,n(f)}}function cO(e,t,n){return i;function i(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),r}function r(d){return Pe(d)?No(e,o)(d):o(d)}function o(d){return d===41?h(d):t1(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function s(d){return Pe(d)?No(e,l)(d):h(d)}function a(d){return n(d)}function l(d){return d===34||d===39||d===40?i1(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):h(d)}function u(d){return Pe(d)?No(e,h)(d):h(d)}function h(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function dO(e,t,n){const i=this;return r;function r(a){return n1.call(i,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return i.parser.defined.includes(gn(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function hO(e,t,n){return i;function i(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),r}function r(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const fO={name:"labelStartImage",resolveAll:xp.resolveAll,tokenize:pO};function pO(e,t,n){const i=this;return r;function r(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):t(a)}}const mO={name:"labelStartLink",resolveAll:xp.resolveAll,tokenize:gO};function gO(e,t,n){const i=this;return r;function r(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(s):t(s)}}const Uu={name:"lineEnding",tokenize:yO};function yO(e,t){return n;function n(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),_e(e,t,"linePrefix")}}const Fa={name:"thematicBreak",tokenize:vO};function vO(e,t,n){let i=0,r;return o;function o(u){return e.enter("thematicBreak"),s(u)}function s(u){return r=u,a(u)}function a(u){return u===r?(e.enter("thematicBreakSequence"),l(u)):i>=3&&(u===null||ae(u))?(e.exit("thematicBreak"),t(u)):n(u)}function l(u){return u===r?(e.consume(u),i++,l):(e.exit("thematicBreakSequence"),we(u)?_e(e,a,"whitespace")(u):a(u))}}const kt={continuation:{tokenize:wO},exit:_O,name:"list",tokenize:EO},bO={partial:!0,tokenize:SO},TO={partial:!0,tokenize:xO};function EO(e,t,n){const i=this,r=i.events[i.events.length-1];let o=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,s=0;return a;function a(p){const g=i.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!i.containerState.marker||p===i.containerState.marker:id(p)){if(i.containerState.type||(i.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Fa,n,u)(p):u(p);if(!i.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(p)}return n(p)}function l(p){return id(p)&&++s<10?(e.consume(p),l):(!i.interrupt||s<2)&&(i.containerState.marker?p===i.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||p,e.check(Fs,i.interrupt?n:h,e.attempt(bO,f,d))}function h(p){return i.containerState.initialBlankLine=!0,o++,f(p)}function d(p){return we(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return i.containerState.size=o+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function wO(e,t,n){const i=this;return i.containerState._closeFlow=void 0,e.check(Fs,r,o);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,_e(e,t,"listItemIndent",i.containerState.size+1)(a)}function o(a){return i.containerState.furtherBlankLines||!we(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,s(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(TO,t,s)(a))}function s(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,_e(e,e.attempt(kt,t,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function xO(e,t,n){const i=this;return _e(e,r,"listItemIndent",i.containerState.size+1);function r(o){const s=i.events[i.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===i.containerState.size?t(o):n(o)}}function _O(e){e.exit(this.containerState.type)}function SO(e,t,n){const i=this;return _e(e,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(o){const s=i.events[i.events.length-1];return!we(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const $g={name:"setextUnderline",resolveTo:kO,tokenize:DO};function kO(e,t){let n=e.length,i,r,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){i=n;break}e[n][1].type==="paragraph"&&(r=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[r][1].type="setextHeadingText",o?(e.splice(r,0,["enter",s,t]),e.splice(o+1,0,["exit",e[i][1],t]),e[i][1].end={...e[o][1].end}):e[i][1]=s,e.push(["exit",s,t]),e}function DO(e,t,n){const i=this;let r;return o;function o(u){let h=i.events.length,d;for(;h--;)if(i.events[h][1].type!=="lineEnding"&&i.events[h][1].type!=="linePrefix"&&i.events[h][1].type!=="content"){d=i.events[h][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||d)?(e.enter("setextHeadingLine"),r=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===r?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),we(u)?_e(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||ae(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const IO={tokenize:CO};function CO(e){const t=this,n=e.attempt(Fs,i,e.attempt(this.parser.constructs.flowInitial,r,_e(e,e.attempt(this.parser.constructs.flow,r,e.attempt(MA,r)),"linePrefix")));return n;function i(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const AO={resolveAll:o1()},OO=r1("string"),PO=r1("text");function r1(e){return{resolveAll:o1(e==="text"?NO:void 0),tokenize:t};function t(n){const i=this,r=this.parser.constructs[e],o=n.attempt(r,s,a);return s;function s(h){return u(h)?o(h):a(h)}function a(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),l}function l(h){return u(h)?(n.exit("data"),o(h)):(n.consume(h),l)}function u(h){if(h===null)return!0;const d=r[h];let f=-1;if(d)for(;++f<d.length;){const p=d[f];if(!p.previous||p.previous.call(i,i.previous))return!0}return!1}}}function o1(e){return t;function t(n,i){let r=-1,o;for(;++r<=n.length;)o===void 0?n[r]&&n[r][1].type==="data"&&(o=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==o+2&&(n[o][1].end=n[r-1][1].end,n.splice(o+2,r-o-2),r=o+2),o=void 0);return e?e(n,i):n}}function NO(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const i=e[n-1][1],r=t.sliceStream(i);let o=r.length,s=-1,a=0,l;for(;o--;){const u=r[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)l=!0,a++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const MO={42:kt,43:kt,45:kt,48:kt,49:kt,50:kt,51:kt,52:kt,53:kt,54:kt,55:kt,56:kt,57:kt,62:Xb},RO={91:BA},LO={[-2]:ju,[-1]:ju,32:ju},FO={35:VA,42:Fa,45:[$g,Fa],60:GA,61:$g,95:Fa,96:Ug,126:Ug},zO={38:Zb,92:Jb},BO={[-5]:Uu,[-4]:Uu,[-3]:Uu,33:fO,38:Zb,42:rd,60:[mA,nO],91:mO,92:[$A,Jb],93:xp,95:rd,96:IA},jO={null:[rd,AO]},UO={null:[42,95]},HO={null:[]},$O=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:UO,contentInitial:RO,disable:HO,document:MO,flow:FO,flowInitial:LO,insideSpan:jO,string:zO,text:BO},Symbol.toStringTag,{value:"Module"}));function WO(e,t,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},o=[];let s=[],a=[];const l={attempt:F(P),check:F(b),consume:y,enter:v,exit:A,interrupt:F(b,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:g,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d};let h=t.tokenize.call(u,l);return t.resolveAll&&o.push(t),u;function d(G){return s=Zt(s,G),C(),s[s.length-1]!==null?[]:(z(t,0),u.events=Yl(o,u.events,u),u.events)}function f(G,X){return YO(p(G),X)}function p(G){return VO(s,G)}function g(){const{_bufferIndex:G,_index:X,line:pe,column:ie,offset:te}=i;return{_bufferIndex:G,_index:X,line:pe,column:ie,offset:te}}function x(G){r[G.line]=G.column,D()}function C(){let G;for(;i._index<s.length;){const X=s[i._index];if(typeof X=="string")for(G=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===G&&i._bufferIndex<X.length;)m(X.charCodeAt(i._bufferIndex));else m(X)}}function m(G){h=h(G)}function y(G){ae(G)?(i.line++,i.column=1,i.offset+=G===-3?2:1,D()):G!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=G}function v(G,X){const pe=X||{};return pe.type=G,pe.start=g(),u.events.push(["enter",pe,u]),a.push(pe),pe}function A(G){const X=a.pop();return X.end=g(),u.events.push(["exit",X,u]),X}function P(G,X){z(G,X.from)}function b(G,X){X.restore()}function F(G,X){return pe;function pe(ie,te,le){let Te,V,J,w;return Array.isArray(ie)?ge(ie):"tokenize"in ie?ge([ie]):de(ie);function de(Se){return Vt;function Vt(bn){const qn=bn!==null&&Se[bn],We=bn!==null&&Se.null,ln=[...Array.isArray(qn)?qn:qn?[qn]:[],...Array.isArray(We)?We:We?[We]:[]];return ge(ln)(bn)}}function ge(Se){return Te=Se,V=0,Se.length===0?le:S(Se[V])}function S(Se){return Vt;function Vt(bn){return w=q(),J=Se,Se.partial||(u.currentConstruct=Se),Se.name&&u.parser.constructs.disable.null.includes(Se.name)?ct():Se.tokenize.call(X?Object.assign(Object.create(u),X):u,l,Oe,ct)(bn)}}function Oe(Se){return G(J,w),te}function ct(Se){return w.restore(),++V<Te.length?S(Te[V]):le}}}function z(G,X){G.resolveAll&&!o.includes(G)&&o.push(G),G.resolve&&Ut(u.events,X,u.events.length-X,G.resolve(u.events.slice(X),u)),G.resolveTo&&(u.events=G.resolveTo(u.events,u))}function q(){const G=g(),X=u.previous,pe=u.currentConstruct,ie=u.events.length,te=Array.from(a);return{from:ie,restore:le};function le(){i=G,u.previous=X,u.currentConstruct=pe,u.events.length=ie,a=te,D()}}function D(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function VO(e,t){const n=t.start._index,i=t.start._bufferIndex,r=t.end._index,o=t.end._bufferIndex;let s;if(n===r)s=[e[n].slice(i,o)];else{if(s=e.slice(n,r),i>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(i):s.shift()}o>0&&s.push(e[r].slice(0,o))}return s}function YO(e,t){let n=-1;const i=[];let r;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&r)continue;s=" ";break}default:s=String.fromCharCode(o)}r=o===-2,i.push(s)}return i.join("")}function qO(e){const i={constructs:Gb([$O,...(e||{}).extensions||[]]),content:r(lA),defined:[],document:r(cA),flow:r(IO),lazy:{},string:r(OO),text:r(PO)};return i;function r(o){return s;function s(a){return WO(i,o,a)}}}function QO(e){for(;!e1(e););return e}const Wg=/[\0\t\n\r]/g;function GO(){let e=1,t="",n=!0,i;return r;function r(o,s,a){const l=[];let u,h,d,f,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),d=0,t="",n&&(o.charCodeAt(0)===65279&&d++,n=void 0);d<o.length;){if(Wg.lastIndex=d,u=Wg.exec(o),f=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(f),!u){t=o.slice(d);break}if(p===10&&d===f&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),d<f&&(l.push(o.slice(d,f)),e+=f-d),p){case 0:{l.push(65533),e++;break}case 9:{for(h=Math.ceil(e/4)*4,l.push(-2);e++<h;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:i=!0,e=1}d=f+1}return a&&(i&&l.push(-5),t&&l.push(t),l.push(null)),l}}const KO=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function XO(e){return e.replace(KO,JO)}function JO(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),o=r===120||r===88;return Kb(n.slice(o?2:1),o?16:10)}return wp(n)||e}const s1={}.hasOwnProperty;function ZO(e,t,n){return typeof t!="string"&&(n=t,t=void 0),eP(n)(QO(qO(n).document().write(GO()(e,t,!0))))}function eP(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Vs),autolinkProtocol:q,autolinkEmail:q,atxHeading:o($s),blockQuote:o(We),characterEscape:q,characterReference:q,codeFenced:o(ln),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(ln,s),codeText:o(Hs,s),codeTextData:q,data:q,codeFlowValue:q,definition:o(tu),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(Nn),hardBreakEscape:o(Ws),hardBreakTrailing:o(Ws),htmlFlow:o(Qr,s),htmlFlowData:q,htmlText:o(Qr,s),htmlTextData:q,image:o(nu),label:s,link:o(Vs),listItem:o(iu),listItemValue:f,listOrdered:o(Ys,d),listUnordered:o(Ys),paragraph:o(Mn),reference:S,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o($s),strong:o(Si),thematicBreak:o(Gr)},exit:{atxHeading:l(),atxHeadingSequence:P,autolink:l(),autolinkEmail:qn,autolinkProtocol:bn,blockQuote:l(),characterEscapeValue:D,characterReferenceMarkerHexadecimal:ct,characterReferenceMarkerNumeric:ct,characterReferenceValue:Se,characterReference:Vt,codeFenced:l(C),codeFencedFence:x,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:D,codeIndented:l(m),codeText:l(te),codeTextData:D,data:D,definition:l(),definitionDestinationString:A,definitionLabelString:y,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(X),hardBreakTrailing:l(X),htmlFlow:l(pe),htmlFlowData:D,htmlText:l(ie),htmlTextData:D,image:l(Te),label:J,labelText:V,lineEnding:G,link:l(le),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Oe,resourceDestinationString:w,resourceTitleString:de,resource:ge,setextHeading:l(z),setextHeadingLineSequence:F,setextHeadingText:b,strong:l(),thematicBreak:l()}};a1(t,(e||{}).mdastExtensions||[]);const n={};return i;function i(L){let Y={type:"root",children:[]};const ce={stack:[Y],tokenStack:[],config:t,enter:a,exit:u,buffer:s,resume:h,data:n},ve=[];let Ie=-1;for(;++Ie<L.length;)if(L[Ie][1].type==="listOrdered"||L[Ie][1].type==="listUnordered")if(L[Ie][0]==="enter")ve.push(Ie);else{const Qe=ve.pop();Ie=r(L,Qe,Ie)}for(Ie=-1;++Ie<L.length;){const Qe=t[L[Ie][0]];s1.call(Qe,L[Ie][1].type)&&Qe[L[Ie][1].type].call(Object.assign({sliceSerialize:L[Ie][2].sliceSerialize},ce),L[Ie][1])}if(ce.tokenStack.length>0){const Qe=ce.tokenStack[ce.tokenStack.length-1];(Qe[1]||Vg).call(ce,void 0,Qe[0])}for(Y.position={start:Xn(L.length>0?L[0][1].start:{line:1,column:1,offset:0}),end:Xn(L.length>0?L[L.length-2][1].end:{line:1,column:1,offset:0})},Ie=-1;++Ie<t.transforms.length;)Y=t.transforms[Ie](Y)||Y;return Y}function r(L,Y,ce){let ve=Y-1,Ie=-1,Qe=!1,Tn,Yt,Qn,ki;for(;++ve<=ce;){const dt=L[ve];switch(dt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{dt[0]==="enter"?Ie++:Ie--,ki=void 0;break}case"lineEndingBlank":{dt[0]==="enter"&&(Tn&&!ki&&!Ie&&!Qn&&(Qn=ve),ki=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ki=void 0}if(!Ie&&dt[0]==="enter"&&dt[1].type==="listItemPrefix"||Ie===-1&&dt[0]==="exit"&&(dt[1].type==="listUnordered"||dt[1].type==="listOrdered")){if(Tn){let un=ve;for(Yt=void 0;un--;){const qt=L[un];if(qt[1].type==="lineEnding"||qt[1].type==="lineEndingBlank"){if(qt[0]==="exit")continue;Yt&&(L[Yt][1].type="lineEndingBlank",Qe=!0),qt[1].type="lineEnding",Yt=un}else if(!(qt[1].type==="linePrefix"||qt[1].type==="blockQuotePrefix"||qt[1].type==="blockQuotePrefixWhitespace"||qt[1].type==="blockQuoteMarker"||qt[1].type==="listItemIndent"))break}Qn&&(!Yt||Qn<Yt)&&(Tn._spread=!0),Tn.end=Object.assign({},Yt?L[Yt][1].start:dt[1].end),L.splice(Yt||ve,0,["exit",Tn,dt[2]]),ve++,ce++}if(dt[1].type==="listItemPrefix"){const un={type:"listItem",_spread:!1,start:Object.assign({},dt[1].start),end:void 0};Tn=un,L.splice(ve,0,["enter",un,dt[2]]),ve++,ce++,Qn=void 0,ki=!0}}}return L[Y][1]._spread=Qe,ce}function o(L,Y){return ce;function ce(ve){a.call(this,L(ve),ve),Y&&Y.call(this,ve)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(L,Y,ce){this.stack[this.stack.length-1].children.push(L),this.stack.push(L),this.tokenStack.push([Y,ce||void 0]),L.position={start:Xn(Y.start),end:void 0}}function l(L){return Y;function Y(ce){L&&L.call(this,ce),u.call(this,ce)}}function u(L,Y){const ce=this.stack.pop(),ve=this.tokenStack.pop();if(ve)ve[0].type!==L.type&&(Y?Y.call(this,L,ve[0]):(ve[1]||Vg).call(this,L,ve[0]));else throw new Error("Cannot close `"+L.type+"` ("+Po({start:L.start,end:L.end})+"): it’s not open");ce.position.end=Xn(L.end)}function h(){return Ep(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(L){if(this.data.expectingFirstListItemValue){const Y=this.stack[this.stack.length-2];Y.start=Number.parseInt(this.sliceSerialize(L),10),this.data.expectingFirstListItemValue=void 0}}function p(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.lang=L}function g(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.meta=L}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.value=L.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.value=L.replace(/(\r?\n|\r)$/g,"")}function y(L){const Y=this.resume(),ce=this.stack[this.stack.length-1];ce.label=Y,ce.identifier=gn(this.sliceSerialize(L)).toLowerCase()}function v(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.title=L}function A(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.url=L}function P(L){const Y=this.stack[this.stack.length-1];if(!Y.depth){const ce=this.sliceSerialize(L).length;Y.depth=ce}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function F(L){const Y=this.stack[this.stack.length-1];Y.depth=this.sliceSerialize(L).codePointAt(0)===61?1:2}function z(){this.data.setextHeadingSlurpLineEnding=void 0}function q(L){const ce=this.stack[this.stack.length-1].children;let ve=ce[ce.length-1];(!ve||ve.type!=="text")&&(ve=qs(),ve.position={start:Xn(L.start),end:void 0},ce.push(ve)),this.stack.push(ve)}function D(L){const Y=this.stack.pop();Y.value+=this.sliceSerialize(L),Y.position.end=Xn(L.end)}function G(L){const Y=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ce=Y.children[Y.children.length-1];ce.position.end=Xn(L.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(Y.type)&&(q.call(this,L),D.call(this,L))}function X(){this.data.atHardBreak=!0}function pe(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.value=L}function ie(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.value=L}function te(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.value=L}function le(){const L=this.stack[this.stack.length-1];if(this.data.inReference){const Y=this.data.referenceType||"shortcut";L.type+="Reference",L.referenceType=Y,delete L.url,delete L.title}else delete L.identifier,delete L.label;this.data.referenceType=void 0}function Te(){const L=this.stack[this.stack.length-1];if(this.data.inReference){const Y=this.data.referenceType||"shortcut";L.type+="Reference",L.referenceType=Y,delete L.url,delete L.title}else delete L.identifier,delete L.label;this.data.referenceType=void 0}function V(L){const Y=this.sliceSerialize(L),ce=this.stack[this.stack.length-2];ce.label=XO(Y),ce.identifier=gn(Y).toLowerCase()}function J(){const L=this.stack[this.stack.length-1],Y=this.resume(),ce=this.stack[this.stack.length-1];if(this.data.inReference=!0,ce.type==="link"){const ve=L.children;ce.children=ve}else ce.alt=Y}function w(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.url=L}function de(){const L=this.resume(),Y=this.stack[this.stack.length-1];Y.title=L}function ge(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function Oe(L){const Y=this.resume(),ce=this.stack[this.stack.length-1];ce.label=Y,ce.identifier=gn(this.sliceSerialize(L)).toLowerCase(),this.data.referenceType="full"}function ct(L){this.data.characterReferenceType=L.type}function Se(L){const Y=this.sliceSerialize(L),ce=this.data.characterReferenceType;let ve;ce?(ve=Kb(Y,ce==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ve=wp(Y);const Ie=this.stack[this.stack.length-1];Ie.value+=ve}function Vt(L){const Y=this.stack.pop();Y.position.end=Xn(L.end)}function bn(L){D.call(this,L);const Y=this.stack[this.stack.length-1];Y.url=this.sliceSerialize(L)}function qn(L){D.call(this,L);const Y=this.stack[this.stack.length-1];Y.url="mailto:"+this.sliceSerialize(L)}function We(){return{type:"blockquote",children:[]}}function ln(){return{type:"code",lang:null,meta:null,value:""}}function Hs(){return{type:"inlineCode",value:""}}function tu(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Nn(){return{type:"emphasis",children:[]}}function $s(){return{type:"heading",depth:0,children:[]}}function Ws(){return{type:"break"}}function Qr(){return{type:"html",value:""}}function nu(){return{type:"image",title:null,url:"",alt:null}}function Vs(){return{type:"link",title:null,url:"",children:[]}}function Ys(L){return{type:"list",ordered:L.type==="listOrdered",start:null,spread:L._spread,children:[]}}function iu(L){return{type:"listItem",spread:L._spread,checked:null,children:[]}}function Mn(){return{type:"paragraph",children:[]}}function Si(){return{type:"strong",children:[]}}function qs(){return{type:"text",value:""}}function Gr(){return{type:"thematicBreak"}}}function Xn(e){return{line:e.line,column:e.column,offset:e.offset}}function a1(e,t){let n=-1;for(;++n<t.length;){const i=t[n];Array.isArray(i)?a1(e,i):tP(e,i)}}function tP(e,t){let n;for(n in t)if(s1.call(t,n))switch(n){case"canContainEols":{const i=t[n];i&&e[n].push(...i);break}case"transforms":{const i=t[n];i&&e[n].push(...i);break}case"enter":case"exit":{const i=t[n];i&&Object.assign(e[n],i);break}}}function Vg(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Po({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Po({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Po({start:t.start,end:t.end})+") is still open")}function nP(e){const t=this;t.parser=n;function n(i){return ZO(i,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function iP(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function rP(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function oP(e,t){const n=t.value?t.value+`
`:"",i={};t.lang&&(i.className=["language-"+t.lang]);let r={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return t.meta&&(r.data={meta:t.meta}),e.patch(t,r),r=e.applyData(t,r),r={type:"element",tagName:"pre",properties:{},children:[r]},e.patch(t,r),r}function sP(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function aP(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function lP(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(t.identifier).toUpperCase(),r=$r(i.toLowerCase()),o=e.footnoteOrder.indexOf(i);let s,a=e.footnoteCounts.get(i);a===void 0?(a=0,e.footnoteOrder.push(i),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(i,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,u),e.applyData(t,u)}function uP(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function cP(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function l1(e,t){const n=t.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+i}];const r=e.all(t),o=r[0];o&&o.type==="text"?o.value="["+o.value:r.unshift({type:"text",value:"["});const s=r[r.length-1];return s&&s.type==="text"?s.value+=i:r.push({type:"text",value:i}),r}function dP(e,t){const n=String(t.identifier).toUpperCase(),i=e.definitionById.get(n);if(!i)return l1(e,t);const r={src:$r(i.url||""),alt:t.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,o),e.applyData(t,o)}function hP(e,t){const n={src:$r(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const i={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,i),e.applyData(t,i)}function fP(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,i),e.applyData(t,i)}function pP(e,t){const n=String(t.identifier).toUpperCase(),i=e.definitionById.get(n);if(!i)return l1(e,t);const r={href:$r(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function mP(e,t){const n={href:$r(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const i={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function gP(e,t,n){const i=e.all(t),r=n?yP(n):u1(t),o={},s=[];if(typeof t.checked=="boolean"){const h=i[0];let d;h&&h.type==="element"&&h.tagName==="p"?d=h:(d={type:"element",tagName:"p",properties:{},children:[]},i.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<i.length;){const h=i[a];(r||a!==0||h.type!=="element"||h.tagName!=="p")&&s.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!r?s.push(...h.children):s.push(h)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,u),e.applyData(t,u)}function yP(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let i=-1;for(;!t&&++i<n.length;)t=u1(n[i])}return t}function u1(e){const t=e.spread;return t??e.children.length>1}function vP(e,t){const n={},i=e.all(t);let r=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++r<i.length;){const s=i[r];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function bP(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function TP(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function EP(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wP(e,t){const n=e.all(t),i=n.shift(),r=[];if(i){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(t.children[0],s),r.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=On(t.children[1]),l=Wl(t.children[t.children.length-1]);a&&l&&(s.position={start:a,end:l}),r.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function xP(e,t,n){const i=n?n.children:void 0,o=(i?i.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let l=-1;const u=[];for(;++l<a;){const d=t.children[l],f={},p=s?s[l]:void 0;p&&(f.align=p);let g={type:"element",tagName:o,properties:f,children:[]};d&&(g.children=e.all(d),e.patch(d,g),g=e.applyData(d,g)),u.push(g)}const h={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,h),e.applyData(t,h)}function _P(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Yg=9,qg=32;function SP(e){const t=String(e),n=/\r?\n|\r/g;let i=n.exec(t),r=0;const o=[];for(;i;)o.push(Qg(t.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(t);return o.push(Qg(t.slice(r),r>0,!1)),o.join("")}function Qg(e,t,n){let i=0,r=e.length;if(t){let o=e.codePointAt(i);for(;o===Yg||o===qg;)i++,o=e.codePointAt(i)}if(n){let o=e.codePointAt(r-1);for(;o===Yg||o===qg;)r--,o=e.codePointAt(r-1)}return r>i?e.slice(i,r):""}function kP(e,t){const n={type:"text",value:SP(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function DP(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const IP={blockquote:iP,break:rP,code:oP,delete:sP,emphasis:aP,footnoteReference:lP,heading:uP,html:cP,imageReference:dP,image:hP,inlineCode:fP,linkReference:pP,link:mP,listItem:gP,list:vP,paragraph:bP,root:TP,strong:EP,table:wP,tableCell:_P,tableRow:xP,text:kP,thematicBreak:DP,toml:ya,yaml:ya,definition:ya,footnoteDefinition:ya};function ya(){}const c1=-1,ql=0,Mo=1,yl=2,_p=3,Sp=4,kp=5,Dp=6,d1=7,h1=8,Gg=typeof self=="object"?self:globalThis,CP=(e,t)=>{const n=(r,o)=>(e.set(o,r),r),i=r=>{if(e.has(r))return e.get(r);const[o,s]=t[r];switch(o){case ql:case c1:return n(s,r);case Mo:{const a=n([],r);for(const l of s)a.push(i(l));return a}case yl:{const a=n({},r);for(const[l,u]of s)a[i(l)]=i(u);return a}case _p:return n(new Date(s),r);case Sp:{const{source:a,flags:l}=s;return n(new RegExp(a,l),r)}case kp:{const a=n(new Map,r);for(const[l,u]of s)a.set(i(l),i(u));return a}case Dp:{const a=n(new Set,r);for(const l of s)a.add(i(l));return a}case d1:{const{name:a,message:l}=s;return n(new Gg[a](l),r)}case h1:return n(BigInt(s),r);case"BigInt":return n(Object(BigInt(s)),r);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(new Gg[o](s),r)};return i},Kg=e=>CP(new Map,e)(0),ir="",{toString:AP}={},{keys:OP}=Object,fo=e=>{const t=typeof e;if(t!=="object"||!e)return[ql,t];const n=AP.call(e).slice(8,-1);switch(n){case"Array":return[Mo,ir];case"Object":return[yl,ir];case"Date":return[_p,ir];case"RegExp":return[Sp,ir];case"Map":return[kp,ir];case"Set":return[Dp,ir];case"DataView":return[Mo,n]}return n.includes("Array")?[Mo,n]:n.includes("Error")?[d1,n]:[yl,n]},va=([e,t])=>e===ql&&(t==="function"||t==="symbol"),PP=(e,t,n,i)=>{const r=(s,a)=>{const l=i.push(s)-1;return n.set(a,l),l},o=s=>{if(n.has(s))return n.get(s);let[a,l]=fo(s);switch(a){case ql:{let h=s;switch(l){case"bigint":a=h1,h=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);h=null;break;case"undefined":return r([c1],s)}return r([a,h],s)}case Mo:{if(l){let f=s;return l==="DataView"?f=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(f=new Uint8Array(s)),r([l,[...f]],s)}const h=[],d=r([a,h],s);for(const f of s)h.push(o(f));return d}case yl:{if(l)switch(l){case"BigInt":return r([l,s.toString()],s);case"Boolean":case"Number":case"String":return r([l,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const h=[],d=r([a,h],s);for(const f of OP(s))(e||!va(fo(s[f])))&&h.push([o(f),o(s[f])]);return d}case _p:return r([a,s.toISOString()],s);case Sp:{const{source:h,flags:d}=s;return r([a,{source:h,flags:d}],s)}case kp:{const h=[],d=r([a,h],s);for(const[f,p]of s)(e||!(va(fo(f))||va(fo(p))))&&h.push([o(f),o(p)]);return d}case Dp:{const h=[],d=r([a,h],s);for(const f of s)(e||!va(fo(f)))&&h.push(o(f));return d}}const{message:u}=s;return r([a,{name:l,message:u}],s)};return o},Xg=(e,{json:t,lossy:n}={})=>{const i=[];return PP(!(t||n),!!t,new Map,i)(e),i},Lr=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Kg(Xg(e,t)):structuredClone(e):(e,t)=>Kg(Xg(e,t));function NP(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function MP(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function RP(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||NP,i=e.options.footnoteBackLabel||MP,r=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const h=e.all(u),d=String(u.identifier).toUpperCase(),f=$r(d.toLowerCase());let p=0;const g=[],x=e.footnoteCounts.get(d);for(;x!==void 0&&++p<=x;){g.length>0&&g.push({type:"text",value:" "});let y=typeof n=="string"?n:n(l,p);typeof y=="string"&&(y={type:"text",value:y}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,p),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const C=h[h.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const y=C.children[C.children.length-1];y&&y.type==="text"?y.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...g)}else h.push(...g);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(h,!0)};e.patch(u,m),a.push(m)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Lr(s),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Ql=function(e){if(e==null)return BP;if(typeof e=="function")return Gl(e);if(typeof e=="object")return Array.isArray(e)?LP(e):FP(e);if(typeof e=="string")return zP(e);throw new Error("Expected function, string, or object as test")};function LP(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ql(e[n]);return Gl(i);function i(...r){let o=-1;for(;++o<t.length;)if(t[o].apply(this,r))return!0;return!1}}function FP(e){const t=e;return Gl(n);function n(i){const r=i;let o;for(o in e)if(r[o]!==t[o])return!1;return!0}}function zP(e){return Gl(t);function t(n){return n&&n.type===e}}function Gl(e){return t;function t(n,i,r){return!!(jP(n)&&e.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function BP(){return!0}function jP(e){return e!==null&&typeof e=="object"&&"type"in e}const f1=[],UP=!0,od=!1,HP="skip";function p1(e,t,n,i){let r;typeof t=="function"&&typeof n!="function"?(i=n,n=t):r=t;const o=Ql(r),s=i?-1:1;a(e,void 0,[])();function a(l,u,h){const d=l&&typeof l=="object"?l:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=f1,g,x,C;if((!t||o(l,u,h[h.length-1]||void 0))&&(p=$P(n(l,h)),p[0]===od))return p;if("children"in l&&l.children){const m=l;if(m.children&&p[0]!==HP)for(x=(i?m.children.length:-1)+s,C=h.concat(m);x>-1&&x<m.children.length;){const y=m.children[x];if(g=a(y,x,C)(),g[0]===od)return g;x=typeof g[1]=="number"?g[1]:x+s}}return p}}}function $P(e){return Array.isArray(e)?e:typeof e=="number"?[UP,e]:e==null?f1:[e]}function Kl(e,t,n,i){let r,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,r=n):(o=t,s=n,r=i),p1(e,o,a,r);function a(l,u){const h=u[u.length-1],d=h?h.children.indexOf(l):void 0;return s(l,d,h)}}const sd={}.hasOwnProperty,WP={};function VP(e,t){const n=t||WP,i=new Map,r=new Map,o=new Map,s={...IP,...n.handlers},a={all:u,applyData:qP,definitionById:i,footnoteById:r,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:n,patch:YP,wrap:GP};return Kl(e,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const d=h.type==="definition"?i:r,f=String(h.identifier).toUpperCase();d.has(f)||d.set(f,h)}}),a;function l(h,d){const f=h.type,p=a.handlers[f];if(sd.call(a.handlers,f)&&p)return p(a,h,d);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in h){const{children:x,...C}=h,m=Lr(C);return m.children=a.all(h),m}return Lr(h)}return(a.options.unknownHandler||QP)(a,h,d)}function u(h){const d=[];if("children"in h){const f=h.children;let p=-1;for(;++p<f.length;){const g=a.one(f[p],h);if(g){if(p&&f[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Jg(g.value)),!Array.isArray(g)&&g.type==="element")){const x=g.children[0];x&&x.type==="text"&&(x.value=Jg(x.value))}Array.isArray(g)?d.push(...g):d.push(g)}}}return d}}function YP(e,t){e.position&&(t.position=MC(e))}function qP(e,t){let n=t;if(e&&e.data){const i=e.data.hName,r=e.data.hChildren,o=e.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const s="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,Lr(o)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function QP(e,t){const n=t.data||{},i="value"in t&&!(sd.call(n,"hProperties")||sd.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function GP(e,t){const n=[];let i=-1;for(t&&n.push({type:"text",value:`
`});++i<e.length;)i&&n.push({type:"text",value:`
`}),n.push(e[i]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Jg(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Zg(e,t){const n=VP(e,t),i=n.one(e,void 0),r=RP(n),o=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&o.children.push({type:"text",value:`
`},r),o}function KP(e,t){return e&&"run"in e?async function(n,i){const r=Zg(n,{file:i,...t});await e.run(r,i)}:function(n,i){return Zg(n,{file:i,...e||t})}}function ey(e){if(e)throw e}var za=Object.prototype.hasOwnProperty,m1=Object.prototype.toString,ty=Object.defineProperty,ny=Object.getOwnPropertyDescriptor,iy=function(t){return typeof Array.isArray=="function"?Array.isArray(t):m1.call(t)==="[object Array]"},ry=function(t){if(!t||m1.call(t)!=="[object Object]")return!1;var n=za.call(t,"constructor"),i=t.constructor&&t.constructor.prototype&&za.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!i)return!1;var r;for(r in t);return typeof r>"u"||za.call(t,r)},oy=function(t,n){ty&&n.name==="__proto__"?ty(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},sy=function(t,n){if(n==="__proto__")if(za.call(t,n)){if(ny)return ny(t,n).value}else return;return t[n]},XP=function e(){var t,n,i,r,o,s,a=arguments[0],l=1,u=arguments.length,h=!1;for(typeof a=="boolean"&&(h=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)i=sy(a,n),r=sy(t,n),a!==r&&(h&&r&&(ry(r)||(o=iy(r)))?(o?(o=!1,s=i&&iy(i)?i:[]):s=i&&ry(i)?i:{},oy(a,{name:n,newValue:e(h,s,r)})):typeof r<"u"&&oy(a,{name:n,newValue:r}));return a};const Hu=of(XP);function ad(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function JP(){const e=[],t={run:n,use:i};return t;function n(...r){let o=-1;const s=r.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...r);function a(l,...u){const h=e[++o];let d=-1;if(l){s(l);return}for(;++d<r.length;)(u[d]===null||u[d]===void 0)&&(u[d]=r[d]);r=u,h?ZP(h,a)(...u):s(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return e.push(r),t}}function ZP(e,t){let n;return i;function i(...s){const a=e.length>s.length;let l;a&&s.push(r);try{l=e.apply(this,s)}catch(u){const h=u;if(a&&n)throw h;return r(h)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,r):l instanceof Error?r(l):o(l))}function r(s,...a){n||(n=!0,t(s,...a))}function o(s){r(null,s)}}const xn={basename:eN,dirname:tN,extname:nN,join:iN,sep:"/"};function eN(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');zs(e);let n=0,i=-1,r=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;r--;)if(e.codePointAt(r)===47){if(o){n=r+1;break}}else i<0&&(o=!0,i=r+1);return i<0?"":e.slice(n,i)}if(t===e)return"";let s=-1,a=t.length-1;for(;r--;)if(e.codePointAt(r)===47){if(o){n=r+1;break}}else s<0&&(o=!0,s=r+1),a>-1&&(e.codePointAt(r)===t.codePointAt(a--)?a<0&&(i=r):(a=-1,i=s));return n===i?i=s:i<0&&(i=e.length),e.slice(n,i)}function tN(e){if(zs(e),e.length===0)return".";let t=-1,n=e.length,i;for(;--n;)if(e.codePointAt(n)===47){if(i){t=n;break}}else i||(i=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function nN(e){zs(e);let t=e.length,n=-1,i=0,r=-1,o=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){i=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?r<0?r=t:o!==1&&(o=1):r>-1&&(o=-1)}return r<0||n<0||o===0||o===1&&r===n-1&&r===i+1?"":e.slice(r,n)}function iN(...e){let t=-1,n;for(;++t<e.length;)zs(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":rN(n)}function rN(e){zs(e);const t=e.codePointAt(0)===47;let n=oN(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function oN(e,t){let n="",i=0,r=-1,o=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(r===s-1||o===1))if(r!==s-1&&o===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=s,o=0;continue}}else if(n.length>0){n="",i=0,r=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+e.slice(r+1,s):n=e.slice(r+1,s),i=s-r-1;r=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function zs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const sN={cwd:aN};function aN(){return"/"}function ld(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function lN(e){if(typeof e=="string")e=new URL(e);else if(!ld(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return uN(e)}function uN(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const i=t.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(t)}const $u=["history","path","basename","stem","extname","dirname"];class g1{constructor(t){let n;t?ld(t)?n={path:t}:typeof t=="string"||cN(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":sN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<$u.length;){const o=$u[i];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let r;for(r in n)$u.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?xn.basename(this.path):void 0}set basename(t){Vu(t,"basename"),Wu(t,"basename"),this.path=xn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?xn.dirname(this.path):void 0}set dirname(t){ay(this.basename,"dirname"),this.path=xn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?xn.extname(this.path):void 0}set extname(t){if(Wu(t,"extname"),ay(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=xn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){ld(t)&&(t=lN(t)),Vu(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?xn.basename(this.path,this.extname):void 0}set stem(t){Vu(t,"stem"),Wu(t,"stem"),this.path=xn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,i){const r=this.message(t,n,i);throw r.fatal=!0,r}info(t,n,i){const r=this.message(t,n,i);return r.fatal=void 0,r}message(t,n,i){const r=new vt(t,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Wu(e,t){if(e&&e.includes(xn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+xn.sep+"`")}function Vu(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ay(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function cN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const dN=function(e){const i=this.constructor.prototype,r=i[e],o=function(){return r.apply(o,arguments)};return Object.setPrototypeOf(o,i),o},hN={}.hasOwnProperty;class Ip extends dN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=JP()}copy(){const t=new Ip;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];t.use(...i)}return t.data(Hu(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Qu("data",this.frozen),this.namespace[t]=n,this):hN.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Qu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(t,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=ba(t),i=this.parser||this.Parser;return Yu("parse",i),i(String(n),n)}process(t,n){const i=this;return this.freeze(),Yu("process",this.parser||this.Parser),qu("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(o,s){const a=ba(t),l=i.parse(a);i.run(l,a,function(h,d,f){if(h||!d||!f)return u(h);const p=d,g=i.stringify(p,f);mN(g)?f.value=g:f.result=g,u(h,f)});function u(h,d){h||!d?s(h):o?o(d):n(void 0,d)}}}processSync(t){let n=!1,i;return this.freeze(),Yu("processSync",this.parser||this.Parser),qu("processSync",this.compiler||this.Compiler),this.process(t,r),uy("processSync","process",n),i;function r(o,s){n=!0,ey(o),i=s}}run(t,n,i){ly(t),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?o(void 0,i):new Promise(o);function o(s,a){const l=ba(n);r.run(t,l,u);function u(h,d,f){const p=d||t;h?a(h):s?s(p):i(void 0,p,f)}}}runSync(t,n){let i=!1,r;return this.run(t,n,o),uy("runSync","run",i),r;function o(s,a){ey(s),r=a,i=!0}}stringify(t,n){this.freeze();const i=ba(n),r=this.compiler||this.Compiler;return qu("stringify",r),ly(t),r(t,i)}use(t,...n){const i=this.attachers,r=this.namespace;if(Qu("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[h,...d]=u;l(h,d)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(r.settings=Hu(!0,r.settings,u.settings))}function a(u){let h=-1;if(u!=null)if(Array.isArray(u))for(;++h<u.length;){const d=u[h];o(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,h){let d=-1,f=-1;for(;++d<i.length;)if(i[d][0]===u){f=d;break}if(f===-1)i.push([u,...h]);else if(h.length>0){let[p,...g]=h;const x=i[f][1];ad(x)&&ad(p)&&(p=Hu(!0,x,p)),i[f]=[u,p,...g]}}}}const fN=new Ip().freeze();function Yu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function qu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Qu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ly(e){if(!ad(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function uy(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function ba(e){return pN(e)?e:new g1(e)}function pN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function mN(e){return typeof e=="string"||gN(e)}function gN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const yN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",cy=[],dy={allowDangerousHtml:!0},vN=/^(https?|ircs?|mailto|xmpp)$/i,bN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function TN(e){const t=EN(e),n=wN(e);return xN(t.runSync(t.parse(n),n),e)}function EN(e){const t=e.rehypePlugins||cy,n=e.remarkPlugins||cy,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...dy}:dy;return fN().use(nP).use(n).use(KP,i).use(t)}function wN(e){const t=e.children||"",n=new g1;return typeof t=="string"&&(n.value=t),n}function xN(e,t){const n=t.allowedElements,i=t.allowElement,r=t.components,o=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,l=t.urlTransform||_N;for(const h of bN)Object.hasOwn(t,h.from)&&(""+h.from+(h.to?"use `"+h.to+"` instead":"remove it")+yN+h.id,void 0);return Kl(e,u),BC(e,{Fragment:Q.Fragment,components:r,ignoreInvalidStyle:!0,jsx:Q.jsx,jsxs:Q.jsxs,passKeys:!0,passNode:!0});function u(h,d,f){if(h.type==="raw"&&f&&typeof d=="number")return s?f.children.splice(d,1):f.children[d]={type:"text",value:h.value},d;if(h.type==="element"){let p;for(p in Bu)if(Object.hasOwn(Bu,p)&&Object.hasOwn(h.properties,p)){const g=h.properties[p],x=Bu[p];(x===null||x.includes(h.tagName))&&(h.properties[p]=l(String(g||""),p,h))}}if(h.type==="element"){let p=n?!n.includes(h.tagName):o?o.includes(h.tagName):!1;if(!p&&i&&typeof d=="number"&&(p=!i(h,d,f)),p&&f&&typeof d=="number")return a&&h.children?f.children.splice(d,1,...h.children):f.children.splice(d,1),d}}}function _N(e){const t=e.indexOf(":"),n=e.indexOf("?"),i=e.indexOf("#"),r=e.indexOf("/");return t===-1||r!==-1&&t>r||n!==-1&&t>n||i!==-1&&t>i||vN.test(e.slice(0,t))?e:""}const hy=/[#.]/g;function SN(e,t){const n=e||"",i={};let r=0,o,s;for(;r<n.length;){hy.lastIndex=r;const a=hy.exec(n),l=n.slice(r,a?a.index:n.length);l&&(o?o==="#"?i.id=l:Array.isArray(i.className)?i.className.push(l):i.className=[l]:s=l,r+=l.length),a&&(o=a[0],r++)}return{type:"element",tagName:s||t||"div",properties:i,children:[]}}function y1(e,t,n){const i=n?CN(n):void 0;function r(o,s,...a){let l;if(o==null){l={type:"root",children:[]};const u=s;a.unshift(u)}else{l=SN(o,t);const u=l.tagName.toLowerCase(),h=i?i.get(u):void 0;if(l.tagName=h||u,kN(s))a.unshift(s);else for(const[d,f]of Object.entries(s))DN(e,l.properties,d,f)}for(const u of a)ud(l.children,u);return l.type==="element"&&l.tagName==="template"&&(l.content={type:"root",children:l.children},l.children=[]),l}return r}function kN(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const i of n){const r=t[i];if(r&&typeof r=="object"){if(!Array.isArray(r))return!0;const o=r;for(const s of o)if(typeof s!="number"&&typeof s!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function DN(e,t,n,i){const r=gp(e,n);let o;if(i!=null){if(typeof i=="number"){if(Number.isNaN(i))return;o=i}else typeof i=="boolean"?o=i:typeof i=="string"?r.spaceSeparated?o=Dg(i):r.commaSeparated?o=wg(i):r.commaOrSpaceSeparated?o=Dg(wg(i).join(" ")):o=fy(r,r.property,i):Array.isArray(i)?o=[...i]:o=r.property==="style"?IN(i):String(i);if(Array.isArray(o)){const s=[];for(const a of o)s.push(fy(r,r.property,a));o=s}r.property==="className"&&Array.isArray(t.className)&&(o=t.className.concat(o)),t[r.property]=o}}function ud(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const n of t)ud(e,n);else if(typeof t=="object"&&"type"in t)t.type==="root"?ud(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function fy(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||os(n)===os(t)))return!0}return n}function IN(e){const t=[];for(const[n,i]of Object.entries(e))t.push([n,i].join(": "));return t.join("; ")}function CN(e){const t=new Map;for(const n of e)t.set(n.toLowerCase(),n);return t}const AN=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],ON=y1(Hl,"div"),PN=y1(Hr,"g",AN);function NN(e){const t=String(e),n=[];return{toOffset:r,toPoint:i};function i(o){if(typeof o=="number"&&o>-1&&o<=t.length){let s=0;for(;;){let a=n[s];if(a===void 0){const l=py(t,n[s-1]);a=l===-1?t.length+1:l+1,n[s]=a}if(a>o)return{line:s+1,column:o-(s>0?n[s-1]:0)+1,offset:o};s++}}}function r(o){if(o&&typeof o.line=="number"&&typeof o.column=="number"&&!Number.isNaN(o.line)&&!Number.isNaN(o.column)){for(;n.length<o.line;){const a=n[n.length-1],l=py(t,a),u=l===-1?t.length+1:l+1;if(a===u)break;n.push(u)}const s=(o.line>1?n[o.line-2]:0)+o.column-1;if(s<n[o.line-1])return s}}}function py(e,t){const n=e.indexOf("\r",t),i=e.indexOf(`
`,t);return i===-1?n:n===-1||n+1===i?i:n<i?n:i}const zi={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},v1={}.hasOwnProperty,MN=Object.prototype;function RN(e,t){const n=t||{};return Cp({file:n.file||void 0,location:!1,schema:n.space==="svg"?Hr:Hl,verbose:n.verbose||!1},e)}function Cp(e,t){let n;switch(t.nodeName){case"#comment":{const i=t;return n={type:"comment",value:i.data},Ba(e,i,n),n}case"#document":case"#document-fragment":{const i=t,r="mode"in i?i.mode==="quirks"||i.mode==="limited-quirks":!1;if(n={type:"root",children:b1(e,t.childNodes),data:{quirksMode:r}},e.file&&e.location){const o=String(e.file),s=NN(o),a=s.toPoint(0),l=s.toPoint(o.length);n.position={start:a,end:l}}return n}case"#documentType":{const i=t;return n={type:"doctype"},Ba(e,i,n),n}case"#text":{const i=t;return n={type:"text",value:i.value},Ba(e,i,n),n}default:return n=LN(e,t),n}}function b1(e,t){let n=-1;const i=[];for(;++n<t.length;){const r=Cp(e,t[n]);i.push(r)}return i}function LN(e,t){const n=e.schema;e.schema=t.namespaceURI===zi.svg?Hr:Hl;let i=-1;const r={};for(;++i<t.attrs.length;){const a=t.attrs[i],l=(a.prefix?a.prefix+":":"")+a.name;v1.call(MN,l)||(r[l]=a.value)}const s=(e.schema.space==="svg"?PN:ON)(t.tagName,r,b1(e,t.childNodes));if(Ba(e,t,s),s.tagName==="template"){const a=t,l=a.sourceCodeLocation,u=l&&l.startTag&&vr(l.startTag),h=l&&l.endTag&&vr(l.endTag),d=Cp(e,a.content);u&&h&&e.file&&(d.position={start:u.end,end:h.start}),s.content=d}return e.schema=n,s}function Ba(e,t,n){if("sourceCodeLocation"in t&&t.sourceCodeLocation&&e.file){const i=FN(e,n,t.sourceCodeLocation);i&&(e.location=!0,n.position=i)}}function FN(e,t,n){const i=vr(n);if(t.type==="element"){const r=t.children[t.children.length-1];if(i&&!n.endTag&&r&&r.position&&r.position.end&&(i.end=Object.assign({},r.position.end)),e.verbose){const o={};let s;if(n.attrs)for(s in n.attrs)v1.call(n.attrs,s)&&(o[gp(e.schema,s).property]=vr(n.attrs[s]));n.startTag;const a=vr(n.startTag),l=n.endTag?vr(n.endTag):void 0,u={opening:a};l&&(u.closing=l),u.properties=o,t.data={position:u}}}return i}function vr(e){const t=my({line:e.startLine,column:e.startCol,offset:e.startOffset}),n=my({line:e.endLine,column:e.endCol,offset:e.endOffset});return t||n?{start:t,end:n}:void 0}function my(e){return e.line&&e.column?e:void 0}class Bs{constructor(t,n,i){this.property=t,this.normal=n,i&&(this.space=i)}}Bs.prototype.property={};Bs.prototype.normal={};Bs.prototype.space=null;function T1(e,t){const n={},i={};let r=-1;for(;++r<e.length;)Object.assign(n,e[r].property),Object.assign(i,e[r].normal);return new Bs(n,i,t)}function cd(e){return e.toLowerCase()}class an{constructor(t,n){this.property=t,this.attribute=n}}an.prototype.space=null;an.prototype.boolean=!1;an.prototype.booleanish=!1;an.prototype.overloadedBoolean=!1;an.prototype.number=!1;an.prototype.commaSeparated=!1;an.prototype.spaceSeparated=!1;an.prototype.commaOrSpaceSeparated=!1;an.prototype.mustUseProperty=!1;an.prototype.defined=!1;let zN=0;const fe=Zi(),Xe=Zi(),E1=Zi(),W=Zi(),Re=Zi(),Dr=Zi(),Rt=Zi();function Zi(){return 2**++zN}const dd=Object.freeze(Object.defineProperty({__proto__:null,boolean:fe,booleanish:Xe,commaOrSpaceSeparated:Rt,commaSeparated:Dr,number:W,overloadedBoolean:E1,spaceSeparated:Re},Symbol.toStringTag,{value:"Module"})),Gu=Object.keys(dd);class Ap extends an{constructor(t,n,i,r){let o=-1;if(super(t,n),gy(this,"space",r),typeof i=="number")for(;++o<Gu.length;){const s=Gu[o];gy(this,Gu[o],(i&dd[s])===dd[s])}}}Ap.prototype.defined=!0;function gy(e,t,n){n&&(e[t]=n)}const BN={}.hasOwnProperty;function Wr(e){const t={},n={};let i;for(i in e.properties)if(BN.call(e.properties,i)){const r=e.properties[i],o=new Ap(i,e.transform(e.attributes||{},i),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),t[i]=o,n[cd(i)]=i,n[cd(o.attribute)]=i}return new Bs(t,n,e.space)}const w1=Wr({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),x1=Wr({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function _1(e,t){return t in e?e[t]:t}function S1(e,t){return _1(e,t.toLowerCase())}const k1=Wr({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:S1,properties:{xmlns:null,xmlnsXLink:null}}),D1=Wr({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Xe,ariaAutoComplete:null,ariaBusy:Xe,ariaChecked:Xe,ariaColCount:W,ariaColIndex:W,ariaColSpan:W,ariaControls:Re,ariaCurrent:null,ariaDescribedBy:Re,ariaDetails:null,ariaDisabled:Xe,ariaDropEffect:Re,ariaErrorMessage:null,ariaExpanded:Xe,ariaFlowTo:Re,ariaGrabbed:Xe,ariaHasPopup:null,ariaHidden:Xe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Re,ariaLevel:W,ariaLive:null,ariaModal:Xe,ariaMultiLine:Xe,ariaMultiSelectable:Xe,ariaOrientation:null,ariaOwns:Re,ariaPlaceholder:null,ariaPosInSet:W,ariaPressed:Xe,ariaReadOnly:Xe,ariaRelevant:null,ariaRequired:Xe,ariaRoleDescription:Re,ariaRowCount:W,ariaRowIndex:W,ariaRowSpan:W,ariaSelected:Xe,ariaSetSize:W,ariaSort:null,ariaValueMax:W,ariaValueMin:W,ariaValueNow:W,ariaValueText:null,role:null}}),jN=Wr({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:S1,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Dr,acceptCharset:Re,accessKey:Re,action:null,allow:null,allowFullScreen:fe,allowPaymentRequest:fe,allowUserMedia:fe,alt:null,as:null,async:fe,autoCapitalize:null,autoComplete:Re,autoFocus:fe,autoPlay:fe,blocking:Re,capture:null,charSet:null,checked:fe,cite:null,className:Re,cols:W,colSpan:null,content:null,contentEditable:Xe,controls:fe,controlsList:Re,coords:W|Dr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:fe,defer:fe,dir:null,dirName:null,disabled:fe,download:E1,draggable:Xe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:fe,formTarget:null,headers:Re,height:W,hidden:fe,high:W,href:null,hrefLang:null,htmlFor:Re,httpEquiv:Re,id:null,imageSizes:null,imageSrcSet:null,inert:fe,inputMode:null,integrity:null,is:null,isMap:fe,itemId:null,itemProp:Re,itemRef:Re,itemScope:fe,itemType:Re,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:fe,low:W,manifest:null,max:null,maxLength:W,media:null,method:null,min:null,minLength:W,multiple:fe,muted:fe,name:null,nonce:null,noModule:fe,noValidate:fe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:fe,optimum:W,pattern:null,ping:Re,placeholder:null,playsInline:fe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:fe,referrerPolicy:null,rel:Re,required:fe,reversed:fe,rows:W,rowSpan:W,sandbox:Re,scope:null,scoped:fe,seamless:fe,selected:fe,shadowRootClonable:fe,shadowRootDelegatesFocus:fe,shadowRootMode:null,shape:null,size:W,sizes:null,slot:null,span:W,spellCheck:Xe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:W,step:null,style:null,tabIndex:W,target:null,title:null,translate:null,type:null,typeMustMatch:fe,useMap:null,value:Xe,width:W,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Re,axis:null,background:null,bgColor:null,border:W,borderColor:null,bottomMargin:W,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:fe,declare:fe,event:null,face:null,frame:null,frameBorder:null,hSpace:W,leftMargin:W,link:null,longDesc:null,lowSrc:null,marginHeight:W,marginWidth:W,noResize:fe,noHref:fe,noShade:fe,noWrap:fe,object:null,profile:null,prompt:null,rev:null,rightMargin:W,rules:null,scheme:null,scrolling:Xe,standby:null,summary:null,text:null,topMargin:W,valueType:null,version:null,vAlign:null,vLink:null,vSpace:W,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:fe,disableRemotePlayback:fe,prefix:null,property:null,results:W,security:null,unselectable:null}}),UN=Wr({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:_1,properties:{about:Rt,accentHeight:W,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:W,amplitude:W,arabicForm:null,ascent:W,attributeName:null,attributeType:null,azimuth:W,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:W,by:null,calcMode:null,capHeight:W,className:Re,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:W,diffuseConstant:W,direction:null,display:null,dur:null,divisor:W,dominantBaseline:null,download:fe,dx:null,dy:null,edgeMode:null,editable:null,elevation:W,enableBackground:null,end:null,event:null,exponent:W,externalResourcesRequired:null,fill:null,fillOpacity:W,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Dr,g2:Dr,glyphName:Dr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:W,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:W,horizOriginX:W,horizOriginY:W,id:null,ideographic:W,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:W,k:W,k1:W,k2:W,k3:W,k4:W,kernelMatrix:Rt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:W,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:W,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:W,overlineThickness:W,paintOrder:null,panose1:null,path:null,pathLength:W,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Re,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:W,pointsAtY:W,pointsAtZ:W,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Rt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Rt,rev:Rt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Rt,requiredFeatures:Rt,requiredFonts:Rt,requiredFormats:Rt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:W,specularExponent:W,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:W,strikethroughThickness:W,string:null,stroke:null,strokeDashArray:Rt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:W,strokeOpacity:W,strokeWidth:null,style:null,surfaceScale:W,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Rt,tabIndex:W,tableValues:null,target:null,targetX:W,targetY:W,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Rt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:W,underlineThickness:W,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:W,values:null,vAlphabetic:W,vMathematical:W,vectorEffect:null,vHanging:W,vIdeographic:W,version:null,vertAdvY:W,vertOriginX:W,vertOriginY:W,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:W,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),HN=/^data[-\w.:]+$/i,yy=/-[a-z]/g,$N=/[A-Z]/g;function WN(e,t){const n=cd(t);let i=t,r=an;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&HN.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(yy,YN);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!yy.test(o)){let s=o.replace($N,VN);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}r=Ap}return new r(i,t)}function VN(e){return"-"+e.toLowerCase()}function YN(e){return e.charAt(1).toUpperCase()}const qN=T1([x1,w1,k1,D1,jN],"html"),I1=T1([x1,w1,k1,D1,UN],"svg"),vy={}.hasOwnProperty;function C1(e,t){const n=t||{};function i(r,...o){let s=i.invalid;const a=i.handlers;if(r&&vy.call(r,e)){const l=String(r[e]);s=vy.call(a,l)?a[l]:i.unknown}if(s)return s.call(this,r,...o)}return i.handlers=n.handlers||{},i.invalid=n.invalid,i.unknown=n.unknown,i}const QN={},GN={}.hasOwnProperty,A1=C1("type",{handlers:{root:XN,element:n6,text:e6,comment:t6,doctype:ZN}});function KN(e,t){const i=(t||QN).space;return A1(e,i==="svg"?I1:qN)}function XN(e,t){const n={nodeName:"#document",mode:(e.data||{}).quirksMode?"quirks":"no-quirks",childNodes:[]};return n.childNodes=Op(e.children,n,t),Vr(e,n),n}function JN(e,t){const n={nodeName:"#document-fragment",childNodes:[]};return n.childNodes=Op(e.children,n,t),Vr(e,n),n}function ZN(e){const t={nodeName:"#documentType",name:"html",publicId:"",systemId:"",parentNode:null};return Vr(e,t),t}function e6(e){const t={nodeName:"#text",value:e.value,parentNode:null};return Vr(e,t),t}function t6(e){const t={nodeName:"#comment",data:e.value,parentNode:null};return Vr(e,t),t}function n6(e,t){const n=t;let i=n;e.type==="element"&&e.tagName.toLowerCase()==="svg"&&n.space==="html"&&(i=I1);const r=[];let o;if(e.properties){for(o in e.properties)if(o!=="children"&&GN.call(e.properties,o)){const l=i6(i,o,e.properties[o]);l&&r.push(l)}}const s=i.space,a={nodeName:e.tagName,tagName:e.tagName,attrs:r,namespaceURI:zi[s],childNodes:[],parentNode:null};return a.childNodes=Op(e.children,a,i),Vr(e,a),e.tagName==="template"&&e.content&&(a.content=JN(e.content,i)),a}function i6(e,t,n){const i=WN(e,t);if(n===!1||n===null||n===void 0||typeof n=="number"&&Number.isNaN(n)||!n&&i.boolean)return;Array.isArray(n)&&(n=i.commaSeparated?Mb(n):Hb(n));const r={name:i.attribute,value:n===!0?"":String(n)};if(i.space&&i.space!=="html"&&i.space!=="svg"){const o=r.name.indexOf(":");o<0?r.prefix="":(r.name=r.name.slice(o+1),r.prefix=i.attribute.slice(0,o)),r.namespace=zi[i.space]}return r}function Op(e,t,n){let i=-1;const r=[];if(e)for(;++i<e.length;){const o=A1(e[i],n);o.parentNode=t,r.push(o)}return r}function Vr(e,t){const n=e.position;n&&n.start&&n.end&&(n.start.offset,n.end.offset,t.sourceCodeLocation={startLine:n.start.line,startCol:n.start.column,startOffset:n.start.offset,endLine:n.end.line,endCol:n.end.column,endOffset:n.end.offset})}const r6=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"],o6=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),Be="�";var T;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(T||(T={}));const St={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function O1(e){return e>=55296&&e<=57343}function s6(e){return e>=56320&&e<=57343}function a6(e,t){return(e-55296)*1024+9216+t}function P1(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function N1(e){return e>=64976&&e<=65007||o6.has(e)}var M;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(M||(M={}));const l6=65536;class u6{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=l6,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,n){const{line:i,col:r,offset:o}=this,s=r+n,a=o+n;return{code:t,startLine:i,endLine:i,startCol:s,endCol:s,startOffset:a,endOffset:a}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const n=this.html.charCodeAt(this.pos+1);if(s6(n))return this.pos++,this._addGap(),a6(t,n)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,T.EOF;return this._err(M.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,n){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=n}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,n){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(n)return this.html.startsWith(t,this.pos);for(let i=0;i<t.length;i++)if((this.html.charCodeAt(this.pos+i)|32)!==t.charCodeAt(i))return!1;return!0}peek(t){const n=this.pos+t;if(n>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,T.EOF;const i=this.html.charCodeAt(n);return i===T.CARRIAGE_RETURN?T.LINE_FEED:i}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,T.EOF;let t=this.html.charCodeAt(this.pos);return t===T.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,T.LINE_FEED):t===T.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,O1(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===T.LINE_FEED||t===T.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){P1(t)?this._err(M.controlCharacterInInputStream):N1(t)&&this._err(M.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var be;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(be||(be={}));function M1(e,t){for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value;return null}const c6=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),d6=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function h6(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=d6.get(e))!==null&&t!==void 0?t:e}var ot;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(ot||(ot={}));const f6=32;var li;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(li||(li={}));function hd(e){return e>=ot.ZERO&&e<=ot.NINE}function p6(e){return e>=ot.UPPER_A&&e<=ot.UPPER_F||e>=ot.LOWER_A&&e<=ot.LOWER_F}function m6(e){return e>=ot.UPPER_A&&e<=ot.UPPER_Z||e>=ot.LOWER_A&&e<=ot.LOWER_Z||hd(e)}function g6(e){return e===ot.EQUALS||m6(e)}var it;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(it||(it={}));var Fn;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Fn||(Fn={}));class y6{constructor(t,n,i){this.decodeTree=t,this.emitCodePoint=n,this.errors=i,this.state=it.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Fn.Strict}startEntity(t){this.decodeMode=t,this.state=it.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case it.EntityStart:return t.charCodeAt(n)===ot.NUM?(this.state=it.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=it.NamedEntity,this.stateNamedEntity(t,n));case it.NumericStart:return this.stateNumericStart(t,n);case it.NumericDecimal:return this.stateNumericDecimal(t,n);case it.NumericHex:return this.stateNumericHex(t,n);case it.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|f6)===ot.LOWER_X?(this.state=it.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=it.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,i,r){if(n!==i){const o=i-n;this.result=this.result*Math.pow(r,o)+Number.parseInt(t.substr(n,o),r),this.consumed+=o}}stateNumericHex(t,n){const i=n;for(;n<t.length;){const r=t.charCodeAt(n);if(hd(r)||p6(r))n+=1;else return this.addToNumericResult(t,i,n,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(t,i,n,16),-1}stateNumericDecimal(t,n){const i=n;for(;n<t.length;){const r=t.charCodeAt(n);if(hd(r))n+=1;else return this.addToNumericResult(t,i,n,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(t,i,n,10),-1}emitNumericEntity(t,n){var i;if(this.consumed<=n)return(i=this.errors)===null||i===void 0||i.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===ot.SEMI)this.consumed+=1;else if(this.decodeMode===Fn.Strict)return 0;return this.emitCodePoint(h6(this.result),this.consumed),this.errors&&(t!==ot.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:i}=this;let r=i[this.treeIndex],o=(r&li.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const s=t.charCodeAt(n);if(this.treeIndex=v6(i,r,this.treeIndex+Math.max(1,o),s),this.treeIndex<0)return this.result===0||this.decodeMode===Fn.Attribute&&(o===0||g6(s))?0:this.emitNotTerminatedNamedEntity();if(r=i[this.treeIndex],o=(r&li.VALUE_LENGTH)>>14,o!==0){if(s===ot.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==Fn.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:i}=this,r=(i[n]&li.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,r,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,i){const{decodeTree:r}=this;return this.emitCodePoint(n===1?r[t]&~li.VALUE_LENGTH:r[t+1],i),n===3&&this.emitCodePoint(r[t+2],i),i}end(){var t;switch(this.state){case it.NamedEntity:return this.result!==0&&(this.decodeMode!==Fn.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case it.NumericDecimal:return this.emitNumericEntity(0,2);case it.NumericHex:return this.emitNumericEntity(0,3);case it.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case it.EntityStart:return 0}}}function v6(e,t,n,i){const r=(t&li.BRANCH_LENGTH)>>7,o=t&li.JUMP_TABLE;if(r===0)return o!==0&&i===o?n:-1;if(o){const l=i-o;return l<0||l>=r?-1:e[n+l]-1}let s=n,a=s+r-1;for(;s<=a;){const l=s+a>>>1,u=e[l];if(u<i)s=l+1;else if(u>i)a=l-1;else return e[l+r]}return-1}var B;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(B||(B={}));var Ui;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(Ui||(Ui={}));var en;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(en||(en={}));var O;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(O||(O={}));var c;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(c||(c={}));const b6=new Map([[O.A,c.A],[O.ADDRESS,c.ADDRESS],[O.ANNOTATION_XML,c.ANNOTATION_XML],[O.APPLET,c.APPLET],[O.AREA,c.AREA],[O.ARTICLE,c.ARTICLE],[O.ASIDE,c.ASIDE],[O.B,c.B],[O.BASE,c.BASE],[O.BASEFONT,c.BASEFONT],[O.BGSOUND,c.BGSOUND],[O.BIG,c.BIG],[O.BLOCKQUOTE,c.BLOCKQUOTE],[O.BODY,c.BODY],[O.BR,c.BR],[O.BUTTON,c.BUTTON],[O.CAPTION,c.CAPTION],[O.CENTER,c.CENTER],[O.CODE,c.CODE],[O.COL,c.COL],[O.COLGROUP,c.COLGROUP],[O.DD,c.DD],[O.DESC,c.DESC],[O.DETAILS,c.DETAILS],[O.DIALOG,c.DIALOG],[O.DIR,c.DIR],[O.DIV,c.DIV],[O.DL,c.DL],[O.DT,c.DT],[O.EM,c.EM],[O.EMBED,c.EMBED],[O.FIELDSET,c.FIELDSET],[O.FIGCAPTION,c.FIGCAPTION],[O.FIGURE,c.FIGURE],[O.FONT,c.FONT],[O.FOOTER,c.FOOTER],[O.FOREIGN_OBJECT,c.FOREIGN_OBJECT],[O.FORM,c.FORM],[O.FRAME,c.FRAME],[O.FRAMESET,c.FRAMESET],[O.H1,c.H1],[O.H2,c.H2],[O.H3,c.H3],[O.H4,c.H4],[O.H5,c.H5],[O.H6,c.H6],[O.HEAD,c.HEAD],[O.HEADER,c.HEADER],[O.HGROUP,c.HGROUP],[O.HR,c.HR],[O.HTML,c.HTML],[O.I,c.I],[O.IMG,c.IMG],[O.IMAGE,c.IMAGE],[O.INPUT,c.INPUT],[O.IFRAME,c.IFRAME],[O.KEYGEN,c.KEYGEN],[O.LABEL,c.LABEL],[O.LI,c.LI],[O.LINK,c.LINK],[O.LISTING,c.LISTING],[O.MAIN,c.MAIN],[O.MALIGNMARK,c.MALIGNMARK],[O.MARQUEE,c.MARQUEE],[O.MATH,c.MATH],[O.MENU,c.MENU],[O.META,c.META],[O.MGLYPH,c.MGLYPH],[O.MI,c.MI],[O.MO,c.MO],[O.MN,c.MN],[O.MS,c.MS],[O.MTEXT,c.MTEXT],[O.NAV,c.NAV],[O.NOBR,c.NOBR],[O.NOFRAMES,c.NOFRAMES],[O.NOEMBED,c.NOEMBED],[O.NOSCRIPT,c.NOSCRIPT],[O.OBJECT,c.OBJECT],[O.OL,c.OL],[O.OPTGROUP,c.OPTGROUP],[O.OPTION,c.OPTION],[O.P,c.P],[O.PARAM,c.PARAM],[O.PLAINTEXT,c.PLAINTEXT],[O.PRE,c.PRE],[O.RB,c.RB],[O.RP,c.RP],[O.RT,c.RT],[O.RTC,c.RTC],[O.RUBY,c.RUBY],[O.S,c.S],[O.SCRIPT,c.SCRIPT],[O.SEARCH,c.SEARCH],[O.SECTION,c.SECTION],[O.SELECT,c.SELECT],[O.SOURCE,c.SOURCE],[O.SMALL,c.SMALL],[O.SPAN,c.SPAN],[O.STRIKE,c.STRIKE],[O.STRONG,c.STRONG],[O.STYLE,c.STYLE],[O.SUB,c.SUB],[O.SUMMARY,c.SUMMARY],[O.SUP,c.SUP],[O.TABLE,c.TABLE],[O.TBODY,c.TBODY],[O.TEMPLATE,c.TEMPLATE],[O.TEXTAREA,c.TEXTAREA],[O.TFOOT,c.TFOOT],[O.TD,c.TD],[O.TH,c.TH],[O.THEAD,c.THEAD],[O.TITLE,c.TITLE],[O.TR,c.TR],[O.TRACK,c.TRACK],[O.TT,c.TT],[O.U,c.U],[O.UL,c.UL],[O.SVG,c.SVG],[O.VAR,c.VAR],[O.WBR,c.WBR],[O.XMP,c.XMP]]);function Yr(e){var t;return(t=b6.get(e))!==null&&t!==void 0?t:c.UNKNOWN}const j=c,T6={[B.HTML]:new Set([j.ADDRESS,j.APPLET,j.AREA,j.ARTICLE,j.ASIDE,j.BASE,j.BASEFONT,j.BGSOUND,j.BLOCKQUOTE,j.BODY,j.BR,j.BUTTON,j.CAPTION,j.CENTER,j.COL,j.COLGROUP,j.DD,j.DETAILS,j.DIR,j.DIV,j.DL,j.DT,j.EMBED,j.FIELDSET,j.FIGCAPTION,j.FIGURE,j.FOOTER,j.FORM,j.FRAME,j.FRAMESET,j.H1,j.H2,j.H3,j.H4,j.H5,j.H6,j.HEAD,j.HEADER,j.HGROUP,j.HR,j.HTML,j.IFRAME,j.IMG,j.INPUT,j.LI,j.LINK,j.LISTING,j.MAIN,j.MARQUEE,j.MENU,j.META,j.NAV,j.NOEMBED,j.NOFRAMES,j.NOSCRIPT,j.OBJECT,j.OL,j.P,j.PARAM,j.PLAINTEXT,j.PRE,j.SCRIPT,j.SECTION,j.SELECT,j.SOURCE,j.STYLE,j.SUMMARY,j.TABLE,j.TBODY,j.TD,j.TEMPLATE,j.TEXTAREA,j.TFOOT,j.TH,j.THEAD,j.TITLE,j.TR,j.TRACK,j.UL,j.WBR,j.XMP]),[B.MATHML]:new Set([j.MI,j.MO,j.MN,j.MS,j.MTEXT,j.ANNOTATION_XML]),[B.SVG]:new Set([j.TITLE,j.FOREIGN_OBJECT,j.DESC]),[B.XLINK]:new Set,[B.XML]:new Set,[B.XMLNS]:new Set},fd=new Set([j.H1,j.H2,j.H3,j.H4,j.H5,j.H6]);O.STYLE,O.SCRIPT,O.XMP,O.IFRAME,O.NOEMBED,O.NOFRAMES,O.PLAINTEXT;var E;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(E||(E={}));const qe={DATA:E.DATA,RCDATA:E.RCDATA,RAWTEXT:E.RAWTEXT,SCRIPT_DATA:E.SCRIPT_DATA,PLAINTEXT:E.PLAINTEXT,CDATA_SECTION:E.CDATA_SECTION};function E6(e){return e>=T.DIGIT_0&&e<=T.DIGIT_9}function wo(e){return e>=T.LATIN_CAPITAL_A&&e<=T.LATIN_CAPITAL_Z}function w6(e){return e>=T.LATIN_SMALL_A&&e<=T.LATIN_SMALL_Z}function Zn(e){return w6(e)||wo(e)}function by(e){return Zn(e)||E6(e)}function Ta(e){return e+32}function R1(e){return e===T.SPACE||e===T.LINE_FEED||e===T.TABULATION||e===T.FORM_FEED}function Ty(e){return R1(e)||e===T.SOLIDUS||e===T.GREATER_THAN_SIGN}function x6(e){return e===T.NULL?M.nullCharacterReference:e>1114111?M.characterReferenceOutsideUnicodeRange:O1(e)?M.surrogateCharacterReference:N1(e)?M.noncharacterCharacterReference:P1(e)||e===T.CARRIAGE_RETURN?M.controlCharacterReference:null}class _6{constructor(t,n){this.options=t,this.handler=n,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=E.DATA,this.returnState=E.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new u6(n),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new y6(c6,(i,r)=>{this.preprocessor.pos=this.entityStartPos+r-1,this._flushCodePointConsumedAsCharacterReference(i)},n.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(M.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:i=>{this._err(M.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+i)},validateNumericCharacterReference:i=>{const r=x6(i);r&&this._err(r,1)}}:void 0)}_err(t,n=0){var i,r;(r=(i=this.handler).onParseError)===null||r===void 0||r.call(i,this.preprocessor.getError(t,n))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t==null||t())}write(t,n,i){this.active=!0,this.preprocessor.write(t,n),this._runParsingLoop(),this.paused||i==null||i()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let n=0;n<t;n++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,n){return this.preprocessor.startsWith(t,n)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:be.START_TAG,tagName:"",tagID:c.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:be.END_TAG,tagName:"",tagID:c.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:be.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:be.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,n){this.currentCharacterToken={type:t,chars:n,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,n;const i=this.currentToken;if(M1(i,this.currentAttr.name)===null){if(i.attrs.push(this.currentAttr),i.location&&this.currentLocation){const r=(t=(n=i.location).attrs)!==null&&t!==void 0?t:n.attrs=Object.create(null);r[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(M.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=Yr(t.tagName),t.type===be.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(M.endTagWithAttributes),t.selfClosing&&this._err(M.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case be.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case be.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case be.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:be.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,n){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=n;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,n)}_emitCodePoint(t){const n=R1(t)?be.WHITESPACE_CHARACTER:t===T.NULL?be.NULL_CHARACTER:be.CHARACTER;this._appendCharToCurrentCharacterToken(n,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(be.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=E.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?Fn.Attribute:Fn.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===E.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===E.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===E.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case E.DATA:{this._stateData(t);break}case E.RCDATA:{this._stateRcdata(t);break}case E.RAWTEXT:{this._stateRawtext(t);break}case E.SCRIPT_DATA:{this._stateScriptData(t);break}case E.PLAINTEXT:{this._statePlaintext(t);break}case E.TAG_OPEN:{this._stateTagOpen(t);break}case E.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case E.TAG_NAME:{this._stateTagName(t);break}case E.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case E.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case E.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case E.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case E.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case E.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case E.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case E.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case E.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case E.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case E.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case E.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case E.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case E.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case E.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case E.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case E.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case E.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case E.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case E.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case E.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case E.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case E.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case E.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case E.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case E.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case E.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case E.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case E.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case E.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case E.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case E.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case E.BOGUS_COMMENT:{this._stateBogusComment(t);break}case E.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case E.COMMENT_START:{this._stateCommentStart(t);break}case E.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case E.COMMENT:{this._stateComment(t);break}case E.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case E.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case E.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case E.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case E.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case E.COMMENT_END:{this._stateCommentEnd(t);break}case E.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case E.DOCTYPE:{this._stateDoctype(t);break}case E.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case E.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case E.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case E.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case E.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case E.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case E.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case E.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case E.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case E.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case E.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case E.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case E.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case E.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case E.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case E.CDATA_SECTION:{this._stateCdataSection(t);break}case E.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case E.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case E.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case E.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case T.LESS_THAN_SIGN:{this.state=E.TAG_OPEN;break}case T.AMPERSAND:{this._startCharacterReference();break}case T.NULL:{this._err(M.unexpectedNullCharacter),this._emitCodePoint(t);break}case T.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case T.AMPERSAND:{this._startCharacterReference();break}case T.LESS_THAN_SIGN:{this.state=E.RCDATA_LESS_THAN_SIGN;break}case T.NULL:{this._err(M.unexpectedNullCharacter),this._emitChars(Be);break}case T.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case T.LESS_THAN_SIGN:{this.state=E.RAWTEXT_LESS_THAN_SIGN;break}case T.NULL:{this._err(M.unexpectedNullCharacter),this._emitChars(Be);break}case T.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case T.LESS_THAN_SIGN:{this.state=E.SCRIPT_DATA_LESS_THAN_SIGN;break}case T.NULL:{this._err(M.unexpectedNullCharacter),this._emitChars(Be);break}case T.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case T.NULL:{this._err(M.unexpectedNullCharacter),this._emitChars(Be);break}case T.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(Zn(t))this._createStartTagToken(),this.state=E.TAG_NAME,this._stateTagName(t);else switch(t){case T.EXCLAMATION_MARK:{this.state=E.MARKUP_DECLARATION_OPEN;break}case T.SOLIDUS:{this.state=E.END_TAG_OPEN;break}case T.QUESTION_MARK:{this._err(M.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=E.BOGUS_COMMENT,this._stateBogusComment(t);break}case T.EOF:{this._err(M.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(M.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=E.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(Zn(t))this._createEndTagToken(),this.state=E.TAG_NAME,this._stateTagName(t);else switch(t){case T.GREATER_THAN_SIGN:{this._err(M.missingEndTagName),this.state=E.DATA;break}case T.EOF:{this._err(M.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(M.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=E.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:{this.state=E.BEFORE_ATTRIBUTE_NAME;break}case T.SOLIDUS:{this.state=E.SELF_CLOSING_START_TAG;break}case T.GREATER_THAN_SIGN:{this.state=E.DATA,this.emitCurrentTagToken();break}case T.NULL:{this._err(M.unexpectedNullCharacter),n.tagName+=Be;break}case T.EOF:{this._err(M.eofInTag),this._emitEOFToken();break}default:n.tagName+=String.fromCodePoint(wo(t)?Ta(t):t)}}_stateRcdataLessThanSign(t){t===T.SOLIDUS?this.state=E.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=E.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){Zn(t)?(this.state=E.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=E.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const n=this.currentToken;switch(n.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=E.BEFORE_ATTRIBUTE_NAME,!1;case T.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=E.SELF_CLOSING_START_TAG,!1;case T.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=E.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=E.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===T.SOLIDUS?this.state=E.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=E.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){Zn(t)?(this.state=E.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=E.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=E.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case T.SOLIDUS:{this.state=E.SCRIPT_DATA_END_TAG_OPEN;break}case T.EXCLAMATION_MARK:{this.state=E.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=E.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){Zn(t)?(this.state=E.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=E.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=E.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===T.HYPHEN_MINUS?(this.state=E.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=E.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===T.HYPHEN_MINUS?(this.state=E.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=E.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case T.HYPHEN_MINUS:{this.state=E.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case T.LESS_THAN_SIGN:{this.state=E.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case T.NULL:{this._err(M.unexpectedNullCharacter),this._emitChars(Be);break}case T.EOF:{this._err(M.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case T.HYPHEN_MINUS:{this.state=E.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case T.LESS_THAN_SIGN:{this.state=E.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case T.NULL:{this._err(M.unexpectedNullCharacter),this.state=E.SCRIPT_DATA_ESCAPED,this._emitChars(Be);break}case T.EOF:{this._err(M.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=E.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case T.HYPHEN_MINUS:{this._emitChars("-");break}case T.LESS_THAN_SIGN:{this.state=E.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case T.GREATER_THAN_SIGN:{this.state=E.SCRIPT_DATA,this._emitChars(">");break}case T.NULL:{this._err(M.unexpectedNullCharacter),this.state=E.SCRIPT_DATA_ESCAPED,this._emitChars(Be);break}case T.EOF:{this._err(M.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=E.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===T.SOLIDUS?this.state=E.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:Zn(t)?(this._emitChars("<"),this.state=E.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=E.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){Zn(t)?(this.state=E.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=E.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=E.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(St.SCRIPT,!1)&&Ty(this.preprocessor.peek(St.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<St.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=E.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case T.HYPHEN_MINUS:{this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case T.LESS_THAN_SIGN:{this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case T.NULL:{this._err(M.unexpectedNullCharacter),this._emitChars(Be);break}case T.EOF:{this._err(M.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case T.HYPHEN_MINUS:{this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case T.LESS_THAN_SIGN:{this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case T.NULL:{this._err(M.unexpectedNullCharacter),this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(Be);break}case T.EOF:{this._err(M.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case T.HYPHEN_MINUS:{this._emitChars("-");break}case T.LESS_THAN_SIGN:{this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case T.GREATER_THAN_SIGN:{this.state=E.SCRIPT_DATA,this._emitChars(">");break}case T.NULL:{this._err(M.unexpectedNullCharacter),this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(Be);break}case T.EOF:{this._err(M.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===T.SOLIDUS?(this.state=E.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(St.SCRIPT,!1)&&Ty(this.preprocessor.peek(St.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<St.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=E.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=E.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:break;case T.SOLIDUS:case T.GREATER_THAN_SIGN:case T.EOF:{this.state=E.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case T.EQUALS_SIGN:{this._err(M.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=E.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=E.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:case T.SOLIDUS:case T.GREATER_THAN_SIGN:case T.EOF:{this._leaveAttrName(),this.state=E.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case T.EQUALS_SIGN:{this._leaveAttrName(),this.state=E.BEFORE_ATTRIBUTE_VALUE;break}case T.QUOTATION_MARK:case T.APOSTROPHE:case T.LESS_THAN_SIGN:{this._err(M.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case T.NULL:{this._err(M.unexpectedNullCharacter),this.currentAttr.name+=Be;break}default:this.currentAttr.name+=String.fromCodePoint(wo(t)?Ta(t):t)}}_stateAfterAttributeName(t){switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:break;case T.SOLIDUS:{this.state=E.SELF_CLOSING_START_TAG;break}case T.EQUALS_SIGN:{this.state=E.BEFORE_ATTRIBUTE_VALUE;break}case T.GREATER_THAN_SIGN:{this.state=E.DATA,this.emitCurrentTagToken();break}case T.EOF:{this._err(M.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=E.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:break;case T.QUOTATION_MARK:{this.state=E.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case T.APOSTROPHE:{this.state=E.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case T.GREATER_THAN_SIGN:{this._err(M.missingAttributeValue),this.state=E.DATA,this.emitCurrentTagToken();break}default:this.state=E.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case T.QUOTATION_MARK:{this.state=E.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case T.AMPERSAND:{this._startCharacterReference();break}case T.NULL:{this._err(M.unexpectedNullCharacter),this.currentAttr.value+=Be;break}case T.EOF:{this._err(M.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case T.APOSTROPHE:{this.state=E.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case T.AMPERSAND:{this._startCharacterReference();break}case T.NULL:{this._err(M.unexpectedNullCharacter),this.currentAttr.value+=Be;break}case T.EOF:{this._err(M.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:{this._leaveAttrValue(),this.state=E.BEFORE_ATTRIBUTE_NAME;break}case T.AMPERSAND:{this._startCharacterReference();break}case T.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=E.DATA,this.emitCurrentTagToken();break}case T.NULL:{this._err(M.unexpectedNullCharacter),this.currentAttr.value+=Be;break}case T.QUOTATION_MARK:case T.APOSTROPHE:case T.LESS_THAN_SIGN:case T.EQUALS_SIGN:case T.GRAVE_ACCENT:{this._err(M.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case T.EOF:{this._err(M.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:{this._leaveAttrValue(),this.state=E.BEFORE_ATTRIBUTE_NAME;break}case T.SOLIDUS:{this._leaveAttrValue(),this.state=E.SELF_CLOSING_START_TAG;break}case T.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=E.DATA,this.emitCurrentTagToken();break}case T.EOF:{this._err(M.eofInTag),this._emitEOFToken();break}default:this._err(M.missingWhitespaceBetweenAttributes),this.state=E.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case T.GREATER_THAN_SIGN:{const n=this.currentToken;n.selfClosing=!0,this.state=E.DATA,this.emitCurrentTagToken();break}case T.EOF:{this._err(M.eofInTag),this._emitEOFToken();break}default:this._err(M.unexpectedSolidusInTag),this.state=E.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const n=this.currentToken;switch(t){case T.GREATER_THAN_SIGN:{this.state=E.DATA,this.emitCurrentComment(n);break}case T.EOF:{this.emitCurrentComment(n),this._emitEOFToken();break}case T.NULL:{this._err(M.unexpectedNullCharacter),n.data+=Be;break}default:n.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(St.DASH_DASH,!0)?(this._createCommentToken(St.DASH_DASH.length+1),this.state=E.COMMENT_START):this._consumeSequenceIfMatch(St.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(St.DOCTYPE.length+1),this.state=E.DOCTYPE):this._consumeSequenceIfMatch(St.CDATA_START,!0)?this.inForeignNode?this.state=E.CDATA_SECTION:(this._err(M.cdataInHtmlContent),this._createCommentToken(St.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=E.BOGUS_COMMENT):this._ensureHibernation()||(this._err(M.incorrectlyOpenedComment),this._createCommentToken(2),this.state=E.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case T.HYPHEN_MINUS:{this.state=E.COMMENT_START_DASH;break}case T.GREATER_THAN_SIGN:{this._err(M.abruptClosingOfEmptyComment),this.state=E.DATA;const n=this.currentToken;this.emitCurrentComment(n);break}default:this.state=E.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const n=this.currentToken;switch(t){case T.HYPHEN_MINUS:{this.state=E.COMMENT_END;break}case T.GREATER_THAN_SIGN:{this._err(M.abruptClosingOfEmptyComment),this.state=E.DATA,this.emitCurrentComment(n);break}case T.EOF:{this._err(M.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=E.COMMENT,this._stateComment(t)}}_stateComment(t){const n=this.currentToken;switch(t){case T.HYPHEN_MINUS:{this.state=E.COMMENT_END_DASH;break}case T.LESS_THAN_SIGN:{n.data+="<",this.state=E.COMMENT_LESS_THAN_SIGN;break}case T.NULL:{this._err(M.unexpectedNullCharacter),n.data+=Be;break}case T.EOF:{this._err(M.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const n=this.currentToken;switch(t){case T.EXCLAMATION_MARK:{n.data+="!",this.state=E.COMMENT_LESS_THAN_SIGN_BANG;break}case T.LESS_THAN_SIGN:{n.data+="<";break}default:this.state=E.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===T.HYPHEN_MINUS?this.state=E.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=E.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===T.HYPHEN_MINUS?this.state=E.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=E.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==T.GREATER_THAN_SIGN&&t!==T.EOF&&this._err(M.nestedComment),this.state=E.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const n=this.currentToken;switch(t){case T.HYPHEN_MINUS:{this.state=E.COMMENT_END;break}case T.EOF:{this._err(M.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=E.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const n=this.currentToken;switch(t){case T.GREATER_THAN_SIGN:{this.state=E.DATA,this.emitCurrentComment(n);break}case T.EXCLAMATION_MARK:{this.state=E.COMMENT_END_BANG;break}case T.HYPHEN_MINUS:{n.data+="-";break}case T.EOF:{this._err(M.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--",this.state=E.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const n=this.currentToken;switch(t){case T.HYPHEN_MINUS:{n.data+="--!",this.state=E.COMMENT_END_DASH;break}case T.GREATER_THAN_SIGN:{this._err(M.incorrectlyClosedComment),this.state=E.DATA,this.emitCurrentComment(n);break}case T.EOF:{this._err(M.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--!",this.state=E.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:{this.state=E.BEFORE_DOCTYPE_NAME;break}case T.GREATER_THAN_SIGN:{this.state=E.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case T.EOF:{this._err(M.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(M.missingWhitespaceBeforeDoctypeName),this.state=E.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(wo(t))this._createDoctypeToken(String.fromCharCode(Ta(t))),this.state=E.DOCTYPE_NAME;else switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:break;case T.NULL:{this._err(M.unexpectedNullCharacter),this._createDoctypeToken(Be),this.state=E.DOCTYPE_NAME;break}case T.GREATER_THAN_SIGN:{this._err(M.missingDoctypeName),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=E.DATA;break}case T.EOF:{this._err(M.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=E.DOCTYPE_NAME}}_stateDoctypeName(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:{this.state=E.AFTER_DOCTYPE_NAME;break}case T.GREATER_THAN_SIGN:{this.state=E.DATA,this.emitCurrentDoctype(n);break}case T.NULL:{this._err(M.unexpectedNullCharacter),n.name+=Be;break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.name+=String.fromCodePoint(wo(t)?Ta(t):t)}}_stateAfterDoctypeName(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:break;case T.GREATER_THAN_SIGN:{this.state=E.DATA,this.emitCurrentDoctype(n);break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(St.PUBLIC,!1)?this.state=E.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(St.SYSTEM,!1)?this.state=E.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(M.invalidCharacterSequenceAfterDoctypeName),n.forceQuirks=!0,this.state=E.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:{this.state=E.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case T.QUOTATION_MARK:{this._err(M.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=E.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case T.APOSTROPHE:{this._err(M.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=E.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case T.GREATER_THAN_SIGN:{this._err(M.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=E.DATA,this.emitCurrentDoctype(n);break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(M.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=E.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:break;case T.QUOTATION_MARK:{n.publicId="",this.state=E.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case T.APOSTROPHE:{n.publicId="",this.state=E.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case T.GREATER_THAN_SIGN:{this._err(M.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=E.DATA,this.emitCurrentDoctype(n);break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(M.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=E.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case T.QUOTATION_MARK:{this.state=E.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case T.NULL:{this._err(M.unexpectedNullCharacter),n.publicId+=Be;break}case T.GREATER_THAN_SIGN:{this._err(M.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=E.DATA;break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case T.APOSTROPHE:{this.state=E.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case T.NULL:{this._err(M.unexpectedNullCharacter),n.publicId+=Be;break}case T.GREATER_THAN_SIGN:{this._err(M.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=E.DATA;break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:{this.state=E.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case T.GREATER_THAN_SIGN:{this.state=E.DATA,this.emitCurrentDoctype(n);break}case T.QUOTATION_MARK:{this._err(M.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=E.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case T.APOSTROPHE:{this._err(M.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=E.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(M.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=E.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:break;case T.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=E.DATA;break}case T.QUOTATION_MARK:{n.systemId="",this.state=E.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case T.APOSTROPHE:{n.systemId="",this.state=E.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(M.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=E.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:{this.state=E.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case T.QUOTATION_MARK:{this._err(M.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=E.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case T.APOSTROPHE:{this._err(M.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=E.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case T.GREATER_THAN_SIGN:{this._err(M.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=E.DATA,this.emitCurrentDoctype(n);break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(M.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=E.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:break;case T.QUOTATION_MARK:{n.systemId="",this.state=E.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case T.APOSTROPHE:{n.systemId="",this.state=E.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case T.GREATER_THAN_SIGN:{this._err(M.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=E.DATA,this.emitCurrentDoctype(n);break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(M.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=E.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case T.QUOTATION_MARK:{this.state=E.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case T.NULL:{this._err(M.unexpectedNullCharacter),n.systemId+=Be;break}case T.GREATER_THAN_SIGN:{this._err(M.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=E.DATA;break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case T.APOSTROPHE:{this.state=E.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case T.NULL:{this._err(M.unexpectedNullCharacter),n.systemId+=Be;break}case T.GREATER_THAN_SIGN:{this._err(M.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=E.DATA;break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case T.SPACE:case T.LINE_FEED:case T.TABULATION:case T.FORM_FEED:break;case T.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=E.DATA;break}case T.EOF:{this._err(M.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(M.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=E.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const n=this.currentToken;switch(t){case T.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=E.DATA;break}case T.NULL:{this._err(M.unexpectedNullCharacter);break}case T.EOF:{this.emitCurrentDoctype(n),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case T.RIGHT_SQUARE_BRACKET:{this.state=E.CDATA_SECTION_BRACKET;break}case T.EOF:{this._err(M.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===T.RIGHT_SQUARE_BRACKET?this.state=E.CDATA_SECTION_END:(this._emitChars("]"),this.state=E.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case T.GREATER_THAN_SIGN:{this.state=E.DATA;break}case T.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=E.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(T.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&by(this.preprocessor.peek(1))?E.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){by(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===T.SEMICOLON&&this._err(M.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const L1=new Set([c.DD,c.DT,c.LI,c.OPTGROUP,c.OPTION,c.P,c.RB,c.RP,c.RT,c.RTC]),Ey=new Set([...L1,c.CAPTION,c.COLGROUP,c.TBODY,c.TD,c.TFOOT,c.TH,c.THEAD,c.TR]),vl=new Set([c.APPLET,c.CAPTION,c.HTML,c.MARQUEE,c.OBJECT,c.TABLE,c.TD,c.TEMPLATE,c.TH]),S6=new Set([...vl,c.OL,c.UL]),k6=new Set([...vl,c.BUTTON]),wy=new Set([c.ANNOTATION_XML,c.MI,c.MN,c.MO,c.MS,c.MTEXT]),xy=new Set([c.DESC,c.FOREIGN_OBJECT,c.TITLE]),D6=new Set([c.TR,c.TEMPLATE,c.HTML]),I6=new Set([c.TBODY,c.TFOOT,c.THEAD,c.TEMPLATE,c.HTML]),C6=new Set([c.TABLE,c.TEMPLATE,c.HTML]),A6=new Set([c.TD,c.TH]);class O6{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,n,i){this.treeAdapter=n,this.handler=i,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=c.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===c.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===B.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,n){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=n,this.currentTagId=n,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,n,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,n){const i=this._indexOf(t);this.items[i]=n,i===this.stackTop&&(this.current=n)}insertAfter(t,n,i){const r=this._indexOf(t)+1;this.items.splice(r,0,n),this.tagIDs.splice(r,0,i),this.stackTop++,r===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,r===this.stackTop)}popUntilTagNamePopped(t){let n=this.stackTop+1;do n=this.tagIDs.lastIndexOf(t,n-1);while(n>0&&this.treeAdapter.getNamespaceURI(this.items[n])!==B.HTML);this.shortenToLength(Math.max(n,0))}shortenToLength(t){for(;this.stackTop>=t;){const n=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(n,this.stackTop<t)}}popUntilElementPopped(t){const n=this._indexOf(t);this.shortenToLength(Math.max(n,0))}popUntilPopped(t,n){const i=this._indexOfTagNames(t,n);this.shortenToLength(Math.max(i,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(fd,B.HTML)}popUntilTableCellPopped(){this.popUntilPopped(A6,B.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,n){for(let i=this.stackTop;i>=0;i--)if(t.has(this.tagIDs[i])&&this.treeAdapter.getNamespaceURI(this.items[i])===n)return i;return-1}clearBackTo(t,n){const i=this._indexOfTagNames(t,n);this.shortenToLength(i+1)}clearBackToTableContext(){this.clearBackTo(C6,B.HTML)}clearBackToTableBodyContext(){this.clearBackTo(I6,B.HTML)}clearBackToTableRowContext(){this.clearBackTo(D6,B.HTML)}remove(t){const n=this._indexOf(t);n>=0&&(n===this.stackTop?this.pop():(this.items.splice(n,1),this.tagIDs.splice(n,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===c.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const n=this._indexOf(t)-1;return n>=0?this.items[n]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===c.HTML}hasInDynamicScope(t,n){for(let i=this.stackTop;i>=0;i--){const r=this.tagIDs[i];switch(this.treeAdapter.getNamespaceURI(this.items[i])){case B.HTML:{if(r===t)return!0;if(n.has(r))return!1;break}case B.SVG:{if(xy.has(r))return!1;break}case B.MATHML:{if(wy.has(r))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,vl)}hasInListItemScope(t){return this.hasInDynamicScope(t,S6)}hasInButtonScope(t){return this.hasInDynamicScope(t,k6)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const n=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case B.HTML:{if(fd.has(n))return!0;if(vl.has(n))return!1;break}case B.SVG:{if(xy.has(n))return!1;break}case B.MATHML:{if(wy.has(n))return!1;break}}}return!0}hasInTableScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===B.HTML)switch(this.tagIDs[n]){case t:return!0;case c.TABLE:case c.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===B.HTML)switch(this.tagIDs[t]){case c.TBODY:case c.THEAD:case c.TFOOT:return!0;case c.TABLE:case c.HTML:return!1}return!0}hasInSelectScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===B.HTML)switch(this.tagIDs[n]){case t:return!0;case c.OPTION:case c.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&L1.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&Ey.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&Ey.has(this.currentTagId);)this.pop()}}const Ku=3;var _n;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(_n||(_n={}));const _y={type:_n.Marker};class P6{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,n){const i=[],r=n.length,o=this.treeAdapter.getTagName(t),s=this.treeAdapter.getNamespaceURI(t);for(let a=0;a<this.entries.length;a++){const l=this.entries[a];if(l.type===_n.Marker)break;const{element:u}=l;if(this.treeAdapter.getTagName(u)===o&&this.treeAdapter.getNamespaceURI(u)===s){const h=this.treeAdapter.getAttrList(u);h.length===r&&i.push({idx:a,attrs:h})}}return i}_ensureNoahArkCondition(t){if(this.entries.length<Ku)return;const n=this.treeAdapter.getAttrList(t),i=this._getNoahArkConditionCandidates(t,n);if(i.length<Ku)return;const r=new Map(n.map(s=>[s.name,s.value]));let o=0;for(let s=0;s<i.length;s++){const a=i[s];a.attrs.every(l=>r.get(l.name)===l.value)&&(o+=1,o>=Ku&&this.entries.splice(a.idx,1))}}insertMarker(){this.entries.unshift(_y)}pushElement(t,n){this._ensureNoahArkCondition(t),this.entries.unshift({type:_n.Element,element:t,token:n})}insertElementAfterBookmark(t,n){const i=this.entries.indexOf(this.bookmark);this.entries.splice(i,0,{type:_n.Element,element:t,token:n})}removeEntry(t){const n=this.entries.indexOf(t);n!==-1&&this.entries.splice(n,1)}clearToLastMarker(){const t=this.entries.indexOf(_y);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const n=this.entries.find(i=>i.type===_n.Marker||this.treeAdapter.getTagName(i.element)===t);return n&&n.type===_n.Element?n:null}getElementEntry(t){return this.entries.find(n=>n.type===_n.Element&&n.element===t)}}const ei={createDocument(){return{nodeName:"#document",mode:en.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,n){return{nodeName:e,tagName:e,attrs:n,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,n){const i=e.childNodes.indexOf(n);e.childNodes.splice(i,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,n,i){const r=e.childNodes.find(o=>o.nodeName==="#documentType");if(r)r.name=t,r.publicId=n,r.systemId=i;else{const o={nodeName:"#documentType",name:t,publicId:n,systemId:i,parentNode:null};ei.appendChild(e,o)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const n=e.childNodes[e.childNodes.length-1];if(ei.isTextNode(n)){n.value+=t;return}}ei.appendChild(e,ei.createTextNode(t))},insertTextBefore(e,t,n){const i=e.childNodes[e.childNodes.indexOf(n)-1];i&&ei.isTextNode(i)?i.value+=t:ei.insertBefore(e,ei.createTextNode(t),n)},adoptAttributes(e,t){const n=new Set(e.attrs.map(i=>i.name));for(let i=0;i<t.length;i++)n.has(t[i].name)||e.attrs.push(t[i])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},F1="html",N6="about:legacy-compat",M6="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",z1=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],R6=[...z1,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],L6=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),B1=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],F6=[...B1,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function Sy(e,t){return t.some(n=>e.startsWith(n))}function z6(e){return e.name===F1&&e.publicId===null&&(e.systemId===null||e.systemId===N6)}function B6(e){if(e.name!==F1)return en.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===M6)return en.QUIRKS;let{publicId:n}=e;if(n!==null){if(n=n.toLowerCase(),L6.has(n))return en.QUIRKS;let i=t===null?R6:z1;if(Sy(n,i))return en.QUIRKS;if(i=t===null?B1:F6,Sy(n,i))return en.LIMITED_QUIRKS}return en.NO_QUIRKS}const ky={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},j6="definitionurl",U6="definitionURL",H6=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),$6=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:B.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:B.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:B.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:B.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:B.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:B.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:B.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:B.XML}],["xml:space",{prefix:"xml",name:"space",namespace:B.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:B.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:B.XMLNS}]]),W6=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),V6=new Set([c.B,c.BIG,c.BLOCKQUOTE,c.BODY,c.BR,c.CENTER,c.CODE,c.DD,c.DIV,c.DL,c.DT,c.EM,c.EMBED,c.H1,c.H2,c.H3,c.H4,c.H5,c.H6,c.HEAD,c.HR,c.I,c.IMG,c.LI,c.LISTING,c.MENU,c.META,c.NOBR,c.OL,c.P,c.PRE,c.RUBY,c.S,c.SMALL,c.SPAN,c.STRONG,c.STRIKE,c.SUB,c.SUP,c.TABLE,c.TT,c.U,c.UL,c.VAR]);function Y6(e){const t=e.tagID;return t===c.FONT&&e.attrs.some(({name:i})=>i===Ui.COLOR||i===Ui.SIZE||i===Ui.FACE)||V6.has(t)}function j1(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===j6){e.attrs[t].name=U6;break}}function U1(e){for(let t=0;t<e.attrs.length;t++){const n=H6.get(e.attrs[t].name);n!=null&&(e.attrs[t].name=n)}}function Pp(e){for(let t=0;t<e.attrs.length;t++){const n=$6.get(e.attrs[t].name);n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace)}}function q6(e){const t=W6.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=Yr(e.tagName))}function Q6(e,t){return t===B.MATHML&&(e===c.MI||e===c.MO||e===c.MN||e===c.MS||e===c.MTEXT)}function G6(e,t,n){if(t===B.MATHML&&e===c.ANNOTATION_XML){for(let i=0;i<n.length;i++)if(n[i].name===Ui.ENCODING){const r=n[i].value.toLowerCase();return r===ky.TEXT_HTML||r===ky.APPLICATION_XML}}return t===B.SVG&&(e===c.FOREIGN_OBJECT||e===c.DESC||e===c.TITLE)}function K6(e,t,n,i){return(!i||i===B.HTML)&&G6(e,t,n)||(!i||i===B.MATHML)&&Q6(e,t)}const X6="hidden",J6=8,Z6=3;var _;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(_||(_={}));const eM={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},H1=new Set([c.TABLE,c.TBODY,c.TFOOT,c.THEAD,c.TR]),Dy={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:ei,onParseError:null};class Iy{constructor(t,n,i=null,r=null){this.fragmentContext=i,this.scriptHandler=r,this.currentToken=null,this.stopped=!1,this.insertionMode=_.INITIAL,this.originalInsertionMode=_.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...Dy,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=n??this.treeAdapter.createDocument(),this.tokenizer=new _6(this.options,this),this.activeFormattingElements=new P6(this.treeAdapter),this.fragmentContextID=i?Yr(this.treeAdapter.getTagName(i)):c.UNKNOWN,this._setContextModes(i??this.document,this.fragmentContextID),this.openElements=new O6(this.document,this.treeAdapter,this)}static parse(t,n){const i=new this(n);return i.tokenizer.write(t,!0),i.document}static getFragmentParser(t,n){const i={...Dy,...n};t??(t=i.treeAdapter.createElement(O.TEMPLATE,B.HTML,[]));const r=i.treeAdapter.createElement("documentmock",B.HTML,[]),o=new this(i,r,t);return o.fragmentContextID===c.TEMPLATE&&o.tmplInsertionModeStack.unshift(_.IN_TEMPLATE),o._initTokenizerForFragmentParsing(),o._insertFakeRootElement(),o._resetInsertionMode(),o._findFormInFragmentContext(),o}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),n=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,n),n}_err(t,n,i){var r;if(!this.onParseError)return;const o=(r=t.location)!==null&&r!==void 0?r:eM,s={code:n,startLine:o.startLine,startCol:o.startCol,startOffset:o.startOffset,endLine:i?o.startLine:o.endLine,endCol:i?o.startCol:o.endCol,endOffset:i?o.startOffset:o.endOffset};this.onParseError(s)}onItemPush(t,n,i){var r,o;(o=(r=this.treeAdapter).onItemPush)===null||o===void 0||o.call(r,t),i&&this.openElements.stackTop>0&&this._setContextModes(t,n)}onItemPop(t,n){var i,r;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(r=(i=this.treeAdapter).onItemPop)===null||r===void 0||r.call(i,t,this.openElements.current),n){let o,s;this.openElements.stackTop===0&&this.fragmentContext?(o=this.fragmentContext,s=this.fragmentContextID):{current:o,currentTagId:s}=this.openElements,this._setContextModes(o,s)}}_setContextModes(t,n){const i=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===B.HTML;this.currentNotInHTML=!i,this.tokenizer.inForeignNode=!i&&t!==void 0&&n!==void 0&&!this._isIntegrationPoint(n,t)}_switchToTextParsing(t,n){this._insertElement(t,B.HTML),this.tokenizer.state=n,this.originalInsertionMode=this.insertionMode,this.insertionMode=_.TEXT}switchToPlaintextParsing(){this.insertionMode=_.TEXT,this.originalInsertionMode=_.IN_BODY,this.tokenizer.state=qe.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===O.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==B.HTML))switch(this.fragmentContextID){case c.TITLE:case c.TEXTAREA:{this.tokenizer.state=qe.RCDATA;break}case c.STYLE:case c.XMP:case c.IFRAME:case c.NOEMBED:case c.NOFRAMES:case c.NOSCRIPT:{this.tokenizer.state=qe.RAWTEXT;break}case c.SCRIPT:{this.tokenizer.state=qe.SCRIPT_DATA;break}case c.PLAINTEXT:{this.tokenizer.state=qe.PLAINTEXT;break}}}_setDocumentType(t){const n=t.name||"",i=t.publicId||"",r=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,n,i,r),t.location){const s=this.treeAdapter.getChildNodes(this.document).find(a=>this.treeAdapter.isDocumentTypeNode(a));s&&this.treeAdapter.setNodeSourceCodeLocation(s,t.location)}}_attachElementToTree(t,n){if(this.options.sourceCodeLocationInfo){const i=n&&{...n,startTag:n};this.treeAdapter.setNodeSourceCodeLocation(t,i)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const i=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(i??this.document,t)}}_appendElement(t,n){const i=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(i,t.location)}_insertElement(t,n){const i=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(i,t.location),this.openElements.push(i,t.tagID)}_insertFakeElement(t,n){const i=this.treeAdapter.createElement(t,B.HTML,[]);this._attachElementToTree(i,null),this.openElements.push(i,n)}_insertTemplate(t){const n=this.treeAdapter.createElement(t.tagName,B.HTML,t.attrs),i=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(n,i),this._attachElementToTree(n,t.location),this.openElements.push(n,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(i,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(O.HTML,B.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,c.HTML)}_appendCommentNode(t,n){const i=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(n,i),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(i,t.location)}_insertCharacters(t){let n,i;if(this._shouldFosterParentOnInsertion()?({parent:n,beforeElement:i}=this._findFosterParentingLocation(),i?this.treeAdapter.insertTextBefore(n,t.chars,i):this.treeAdapter.insertText(n,t.chars)):(n=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(n,t.chars)),!t.location)return;const r=this.treeAdapter.getChildNodes(n),o=i?r.lastIndexOf(i):r.length,s=r[o-1];if(this.treeAdapter.getNodeSourceCodeLocation(s)){const{endLine:l,endCol:u,endOffset:h}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(s,{endLine:l,endCol:u,endOffset:h})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(s,t.location)}_adoptNodes(t,n){for(let i=this.treeAdapter.getFirstChild(t);i;i=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(i),this.treeAdapter.appendChild(n,i)}_setEndLocation(t,n){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&n.location){const i=n.location,r=this.treeAdapter.getTagName(t),o=n.type===be.END_TAG&&r===n.tagName?{endTag:{...i},endLine:i.endLine,endCol:i.endCol,endOffset:i.endOffset}:{endLine:i.startLine,endCol:i.startCol,endOffset:i.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,o)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let n,i;return this.openElements.stackTop===0&&this.fragmentContext?(n=this.fragmentContext,i=this.fragmentContextID):{current:n,currentTagId:i}=this.openElements,t.tagID===c.SVG&&this.treeAdapter.getTagName(n)===O.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(n)===B.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===c.MGLYPH||t.tagID===c.MALIGNMARK)&&i!==void 0&&!this._isIntegrationPoint(i,n,B.HTML)}_processToken(t){switch(t.type){case be.CHARACTER:{this.onCharacter(t);break}case be.NULL_CHARACTER:{this.onNullCharacter(t);break}case be.COMMENT:{this.onComment(t);break}case be.DOCTYPE:{this.onDoctype(t);break}case be.START_TAG:{this._processStartTag(t);break}case be.END_TAG:{this.onEndTag(t);break}case be.EOF:{this.onEof(t);break}case be.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,n,i){const r=this.treeAdapter.getNamespaceURI(n),o=this.treeAdapter.getAttrList(n);return K6(t,r,o,i)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const n=this.activeFormattingElements.entries.findIndex(r=>r.type===_n.Marker||this.openElements.contains(r.element)),i=n===-1?t-1:n-1;for(let r=i;r>=0;r--){const o=this.activeFormattingElements.entries[r];this._insertElement(o.token,this.treeAdapter.getNamespaceURI(o.element)),o.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=_.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(c.P),this.openElements.popUntilTagNamePopped(c.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case c.TR:{this.insertionMode=_.IN_ROW;return}case c.TBODY:case c.THEAD:case c.TFOOT:{this.insertionMode=_.IN_TABLE_BODY;return}case c.CAPTION:{this.insertionMode=_.IN_CAPTION;return}case c.COLGROUP:{this.insertionMode=_.IN_COLUMN_GROUP;return}case c.TABLE:{this.insertionMode=_.IN_TABLE;return}case c.BODY:{this.insertionMode=_.IN_BODY;return}case c.FRAMESET:{this.insertionMode=_.IN_FRAMESET;return}case c.SELECT:{this._resetInsertionModeForSelect(t);return}case c.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case c.HTML:{this.insertionMode=this.headElement?_.AFTER_HEAD:_.BEFORE_HEAD;return}case c.TD:case c.TH:{if(t>0){this.insertionMode=_.IN_CELL;return}break}case c.HEAD:{if(t>0){this.insertionMode=_.IN_HEAD;return}break}}this.insertionMode=_.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let n=t-1;n>0;n--){const i=this.openElements.tagIDs[n];if(i===c.TEMPLATE)break;if(i===c.TABLE){this.insertionMode=_.IN_SELECT_IN_TABLE;return}}this.insertionMode=_.IN_SELECT}_isElementCausesFosterParenting(t){return H1.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const n=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case c.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(n)===B.HTML)return{parent:this.treeAdapter.getTemplateContent(n),beforeElement:null};break}case c.TABLE:{const i=this.treeAdapter.getParentNode(n);return i?{parent:i,beforeElement:n}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const n=this._findFosterParentingLocation();n.beforeElement?this.treeAdapter.insertBefore(n.parent,t,n.beforeElement):this.treeAdapter.appendChild(n.parent,t)}_isSpecialElement(t,n){const i=this.treeAdapter.getNamespaceURI(t);return T6[i].has(n)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){A4(this,t);return}switch(this.insertionMode){case _.INITIAL:{po(this,t);break}case _.BEFORE_HTML:{Ro(this,t);break}case _.BEFORE_HEAD:{Lo(this,t);break}case _.IN_HEAD:{Fo(this,t);break}case _.IN_HEAD_NO_SCRIPT:{zo(this,t);break}case _.AFTER_HEAD:{Bo(this,t);break}case _.IN_BODY:case _.IN_CAPTION:case _.IN_CELL:case _.IN_TEMPLATE:{W1(this,t);break}case _.TEXT:case _.IN_SELECT:case _.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case _.IN_TABLE:case _.IN_TABLE_BODY:case _.IN_ROW:{Xu(this,t);break}case _.IN_TABLE_TEXT:{K1(this,t);break}case _.IN_COLUMN_GROUP:{bl(this,t);break}case _.AFTER_BODY:{Tl(this,t);break}case _.AFTER_AFTER_BODY:{ja(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){C4(this,t);return}switch(this.insertionMode){case _.INITIAL:{po(this,t);break}case _.BEFORE_HTML:{Ro(this,t);break}case _.BEFORE_HEAD:{Lo(this,t);break}case _.IN_HEAD:{Fo(this,t);break}case _.IN_HEAD_NO_SCRIPT:{zo(this,t);break}case _.AFTER_HEAD:{Bo(this,t);break}case _.TEXT:{this._insertCharacters(t);break}case _.IN_TABLE:case _.IN_TABLE_BODY:case _.IN_ROW:{Xu(this,t);break}case _.IN_COLUMN_GROUP:{bl(this,t);break}case _.AFTER_BODY:{Tl(this,t);break}case _.AFTER_AFTER_BODY:{ja(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){pd(this,t);return}switch(this.insertionMode){case _.INITIAL:case _.BEFORE_HTML:case _.BEFORE_HEAD:case _.IN_HEAD:case _.IN_HEAD_NO_SCRIPT:case _.AFTER_HEAD:case _.IN_BODY:case _.IN_TABLE:case _.IN_CAPTION:case _.IN_COLUMN_GROUP:case _.IN_TABLE_BODY:case _.IN_ROW:case _.IN_CELL:case _.IN_SELECT:case _.IN_SELECT_IN_TABLE:case _.IN_TEMPLATE:case _.IN_FRAMESET:case _.AFTER_FRAMESET:{pd(this,t);break}case _.IN_TABLE_TEXT:{mo(this,t);break}case _.AFTER_BODY:{aM(this,t);break}case _.AFTER_AFTER_BODY:case _.AFTER_AFTER_FRAMESET:{lM(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case _.INITIAL:{uM(this,t);break}case _.BEFORE_HEAD:case _.IN_HEAD:case _.IN_HEAD_NO_SCRIPT:case _.AFTER_HEAD:{this._err(t,M.misplacedDoctype);break}case _.IN_TABLE_TEXT:{mo(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,M.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?O4(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case _.INITIAL:{po(this,t);break}case _.BEFORE_HTML:{cM(this,t);break}case _.BEFORE_HEAD:{hM(this,t);break}case _.IN_HEAD:{vn(this,t);break}case _.IN_HEAD_NO_SCRIPT:{mM(this,t);break}case _.AFTER_HEAD:{yM(this,t);break}case _.IN_BODY:{bt(this,t);break}case _.IN_TABLE:{Fr(this,t);break}case _.IN_TABLE_TEXT:{mo(this,t);break}case _.IN_CAPTION:{f4(this,t);break}case _.IN_COLUMN_GROUP:{Rp(this,t);break}case _.IN_TABLE_BODY:{Zl(this,t);break}case _.IN_ROW:{eu(this,t);break}case _.IN_CELL:{g4(this,t);break}case _.IN_SELECT:{Z1(this,t);break}case _.IN_SELECT_IN_TABLE:{v4(this,t);break}case _.IN_TEMPLATE:{T4(this,t);break}case _.AFTER_BODY:{w4(this,t);break}case _.IN_FRAMESET:{x4(this,t);break}case _.AFTER_FRAMESET:{S4(this,t);break}case _.AFTER_AFTER_BODY:{D4(this,t);break}case _.AFTER_AFTER_FRAMESET:{I4(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?P4(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case _.INITIAL:{po(this,t);break}case _.BEFORE_HTML:{dM(this,t);break}case _.BEFORE_HEAD:{fM(this,t);break}case _.IN_HEAD:{pM(this,t);break}case _.IN_HEAD_NO_SCRIPT:{gM(this,t);break}case _.AFTER_HEAD:{vM(this,t);break}case _.IN_BODY:{Jl(this,t);break}case _.TEXT:{i4(this,t);break}case _.IN_TABLE:{as(this,t);break}case _.IN_TABLE_TEXT:{mo(this,t);break}case _.IN_CAPTION:{p4(this,t);break}case _.IN_COLUMN_GROUP:{m4(this,t);break}case _.IN_TABLE_BODY:{md(this,t);break}case _.IN_ROW:{J1(this,t);break}case _.IN_CELL:{y4(this,t);break}case _.IN_SELECT:{eT(this,t);break}case _.IN_SELECT_IN_TABLE:{b4(this,t);break}case _.IN_TEMPLATE:{E4(this,t);break}case _.AFTER_BODY:{nT(this,t);break}case _.IN_FRAMESET:{_4(this,t);break}case _.AFTER_FRAMESET:{k4(this,t);break}case _.AFTER_AFTER_BODY:{ja(this,t);break}}}onEof(t){switch(this.insertionMode){case _.INITIAL:{po(this,t);break}case _.BEFORE_HTML:{Ro(this,t);break}case _.BEFORE_HEAD:{Lo(this,t);break}case _.IN_HEAD:{Fo(this,t);break}case _.IN_HEAD_NO_SCRIPT:{zo(this,t);break}case _.AFTER_HEAD:{Bo(this,t);break}case _.IN_BODY:case _.IN_TABLE:case _.IN_CAPTION:case _.IN_COLUMN_GROUP:case _.IN_TABLE_BODY:case _.IN_ROW:case _.IN_CELL:case _.IN_SELECT:case _.IN_SELECT_IN_TABLE:{Q1(this,t);break}case _.TEXT:{r4(this,t);break}case _.IN_TABLE_TEXT:{mo(this,t);break}case _.IN_TEMPLATE:{tT(this,t);break}case _.AFTER_BODY:case _.IN_FRAMESET:case _.AFTER_FRAMESET:case _.AFTER_AFTER_BODY:case _.AFTER_AFTER_FRAMESET:{Mp(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===T.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case _.IN_HEAD:case _.IN_HEAD_NO_SCRIPT:case _.AFTER_HEAD:case _.TEXT:case _.IN_COLUMN_GROUP:case _.IN_SELECT:case _.IN_SELECT_IN_TABLE:case _.IN_FRAMESET:case _.AFTER_FRAMESET:{this._insertCharacters(t);break}case _.IN_BODY:case _.IN_CAPTION:case _.IN_CELL:case _.IN_TEMPLATE:case _.AFTER_BODY:case _.AFTER_AFTER_BODY:case _.AFTER_AFTER_FRAMESET:{$1(this,t);break}case _.IN_TABLE:case _.IN_TABLE_BODY:case _.IN_ROW:{Xu(this,t);break}case _.IN_TABLE_TEXT:{G1(this,t);break}}}}function tM(e,t){let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagID)||(n=null):(e.activeFormattingElements.removeEntry(n),n=null):q1(e,t),n}function nM(e,t){let n=null,i=e.openElements.stackTop;for(;i>=0;i--){const r=e.openElements.items[i];if(r===t.element)break;e._isSpecialElement(r,e.openElements.tagIDs[i])&&(n=r)}return n||(e.openElements.shortenToLength(Math.max(i,0)),e.activeFormattingElements.removeEntry(t)),n}function iM(e,t,n){let i=t,r=e.openElements.getCommonAncestor(t);for(let o=0,s=r;s!==n;o++,s=r){r=e.openElements.getCommonAncestor(s);const a=e.activeFormattingElements.getElementEntry(s),l=a&&o>=Z6;!a||l?(l&&e.activeFormattingElements.removeEntry(a),e.openElements.remove(s)):(s=rM(e,a),i===t&&(e.activeFormattingElements.bookmark=a),e.treeAdapter.detachNode(i),e.treeAdapter.appendChild(s,i),i=s)}return i}function rM(e,t){const n=e.treeAdapter.getNamespaceURI(t.element),i=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs);return e.openElements.replace(t.element,i),t.element=i,i}function oM(e,t,n){const i=e.treeAdapter.getTagName(t),r=Yr(i);if(e._isElementCausesFosterParenting(r))e._fosterParentElement(n);else{const o=e.treeAdapter.getNamespaceURI(t);r===c.TEMPLATE&&o===B.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n)}}function sM(e,t,n){const i=e.treeAdapter.getNamespaceURI(n.element),{token:r}=n,o=e.treeAdapter.createElement(r.tagName,i,r.attrs);e._adoptNodes(t,o),e.treeAdapter.appendChild(t,o),e.activeFormattingElements.insertElementAfterBookmark(o,r),e.activeFormattingElements.removeEntry(n),e.openElements.remove(n.element),e.openElements.insertAfter(t,o,r.tagID)}function Np(e,t){for(let n=0;n<J6;n++){const i=tM(e,t);if(!i)break;const r=nM(e,i);if(!r)break;e.activeFormattingElements.bookmark=i;const o=iM(e,r,i.element),s=e.openElements.getCommonAncestor(i.element);e.treeAdapter.detachNode(o),s&&oM(e,s,o),sM(e,r,i)}}function pd(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function aM(e,t){e._appendCommentNode(t,e.openElements.items[0])}function lM(e,t){e._appendCommentNode(t,e.document)}function Mp(e,t){if(e.stopped=!0,t.location){const n=e.fragmentContext?0:2;for(let i=e.openElements.stackTop;i>=n;i--)e._setEndLocation(e.openElements.items[i],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const i=e.openElements.items[0],r=e.treeAdapter.getNodeSourceCodeLocation(i);if(r&&!r.endTag&&(e._setEndLocation(i,t),e.openElements.stackTop>=1)){const o=e.openElements.items[1],s=e.treeAdapter.getNodeSourceCodeLocation(o);s&&!s.endTag&&e._setEndLocation(o,t)}}}}function uM(e,t){e._setDocumentType(t);const n=t.forceQuirks?en.QUIRKS:B6(t);z6(t)||e._err(t,M.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode=_.BEFORE_HTML}function po(e,t){e._err(t,M.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,en.QUIRKS),e.insertionMode=_.BEFORE_HTML,e._processToken(t)}function cM(e,t){t.tagID===c.HTML?(e._insertElement(t,B.HTML),e.insertionMode=_.BEFORE_HEAD):Ro(e,t)}function dM(e,t){const n=t.tagID;(n===c.HTML||n===c.HEAD||n===c.BODY||n===c.BR)&&Ro(e,t)}function Ro(e,t){e._insertFakeRootElement(),e.insertionMode=_.BEFORE_HEAD,e._processToken(t)}function hM(e,t){switch(t.tagID){case c.HTML:{bt(e,t);break}case c.HEAD:{e._insertElement(t,B.HTML),e.headElement=e.openElements.current,e.insertionMode=_.IN_HEAD;break}default:Lo(e,t)}}function fM(e,t){const n=t.tagID;n===c.HEAD||n===c.BODY||n===c.HTML||n===c.BR?Lo(e,t):e._err(t,M.endTagWithoutMatchingOpenElement)}function Lo(e,t){e._insertFakeElement(O.HEAD,c.HEAD),e.headElement=e.openElements.current,e.insertionMode=_.IN_HEAD,e._processToken(t)}function vn(e,t){switch(t.tagID){case c.HTML:{bt(e,t);break}case c.BASE:case c.BASEFONT:case c.BGSOUND:case c.LINK:case c.META:{e._appendElement(t,B.HTML),t.ackSelfClosing=!0;break}case c.TITLE:{e._switchToTextParsing(t,qe.RCDATA);break}case c.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,qe.RAWTEXT):(e._insertElement(t,B.HTML),e.insertionMode=_.IN_HEAD_NO_SCRIPT);break}case c.NOFRAMES:case c.STYLE:{e._switchToTextParsing(t,qe.RAWTEXT);break}case c.SCRIPT:{e._switchToTextParsing(t,qe.SCRIPT_DATA);break}case c.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=_.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(_.IN_TEMPLATE);break}case c.HEAD:{e._err(t,M.misplacedStartTagForHeadElement);break}default:Fo(e,t)}}function pM(e,t){switch(t.tagID){case c.HEAD:{e.openElements.pop(),e.insertionMode=_.AFTER_HEAD;break}case c.BODY:case c.BR:case c.HTML:{Fo(e,t);break}case c.TEMPLATE:{er(e,t);break}default:e._err(t,M.endTagWithoutMatchingOpenElement)}}function er(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==c.TEMPLATE&&e._err(t,M.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(c.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,M.endTagWithoutMatchingOpenElement)}function Fo(e,t){e.openElements.pop(),e.insertionMode=_.AFTER_HEAD,e._processToken(t)}function mM(e,t){switch(t.tagID){case c.HTML:{bt(e,t);break}case c.BASEFONT:case c.BGSOUND:case c.HEAD:case c.LINK:case c.META:case c.NOFRAMES:case c.STYLE:{vn(e,t);break}case c.NOSCRIPT:{e._err(t,M.nestedNoscriptInHead);break}default:zo(e,t)}}function gM(e,t){switch(t.tagID){case c.NOSCRIPT:{e.openElements.pop(),e.insertionMode=_.IN_HEAD;break}case c.BR:{zo(e,t);break}default:e._err(t,M.endTagWithoutMatchingOpenElement)}}function zo(e,t){const n=t.type===be.EOF?M.openElementsLeftAfterEof:M.disallowedContentInNoscriptInHead;e._err(t,n),e.openElements.pop(),e.insertionMode=_.IN_HEAD,e._processToken(t)}function yM(e,t){switch(t.tagID){case c.HTML:{bt(e,t);break}case c.BODY:{e._insertElement(t,B.HTML),e.framesetOk=!1,e.insertionMode=_.IN_BODY;break}case c.FRAMESET:{e._insertElement(t,B.HTML),e.insertionMode=_.IN_FRAMESET;break}case c.BASE:case c.BASEFONT:case c.BGSOUND:case c.LINK:case c.META:case c.NOFRAMES:case c.SCRIPT:case c.STYLE:case c.TEMPLATE:case c.TITLE:{e._err(t,M.abandonedHeadElementChild),e.openElements.push(e.headElement,c.HEAD),vn(e,t),e.openElements.remove(e.headElement);break}case c.HEAD:{e._err(t,M.misplacedStartTagForHeadElement);break}default:Bo(e,t)}}function vM(e,t){switch(t.tagID){case c.BODY:case c.HTML:case c.BR:{Bo(e,t);break}case c.TEMPLATE:{er(e,t);break}default:e._err(t,M.endTagWithoutMatchingOpenElement)}}function Bo(e,t){e._insertFakeElement(O.BODY,c.BODY),e.insertionMode=_.IN_BODY,Xl(e,t)}function Xl(e,t){switch(t.type){case be.CHARACTER:{W1(e,t);break}case be.WHITESPACE_CHARACTER:{$1(e,t);break}case be.COMMENT:{pd(e,t);break}case be.START_TAG:{bt(e,t);break}case be.END_TAG:{Jl(e,t);break}case be.EOF:{Q1(e,t);break}}}function $1(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function W1(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function bM(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function TM(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs))}function EM(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,B.HTML),e.insertionMode=_.IN_FRAMESET)}function wM(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,B.HTML)}function xM(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&fd.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,B.HTML)}function _M(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,B.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function SM(e,t){const n=e.openElements.tmplCount>0;(!e.formElement||n)&&(e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,B.HTML),n||(e.formElement=e.openElements.current))}function kM(e,t){e.framesetOk=!1;const n=t.tagID;for(let i=e.openElements.stackTop;i>=0;i--){const r=e.openElements.tagIDs[i];if(n===c.LI&&r===c.LI||(n===c.DD||n===c.DT)&&(r===c.DD||r===c.DT)){e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.popUntilTagNamePopped(r);break}if(r!==c.ADDRESS&&r!==c.DIV&&r!==c.P&&e._isSpecialElement(e.openElements.items[i],r))break}e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,B.HTML)}function DM(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,B.HTML),e.tokenizer.state=qe.PLAINTEXT}function IM(e,t){e.openElements.hasInScope(c.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(c.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,B.HTML),e.framesetOk=!1}function CM(e,t){const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(O.A);n&&(Np(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),e._reconstructActiveFormattingElements(),e._insertElement(t,B.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function AM(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,B.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function OM(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(c.NOBR)&&(Np(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,B.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function PM(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,B.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function NM(e,t){e.treeAdapter.getDocumentMode(e.document)!==en.QUIRKS&&e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,B.HTML),e.framesetOk=!1,e.insertionMode=_.IN_TABLE}function V1(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,B.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function Y1(e){const t=M1(e,Ui.TYPE);return t!=null&&t.toLowerCase()===X6}function MM(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,B.HTML),Y1(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function RM(e,t){e._appendElement(t,B.HTML),t.ackSelfClosing=!0}function LM(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._appendElement(t,B.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function FM(e,t){t.tagName=O.IMG,t.tagID=c.IMG,V1(e,t)}function zM(e,t){e._insertElement(t,B.HTML),e.skipNextNewLine=!0,e.tokenizer.state=qe.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=_.TEXT}function BM(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,qe.RAWTEXT)}function jM(e,t){e.framesetOk=!1,e._switchToTextParsing(t,qe.RAWTEXT)}function Cy(e,t){e._switchToTextParsing(t,qe.RAWTEXT)}function UM(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,B.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===_.IN_TABLE||e.insertionMode===_.IN_CAPTION||e.insertionMode===_.IN_TABLE_BODY||e.insertionMode===_.IN_ROW||e.insertionMode===_.IN_CELL?_.IN_SELECT_IN_TABLE:_.IN_SELECT}function HM(e,t){e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,B.HTML)}function $M(e,t){e.openElements.hasInScope(c.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,B.HTML)}function WM(e,t){e.openElements.hasInScope(c.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(c.RTC),e._insertElement(t,B.HTML)}function VM(e,t){e._reconstructActiveFormattingElements(),j1(t),Pp(t),t.selfClosing?e._appendElement(t,B.MATHML):e._insertElement(t,B.MATHML),t.ackSelfClosing=!0}function YM(e,t){e._reconstructActiveFormattingElements(),U1(t),Pp(t),t.selfClosing?e._appendElement(t,B.SVG):e._insertElement(t,B.SVG),t.ackSelfClosing=!0}function Ay(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,B.HTML)}function bt(e,t){switch(t.tagID){case c.I:case c.S:case c.B:case c.U:case c.EM:case c.TT:case c.BIG:case c.CODE:case c.FONT:case c.SMALL:case c.STRIKE:case c.STRONG:{AM(e,t);break}case c.A:{CM(e,t);break}case c.H1:case c.H2:case c.H3:case c.H4:case c.H5:case c.H6:{xM(e,t);break}case c.P:case c.DL:case c.OL:case c.UL:case c.DIV:case c.DIR:case c.NAV:case c.MAIN:case c.MENU:case c.ASIDE:case c.CENTER:case c.FIGURE:case c.FOOTER:case c.HEADER:case c.HGROUP:case c.DIALOG:case c.DETAILS:case c.ADDRESS:case c.ARTICLE:case c.SEARCH:case c.SECTION:case c.SUMMARY:case c.FIELDSET:case c.BLOCKQUOTE:case c.FIGCAPTION:{wM(e,t);break}case c.LI:case c.DD:case c.DT:{kM(e,t);break}case c.BR:case c.IMG:case c.WBR:case c.AREA:case c.EMBED:case c.KEYGEN:{V1(e,t);break}case c.HR:{LM(e,t);break}case c.RB:case c.RTC:{$M(e,t);break}case c.RT:case c.RP:{WM(e,t);break}case c.PRE:case c.LISTING:{_M(e,t);break}case c.XMP:{BM(e,t);break}case c.SVG:{YM(e,t);break}case c.HTML:{bM(e,t);break}case c.BASE:case c.LINK:case c.META:case c.STYLE:case c.TITLE:case c.SCRIPT:case c.BGSOUND:case c.BASEFONT:case c.TEMPLATE:{vn(e,t);break}case c.BODY:{TM(e,t);break}case c.FORM:{SM(e,t);break}case c.NOBR:{OM(e,t);break}case c.MATH:{VM(e,t);break}case c.TABLE:{NM(e,t);break}case c.INPUT:{MM(e,t);break}case c.PARAM:case c.TRACK:case c.SOURCE:{RM(e,t);break}case c.IMAGE:{FM(e,t);break}case c.BUTTON:{IM(e,t);break}case c.APPLET:case c.OBJECT:case c.MARQUEE:{PM(e,t);break}case c.IFRAME:{jM(e,t);break}case c.SELECT:{UM(e,t);break}case c.OPTION:case c.OPTGROUP:{HM(e,t);break}case c.NOEMBED:case c.NOFRAMES:{Cy(e,t);break}case c.FRAMESET:{EM(e,t);break}case c.TEXTAREA:{zM(e,t);break}case c.NOSCRIPT:{e.options.scriptingEnabled?Cy(e,t):Ay(e,t);break}case c.PLAINTEXT:{DM(e,t);break}case c.COL:case c.TH:case c.TD:case c.TR:case c.HEAD:case c.FRAME:case c.TBODY:case c.TFOOT:case c.THEAD:case c.CAPTION:case c.COLGROUP:break;default:Ay(e,t)}}function qM(e,t){if(e.openElements.hasInScope(c.BODY)&&(e.insertionMode=_.AFTER_BODY,e.options.sourceCodeLocationInfo)){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e._setEndLocation(n,t)}}function QM(e,t){e.openElements.hasInScope(c.BODY)&&(e.insertionMode=_.AFTER_BODY,nT(e,t))}function GM(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n))}function KM(e){const t=e.openElements.tmplCount>0,{formElement:n}=e;t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(c.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(c.FORM):n&&e.openElements.remove(n))}function XM(e){e.openElements.hasInButtonScope(c.P)||e._insertFakeElement(O.P,c.P),e._closePElement()}function JM(e){e.openElements.hasInListItemScope(c.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(c.LI),e.openElements.popUntilTagNamePopped(c.LI))}function ZM(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilTagNamePopped(n))}function e4(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function t4(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker())}function n4(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(O.BR,c.BR),e.openElements.pop(),e.framesetOk=!1}function q1(e,t){const n=t.tagName,i=t.tagID;for(let r=e.openElements.stackTop;r>0;r--){const o=e.openElements.items[r],s=e.openElements.tagIDs[r];if(i===s&&(i!==c.UNKNOWN||e.treeAdapter.getTagName(o)===n)){e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.stackTop>=r&&e.openElements.shortenToLength(r);break}if(e._isSpecialElement(o,s))break}}function Jl(e,t){switch(t.tagID){case c.A:case c.B:case c.I:case c.S:case c.U:case c.EM:case c.TT:case c.BIG:case c.CODE:case c.FONT:case c.NOBR:case c.SMALL:case c.STRIKE:case c.STRONG:{Np(e,t);break}case c.P:{XM(e);break}case c.DL:case c.UL:case c.OL:case c.DIR:case c.DIV:case c.NAV:case c.PRE:case c.MAIN:case c.MENU:case c.ASIDE:case c.BUTTON:case c.CENTER:case c.FIGURE:case c.FOOTER:case c.HEADER:case c.HGROUP:case c.DIALOG:case c.ADDRESS:case c.ARTICLE:case c.DETAILS:case c.SEARCH:case c.SECTION:case c.SUMMARY:case c.LISTING:case c.FIELDSET:case c.BLOCKQUOTE:case c.FIGCAPTION:{GM(e,t);break}case c.LI:{JM(e);break}case c.DD:case c.DT:{ZM(e,t);break}case c.H1:case c.H2:case c.H3:case c.H4:case c.H5:case c.H6:{e4(e);break}case c.BR:{n4(e);break}case c.BODY:{qM(e,t);break}case c.HTML:{QM(e,t);break}case c.FORM:{KM(e);break}case c.APPLET:case c.OBJECT:case c.MARQUEE:{t4(e,t);break}case c.TEMPLATE:{er(e,t);break}default:q1(e,t)}}function Q1(e,t){e.tmplInsertionModeStack.length>0?tT(e,t):Mp(e,t)}function i4(e,t){var n;t.tagID===c.SCRIPT&&((n=e.scriptHandler)===null||n===void 0||n.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function r4(e,t){e._err(t,M.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function Xu(e,t){if(e.openElements.currentTagId!==void 0&&H1.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=_.IN_TABLE_TEXT,t.type){case be.CHARACTER:{K1(e,t);break}case be.WHITESPACE_CHARACTER:{G1(e,t);break}}else js(e,t)}function o4(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,B.HTML),e.insertionMode=_.IN_CAPTION}function s4(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,B.HTML),e.insertionMode=_.IN_COLUMN_GROUP}function a4(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(O.COLGROUP,c.COLGROUP),e.insertionMode=_.IN_COLUMN_GROUP,Rp(e,t)}function l4(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,B.HTML),e.insertionMode=_.IN_TABLE_BODY}function u4(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(O.TBODY,c.TBODY),e.insertionMode=_.IN_TABLE_BODY,Zl(e,t)}function c4(e,t){e.openElements.hasInTableScope(c.TABLE)&&(e.openElements.popUntilTagNamePopped(c.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function d4(e,t){Y1(t)?e._appendElement(t,B.HTML):js(e,t),t.ackSelfClosing=!0}function h4(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,B.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function Fr(e,t){switch(t.tagID){case c.TD:case c.TH:case c.TR:{u4(e,t);break}case c.STYLE:case c.SCRIPT:case c.TEMPLATE:{vn(e,t);break}case c.COL:{a4(e,t);break}case c.FORM:{h4(e,t);break}case c.TABLE:{c4(e,t);break}case c.TBODY:case c.TFOOT:case c.THEAD:{l4(e,t);break}case c.INPUT:{d4(e,t);break}case c.CAPTION:{o4(e,t);break}case c.COLGROUP:{s4(e,t);break}default:js(e,t)}}function as(e,t){switch(t.tagID){case c.TABLE:{e.openElements.hasInTableScope(c.TABLE)&&(e.openElements.popUntilTagNamePopped(c.TABLE),e._resetInsertionMode());break}case c.TEMPLATE:{er(e,t);break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:case c.TBODY:case c.TD:case c.TFOOT:case c.TH:case c.THEAD:case c.TR:break;default:js(e,t)}}function js(e,t){const n=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,Xl(e,t),e.fosterParentingEnabled=n}function G1(e,t){e.pendingCharacterTokens.push(t)}function K1(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function mo(e,t){let n=0;if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)js(e,e.pendingCharacterTokens[n]);else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const X1=new Set([c.CAPTION,c.COL,c.COLGROUP,c.TBODY,c.TD,c.TFOOT,c.TH,c.THEAD,c.TR]);function f4(e,t){const n=t.tagID;X1.has(n)?e.openElements.hasInTableScope(c.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(c.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=_.IN_TABLE,Fr(e,t)):bt(e,t)}function p4(e,t){const n=t.tagID;switch(n){case c.CAPTION:case c.TABLE:{e.openElements.hasInTableScope(c.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(c.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=_.IN_TABLE,n===c.TABLE&&as(e,t));break}case c.BODY:case c.COL:case c.COLGROUP:case c.HTML:case c.TBODY:case c.TD:case c.TFOOT:case c.TH:case c.THEAD:case c.TR:break;default:Jl(e,t)}}function Rp(e,t){switch(t.tagID){case c.HTML:{bt(e,t);break}case c.COL:{e._appendElement(t,B.HTML),t.ackSelfClosing=!0;break}case c.TEMPLATE:{vn(e,t);break}default:bl(e,t)}}function m4(e,t){switch(t.tagID){case c.COLGROUP:{e.openElements.currentTagId===c.COLGROUP&&(e.openElements.pop(),e.insertionMode=_.IN_TABLE);break}case c.TEMPLATE:{er(e,t);break}case c.COL:break;default:bl(e,t)}}function bl(e,t){e.openElements.currentTagId===c.COLGROUP&&(e.openElements.pop(),e.insertionMode=_.IN_TABLE,e._processToken(t))}function Zl(e,t){switch(t.tagID){case c.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,B.HTML),e.insertionMode=_.IN_ROW;break}case c.TH:case c.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(O.TR,c.TR),e.insertionMode=_.IN_ROW,eu(e,t);break}case c.CAPTION:case c.COL:case c.COLGROUP:case c.TBODY:case c.TFOOT:case c.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE,Fr(e,t));break}default:Fr(e,t)}}function md(e,t){const n=t.tagID;switch(t.tagID){case c.TBODY:case c.TFOOT:case c.THEAD:{e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE);break}case c.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE,as(e,t));break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:case c.TD:case c.TH:case c.TR:break;default:as(e,t)}}function eu(e,t){switch(t.tagID){case c.TH:case c.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,B.HTML),e.insertionMode=_.IN_CELL,e.activeFormattingElements.insertMarker();break}case c.CAPTION:case c.COL:case c.COLGROUP:case c.TBODY:case c.TFOOT:case c.THEAD:case c.TR:{e.openElements.hasInTableScope(c.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE_BODY,Zl(e,t));break}default:Fr(e,t)}}function J1(e,t){switch(t.tagID){case c.TR:{e.openElements.hasInTableScope(c.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE_BODY);break}case c.TABLE:{e.openElements.hasInTableScope(c.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE_BODY,md(e,t));break}case c.TBODY:case c.TFOOT:case c.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(c.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE_BODY,md(e,t));break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:case c.TD:case c.TH:break;default:as(e,t)}}function g4(e,t){const n=t.tagID;X1.has(n)?(e.openElements.hasInTableScope(c.TD)||e.openElements.hasInTableScope(c.TH))&&(e._closeTableCell(),eu(e,t)):bt(e,t)}function y4(e,t){const n=t.tagID;switch(n){case c.TD:case c.TH:{e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=_.IN_ROW);break}case c.TABLE:case c.TBODY:case c.TFOOT:case c.THEAD:case c.TR:{e.openElements.hasInTableScope(n)&&(e._closeTableCell(),J1(e,t));break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:break;default:Jl(e,t)}}function Z1(e,t){switch(t.tagID){case c.HTML:{bt(e,t);break}case c.OPTION:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e._insertElement(t,B.HTML);break}case c.OPTGROUP:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e.openElements.currentTagId===c.OPTGROUP&&e.openElements.pop(),e._insertElement(t,B.HTML);break}case c.HR:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e.openElements.currentTagId===c.OPTGROUP&&e.openElements.pop(),e._appendElement(t,B.HTML),t.ackSelfClosing=!0;break}case c.INPUT:case c.KEYGEN:case c.TEXTAREA:case c.SELECT:{e.openElements.hasInSelectScope(c.SELECT)&&(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode(),t.tagID!==c.SELECT&&e._processStartTag(t));break}case c.SCRIPT:case c.TEMPLATE:{vn(e,t);break}}}function eT(e,t){switch(t.tagID){case c.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===c.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===c.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===c.OPTGROUP&&e.openElements.pop();break}case c.OPTION:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop();break}case c.SELECT:{e.openElements.hasInSelectScope(c.SELECT)&&(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode());break}case c.TEMPLATE:{er(e,t);break}}}function v4(e,t){const n=t.tagID;n===c.CAPTION||n===c.TABLE||n===c.TBODY||n===c.TFOOT||n===c.THEAD||n===c.TR||n===c.TD||n===c.TH?(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode(),e._processStartTag(t)):Z1(e,t)}function b4(e,t){const n=t.tagID;n===c.CAPTION||n===c.TABLE||n===c.TBODY||n===c.TFOOT||n===c.THEAD||n===c.TR||n===c.TD||n===c.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode(),e.onEndTag(t)):eT(e,t)}function T4(e,t){switch(t.tagID){case c.BASE:case c.BASEFONT:case c.BGSOUND:case c.LINK:case c.META:case c.NOFRAMES:case c.SCRIPT:case c.STYLE:case c.TEMPLATE:case c.TITLE:{vn(e,t);break}case c.CAPTION:case c.COLGROUP:case c.TBODY:case c.TFOOT:case c.THEAD:{e.tmplInsertionModeStack[0]=_.IN_TABLE,e.insertionMode=_.IN_TABLE,Fr(e,t);break}case c.COL:{e.tmplInsertionModeStack[0]=_.IN_COLUMN_GROUP,e.insertionMode=_.IN_COLUMN_GROUP,Rp(e,t);break}case c.TR:{e.tmplInsertionModeStack[0]=_.IN_TABLE_BODY,e.insertionMode=_.IN_TABLE_BODY,Zl(e,t);break}case c.TD:case c.TH:{e.tmplInsertionModeStack[0]=_.IN_ROW,e.insertionMode=_.IN_ROW,eu(e,t);break}default:e.tmplInsertionModeStack[0]=_.IN_BODY,e.insertionMode=_.IN_BODY,bt(e,t)}}function E4(e,t){t.tagID===c.TEMPLATE&&er(e,t)}function tT(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(c.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):Mp(e,t)}function w4(e,t){t.tagID===c.HTML?bt(e,t):Tl(e,t)}function nT(e,t){var n;if(t.tagID===c.HTML){if(e.fragmentContext||(e.insertionMode=_.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===c.HTML){e._setEndLocation(e.openElements.items[0],t);const i=e.openElements.items[1];i&&!(!((n=e.treeAdapter.getNodeSourceCodeLocation(i))===null||n===void 0)&&n.endTag)&&e._setEndLocation(i,t)}}else Tl(e,t)}function Tl(e,t){e.insertionMode=_.IN_BODY,Xl(e,t)}function x4(e,t){switch(t.tagID){case c.HTML:{bt(e,t);break}case c.FRAMESET:{e._insertElement(t,B.HTML);break}case c.FRAME:{e._appendElement(t,B.HTML),t.ackSelfClosing=!0;break}case c.NOFRAMES:{vn(e,t);break}}}function _4(e,t){t.tagID===c.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==c.FRAMESET&&(e.insertionMode=_.AFTER_FRAMESET))}function S4(e,t){switch(t.tagID){case c.HTML:{bt(e,t);break}case c.NOFRAMES:{vn(e,t);break}}}function k4(e,t){t.tagID===c.HTML&&(e.insertionMode=_.AFTER_AFTER_FRAMESET)}function D4(e,t){t.tagID===c.HTML?bt(e,t):ja(e,t)}function ja(e,t){e.insertionMode=_.IN_BODY,Xl(e,t)}function I4(e,t){switch(t.tagID){case c.HTML:{bt(e,t);break}case c.NOFRAMES:{vn(e,t);break}}}function C4(e,t){t.chars=Be,e._insertCharacters(t)}function A4(e,t){e._insertCharacters(t),e.framesetOk=!1}function iT(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==B.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function O4(e,t){if(Y6(t))iT(e),e._startTagOutsideForeignContent(t);else{const n=e._getAdjustedCurrentElement(),i=e.treeAdapter.getNamespaceURI(n);i===B.MATHML?j1(t):i===B.SVG&&(q6(t),U1(t)),Pp(t),t.selfClosing?e._appendElement(t,i):e._insertElement(t,i),t.ackSelfClosing=!0}}function P4(e,t){if(t.tagID===c.P||t.tagID===c.BR){iT(e),e._endTagOutsideForeignContent(t);return}for(let n=e.openElements.stackTop;n>0;n--){const i=e.openElements.items[n];if(e.treeAdapter.getNamespaceURI(i)===B.HTML){e._endTagOutsideForeignContent(t);break}const r=e.treeAdapter.getTagName(i);if(r.toLowerCase()===t.tagName){t.tagName=r,e.openElements.shortenToLength(n);break}}}O.AREA,O.BASE,O.BASEFONT,O.BGSOUND,O.BR,O.COL,O.EMBED,O.FRAME,O.HR,O.IMG,O.INPUT,O.KEYGEN,O.LINK,O.META,O.PARAM,O.SOURCE,O.TRACK,O.WBR;const N4=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,M4=new Set(["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"]),Oy={sourceCodeLocationInfo:!0,scriptingEnabled:!1};function rT(e,t){const n=W4(e),i=C1("type",{handlers:{root:R4,element:L4,text:F4,comment:sT,doctype:z4,raw:j4},unknown:U4}),r={parser:n?new Iy(Oy):Iy.getFragmentParser(void 0,Oy),handle(a){i(a,r)},stitches:!1,options:t||{}};i(e,r),qr(r,On());const o=n?r.parser.document:r.parser.getFragment(),s=RN(o,{file:r.options.file});return r.stitches&&Kl(s,"comment",function(a,l,u){const h=a;if(h.value.stitch&&u&&l!==void 0){const d=u.children;return d[l]=h.value.stitch,l}}),s.type==="root"&&s.children.length===1&&s.children[0].type===e.type?s.children[0]:s}function oT(e,t){let n=-1;if(e)for(;++n<e.length;)t.handle(e[n])}function R4(e,t){oT(e.children,t)}function L4(e,t){H4(e,t),oT(e.children,t),$4(e,t)}function F4(e,t){t.parser.tokenizer.state>4&&(t.parser.tokenizer.state=0);const n={type:be.CHARACTER,chars:e.value,location:Us(e)};qr(t,On(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function z4(e,t){const n={type:be.DOCTYPE,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:Us(e)};qr(t,On(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function B4(e,t){t.stitches=!0;const n=V4(e);if("children"in e&&"children"in n){const i=rT({type:"root",children:e.children},t.options);n.children=i.children}sT({type:"comment",value:{stitch:n}},t)}function sT(e,t){const n=e.value,i={type:be.COMMENT,data:n,location:Us(e)};qr(t,On(e)),t.parser.currentToken=i,t.parser._processToken(t.parser.currentToken)}function j4(e,t){if(t.parser.tokenizer.preprocessor.html="",t.parser.tokenizer.preprocessor.pos=-1,t.parser.tokenizer.preprocessor.lastGapPos=-2,t.parser.tokenizer.preprocessor.gapStack=[],t.parser.tokenizer.preprocessor.skipNextNewLine=!1,t.parser.tokenizer.preprocessor.lastChunkWritten=!1,t.parser.tokenizer.preprocessor.endOfChunkHit=!1,t.parser.tokenizer.preprocessor.isEol=!1,aT(t,On(e)),t.parser.tokenizer.write(t.options.tagfilter?e.value.replace(N4,"&lt;$1$2"):e.value,!1),t.parser.tokenizer._runParsingLoop(),t.parser.tokenizer.state===72||t.parser.tokenizer.state===78){t.parser.tokenizer.preprocessor.lastChunkWritten=!0;const n=t.parser.tokenizer._consume();t.parser.tokenizer._callState(n)}}function U4(e,t){const n=e;if(t.options.passThrough&&t.options.passThrough.includes(n.type))B4(n,t);else{let i="";throw M4.has(n.type)&&(i=". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),new Error("Cannot compile `"+n.type+"` node"+i)}}function qr(e,t){aT(e,t);const n=e.parser.tokenizer.currentCharacterToken;n&&n.location&&(n.location.endLine=e.parser.tokenizer.preprocessor.line,n.location.endCol=e.parser.tokenizer.preprocessor.col+1,n.location.endOffset=e.parser.tokenizer.preprocessor.offset+1,e.parser.currentToken=n,e.parser._processToken(e.parser.currentToken)),e.parser.tokenizer.paused=!1,e.parser.tokenizer.inLoop=!1,e.parser.tokenizer.active=!1,e.parser.tokenizer.returnState=qe.DATA,e.parser.tokenizer.charRefCode=-1,e.parser.tokenizer.consumedAfterSnapshot=-1,e.parser.tokenizer.currentLocation=null,e.parser.tokenizer.currentCharacterToken=null,e.parser.tokenizer.currentToken=null,e.parser.tokenizer.currentAttr={name:"",value:""}}function aT(e,t){if(t&&t.offset!==void 0){const n={startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:-1,endCol:-1,endOffset:-1};e.parser.tokenizer.preprocessor.lineStartPos=-t.column+1,e.parser.tokenizer.preprocessor.droppedBufferSize=t.offset,e.parser.tokenizer.preprocessor.line=t.line,e.parser.tokenizer.currentLocation=n}}function H4(e,t){const n=e.tagName.toLowerCase();if(t.parser.tokenizer.state===qe.PLAINTEXT)return;qr(t,On(e));const i=t.parser.openElements.current;let r="namespaceURI"in i?i.namespaceURI:zi.html;r===zi.html&&n==="svg"&&(r=zi.svg);const o=KN({...e,children:[]},{space:r===zi.svg?"svg":"html"}),s={type:be.START_TAG,tagName:n,tagID:Yr(n),selfClosing:!1,ackSelfClosing:!1,attrs:"attrs"in o?o.attrs:[],location:Us(e)};t.parser.currentToken=s,t.parser._processToken(t.parser.currentToken),t.parser.tokenizer.lastStartTagName=n}function $4(e,t){const n=e.tagName.toLowerCase();if(!t.parser.tokenizer.inForeignNode&&r6.includes(n)||t.parser.tokenizer.state===qe.PLAINTEXT)return;qr(t,Wl(e));const i={type:be.END_TAG,tagName:n,tagID:Yr(n),selfClosing:!1,ackSelfClosing:!1,attrs:[],location:Us(e)};t.parser.currentToken=i,t.parser._processToken(t.parser.currentToken),n===t.parser.tokenizer.lastStartTagName&&(t.parser.tokenizer.state===qe.RCDATA||t.parser.tokenizer.state===qe.RAWTEXT||t.parser.tokenizer.state===qe.SCRIPT_DATA)&&(t.parser.tokenizer.state=qe.DATA)}function W4(e){const t=e.type==="root"?e.children[0]:e;return!!(t&&(t.type==="doctype"||t.type==="element"&&t.tagName.toLowerCase()==="html"))}function Us(e){const t=On(e)||{line:void 0,column:void 0,offset:void 0},n=Wl(e)||{line:void 0,column:void 0,offset:void 0};return{startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:n.line,endCol:n.column,endOffset:n.offset}}function V4(e){return"children"in e?Lr({...e,children:[]}):Lr(e)}function Y4(e){return function(t,n){return rT(t,{...e,file:n})}}function Py(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let i=0,r=n.indexOf(t);for(;r!==-1;)i++,r=n.indexOf(t,r+t.length);return i}function q4(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Q4(e,t,n){const r=Ql((n||{}).ignore||[]),o=G4(t);let s=-1;for(;++s<o.length;)p1(e,"text",a);function a(u,h){let d=-1,f;for(;++d<h.length;){const p=h[d],g=f?f.children:void 0;if(r(p,g?g.indexOf(p):void 0,f))return;f=p}if(f)return l(u,h)}function l(u,h){const d=h[h.length-1],f=o[s][0],p=o[s][1];let g=0;const C=d.children.indexOf(u);let m=!1,y=[];f.lastIndex=0;let v=f.exec(u.value);for(;v;){const A=v.index,P={index:v.index,input:v.input,stack:[...h,u]};let b=p(...v,P);if(typeof b=="string"&&(b=b.length>0?{type:"text",value:b}:void 0),b===!1?f.lastIndex=A+1:(g!==A&&y.push({type:"text",value:u.value.slice(g,A)}),Array.isArray(b)?y.push(...b):b&&y.push(b),g=A+v[0].length,m=!0),!f.global)break;v=f.exec(u.value)}return m?(g<u.value.length&&y.push({type:"text",value:u.value.slice(g)}),d.children.splice(C,1,...y)):y=[u],C+y.length}}function G4(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let i=-1;for(;++i<n.length;){const r=n[i];t.push([K4(r[0]),X4(r[1])])}return t}function K4(e){return typeof e=="string"?new RegExp(q4(e),"g"):e}function X4(e){return typeof e=="function"?e:function(){return e}}const Ju="phrasing",Zu=["autolink","link","image","label"];function J4(){return{transforms:[oR],enter:{literalAutolink:eR,literalAutolinkEmail:ec,literalAutolinkHttp:ec,literalAutolinkWww:ec},exit:{literalAutolink:rR,literalAutolinkEmail:iR,literalAutolinkHttp:tR,literalAutolinkWww:nR}}}function Z4(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ju,notInConstruct:Zu},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ju,notInConstruct:Zu},{character:":",before:"[ps]",after:"\\/",inConstruct:Ju,notInConstruct:Zu}]}}function eR(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function ec(e){this.config.enter.autolinkProtocol.call(this,e)}function tR(e){this.config.exit.autolinkProtocol.call(this,e)}function nR(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function iR(e){this.config.exit.autolinkEmail.call(this,e)}function rR(e){this.exit(e)}function oR(e){Q4(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,sR],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),aR]],{ignore:["link","linkReference"]})}function sR(e,t,n,i,r){let o="";if(!lT(r)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!lR(n)))return!1;const s=uR(n+i);if(!s[0])return!1;const a={type:"link",title:null,url:o+t+s[0],children:[{type:"text",value:t+s[0]}]};return s[1]?[a,{type:"text",value:s[1]}]:a}function aR(e,t,n,i){return!lT(i,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function lR(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function uR(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],i=n.indexOf(")");const r=Py(e,"(");let o=Py(e,")");for(;i!==-1&&r>o;)e+=n.slice(0,i+1),n=n.slice(i+1),i=n.indexOf(")"),o++;return[e,n]}function lT(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||qi(n)||Vl(n))&&(!t||n!==47)}uT.peek=vR;function cR(){this.buffer()}function dR(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function hR(){this.buffer()}function fR(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function pR(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=gn(this.sliceSerialize(e)).toLowerCase(),n.label=t}function mR(e){this.exit(e)}function gR(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=gn(this.sliceSerialize(e)).toLowerCase(),n.label=t}function yR(e){this.exit(e)}function vR(){return"["}function uT(e,t,n,i){const r=n.createTracker(i);let o=r.move("[^");const s=n.enter("footnoteReference"),a=n.enter("reference");return o+=r.move(n.safe(n.associationId(e),{after:"]",before:o})),a(),s(),o+=r.move("]"),o}function bR(){return{enter:{gfmFootnoteCallString:cR,gfmFootnoteCall:dR,gfmFootnoteDefinitionLabelString:hR,gfmFootnoteDefinition:fR},exit:{gfmFootnoteCallString:pR,gfmFootnoteCall:mR,gfmFootnoteDefinitionLabelString:gR,gfmFootnoteDefinition:yR}}}function TR(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:uT},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(i,r,o,s){const a=o.createTracker(s);let l=a.move("[^");const u=o.enter("footnoteDefinition"),h=o.enter("label");return l+=a.move(o.safe(o.associationId(i),{before:l,after:"]"})),h(),l+=a.move("]:"),i.children&&i.children.length>0&&(a.shift(4),l+=a.move((t?`
`:" ")+o.indentLines(o.containerFlow(i,a.current()),t?cT:ER))),u(),l}}function ER(e,t,n){return t===0?e:cT(e,t,n)}function cT(e,t,n){return(n?"":"    ")+e}const wR=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];dT.peek=DR;function xR(){return{canContainEols:["delete"],enter:{strikethrough:SR},exit:{strikethrough:kR}}}function _R(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:wR}],handlers:{delete:dT}}}function SR(e){this.enter({type:"delete",children:[]},e)}function kR(e){this.exit(e)}function dT(e,t,n,i){const r=n.createTracker(i),o=n.enter("strikethrough");let s=r.move("~~");return s+=n.containerPhrasing(e,{...r.current(),before:s,after:"~"}),s+=r.move("~~"),o(),s}function DR(){return"~"}function IR(e){return e.length}function CR(e,t){const n=t||{},i=(n.align||[]).concat(),r=n.stringLength||IR,o=[],s=[],a=[],l=[];let u=0,h=-1;for(;++h<e.length;){const x=[],C=[];let m=-1;for(e[h].length>u&&(u=e[h].length);++m<e[h].length;){const y=AR(e[h][m]);if(n.alignDelimiters!==!1){const v=r(y);C[m]=v,(l[m]===void 0||v>l[m])&&(l[m]=v)}x.push(y)}s[h]=x,a[h]=C}let d=-1;if(typeof i=="object"&&"length"in i)for(;++d<u;)o[d]=Ny(i[d]);else{const x=Ny(i);for(;++d<u;)o[d]=x}d=-1;const f=[],p=[];for(;++d<u;){const x=o[d];let C="",m="";x===99?(C=":",m=":"):x===108?C=":":x===114&&(m=":");let y=n.alignDelimiters===!1?1:Math.max(1,l[d]-C.length-m.length);const v=C+"-".repeat(y)+m;n.alignDelimiters!==!1&&(y=C.length+y+m.length,y>l[d]&&(l[d]=y),p[d]=y),f[d]=v}s.splice(1,0,f),a.splice(1,0,p),h=-1;const g=[];for(;++h<s.length;){const x=s[h],C=a[h];d=-1;const m=[];for(;++d<u;){const y=x[d]||"";let v="",A="";if(n.alignDelimiters!==!1){const P=l[d]-(C[d]||0),b=o[d];b===114?v=" ".repeat(P):b===99?P%2?(v=" ".repeat(P/2+.5),A=" ".repeat(P/2-.5)):(v=" ".repeat(P/2),A=v):A=" ".repeat(P)}n.delimiterStart!==!1&&!d&&m.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&y==="")&&(n.delimiterStart!==!1||d)&&m.push(" "),n.alignDelimiters!==!1&&m.push(v),m.push(y),n.alignDelimiters!==!1&&m.push(A),n.padding!==!1&&m.push(" "),(n.delimiterEnd!==!1||d!==u-1)&&m.push("|")}g.push(n.delimiterEnd===!1?m.join("").replace(/ +$/,""):m.join(""))}return g.join(`
`)}function AR(e){return e==null?"":String(e)}function Ny(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function OR(e,t,n,i){const r=n.enter("blockquote"),o=n.createTracker(i);o.move("> "),o.shift(2);const s=n.indentLines(n.containerFlow(e,o.current()),PR);return r(),s}function PR(e,t,n){return">"+(n?"":" ")+e}function NR(e,t){return My(e,t.inConstruct,!0)&&!My(e,t.notInConstruct,!1)}function My(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let i=-1;for(;++i<t.length;)if(e.includes(t[i]))return!0;return!1}function Ry(e,t,n,i){let r=-1;for(;++r<n.unsafe.length;)if(n.unsafe[r].character===`
`&&NR(n.stack,n.unsafe[r]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function MR(e,t){const n=String(e);let i=n.indexOf(t),r=i,o=0,s=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===r?++o>s&&(s=o):o=1,r=i+t.length,i=n.indexOf(t,r);return s}function RR(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function LR(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function FR(e,t,n,i){const r=LR(n),o=e.value||"",s=r==="`"?"GraveAccent":"Tilde";if(RR(e,n)){const d=n.enter("codeIndented"),f=n.indentLines(o,zR);return d(),f}const a=n.createTracker(i),l=r.repeat(Math.max(MR(o,r)+1,3)),u=n.enter("codeFenced");let h=a.move(l);if(e.lang){const d=n.enter(`codeFencedLang${s}`);h+=a.move(n.safe(e.lang,{before:h,after:" ",encode:["`"],...a.current()})),d()}if(e.lang&&e.meta){const d=n.enter(`codeFencedMeta${s}`);h+=a.move(" "),h+=a.move(n.safe(e.meta,{before:h,after:`
`,encode:["`"],...a.current()})),d()}return h+=a.move(`
`),o&&(h+=a.move(o+`
`)),h+=a.move(l),u(),h}function zR(e,t,n){return(n?"":"    ")+e}function Lp(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function BR(e,t,n,i){const r=Lp(n),o=r==='"'?"Quote":"Apostrophe",s=n.enter("definition");let a=n.enter("label");const l=n.createTracker(i);let u=l.move("[");return u+=l.move(n.safe(n.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=l.move(" "+r),u+=l.move(n.safe(e.title,{before:u,after:r,...l.current()})),u+=l.move(r),a()),s(),u}function jR(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function ls(e){return"&#x"+e.toString(16).toUpperCase()+";"}function El(e,t,n){const i=Rr(e),r=Rr(t);return i===void 0?r===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}hT.peek=UR;function hT(e,t,n,i){const r=jR(n),o=n.enter("emphasis"),s=n.createTracker(i),a=s.move(r);let l=s.move(n.containerPhrasing(e,{after:r,before:a,...s.current()}));const u=l.charCodeAt(0),h=El(i.before.charCodeAt(i.before.length-1),u,r);h.inside&&(l=ls(u)+l.slice(1));const d=l.charCodeAt(l.length-1),f=El(i.after.charCodeAt(0),d,r);f.inside&&(l=l.slice(0,-1)+ls(d));const p=s.move(r);return o(),n.attentionEncodeSurroundingInfo={after:f.outside,before:h.outside},a+l+p}function UR(e,t,n){return n.options.emphasis||"*"}function HR(e,t){let n=!1;return Kl(e,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return n=!0,od}),!!((!e.depth||e.depth<3)&&Ep(e)&&(t.options.setext||n))}function $R(e,t,n,i){const r=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(i);if(HR(e,n)){const h=n.enter("headingSetext"),d=n.enter("phrasing"),f=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return d(),h(),f+`
`+(r===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}const s="#".repeat(r),a=n.enter("headingAtx"),l=n.enter("phrasing");o.move(s+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(u)&&(u=ls(u.charCodeAt(0))+u.slice(1)),u=u?s+" "+u:s,n.options.closeAtx&&(u+=" "+s),l(),a(),u}fT.peek=WR;function fT(e){return e.value||""}function WR(){return"<"}pT.peek=VR;function pT(e,t,n,i){const r=Lp(n),o=r==='"'?"Quote":"Apostrophe",s=n.enter("image");let a=n.enter("label");const l=n.createTracker(i);let u=l.move("![");return u+=l.move(n.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=l.move(" "+r),u+=l.move(n.safe(e.title,{before:u,after:r,...l.current()})),u+=l.move(r),a()),u+=l.move(")"),s(),u}function VR(){return"!"}mT.peek=YR;function mT(e,t,n,i){const r=e.referenceType,o=n.enter("imageReference");let s=n.enter("label");const a=n.createTracker(i);let l=a.move("![");const u=n.safe(e.alt,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),s();const h=n.stack;n.stack=[],s=n.enter("reference");const d=n.safe(n.associationId(e),{before:l,after:"]",...a.current()});return s(),n.stack=h,o(),r==="full"||!u||u!==d?l+=a.move(d+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function YR(){return"!"}gT.peek=qR;function gT(e,t,n){let i=e.value||"",r="`",o=-1;for(;new RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++o<n.unsafe.length;){const s=n.unsafe[o],a=n.compilePattern(s);let l;if(s.atBreak)for(;l=a.exec(i);){let u=l.index;i.charCodeAt(u)===10&&i.charCodeAt(u-1)===13&&u--,i=i.slice(0,u)+" "+i.slice(l.index+1)}}return r+i+r}function qR(){return"`"}function yT(e,t){const n=Ep(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}vT.peek=QR;function vT(e,t,n,i){const r=Lp(n),o=r==='"'?"Quote":"Apostrophe",s=n.createTracker(i);let a,l;if(yT(e,n)){const h=n.stack;n.stack=[],a=n.enter("autolink");let d=s.move("<");return d+=s.move(n.containerPhrasing(e,{before:d,after:">",...s.current()})),d+=s.move(">"),a(),n.stack=h,d}a=n.enter("link"),l=n.enter("label");let u=s.move("[");return u+=s.move(n.containerPhrasing(e,{before:u,after:"](",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=s.move(" "+r),u+=s.move(n.safe(e.title,{before:u,after:r,...s.current()})),u+=s.move(r),l()),u+=s.move(")"),a(),u}function QR(e,t,n){return yT(e,n)?"<":"["}bT.peek=GR;function bT(e,t,n,i){const r=e.referenceType,o=n.enter("linkReference");let s=n.enter("label");const a=n.createTracker(i);let l=a.move("[");const u=n.containerPhrasing(e,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),s();const h=n.stack;n.stack=[],s=n.enter("reference");const d=n.safe(n.associationId(e),{before:l,after:"]",...a.current()});return s(),n.stack=h,o(),r==="full"||!u||u!==d?l+=a.move(d+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function GR(){return"["}function Fp(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function KR(e){const t=Fp(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function XR(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function TT(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function JR(e,t,n,i){const r=n.enter("list"),o=n.bulletCurrent;let s=e.ordered?XR(n):Fp(n);const a=e.ordered?s==="."?")":".":KR(n);let l=t&&n.bulletLastUsed?s===n.bulletLastUsed:!1;if(!e.ordered){const h=e.children?e.children[0]:void 0;if((s==="*"||s==="-")&&h&&(!h.children||!h.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),TT(n)===s&&h){let d=-1;for(;++d<e.children.length;){const f=e.children[d];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(s=a),n.bulletCurrent=s;const u=n.containerFlow(e,i);return n.bulletLastUsed=s,n.bulletCurrent=o,r(),u}function ZR(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function eL(e,t,n,i){const r=ZR(n);let o=n.bulletCurrent||Fp(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let s=o.length+1;(r==="tab"||r==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(s=Math.ceil(s/4)*4);const a=n.createTracker(i);a.move(o+" ".repeat(s-o.length)),a.shift(s);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,a.current()),h);return l(),u;function h(d,f,p){return f?(p?"":" ".repeat(s))+d:(p?o:o+" ".repeat(s-o.length))+d}}function tL(e,t,n,i){const r=n.enter("paragraph"),o=n.enter("phrasing"),s=n.containerPhrasing(e,i);return o(),r(),s}const nL=Ql(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function iL(e,t,n,i){return(e.children.some(function(s){return nL(s)})?n.containerPhrasing:n.containerFlow).call(n,e,i)}function rL(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}ET.peek=oL;function ET(e,t,n,i){const r=rL(n),o=n.enter("strong"),s=n.createTracker(i),a=s.move(r+r);let l=s.move(n.containerPhrasing(e,{after:r,before:a,...s.current()}));const u=l.charCodeAt(0),h=El(i.before.charCodeAt(i.before.length-1),u,r);h.inside&&(l=ls(u)+l.slice(1));const d=l.charCodeAt(l.length-1),f=El(i.after.charCodeAt(0),d,r);f.inside&&(l=l.slice(0,-1)+ls(d));const p=s.move(r+r);return o(),n.attentionEncodeSurroundingInfo={after:f.outside,before:h.outside},a+l+p}function oL(e,t,n){return n.options.strong||"*"}function sL(e,t,n,i){return n.safe(e.value,i)}function aL(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function lL(e,t,n){const i=(TT(n)+(n.options.ruleSpaces?" ":"")).repeat(aL(n));return n.options.ruleSpaces?i.slice(0,-1):i}const wT={blockquote:OR,break:Ry,code:FR,definition:BR,emphasis:hT,hardBreak:Ry,heading:$R,html:fT,image:pT,imageReference:mT,inlineCode:gT,link:vT,linkReference:bT,list:JR,listItem:eL,paragraph:tL,root:iL,strong:ET,text:sL,thematicBreak:lL};function uL(){return{enter:{table:cL,tableData:Ly,tableHeader:Ly,tableRow:hL},exit:{codeText:fL,table:dL,tableData:tc,tableHeader:tc,tableRow:tc}}}function cL(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function dL(e){this.exit(e),this.data.inTable=void 0}function hL(e){this.enter({type:"tableRow",children:[]},e)}function tc(e){this.exit(e)}function Ly(e){this.enter({type:"tableCell",children:[]},e)}function fL(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,pL));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function pL(e,t){return t==="|"?t:e}function mL(e){const t=e||{},n=t.tableCellPadding,i=t.tablePipeAlign,r=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:s,tableCell:l,tableRow:a}};function s(p,g,x,C){return u(h(p,x,C),p.align)}function a(p,g,x,C){const m=d(p,x,C),y=u([m]);return y.slice(0,y.indexOf(`
`))}function l(p,g,x,C){const m=x.enter("tableCell"),y=x.enter("phrasing"),v=x.containerPhrasing(p,{...C,before:o,after:o});return y(),m(),v}function u(p,g){return CR(p,{align:g,alignDelimiters:i,padding:n,stringLength:r})}function h(p,g,x){const C=p.children;let m=-1;const y=[],v=g.enter("table");for(;++m<C.length;)y[m]=d(C[m],g,x);return v(),y}function d(p,g,x){const C=p.children;let m=-1;const y=[],v=g.enter("tableRow");for(;++m<C.length;)y[m]=l(C[m],p,g,x);return v(),y}function f(p,g,x){let C=wT.inlineCode(p,g,x);return x.stack.includes("tableCell")&&(C=C.replace(/\|/g,"\\$&")),C}}function gL(){return{exit:{taskListCheckValueChecked:Fy,taskListCheckValueUnchecked:Fy,paragraph:vL}}}function yL(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:bL}}}function Fy(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function vL(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const i=n.children[0];if(i&&i.type==="text"){const r=t.children;let o=-1,s;for(;++o<r.length;){const a=r[o];if(a.type==="paragraph"){s=a;break}}s===n&&(i.value=i.value.slice(1),i.value.length===0?n.children.shift():n.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}}this.exit(e)}function bL(e,t,n,i){const r=e.children[0],o=typeof e.checked=="boolean"&&r&&r.type==="paragraph",s="["+(e.checked?"x":" ")+"] ",a=n.createTracker(i);o&&a.move(s);let l=wT.listItem(e,t,n,{...i,...a.current()});return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(h){return h+s}}function TL(){return[J4(),bR(),xR(),uL(),gL()]}function EL(e){return{extensions:[Z4(),TR(e),_R(),mL(e),yL()]}}const wL={tokenize:IL,partial:!0},xT={tokenize:CL,partial:!0},_T={tokenize:AL,partial:!0},ST={tokenize:OL,partial:!0},xL={tokenize:PL,partial:!0},kT={name:"wwwAutolink",tokenize:kL,previous:IT},DT={name:"protocolAutolink",tokenize:DL,previous:CT},Yn={name:"emailAutolink",tokenize:SL,previous:AT},Pn={};function _L(){return{text:Pn}}let Ci=48;for(;Ci<123;)Pn[Ci]=Yn,Ci++,Ci===58?Ci=65:Ci===91&&(Ci=97);Pn[43]=Yn;Pn[45]=Yn;Pn[46]=Yn;Pn[95]=Yn;Pn[72]=[Yn,DT];Pn[104]=[Yn,DT];Pn[87]=[Yn,kT];Pn[119]=[Yn,kT];function SL(e,t,n){const i=this;let r,o;return s;function s(d){return!gd(d)||!AT.call(i,i.previous)||zp(i.events)?n(d):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(d))}function a(d){return gd(d)?(e.consume(d),a):d===64?(e.consume(d),l):n(d)}function l(d){return d===46?e.check(xL,h,u)(d):d===45||d===95||gt(d)?(o=!0,e.consume(d),l):h(d)}function u(d){return e.consume(d),r=!0,l}function h(d){return o&&r&&Et(i.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(d)):n(d)}}function kL(e,t,n){const i=this;return r;function r(s){return s!==87&&s!==119||!IT.call(i,i.previous)||zp(i.events)?n(s):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(wL,e.attempt(xT,e.attempt(_T,o),n),n)(s))}function o(s){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(s)}}function DL(e,t,n){const i=this;let r="",o=!1;return s;function s(d){return(d===72||d===104)&&CT.call(i,i.previous)&&!zp(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),r+=String.fromCodePoint(d),e.consume(d),a):n(d)}function a(d){if(Et(d)&&r.length<5)return r+=String.fromCodePoint(d),e.consume(d),a;if(d===58){const f=r.toLowerCase();if(f==="http"||f==="https")return e.consume(d),l}return n(d)}function l(d){return d===47?(e.consume(d),o?u:(o=!0,l)):n(d)}function u(d){return d===null||gl(d)||Pe(d)||qi(d)||Vl(d)?n(d):e.attempt(xT,e.attempt(_T,h),n)(d)}function h(d){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(d)}}function IL(e,t,n){let i=0;return r;function r(s){return(s===87||s===119)&&i<3?(i++,e.consume(s),r):s===46&&i===3?(e.consume(s),o):n(s)}function o(s){return s===null?n(s):t(s)}}function CL(e,t,n){let i,r,o;return s;function s(u){return u===46||u===95?e.check(ST,l,a)(u):u===null||Pe(u)||qi(u)||u!==45&&Vl(u)?l(u):(o=!0,e.consume(u),s)}function a(u){return u===95?i=!0:(r=i,i=void 0),e.consume(u),s}function l(u){return r||i||!o?n(u):t(u)}}function AL(e,t){let n=0,i=0;return r;function r(s){return s===40?(n++,e.consume(s),r):s===41&&i<n?o(s):s===33||s===34||s===38||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===60||s===63||s===93||s===95||s===126?e.check(ST,t,o)(s):s===null||Pe(s)||qi(s)?t(s):(e.consume(s),r)}function o(s){return s===41&&i++,e.consume(s),r}}function OL(e,t,n){return i;function i(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),i):a===38?(e.consume(a),o):a===93?(e.consume(a),r):a===60||a===null||Pe(a)||qi(a)?t(a):n(a)}function r(a){return a===null||a===40||a===91||Pe(a)||qi(a)?t(a):i(a)}function o(a){return Et(a)?s(a):n(a)}function s(a){return a===59?(e.consume(a),i):Et(a)?(e.consume(a),s):n(a)}}function PL(e,t,n){return i;function i(o){return e.consume(o),r}function r(o){return gt(o)?n(o):t(o)}}function IT(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Pe(e)}function CT(e){return!Et(e)}function AT(e){return!(e===47||gd(e))}function gd(e){return e===43||e===45||e===46||e===95||gt(e)}function zp(e){let t=e.length,n=!1;for(;t--;){const i=e[t][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const NL={tokenize:UL,partial:!0};function ML(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:zL,continuation:{tokenize:BL},exit:jL}},text:{91:{name:"gfmFootnoteCall",tokenize:FL},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:RL,resolveTo:LL}}}}function RL(e,t,n){const i=this;let r=i.events.length;const o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let s;for(;r--;){const l=i.events[r][1];if(l.type==="labelImage"){s=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!s||!s._balanced)return n(l);const u=gn(i.sliceSerialize({start:s.end,end:i.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function LL(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},e[e.length-1][1].start)},s={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[n+1],e[n+2],["enter",i,t],e[n+3],e[n+4],["enter",r,t],["exit",r,t],["enter",o,t],["enter",s,t],["exit",s,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(n,e.length-n+1,...a),e}function FL(e,t,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o=0,s;return a;function a(d){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),l}function l(d){return d!==94?n(d):(e.enter("gfmFootnoteCallMarker"),e.consume(d),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(d){if(o>999||d===93&&!s||d===null||d===91||Pe(d))return n(d);if(d===93){e.exit("chunkString");const f=e.exit("gfmFootnoteCallString");return r.includes(gn(i.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(d)}return Pe(d)||(s=!0),o++,e.consume(d),d===92?h:u}function h(d){return d===91||d===92||d===93?(e.consume(d),o++,u):u(d)}}function zL(e,t,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o,s=0,a;return l;function l(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",h):n(g)}function h(g){if(s>999||g===93&&!a||g===null||g===91||Pe(g))return n(g);if(g===93){e.exit("chunkString");const x=e.exit("gfmFootnoteDefinitionLabelString");return o=gn(i.sliceSerialize(x)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return Pe(g)||(a=!0),s++,e.consume(g),g===92?d:h}function d(g){return g===91||g===92||g===93?(e.consume(g),s++,h):h(g)}function f(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),r.includes(o)||r.push(o),_e(e,p,"gfmFootnoteDefinitionWhitespace")):n(g)}function p(g){return t(g)}}function BL(e,t,n){return e.check(Fs,t,e.attempt(NL,t,n))}function jL(e){e.exit("gfmFootnoteDefinition")}function UL(e,t,n){const i=this;return _e(e,r,"gfmFootnoteDefinitionIndent",5);function r(o){const s=i.events[i.events.length-1];return s&&s[1].type==="gfmFootnoteDefinitionIndent"&&s[2].sliceSerialize(s[1],!0).length===4?t(o):n(o)}}function HL(e){let n=(e||{}).singleTilde;const i={name:"strikethrough",tokenize:o,resolveAll:r};return n==null&&(n=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(s,a){let l=-1;for(;++l<s.length;)if(s[l][0]==="enter"&&s[l][1].type==="strikethroughSequenceTemporary"&&s[l][1]._close){let u=l;for(;u--;)if(s[u][0]==="exit"&&s[u][1].type==="strikethroughSequenceTemporary"&&s[u][1]._open&&s[l][1].end.offset-s[l][1].start.offset===s[u][1].end.offset-s[u][1].start.offset){s[l][1].type="strikethroughSequence",s[u][1].type="strikethroughSequence";const h={type:"strikethrough",start:Object.assign({},s[u][1].start),end:Object.assign({},s[l][1].end)},d={type:"strikethroughText",start:Object.assign({},s[u][1].end),end:Object.assign({},s[l][1].start)},f=[["enter",h,a],["enter",s[u][1],a],["exit",s[u][1],a],["enter",d,a]],p=a.parser.constructs.insideSpan.null;p&&Ut(f,f.length,0,Yl(p,s.slice(u+1,l),a)),Ut(f,f.length,0,[["exit",d,a],["enter",s[l][1],a],["exit",s[l][1],a],["exit",h,a]]),Ut(s,u-1,l-u+3,f),l=u+f.length-2;break}}for(l=-1;++l<s.length;)s[l][1].type==="strikethroughSequenceTemporary"&&(s[l][1].type="data");return s}function o(s,a,l){const u=this.previous,h=this.events;let d=0;return f;function f(g){return u===126&&h[h.length-1][1].type!=="characterEscape"?l(g):(s.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const x=Rr(u);if(g===126)return d>1?l(g):(s.consume(g),d++,p);if(d<2&&!n)return l(g);const C=s.exit("strikethroughSequenceTemporary"),m=Rr(g);return C._open=!m||m===2&&!!x,C._close=!x||x===2&&!!m,a(g)}}}class $L{constructor(){this.map=[]}add(t,n,i){WL(this,t,n,i)}consume(t){if(this.map.sort(function(o,s){return o[0]-s[0]}),this.map.length===0)return;let n=this.map.length;const i=[];for(;n>0;)n-=1,i.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];i.push(t.slice()),t.length=0;let r=i.pop();for(;r;){for(const o of r)t.push(o);r=i.pop()}this.map.length=0}}function WL(e,t,n,i){let r=0;if(!(n===0&&i.length===0)){for(;r<e.map.length;){if(e.map[r][0]===t){e.map[r][1]+=n,e.map[r][2].push(...i);return}r+=1}e.map.push([t,n,i])}}function VL(e,t){let n=!1;const i=[];for(;t<e.length;){const r=e[t];if(n){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=i.length-1;i[o]=i[o]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return i}function YL(){return{flow:{null:{name:"table",tokenize:qL,resolveAll:QL}}}}function qL(e,t,n){const i=this;let r=0,o=0,s;return a;function a(D){let G=i.events.length-1;for(;G>-1;){const ie=i.events[G][1].type;if(ie==="lineEnding"||ie==="linePrefix")G--;else break}const X=G>-1?i.events[G][1].type:null,pe=X==="tableHead"||X==="tableRow"?b:l;return pe===b&&i.parser.lazy[i.now().line]?n(D):pe(D)}function l(D){return e.enter("tableHead"),e.enter("tableRow"),u(D)}function u(D){return D===124||(s=!0,o+=1),h(D)}function h(D){return D===null?n(D):ae(D)?o>1?(o=0,i.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(D),e.exit("lineEnding"),p):n(D):we(D)?_e(e,h,"whitespace")(D):(o+=1,s&&(s=!1,r+=1),D===124?(e.enter("tableCellDivider"),e.consume(D),e.exit("tableCellDivider"),s=!0,h):(e.enter("data"),d(D)))}function d(D){return D===null||D===124||Pe(D)?(e.exit("data"),h(D)):(e.consume(D),D===92?f:d)}function f(D){return D===92||D===124?(e.consume(D),d):d(D)}function p(D){return i.interrupt=!1,i.parser.lazy[i.now().line]?n(D):(e.enter("tableDelimiterRow"),s=!1,we(D)?_e(e,g,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):g(D))}function g(D){return D===45||D===58?C(D):D===124?(s=!0,e.enter("tableCellDivider"),e.consume(D),e.exit("tableCellDivider"),x):P(D)}function x(D){return we(D)?_e(e,C,"whitespace")(D):C(D)}function C(D){return D===58?(o+=1,s=!0,e.enter("tableDelimiterMarker"),e.consume(D),e.exit("tableDelimiterMarker"),m):D===45?(o+=1,m(D)):D===null||ae(D)?A(D):P(D)}function m(D){return D===45?(e.enter("tableDelimiterFiller"),y(D)):P(D)}function y(D){return D===45?(e.consume(D),y):D===58?(s=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(D),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v(D))}function v(D){return we(D)?_e(e,A,"whitespace")(D):A(D)}function A(D){return D===124?g(D):D===null||ae(D)?!s||r!==o?P(D):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(D)):P(D)}function P(D){return n(D)}function b(D){return e.enter("tableRow"),F(D)}function F(D){return D===124?(e.enter("tableCellDivider"),e.consume(D),e.exit("tableCellDivider"),F):D===null||ae(D)?(e.exit("tableRow"),t(D)):we(D)?_e(e,F,"whitespace")(D):(e.enter("data"),z(D))}function z(D){return D===null||D===124||Pe(D)?(e.exit("data"),F(D)):(e.consume(D),D===92?q:z)}function q(D){return D===92||D===124?(e.consume(D),z):z(D)}}function QL(e,t){let n=-1,i=!0,r=0,o=[0,0,0,0],s=[0,0,0,0],a=!1,l=0,u,h,d;const f=new $L;for(;++n<e.length;){const p=e[n],g=p[1];p[0]==="enter"?g.type==="tableHead"?(a=!1,l!==0&&(zy(f,t,l,u,h),h=void 0,l=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},f.add(n,0,[["enter",u,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(i=!0,d=void 0,o=[0,0,0,0],s=[0,n+1,0,0],a&&(a=!1,h={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},f.add(n,0,[["enter",h,t]])),r=g.type==="tableDelimiterRow"?2:h?3:1):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(i=!1,s[2]===0&&(o[1]!==0&&(s[0]=s[1],d=Ea(f,t,o,r,void 0,d),o=[0,0,0,0]),s[2]=n)):g.type==="tableCellDivider"&&(i?i=!1:(o[1]!==0&&(s[0]=s[1],d=Ea(f,t,o,r,void 0,d)),o=s,s=[o[1],n,0,0])):g.type==="tableHead"?(a=!0,l=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(l=n,o[1]!==0?(s[0]=s[1],d=Ea(f,t,o,r,n,d)):s[1]!==0&&(d=Ea(f,t,s,r,n,d)),r=0):r&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(s[3]=n)}for(l!==0&&zy(f,t,l,u,h),f.consume(t.events),n=-1;++n<t.events.length;){const p=t.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=VL(t.events,n))}return e}function Ea(e,t,n,i,r,o){const s=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(o.end=Object.assign({},or(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const l=or(t.events,n[1]);if(o={type:s,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){const u=or(t.events,n[2]),h=or(t.events,n[3]),d={type:a,start:Object.assign({},u),end:Object.assign({},h)};if(e.add(n[2],0,[["enter",d,t]]),i!==2){const f=t.events[n[2]],p=t.events[n[3]];if(f[1].end=Object.assign({},p[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,x=n[3]-n[2]-1;e.add(g,x,[])}}e.add(n[3]+1,0,[["exit",d,t]])}return r!==void 0&&(o.end=Object.assign({},or(t.events,r)),e.add(r,0,[["exit",o,t]]),o=void 0),o}function zy(e,t,n,i,r){const o=[],s=or(t.events,n);r&&(r.end=Object.assign({},s),o.push(["exit",r,t])),i.end=Object.assign({},s),o.push(["exit",i,t]),e.add(n+1,0,o)}function or(e,t){const n=e[t],i=n[0]==="enter"?"start":"end";return n[1][i]}const GL={name:"tasklistCheck",tokenize:XL};function KL(){return{text:{91:GL}}}function XL(e,t,n){const i=this;return r;function r(l){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),o)}function o(l){return Pe(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),s):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),s):n(l)}function s(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(l)}function a(l){return ae(l)?t(l):we(l)?e.check({tokenize:JL},t,n)(l):n(l)}}function JL(e,t,n){return _e(e,i,"whitespace");function i(r){return r===null?n(r):t(r)}}function ZL(e){return Gb([_L(),ML(),HL(e),YL(),KL()])}const e5={};function t5(e){const t=this,n=e||e5,i=t.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),o=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),s=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(ZL(n)),o.push(TL()),s.push(EL(n))}function n5(){const{title:e,content:t,type:n}=Db();return Q.jsx(Q.Fragment,{children:Q.jsxs("div",{className:`post ${n==="jsx"?"jsx-post":""}`,children:[Q.jsx("h1",{children:e}),n==="jsx"?Q.jsx("div",{className:"jsx-content",children:Xy.createElement(t.default||t)}):Q.jsx(TN,{rehypePlugins:[Y4],remarkPlugins:[t5],children:t})]})})}const i5=Object.assign({"/src/content/art/index.jsx":us,"/src/content/dsm/anxiety-disorders/index.jsx":cs,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":ds,"/src/content/dsm/depressive-disorders/index.jsx":hs,"/src/content/dsm/index.jsx":fs,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":ps,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ms,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":gs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":ys,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":vs,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":bs,"/src/content/dsm/paraphilic-disorders/index.jsx":Ts,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":Es,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ws,"/src/content/dsm/personality-disorders/index.jsx":xs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":_s,"/src/content/dsm/trauma-and-stressor-related-disorders/index.jsx":Ss,"/src/content/translations/index.jsx":ks,"/src/content/webapps/index.jsx":Ds});function By(e=""){const t=e===""?[]:e.split("/");return Object.entries(i5).map(([n,i])=>({rel:n.replace(/^\/src\/content\//,"").replace(/\/index\.[^.]+$/,"").split("/"),module:i})).filter(({rel:n})=>n.length===t.length+1&&t.every((i,r)=>n[r]===i)).map(({rel:n,module:i})=>{var l,u,h;const r=n[n.length-1],o=i.title??((l=i.frontmatter)==null?void 0:l.title)??r.replace(/-/g," "),s=i.description??((u=i.frontmatter)==null?void 0:u.description)??"",a=i.image??((h=i.frontmatter)==null?void 0:h.image)??"";return{title:o,link:`/${r}`,description:s,image:a}})}const r5=Object.assign({"/src/content/dsm/anxiety-disorders/agoraphobia.md":vd,"/src/content/dsm/anxiety-disorders/anxiety-disorder-due-to-another-medical-condition.md":bd,"/src/content/dsm/anxiety-disorders/generalized-anxiety-disorder.md":Td,"/src/content/dsm/anxiety-disorders/other-specified-anxiety-disorder.md":Ed,"/src/content/dsm/anxiety-disorders/panic-disorder.md":wd,"/src/content/dsm/anxiety-disorders/selective-mutism.md":xd,"/src/content/dsm/anxiety-disorders/separation-anxiety-disorder.md":_d,"/src/content/dsm/anxiety-disorders/social-anxiety-disorder.md":Sd,"/src/content/dsm/anxiety-disorders/specific-phobia.md":kd,"/src/content/dsm/anxiety-disorders/substance-induced-anxiety-disorder.md":Dd,"/src/content/dsm/anxiety-disorders/unspecified-anxiety-disorder.md":Id,"/src/content/dsm/bipolar-and-related-disorders/bipolar-I-disorder.md":Cd,"/src/content/dsm/bipolar-and-related-disorders/bipolar-II-disorder.md":Ad,"/src/content/dsm/bipolar-and-related-disorders/bipolar-disorder-due-to-another-medical-condition.md":Od,"/src/content/dsm/bipolar-and-related-disorders/cyclothymic-disorder.md":Pd,"/src/content/dsm/bipolar-and-related-disorders/other-specified-bipolar-disorder.md":Nd,"/src/content/dsm/bipolar-and-related-disorders/substance-induced-bipolar-disorder.md":Md,"/src/content/dsm/bipolar-and-related-disorders/unspecified-bipolar-disorder.md":Rd,"/src/content/dsm/bipolar-and-related-disorders/unspecified-mood-disorder.md":Ld,"/src/content/dsm/depressive-disorders/depressive-disorder-due-to-another-medical-condition.md":Fd,"/src/content/dsm/depressive-disorders/dysruptive-mood-dysregulation-disorder.md":zd,"/src/content/dsm/depressive-disorders/major-depressive-disorder.md":Bd,"/src/content/dsm/depressive-disorders/other-specified-depressive-disorder.md":jd,"/src/content/dsm/depressive-disorders/persistent-depressive-disorder.md":Ud,"/src/content/dsm/depressive-disorders/premenstrual-dysphoric-disorder.md":Hd,"/src/content/dsm/depressive-disorders/substance-induced-depressive-disorder.md":$d,"/src/content/dsm/depressive-disorders/unspecified-depressive-disorder.md":Wd,"/src/content/dsm/depressive-disorders/unspecified-mood-disorder.md":Vd,"/src/content/dsm/neurodevelopmental-disorders/attention-deficit-hyperactivity-disorder.md":Yd,"/src/content/dsm/neurodevelopmental-disorders/autism-spectrum-disorder.md":qd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/child-onset-fluency-disorder.md":Qd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/language-disorder.md":Gd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/social-communication-disorder.md":Kd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/speech-sound-disorder.md":Xd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/unspecified-communication-disorder.md":Jd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/global-developmental-delay.md":Zd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/intellectual-disability.md":eh,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/unspecified-intellectual-developmental-disorder.md":th,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/developmental-coordination-disorder.md":nh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/stereotypic-movement-disorder.md":ih,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/other-specified-tic-disorder.md":rh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/persistent-tic-disorder.md":oh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/provisional-tic-disorder.md":sh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/tourettes-disorder.md":ah,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/unspecified-tic-disorder.md":lh,"/src/content/dsm/neurodevelopmental-disorders/other-specified-neurodevelopmental-disorder.md":uh,"/src/content/dsm/neurodevelopmental-disorders/specific-learning-disorder.md":ch,"/src/content/dsm/neurodevelopmental-disorders/unspecified-neurodevelopmental-disorder.md":dh,"/src/content/dsm/obsessive-compulsive-disorders/body-dysmorphic-disorder.md":hh,"/src/content/dsm/obsessive-compulsive-disorders/excoriation-disorder.md":fh,"/src/content/dsm/obsessive-compulsive-disorders/hoarding-disorder.md":ph,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder-due-to-another-medical-condition.md":mh,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder.md":gh,"/src/content/dsm/obsessive-compulsive-disorders/other-specified-obsessive-compulsive-disorder.md":yh,"/src/content/dsm/obsessive-compulsive-disorders/substance-induced-obsessive-comulsive-disorder.md":vh,"/src/content/dsm/obsessive-compulsive-disorders/trichotillomania.md":bh,"/src/content/dsm/obsessive-compulsive-disorders/unspecified-obsessive-compulsive-disorder.md":Th,"/src/content/dsm/paraphilic-disorders/exhibitionistic-disorder.md":Eh,"/src/content/dsm/paraphilic-disorders/fetishistic-disorder.md":wh,"/src/content/dsm/paraphilic-disorders/frotteuristic-disorder.md":xh,"/src/content/dsm/paraphilic-disorders/other-specified-paraphilic-disorder.md":_h,"/src/content/dsm/paraphilic-disorders/pedophilic-disorder.md":Sh,"/src/content/dsm/paraphilic-disorders/sexual-masochism-disorder.md":kh,"/src/content/dsm/paraphilic-disorders/sexual-sadism-disorder.md":Dh,"/src/content/dsm/paraphilic-disorders/transvestic-disorder.md":Ih,"/src/content/dsm/paraphilic-disorders/unspecified-paraphilic-disorder.md":Ch,"/src/content/dsm/paraphilic-disorders/voyeuristic-disorder.md":Ah,"/src/content/dsm/personality-disorders/cluster-a/paranoid-personality-disorder.md":Oh,"/src/content/dsm/personality-disorders/cluster-a/schizoid-personality-disorder.md":Ph,"/src/content/dsm/personality-disorders/cluster-a/schizotypal-personality-disorder.md":Nh,"/src/content/dsm/personality-disorders/cluster-b/antisocial-personality-disorder.md":Mh,"/src/content/dsm/personality-disorders/general-personality-disorder.md":Rh,"/src/content/dsm/schizophrenia-spectrum-disorders/brief-psychotic-disorder.md":Lh,"/src/content/dsm/schizophrenia-spectrum-disorders/delusional-disorder.md":Fh,"/src/content/dsm/schizophrenia-spectrum-disorders/other-specified-schizophrenia-spectrum-disorder.md":zh,"/src/content/dsm/schizophrenia-spectrum-disorders/psychotic-disorder-due-to-another-medical-condition.md":Bh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizoaffective-disorder.md":jh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophrenia.md":Uh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophreniform-disorder.md":Hh,"/src/content/dsm/schizophrenia-spectrum-disorders/substance-induced-psychotic-disorder.md":$h,"/src/content/dsm/schizophrenia-spectrum-disorders/unspecified-schizophrenia-spectrum-disorder.md":Wh,"/src/content/dsm/trauma-and-stressor-related-disorders/acute-stress-disorder.md":Vh,"/src/content/dsm/trauma-and-stressor-related-disorders/disinhibited-social-engagement-disorder.md":Yh,"/src/content/dsm/trauma-and-stressor-related-disorders/posttraumatic-stress-disorder.md":qh,"/src/content/dsm/trauma-and-stressor-related-disorders/reactive-attachment-disorder.md":Qh,"/src/content/translations/ana.md":Gh,"/src/content/translations/cancion_de_las_simples_cosas.md":Kh,"/src/content/translations/con_te_partirò.md":Xh,"/src/content/translations/ese_arar_en_el_mar.md":Jh,"/src/content/translations/gracias_a_la_vida.md":Zh,"/src/content/translations/mariella.md":ef,"/src/content/translations/tan_joven_y_tan_viejo.md":tf,"/src/content/translations/vine_del_norte.md":nf,"/src/content/translations/volver_a_los_diecisiete.md":rf}),o5=Object.assign({"/src/content/art/index.jsx":us,"/src/content/art/paintings.jsx":df,"/src/content/art/sketches.jsx":hf,"/src/content/dsm/anxiety-disorders/index.jsx":cs,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":ds,"/src/content/dsm/depressive-disorders/index.jsx":hs,"/src/content/dsm/index.jsx":fs,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":ps,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ms,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":gs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":ys,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":vs,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":bs,"/src/content/dsm/paraphilic-disorders/index.jsx":Ts,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":Es,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ws,"/src/content/dsm/personality-disorders/index.jsx":xs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":_s,"/src/content/dsm/trauma-and-stressor-related-disorders/index.jsx":Ss,"/src/content/translations/index.jsx":ks,"/src/content/webapps/index.jsx":Ds,"/src/content/webapps/jesspanish.jsx":ff,"/src/content/webapps/jessprache.jsx":pf}),s5=Object.fromEntries(Object.entries(o5).filter(([e])=>!e.endsWith("index.jsx")));function yd({category:e}){const t=Object.entries(r5),n=Object.entries(s5);return[...t,...n].map(([r,o])=>a5(r,o))}function a5(e,t){var o,s,a,l;const n=e.split("/").pop(),i=n.endsWith(".jsx"),r=n.replace(i?".jsx":".md","");return i?{postId:r,title:t.title||((o=t.frontmatter)==null?void 0:o.title)||"Untitled",link:`/${r}`,image:t.image||((s=t.frontmatter)==null?void 0:s.image)||"",description:t.description||((a=t.frontmatter)==null?void 0:a.description)||"",category:t.category||((l=t.frontmatter)==null?void 0:l.category)||"",content:t,type:"jsx"}:{postId:r,title:t.attributes.title||"Untitled",link:`/${r}`,image:t.attributes.image||"",description:t.attributes.description||"",category:t.attributes.category||"",content:t.markdown||"",type:"markdown"}}function l5(e){const t=Object.assign({"/src/content/art/index.jsx":us,"/src/content/dsm/anxiety-disorders/index.jsx":cs,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":ds,"/src/content/dsm/depressive-disorders/index.jsx":hs,"/src/content/dsm/index.jsx":fs,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":ps,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ms,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":gs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":ys,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":vs,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":bs,"/src/content/dsm/paraphilic-disorders/index.jsx":Ts,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":Es,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ws,"/src/content/dsm/personality-disorders/index.jsx":xs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":_s,"/src/content/dsm/trauma-and-stressor-related-disorders/index.jsx":Ss,"/src/content/translations/index.jsx":ks,"/src/content/webapps/index.jsx":Ds});for(const[n,i]of Object.entries(t)){const r=n.replace(/^\/src\/content\//,"").replace(/\/index\.[^.]+$/,"");if(r.split("/").pop()===e)return{fullPath:r,module:i}}return null}function u5(e){return yd({category:"all"}).filter(n=>{const i=Object.assign({"/src/content/dsm/anxiety-disorders/agoraphobia.md":vd,"/src/content/dsm/anxiety-disorders/anxiety-disorder-due-to-another-medical-condition.md":bd,"/src/content/dsm/anxiety-disorders/generalized-anxiety-disorder.md":Td,"/src/content/dsm/anxiety-disorders/other-specified-anxiety-disorder.md":Ed,"/src/content/dsm/anxiety-disorders/panic-disorder.md":wd,"/src/content/dsm/anxiety-disorders/selective-mutism.md":xd,"/src/content/dsm/anxiety-disorders/separation-anxiety-disorder.md":_d,"/src/content/dsm/anxiety-disorders/social-anxiety-disorder.md":Sd,"/src/content/dsm/anxiety-disorders/specific-phobia.md":kd,"/src/content/dsm/anxiety-disorders/substance-induced-anxiety-disorder.md":Dd,"/src/content/dsm/anxiety-disorders/unspecified-anxiety-disorder.md":Id,"/src/content/dsm/bipolar-and-related-disorders/bipolar-I-disorder.md":Cd,"/src/content/dsm/bipolar-and-related-disorders/bipolar-II-disorder.md":Ad,"/src/content/dsm/bipolar-and-related-disorders/bipolar-disorder-due-to-another-medical-condition.md":Od,"/src/content/dsm/bipolar-and-related-disorders/cyclothymic-disorder.md":Pd,"/src/content/dsm/bipolar-and-related-disorders/other-specified-bipolar-disorder.md":Nd,"/src/content/dsm/bipolar-and-related-disorders/substance-induced-bipolar-disorder.md":Md,"/src/content/dsm/bipolar-and-related-disorders/unspecified-bipolar-disorder.md":Rd,"/src/content/dsm/bipolar-and-related-disorders/unspecified-mood-disorder.md":Ld,"/src/content/dsm/depressive-disorders/depressive-disorder-due-to-another-medical-condition.md":Fd,"/src/content/dsm/depressive-disorders/dysruptive-mood-dysregulation-disorder.md":zd,"/src/content/dsm/depressive-disorders/major-depressive-disorder.md":Bd,"/src/content/dsm/depressive-disorders/other-specified-depressive-disorder.md":jd,"/src/content/dsm/depressive-disorders/persistent-depressive-disorder.md":Ud,"/src/content/dsm/depressive-disorders/premenstrual-dysphoric-disorder.md":Hd,"/src/content/dsm/depressive-disorders/substance-induced-depressive-disorder.md":$d,"/src/content/dsm/depressive-disorders/unspecified-depressive-disorder.md":Wd,"/src/content/dsm/depressive-disorders/unspecified-mood-disorder.md":Vd,"/src/content/dsm/neurodevelopmental-disorders/attention-deficit-hyperactivity-disorder.md":Yd,"/src/content/dsm/neurodevelopmental-disorders/autism-spectrum-disorder.md":qd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/child-onset-fluency-disorder.md":Qd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/language-disorder.md":Gd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/social-communication-disorder.md":Kd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/speech-sound-disorder.md":Xd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/unspecified-communication-disorder.md":Jd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/global-developmental-delay.md":Zd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/intellectual-disability.md":eh,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/unspecified-intellectual-developmental-disorder.md":th,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/developmental-coordination-disorder.md":nh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/stereotypic-movement-disorder.md":ih,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/other-specified-tic-disorder.md":rh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/persistent-tic-disorder.md":oh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/provisional-tic-disorder.md":sh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/tourettes-disorder.md":ah,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/unspecified-tic-disorder.md":lh,"/src/content/dsm/neurodevelopmental-disorders/other-specified-neurodevelopmental-disorder.md":uh,"/src/content/dsm/neurodevelopmental-disorders/specific-learning-disorder.md":ch,"/src/content/dsm/neurodevelopmental-disorders/unspecified-neurodevelopmental-disorder.md":dh,"/src/content/dsm/obsessive-compulsive-disorders/body-dysmorphic-disorder.md":hh,"/src/content/dsm/obsessive-compulsive-disorders/excoriation-disorder.md":fh,"/src/content/dsm/obsessive-compulsive-disorders/hoarding-disorder.md":ph,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder-due-to-another-medical-condition.md":mh,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder.md":gh,"/src/content/dsm/obsessive-compulsive-disorders/other-specified-obsessive-compulsive-disorder.md":yh,"/src/content/dsm/obsessive-compulsive-disorders/substance-induced-obsessive-comulsive-disorder.md":vh,"/src/content/dsm/obsessive-compulsive-disorders/trichotillomania.md":bh,"/src/content/dsm/obsessive-compulsive-disorders/unspecified-obsessive-compulsive-disorder.md":Th,"/src/content/dsm/paraphilic-disorders/exhibitionistic-disorder.md":Eh,"/src/content/dsm/paraphilic-disorders/fetishistic-disorder.md":wh,"/src/content/dsm/paraphilic-disorders/frotteuristic-disorder.md":xh,"/src/content/dsm/paraphilic-disorders/other-specified-paraphilic-disorder.md":_h,"/src/content/dsm/paraphilic-disorders/pedophilic-disorder.md":Sh,"/src/content/dsm/paraphilic-disorders/sexual-masochism-disorder.md":kh,"/src/content/dsm/paraphilic-disorders/sexual-sadism-disorder.md":Dh,"/src/content/dsm/paraphilic-disorders/transvestic-disorder.md":Ih,"/src/content/dsm/paraphilic-disorders/unspecified-paraphilic-disorder.md":Ch,"/src/content/dsm/paraphilic-disorders/voyeuristic-disorder.md":Ah,"/src/content/dsm/personality-disorders/cluster-a/paranoid-personality-disorder.md":Oh,"/src/content/dsm/personality-disorders/cluster-a/schizoid-personality-disorder.md":Ph,"/src/content/dsm/personality-disorders/cluster-a/schizotypal-personality-disorder.md":Nh,"/src/content/dsm/personality-disorders/cluster-b/antisocial-personality-disorder.md":Mh,"/src/content/dsm/personality-disorders/general-personality-disorder.md":Rh,"/src/content/dsm/schizophrenia-spectrum-disorders/brief-psychotic-disorder.md":Lh,"/src/content/dsm/schizophrenia-spectrum-disorders/delusional-disorder.md":Fh,"/src/content/dsm/schizophrenia-spectrum-disorders/other-specified-schizophrenia-spectrum-disorder.md":zh,"/src/content/dsm/schizophrenia-spectrum-disorders/psychotic-disorder-due-to-another-medical-condition.md":Bh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizoaffective-disorder.md":jh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophrenia.md":Uh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophreniform-disorder.md":Hh,"/src/content/dsm/schizophrenia-spectrum-disorders/substance-induced-psychotic-disorder.md":$h,"/src/content/dsm/schizophrenia-spectrum-disorders/unspecified-schizophrenia-spectrum-disorder.md":Wh,"/src/content/dsm/trauma-and-stressor-related-disorders/acute-stress-disorder.md":Vh,"/src/content/dsm/trauma-and-stressor-related-disorders/disinhibited-social-engagement-disorder.md":Yh,"/src/content/dsm/trauma-and-stressor-related-disorders/posttraumatic-stress-disorder.md":qh,"/src/content/dsm/trauma-and-stressor-related-disorders/reactive-attachment-disorder.md":Qh,"/src/content/translations/ana.md":Gh,"/src/content/translations/cancion_de_las_simples_cosas.md":Kh,"/src/content/translations/con_te_partirò.md":Xh,"/src/content/translations/ese_arar_en_el_mar.md":Jh,"/src/content/translations/gracias_a_la_vida.md":Zh,"/src/content/translations/mariella.md":ef,"/src/content/translations/tan_joven_y_tan_viejo.md":tf,"/src/content/translations/vine_del_norte.md":nf,"/src/content/translations/volver_a_los_diecisiete.md":rf}),o=Object.fromEntries(Object.entries(Object.assign({"/src/content/art/index.jsx":us,"/src/content/art/paintings.jsx":df,"/src/content/art/sketches.jsx":hf,"/src/content/dsm/anxiety-disorders/index.jsx":cs,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":ds,"/src/content/dsm/depressive-disorders/index.jsx":hs,"/src/content/dsm/index.jsx":fs,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":ps,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ms,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":gs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":ys,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":vs,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":bs,"/src/content/dsm/paraphilic-disorders/index.jsx":Ts,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":Es,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ws,"/src/content/dsm/personality-disorders/index.jsx":xs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":_s,"/src/content/dsm/trauma-and-stressor-related-disorders/index.jsx":Ss,"/src/content/translations/index.jsx":ks,"/src/content/webapps/index.jsx":Ds,"/src/content/webapps/jesspanish.jsx":ff,"/src/content/webapps/jessprache.jsx":pf})).filter(([a])=>!a.endsWith("index.jsx"))),s={...i,...o};for(const[a,l]of Object.entries(s)){const u=a.split("/").pop(),h=u.endsWith(".jsx");if(u.replace(h?".jsx":".md","")===n.postId){const f=a.replace("/src/content/","").split("/");return f.pop(),f.join("/")===e}}return!1})}function c5(e){const t=Object.assign({"/src/content/dsm/anxiety-disorders/agoraphobia.md":vd,"/src/content/dsm/anxiety-disorders/anxiety-disorder-due-to-another-medical-condition.md":bd,"/src/content/dsm/anxiety-disorders/generalized-anxiety-disorder.md":Td,"/src/content/dsm/anxiety-disorders/other-specified-anxiety-disorder.md":Ed,"/src/content/dsm/anxiety-disorders/panic-disorder.md":wd,"/src/content/dsm/anxiety-disorders/selective-mutism.md":xd,"/src/content/dsm/anxiety-disorders/separation-anxiety-disorder.md":_d,"/src/content/dsm/anxiety-disorders/social-anxiety-disorder.md":Sd,"/src/content/dsm/anxiety-disorders/specific-phobia.md":kd,"/src/content/dsm/anxiety-disorders/substance-induced-anxiety-disorder.md":Dd,"/src/content/dsm/anxiety-disorders/unspecified-anxiety-disorder.md":Id,"/src/content/dsm/bipolar-and-related-disorders/bipolar-I-disorder.md":Cd,"/src/content/dsm/bipolar-and-related-disorders/bipolar-II-disorder.md":Ad,"/src/content/dsm/bipolar-and-related-disorders/bipolar-disorder-due-to-another-medical-condition.md":Od,"/src/content/dsm/bipolar-and-related-disorders/cyclothymic-disorder.md":Pd,"/src/content/dsm/bipolar-and-related-disorders/other-specified-bipolar-disorder.md":Nd,"/src/content/dsm/bipolar-and-related-disorders/substance-induced-bipolar-disorder.md":Md,"/src/content/dsm/bipolar-and-related-disorders/unspecified-bipolar-disorder.md":Rd,"/src/content/dsm/bipolar-and-related-disorders/unspecified-mood-disorder.md":Ld,"/src/content/dsm/depressive-disorders/depressive-disorder-due-to-another-medical-condition.md":Fd,"/src/content/dsm/depressive-disorders/dysruptive-mood-dysregulation-disorder.md":zd,"/src/content/dsm/depressive-disorders/major-depressive-disorder.md":Bd,"/src/content/dsm/depressive-disorders/other-specified-depressive-disorder.md":jd,"/src/content/dsm/depressive-disorders/persistent-depressive-disorder.md":Ud,"/src/content/dsm/depressive-disorders/premenstrual-dysphoric-disorder.md":Hd,"/src/content/dsm/depressive-disorders/substance-induced-depressive-disorder.md":$d,"/src/content/dsm/depressive-disorders/unspecified-depressive-disorder.md":Wd,"/src/content/dsm/depressive-disorders/unspecified-mood-disorder.md":Vd,"/src/content/dsm/neurodevelopmental-disorders/attention-deficit-hyperactivity-disorder.md":Yd,"/src/content/dsm/neurodevelopmental-disorders/autism-spectrum-disorder.md":qd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/child-onset-fluency-disorder.md":Qd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/language-disorder.md":Gd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/social-communication-disorder.md":Kd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/speech-sound-disorder.md":Xd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/unspecified-communication-disorder.md":Jd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/global-developmental-delay.md":Zd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/intellectual-disability.md":eh,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/unspecified-intellectual-developmental-disorder.md":th,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/developmental-coordination-disorder.md":nh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/stereotypic-movement-disorder.md":ih,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/other-specified-tic-disorder.md":rh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/persistent-tic-disorder.md":oh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/provisional-tic-disorder.md":sh,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/tourettes-disorder.md":ah,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/unspecified-tic-disorder.md":lh,"/src/content/dsm/neurodevelopmental-disorders/other-specified-neurodevelopmental-disorder.md":uh,"/src/content/dsm/neurodevelopmental-disorders/specific-learning-disorder.md":ch,"/src/content/dsm/neurodevelopmental-disorders/unspecified-neurodevelopmental-disorder.md":dh,"/src/content/dsm/obsessive-compulsive-disorders/body-dysmorphic-disorder.md":hh,"/src/content/dsm/obsessive-compulsive-disorders/excoriation-disorder.md":fh,"/src/content/dsm/obsessive-compulsive-disorders/hoarding-disorder.md":ph,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder-due-to-another-medical-condition.md":mh,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder.md":gh,"/src/content/dsm/obsessive-compulsive-disorders/other-specified-obsessive-compulsive-disorder.md":yh,"/src/content/dsm/obsessive-compulsive-disorders/substance-induced-obsessive-comulsive-disorder.md":vh,"/src/content/dsm/obsessive-compulsive-disorders/trichotillomania.md":bh,"/src/content/dsm/obsessive-compulsive-disorders/unspecified-obsessive-compulsive-disorder.md":Th,"/src/content/dsm/paraphilic-disorders/exhibitionistic-disorder.md":Eh,"/src/content/dsm/paraphilic-disorders/fetishistic-disorder.md":wh,"/src/content/dsm/paraphilic-disorders/frotteuristic-disorder.md":xh,"/src/content/dsm/paraphilic-disorders/other-specified-paraphilic-disorder.md":_h,"/src/content/dsm/paraphilic-disorders/pedophilic-disorder.md":Sh,"/src/content/dsm/paraphilic-disorders/sexual-masochism-disorder.md":kh,"/src/content/dsm/paraphilic-disorders/sexual-sadism-disorder.md":Dh,"/src/content/dsm/paraphilic-disorders/transvestic-disorder.md":Ih,"/src/content/dsm/paraphilic-disorders/unspecified-paraphilic-disorder.md":Ch,"/src/content/dsm/paraphilic-disorders/voyeuristic-disorder.md":Ah,"/src/content/dsm/personality-disorders/cluster-a/paranoid-personality-disorder.md":Oh,"/src/content/dsm/personality-disorders/cluster-a/schizoid-personality-disorder.md":Ph,"/src/content/dsm/personality-disorders/cluster-a/schizotypal-personality-disorder.md":Nh,"/src/content/dsm/personality-disorders/cluster-b/antisocial-personality-disorder.md":Mh,"/src/content/dsm/personality-disorders/general-personality-disorder.md":Rh,"/src/content/dsm/schizophrenia-spectrum-disorders/brief-psychotic-disorder.md":Lh,"/src/content/dsm/schizophrenia-spectrum-disorders/delusional-disorder.md":Fh,"/src/content/dsm/schizophrenia-spectrum-disorders/other-specified-schizophrenia-spectrum-disorder.md":zh,"/src/content/dsm/schizophrenia-spectrum-disorders/psychotic-disorder-due-to-another-medical-condition.md":Bh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizoaffective-disorder.md":jh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophrenia.md":Uh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophreniform-disorder.md":Hh,"/src/content/dsm/schizophrenia-spectrum-disorders/substance-induced-psychotic-disorder.md":$h,"/src/content/dsm/schizophrenia-spectrum-disorders/unspecified-schizophrenia-spectrum-disorder.md":Wh,"/src/content/dsm/trauma-and-stressor-related-disorders/acute-stress-disorder.md":Vh,"/src/content/dsm/trauma-and-stressor-related-disorders/disinhibited-social-engagement-disorder.md":Yh,"/src/content/dsm/trauma-and-stressor-related-disorders/posttraumatic-stress-disorder.md":qh,"/src/content/dsm/trauma-and-stressor-related-disorders/reactive-attachment-disorder.md":Qh,"/src/content/translations/ana.md":Gh,"/src/content/translations/cancion_de_las_simples_cosas.md":Kh,"/src/content/translations/con_te_partirò.md":Xh,"/src/content/translations/ese_arar_en_el_mar.md":Jh,"/src/content/translations/gracias_a_la_vida.md":Zh,"/src/content/translations/mariella.md":ef,"/src/content/translations/tan_joven_y_tan_viejo.md":tf,"/src/content/translations/vine_del_norte.md":nf,"/src/content/translations/volver_a_los_diecisiete.md":rf}),i=Object.fromEntries(Object.entries(Object.assign({"/src/content/art/index.jsx":us,"/src/content/art/paintings.jsx":df,"/src/content/art/sketches.jsx":hf,"/src/content/dsm/anxiety-disorders/index.jsx":cs,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":ds,"/src/content/dsm/depressive-disorders/index.jsx":hs,"/src/content/dsm/index.jsx":fs,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":ps,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ms,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":gs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":ys,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":vs,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":bs,"/src/content/dsm/paraphilic-disorders/index.jsx":Ts,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":Es,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ws,"/src/content/dsm/personality-disorders/index.jsx":xs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":_s,"/src/content/dsm/trauma-and-stressor-related-disorders/index.jsx":Ss,"/src/content/translations/index.jsx":ks,"/src/content/webapps/index.jsx":Ds,"/src/content/webapps/jesspanish.jsx":ff,"/src/content/webapps/jessprache.jsx":pf})).filter(([o])=>!o.endsWith("index.jsx"))),r={...t,...i};for(const o of Object.keys(r)){const s=o.replace("/src/content/","").split("/");if(s.pop(),s[s.length-1]===e){const l=s.join("/");return u5(l)}}return[]}const d5=P3([{path:"/",element:Q.jsx(Y3,{}),children:[{index:!0,element:Q.jsx(Eg,{}),loader:()=>({children:By("")})},{path:":folderName",element:Q.jsx(Eg,{}),loader:({params:e})=>{var h;const{folderName:t}=e;let n="",i="",r=[];const o=l5(t);if(o){n=o.module.description??((h=o.module.frontmatter)==null?void 0:h.description)??"",i=o.module.header_text??"";const d=By(o.fullPath);r.push(...d)}const s=c5(t);s.length>0&&r.push(...s);let a=[];if(!o||!o.module.order)console.log("No order array found for folder:",t),console.log("Displaying children in arbitrary order"),a=r;else{for(const d of o.module.order){const f=r.find(p=>p.link===d);f?a.push(f):console.log(`Child with link ${d} not found in children array`)}a.length!==r.length&&(console.log("Ordered children length does not match children length"),console.log("Ordered children:",a),console.log("Children:",r))}if(r=a,r.length>0)return{description:n||"",header_text:i||"",children:r};throw yd({category:"all"}).find(d=>d.postId===t)?new Response("",{status:302,headers:{Location:`/posts/${t}`}}):new Error(`Content "${t}" not found`)}},{path:"posts/:postId",element:Q.jsx(n5,{}),loader:({params:e})=>{const t=yd({category:"all"}),{postId:n}=e,i=t.find(r=>r.postId===n);if(!i)throw new Error(`Post "${n}" not found`);return i}}]}]);nc.createRoot(document.getElementById("root")).render(Q.jsx(Xy.StrictMode,{children:Q.jsx(W3,{router:d5})}));
