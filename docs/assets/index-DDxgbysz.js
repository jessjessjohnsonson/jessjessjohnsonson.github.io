(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const O1="Paintings and Drawings",N1="Paintings and sketches I've done.",P1=["/sketches","/paintings"],ns=Object.freeze(Object.defineProperty({__proto__:null,description:N1,order:P1,title:O1},Symbol.toStringTag,{value:"Module"})),M1="Anxiety Disorders",R1="Excessive fear (response to real or perceived danger) or anxiety (anticipation of danger).",L1=["/separation-anxiety-disorder","/selective-mutism","/specific-phobia","/social-anxiety-disorder","/panic-disorder","/agoraphobia","/generalized-anxiety-disorder","/substance-induced-anxiety-disorder","/anxiety-disorder-due-to-another-medical-condition","/other-specified-anxiety-disorder","/unspecified-anxiety-disorder"],is=Object.freeze(Object.defineProperty({__proto__:null,description:R1,order:L1,title:M1},Symbol.toStringTag,{value:"Module"})),F1="Bipolar and Related Disorders",B1="Manic and hypomanic episodes with depressive episodes.",z1=["/bipolar-I-disorder","/bipolar-II-disorder","/cyclothymic-disorder","/substance-induced-bipolar-disorder","/bipolar-disorder-due-to-another-medical-condition","/other-specified-bipolar-disorder","/unspecified-bipolar-disorder","/unspecified-mood-disorder","/bipolar-specifiers"],rs=Object.freeze(Object.defineProperty({__proto__:null,description:B1,order:z1,title:F1},Symbol.toStringTag,{value:"Module"})),j1="Depressive Disorders",U1="Sad, empty, or irritable mood with loss of interest or pleasure in nearly all activities.",H1=["/major-depressive-disorder","/persistent-depressive-disorder","/premenstrual-dysphoric-disorder","/substance-induced-depressive-disorder","/depressive-disorder-due-to-another-medical-condition","/other-specified-depressive-disorder","/unspecified-depressive-disorder","/unspecified-mood-disorder"],os=Object.freeze(Object.defineProperty({__proto__:null,description:U1,order:H1,title:j1},Symbol.toStringTag,{value:"Module"})),$1="The DSM Taxonomy Since 1952",q1="The DSM-5 diagnoses shown over time as they appear (or don't) in prior versions of the DSM since 1952.",W1=["/neurodevelopmental-disorders","/schizophrenia-spectrum-disorders","/bipolar-and-related-disorders","/depressive-disorders","/anxiety-disorders","/obsessive-compulsive-disorders","/trauma-and-stressor-related-disorders","/personality-disorders","/paraphilic-disorders"],ss=Object.freeze(Object.defineProperty({__proto__:null,description:q1,order:W1,title:$1},Symbol.toStringTag,{value:"Module"})),V1="Communication Disorders",Y1="communication-disorders",Q1="Deficits in language, speech, and nonverbal communication.",G1=["/language-disorder","/speech-sound-disorder","/child-onset-fluency-disorder","/social-communication-disorder","/unspecified-communication-disorder"],as=Object.freeze(Object.defineProperty({__proto__:null,description:Q1,order:G1,slug:Y1,title:V1},Symbol.toStringTag,{value:"Module"})),K1="Neurodevelopmental Disorders",X1="Deficits in intellectual, adaptive (life skills), communication, motor, and social skills that onset during the developmental period.",J1=["/intellectual-development-disorders","/communication-disorders","/autism-spectrum-disorder","/attention-deficit-hyperactivity-disorder","/specific-learning-disorder","/motor-disorders","/other-specified-neurodevelopmental-disorder","/unspecified-neurodevelopmental-disorder"],ls=Object.freeze(Object.defineProperty({__proto__:null,description:X1,order:J1,title:K1},Symbol.toStringTag,{value:"Module"})),Z1="Intellectual Development Disorders",eT="Conditions that delay intellectual and adaptive milestones during the developmental period.",tT=["/intellectual-disability","/global-developmental-delay","/unspecified-intellectual-developmental-disorder"],us=Object.freeze(Object.defineProperty({__proto__:null,description:eT,order:tT,title:Z1},Symbol.toStringTag,{value:"Module"})),nT="Motor Disorders",iT="Malfunctions of the nervous system that cause involuntary or uncontrollable movements or actions of the body.",rT=["/developmental-coordination-disorder","/stereotypic-movement-disorder","/tic-disorders"],cs=Object.freeze(Object.defineProperty({__proto__:null,description:iT,order:rT,title:nT},Symbol.toStringTag,{value:"Module"})),oT="Tic Disorders",sT="Conditions involving involuntary, sudden, recurrent movements or vocalizations, such as eye blinking, shoulder shrugging, thread clearing, grunting, or in some cases words and phrases.",aT=["/tourettes-disorder","/persistent-tic-disorder","/provisional-tic-disorder","/other-specified-tic-disorder","/unspecified-tic-disorder"],ds=Object.freeze(Object.defineProperty({__proto__:null,description:sT,order:aT,title:oT},Symbol.toStringTag,{value:"Module"})),lT="Obsessive-Compulsive Disorders",uT="Recurrent and persistent intrusive thoughts, images, or urges and repetitive behaviors that an individual feels driven to perform.",cT=["/obsessive-compulsive-disorder","/body-dysmorphic-disorder","/hoarding-disorder","/trichotillomania","/excoriation-disorder","/substance-induced-obsessive-compulsive-disorder","/obsessive-compulsive-disorder-due-to-another-medical-condition","/other-specified-obsessive-compulsive-disorder","/unspecified-obsessive-compulsive-disorder"],hs=Object.freeze(Object.defineProperty({__proto__:null,description:uT,order:cT,title:lT},Symbol.toStringTag,{value:"Module"})),dT="Paraphilic Disorders",hT="Intense and persistent sexual interest other than sexual interest in genital stimulation or preparatory fondling with phenotypically normal, physically mature, consenting human partners.",fT=["/voyeuristic-disorder","/exhibitionistic-disorder","/frotteuristic-disorder","/sexual-masochism-disorder","/sexual-sadism-disorder","/pedophilic-disorder","/fetishistic-disorder","/transvestic-disorder","/other-specified-paraphilic-disorder","/unspecified-paraphilic-disorder"],pT=`The term paraphilia denotes an intense and persistent sexual interest other than sexual interest in genital stimulation or preparatory fondling with phenotypically normal, 
physically mature, consenting human partners. A paraphilic disorder is a paraphilia that is currently causing distress or impairment to the individual or whose satisfaction has caused personal harm, or risk of harm, to others. 
The paraphilic disorders are presented in groups ordered by anomalous activity preferences, subdivided into courtship disorders (voyeuristic, 
exhibitionistic, and frotteuristic disorders), and algolagnic disorders which involve pain and suffering (masochism and sadism). The second group is based on anomalous target preferences (
pedophilic, fetishistic, and transvestic disorders).`,fs=Object.freeze(Object.defineProperty({__proto__:null,description:hT,header_text:pT,order:fT,title:dT},Symbol.toStringTag,{value:"Module"})),mT="Cluster A Personality Disorders",gT="Personality disorders characterized by odd-eccentric behavior and thought patterns.",yT=["/paranoid-personality-disorder","/schizoid-personality-disorder","/schizotypal-personality-disorder"],ps=Object.freeze(Object.defineProperty({__proto__:null,description:gT,order:yT,title:mT},Symbol.toStringTag,{value:"Module"})),bT="Cluster B Personality Disorders",vT="Personality disorders characterized dramatic-emotional behavior.",TT=["/antisocial-personality-disorder","/borderline-personality-disorder","/histrionic-personality-disorder","/narcissistic-personality-disorder"],ms=Object.freeze(Object.defineProperty({__proto__:null,description:vT,order:TT,title:bT},Symbol.toStringTag,{value:"Module"})),ET="Personality Disorders",_T="Enduring patterns of inner experience and behavior that deviate markedly from cultural norms, is pervasive and inflexible, onsets in adolescence or early adulthood, is stable over time, and leads to distress or impairment.",xT=`Personality disorders are organized in the DSM by clusters. 
Cluster A is described as odd-eccentric and includes paranoid, schizoid, and schizotypal personality disorders.
Cluster B is described as dramatic-emotional and includes antisocial, borderline, histrionic, and narcissistic personality disorders. 
Cluster C is described as anxious-fearful and includes avoidant, dependent, and obsessive-compulsive personality disorders.
An alternative to the categorical approach to personality disorders is a dimensional perspective in which personality disorders represent maladaptive variants of personality traits that merge imperceptibly into normality and into one another.`,ST=["/general-personality-disorder","/cluster-a","/cluster-b","/cluster-c"],gs=Object.freeze(Object.defineProperty({__proto__:null,description:_T,header_text:xT,order:ST,title:ET},Symbol.toStringTag,{value:"Module"})),wT="Schizophrenia Spectrum and Other Psychotic Disorders",DT="Delusions, hallucinations, and disorganized thought and speech.",IT=["/delusional-disorder","/brief-psychotic-disorder","/schizophreniform-disorder","/schizophrenia","/schizoaffective-disorder","/substance-induced-psychotic-disorder","/psychotic-disorder-due-to-another-medical-condition","/other-specified-schizophrenia-spectrum-disorder","/unspecified-schizophrenia-spectrum-disorder"],ys=Object.freeze(Object.defineProperty({__proto__:null,description:DT,order:IT,title:wT},Symbol.toStringTag,{value:"Module"})),kT="Trauma and Stressor-Related Disorders",CT="Disorders that explicitly require a traumatic or stressful event as a diagnostic criterion.",AT=["/post-traumatic-stress-disorder"],bs=Object.freeze(Object.defineProperty({__proto__:null,description:CT,order:AT,title:kT},Symbol.toStringTag,{value:"Module"})),OT="Translations",NT="My translations of songs from Spanish to English, and sometimes vice versa.",PT="translations",vs=Object.freeze(Object.defineProperty({__proto__:null,description:NT,slug:PT,title:OT},Symbol.toStringTag,{value:"Module"})),MT="Web Apps",RT="Little web apps I made to learn Spanish (fairly successfully) and German (less successfully).",LT="webapps",FT=["/jesspanish","/jessprache"],Ts=Object.freeze(Object.defineProperty({__proto__:null,description:RT,order:FT,slug:LT,title:MT},Symbol.toStringTag,{value:"Module"})),BT={title:"Agoraphobia",description:"Excessive fear or anxiety about situations involving in public or enclosed spaces.",prevalence:"1-7%"},zT=`<h2>DSM-5</h2>
<ol>
<li>Marked fear or anxiety about two (or more) of the following five situations:
<ol>
<li>Using public transportation (e.g., automobiles, buses, trains, ships, planes).</li>
<li>Being in open spaces (e.g., parking lots, marketplaces, bridges).</li>
<li>Being in enclosed places (e.g., shops, theaters, cinemas).</li>
<li>Standing in line or being in a crowd.</li>
<li>Being outside of the home alone.</li>
</ol>
</li>
<li>The individual fears or avoids these situations because of thoughts that escape might be difficult or help might not be available in the event of developing panic-like symptoms or other incapacitating or embarrassing symptoms (e.g., fear of falling in the elderly, fear of incontinence).</li>
<li>The agoraphobic situations almost always provoke fear or anxiety.</li>
<li>The agoraphobic situations are actively avoided, require the presence of a companion, or are endured with intense fear or anxiety.</li>
<li>The fear or anxiety is out of proportion to the actual danger posed by the agoraphobic situations and to the sociocultural context.</li>
<li>The fear, anxiety, or avoidance is persistent, typically lasting for 6 months or more.</li>
<li>The fear, anxiety, or avoidance causes clinically significant distress or impairment in social or occupational functioning.</li>
<li>If another medical condition (e.g., inflammatory bowel disease, Parksinson's disease) is present, the fear, anxiety, or avoidance is clearly excessive.</li>
<li>The fear, anxiety, or avoidance is not better explained by the symptoms of another mental disorder—for example, the symptoms are not confined to specific phobia, situational type; do not involve only social situations (as in social anxiety disorder); and are not related exclusively to obsessions (as in obsessive-compulsive disorder), perceived defects or flaws in physical appearance (as in body dysmorphic disorder), reminders of traumatic events (as in posttraumatic stress disorder), or fear of separation (as in SAD).<br>
<i>Note, agoraphobia is diagnosed irrespective of the presence of panic disorder. If an individual’s presentation meets criteria for panic disorder and agoraphobia, both diagnoses should be assigned.</i></li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>Specific phobia, situational type</li>
<li>SAD</li>
<li>Social anxiety disorder<br>
<i>Note, in social anxiety disorder, the fear is more about being negatively evaluated by other people.</i></li>
<li>Panic disorder</li>
<li>Acute stress disorder and PTSD</li>
<li>MDD</li>
<li>Avoidance related to other medical conditions</li>
</ul>
`,Zc=Object.freeze(Object.defineProperty({__proto__:null,attributes:BT,html:zT},Symbol.toStringTag,{value:"Module"})),jT={title:"Anxiety Disorder Due to Another Medical Condition",description:"Panic attacks or anxiety brought on by another medical condition."},UT=`<h2>DSM-5</h2>
<ol>
<li>Panic attacks or anxiety is predominant in the clinical picture.</li>
<li>There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.</li>
<li>The disturbance is not better explained by another medical disorder.</li>
<li>The disturbance does not occur exclusively during the course of a delirium.</li>
<li>The disturbance causes clinically significant distress or impairment in  social or occupational functioning.</li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>Delirium and major or mild neurocognitive disorder</li>
<li>Mixed presentation of symptoms (e.g., mood and anxiety)</li>
<li>Substance/medication-induced anxiety disorder</li>
<li>Anxiety disorder (not due to a known medical condition)</li>
<li>Illness anxiety disorder</li>
<li>Adjustment disorders</li>
</ul>
`,ed=Object.freeze(Object.defineProperty({__proto__:null,attributes:jT,html:UT},Symbol.toStringTag,{value:"Module"})),HT={title:"Generalized Anxiety Disorder",description:"Excessive anxiety or worry about a number of events or activities.",prevalence:null,acronyms:"GAD"},$T=`<h2>DSM-5</h2>
<ol>
<li>Excessive anxiety and worry (apprehensive expectation), occurring more days than not for at least 6 months, about a number of events or activities (such as work or school performance).</li>
<li>The individual finds it difficult to control the worry.</li>
<li>The anxiety and worry are associated with three (or more) of the following six symptoms (with at least some symptoms having been present for more days than not for the past 6 months):<br>
<i>Note, only one item is required in children.</i>
<ol>
<li>Restlessness or feeling keyed up or on edge</li>
<li>Being easily fatigued</li>
<li>Difficulty concentrating or mind going blank</li>
<li>Irritability</li>
<li>Muscle tenion</li>
<li>Sleep disturbance (difficulty falling or staying asleep, or restlessness, unsatisfying sleep)</li>
</ol>
</li>
<li>The anxiety, worry, or physical symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The disturbance is not attributable to the effects of a substance or another medical condition.</li>
<li>The disturbance is not better explained by another mental disorder (e.g., anxiety or worry about having panic attacks in panic disorder, negative evaluation in social anxiety disorder, contamination or other obsessions in OCD, separation from attachment figures in SAD, reminders of traumatic events in PTSD, gaining weight in anorexia nervosa, physical complaints in somatic symptom disorder, perceived appearance flaws in body dysmorphic disorder, having a serious illness in illness anxiety disorder, or the content of delusional beliefs in schizophrenia or delusional
disorder).</li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>Anxiety disorder due to another medical condition</li>
<li>Substance/medication-induced anxiety disorder</li>
<li>Social anxiety disorder</li>
<li>SAD</li>
<li>Panic disorder</li>
<li>Illness anxiety disorder and somatic symptom disorder</li>
<li>OCD</li>
<li>PTSD and adjustment disorders</li>
<li>Depressive, bipolar, and psychotic disorders</li>
</ul>
`,td=Object.freeze(Object.defineProperty({__proto__:null,attributes:HT,html:$T},Symbol.toStringTag,{value:"Module"})),qT={title:"Other Specified Anxiety Disorder",description:"Panic attacks or anxiety that dominate the clinical picture but do not meet full criteria for a specified reason."},WT=`<h2>DSM-5</h2>
<p>This category applies to presentations in which symptoms characteristic of an anxiety disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the anxiety disorders diagnostic class, and do not meet criteria for adjustment disorder
with anxiety or adjustment disorder with mixed anxiety and depressed mood. The other specified anxiety disorder category is used in situations in which the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for any specific anxiety disorder. For example:</p>
<ul>
<li>Limited-symptom attacks.</li>
<li>Generalized anxiety occurring less often than “more days than not.”</li>
<li>Khyâl cap (wind attacks)</li>
<li>Ataque de nervios (attack of nerves)</li>
</ul>
`,nd=Object.freeze(Object.defineProperty({__proto__:null,attributes:qT,html:WT},Symbol.toStringTag,{value:"Module"})),VT={title:"Panic Disorder",description:"Recurrent, unexpected panic attacks followed by maladaptive behavior changes and persistent worry about additional panic attacks.",prevalence:"2-3%"},YT=`<h2>DSM-5</h2>
<ol>
<li>Recurrent unexpected panic attacks, defined by an abrupt surge of intense fear or intense discomfort that reaches peak within minutes and during which four or more of the following symptoms occur:
<ol>
<li>Palpitations, pounding heart, or accelerated heart rate</li>
<li>Sweating</li>
<li>Trembling or shaking</li>
<li>Sensations of shortness of breath or being smothered</li>
<li>Feelings of choking</li>
<li>Chest pain or discomfort</li>
<li>Nausea or abdominal distress</li>
<li>Feeling dizzy, unsteady, light-headed, or faint</li>
<li>Chills or heat sensations</li>
<li>Paresthesias (numbness or tingling sensations)</li>
<li>Derealization (feelings of unreality) or depersonalization (being detached from oneself)</li>
<li>Fear of losing control or &quot;going crazy&quot;</li>
<li>Fear of dying</li>
</ol>
</li>
<li>At least one or the attacks has been followed by 1 month of one or more of the following:
<ol>
<li>Persistent concern or worry about additional panic attacks or their consequences (e.g., losing control, having a heart attack, “going crazy”).</li>
<li>A significant maladaptive change in behavior related to the attacks (e.g., behaviors designed to avoid having panic attacks, such as avoidance of exercise or unfamiliar situations).</li>
</ol>
</li>
<li>The disturbance is not attributable to the effects of a substance or another medical condition.</li>
<li>The disturbance is not better explained by another mental disorder (e.g., the panic attacks do not occur only in response to feared social situations, as in social anxiety disorder; in response to circumscribed phobic objects or situations, as in specific phobia; in response to obsessions, as in  OCD; in response to reminders of traumatic events, as in PTSD; or in response to separation from attachment figures, as in SAD).</li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>Only limited-symptom panic attacks</li>
<li>Anxiety disorder due to another medical condition</li>
<li>Substance/medication-induced anxiety disorder</li>
<li>Other mental disorders with panic attacks as an associated feature (e.g., other anxiety disorders and psychotic disorders)</li>
</ul>
`,id=Object.freeze(Object.defineProperty({__proto__:null,attributes:VT,html:YT},Symbol.toStringTag,{value:"Module"})),QT={title:"Selective Mutism",description:"Failure to speak in specific social situations."},GT=`<h2>DSM-5</h2>
<ol>
<li>Consistent failure to speak in specific social situations in which there is an expectation for speaking (e.g., at school) despite speaking in other situations.</li>
<li>The disturbance interferes with educational or occupational achievement or with social communication.</li>
<li>The disturbance persists at least 1 month.</li>
<li>The failure to speak is not attributable to a lack of knowledge of, or comfort with, the spoken language required in the social situation.</li>
<li>The disturbance is not better explained by a communication disorder (e.g., childhood-onset fluency disorder) and does not occur exclusively during the course of ASD, schizophrenia, or another psychotic disorder.</li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>Silent period in immigrant children learning a second language</li>
<li>Communication disorders</li>
<li>Neurodevelopmental disorders and schizophrenia and other psychotic disorders</li>
<li>Social anxiety disorder</li>
</ul>
`,rd=Object.freeze(Object.defineProperty({__proto__:null,attributes:QT,html:GT},Symbol.toStringTag,{value:"Module"})),KT={title:"Separation Anxiety Disorder",description:"Excessive fear or anxiety of separation from major attachment figures.",prevalence:"4% in children, 0.9-1.9% in adults",acronyms:"SAD"},XT=`<h2>DSM-5</h2>
<ol>
<li>Developmentally inappropriate and excessive fear or anxiety of separation from major attachment figures, as evidenced by at least three of the following symptoms:
<ol>
<li>Recurrent excessive distress when anticipating or experiencing separation from home or from major attachment figures.</li>
<li>Persistent and excessive worry about losing major attachment figures or about possible harm to them (e.g., illness, injury, disasters, death).</li>
<li>Persistent and excessive worry about experiencing an untoward event (e.g., getting lost, being kidnapped, becoming ill) that causes separation from a major attachment figure.</li>
<li>Persistent reluctance or refusal to go out, away from home, to school, to work, or elsewhere due to fear of separation.</li>
<li>Persistent and excessive fear of or reluctance toward being left alone or without major attachment figures.</li>
<li>Persistent reluctance or refusal to sleep away from home or to go to sleep without being near a major attachment figure.</li>
<li>Repeated nightmares involving the theme of separation.</li>
<li>Repeated complaints of physical symptoms (e.g., headaches, stomachaches, nausea, vomiting) when separation from major figures occurs or is anticipated.</li>
</ol>
</li>
<li>The fear, anxiety, or avoidance lasts at least 4 weeks in children and adolescents and 6 months or more in adults.</li>
<li>The symptoms cause clinically significant distress or impairment in social or occupational functioning.</li>
<li>The symptoms are not better explained by another mental disorder, such as refusing to leave home because of excessive resistance to change in autism spectrum disorder; delusions or hallucinations concerning separation in psychotic disorders; refusal to go outside without a trusted companion in agoraphobia; worries about ill health or other harm befalling significant others in generalized anxiety disorder; or concerns about having an illness in illness
anxiety disorder.</li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>GAD</li>
<li>Panic disorder</li>
<li>Agoraphobia</li>
<li>Conduct disorder</li>
<li>Social anxiety disorder</li>
<li>PTSD</li>
<li>Illness anxiety disorder</li>
<li>Prolonged grief disorder</li>
<li>Depressive and bipolar disorders</li>
<li>ODD</li>
<li>Psychotic disorders</li>
<li>Personality disorders</li>
</ul>
`,od=Object.freeze(Object.defineProperty({__proto__:null,attributes:KT,html:XT},Symbol.toStringTag,{value:"Module"})),JT={title:"Social Anxiety Disorder",description:"Excessive fear or anxiety in social situations which the person is exposed to possible scrutiny by others.",prevalence:"7%"},ZT=`<h2>DSM-5</h2>
<ol>
<li>Marked fear or anxiety about one or more social situations in which the person is exposed to possible scrutiny by others. Examples include social interactions (e.g., having a conversation, meeting unfamiliar people), being observed (e.g., eating or drinking), and performing in front of others (e.g., giving a speech).<br>
<i>Note, in children the anxiety must occur in peer settings and not just during interactions with adults.</i></li>
<li>The individual fears that he or she will act in a way or show anxiety symptoms that will be negatively evaluated (i.e., will be humiliating or embarrassing; will lead to rejection or offend others).</li>
<li>The social situations almost always provoke fear or anxiety.<br>
<i>Note, fear and anxiety in children may present as crying, tantrums, freezing, or clinging.</i></li>
<li>The social situations are avoided or endured with intense fear or anxiety.</li>
<li>The fear or anxiety is out of propotion to the actual threat posed by the social situation and to the sociocultural context.</li>
<li>The fear, anxiety, or avoidance is persistent, typically lasting for 6 months or more.</li>
<li>The fear, anxiety, or avoidance causes clinically significant distress or impairment in social or occuptational functioning.</li>
<li>The fear, anxiety, or avoidance is not attributable to the effects of a substance or another medical condition.</li>
<li>The fear, anxiety, or avoidance is not better explained by the symptoms of another mental disorder, such as panic disorder, body dysmorphic disorder, or autism spectrum disorder.</li>
<li>If another medical condition (e.g., Parkinson’s disease, obesity, disfigurement from burns or injury) is present, the fear, anxiety, or avoidance is clearly unrelated or is excessive.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Performance only (i.e., speaking or performing in public)</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Normative shyness</li>
<li>Agoraphobia</li>
<li>Panic disorder</li>
<li>GAD</li>
<li>SAD</li>
<li>Specific phobias</li>
<li>Selective mutism</li>
<li>MDD</li>
<li>Body dysmorphic disorder</li>
<li>Delusional disorder</li>
<li>ASD</li>
<li>Personality disorders</li>
<li>Other mental disorders</li>
<li>Other medical conditions</li>
<li>ODD</li>
</ul>
`,sd=Object.freeze(Object.defineProperty({__proto__:null,attributes:JT,html:ZT},Symbol.toStringTag,{value:"Module"})),eE={title:"Specific Phobia",description:"Excessive fear or anxiety about a specific object or situation.",prevalence:"8-12%"},tE=`<p>Somes interesting facts from the DSM:</p>
<ul>
<li>Approximately 75% of those with a specific phobia fear more than one situation or object.</li>
<li>Women are nearly doubly affected by specific phobias.</li>
<li>Specific phobia is associated with both suicidal thoughts and attempts, and is associated with a transition from ideation to attempt; a study in Germany found that 30% of first suicide attempts in individuals 14-24 could be attributed to specific phobia.</li>
<li>People with specific phobia are at increased risk for developing other disorders, such as anxiety disorders, depressive and bipolar disorders, substance-related disorders, somatic symptom and related disorders, and personality disorders, particularly dependent personality disorder.</li>
</ul>
<h2>DSM-5</h2>
<ol>
<li>Marked fear or anxiety about a specific object or situation (e.g., flying, heights, animals, receiving an injection, seeing blood).<br>
<i>Note, fear and anxiety in children may present as crying, tantrums, freezing, or clinging.</i></li>
<li>The phobic object or situation almost always provokes immediate fear or anxiety.</li>
<li>The phobic object or situation is actively avoided or endured with intense fear or anxiety.</li>
<li>The fear or anxiety is out of proportion to the actual danger posed by the specific object or situation and to the sociocultural context.</li>
<li>The fear, anxiety, or avoidance is persistent, typically lasting 6 months or more.</li>
<li>The fear, anxiety, or avoidance causes cinically significant distress or impairment in social or occupational functioning.</li>
<li>The disturbance is not better explained by the symptoms of another mental disorder, including fear, anxiety, and avoidance of situations associated with panic-like symptoms or other incapacitating symptoms (as in agoraphobia); objects or situations related to obsessions (as in OCD); reminders of traumatic events (as in PTSD); separation from home or attachment figures (as in SAD); or social situations (as in social anxiety disorder).</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Phobic stimulus:
<ul>
<li>Animal (spiders, insects, dogs)</li>
<li>Natural environment (heights, storms, water)</li>
<li>Blood-injection-injury (needles, invasive medical procedures)</li>
<li>Situational (airplanes, elevators, enclosed spaces)</li>
<li>Other (situations that may lead to choking or vomiting, loud sounds, costumed characters)</li>
</ul>
</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Agoraphobia</li>
<li>Social anxiety disorder</li>
<li>SAD</li>
<li>Panic disorder</li>
<li>OCD</li>
<li>Trauma- and stressor-related disorders</li>
<li>Eating disorders</li>
<li>Schizophrenia spectrum and other psychotic disorders</li>
</ul>
`,ad=Object.freeze(Object.defineProperty({__proto__:null,attributes:eE,html:tE},Symbol.toStringTag,{value:"Module"})),nE={title:"Substance/Medication-Induced Anxiety Disorder",description:"Panic attacks or anxiety brought on by exposure to or withdrawal from a substance or medication."},iE=`<h2>DSM-5</h2>
<ol>
<li>Panic attacks or anxiety is predominant in the clinical picture.</li>
<li>There is evidence from the history, physical examination, or laboratory findings of both:
<ol>
<li>The symptoms developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.</li>
<li>The involved substance/medication is capable of producing the symptoms.</li>
</ol>
</li>
<li>The disturbance is not better explained by an anxiety disorder that is not substance/medication-induced. Such evidence of an independent anxiety disorder could include the following:<br>
The symptoms precede the onset of the substance/medication use; the symptoms persist for a substantial period of time (e.g., about 1 month) after the cessation of acute withdrawal or severe intoxication; or there is other evidence suggesting the existence of an independent non-substance/medication-induced anxiety disorder (e.g., a history of recurrent nonsubstance/medication-related episodes).</li>
<li>The disturbance does not occur exclusively during the course of a delirium.</li>
<li>The disturbance causes clinically significant distress or impairment in social or occupational functioning.<br>
<i>Note, this diagnosis should be made instead of a diagnosis of substance intoxication or substance withdrawal only when the anxiety symptoms predominate in the clinical picture and they are sufficiently severe to warrant clinical attention.</i></li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With onset during intoxication</li>
<li>With onset during withdrawal</li>
<li>With onset after medication use</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Substance intoxication and substance withdrawal</li>
<li>Independent anxiety disorder (i.e., not induced by a substance/medication)</li>
<li>Delirium</li>
<li>Anxiety disorder due to another medical condition</li>
</ul>
`,ld=Object.freeze(Object.defineProperty({__proto__:null,attributes:nE,html:iE},Symbol.toStringTag,{value:"Module"})),rE={title:"Unspecified Anxiety Disorder",description:"Panic attacks or anxiety that dominate the clinical picture but do not meet full criteria for an unspecified reason."},oE=`<h2>DSM-5</h2>
<p>This category applies to presentations in which symptoms characteristic of an anxiety disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the anxiety disorders diagnostic class, and do not meet criteria for adjustment disorder
with anxiety or adjustment disorder with mixed anxiety and depressed mood. The unspecified anxiety disorder category is used in situations in which the clinician chooses not to specify the reason that the criteria are not met for a specific anxiety disorder and includes presentations in which there is insufficient information to make a more specific diagnosis (e.g., emergency rooms).</p>
`,ud=Object.freeze(Object.defineProperty({__proto__:null,attributes:rE,html:oE},Symbol.toStringTag,{value:"Module"})),sE={title:"Bipolar I Disorder",description:"Recurrent manic episodes, typically alternating with major depressive episodes over time.",prevlance:"1.5%"},aE=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Criteria have been met for at least one manic episode
(Criteria 1–4 under “Manic Episode” below).</li>
<li>At least one manic episode is not better explained by
schizoaffective disorder and is not superimposed on schizophrenia, schizophreniform disorder, delusional disorder, or other specified or unspecified schizophrenia
spectrum and other psychotic disorder.</li>
</ol>
<h6>Manic Episode</h6>
<ol>
<li>A distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally and persistently increased activity or energy, lasting at least 1 week and present most of the day, nearly every day (or any duration if hospitalization is necessary).</li>
<li>During the period of mood disturbance and increased energy or activity, three (or more) of the following symptoms (four if the mood is only irritable) are present to a significant degree and represent a noticeable change from usual behavior:
<ol>
<li>Inflated self-esteem or grandiosity.</li>
<li>Decreased need for sleep (e.g., feels rested after only 3 hours of sleep).</li>
<li>More talkative than usual or pressure to keep talking.</li>
<li>Flight of ideas or subjective experience that thoughts are racing.</li>
<li>Distractibility (i.e., attention too easily drawn to unimportant or irrelevant external stimuli), as reported or observed.</li>
<li>Increase in goal-directed activity (either socially, at work or school, or sexually) or psychomotor agitation (i.e., purposeless non-goal-directed activity).</li>
<li>Excessive involvement in activities that have a high potential for painful consequences (e.g., engaging in unrestrained buying sprees, sexual indiscretions, or foolish business investments).</li>
</ol>
</li>
<li>The mood disturbance is sufficiently severe to cause marked impairment in social or occupational functioning or to necessitate hospitalization to prevent harm to self or others, or there are psychotic features.</li>
<li>The episode is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication, other treatment) or another medical condition.</li>
</ol>
<h6>Hypomanic Episode</h6>
<ol>
<li>A distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally and persistently increased activity or energy, lasting at least 4 consecutive days and present most of the day, nearly every day.</li>
<li>During the period of mood disturbance and increased energy and activity, three (or more) of the following symptoms (four if the mood is only irritable) have persisted, represent a noticeable change from usual behavior, and have been present to a significant degree:
<ol>
<li>Inflated self-esteem or grandiosity.</li>
<li>Decreased need for sleep (e.g., feels rested after only 3 hours of sleep).</li>
<li>More talkative than usual or pressure to keep talking.</li>
<li>Flight of ideas or subjective experience that thoughts are racing.</li>
<li>Distractibility (i.e., attention too easily drawn to unimportant or irrelevant external stimuli), as reported or observed.</li>
<li>Increase in goal-directed activity (either socially, at work or school, or sexually) or psychomotor agitation.</li>
<li>Excessive involvement in activities that have a high potential for painful consequences (e.g., engaging in unrestrained buying sprees, sexual indiscretions, or foolish business investments).</li>
</ol>
</li>
<li>The episode is associated with an unequivocal change in functioning that is uncharacteristic of the individual when not symptomatic.</li>
<li>The disturbance in mood and the change in functioning are observable by others.</li>
<li>The episode is not severe enough to cause marked impairment in social or occupational functioning or to necessitate hospitalization. If there are psychotic features, the episode is, by definition, manic.</li>
<li>The episode is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication, other treatment) or another medical condition.</li>
</ol>
<h6>Major Depressive Episode</h6>
<ol>
<li>Five (or more) of the following symptoms have been present during the same 2-week period and represent a change from previous functioning; at least one of the symptoms is either (a) depressed mood or (b) loss of interest or pleasure.
<ol>
<li>Depressed mood most of the day, nearly every day, as indicated by either subjective report (e.g., feels sad, empty, or hopeless) or observation made by others (e.g., appears tearful). (Note: In children and adolescents, can be irritable mood.)</li>
<li>Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day (as indicated by either subjective account or observation).</li>
<li>Significant weight loss when not dieting or weight gain (e.g., a change of more than 5% of body weight in a month), or decrease or increase in appetite nearly every day. (Note: In children, consider failure to make expected weight gain.)</li>
<li>Insomnia or hypersomnia nearly every day.</li>
<li>Psychomotor agitation or retardation nearly every day (observable by others, not merely subjective feelings of restlessness or being slowed down).</li>
<li>Fatigue or loss of energy nearly every day.</li>
<li>Feelings of worthlessness or excessive or inappropriate guilt (which may be delusional) nearly every day (not merely self-reproach or guilt about being sick).</li>
<li>Diminished ability to think or concentrate, or indecisiveness, nearly every day (either by subjective account or as observed by others).</li>
<li>Recurrent thoughts of death (not just fear of dying), recurrent suicidal ideation without a specific plan, or a suicide attempt or a specific plan for committing suicide.</li>
</ol>
</li>
<li>The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The episode is not attributable to the physiological effects of a substance or another medical condition.<br>
Note: Responses to a significant loss (e.g., bereavement,
financial ruin, losses from a natural disaster, a serious medical illness or disability) may include the feelings of intense sadness, rumination about the loss, insomnia, poor appetite, and weight loss noted in Criterion A, which may resemble a depressive episode. Although such symptoms may be understandable or considered appropriate to the loss, the presence of a major depressive episode in addition to the normal response to a significant loss should also be carefully considered. This decision inevitably requires the exercise of clinical judgment based on the individual’s history and the cultural norms for the expression of distress in the context of loss.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Current or most recent manic episode:
<ul>
<li>Severity (mild, moderate, severe)</li>
<li>With psychotic features</li>
<li>In partial remission</li>
<li>In full remission</li>
</ul>
</li>
<li>Current or most recent hypomanic episode:
<ul>
<li>Severity (mild, moderate, severe)</li>
<li>With psychotic features</li>
<li>In partial remission</li>
<li>In full remission</li>
</ul>
</li>
<li>Current or most recent major depression episode:
<ul>
<li>Severity (mild, moderate, severe)</li>
<li>With psychotic features</li>
<li>In partial remission</li>
<li>In full remission</li>
</ul>
</li>
<li>Current or most recent episode, unspecified:
<ul>
<li>Severity (mild, moderate, severe)</li>
<li>With psychotic features</li>
<li>In partial remission</li>
<li>In full remission</li>
</ul>
</li>
<li>With anxious distress</li>
<li>With mixed features</li>
<li>With rapid cycling</li>
<li>With melancholic features</li>
<li>With atypical features (e.g., mood brightens in response to positive events, hypersomnia, leaden paralysis, long-standing pattern of interpersonal rejection sensitivity)</li>
<li>With mood-congruent psychotic features (i.e., the content of delusions and hallucinations is consistent with the manic themes of grandiosity, invulnerability, etc.)</li>
<li>With mood-incongruent psychotic features (i.e., the content of delusions and hallucinations does not involve the manic themes of grandiosity, invulnerability, etc. or is mixed)</li>
<li>with catatonia</li>
<li>With peripartum onset</li>
<li>With seasonal pattern</li>
<li>Remission status if full criteria are not currently met for a manic, hypomanic, or major depressive episode.</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Bipolar I Disorder, Single Manic Episode, Most Recent Episode Hypomanic, Most Recent Episode Manic, Most Recent Episode Mixed, Most Recent Episode Depressed, Most Recent Episode Unspecified.</p>
<h4>Single Manic Episode</h4>
<ol>
<li>Presence of only one Manic Episode and no past Major Depressive Episodes.<br>
<i>Note: Recurrence is defined as either a change in polarity from depression or an interval of at least 2 months without manic symptoms.</i></li>
<li>The Manic Episode is not better accounted for by Schizoaffective Disorder and is not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Mixed: if symptoms meet criteria for a Mixed Episode</li>
<li>Severity/Psychotic/Remission Specifiers</li>
<li>With Catatonic Features</li>
<li>With Postpartum Onset</li>
</ul>
<h4>Most Recent Episode Hypomanic</h4>
<ol>
<li>Currently (or most recently) in a Hypomanic Episode.</li>
<li>There has previously been at least one Manic Episode or Mixed Episode.</li>
<li>The mood symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The mood episodes in Criteria A and B are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Longitudinal Course Specifiers (With and Without Interepisode Recovery)</li>
<li>With Seasonal Pattern</li>
<li>With Rapid Cycling</li>
</ul>
<h4>Most Recent Episode Manic</h4>
<ol>
<li>Currently (or most recently) in a Manic Episode.</li>
<li>There has previously been at least one Major Depressive Episode, Manic Episode, or Mixed Episode.</li>
<li>The mood episodes in Criteria 1 and 2 are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Longitudinal Course Specifiers (With and Without Interepisode Recovery)</li>
<li>With Seasonal Pattern</li>
<li>With Rapid Cycling<br>
(For current or most recent episode)</li>
<li>Severity/Psychotic/Remission Specifiers</li>
<li>With Catatonic Features</li>
<li>With Postpartum Onset</li>
</ul>
<h4>Most Recent Episode Mixed</h4>
<ol>
<li>Currently (or most recently) in a Mixed Episode</li>
<li>There has previously been at least one Major Depressive Episode, Manic Episode, or Mixed Episode</li>
<li>The mood episodes in Criteria A and B are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Longitudinal Course Specifiers (With and Without Interepisode Recovery)</li>
<li>With Seasonal Pattern</li>
<li>With Rapid Cycling<br>
(For current and most recent episode)</li>
<li>Severity/Psychotic/Remission Specifiers</li>
<li>With Catatonic Features</li>
<li>With Postpartum Onset</li>
</ul>
<h4>Most Recent Episode Depressed</h4>
<ol>
<li>Currently (or most recently) in a Major Depressive Episode</li>
<li>There has previously been at least one Manic Episode or Mixed Episode</li>
<li>The mood episodes in Criteria 1 and 2 are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Longitudinal Course Specifiers (With and Without Interepisode Recovery)</li>
<li>With Seasonal Pattern</li>
<li>With Rapid Cycling<br>
(For current and most recent episode)</li>
<li>Severity/Psychotic/Remission Specifiers</li>
<li>Chronic</li>
<li>With Melancholic Features</li>
<li>With Atypical Features</li>
<li>With Postpartum Onset</li>
</ul>
<h4>Most Recent Episode Unspecified</h4>
<ol>
<li>Criteria, except for duration, are currently (or most recently) met for a Manic, a Hypomanic, a Mixed, or a Major Depressive Episode</li>
<li>There has previously been at least one Manic Episode or Mixed Episode</li>
<li>The mood symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The mood symptoms in Criteria A and B are not better accounted for by Schizoaffective Disorder and are not superimposed on Schizophrenia, Schizophreniform Disorder, Delusional Disorder, or Psychotic Disorder Not Otherwise Specified.</li>
<li>The mood symptoms in Criteria 1 and 2 are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication, or other treatment) or a general medical condition (e.g., hyperthyroidism).</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Longitudinal Course Specifiers (With and Without Interepisode Recovery)</li>
<li>With Seasonal Pattern</li>
<li>With Rapid Cycling</li>
</ul>
<h6>Manic Episode</h6>
<ol>
<li>A distinct period of abnormally and persistently elevated, expansive, or irritable mood, lasting at least 1 week (or any duration if hospitalization is necessary).</li>
<li>During the period of mood disturbance, three (or more) of the following symptoms have persisted (four if the mood is only irritable) and have been present to a significant degree:
<ol>
<li>Inflated self-esteem or grandiosity</li>
<li>Decreased need for sleep (e.g., feels rested after only 3 hours of sleep)</li>
<li>More talkative than usual or pressure to keep talking</li>
<li>Flight of ideas or subjective experience that thoughts are racing</li>
<li>Distractibility (i.e., attention too easily drawn to unimportant or irrelevant external stimuli)</li>
<li>Increase in goal-directed activity (either socially, at work or school, or sexually) or psychomotor agitation</li>
<li>Excessive involvement in pleasurable activities that have a high potential for painful consequences (e.g., engaging in unrestrained buying sprees, sexual indiscretions, or foolish business investments)</li>
</ol>
</li>
<li>The symptoms do not meet criteria for a Mixed Episode</li>
<li>The mood disturbance is sufficiently severe to cause marked impairment in occupational functioning or in usual social activities or relationships with others, or to necessitate hospitalization to prevent harm to self or others, or there are psychotic features.</li>
<li>The symptoms are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication, or other treatment) or a general medical condition (e.g., hyperthyroidism).</li>
</ol>
<h6>Mixed Episode</h6>
<ol>
<li>The criteria are met both for a Manic Episode and for a Major Depressive Episode (except for duration) nearly every day during at least a 1-week period.</li>
<li>The mood disturbance is sufficiently severe to cause marked impairment in occupational functioning or in usual social activities or relationships with others, or to necessitate hospitalization to prevent harm to self or others, or there are psychotic features.</li>
<li>The symptoms are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication, or other treatment) or a general medical condition (e.g., hyperthyroidism).</li>
</ol>
<h6>Hypomanic Episode</h6>
<ol>
<li>A distinct period of persistently elevated, expansive, or irritable mood, lasting throughout at least 4 days, that is clearly different from the usual nondepressed mood.</li>
<li>During the period of mood disturbance, three (or more) of the following symptoms have persisted (four if the mood is only irritable) and have been present to a significant degree:
<ol>
<li>Inflated self-esteem or grandiosity</li>
<li>Decreased need for sleep (e.g., feels rested after only 3 hours of sleep)</li>
<li>More talkative than usual or pressure to keep talking</li>
<li>Flight of ideas or subjective experience that thoughts are racing</li>
<li>Distractibility (i.e., attention too easily drawn to unimportant or irrelevant external stimuli)</li>
<li>Increase in goal-directed activity (either socially, at work or school, or sexually) or psychomotor agitation</li>
<li>Excessive involvement in pleasurable activities that have a high potential for painful consequences (e.g., the person engages in unrestrained buying sprees, sexual indiscretions, or foolish business investments)</li>
</ol>
</li>
<li>The episode is associated with an unequivocal change in functioning that is uncharacteristic of the person when not symptomatic.</li>
<li>The disturbance in mood and the change in functioning are observable by others.</li>
<li>The episode is not severe enough to cause marked impairment in social or occupational functioning, or to necessitate hospitalization, and there are no psychotic features.</li>
<li>The symptoms are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication, or other treatment) or a general medical condition (e.g., hyperthyroidism).</li>
</ol>
<h6>Major Depressive Episode</h6>
<ol>
<li>Five (or more) of the following symptoms have been present during the same 2-week period and represent a change from previous functioning; at least one of the symptoms is either (1) depressed mood or (2) loss of interest or pleasure.
<ol>
<li>Depressed mood most of the day, nearly every day, as indicated by either subjective report (e.g., feels sad or empty) or observation made by others (e.g., appears tearful). Note: In children and adolescents, can be irritable mood.</li>
<li>Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day (as indicated by either subjective account or observation made by others)</li>
<li>Significant weight loss when not dieting or weight gain (e.g., a change of more than 5% of body weight in a month), or decrease or increase in appetite nearly every day. Note: In children, consider failure to make expected weight gains.</li>
<li>Insomnia or hypersomnia nearly every day</li>
<li>Psychomotor agitation or retardation nearly every day (observable by others, not merely subjective feelings of restlessness or being slowed down)</li>
<li>Fatigue or loss of energy nearly every day</li>
<li>Feelings of worthlessness or excessive or inappropriate guilt (which may be delusional) nearly every day (not merely self-reproach or guilt about being sick)</li>
<li>Diminished ability to think or concentrate, or indecisiveness, nearly every day (either by subjective account or as observed by others)</li>
<li>Recurrent thoughts of death (not just fear of dying), recurrent suicidal ideation without a specific plan, or a suicide attempt or a specific plan for committing suicide</li>
</ol>
</li>
<li>The symptoms do not meet criteria for a Mixed Episode</li>
<li>The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The symptoms are not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition (e.g., hypothyroidism).</li>
<li>The symptoms are not better accounted for by Bereavement, i.e., after
the loss of a loved one, the symptoms persist for longer than 2 months or are characterized by marked functional impairment, morbid preoccupation with worthlessness, suicidal ideation, psychotic symptoms, or psychomotor retardation.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Bipolar disorder, Mixed, Manic, or Depressed.</p>
<ol>
<li></li>
</ol>
`,cd=Object.freeze(Object.defineProperty({__proto__:null,attributes:sE,html:aE},Symbol.toStringTag,{value:"Module"})),lE={title:"Bipolar II Disorder",description:"Recurrent hypomanic episodes, typically alternating with major depressive episodes over time."},uE=`<p>The DSM-5 no longer considers bipolar II to be a less severe diagnosis than bipolar I, insofar as the burden of depression and unstable moods in bipolar II often incur serious impairments in social and work life.</p>
<h2>DSM-5</h2>
<ol>
<li>One or more hypomanic episode(s) and one or more major depressive episode(s) as specified by:<br>
<br>
<i>Hypomanic Episode</i>
<ol>
<li>A distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally and persistently increased activity or energy, lasting at least 4 consecutive days and present most of the day, nearly every day.</li>
<li>During the period of mood disturbance and increased energy or activity, three or more of the following symptoms have persisted (four if the mood is only irritable), represent a noticeable change from usual behavior, and have been present to a significant degree:
<ol>
<li>Inflated self-esteem or grandiosity.</li>
<li>Decreased need for sleep (e.g., feeling rested after only 3 hours of sleep).</li>
<li>More talkative than usual or pressured to keep talking.</li>
<li>Flight of ideas or subjective experience that thoughts are racing.</li>
<li>Distractibility (i.e., attention is too easily drawn to unimportant or irrelevant external stimuli) as reported or observed.</li>
<li>Increased goal-directed activity (socially, at work or school, or sexually) or psychomotor agitation.</li>
<li>Excessive involvement in activities that have a high potential for painful consequences (e.g., engaging in unrestrained buying sprees, sexual indescretions, foolish business investments).</li>
</ol>
</li>
<li>The episode is associated with an unequivocal change in functioning that is uncharacteristic of the individual when not symptomatic.</li>
<li>The symptoms and change in functioning are observable by others.</li>
<li>The episode is not severe enough to cause marked impairment in social or occupational functioning or necessitate hospitalization.<br>
<i>Note, if there are psychotic features, the episode is manic by definition.</i></li>
<li>The episode is not attributable to the physiological effects of a substance or another medical condition.
<br>
<i>Major Depressive Episode</i></li>
<li>Five or more of the following symptoms have been present during the same 2-week period and represent a change from previous functioning (at least one symptom must be depressed mood or loss of interest/pleasure):
<ol>
<li>Depressed mood most of the day, nearly every day, indicated by subjective report (e.g., feels sad, empty, hopeless) or observation by others (e.g., appears tearful).<br>
<i>Note, in children and adolescents this can be irritable mood.</i></li>
<li>Loss of interest or pleasure in almost all activities most of the day, nearly every day (indicated by subjective report or observation by others).</li>
<li>Significant unintentional weight loss/gain (e.g., more than 5% of body weight in a month) or descrease/increase in appetite nearly every day.<br>
<i>Note, in children, failure to make expected weight gains.</i></li>
<li>Insomnia or hypersomnia nearly every day.</li>
<li>Psychomotor agitation or retardation nearly every day severe enough to be observable by others.</li>
<li>Fatigue or low energy neary every day.</li>
<li>Feelings of worthlessness or excessive, inappropriate, or delusional guilt (i.e., not merely self-reproach or guilt about being sick).</li>
<li>Impaired ability to think, concentrate, or make decisions nearly every day as indicated by subjective report or observation by others.</li>
<li>Recurrent thoughts of death (not just fear of dying), recurrent suicidal ideation without a specific plan, a specific plan for committing suicide or one or more suicide attempts.</li>
</ol>
</li>
<li>The symptoms cause clinically significant distress or impairment in social or occupational functioning.</li>
<li>The symptoms cannot be accounted for by substance use or a medical condition.</li>
</ol>
</li>
<li>There has never been a full manic episode.</li>
<li>The hypomanic episode(s) and major depressive episode(s) is not better explained by schizoaffective disorder, schizophrenia, schizophreniform disorder, delusional disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorder.</li>
<li>The symptoms of depression or the unpredictability caused by frequent alternation between periods of depression and hypomania causes clinically significant distress or impairment in social or occupational functioning.</li>
</ol>
<h6>Specifiers</h6>
<p>Current or most recent episodes:</p>
<ul>
<li>Hypomanic
<ul>
<li>With anxious distress</li>
<li>With mixed features</li>
<li>With rapid cycling</li>
<li>With peripartum onset</li>
<li>With seasonal pattern</li>
</ul>
</li>
<li>Depressed
<ul>
<li>With anxious distress</li>
<li>With mixed features</li>
<li>With rapid cycling</li>
<li>With melancholic features</li>
<li>With atypical features</li>
<li>With mood-congruent psychotic features</li>
<li>With mood-incongruent psychotic features</li>
<li>With catatonia</li>
<li>With peripartum onset</li>
<li>With seasonal pattern</li>
</ul>
</li>
<li>In partial remission</li>
<li>In full remission</li>
<li>Severity of major depressive episode if present (mild, moderate, severe)</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>MDD</li>
<li>Schizoaffective disorder</li>
<li>Schizophrenia</li>
<li>Bipolar and related disorder due to another medical condition</li>
<li>Substance/medication-induced bipolar and related disorder</li>
<li>ADHD</li>
<li>Personality disorders</li>
<li>Other bipolar disorders</li>
</ul>
`,dd=Object.freeze(Object.defineProperty({__proto__:null,attributes:lE,html:uE},Symbol.toStringTag,{value:"Module"})),cE={title:"Bipolar and Related Disorder Due to Another Medical Condition",description:"Prominent bipolar symptoms caused by another medication condition."},dE=`<h2>DSM-5</h2>
<ol>
<li>A prominent and persistent disturbance in mood that predominates in the clinical picture and is characterized by abnormally elevated, expansive, or irritable mood and abnormally increased activity or energy.</li>
<li>There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.</li>
<li>The disturbance is not better explained by another mental disorder.</li>
<li>The disturbance does not occur exclusively during the course of delirium.</li>
<li>The disturbance causes clinically significant distress or impairment in social or occupational functioning, or necessitates hospitalization to prevent harm
to self or others, or there are psychotic features.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With manic features</li>
<li>With manic- or hypomanic-like episode</li>
<li>With mixed features (i.e., symptoms of depression are also present but do not predominate in the clinical picture)</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Delirium and major or mild neurocognitive disorder</li>
<li>Symptoms of catatonia and acute anxiety</li>
<li>Medication-induced depressive or manic symptoms</li>
</ul>
`,hd=Object.freeze(Object.defineProperty({__proto__:null,attributes:cE,html:dE},Symbol.toStringTag,{value:"Module"})),hE={title:"Cyclothymic Disorder",description:"Mood cycling between hypomania and depressive episodes over two years that does not meet the criteria for bipolar I or II.",prevalence:"0.04-2.5%"},fE=`<h2>DSM-5</h2>
<ol>
<li>For at least 2 years (or 1 year for children and adolescents), there have been hypomanic and depressive experiences that do not meet the full criteria for hypomania or major depressive disorder.</li>
<li>During the 2 year period (1 year for children and adolescents) the symptoms have been present at least half the time, with no more than two months of symptom remission.</li>
<li>Criteria for a major depressive, manic, or hypomanic episode have never been met.</li>
<li>The symptoms cannot be attributed to schizophrenia, schizoaffective disorder, schizophreniform disorder,  delusional disorder, or another psychotic disorder.</li>
<li>The symptoms cannot be accounted for by substance use or a medical condition.</li>
<li>The symptoms cause significant distress or impairment in social or occupational functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With anxious distress</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Bipolar I disorder, with rapid cycling</li>
<li>Bipolar II disorder, with rapid cycling</li>
<li>Bipolar and related disorder due to another medical condition</li>
<li>Substance/medication-induced bipolar and related disorder</li>
<li>Substance/medication-induced depressive disorder</li>
<li>BPD<br>
<i>Note, mood lability in BPD is distinctly unstable, changing from anger to sadness to anxiety within the span of minutes, whereas the cyclothymic changes in mood have a more stable quality even though they can cycle between hypomania to depression within one day.</i></li>
</ul>
`,fd=Object.freeze(Object.defineProperty({__proto__:null,attributes:hE,html:fE},Symbol.toStringTag,{value:"Module"})),pE={title:"Other Specified Bipolar and Related Disorder",description:"Bipolar symptoms with a specific reason for not meeting criteria for other bipolar diagnoses."},mE=`<p>This diagnosis is given when characteristic bipolar symptoms cause clinically significant distress or impairment in social or occupational functioning, but do not meet the full criteria for any more specific bipolar disorder. The &quot;other specified&quot; category is used when clinicians choose to communicate the specific reason that the the criteria are not met, such as:</p>
<ul>
<li>Short-duration hypomanic episodes (2-3 days) and major depressive episodes.</li>
<li>Hypomanic episodes with insufficient symptoms and major depressive episodes.</li>
<li>Hypomanic episode without prior major depressive episode.</li>
<li>Short-duration cyclothymia (less than 2 years).</li>
<li>Manic episode superimposed on schizophrenia, schizophreniform disorder, delusional disorder, or other specified and unspecified schizophrenia spectrum and other psychotic disorder.</li>
</ul>
`,pd=Object.freeze(Object.defineProperty({__proto__:null,attributes:pE,html:mE},Symbol.toStringTag,{value:"Module"})),gE={title:"Substance/Medication-Induced Bipolar and Related Disorder",description:"Prominent bipolar symptoms during or soon after substance/medication use or withdrawal."},yE=`<p>This diagnosis is given instead of substance intoxication or substance withdrawal only when the bipolar symptoms predominate and are sufficiently severe to warrant clinical attention.</p>
<h2>DSM-5</h2>
<ol>
<li>A prominent and persistent disturbance in mood that predominates in the clinical picture and is characterized by abnormally elevated, expansive, or irritable mood and abnormally increased activity or energy.</li>
<li>There is evidence from the history, physical examination, or laboratory findings of both:
<ol>
<li>The symptoms developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.</li>
<li>The involved substance/medication is capable of producing the symptoms.</li>
</ol>
</li>
<li>The disturbance is not better explained by a bipolar or related disorder that is not substance/medication-induced.</li>
<li>The disturbance does not occur exclusively during the course of delirium.</li>
<li>The disturbance causes clinically significant distress or impairment in social or occupational functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With onset during intoxication</li>
<li>With onset during withdrawal</li>
<li>With onset after medication use</li>
</ul>
`,md=Object.freeze(Object.defineProperty({__proto__:null,attributes:gE,html:yE},Symbol.toStringTag,{value:"Module"})),bE={title:"Unspecified Bipolar and Related Disorder",description:"Bipolar symptoms without a specific reason for not meeting criteria for other bipolar diagnoses."},vE=`<p>This diagnosis is given when characteristic bipolar symptoms cause clinically significant distress or impairment in social or occupational functioning, but do not meet the full criteria for any more specific bipolar disorder. The &quot;unspecified&quot; category is used when clinicians choose not to communicate the specific reason that the the criteria are not met, including presentiations in which there is insufficient information to make a more specific diagnosis (e.g., emergency rooms).</p>
`,gd=Object.freeze(Object.defineProperty({__proto__:null,attributes:bE,html:vE},Symbol.toStringTag,{value:"Module"})),TE={title:"Unspecified Mood Disorder",description:"Mood disturbance symptoms that do not meet full critiria for a bipolar or depressive disorder, and it is difficult to distinguish between unspecific bipolar disorder or unspecified depressive disorder."},EE=`<p>This diagnosis is given when characteristic mood disorder symptoms predominate and cause clinically significant impairment in social or occupational functioning but do not meet the full criteria for any bipolar or depressive disorders and it is difficult to choose between unspecific bipolar and related disorder and unspecified depressive disorder (e.g., acute agitation).</p>
`,yd=Object.freeze(Object.defineProperty({__proto__:null,attributes:TE,html:EE},Symbol.toStringTag,{value:"Module"})),_E={title:"Depressive Disorder Due to Another Medical Condition",description:"Persistent depressed mood or lack of interest or pleasure due to another medical condition."},xE=`<h2>DSM-5</h2>
<ol>
<li>A prominent and persistent disturbance in mood that predominates in the clinical picture and is characterized by depressed mood or markedly diminished interest or pleasure in all, or almost all, activities.</li>
<li>There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.</li>
<li>The symptoms are not better explained by another mental disorder (e.g., adjustment disorder, with depressed mood, in
which the stressor is a serious medical condition).</li>
<li>The symptoms do not occur exclusively during the course of delirium.</li>
<li>The symptoms cause clinically significant distress or impairment in social or occupational functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With depressive features (i.e., full criteria for a major depressive episode are not met)</li>
<li>With major depressive-like episode (i.e., full criteria except Criterion 3 are met for a major depressive episode)</li>
<li>With mixed features (symptoms of mania or hypomania are also present but do not dominate the clinical picture)</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Depressive disorders not due to another medical condition</li>
<li>Delirium and major or mild neurocognitive disorder</li>
<li>Adjustment disorders</li>
<li>Demoralization<br>
<i>Note, Demoralization typically lacks the anhedonia associated with depressive disorder due to another medical condition, and individuals will generally find pleasure in previously meaningful activities and be able to experience moments of happiness.</i></li>
</ul>
`,bd=Object.freeze(Object.defineProperty({__proto__:null,attributes:_E,html:xE},Symbol.toStringTag,{value:"Module"})),SE={title:"Disruptive Mood Dysregulation Disorder",description:"Chronic severe irritability in children lasting over one year.",acronyms:"DMDD"},wE=`<p>This diagnosis was added to the DSM-5 to address concerns about the overdiagnosis of bipolar disorder in children. Rates of conversion from severe, nonepisodic irritability to bipolar disorder are very low, and children diagnosed with DMDD are more at risk of developing unipolar depressive and/or anxiety disorders in adulthood.</p>
<h2>Diagnostic Critiera</h2>
<ol>
<li>Severe recurrent temper outbursts (verbal or physical aggression) that are grossly out of proportion in intensity and duration to the situation or provocation.</li>
<li>The temper outbursts are inconsistent with developmental level.</li>
<li>The temper outbursts occur, on average, three or more times per week.</li>
<li>The mood between temper outbursts is persistently irritable or angry most of the day, nearly every day, and is observable by others.</li>
<li>The symptoms above have been present for 12 or more months; throughout that period, there has not been a period of 3 or more consecutive months without all of the symptoms above.</li>
<li>The symptoms are present in at least 2 of 3 settings — at home, at school, with peers — and are severe in at least 1 of these.</li>
<li>The diagnosis should not be made for the first time before age 6 or after age 18.</li>
<li>By history or observation, the age of onset is before 10 years.</li>
<li>There has never been a distinct period lasting more than 1 day during which the full symptoms criteria (except duration) for a manic or hypomanic episode have been met.</li>
<li>The behaviors do not occur exclusively during an episode of MDD and are not better explained by another mental disorder (e.g., ASD, PTSD, SAD).<br>
<i>Note, this diagnosis cannot coexist with ODD, intermittent explosive disorder, or bipolar disorder, but it can exist with others like MDD, ADHD, conduct disorder, and substance use disorders. If the person has ever met the criteria for a manic or hypomanic episode, the diagnosis DMDD should not be assigned. If the person fulfills criteria for ODD, the diagnosis should only be DMDD.</i></li>
<li>The symptoms are not attributable to the physiological effects of a substance or another medical or neurological condition.</li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>Bipolar disorders<br>
<i>Note, bipolar disorders manifest in children, as they do in adults, in discrete episodes of mood perturbation, whereas in DMDD the irritable mood is persistent over many months.</i></li>
<li>ODD<br>
<i>Note, while the symptoms of ODD and DMDD are quite similar, the persistent mood symptoms of DMDD are rare in children with ODD.</i></li>
<li>ADHD</li>
<li>MDD</li>
<li>Anxiety disorders</li>
<li>ASD</li>
<li>Intermittent explosive disorder</li>
</ul>
`,vd=Object.freeze(Object.defineProperty({__proto__:null,attributes:SE,html:wE},Symbol.toStringTag,{value:"Module"})),DE={title:"Major Depressive Disorder",description:"Depressed mood and loss of interest or pleasure in nearly all activities for at least two weeks, along with psychomotor, behavioral, and cognitive changes.",prevalence:"7%"},IE=`<h2>DSM-5</h2>
<ol>
<li>Five or more of the following symptoms have been present during the same 2-week period and represent a change from previous functioning. At least one of the symptoms is either depressed mood or loss of interest or pleasure.
<ol>
<li>Depressed mood most of the day, nearly every day, as indicated by either subjective report (e.g., feels sad, empty, hopeless) or observation by others (e.g., appears tearful).<br>
<i>Note, in children and adolescents, this can be irritable mood.</i></li>
<li>Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day.</li>
<li>Significant weight loss when not dieting or weight gain.</li>
<li>Insomnia or hypersomnia nearly every day.</li>
<li>Psychomotor agitation or retardation nearly every day that is observable to others.</li>
<li>Fatigue or loss of energy nearly every day.</li>
<li>Feelings of worthlessness or excessive/inappropriate guilt nearly every day.</li>
<li>Diminished ability to think or concentrate, or indecisiveness, nearly every day.</li>
<li>Recurrent thoughts about death (not just fear of dying), recurrent suicidal ideation without a specific plan, or a suicide attempt or specific plan for committing suicide.</li>
</ol>
</li>
<li>The symptoms cause clinically significant distress or impairment in social or occupational functioning.</li>
<li>The episode is not attributable to the physiological effects of a substance or another medical condition.</li>
<li>At least one major depressive episode is not better explained by schizoaffective disorder and is not superimposed on schizophrenia, schizophreniform disorder, delusional disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorders.</li>
<li>There has never been a manic episode or a hypomanic episode.<br>
<i>This exclusion does not apply if any manic- or hypomanic-like episodes were substance-induced or attributable to the effects of another medical condition.</i></li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Severity:
<ul>
<li>Mild</li>
<li>Moderate</li>
<li>Severe</li>
</ul>
</li>
<li>With psychotic features</li>
<li>In partial remission</li>
<li>In full remission</li>
<li>Unspecified</li>
<li>With anxious distress</li>
<li>With mixed features</li>
<li>With melancholic features</li>
<li>With atypical features</li>
<li>With mood-congruent psychotic features</li>
<li>With mood-incongruent psychotic features</li>
<li>With catatonia</li>
<li>With peripartum onset</li>
<li>With seasonal pattern</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Manic episodes with irritable mood or with mixed features</li>
<li>Bipolar I disorder, bipolar II disorder, or other specified bipolar and related disorder</li>
<li>Depressive disorder due to another medical condition</li>
<li>Substance-medication-induced depressive disorder</li>
<li>Persistent depressive disorder</li>
<li>Premenstrual dysphoric disorder</li>
<li>DMDD</li>
<li>Major depressive episodes superimposed on schizophrenia, delusional disorder, schizophreniform disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorder.</li>
<li>Schizoaffective disorder</li>
<li>ADHD</li>
<li>Adjustment disorder with depressed mood</li>
<li>Bereavement</li>
<li>Sadness<br>
<i>Note, periods of sadness are inherent parts of the human experience and should not be diagnosed as MDD unless criteria are met for severity, duration, and functional impairment.</i></li>
</ul>
`,Td=Object.freeze(Object.defineProperty({__proto__:null,attributes:DE,html:IE},Symbol.toStringTag,{value:"Module"})),kE={title:"Other Specified Depressive Disorder",description:"Depressed mood or lack of interest or pleasure that dominate the clinical picture but do not meet full criteria for a specified reason."},CE=`<p>This diagnosis is given when characteristic symptoms of a depressive disorder cause clinically
significant distress or impairment in social or occupational functioning and predominate the clinical picture, but do not meet the full criteria for any of the disorders in the depressive disorders class and do not meet criteria for adjustment disorder with depressed mood or adjustment disorder with mixed anxiety and depressed mood. The &quot;other&quot; specified depressive disorder category is used when the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for any specific depressive disorder. Some examples include:</p>
<ul>
<li>Recurrent brief depression — depressed mood and at least four other symptoms of depression for 2-13 days at least once per month (not associated with menstrual cycle) for at least 12 consecutive months.</li>
<li>Short-duration depressive episode (4-13 days)</li>
<li>Depressive episode with insufficient symptoms</li>
<li>Major depressive episode superimposed on schizophrenia, schizophreniform disorder, delusional disorder, or other specified and unspecified schizophrenia spectrum and other psychotic disorder.</li>
</ul>
`,Ed=Object.freeze(Object.defineProperty({__proto__:null,attributes:kE,html:CE},Symbol.toStringTag,{value:"Module"})),AE={title:"Persistent Depressive Disorder",description:"Depressed mood for more days than not over a 2-year period."},OE=`<p>The DSM-5 consolidated chronic MDD and dysthymic disorder into persistent depressive disorder, which is characterized by a 2-year period of depressed mood for more days than not. If criteria for a major depressive epsidoe are met at any time within the 2-year period, both MDD and persistent depressive disorder, with intermittent major depressive epidoes should be diagnosed.</p>
<h2>DSM-5</h2>
<ol>
<li>Depressed mood for most of the day, for more days than not, as indicated by either subjective account or observation by others, for at least 2 years.<br>
<i>Note, in children and adolescents, mood can be irritable and duration must be ast least 1 year</i></li>
<li>Two or more of the following symptoms must be present duration depressed mood:
<ol>
<li>Poor appetite or overeating</li>
<li>Insomnia or hypersomnia</li>
<li>Low energy or fatigue</li>
<li>Low self-esteem</li>
<li>Poor concentration or difficulty making decisions</li>
<li>Feelings of hopelessness</li>
</ol>
</li>
<li>During the 2-year period (1 year for children or adolescents) of symptoms, there has never been a period for more than 2 months without symptoms.</li>
<li>Criteria for a major depressive episode may be continuously present for 2 years.</li>
<li>There has never been a manic or hypomanic episode.</li>
<li>The symptoms are not better explained by a persistent schizoaffective disorder, schizophrenia, delusional disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorder.</li>
<li>The symptoms are not attributable to the physiological effects of a substance or another medical condition.</li>
<li>The symptoms cause clinically significant distress or impairment in social or occupational functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With anxious distress</li>
<li>With atypical features</li>
<li>In partial remission</li>
<li>In full remission</li>
<li>Early onset (before 21 years of age)</li>
<li>Late onset (at 21 years of age or older)</li>
<li>With pure dysthymic syndrome (criteria for major depressive episode have not been met in the preceding 2 years)</li>
<li>With persistent major depressive episode (criteria for major depressive episode have been met throughout the preceding 2 years)</li>
<li>With intermittent major depressive episodes, with current episode</li>
<li>With intermittent major depressive episodes, without current episode</li>
<li>Severity:
<ul>
<li>Mild</li>
<li>Moderate</li>
<li>Severe</li>
</ul>
</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>MDD</li>
<li>Other specified depressive disorder</li>
<li>Bipolar I and bipolar II disorders</li>
<li>Cyclothymic disorder</li>
<li>Psychotic disorders</li>
<li>Depressive or bipolar and related disorder due to another medical condition</li>
<li>Substance/medication-induced depressive or bipolar and related disorder</li>
<li>Personality disorders</li>
</ul>
`,_d=Object.freeze(Object.defineProperty({__proto__:null,attributes:AE,html:OE},Symbol.toStringTag,{value:"Module"})),NE={title:"Premenstrual Dysphoric Disorder",description:"Marked differences in mood, energy levels, behavior and relationships with others during the onset of menses.",prevalence:"1.3-5.8%"},PE=`<h2>DSM-5</h2>
<ol>
<li>In the majority of menstrual cycles during the preceding year, at least five symptoms must be present in the final week before onset of menses, start to <i>improve</i> within a few days after the onset of menses, and become <i>minimal</i> or abset in the week postmenses.<br>
<i>Note, these should be confirmed by prospective daily ratings during at least two symptomatic cycles.</i>
<ol>
<li>One or more of the following must be present of the five (when combined with those listed in (b)):
<ol>
<li>Marked affective lability — mood swings, feeling suddenly sad or tearful, increased sensitivity to rejection.</li>
<li>Marked irritability or anger or increased interpersonal conflicts.</li>
<li>Marked depressed mood, feelings of hopelessness, or self-deprecating thoughts.</li>
<li>Marked anxiety, tension, and/or feelings of being keyed up or on edge.</li>
</ol>
</li>
<li>One or more of the following must be present of the five (when combined with those listed in (a)):
<ol>
<li>Decreased interest in usual activities</li>
<li>Subjective difficulty in concentration</li>
<li>Lethargy, easy fatiguability, or marked lack of energy</li>
<li>Marked change in appetite — overeating, specific food cravings</li>
<li>Hypersomnia or insomnia</li>
<li>A sense of being overwhelmed or out of control</li>
<li>Physical symptoms — breast tenderness or swelling, joint or muscle pain, a sensation of bloating or weight gain.</li>
</ol>
</li>
</ol>
</li>
<li>The symptoms cause clinically significant distress or interference in social or occupational activities.</li>
<li>The symptoms are not merely an exacerbation of the symptoms of another disorder, such as MDD, panic disorder, persistent depressive disorder, or a personality disorder (although it may co-occur with any of these).</li>
<li>The symptoms are not attributable to the effects of a substance or another medical condition.</li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>Premenstrual syndrome</li>
<li>Dysmenorrhea</li>
<li>Bipolar disorder, MDD, and persistent depressive disorder</li>
<li>Use of hormonal treatments</li>
<li>Other medical conditions</li>
</ul>
`,xd=Object.freeze(Object.defineProperty({__proto__:null,attributes:NE,html:PE},Symbol.toStringTag,{value:"Module"})),ME={title:"Substance/Medication-Induced Depressive Disorder",description:"Persistent depressed mood and loss of interest or pleasure due to intoxication, use, or withdrawal from a substance or medication."},RE=`<h2>DSM-5</h2>
<ol>
<li>Depressed mood or markedly diminished interest or pleasure in almost all activities that dominates in the clinical picture.</li>
<li>There is evidence from the history, physical examination, or laboratory findings of both:
<ol>
<li>The symptoms developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.</li>
<li>The substance/medication is capable of producing the symptoms.</li>
</ol>
</li>
<li>The symptoms are not better explained by a depressive disorder that is not substance/medication-induced (e.g., symptoms preceded the substance/medication use).</li>
<li>The symptoms do not occur exclusively during the course of delirium.</li>
<li>The symptoms cause clinically significant distress or impairment in social or occupational functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With onset during intoxication</li>
<li>With onset during withdrawal</li>
<li>With onset after medication use</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Substance intoxication and withdrawal</li>
<li>Independent depressive disorder</li>
<li>Depressive disorder due to another medical condition</li>
</ul>
`,Sd=Object.freeze(Object.defineProperty({__proto__:null,attributes:ME,html:RE},Symbol.toStringTag,{value:"Module"})),LE={title:"Unpecified Depressive Disorder",description:"Depressed mood or lack of interest or pleasure that dominate the clinical picture but do not meet full criteria for an unspecified reason."},FE=`<p>This diagnosis is given when characteristic symptoms of a depressive disorder cause clinically
significant distress or impairment in social or occupational functioning and predominate the clinical picture, but do not meet the full criteria for any of the disorders in the depressive disorders class and do not meet criteria for adjustment disorder with depressed mood or adjustment disorder with mixed anxiety and depressed mood. The &quot;unspecified&quot; depressive disorder category is used when the clinician chooses not to communicate the specific reason that the presentation does not meet the criteria for any specific depressive disorder, or when there is insufficient information to make a more specific diagnosis (e.g., emergency rooms).</p>
`,wd=Object.freeze(Object.defineProperty({__proto__:null,attributes:LE,html:FE},Symbol.toStringTag,{value:"Module"})),BE={title:"Unspecified Mood Disorder",description:"Mood disturbance symptoms that do not meet full critiria for a bipolar or depressive disorder, and it is difficult to distinguish between unspecific bipolar disorder or unspecified depressive disorder."},zE=`<p>This diagnosis is given when characteristic mood disorder symptoms predominate and cause clinically significant impairment in social or occupational functioning but do not meet the full criteria for any bipolar or depressive disorders and it is difficult to choose between unspecific bipolar and related disorder and unspecified depressive disorder (e.g., acute agitation).</p>
<h6>Specifiers</h6>
<ul>
<li>With anxious distress</li>
<li>With mixed features</li>
<li>With melancholic features</li>
<li>With atypical features</li>
<li>With psychotic features
<ul>
<li>With mood-congruent psychotic features</li>
<li>With mood-incongruent psychotic features</li>
</ul>
</li>
<li>With catatonia</li>
<li>With peripartum onset</li>
<li>With seasonal pattern</li>
<li>In partial remission</li>
<li>In full remission</li>
<li>Severity:
<ul>
<li>Mild</li>
<li>Moderate</li>
<li>Severe</li>
</ul>
</li>
</ul>
`,Dd=Object.freeze(Object.defineProperty({__proto__:null,attributes:BE,html:zE},Symbol.toStringTag,{value:"Module"})),jE={title:"Attention Deficit Hyperactivity Disorder",description:"Persistent pattern of inattention and/or hyperactivity-impulsivity that is present before the age of 12 and interferes with social, academic, or occupational functioning.",prevalence:"5-7% in children, 2-4% in adults",synonyms:"Attention Deficit Disorder",acronyms:"ADHD"},UE=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>A persistent pattern of inattention and/or hyperactivityimpulsivity that interferes with functioning or development, as characterized by (1) and/or (2):<br>
<b>Inattention</b><br>
Six (or more) of the following symptoms have persisted for at least 6 months to a degree that is inconsistent with developmental level and that negatively impacts directly on social and academic/occupational activities:<br>
<i>Note: The symptoms are not solely a manifestation of oppositional behavior, defiance, hostility, or failure to understand tasks or instructions. For older adolescents and adults (age 17 and older), at least five symptoms are required.</i><br>
1. Often fails to give close attention to details or makes careless mistakes in schoolwork, at work, or during other activities (e.g., overlooks or misses details, work is inaccurate).<br>
2. Often has difficulty sustaining attention in tasks or play activities (e.g., has difficulty remaining focused during lectures, conversations, or lengthy reading).<br>
3. Often does not seem to listen when spoken to directly (e.g., mind seems elsewhere, even in the absence of any obvious distraction).<br>
4. Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace (e.g., starts tasks but quickly loses focus and is easily sidetracked).<br>
5. Often has difficulty organizing tasks and activities (e.g., difficulty managing sequential tasks; difficulty keeping materials and belongings in order; messy, disorganized work; has poor time management; fails to meet deadlines).<br>
6. Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort (e.g., schoolwork or homework; for older adolescents and adults, preparing reports, completing forms, reviewing lengthy papers).<br>
7. Often loses things necessary for tasks or activities (e.g., school materials, pencils, books, tools, wallets, keys, paperwork, eyeglasses, mobile telephones).<br>
8. Is often easily distracted by extraneous stimuli (for older adolescents and adults, may include unrelated thoughts).<br>
9. Is often forgetful in daily activities (e.g., doing chores, running errands; for older adolescents and adults, returning calls, paying bills, keeping appointments).<br>
<b>Hyperactivity-Impulsivity</b><br>
Six (or more) of the following symptoms have persisted for at least 6 months to a degree that is inconsistent with  developmental level and that negatively impacts directly on social and academic/occupational activities:<br>
<i>Note: The symptoms are not solely a manifestation of oppositional behavior, defiance, hostility, or a failure to understand tasks or instructions. For older adolescents and adults (age 17 and older), at least five symptoms are required.</i><br>
1. Often fidgets with or taps hands or feet or squirms in seat.<br>
2. Often leaves seat in situations when remaining seated is expected (e.g., leaves his or her place in the classroom, in the office or other workplace, or in other situations that require remaining in place).<br>
3. Often runs about or climbs in situations where it is inappropriate. (Note: In adolescents or adults, may be limited to feeling restless.)<br>
4. Often unable to play or engage in leisure activities quietly.<br>
5. Is often “on the go,” acting as if “driven by a motor” (e.g., is unable to be or uncomfortable being still for extended time, as in restaurants, meetings; may be experienced by others as being restless or difficult to keep up with).<br>
6. Often talks excessively.<br>
7. Often blurts out an answer before a question has been completed (e.g., completes people’s sentences; cannot wait for turn in conversation).<br>
8. Often has difficulty waiting his or her turn (e.g., while waiting in line).<br>
9. Often interrupts or intrudes on others (e.g., butts into conversations, games, or activities; may start using other people’s things without asking or receiving permission; for adolescents and adults, may intrude into or take over what others are doing).</li>
<li>Several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years.</li>
<li>Several inattentive or hyperactive-impulsive symptoms are present in two or more settings (e.g., at home, school, or work; with friends or relatives; in other activities).</li>
<li>There is clear evidence that the symptoms interfere with, or reduce the quality of, social, academic, or occupational functioning.</li>
<li>The symptoms do not occur exclusively during the course of schizophrenia or another psychotic disorder and are not better explained by another mental disorder (e.g., mood disorder, anxiety disorder, dissociative disorder, personality disorder, substance intoxication or withdrawal).</li>
</ol>
<h6>Specifiers</h6>
<p>ADHD can also be diagnosed as Other Specific or Unspecified.</p>
<ul>
<li>Combined presentation — If enough symptoms of both Inattention and Hyperativity-Impulsivity criteria were present for the past 6 months.</li>
<li>Predominantly inattentive presentation — If 6 or more symptoms of Inattention are present, but not Hyperactivity-Impulsivity, were present for the past 6 months.</li>
<li>Predominantly hyperative-impulsive presentation — If enough symptoms of Hyperactivity-Impulsivity, but not Impulsivity, were present for the past 6 months.</li>
<li>In partial remission — When full criteria were previously met, fewer than the full criteria have been met for the past 6 months, and the symptoms still result in impairment in social, academic, or occupational functioning.</li>
<li>Severity:
<ul>
<li>Mild — Few, if any, symptoms in excess of those required to make the diagnosis are present, and symptoms result in no more than minor impairments in social, academic, or occupational functioning.</li>
<li>Moderate — Symptoms or functional impairment between &quot;Mild&quot; and &quot;Severe&quot; are present.</li>
<li>Severe — Many symptoms in excess of those required to make the diagnosis, or several symptoms that are particularly severe, are present, or the symptoms result in marked impairment in social or occupational functioning.</li>
</ul>
</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Attention-Deficit/Hyperactivity Disorder.</p>
<ol>
<li>Either (a) or (b):
<ol>
<li>Six (or more) of the following symptoms of <b>inattention</b> have persisted for at least 6 months to a degree that is maladaptive and inconsistent with developmental level:<br>
<b>Inattention</b>
<ol>
<li>Often fails to give close attention to details or makes careless mistakes in schoolwork, work, or other activities.</li>
<li>Often has difficulty sustaining attention in tasks or play activities.</li>
<li>Often does not seem to listen when spoken to directly.</li>
<li>Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace (not due to oppositional behavior or failure to understand instructions).</li>
<li>Often has difficulty organizing tasks and activities.</li>
<li>Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort (such as schoolwork or homework).</li>
<li>Often loses things necessary for tasks or activities (e.g., toys, school assignments, pencils, books, or tools).</li>
<li>Is often easily distracted by extraneous stimuli.</li>
<li>Is often forgetful in daily activities.</li>
</ol>
</li>
<li>Six (or more) of the following symptoms of <b>hyperactivity-impulsivity</b> have persisted for at least 6 months to a degree that is maladaptive and inconsistent with developmental level:<br>
<b>Hyperactivity</b>
<ol>
<li>Often fidgets with hands or feet or squirms in seat.</li>
<li>Often leaves seat in classroom or in other situations in which remaining seated is expected.</li>
<li>Often runs about or climbs excessively in situations in which it is inappropriate (in adolescents or adults, may be limited to subjective feelings of restlessness).</li>
<li>Often has difficulty playing or engaging in leisure activities quietly.</li>
<li>Is often &quot;on the go&quot; or often acts as if &quot;driven by a motor&quot;.</li>
<li>Often talks excessively.<br>
<b>Impulsivity</b></li>
<li>Often blurts out answers before questions have been completed.</li>
<li>Often has difficulty awaiting turn.</li>
<li>Often interrupts or intrudes on others (e.g., butts into conversations or games).</li>
</ol>
</li>
</ol>
</li>
<li>Some hyperactivity-impulsive or inattentive symptoms that caused impairment were present before age 7 years.</li>
<li>Some impairment from the symptoms is present in two or more settings (e.g., at school [or work] and at home).</li>
<li>There must be clear evidence of clinically significant impairment in social, academic, or occupational functioning.</li>
<li>The symptoms do not occur exclusively during the course of a Pervasive Developmental Disorder, Schizophrenia, or other Psychotic Disorder and are not better accounted for by another mental disorder (e.g., Mood Disorder, Anxiety Disorder, Dissociative Disorder, or a Personality Disorder).</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Attention-Deficit/Hyperactivity Disorder, Combined Type: if both Criteria Al and A2 are met for the past 6 months.</li>
<li>Attention-Deficit/Hyperactivity Disorder, Predominantly Inattentive Type: if Criterion Al is met but Criterion A2 is not met for the past 6 months.</li>
<li>Attention-Deficit/Hyperactivity Disorder, Predominantly
Hyperactive-Impulsive Type: if Criterion A2 is met but Criterion Al is not met for the past 6 months.</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Attention Deficit Disorder with Hyperactivity, without Hyperactivity, or Residual Type.</p>
<p>The child displays, for his or her mental and chronological age, signs of developmentally inappropriate inattention, impulsivity, and hyperactivity. The signs must be reported by adults in the child's environment, such as parents and teachers. Because the symptoms are typically variable, they may not be observed directly by the clinician. When the reports of teachers and parents conflict, primary consideration should be given to the teacher reports because of greater familiarity with age-appropriate norms. Symptoms typically worsen in situations that require self-application, as in the classroom. Signs of the disorder may be absent when the child is in a new or a one-to-one situation.
The number of symptoms specified is for children between the ages of eight and ten, the peak age range for referral. In younger children, more severe forms of the symptoms and a greater number of symptoms are usually present. The opposite is true of older children.</p>
<ol>
<li><b>Inattention.</b> At least three of the following:
<ol>
<li>Often fails to finish things he or she starts</li>
<li>Often doesn't seem to listen</li>
<li>Easily distracted</li>
<li>Has difficulty concentrating on schoolwork or other tasks requiring sustained attention</li>
<li>Has difficulty sticking to a play activity</li>
</ol>
</li>
<li><b>Impulsivity.</b> At least three of the following:
<ol>
<li>Often acts before thinking</li>
<li>Shifts excessively from one activity to another</li>
<li>Has difficulty organizing work (this not being due to cognitive impairment)</li>
<li>Needs a lot of supervision</li>
<li>Frequently calls out in class</li>
<li>Has difficulty awaiting turn in games or group situations</li>
</ol>
</li>
<li><b>Hyperactivity.</b> At least two of the following:
<ol>
<li>Runs about or climbs on things excessively</li>
<li>Has difficulty sitting still or fidgets excessively</li>
<li>Has difficulty staying seated</li>
<li>Moves about excessively during sleep</li>
<li>Is always &quot;on the go&quot; or acts as if &quot;driven by a motor&quot;</li>
</ol>
</li>
<li>Onset before the age of seven.</li>
<li>Duration of at least six months.</li>
<li>Not due to Schizophrenia, Affective Disorder, or Severe or Profound Mental Retardation.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Not listed as a distinct disorder, although the non-psychotic organic brain syndromes category notes that &quot;in children mild brain damage often manifests itself by hyperactivity, short attention span, easy distractability, and impulsiveness.&quot;</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Not listed.</p>
`,Id=Object.freeze(Object.defineProperty({__proto__:null,attributes:jE,html:UE},Symbol.toStringTag,{value:"Module"})),HE={title:"Autism Spectrum Disorder",description:"Deficits in social communication and interaction with restricted, repetitive behaviors or interests. Often includes difficulty with changes in routine, intense focus on specific topics, and sensory sensitivities.",prevalence:"0.7-1%",synonyms:null,acronyms:"ASD"},$E=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Persistent deficits in social communication and social interaction across multiple contexts, as manifested by all of the following, currently or by history (examples are illustrative, not exhaustive; see text):
<ol>
<li>Deficits in social-emotional reciprocity, ranging, for example, from abnormal social approach and failure of normal back-and-forth conversation; to reduced sharing of interests, emotions, or affect; to failure to initiate or respond to social interactions.</li>
<li>Deficits in nonverbal communicative behaviors used for social interaction, ranging, for example, from poorly integrated verbal and nonverbal communication; to abnormalities in eye contact and body language or deficits in understanding and use of gestures; to a total lack of facial expressions and nonverbal communication.</li>
<li>Deficits in developing, maintaining, and understanding relationships, ranging, for example, from difficulties adjusting behavior to suit various social contexts; to difficulties in sharing imaginative play or in making friends; to absence of interest in peers.</li>
</ol>
</li>
<li>Restricted, repetitive patterns of behavior, interests, or activities, as manifested by at least two of the following, currently or by history:
<ol>
<li>Stereotyped or repetitive motor movements, use of objects, or speech (e.g., simple motor stereotypies, lining up toys or flipping objects, echolalia, idiosyncratic phrases).</li>
<li>Insistence on sameness, inflexible adherence to routines, or ritualized patterns of verbal or nonverbal behavior (e.g., extreme distress at small changes, difficulties with transitions, rigid thinking patterns, greeting rituals, need to take same route or eat same food every day).</li>
<li>Highly restricted, fixated interests that are abnormal in intensity or focus (e.g., strong attachment to or preoccupation with unusual objects, excessively circumscribed or perseverative interests).</li>
<li>Hyper- or hyporeactivity to sensory input or unusual interest in sensory aspects of the environment (e.g., apparent indifference to pain/temperature, adverse response to specific sounds or textures, excessive smelling or touching of objects, visual fascination with lights or movement).</li>
</ol>
</li>
<li>Symptoms must be present in the early developmental period (but may not become fully manifest until social demands exceed limited capacities, or may be masked by learned strategies in later life).</li>
<li>Symptoms cause clinically significant impairment in social, occupational, or other important areas of current functioning.</li>
<li>These disturbances are not better explained by intellectual developmental disorder (intellectual disability) or global developmental delay. Intellectual developmental disorder and autism spectrum disorder frequently co-occur; to make
comorbid diagnoses of autism spectrum disorder and intellectual developmental disorder, social communication should be below that expected for general developmental level.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Requiring very substantial support</li>
<li>Requiring substantial support</li>
<li>Requiring support</li>
<li>With or without accompanying intellectual impairment</li>
<li>With or without accompanying language impairment</li>
<li>Associated with a known genetic or othe rmedical condition or environmental factor</li>
<li>Associated with a neurodevelopmental, mental, or behavioral problem</li>
<li>With catatonia</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Appears as Autistic Disorder, Rett's Disorder, Childhood Disintegrative Disorder, Asperger's Disorder, and Pervasive Developmental Disorder NOS, all under Pervasive Developmental Disorders in the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.</p>
<p><i>Autistic Disorder</i></p>
<ol>
<li>A total of six (or more) items from (a), (b), and (c), with at least two from (a), and one each from (b) and (c):
<ol>
<li>qualitative impairment in social interaction, as manifested by at least two of the following:
<ol>
<li>marked impairment in the use of multiple nonverbal behaviors such as eye-to-eye gaze, facial expression, body postures, and gestures to regulate social interaction</li>
<li>failure to develop peer relationships appropriate to developmental level</li>
<li>a lack of spontaneous seeking to share enjoyment, interests, or achievements with other people (e.g., by a lack of showing, bringing, or pointing out objects of interest)</li>
<li>lack of social or emotional reciprocity</li>
</ol>
</li>
<li>qualitative impairments in communication as manifested by at least one of the following:
<ol>
<li>delay in, or total lack of, the development of spoken language (not accompanied by an attempt to compensate through alternative modes of communication such as gesture or mime)</li>
<li>in individuals with adequate speech, marked impairment in the ability to initiate or sustain a conversation with others</li>
<li>stereotyped and repetitive use of language or idiosyncratic language</li>
<li>lack of varied, spontaneous make-believe play or social imitative play appropriate to developmental level</li>
</ol>
</li>
<li>restricted repetitive and stereotyped patterns of behavior, interests, and activities, as manifested by at least one of the following:
<ol>
<li>encompassing preoccupation with one or more stereotyped and restricted patterns of interest that is abnormal either in intensity or focus</li>
<li>apparently inflexible adherence to specific, nonfunctional routines or rituals</li>
<li>stereotyped and repetitive motor mannerisms (e.g., hand or finger flapping or twisting, or complex whole-body movements)</li>
<li>persistent preoccupation with parts of objects</li>
</ol>
</li>
</ol>
</li>
<li>Delays or abnormal functioning in at least one of the following areas, with onset prior to age 3 years: (1) social interaction, (2) language as used in social communication, or (3) symbolic or imaginative play.</li>
<li>The disturbance is not better accounted for by Rett's Disorder or Childhood Disintegrative Disorder.</li>
</ol>
<p><i>Rett's Disorder</i></p>
<ol>
<li>All of the following:
<ol>
<li>apparently normal prenatal and perinatal development</li>
<li>apparently normal psychomotor development through the first 5 months after birth</li>
<li>normal head circumference at birth</li>
</ol>
</li>
<li>Onset of all of the following after the period of normal development:
<ol>
<li>deceleration of head growth between ages 5 and 48 months</li>
<li>loss of previously acquired purposeful hand skills between ages 5 and 30 months with the subsequent development of stereotyped hand movements (e.g., hand-wringing or hand washing)</li>
<li>loss of social engagement early in the course (although often social interaction develops later)</li>
<li>appearance of poorly coordinated gait or trunk movements</li>
<li>severely impaired expressive and receptive language development with severe psychomotor retardation</li>
</ol>
</li>
</ol>
<p><i>Childhood Disintegrative Disorder</i></p>
<ol>
<li>Apparently normal development for at least the first 2 years after birth as manifested by the presence of age-appropriate verbal and nonverbal communication, social relationships, play, and adaptive behavior.</li>
<li>Clinically significant loss of previously acquired skills (before age 10 years) in at least two of the following areas:
<ol>
<li>expressive or receptive language</li>
<li>social skills or adaptive behavior</li>
<li>bowel or bladder control</li>
<li>play</li>
<li>motor skills</li>
</ol>
</li>
<li>Abnormalities of functioning in at least two of the following areas:
<ol>
<li>qualitative impairment in social interaction (e.g., impairment in nonverbal behaviors, failure to develop peer relationships, lack of social or emotional reciprocity)</li>
<li>qualitative impairments in communication (e.g., delay or lack of spoken language, inability to initiate or sustain a conversation, stereotyped and repetitive use of language, lack of varied makebelieve play)</li>
<li>restricted, repetitive, and stereotyped patterns of behavior, interests, and activities, including motor stereotypies and mannerisms</li>
</ol>
</li>
<li>The disturbance is not better accounted for by another specific Pervasive Developmental Disorder or by Schizophrenia.</li>
</ol>
<p><i>Asperger's Disorder</i></p>
<ol>
<li>Qualitative impairment in social interaction, as manifested by at least two of the following:
<ol>
<li>marked impairment in the use of multiple nonverbal behaviors such as eye-to-eye gaze, facial expression, body postures, and gestures to regulate social interaction</li>
<li>failure to develop peer relationships appropriate to developmental level</li>
<li>a lack of spontaneous seeking to share enjoyment, interests, or achievements with other people (e.g., by a lack of showing, bringing, or pointing out objects of interest to other people)</li>
<li>lack of social or emotional reciprocity</li>
</ol>
</li>
<li>Restricted repetitive and stereotyped patterns of behavior, interests, and activities, as manifested by at least one of the following:
<ol>
<li>encompassing preoccupation with one or more stereotyped and restricted patterns of interest that is abnormal either in intensity or focus</li>
<li>apparently inflexible adherence to specific, nonfunctional routines or rituals</li>
<li>stereotyped and repetitive motor mannerisms (e.g., hand or finger flapping or twisting, or complex whole-body movements)</li>
<li>persistent preoccupation with parts of objects</li>
</ol>
</li>
<li>The disturbance causes clinically significant impairment in social, occupational, or other important areas of functioning.</li>
<li>There is no clinically significant general delay in language (e.g., single words used by age 2 years, communicative phrases used by age 3 years).</li>
<li>There is no clinically significant delay in cognitive development or in the development of age-appropriate self-help skills, adaptive behavior (other than in social interaction), and curiosity about the environment in childhood.</li>
<li>Criteria are not met for another specific Pervasive Developmental Disorder or Schizophrenia.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Referred to as Infantile Autism and Childhood Onset Pervasive Development Disorder under Pervasive Developmental Disorders in the Infancy, Childhood, and Adolescence section.</p>
<h4>Criteria</h4>
<p><i>Infantile Autism</i></p>
<ol>
<li>Onset before 30 months of age.</li>
<li>Pervasive lack of responsiveness to other people (autism).</li>
<li>Gross deficits in language development.</li>
<li>If speech; is present, peculiar speech patterns such as immediate and delayed echolalia, metaphorical language, pronominal reversal.</li>
<li>Bizarre responses to various aspects of the environment, e.g., resistance to change, peculiar interest in or attachments to animate or inanimate objects.</li>
<li>Absence of delusions, hallucinations, loosening of associations, and incoherence as in Schizophrenia.</li>
</ol>
<p><i>Childhood Onset Pervasive Development Disorder</i></p>
<ol>
<li>Gross and sustained impairment in social relationships, e.g., lack of appropriate affective responsivity, inappropriate clinging, asociality, lack of empathy.</li>
<li>At least three of the following:
<ol>
<li>sudden excessive anxiety manifested by such symptoms as freefloating anxiety, catastrophic reactions to everyday occurrences, inability to be consoled when upset, unexplained panic attacks</li>
<li>constricted or inappropriate affect, including lack of appropriate fear reactions, unexplained rage reactions, and extreme mood lability</li>
<li>resistance to change in the environment (e,g., upset if dinner time is changed), or insistence on doing things in the same manner every time (e.g., putting on clothes always in the same order)</li>
<li>oddities of motor movement, such as peculiar posturing, peculiar hand or finger movements, or walking on tiptoe</li>
<li>abnormalities of speech, such as questionlike melody, monotonous voice</li>
<li>hyper- or hypo-sensitivity to sensory stimuli, e.g., hyperacusis</li>
<li>self-mutilation, e.g., biting or hitting self, head banging</li>
</ol>
</li>
<li>Onset of the full syndrome after 30 months of age and before 12 years of age.</li>
<li>Absence of delusions, hallucinations, incoherence, or marked loosening of associations.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>&quot;Autistic behavior&quot; and &quot;autistic thinking&quot; included as part of Schizophrenia, Childhood Type and Schizoid Personality.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>&quot;Autistic, unrealistic thinking&quot; included as part of Schizophrenic Reaction, Paranoid Type and &quot;autism&quot; as a &quot;Psychotic reactions in children, manifesting primarily autism&quot; included as part of Schizophrenic Reaction, Childhood Type, as well as &quot;autistic thinking&quot; as part of Schizoid Personality.</p>
</div>
<div class="dsm-date">
1911
</div>
<div class="dsm-box"> 
<h2>Eugen Bleuler</h2>
<p>Dr. Eugen Bleuler, a Swiss psychiatrist and director of the famous Burghölzli hospital, coined the term &quot;autism&quot; to describe a characteristic of schizophrenia (another term of his invention) in which psychotic patients appeared totally withdrawn, turned inward, oblivious to others, self-absorbed.</p>
`,kd=Object.freeze(Object.defineProperty({__proto__:null,attributes:HE,html:$E},Symbol.toStringTag,{value:"Module"})),qE={title:"Child Onset Fluency Disorder (Stuttering)",description:"Persistent disturbance in fluency and time patterning of speech with onset in childhood.",prevalence:"5-10% (1% in adults)",synonyms:"Stuttering"},WE=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Disturbances in the normal fluency and time patterning of speech that are inappropriate for the individual’s age and language skills, persist over time, and are characterized by frequent and marked occurrences of one (or more) of the
following:
<ol>
<li>Sound and syllable repititions.</li>
<li>Sound prolongations of consonants as well as vowels.</li>
<li>Broken words (e.g., pauses within a word).</li>
<li>Audible or silent blocking (filled or unfilled pauses in speech).</li>
<li>Circumlocutions (word substitutions to avoid problematic words).</li>
<li>Words produced with an excess of physical tension.</li>
<li>Monosyllabic whole-word repetitions (e.g., “I-I-I-I see him”).</li>
</ol>
</li>
<li>The disturbance causes anxiety about speaking or limitations in effective communication, social participation, or academic or occupational performance, individually or in any combination.</li>
<li>The onset of symptoms is in the early developmental period.<br>
<i>Note, later-onset cases are diagnosed as adult-onset fluency disorder.</i></li>
<li>The disturbance is not attributable to a speech-motor or sensory deficit, dysfluency associated with neurological insult (e.g., stroke, tumor, trauma), or another medical condition and is not better explained by another mental disorder.</li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Stuttering under Communication Disorders in the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.</p>
<ol>
<li>Disturbance in the normal fluency and time patterning of speech (inappropriate for the individual's age), characterized by frequent occurrences of one or more of the following:
<ol>
<li>sound and syllable repetitions</li>
<li>sound prolongations</li>
<li>interjections</li>
<li>broken words (e.g., pauses within a word)</li>
<li>audible or silent blocking (filled or unfilled pauses in speech)</li>
<li>circumlocutions (word substitutions to avoid problematic words)</li>
<li>words produced with an excess of physical tension</li>
<li>monosyllabic whole-word repetitions (e.g., &quot;I-I-I-I see him&quot;)</li>
</ol>
</li>
<li>The disturbance in fluency interferes with academic or occupational achievement or with social communication.</li>
<li>If a speech-motor or sensory deficit is present, the speech difficulties are in excess of those usually associated with these problems.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Stuttering under Other Disorders with Physical Manifestations in the Disorders Usually First Evident in Infancy, Childhood, or Adolescence section.</p>
<ol>
<li>Frequent repetitions or prolongations of sounds, syllables, or words or frequent, unusual hesitations and pauses that disrupt the rhythmic flow of speech.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM (1952)</h2>
<p>Does not appear.</p>
</div>
</div>`,Cd=Object.freeze(Object.defineProperty({__proto__:null,attributes:qE,html:WE},Symbol.toStringTag,{value:"Module"})),VE={title:"Language Disorder",description:"Deficits in the acquisition or use of language across several all modalities (written, spoken, signed, other).",prevalence:"7%",synonyms:"Specific Language Impairment",acronyms:"DLD, SLI"},YE=`<p>Prior to the DSM-III, when the psychiatric culture was based primarily on psychodynamic theories, impairments in language acquisition were assumed to be symptoms of broader emotional or developmental disorders. The DSM-III documented Developmental Language Disorder as a distinct diagnostic category in an effort to recategorize disorders based on empirical data and operational criteria. In the DSM-IV and -5, the categorization underwent changes that reflected what was being seen clinically (e.g., rare instances of purely receptive impairment with no expressive impairment) and advances in linguistics and developmental neuropsychology. Ultimately, the DSM-5 consolidated impairments in language acquisition and use as Language Disorder.</p>
<div class = "dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Persistent difficulties in the acquisition and use of language across modalities (i.e., spoken, written, sign language, or other) due to deficits in comprehension or production that include the following:
<ol>
<li>Reduced vocabulary (word knowledge and use).</li>
<li>Limited sentence structure (ability to put words and word endings together to form sentences based on the rules of grammar and morphology).</li>
<li>Impairments in discourse (ability to use vocabulary and connect sentences to explain or describe a topic or series of events or have a conversation).</li>
</ol>
</li>
<li>Language abilities are substantially and quantifiably below
those expected for age, resulting in functional limitations in effective communication, social participation, academic achievement, or occupational performance, individually or in
any combination.</li>
<li>Onset of symptoms is in the early developmental period.</li>
<li>The difficulties are not attributable to hearing or other sensory impairment, motor dysfunction, or another medical or neurological condition and are not better explained by intellectual developmental disorder (intellectual disability) or global developmental delay.</li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as both Expressive Language Disorder and Mixed Receptive-Expressive Language Disorder under the Communications Disorders section.</p>
<p><b>Expressive Language Disorder</b></p>
<ol>
<li>The scores obtained from standardized individually administered measures of expressive language development are substantially below those obtained from standardized measures of both nonverbal intellectual capacity and receptive language development. The disturbance may be manifest clinically by symptoms that include having a markedly limited vocabulary, making errors in tense, or having difficulty recalling words or producing sentences with developmentally appropriate length or complexity.</li>
<li>The difficulties with expressive language interfere with academic or occupational achievement or with social communication.</li>
<li>Criteria are not met for Mixed Receptive-Expressive Language Disorder or a Pervasive Developmental Disorder.</li>
<li>If Mental Retardation, a speech-motor or sensory deficit, or environmental deprivation is present, the language difficulties are in excess of those usually associated with these problems.</li>
</ol>
<p><b>Mixed Receptive-Expressive Language Disorder</b></p>
<ol>
<li>The scores obtained from a battery of standardized individually administered measures of both receptive and expressive language development are substantially below those obtained from standardized measures of nonverbal intellectual capacity. Symptoms include those for Expressive Language Disorder as well as difficulty understanding words, sentences, or specific types of words, such as spatial terms.</li>
<li>The difficulties with receptive and expressive language significantly interfere with academic or occupational achievement or with social communication.</li>
<li>Criteria are not met for a Pervasive Developmental Disorder.</li>
<li>If Mental Retardation, a speech-motor or sensory deficit, or environmental deprivation is present, the language difficulties are in excess of those usually associated with these problems.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Developmental Language Disorder with two types: expressive and receptive, under the Infancy, Childhood, or Adolescence Disorders.</p>
<p><b>Developmental Language Disorder, Expressive Type</b></p>
<ol>
<li>Failure to develop vocal expression (encoding) of language despite relatively intact comprehension of language.</li>
<li>Presence of inner language (the presence of age-appropriate concepts, such as understanding the purpose and use of a particular household object).</li>
<li>Not due to Mental Retardation, Childhood Onset Pervasive Developmental Disorder, hearing impairment, or trauma.</li>
</ol>
<p><b>Developmental Language Disorder, Receptive Type</b></p>
<ol>
<li>Failure to develop comprehension (decoding) and vocal expression (encoding) of language.</li>
<li>Not due to hearing impairment trauma, Mental Retardation, or Childhood Onset Pervasive Developmental Disorder.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Does not appear.</p>
</div>
</div>`,Ad=Object.freeze(Object.defineProperty({__proto__:null,attributes:VE,html:YE},Symbol.toStringTag,{value:"Module"})),QE={title:"Social (Pragmatic) Communication Disorder",description:"Deficits in comprehension and use of verbal and nonverbal communication, including problems with non-literal, ambiguous information as well as grammar and sentence structure.",prevalence:null,synonyms:"Semantic Pragmatic Disorder",acronyms:"SPCD"},GE=`<p>SPCD, also called semantic pragmatic disorder, is a new diagnostic category in the DSM-5 as a separate diagnosis from ASD to distinguish the individuals who experience social communication difficulties without the restrictive and repetitive behaviors associated with ASD. It is thought to stem from deficits in information processing as opposed to the use of language. The condition impairs a person's ability to grasp the central meaning or saliency of events, leading to a preference for routine things in which new relevance does not have to be deduced. People with SPCD often develop eccentric interests but are not as obsessive as those with ASD.</p>
<p>Symptoms of SPCD include:</p>
<ul>
<li>Delayed language development</li>
<li>Word search pauses, jargoning, word order errors, word category errors, verb conjugation errors, and other language difficulties</li>
<li>Stuttering or cluttered speech</li>
<li>Repeating words or phrases</li>
<li>Tendency to be literal, concrete, and prefer facts to stories</li>
<li>Impaired reading comprehension</li>
<li>Following conversations (one-sided or off-topic conversations)</li>
<li>Getting lost in the details of stories</li>
<li>Reading body language</li>
<li>Distinguishing offensive remarks</li>
</ul>
<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Persistent difficulties in the social use of verbal and nonverbal communication as manifested by all of the following:
<ol>
<li>Deficits in using communication for social purposes, such as greeting and sharing information, in a manner that is appropriate for the social context.</li>
<li>Impairment of the ability to change communication to match context or the needs of the listener, such as speaking differently in a classroom than on a playground, talking differently to a child than to an adult, and avoiding use of overly formal language.</li>
<li>Difficulties following rules for conversation and storytelling, such as taking turns in conversation, rephrasing when misunderstood, and knowing how to use verbal and nonverbal signals to regulate interaction.</li>
<li>Difficulties understanding what is not explicitly stated (e.g., making inferences) and nonliteral or ambiguous meanings of language (e.g., idioms, humor, metaphors, multiple meanings that depend on the context for interpretation).</li>
</ol>
</li>
<li>The deficits result in functional limitations in effective communication, social participation, social relationships, academic achievement, or occupational performance, individually or in combination.</li>
<li>The onset of the symptoms is in the early developmental period (but deficits may not become fully manifest until social communication demands exceed limited capacities).</li>
<li>The symptoms are not attributable to another medical or neurological condition or to low abilities in the domains of word structure and grammar, and are not better explained by autism spectrum disorder, intellectual developmental disorder (intellectual disability), global developmental delay, or another mental disorder.</li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Does not appear.</p>
</div>
</div>`,Od=Object.freeze(Object.defineProperty({__proto__:null,attributes:QE,html:GE},Symbol.toStringTag,{value:"Module"})),KE={title:"Speech Sound Disorder",description:"Impairments in spoken sounds, including addition, omission, distortion, and substitution of word phonemes.",prevalence:"8-9%",acronyms:"SSD",synonyms:"Phonological Disorder"},XE=`<div class = "dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Persistent difficulty with speech sound production that interferes with speech intelligibility or prevents verbal communication of messages.</li>
<li>The disturbance causes limitations in effective communication that interfere with social participation, academic achievement, or occupational performance, individually or in any combination.</li>
<li>Onset of symptoms is in the early developmental period.</li>
<li>The difficulties are not attributable to congenital or acquired conditions, such as cerebral palsy, cleft palate, deafness or hearing loss, traumatic brain injury, or other medical or neurological conditions.</li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Phonological Disorder under the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.</p>
<ol>
<li>Failure to use developmentally expected speech sounds that are appropriate for age and dialect (e.g., errors in sound production, use, representation, or organization such as, but not limited to, substitutions of one sound for another [use of /t/ for target /k/ sound] or omissions of sounds such as final consonants).</li>
<li>The difficulties in speech sound production interfere with academic or
occupational achievement or with social communication.</li>
<li>If Mental Retardation, a speech-motor or sensory deficit, or environmental deprivation is present, the speech difficulties are in excess of those usually associated with these problems.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Developmental Articulation Disorder under Specific Developmental Disorders in the Infancy, Childhood, and Adolescence Disorders section.</p>
<ol>
<li>Failure to develop consistent articulations of the later-acquired speech sounds, such as r, sh, th, f, z, l, or ch.</li>
<li>Not due to Developmental Language Disorder, Mental Retardation, Childhood Onset Pervasive Developmental Disorder, or physical disorders.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Does not appear.</p>
</div>`,Nd=Object.freeze(Object.defineProperty({__proto__:null,attributes:KE,html:XE},Symbol.toStringTag,{value:"Module"})),JE={title:"Unspecified Communication Disorder",description:"Deficits in communication and criteria are not met for communication or neurodevelopmental disorder or when there is insufficient data to determine a more specific diagnosis.",prevalence:null,acronyms:"UCD",synonyms:null},ZE=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<p>This category applies to presentations in which symptoms characteristic of communication disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for communication disorder or for any of the disorders in the neurodevelopmental disorders diagnostic class. The unspecified communication disorder category is used in situations in which the clinician chooses not to specify the reason that the criteria are not met for communication disorder or for a specific neurodevelopmental disorder, and includes presentations in which there is insufficient information to make a more specific diagnosis.</p>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Communication Disorder Not Otherwise Specified.</p>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Does not appear.</p>
</div>
</div>`,Pd=Object.freeze(Object.defineProperty({__proto__:null,attributes:JE,html:ZE},Symbol.toStringTag,{value:"Module"})),e_={title:"Global Developmental Delay",description:"Missed developmental milestones before the child is able to undergo more evaluation for more specific conditions (~5 years old).",prevalence:"5-10%",acronyms:"GDD",synonyms:null},t_=`<div class = "dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<p>The DSM-5 introduced a new diagnostic category specifically for children under the age of 5 who miss developmental milestones in intellectual functioning. GDD acts as a placeholder diagnosis to encourage early interventions but avoid labeling children with an IDD diagnosis, as very young children often catch up in development.</p>
<h4>Description</h4>
<p>This diagnosis is reserved for individuals under the age of 5 years when the clinical severity level cannot be reliably assessed during early childhood. This category is diagnosed when an individual fails to meet expected developmental milestones in several areas of intellectual functioning, and applies to individuals who are unable to undergo systematic assessments of intellectual functioning, including children who are too young to participate in standardized testing. This category requires reassessment after a period of time.</p>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Does not appear as distinct diagnosis from unspecified mental retardation for children under the age of 5.</p>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Does not appear as distinct diagnosis from unspecified mental retardation for children under the age of 5.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear as distinct diagnosis from unspecified mental retardation for children under the age of 5.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Does not appear.</p>
</div>`,Md=Object.freeze(Object.defineProperty({__proto__:null,attributes:e_,html:t_},Symbol.toStringTag,{value:"Module"})),n_={title:"Intellectual Developmental Disorder (Intellectual Disability)",description:"Deficits in intellectual functioning and adaptive behavior that begin during the developmental period.",prevalence:"1-3%",acronyms:"ID, IDD",synonyms:"Intellectual Disability"},i_=`<div class = "dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<p>Renamed to Intellectual Developmental Disorder (Intellectual Disability) and housed under the Neurodevelopmental Disorders section.</p>
<h4>Criteria</h4>
<ol>
<li>Deficits in intellectual functions, such as reasoning, problem solving, planning, abstract thinking, judgment, academic learning, and learning from experience, confirmed by both clinical assessment and individualized, standardized intelligence testing.</li>
<li>Deficits in adaptive functioning that result in failure to meet developmental and sociocultural standards for personal independence and social responsibility. Without ongoing support, the adaptive deficits limit functioning in one or more activities of daily life, such as communication, social participation, and independent living, across multiple environments, such as home, school, work, and community.</li>
<li>Onset of intellectual and adaptive deficits during the developmental period.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Mild</li>
<li>Moderate</li>
<li>Severe</li>
<li>Profound</li>
</ul>
<!-- #### Differential Diagnosis
- Major and mild neurocognitive disorders  
- Communication disorders and SLD  
- ASD -->
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Mental Retardation under the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.</p>
<h4>Criteria</h4>
<ol>
<li>Significantly subaverage intellectual functioning: an IQ of approximately 70 or below on an individually administered IQ test (for infants, a clinical judgment of significantly subaverage intellectual functioning).</li>
<li>Concurrent deficits or impairments in present adaptive functioning (i.e., the person's effectiveness in meeting the standards expected for his or her age by his or her cultural group) in at least two of the following areas: communication, self-care, home living, social/interpersonal skills, use of community resources, self-direction, functional academic skills, work, leisure, health, and safety.</li>
<li>The onset is before age 18 years.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Mild Mental Retardation</li>
<li>Moderate Mental Retardation</li>
<li>Severe Mental Retardation</li>
<li>Profound Mental Retardation</li>
<li>Mental Retardation, Severity Unspecified</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Mental Retardation under the Disorders Usually First Evident In Infancy, Childhood, or Adolescence section.</p>
<h4>Criteria</h4>
<ol>
<li>Significantly subaverage general intellectual functioning: an IQ of 70 or below on an individually administered IQ test (for infants, since available intelligence tests do not yield numerical values, a clinical judgment of significant subaverage intellectual functioning).</li>
<li>Concurrent deficits or impairments in adaptive behavior, taking the person's age into consideration.</li>
<li>Onset before the age of 18.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Mild (IQ 50-70)</li>
<li>Moderate (IQ 35-49)</li>
<li>Severe (IQ 20-34)</li>
<li>Profound (IQ &lt; 20)</li>
</ul>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Listed as Mental Retardation.</p>
<h4>Description</h4>
<p>Mental retardation refers to subnormal general intellectual functioning which originates during the developmental period and is associated with impairment of either learning and social adjustment or maturation, or both.</p>
<h6>Specifiers</h6>
<ul>
<li>Borderline mental retardation (IQ 68-85)</li>
<li>Mild mental retardation (IQ 52-67)</li>
<li>Moderate mental retardation (IQ 36-51)</li>
<li>Severe mental retardation (IQ 20-35)</li>
<li>Profound mental retardation (IQ &lt; 20)</li>
</ul>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Listed as Mental Deficiency for cases involving &quot;a defect of intelligence existing since birth, without demonstrated organic brain disease or known prenatal cause&quot; and &quot;Chronic Brain Syndrome&quot; for cases that &quot;result from relatively permanent, more or less irreversible, diffuse impairment of cerebral tissue function&quot;. When the etiology of the intellectual functioning impairment was known, a specific chronic brain syndrome (e.g., associated with congential cranial anomaly) was diagnosed alongside the Mental deficiency qualifier.</p>
<h4>Description</h4>
<p>Here will be classified those cases presenting primarily a defect of intelligence existing since birth, without demonstrated organic brain disease or known prenatal cause. This group will include only those cases formerly known as familial or &quot;idiopathic&quot; mental deficiencies. The degree of intelligence defect will be specified as mild, moderate, or severe, and the current I.Q. rating, with the name of the test used, will be added to the diagnosis. In general, mild refers to functional (vocational) impairment, as would be expected with I.Q.'s of approximately 70 to 85; moderate is used for functional impairment requiring special training and guidance, such as would be expected with I.Q.'s of about 50-70; severe refers to the functional impairment requiring custodial or complete protective care, as would be expected with I.Q.'s below 50. The degree of defect is estimated from other factors than merely psychological test scores, namely, consideration of cultural, physical and emotional determinants, as well as school, vocational and social effectiveness. The diagnosis may be modified by the appropriate qualifying phrase, when, in addition to the intellectual defects, there are significant psychotic, neurotic, or behavioral reactions.</p>
<h6>Specifiers</h6>
<ul>
<li>Familial or hereditary</li>
<li>Idiopathic (cause unknown)</li>
<li>Severity (Mild, Moderate, Severe)</li>
</ul>
</div>
</div>`,Rd=Object.freeze(Object.defineProperty({__proto__:null,attributes:n_,html:i_},Symbol.toStringTag,{value:"Module"})),r_={title:"Unspecified Intellectual Developmental Disorder (Intellectual Disability)",description:"Strong evidence of intellectual developmental delays but insufficient information to make a more specific diagnosis.",prevalence:null,acronyms:"Unspecified IDD",synonyms:null},o_=`<div class = "dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<h4>Description</h4>
<p>This category is reserved for individuals over the age of 5 years when assessment of the degree of intellectual developmental disorder (intellectual disability) by means of locally available procedures is rendered difficult or impossible because of associated sensory or physical impairments, as in blindness or prelingual deafness; locomotor disability; or presence of severe problem behaviors or co-occurring mental disorder. This category should only be used in exceptional circumstances and requires reassessment after a period of time.</p>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Mental Retardation, Severity Unspecified under the Usually First Diagnosed in Infancy, Childhood, or Adolescence section.</p>
<h4>Description</h4>
<p>The diagnosis of Mental Retardation, Severity Unspecified, should be used when there is a strong presumption of Mental Retardation but the person cannot be successfully tested by standard intelligence tests. This may be the case when children, adolescents, or adults are too impaired or uncooperative to be tested or, with infants, when there is a clinical judgment of significantly subaverage intellectual functioning, but the available tests (e.g., the Bayley Scales of Infant Development, Cattell Infant Intelligence Scales, and others) do not yield IQ values. In general, the younger the age, the more difficult it is to assess for the presence of Mental Retardation except in those with profound impairment.</p>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Unspecified Mental Retardation under the Disorders Usually First Evident in Infancy, Childhood, Or Adolescence section.</p>
<h4>Description</h4>
<p>This category should be used when there is a strong presumption of Mental Retardation but the individual is untestable by standard intelligence tests. This may be the case when children, adolescents or adults are too impaired or uncooperative to be tested. In the case of infants, since the available tests, such as the Bayley, Cattel, and others, do not yield numerical IQ values, this may be the case when there is a clinical judgment of significant subaverage intellectual functioning. In general, the younger the age, the more difficult it is to make a diagnosis of Mental Retardation, except for those with profound impairment.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Listed as Unspecified Mental Retardation.</p>
<h4>Description</h4>
<p>This classification is reserved for patients whose intellectual functioning has not or cannot be evaluated precisely but which is recognized as clearly subnormal.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included in &quot;Mental Deficiency&quot; but without a specifier for the inability to fully test and/or specify the diagnosis.</p>
</div>
</div>`,Ld=Object.freeze(Object.defineProperty({__proto__:null,attributes:r_,html:o_},Symbol.toStringTag,{value:"Module"})),s_={title:"Developmental Coordination Disorder",description:"Deficits in motor skills that significantly impair a child's daily living or academic success.",prevalence:"5-6%",synonyms:"Dyspraxia",acronyms:"DCD"},a_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5</h2>
<ol>
<li>The acquisition and execution of coordinated motor skills is
substantially below that expected given the individual’s chronological age and opportunity for skill learning and use.
Difficulties are manifested as clumsiness (e.g., dropping or
bumping into objects) as well as slowness and inaccuracy of performance of motor skills (e.g., catching an object, using scissors or cutlery, handwriting, riding a bike, or participating in sports).</li>
<li>The motor skills deficit in Criterion 1 significantly and
persistently interferes with activities of daily living appropriate to chronological age (e.g., self-care and self-maintenance) and impacts academic/school productivity, prevocational and vocational activities, leisure, and play.</li>
<li>Onset of symptoms is in the early developmental period.</li>
<li>The motor skills deficits are not better explained by
intellectual developmental disorder (intellectual disability) or
visual impairment and are not attributable to a neurological
condition affecting movement (e.g., cerebral palsy, muscular
dystrophy, degenerative disorder).</li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Developmental Coordination Disorder.</p>
<ol>
<li>Performance in daily activities that require motor coordination is substantially below that expected given the person's chronological age and measured intelligence. This may be manifested by marked delays in achieving motor milestones (e.g., walking, crawling, sitting), dropping things, &quot;clumsiness,&quot; poor performance in sports, or poor handwriting.</li>
<li>The disturbance in Criterion 1 significantly interferes with academic achievement or activities of daily living.</li>
<li>The disturbance is not due to a general medical condition (e.g., cerebral palsy, hemiplegia, or muscular dystrophy) and does not meet criteria for a Pervasive Developmental Disorder.</li>
<li>If Mental Retardation is present, the motor difficulties are in excess of those usually associated with it.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Not listed.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Not listed.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Not listed.</p>
</div>`,Fd=Object.freeze(Object.defineProperty({__proto__:null,attributes:s_,html:a_},Symbol.toStringTag,{value:"Module"})),l_={title:"Stereotypic Movement Disorder",description:"Repetitive, seemingly driven, purposeless movements, such as hand shaking/waving, body rocking, head banging, self biting, or hitting one's own body.",prevalence:"3-4%",synonyms:null,acronyms:"SMD"},u_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Repetitive, seemingly driven, purposeless movements, such as hand shaking/waving, body rocking, head banging, self biting, or hitting one's own body.</li>
<li>The repetitive motor behaviour interferes with social, academic, or other activities and may result in self-injury.</li>
<li>Onset is in the early developmental period.</li>
<li>The repetitive motor behaviour is not attributable to the physiological effects of a substance or neurological condition and is not better explained by another neurodevelopmental or mental disorder (e.g., trichotillomania, obsessive-compulsive disorder).</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With or without self-injurious behavior (or behavior that would result in injury if not prevented)</li>
<li>Associated with a known medical or genetic condition, neurodevelopmental disorder, or environmental factor (e.g., Lesch-Nyhan syndrome, intellectual disability, intrauterine alcohol exposure).</li>
<li>Severity:
<ul>
<li>Mild —  Stereotypies are present but do not significantly impair functioning or cause self-harm.</li>
<li>Moderate — Stereotypies cause some impairment in daily activities and social interactions or may lead to mild self-harm.</li>
<li>Severe — Stereotypies cause significant impairment in daily activities, social interactions, or result in frequent or severe self-injurious behavior.</li>
</ul>
</li>
<li>With self-injurious behavior, such as head banging or self-biting.</li>
<li>With associated medical or genetic condition.</li>
</ul>
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Stereotypic Movement Disorder.</p>
<ol>
<li>Repetitive, seemingly driven, and nonfunctional motor behavior (e.g., hand shaking or waving, body rocking, head banging, mouthing of objects, self-biting, picking at skin or bodily orifices, hitting own body).</li>
<li>The behavior markedly interferes with normal activities or results in self-inflicted bodily injuries that requires medical treatment (or would result in an injury if preventative measures were not used).</li>
<li>If Mental Retardation is present, the stereotypic or self-injurious behavior is of sufficient severity to become a focus of treatment.</li>
<li>The behavior is not better accouted for by a compulsion (as in Obsessive-Compulsive Disorder), a tick (as in Tic Disorder), a stereotypy that is part of a Pervasive Developmental Disorder, or hair pulling (as in Trichotillomania).</li>
<li>The behavior is not due to the direct physiological effects of a substance or a general medical condition.</li>
<li>The behavior persists for 4 weeks or longer.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With Self-Injurious Behavior: if the behavior results in bodily damage that requires specific treatment (or that would result in bodily damage if protective measures were not used).</li>
</ul>
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Not listed as a separate disorder from other tic disorders, although Atypical Stereotyped Movement Disorder is included.</p>
<p>This category is for conditions such as head banging, rocking, repetitive hand movements consisting of quick, rhythmic, small hand rotations, or repetitive voluntary movements that typically involve the fingers or arms. These disorders are distinguishable from tics in that they consist of voluntary movements and
are not spasmodic. Moreover, unlike individuals with a Tic Disorder, those with these conditions are not distressed by the symptoms and may even appear to derive enjoyment from the repetitive activities. Though bizarre posturing or movements may occur in adults, these conditions are found almost exclusively
in children. They are especially prevalent among individuals with Mental Retardation or Pervasive Developmental Disorders and among children suffering from grossly inadequate social stimulation, but they may also occur in the absence of a concurrent mental disorder.</p>
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Not listed.</p>
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Not listed.</p>
</div>`,Bd=Object.freeze(Object.defineProperty({__proto__:null,attributes:l_,html:u_},Symbol.toStringTag,{value:"Module"})),c_={title:"Other Specified Tic Disorder",description:"Symptoms of a Tic Disorder that do not fit the criteria for another diagnosis and the clinician chooses to specify the reason why.",prevalence:null,acronyms:"OSTD",synonyms:null},d_=`<p>The OSTD diagnosis is given when tic symptoms are present but the symptoms do not fit a more specific diagnosis <i>and</i> the clinician is able to specify the reason why. These reasons include:</p>
<ul>
<li>Onset is after age 18</li>
<li>Tics last less than 4 weeks</li>
<li>Tics can be attributed to another medical condition, such as brain injury or medication</li>
<li>Atypical tic presentations, i.e., tics do not fit typical motor or vocal patterns. Some examples include:
<ul>
<li>Complex behavioral sequences that blur the line between tics and compulsions, like arranging objects in specific patterns.</li>
<li>Sensory urges or phantom sensations, such as persistent feelings of something crawling on the skin, internal &quot;electrical&quot; sensations, or an overwhelming urge to experience certain tactile sensations.</li>
<li>Blocking tics in which motor activity or speech is briefly interrupted by pauses.</li>
<li>Respiratory tics involving complex breathing patterns, breath-holding, or hyperventilation.</li>
<li>Tics with unusual triggers like specific environmental stimuli or emotional states rather than following the typical waxing and waning pattern of most tic disorders.</li>
</ul>
</li>
</ul>
`,zd=Object.freeze(Object.defineProperty({__proto__:null,attributes:c_,html:d_},Symbol.toStringTag,{value:"Module"})),h_={title:"Persistent (Chronic) Tic Disorder",description:"A single motor or vocal tic persisting for over one year.",prevalence:"0.02-.16%",synonyms:"Chronic Tic Disorder, Persistent Motor or Vocab Tic Disorder, Chronic Motor or Vocab Tic Disorder",acronyms:null},f_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5</h2>
<ol>
<li>Single or multiple motor or vocal tics have been
present during the illness, but not both motor and vocal.</li>
<li>The tics may wax and wane in frequency but have persisted for more than 1 year since first tic onset.</li>
<li>Onset is before 18 years.</li>
<li>The disturbance is not attributable to the physiological effects of a substance (e.g., cocaine) or another medical condition (e.g., Huntington’s disease, postviral encephalitis).</li>
<li>Criteria have never been met for Tourette’s disorder.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Motor tics only</li>
<li>Vocal tics only</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Chronic Motor or Vocal Tic Disorder.</p>
<ol>
<li>Single or multiple motor or vocal tics (i.e., sudden, rapid, recurrent, nonrhythmic, stereotyped motor movements or vocalizations), but not both, have been present at some time during the illness.</li>
<li>The tics occur many times a day nearly every day or intermittently throughout a period of more than 1 year, and during this period there was never a tic-free period of more than 3 consecutive months.</li>
<li>The disturbance causes marked distress or significant impairment in social, occupational, or other important areas of functioning.</li>
<li>The onset is before age 18 years.</li>
<li>The disturbance is not due to the direct physiological effects of a substance (e.g., stimulants) or a general medical condition (e.g., Huntington's disease or postviral encephalitis).</li>
<li>Criteria have never been met for Tourette's Disorder.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Chronic Motor Tic Disorder.</p>
<ol>
<li>Presence of recurrent, involuntary, repetitive, rapid, purposeless movements (tics) involving no more than three muscle groups at any one time.</li>
<li>Unvarying intensity of the tics over weeks or months.</li>
<li>Ability to suppress the movements voluntarily for minutes to hours.</li>
<li>Duration of at least one year.</li>
</ol>
</div> 
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Not listed.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Not listed, though tics are included as a Neurotic Traits symptom.</p>
</div> `,jd=Object.freeze(Object.defineProperty({__proto__:null,attributes:h_,html:f_},Symbol.toStringTag,{value:"Module"})),p_={title:"Provisional Tic Disorder",description:"One or more motor or vocal tics persistenting for less than a year.",acronyms:null,synonyms:null,prevalence:"10%"},m_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Single or multiple motor and/or vocal tics.</li>
<li>The tics have been present for less than 1 year since first tic onset.</li>
<li>Onset is before 18 years.</li>
<li>The disturbance is not attributable to the physiological effects of a substance (e.g., cocaine) or another medical condition (e.g., Huntington’s disease, postviral encephalitis).</li>
<li>Criteria have never been met for Tourette’s disorder or
persistent (chronic) motor or vocal tic disorder.</li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Transient Tic Disorder.</p>
<ol>
<li>Single or multiple motor and/or vocal tics (i.e., sudden, rapid, recurrent, nonrhythmic, stereotyped motor movements or vocalizations).</li>
<li>The tics occur many times a day, nearly every day for at least 4 weeks, but for no longer than 12 consecutive months.</li>
<li>The disturbance causes marked distress or significant impairment in social, occupational, or other important areas of functioning.</li>
<li>The onset is before age 18 years.</li>
<li>The disturbance is not due to the direct physiological effects of a substance (e.g., stimulants) or a general medical condition (e.g., Huntington's disease or postviral encephalitis).</li>
<li>Criteria have never been met for Tourette's Disorder or Chronic Motor or Vocal Tic Disorder.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Single Episode</li>
<li>Recurrent</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Transient Tic Disorder.</p>
<ol>
<li>Onset during childhood or early adolescence.</li>
<li>Presence of recurrent, involuntary, repetitive, rapid, purposeless, motor movements (tics).</li>
<li>Ability to suppress the movements voluntarily for minutes to hours.</li>
<li>Variation in the intensity of the symptoms over weeks or months.</li>
<li>Duration of at least one month but not more than one year.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Not listed.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Not listed.</p>
</div>`,Ud=Object.freeze(Object.defineProperty({__proto__:null,attributes:p_,html:m_},Symbol.toStringTag,{value:"Module"})),g_={title:"Tourette's Disorder",description:"Multiple, multifacted (motor and vocal) tics persisting for over one year.",prevalence:"0.3-0.9%",synonyms:"Tourette's Syndrome",acronyms:"TS"},y_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Both multiple motor and one or more vocal tics have
been present at some time during the illness, although not
necessarily concurrently.</li>
<li>The tics may wax and wane in frequency but have persisted for more than 1 year since first tic onset.</li>
<li>Onset is before 18 years.</li>
<li>The disturbance is not attributable to the physiological effects of a substance (e.g., cocaine) or another medical condition (e.g., Huntington’s disease, postviral encephalitis).</li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Tourette's Disorder.</p>
<ol>
<li>Both multiple motor and one or more vocal tics have been present at some time during the illness, although not necessarily concurrently. (A tic is a sudden, rapid, recurrent, nonrhythmic, stereotyped motor movement or vocalization.)</li>
<li>The tics occur many times a day (usually in bouts) nearly every day or intermittently throughout a period of more than 1 year, and during this period there was never a tic-free period of more than 3 consecutive months.</li>
<li>The disturbance causes marked distress or significant impairment in social, occupational, or other important areas of functioning.</li>
<li>The onset is before age 18 years.</li>
<li>The disturbance is not due to the direct physiological effects of a substance (e.g., stimulants) or a general medical condition (e.g., Huntington's disease or postviral encephalitis).</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Tourette's Disorder.</p>
<ol>
<li>Age at onset between 2 and 15 years.</li>
<li>Presence of recurrent, involuntary, repetitive, rapid, purposeless motor movements affecting multiple muscle groups.</li>
<li>Multiple vocal tics.</li>
<li>Ability to suppress movements voluntarily for minutes to hours.</li>
<li>Variations in the intensity of the symptoms over weeks or months.</li>
<li>Duration of more than one year.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Not listed.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Not listed.</p>
</div>
</div>`,Hd=Object.freeze(Object.defineProperty({__proto__:null,attributes:g_,html:y_},Symbol.toStringTag,{value:"Module"})),b_={title:"Unspecified Tic Disorder",description:"Tic symptoms are present but do not fulfill more specific criteria or there is insufficient information.",prevalence:null,acronyms:null,synonyms:null},v_=`<p>The Unspecified Tic Disorder diangosis is given when:</p>
<ul>
<li>There are tic symptoms but they do not meet the full criteria of a specific tic disorder or there is insufficient information.</li>
<li>The clinician chooses not to specify the reason why criteria aren't met.</li>
</ul>
`,$d=Object.freeze(Object.defineProperty({__proto__:null,attributes:b_,html:v_},Symbol.toStringTag,{value:"Module"})),T_={title:"Other Specified Neurodevelopmental Disorder",description:"Symptoms of a neurodevelopmental disorder that do not meet full criteria for a more specific disorder for a specific reason."},E_=`<p>This diagnosis is given when symptoms of a neurodevelopmental disorder are present but do not fulfill the criteria for a more specific diagnosis and the clinician chooses to specify the reason why. For example, &quot;Neurodevelopmental disorder associated with prenatal alcohol exposure&quot;.</p>
`,qd=Object.freeze(Object.defineProperty({__proto__:null,attributes:T_,html:E_},Symbol.toStringTag,{value:"Module"})),__={title:"Specific Learning Disorder",description:"Persistent significant difficulty performing arithmetical calculations.",prevalence:"3-7%",synonyms:"Specific Learning Disorder with impairment in mathematics",acronyms:"SLD"},x_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Difficulties learning and using academic skills, as indicated by the presence of at least one of the following symptoms that have persisted for at least 6 months, despite the provision of interventions that target those difficulties:
<ol>
<li>Inaccurate or slow and effortful word reading (e.g., reads single words aloud incorrectly or slowly and hesitantly, frequently guesses words, has difficulty sounding out words).</li>
<li>Difficulty understanding the meaning of what is read (e.g., may read text accurately but not understand the sequence, relationships, inferences, or deeper meanings of what is read).</li>
<li>Difficulties with spelling (e.g., may add, omit, or substitute vowels or consonants).</li>
<li>Difficulties with written expression (e.g., makes multiple grammatical or punctuation errors within sentences; employs poor paragraph organization; written expression of ideas lacks clarity).</li>
<li>Difficulties mastering number sense, number facts, or calculation (e.g., has poor understanding of numbers, their magnitude, and relationships; counts on fingers to add single-digit numbers instead of recalling the math fact as peers do; gets lost in the midst of arithmetic computation and may switch procedures).</li>
<li>Difficulties with mathematical reasoning (e.g., has severe difficulty applying mathematical concepts, facts, or procedures to solve quantitative problems).</li>
</ol>
</li>
<li>The affected academic skills are substantially and quantifiably below those expected for the individual’s chronological age, and cause significant interference with academic or occupational performance, or with activities of daily living, as confirmed by individually administered standardized achievement measures and comprehensive clinical assessment. For individuals age 17 years and older, a documented history of impairing learning difficulties may be substituted for the standardized assessment.</li>
<li>The learning difficulties begin during school-age years but may not become fully manifest until the demands for those affected academic skills exceed the individual’s limited capacities (e.g., as in timed tests, reading or writing lengthy complex reports for a tight deadline, excessively heavy academic loads).</li>
<li>The learning difficulties are not better accounted for by intellectual disabilities, uncorrected visual or auditory acuity, other mental or neurological disorders, psychosocial adversity, lack of proficiency in the language of academic instruction, or inadequate educational instruction.<br>
<i>Note: The four diagnostic criteria are to be met based on a
clinical synthesis of the individual’s history  (developmental, medical, family, educational), school reports, and psychoeducational assessment.</i></li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Severity
<ul>
<li>Mild —  Some difficulties in one or two academic areas and are able to compensive with accommodations and support.</li>
<li>Moderate — Considerable difficulties in one or more academic areas and require intensive and sustained support to achieve proficiency.</li>
<li>Severe —  Extreme difficulties in several academic areas and require substantial and ongoing support to perform even basic academic tasks.</li>
</ul>
</li>
<li>With impairment in reading (dyslexia)
<ul>
<li>Reading comprehension</li>
<li>Reading rate or fluency</li>
<li>Word reading accuracy</li>
</ul>
</li>
<li>With impairment in writing (dysgraphia)
<ul>
<li>Spelling accuracy</li>
<li>Grammar and punctuation accuracy</li>
<li>Clarity and organization of written expression</li>
</ul>
</li>
<li>With impairment in mathematics (dyscalculia)
<ul>
<li>Number sense</li>
<li>Memorization of arithmetic facts</li>
<li>Accurate or fluent calculation</li>
<li>Accurate math reasoning</li>
</ul>
</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as separate Learning Disorders: Reading Disorder, Mathematics Disorder, Disorder of Written Expression, and Learning Disorder Not Otherwise Specified.</p>
<p><b>Reading Disorder</b></p>
<ol>
<li>Reading achievement, as measured by individually administered standardized tests of reading accuracy or comprehension, is substantially below that expected given the person's chronological age, measured intelligence, and age-appropriate education.</li>
<li>The disturbance in Criterion 1 significantly interferes with academic achievement or activities of daily living that require reading skills.</li>
<li>If a sensory deficit is present, the reading difficulties are in excess of those usually associated with it.</li>
</ol>
<p><b>Mathematics Disorder</b></p>
<ol>
<li>Mathematical ability, as measured by individually administered standardized tests, is substantially below that expected given the person's chronological age, measured intelligence, and age-appropriate education.</li>
<li>The disturbance in Criterion 1 significantly interferes with academic achievement or activities of daily living that require mathematical ability.</li>
<li>If a sensory deficit is present, the difficulties in mathematical ability are in excess of those usually associated with it.</li>
</ol>
<p><b>Disorder of Written Expression</b></p>
<ol>
<li>Writing skills, as measured by individually administered standardized tests (or functional assessments of writing skills), are substantially below those expected given the person's chronological age, measured intelligence, and age-appropriate education.</li>
<li>The disturbance in Criterion 1 significantly interferes with academic achievement or activities of daily living that require the composition of written texts (e.g., writing grammatically correct sentences and organized paragraphs).</li>
<li>If a sensory deficit is present, the difficulties in writing skills are in excess of those usually associated with it.</li>
</ol>
<p><b>Learning Disorder Not Otherwise Specified</b><br>
This category is for disorders in learning that do not meet criteria for any specific Learning Disorder. This category might include problems in all three areas (reading, mathematics, written expression) that together significantly interfere with academic achievement even
though performance on tests measuring each individual skill is not substantially below that expected given the person's chronological age, measured intelligence, and ageappropriate education.</p>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Developmental Reading Disorder, Developmental Arithmetic Disorder, Developmental Language Disorder, and Developmental Articulation Disorder.</p>
<p><b>Developmental Reading Disorder</b><br>
Performance on standardized, individually administered tests of reading skill is significantly below the expected level, given the individual's schooling, chronological age, and mental age (as determined by an individually administered IQ test). In addition, in school, the child's performance on tasks requiring reading skills is significantly below his or her intellectual capacity.</p>
<p><b>Developmental Arithmetic Disorder</b><br>
Performance on standardized/ individually administered tests of arithmetic achievement is significantly below expected level, given the individual's schooling, chronological age, and mental age (as determined by an individually administered IQ test), in addition, in school, the child's performance on tasks requiring arithmetic skills is significantly below his or her intellectual capacity.</p>
<p><b>Developmental Language Disorder, Expressive Type</b></p>
<ol>
<li>Failure to develop vocal expression (encoding) of language despite relatively intact comprehension of language.</li>
<li>Presence of inner language (the presence of age-appropriate concepts, such as understanding; the purpose and use of a particular household
object).</li>
<li>Not due to Mental Retardation, Childhood Onset Pervasive Developmental Disorder, hearing impairment, or trauma.</li>
</ol>
<p><b>Developmental Language Disorder, Receptive Type</b></p>
<ol>
<li>Failure to develop comprehension (decoding) and vocal expression (encoding) of language.</li>
<li>Not due to hearing impairment trauma, Mental Retardation, or Childhood Onset Pervasive Developmental Disorder.</li>
</ol>
<p><b>Developmental Articulation Disorder</b></p>
<ol>
<li>Failure to develop consistent articulations of the later-acquired speech sounds, such as r, sh, th, f, z, l, or ch.</li>
<li>Not due to Developmental Language Disorder, Mental Retardation, Childhood Onset Pervasive Developmental Disorder, or physical disorders.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Appears as a code but is not defined.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Appears as a code but is not defined.</p>
</div>`,Wd=Object.freeze(Object.defineProperty({__proto__:null,attributes:__,html:x_},Symbol.toStringTag,{value:"Module"})),S_={title:"Unspecified Neurodevelopmental Disorder",description:"Symptoms of a neurodevelopmental disorder that do not meet full criteria for a more specific disorder."},w_=`<p>This diagnosis is given when symptoms of a neurodevelopmental disorder are present but do not fulfill the criteria for a more specific diagnosis and the clinician chooses not to specify the reason why, which includes presentations in which there is insufficient information to make a more specific diagnosis (e.g., in emergency rooms).</p>
`,Vd=Object.freeze(Object.defineProperty({__proto__:null,attributes:S_,html:w_},Symbol.toStringTag,{value:"Module"})),D_={title:"Body Dysmorphic Disorder",description:"Preoccupation with one or more imagined or exaggerated defect in physical appearance.",prevalence:"2.5% in U.S. women, 2.2% in U.S. men",synonyms:"Dysmorphophobia"},I_=`<p>The DSM-5 notes that individuals with body dysmorphic disorder report that they look &quot;unattractive&quot;, &quot;not right&quot;, &quot;hideous&quot;, or even &quot;like a monster&quot;. These preoccupations are commonly focused on the skin, hair, or nose, but any body area can be the focus of concern (e.g., eyes, teeth, weight, stomach, breasts, legs, face, lips, chin, eyebrows, genitals).<br>
Body dysmorphic disorder is associated with ideas or delusions of reference in which individuals believe that other people take special notice of them or mock how they look. The disorder has been connected to abnormalities in emotion recognition, attention, and executive function, as well as information-processing biases and inaccuracies. Interesetingly, visual processing abnormalities have also been identified, with a bias for analyzing and encoding details rather than holistic or configural aspects of visual stimuli.</p>
<div class = "dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Preoccupation with one or more perceived defects or flaws in physical appearance that are not observable or appear slight to others.</li>
<li>At some point during the course of the disorder, the individual has performed repetitive behaviors (e.g., mirror checking, excessive grooming, skin picking, reassurance seeking) or mental acts (e.g., comparing his or her appearance with that of others) in response to the appearance concerns.</li>
<li>The preoccupation causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The appearance preoccupation is not better explained by concerns with body fat or weight in an individual whose symptoms meet diagnostic criteria for an eating disorder.</li>
</ol>
<p>####### Specifiers</p>
<ul>
<li>With muscle dysmorphia (almost exclusively occurs in men)</li>
<li>With good or fair insight</li>
<li>With poor insight</li>
<li>With abset insight/delusional beliefs</li>
</ul>
<h5>Differential Diagnosis</h5>
<ul>
<li>Normal appearance and clearly noticeable physical defects</li>
<li>Eating disorders</li>
<li>Other obsessive-compulsive and related disorders</li>
<li>Illness anxiety disorder</li>
<li>MDD</li>
<li>Anxiety disorders</li>
<li>Psychotic disorders</li>
<li>Other disorders and symptoms (e.g., gender dysphoria, olfactory reference disorder/syndrome, Koro)</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box">
<h2>DSM-IV</h2>
<p><i>Listed under Somatoform Disorders with the same name.</i></p>
<ol>
<li>Preoccupation with an imagined defect in appearance. If a slight physical anomaly is present, the person's concern is markedly excessive.</li>
<li>The preoccupation causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The preoccupation is not better accounted for by another mental disorder (e.g., dissatisfaction with body shape and size in Anorexia Nervosa).</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p><i>Listed under Somatoform Disorders as an example of an Atypical Somatoform Disorder.</i></p>
<p>This is a residual category to be used when the predominant disturbance is the presentation of physical symptoms or complaints not explainable on the basis of demonstrable organic findings or a known pathophysiological mechanism and apparently linked to psychological factors.<br>
An example of cases that can be classified here include those of individuals who are preoccupied with some imagined defect in physical appearance that is
out of proportion to any actual physical abnormality that may exist. This syndrome has sometimes been termed &quot;Dysmorphophobia.&quot;</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box">
<h2>DSM-II</h2>
<p><i>Does not appear.</i></p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box">
<h2>DSM</h2>
<p><i>Does not appear.</i></p>
</div>
</div>`,Yd=Object.freeze(Object.defineProperty({__proto__:null,attributes:D_,html:I_},Symbol.toStringTag,{value:"Module"})),k_={title:"Excoration (Hair-Picking) Disorder",description:"Recurrent skin picking resulting in skin lesions.",prevalence:"2.1-3.1%"},C_=`<p>Skin picking may be accompanied by a range of behaviors or rituals involving skin or scabs. Thus, individuals may search for a particular kind of scab to pull, and they may examine, play with, or mouth or swallow the skin after it has been pulled.</p>
<h2>DSM-5-TR (2022)</h2>
<ol>
<li>Recurrent skin picking resulting in skin lesions.</li>
<li>Repeated attempts to decrease or stop skin picking.</li>
<li>The skin picking causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The skin picking is not attributable to the physiological effects of a substance (e.g., cocaine) or another medical condition (e.g., scabies).</li>
<li>The skin picking is not better explained by symptoms of another mental disorder (e.g., delusions or tactile hallucinations in a psychotic disorder, attempts to improve a perceived defect or flaw in appearance in body dysmorphic disorder, stereotypies in stereotypic movement disorder, or intention to harm oneself in nonsuicidal self-injury).</li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>Psychotic disorder</li>
<li>Other obsessive-compulsive and related disorders</li>
<li>Neurodevelopmental disorders</li>
<li>Dermatitis artefacta</li>
<li>Other disorders</li>
<li>Other medical conditions</li>
<li>Substance/medication-induced disorders</li>
</ul>
<h2>DSM-IV (1994)</h2>
<p><i>Appears as an associated feature to Trichotillomania (&quot;Nail biting, scratching, gnawing, and excoriation may be associated with Trichotillomania.&quot;)</i></p>
<h2>DSM-III (1980)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM-II (1968)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM (1952)</h2>
<p><i>Does not appear.</i></p>
`,Qd=Object.freeze(Object.defineProperty({__proto__:null,attributes:k_,html:C_},Symbol.toStringTag,{value:"Module"})),A_={title:"Hoarding Disorder",description:"Distress and difficulty discarding or parting with possessions, regardless of their actual value.",prevalence:"1.5-6%"},O_=`<p>Individuals with hoarding disorder purposefully save possessions and experience distress (e.g., anxiety, frustration, regret, sadness, guilt) when facing the prospect of discarding them. They accumulate large numbers of items that fill up and clutter active living areas to the extend that their intended use is no longer possible.<br>
Common features of those with hoarding disorder are indecisiveness, perfectionism, avoidance, procrastination, difficulty planning and organizing tasks, and distractability. In fact, indecisiveness is a prominent feature of individuals with hoarding disorder and their first-degree relatives.</p>
<h2>DSM-5-TR (2022)</h2>
<ol>
<li>Persistent difficulty discarding or parting with possessions, regardless of their actual value.</li>
<li>This difficulty is due to a perceived need to save the items and to distress associated with discarding them.</li>
<li>The difficulty discarding possessions results in the accumulation of possessions that congest and clutter active living areas and substantially compromises their intended use. If living areas are uncluttered, it is only because of the interventions of third parties (e.g., family members, cleaners,
authorities).</li>
<li>The hoarding causes clinically significant distress or impairment in social, occupational, or other important areas of functioning (including maintaining a safe environment for self and others).</li>
<li>The hoarding is not attributable to another medical condition (e.g., brain injury, cerebrovascular disease, Prader-Willi syndrome).</li>
<li>The hoarding is not better explained by the symptoms of another mental disorder (e.g., obsessions in OCD, decreased energy in MDD, delusions in schizophrenia or another psychotic disorder, cognitive deficits in major neurocognitive disorder, restricted interests in ASD).</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With excessive acquisition (80-90% of cases)</li>
<li>With good or fair insight</li>
<li>With poor insight</li>
<li>With absent insight/delusional beliefss</li>
</ul>
<h4>Differential Diagnosis</h4>
<p>Hoarding disorder is not diagnosed if the accumulation of objects is judged to be a direct consequence of these diagnoses:</p>
<ul>
<li>Other medical conditions (e.g., traumatic brain injury, surgical resection for treatment of a tumor or seizure control, cerebrovascular disease)</li>
<li>Neurodevelopmental disorders (e.g., ASD, ID)</li>
<li>Schizophrenia spectrum and other psychotic disorders</li>
<li>Major depressive episode</li>
<li>OCD<br>
<i>Note, hoarding behavior in OCD is generally unwanted and highly distressing, and the person feels no pleasure or reward. Excessive acquisition is usually not present, but may be due to a specific obsessions (e.g., the need to buy things that have been touched in order to avoid contaminating others), not because of a genuine desire to possess the items. People with OCD who hoard are more likely to accumulate bizarre items, such as trash, feces, urine, fingernail clippings, hair, used diapers, or rotten food, which are very unusual in hoarding disorder.</li>
<li>Neurocognitive disorders (e.g., degenerative disorders like Alzheimer's disease)</li>
</ul>
<h2>DSM-IV (1994)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM-III (1980)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM-II (1968)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM (1952)</h2>
<p><i>Does not appear.</i></p>
`,Gd=Object.freeze(Object.defineProperty({__proto__:null,attributes:A_,html:O_},Symbol.toStringTag,{value:"Module"})),N_={title:"Obsessive-Compulsive and Related Disorder Due to Another Medical Condition",description:"Obsessive-compulsive symptoms due to another medical condition."},P_=`<h2>DSM-5-TR (2022)</h2>
<ol>
<li>Obsessions, compulsions, preoccupations with appearance, hoarding, skin picking, hair pulling, other body-focused repetitive behaviors, or other symptoms characteristic of obsessive-compulsive and related disorder predominate in the clinical picture.</li>
<li>There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.</li>
<li>The disturbance is not better explained by another mental disorder.</li>
<li>The disturbance does not occur exclusively during the course of a delirium.</li>
<li>The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With obsessive-compulsive disorder–like symptoms</li>
<li>With appearance preoccupations</li>
<li>With hoarding symptoms</li>
<li>With hair-pulling symptoms</li>
<li>With skin-picking symptoms</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Delirium</li>
<li>Mixed presentation of symptoms (e.g., mood and obsessive-compulsive and related symptoms) judged to be due to another medical condition</li>
<li>Substance/medication-induced obsessive-compulsive and related disorders</li>
<li>Obsessive-compulsive and related disorders (primary)</li>
<li>Illness anxiety disorder</li>
<li>Associated feature of another mental disorder</li>
<li>Other specified obsessive-compulsive and related disorder or unspecified
obsessive-compulsive and related disorder</li>
</ul>
<h2>DSM-IV (1994)</h2>
<p><i>Listed under the Anxiety Disorders section as &quot;Anxiety Disorder Due to a General Medical Condition, with obsessive-compulsive symptoms&quot;.</i></p>
<ol>
<li>Prominent anxiety, Panic Attacks, or obsessions or compulsions predominate in the clinical picture.</li>
<li>There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct physiological consequence of a general medical condition.</li>
<li>The disturbance is not better accounted for by another mental disorder (e.g., Adjustment Disorder With Anxiety in which the stressor is a serious general medical condition).</li>
<li>The disturbance does not occur exclusively during the course of a delirium.</li>
<li>The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With Generalized Anxiety</li>
<li>With Panic Attacks</li>
<li>With Obsessive-Compulsive Symptoms</li>
</ul>
<h2>DSM-III (1980)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM-II (1968)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM (1952)</h2>
<p><i>Does not appear.</i></p>
`,Kd=Object.freeze(Object.defineProperty({__proto__:null,attributes:N_,html:P_},Symbol.toStringTag,{value:"Module"})),M_={title:"Obsessive-Compulsive Disorder",description:"Recurrent intrusive thoughts, urges, or images that cause anxiety (obsessions) and/or repetitive, ritualistic behaviors that are unrealistically or excessively applied in response to an obsession or according to rigid rules (compulsions).",acronyms:"OCD",prevalence:"1.2%"},R_=`<h2>DSM-5-TR (2022)</h2>
<ol>
<li>Presence of obsessions, compulsions, or both, as defined by:<br>
<i>Obsessions</i>
<ol>
<li>Recurrent and persistent thoughts, urges, or images that are experienced, at some time during the disturbance, as intrusive and unwanted, and that in most individuals cause marked anxiety or distress.</li>
<li>The individual attempts to ignore or suppress such thoughts, urges, or images, or to neutralize them with some other thought or action (i.e., by performing a compulsion).<br>
<i>Compulsions</i></li>
<li>Repetitive behaviors (e.g., hand washing, ordering, checking) or mental acts (e.g., praying, counting, repeating words silently) that the individual feels driven to perform in response to an obsession or according to rules that must be applied rigidly.</li>
<li>The behaviors or mental acts are aimed at preventing or reducing anxiety or distress, or preventing some dreaded event or situation; however, these behaviors or mental acts are not connected in a realistic way with what they are designed to neutralize or prevent, or are clearly excessive.<br>
<i>Note, young children may not be able to articulate the aims of these behaviors or mental acts.</i></li>
</ol>
</li>
<li>The obsessions or compulsions are time-consuming (e.g., take more than 1 hour per day) or cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The obsessive-compulsive symptoms are not attributable to the effects of a substance or another medication condition.</li>
<li>The disturbance is not better explained by the symptoms of another mental disorder (e.g., excessive worries, as in GAD; preoccupation with appearance, as in body dysmorphic disorder; difficulty discarding or parting with possessions, as in hoarding disorder; hair pulling, as in trichotillomania [hair-pulling disorder]; skin picking, as in excoriation [skin-picking] disorder; stereotypies, as in stereotypic movement disorder; ritualized eating behavior, as in eating disorders; preoccupation with substances or gambling, as in substance-related and addictive disorders; preoccupation with having an illness, as in illness anxiety disorder; sexual urges or fantasies, as in paraphilic disorders; impulses, as in disruptive, impulse-control, and conduct disorders; guilty ruminations, as in MDD; thought insertion or delusional preoccupations, as in schizophrenia spectrum and other psychotic disorders; or repetitive patterns of behavior, as in ASD).</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With good or fair insight — the individual recognizes that OCD beliefs are definitely or probably not true or that they may or may not be true.</li>
<li>With poor insight — The individual thinks OCD beliefs are probably true.</li>
<li>With absent insight/delusional beliefs — The individual is completely convinced that OCD beliefs are true.</li>
<li>Tic-related</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Anxiety disorders</li>
<li>MDD<br>
<i>Note, ruminative thoughts in MDD are usually mood-congruent and not necessarily experienced as intrusive or distressing, and are not linked to compulsions.</i></li>
<li>Other obsessive-compulsive and related disorders</li>
<li>Eating disorders</li>
<li>Tics and stereotyped movements</li>
<li>Psychotic disorders</li>
<li>Other compulsive-like behaviors (e.g., compulsive sexual behavior in paraphilias, gambling disorder, substance use disorders)</li>
<li>OCPD<br>
<i>Note, OCPD is not characterized by intrusive thoughts, images, urges, or repetitive behaviors. Instead, it involves an enduring and pervasive maladaptive pattern of excessive perfectionism and rigid control. Both diagnoses can be given to a person who manifests both sets of symptoms.</i></li>
</ul>
<h2>DSM-IV (1994)</h2>
<p><i>Listed under Anxiety Disorders by the name &quot;Obsessive-Compulsive Disorder&quot;.</i><br>
The DSM-IV notes that &quot;the most common obsessions are repeated thoughts about contamination, repeated doubts, a need to have things in a particular order, aggressive or horrific impulses, and sexual imagery&quot;.</p>
<ol>
<li>Either obsessions or compulsions:<br>
<i>Obsessions</i>
<ol>
<li>recurrent and persistent thoughts, impulses, or images that are experienced, at some time during the disturbance, as intrusive and inappropriate and that cause marked anxiety or distress.</li>
<li>the thoughts, impulses, or images are not simply excessive worries about real-life problems.</li>
<li>the person attempts to ignore or suppress such thoughts, impulses, or images, or to neutralize them with some other thought or action.</li>
<li>the person recognizes that the obsessional thoughts, impulses, or images are a product of his or her own mind (not imposed from without as in thought insertion).<br>
<i>Compulsions</i></li>
<li>repetitive behaviors (e.g., hand washing, ordering, checking) or mental acts (e.g., praying, counting, repeating words silently) that the person feels driven to perform in response to an obsession, or according to rules that must be applied rigidly.</li>
<li>the behaviors or mental acts are aimed at preventing or reducing distress or preventing some dreaded event or situation; however, these behaviors or mental acts either are not connected in a realistic way with what they are designed to neutralize or prevent or are clearly excessive.</li>
</ol>
</li>
<li>At some point during the course of the disorder, the person has recognized that the obsessions or compulsions are excessive or unreasonable.<br>
<i>Note, this does not apply to children.</i></li>
<li>The obsessions or compulsions cause marked distress, are time consuming (take more than 1 hour a day), or significantly interfere with the person's normal routine, occupational (or academic) functioning, or usual social activities or relationships.</li>
<li>If another Axis I disorder is present, the content of the obsessions or compulsions is not restricted to it (e.g., preoccupation 'with food in the presence of an Eating Disorder; hair pulling in the presence of Trichotillomania; concern with appearance in the presence of Body
Dysmorphic Disorder; preoccupation with drugs in the presence of a Substance Use Disorder; preoccupation with having a serious illness in the presence of Hypochondriasis; preoccupation with sexual urges or fantasies in the presence of a Paraphilia; or guilty ruminations in the
presence of Major Depressive Disorder).</li>
<li>The disturbance is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With Poor Insight — if, for most of the time during the current episode, the person does not recognize that the obsessions and compulsions are excessive or unreasonable.</li>
</ul>
<h2>DSM-III (1980)</h2>
<p>The DSM-III lists under &quot;Obsessive Compulsive Disorder&quot; under the Anxiety Disorders section, and notes that &quot;the most common obsessions are repetitive thoughts of violence, contamination, and doubt (e.g., repeatedly wondering whether one has performed some action, such as having hurt someone in a traffic accident).</p>
<ol>
<li>Either obsessions or compulsions:<br>
Obsessions: recurrent, persistent Wets, thoughts, images, or impulses that are ego-dystonic, i.e., they are not experienced as voluntarily produced, but rather as thoughts that invade consciousness and are experienced as senseless or repugnant. Attempts are made to ignore or suppress them.<br>
Compulsions: repetitive and seemingly purposeful behaviors that are performed according to certain rules or in a stereotyped fashion. The behavior is not an end in itself, but is designed to produce or prevent some future event or situation. However, either the activity is not connected in a realistic way with what it is designed to produce or prevent, or may be clearly excessive. The act is performed with a sense of subjective compulsion coupled with a desire to resist the compulsion (at least initially). The individual generally recognizes the senselessness of the behavior (this may not be true for young children) and does not derive pleasure from carrying out the activity, although it provides a release of tension.</li>
<li>The obsessions or compulsions are a significant source of distress to the individual or interfere with social or role functioning.</li>
<li>Not due to another mental disorder, such as Tourette's Disorder, Schizophrenia, Major Depression, or Organic Mental Disorder.</li>
</ol>
<h2>DSM-II (1968)</h2>
<p>The DSM-II list &quot;Obsessive compulsive neurosis&quot; under the Neuroses section alongside anxiety neurosis, hysterical neurosis (dissociative and conversion type), phobic neurosis, depressive neurosis, neurasthenic neurosis (chronic weakness and fatigue), depersonalization neurosis, and hypochondriacal neurosis. Similar to the psychoneurotic reactions of the original DSM, the Neuroses section description specifies that &quot;anxiety is the chief characteristic of neuroses&quot;.</p>
<h4>Criteria</h4>
<p>This disorder is characterized by the persistent intrusion of unwanted thoughts, urges, or actions that the patient is unable to stop. The thoughts may consist of single words or ideas, ruminations, or trains of thought often perceived by the patient as nonsensical. The actions vary from simple movements to complex rituals such as repeated handwashing. Anxiety and distress are often present either if the patient is prevented from completing his compulsive ritual or if he is concerned about being unable to control it himself.</p>
<h2>DSM (1952)</h2>
<p>The original DSM lists &quot;Obsessive compulsive reaction&quot; under Psychoneurotic Disorders or Psychoneurotic Reactions alongside anxiety reaction, dissociative reaction, conversion reaction, phobic reaction, and depressive reaction. This version of the DSM states that &quot;the chief characteristic of [psychoneurotic disorders] is 'anxiety' which may be directly felt and expressed or which may be unconsciously and automatically controlled by the utilization of various psychological defence mechanisms (depressions, conversion, displacement, etc.)&quot; and that those defense mechanisms used to cope with anxiety result in the various psychoneurotic reactions.</p>
<h4>Criteria</h4>
<p>In this reaction the anxiety is associated with the persistence of unwanted ideas and of repetitive impulses to perform acts which may be considered morbid by the patient. The patient himself may regard his ideas and behavior as unreasonable, but nevertheless is compelled to carry out his rituals. The diagnosis will specify the symptomatic expression of such reactions, as touching, counting, ceremonials, hand-washing, or recurring thoughts (accompanied often by a compulsion to repetitive action). This category includes many cases formerly classified as &quot;psychasthenia.&quot;</p>
`,Xd=Object.freeze(Object.defineProperty({__proto__:null,attributes:M_,html:R_},Symbol.toStringTag,{value:"Module"})),L_={title:"Other Specified Obsessive Compulsive Disorder",description:"Obsessive-compulsive symptoms that dominate the clinical picture but do not meet full criteria for a specified reason."},F_=`<h2>DSM-5-TR (2022)</h2>
<p>This category applies to presentations in which symptoms characteristic of an obsessive-compulsive and related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the obsessive-compulsive and related disorders diagnostic class. The other specified obsessive-compulsive and related disorder category is used in situations in which the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for any specific obsessive-compulsive and related disorder. This is done by recording “other specified obsessive-compulsive and related disorder” followed by the specific reason (e.g., “obsessional jealousy”).<br>
Examples of presentations that can be specified using the “other specified” designation include the following:</p>
<ul>
<li>Body dysmorphic–like disorder with actual flaws — Similar to body dysmorphic disorder except that the defects or flaws in physical appearance are clearly observable by others (i.e., they are more noticeable than “slight”). In such cases, the preoccupation with these flaws is clearly excessive and causes significant impairment or distress.</li>
<li>Body dysmorphic–like disorder without repetitive behaviors — Presentations that meet body dysmorphic disorder except that the individual has never performed repetitive behaviors or mental acts in response to the appearance concerns.</li>
<li>Other body-focused repetitive behavior disorder — Presentations involving recurrent body-focused repetitive behaviors other than hair pulling and skin picking (e.g., nail biting, lip biting, cheek chewing) that are accompanied by repeated attempts to decrease or stop the behaviors and that cause clinically significant distress or impairment in social, occupational, or other important areas of  functioning.</li>
<li>Obsessional jealousy — Nondelusional preoccupation with a partner’s perceived infidelity. The preoccupations may lead to repetitive behaviors or mental acts in response to the infidelity concerns; they cause clinically significant distress or impairment in social, occupational, or other important areas of functioning; and they are not better explained by another mental disorder such as delusional disorder, jealous type, or paranoid personality disorder.</li>
<li>Olfactory reference disorder (olfactory reference syndrome) — This is characterized by the individual’s persistent preoccupation with the belief that he or she emits a foul or offensive body odor that is unnoticeable or only slightly noticeable to others; in response to this preoccupation, these individuals often engage in repetitive and excessive behaviors such as repeatedly checking for body odor, excessive showering, or seeking reassurance, as well as excessive attempts to camouflage the perceived odor. These symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning. In traditional Japanese psychiatry, this disorder is known as jikoshu-kyofu, a variant of taijin kyofusho.</li>
<li>Shubo-kyofu — A variant of taijin kyofusho that is similar to body dysmorphic disorder and is characterized by excessive fear of having a bodily deformity.</li>
<li>Koro — Related to dhat syndrome, an episode of sudden
and intense anxiety that the penis in males (or the vulva and
nipples in females) will recede into the body, possibly leading
to death.</li>
</ul>
<h2>DSM-IV (1994)</h2>
<p><i>Does not appear<i></p>
<h2>DSM-III (1980)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM-II (1968)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM (1952)</h2>
<p><i>Does not appear.</i></p>
`,Jd=Object.freeze(Object.defineProperty({__proto__:null,attributes:L_,html:F_},Symbol.toStringTag,{value:"Module"})),B_={title:"Substance/Medication-Induced Obsessive Compulsive and Related Disorder",description:null},z_=`<h2>DSM-5-TR</h2>
<ol>
<li>Obsessions, compulsions, skin picking, hair pulling, other body-focused repetitive behaviors, or other symptoms characteristic of the  obsessive-compulsive and related disorders predominate in the clinical picture.</li>
<li>There is evidence from the history, physical examination, or laboratory findings of both:
<ol>
<li>The symptoms developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.</li>
<li>The involved substance/medication is capable of producing the symptoms.</li>
</ol>
</li>
<li>The disturbance is not better explained by an obsessive-compulsive and related disorder that is not substance/medication-induced. Such evidence of an independent obsessive-compulsive and related disorder could include the following:<br>
The symptoms precede the onset of the substance/medication use; the symptoms persist for a substantial period of time (e.g., about 1 month) after the cessation of acute withdrawal or severe intoxication; or there is other evidence suggesting the existence of an independent non-substance/medication-induced obsessive-compulsive and related disorder (e.g., a history of recurrent non-substance/medication-related episodes).</li>
<li>The disturbance does not occur exclusively during the course of a delirium.</li>
<li>The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With onset during intoxication</li>
<li>With onset during withdrawal</li>
<li>With onset after medication use</li>
</ul>
<h4>Differential Diagnosis</h4>
<ul>
<li>Substance intoxication and substance withdrawal</li>
<li>Obsessive-compulsive and related disorder (i.e., not induced by a substance)</li>
<li>Obsessive-compulsive and related disorder due to another medical condition.</li>
<li>Delirium</li>
</ul>
<h2>DSM-IV (1994)</h2>
<p><i>Appears in the Anxiety Disorders section as Substance-Induced Anxiety Disorder &quot;with obsessive-compulsive symptoms&quot;.</i></p>
<h2>DSM-III (1980)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM-II (1968)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM (1952)</h2>
<p><i>Does not appear.</i></p>
`,Zd=Object.freeze(Object.defineProperty({__proto__:null,attributes:B_,html:z_},Symbol.toStringTag,{value:"Module"})),j_={title:"Trichotillomania (Hair-Pulling Disorder)",description:"Recurrent pulling out of one’s hair, resulting in hair loss.",prevalence:"1-2%"},U_=`<p>Hair pulling is often accompanied by rituals or certain behaviors involving hair. Individuals may search for a particular kind of hair to pull (e.g., hairs with a specific texture or color), try to pull out hair in a specific way (e.g., so that the root comes out intact), or may visually examine or tactilely or orally manipulate the hair after it has been pulled (e.g., rolling the hair between the fingers, pulling the strand between the teeth, biting the hair into pieces, or swallowing the hair).<br>
The majority of individuals with trichotillomania also have one or more other body-focused repetitive behaviors, including skin picking, nail biting, and lip chewing. The disorder is more common in individuals with OCD and their first-degree relatives.</p>
<h2>DSM-5-TR (2022)</h2>
<ol>
<li>Recurrent pulling out of one’s hair, resulting in hair loss.</li>
<li>Repeated attempts to decrease or stop hair pulling.</li>
<li>The hair pulling causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The hair pulling or hair loss is not attributable to another medical condition (e.g., a dermatological condition).</li>
<li>The hair pulling is not better explained by the symptoms of another mental disorder (e.g., attempts to improve a perceived defect or flaw in appearance in body dysmorphic disorder).</li>
</ol>
<h4>Differential Diagnosis</h4>
<ul>
<li>Normative hair removal/manipulation</li>
<li>Other obsessive-compulsive and related disorders<br>
<i>Note, individuals with OCD and symmetry concerns may pull out hairs as part of their symmetry rituals, and individuals with body dysmorphic disorder may remove body hair that they perceive as ugly, asymmetrical, or abnormal; in such cases a diagnosis of trichotillomania is not given.</i></li>
<li>Stereotypic movement disorder</li>
<li>Psychotic disorder</li>
<li>Another medical condition</li>
<li>Substance-related disorders</li>
</ul>
<h2>DSM-IV (1994)</h2>
<ol>
<li>Recurrent pulling out of one's hair resulting in noticeable hair loss.</li>
<li>An increasing sense of tension immediately before pulling out the hair or when attempting to resist the behavior.</li>
<li>Pleasure, gratification, or relief when pulling out the hair.</li>
<li>The disturbance is not better accounted for by another mental disorder and is not due to a general medical condition (e.g., a dermatological condition).</li>
<li>The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h2>DSM-III (1980)</h2>
<p><i>Appears in the section for Special symptoms or syndromes not elsewhere classified as an example of the &quot;Other and unspecified&quot; category under &quot;Hair plucking&quot;.</i></p>
<h2>DSM-II (1968)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM (1952)</h2>
<p><i>Does not appear.</i></p>
`,eh=Object.freeze(Object.defineProperty({__proto__:null,attributes:j_,html:U_},Symbol.toStringTag,{value:"Module"})),H_={title:"Unspecified Obsessive Compulsive Disorder",description:"Obsessive-compulsive symptoms that dominate the clinical picture but do not meet full criteria for an unspecified reason."},$_=`<h2>DSM-5-TR</h2>
<p>This category applies to presentations in which symptoms characteristic of an obsessive-compulsive and related disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the obsessive-compulsive and related disorders diagnostic class. The unspecified obsessive-compulsive and related disorder category is used in situations in which the clinician chooses not to specify the reason that the criteria are not met for a specific obsessive-compulsive and related disorder and includes presentations in which there is insufficient information to make a more specific diagnosis (e.g., in emergency room settings).</p>
<h2>DSM-IV (1994)</h2>
<p><i>Does not appear<i></p>
<h2>DSM-III (1980)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM-II (1968)</h2>
<p><i>Does not appear.</i></p>
<h2>DSM (1952)</h2>
<p><i>Does not appear.</i></p>
`,th=Object.freeze(Object.defineProperty({__proto__:null,attributes:H_,html:$_},Symbol.toStringTag,{value:"Module"})),q_={title:"Exhibitionistic Disorder",description:"Recurrent and intense sexual arousal from the exposure of one's genitals to an unsuspecting person."},W_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Over a period of at least 6 months, recurrent and intense sexual arousal from the exposure of one's genitals to an unsuspecting person, as manifested by fantasies, urges, or behaviors.</li>
<li>The individual has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Sexually aroused by exposing genitals to prepubertal children</li>
<li>Sexually aroused by exposing genitals to physically mature individuals</li>
<li>Sexually aroused by exposing genitals to prepubertal children and to physically mature individuals</li>
<li>In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to expose one’s genitals are restricted.</li>
<li>In full remission: The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment.</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Exhibitionism in the Sexual and Gender Identity Disorders section.</p>
<ol>
<li>Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving the exposure of one's genitals to an unsuspecting stranger.</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Exhibitionism in the Psychosexual Disorders section.</p>
<p>Repetitive acts of exposing the genitals to an unsuspecting stranger for the purpose of achieving sexual excitement, with no attempt at further sexual activity with the stranger.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Exhibitionism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..</p>
<p>This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included under general Sexual Deviation diagnosis.</p>
<p>This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as &quot;psychopathic personality with pathologic sexuality.&quot; The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).</p>
</div>
</div>`,nh=Object.freeze(Object.defineProperty({__proto__:null,attributes:q_,html:W_},Symbol.toStringTag,{value:"Module"})),V_={title:"Fetishistic Disorder",description:"Recurrent and intense sexual arousal from either the use of nonliving objects or a highly specific focus on nongenital body parts."},Y_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Over a period of at least 6 months, recurrent and intense sexual arousal from either the use of nonliving objects or a highly specific focus on nongenital body par(s), as manifested by fantasies, urges, or behaviors.</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The fetish objects are not limited to articles of clothing used in cross-dressing (as in transvestic disorder) or devices specifically designed for the purpose of tactile genital stimulation (e.g., vibrator).</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Body part(s)</li>
<li>Nonliving object(s)</li>
<li>Other</li>
<li>In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to engage in fetishistic behaviors are restricted.</li>
<li>In full remission: There has been no distress or impairment in social, occupational, or other areas of functioning for at least 5 years while in an uncontrolled environment.</li>
</ul>
</div>  
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Fetishism in the Sexual and Gender Identity Disorders section.</p>
<ol>
<li>Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving the use of nonliving objects (e.g., female undergarments).</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The fetish objects are not limited to articles of female clothing used in cross-dressing (as in Transvestic Fetishism) or devices designed for the purpose of tactile genital stimulation (e.g., a vibrator).</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Fetishism in the Psychosexual Disorders section.</p>
<ol>
<li>The use of nonliving objects (fetishes) is a repeatedly preferred or exclusive method of achieving sexual excitement.</li>
<li>The fetishes are not limited to articles of female clothing used in cross-dressing (Transvestism) or to objects designed to be used for the purpose of sexual stimulation (e.g., vibrator).</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Fetishism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..</p>
<p>This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included under general Sexual Deviation diagnosis.</p>
<p>This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as &quot;psychopathic personality with pathologic sexuality.&quot; The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).</p>
</div>
</div>`,ih=Object.freeze(Object.defineProperty({__proto__:null,attributes:V_,html:Y_},Symbol.toStringTag,{value:"Module"})),Q_={title:"Frotteuristic Disorder",description:"Recurrent and intense sexual arousal from touching or rubbing against a nonconsenting person."},G_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Over a period of at least 6 months, recurrent and intense sexual arousal from touching or rubbing against a nonconsenting person, as manifested by fantasies, urges, or behaviors.</li>
<li>The individual has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to touch or rub against a nonconsenting person are restricted.</li>
<li>In full remission: The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment.</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Frotteurism in the Sexual and Gender Identity Disorders section.</p>
<ol>
<li>Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving touching and rubbing against a nonconsenting person.</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed under Atypical Paraphilia in the Psychosexual Disorders section.</p>
<p>This is a residual category for individuals with Paraphilias that cannot be classified in any of the other categories. Such conditions include: Coprophilia (feces); Frotteurism (rubbing); Klismaphilia (enema); Mysophilia (filth); Necrophilia (corpse); Telephone Scatologia (lewdness); and Urophilia (urine).</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Frotteurism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..</p>
<p>This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included as Sexual Deviation.</p>
<p>This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as &quot;psychopathic personality with pathologic sexuality.&quot; The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).</p>
</div>
</div>`,rh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Q_,html:G_},Symbol.toStringTag,{value:"Module"})),K_={title:"Other Specified Paraphilic Disorder",description:"Paraphilic presentations that cannot be classified by another diagnostic class for a specific reason but cause clinically significant distress or impairment."},X_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<p>This category applies to presentations in which symptoms characteristic of a paraphilic disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the paraphilic disorders diagnostic class. The other specified paraphilic disorder category is used in situations in which the clinician chooses to communicate the specific reason that the presentation does not meet the criteria for any specific paraphilic disorder. This is done by recording “other specified paraphilic disorder” followed by the specific reason (e.g., “zoophilia”).
Examples of presentations that can be specified using the “other specified” designation include, but are not limited to, recurrent and intense sexual arousal involving telephone scatologia (obscene phone calls), necrophilia (corpses), zoophilia (animals), coprophilia (feces), klismaphilia (enemas), or urophilia (urine) that has been present for at least 6 months and causes marked distress or impairment in social, occupational, or other important areas of functioning. Other specified paraphilic disorder can be specified as in remission and/or as occurr in a controlled environment.</p>
</div> 
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Paraphilia Not Otherwise Specified in the Sexual and Gender Identity Disorders section.</p>
<p>This category is included for coding Paraphilias that do not meet the criteria for any of the specific categories. Examples include, but are not limited to, telephone scatologia (obscene phone calls), necrophilia (corpses), partialism (exclusive focus on part of body), zoophilia (animals), coprophilia (feces), klismaphilia (enemas), and urophilia (urine).</p>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Includes a separate category for Zoophilia, as well as Atypical Paraphilia in the Psychosexual Disorders section.</p>
<p><i>Zoophilia</i><br>
The act or fanlaisy of engaging in sexual activity with animals is a repeatedly preferred or exclusive method of achieving sexual excitement.</p>
<p></i>Atypical Paraphilia</i><br>
This is a residual category for individuals with Paraphilias that cannot be classified in any of the other categories. Such conditions include: Coprophilia (feces); Frotteurism (rubbing); Klismaphilia (enema); Mysophilia (filth); Necrophilia (corpses); Telephone Scatologia (lewdness); and Urophilia (urine).</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Included as Other Sexual Deviation or Unspecified Sexual Deviation subtypes of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included under general Sexual Deviation diagnosis.</p>
<p>This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as &quot;psychopathic personality with pathologic sexuality.&quot; The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).</p>
</div>
</div>`,oh=Object.freeze(Object.defineProperty({__proto__:null,attributes:K_,html:X_},Symbol.toStringTag,{value:"Module"})),J_={title:"Pedophilic Disorder",description:"Recurrent and intense sexually arousing fantasies, sexual urges, or behaviors involving sexual activity with a prepubescent child (generally age 13 years or younger)."},Z_=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving sexual activity with a prepubescent child or children (generally aged 13 years or younger).</li>
<li>The individual has acted on these sexual urges, or the sexual urges or fantasies cause marked distress or interpersonal difficulty.</li>
<li>The individual is at least age 16 years and at least 5 years older than the child or children in Criterion 1.<br>
<i>Note, does not include an individual in late adolescence involved in an ongoing relationship with a 12- or 13-year-old.</i></li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Exclusive type (attracted only to children)</li>
<li>Nonexclusive type</li>
<li>Sexually attracted to males</li>
<li>Sexually attracted to females</li>
<li>Sexually attracted to both</li>
<li>Limited to incest</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Pedophilia in the Sexual and Gender Identity Disorders section.</p>
<ol>
<li>Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving sexual activity with a prepubescent child or children (generally aged 13 years or younger).</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The person is at least 16 years and at least 5 years older than the child or children in Criterion 1.<br>
<i>Note, does not include an individual in late adolescence involved in an ongoing relationship with a 12- or 13-year-old.</i></li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Sexually attracted to Males</li>
<li>Sexually attracted to Females</li>
<li>Sexually attracted to Both</li>
<li>Limited to Incest</li>
<li>Exclusive Type (attracted only to children)</li>
<li>Nonexclusive Type</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Pedophilia in the Psychosexual Disorders section.</p>
<ol>
<li>The act or fantasy of engaging in sexual activity with prepubertal children is a repeatedly preferred or exclusive method of achieving sexual excitement.</li>
<li>If the individual is an adult, the prepubertal children are at least ten years younger than the individual. If the individual is a late adolescent, no precise age different is required, and clinical judgment must take into account the age difference as well as the sexual maturity of the child.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Pedophilia included as a subtype of Sexual Deviation in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..</p>
<p>This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included under general Sexual Deviation diagnosis.</p>
<p>This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as &quot;psychopathic personality with pathologic sexuality.&quot; The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).</p>
</div>
</div>`,sh=Object.freeze(Object.defineProperty({__proto__:null,attributes:J_,html:Z_},Symbol.toStringTag,{value:"Module"})),e2={title:"Sexual Masochism Disorder",description:"Recurrent and intense sexual arousal from the act of being humiliated, beaten, bound, or otherwise made to suffer."},t2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Over a period of at least 6 months, recurrent and intense sexual arousal from the act of being humiliated, beaten, bound, or otherwise made to suffer, as manifested by fantasies, urges, or behavior.</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With asphyxiophilia: If the individual engages in the practice of achieving sexual arousal related to restriction of breathing.</li>
<li>In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to engage in masochistic sexual behaviors are restricted.</li>
<li>In full remission: There has been no distress or impairment in social, occupational, or other areas of functioning for at least 5 years while in an uncontrolled environment.</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Sexual Masochism in the Sexual and Gender Identity Disorders section.</p>
<ol>
<li>Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving the act (real, not simulated) of being humiliated, bound, or otherwise made to suffer.</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Sexual Masochism in the Psychosexual Disorders section.</p>
<p>Either (1) or (2):</p>
<ol>
<li>A preferred or exclusive mode of producing sexual excitement is to be humiliated, bound, beaten, or otherwise made to suffer.</li>
<li>The individual has intentionally participated in an activity in which he or she was physically harmed or his or her life was threatened, in order to produce sexual excitement.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Masochism included as a subtype of Sexual Deviation in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..</p>
<p>This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Not listed.</p>
</div>
</div>`,ah=Object.freeze(Object.defineProperty({__proto__:null,attributes:e2,html:t2},Symbol.toStringTag,{value:"Module"})),n2={title:"Sexual Sadism Disorder",description:"Recurrent and intense sexual arousal from the physical or psychological suffering of another person."},i2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Over a period of at least 6 months, recurrent and intense sexual arousal from the physical or psychological suffering of another person, as manifested by fantasies, urges, or behaviors.</li>
<li>The individual has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to engage in sadistic sexual behaviors are restricted.</li>
<li>In full remission: The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment.</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Sexual Sadism in the Sexual and Gender Identity Disorders section.</p>
<ol>
<li>Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving acts (real, not simulated) in which the psychological or physical suffering (including humiliation) of the victim is sexually exciting to the person.</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Sexual Sadism in the Psychosexual Disorders section.</p>
<p>One of the following:</p>
<ol>
<li>On a nonconsenting partner, the individual has repeatedly intentionally inflicted psychological or physical suffering in order to produce sexual excitement.</li>
<li>With a consenting partner, the repeatedly preferred or exclusive mode of achieving sexual excitement combines humilitation with simulated or mildly injurious bodily suffering.</li>
<li>On a consenting partner, bodily injury that is extensive, permanent, or possibly mortal is inflicted in order to achieve sexual excitement.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Sadism included as a subtype of Sexual Deviation in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..</p>
<p>This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included under general Sexual Deviation diagnosis.</p>
<p>This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as &quot;psychopathic personality with pathologic sexuality.&quot; The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).</p>
</div>
</div>`,lh=Object.freeze(Object.defineProperty({__proto__:null,attributes:n2,html:i2},Symbol.toStringTag,{value:"Module"})),r2={title:"Transvestic Disorder",description:"Recurrent and intense sexual arousal from cross-dressing."},o2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Over a period of at least 6 months, recurrent and intense sexual arousal from cross-dressing, as manifested by fantasies, urges, or behaviors.</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With fetishism: If sexually aroused by fabrics, materials, or garments.</li>
<li>With autogynephilia: If sexually aroused by thoughts or images of self as a woman.</li>
<li>In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to cross-dress are restricted.</li>
<li>In full remission: There has been no distress or impairment in social, occupational, or other areas of functioning for at least 5 years while in an uncontrolled environment.</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Transvestic Fetishism in the Sexual and Gender Identity Disorders section.</p>
<ol>
<li>Over a period of at least 6 months, in a heterosexual male, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving cross-dressing.</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With Gender Dysphoria: If the person has persistent discomfort with gender role or identity.</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Transvestism in the Psychosexual Disorders section.</p>
<ol>
<li>Recurrent and persistent cross-dressing by a heterosexual male.</li>
<li>Use of cross-dressing for the purpose of sexual excitement, at least initially in the course of the disorder.</li>
<li>Intense frustration when the cross-dressing is interfered with.</li>
<li>Does not meet the criteria for Transsexualism.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Transvestitism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..</p>
<p>This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included under general Sexual Deviation diagnosis.</p>
<p>This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as &quot;psychopathic personality with pathologic sexuality.&quot; The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).</p>
</div>
</div>`,uh=Object.freeze(Object.defineProperty({__proto__:null,attributes:r2,html:o2},Symbol.toStringTag,{value:"Module"})),s2={title:"Unspecified Paraphilic Disorder",description:"Paraphilic presentations that cannot be classified by another diagnostic class without specific reason but cause clinically significant distress or impairment."},a2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<p>This category applies to presentations in which symptoms characteristic of a paraphilic disorder that cause clinically significant distress or impairment in social, occupational, or other important areas of functioning predominate but do not meet the full criteria for any of the disorders in the paraphilic disorders diagnostic class. The unspecified paraphilic disorder category is used in situations in which the clinician chooses not to specify the reason that the criteria are not met for a specific paraphilic disorder, and includes presentations in which there is insufficient information to make a more specific diagnosis.</p>
</div> 
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Paraphilia Not Otherwise Specified in the Sexual and Gender Identity Disorders section.</p>
<p>This category is included for coding Paraphilias that do not meet the criteria for any of the specific categories. Examples include, but are not limited to, telephone scatologia (obscene phone calls), necrophilia (corpses), partialism (exclusive focus on part of body), zoophilia (animals), coprophilia (feces), klismaphilia (enemas), and urophilia (urine).</p>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Atypical Paraphilia in the Psychosexual Disorders section.</p>
<p>This is a residual category for individuals with Paraphilias that cannot be classified in any of the other categories. Such conditions include: Coprophilia (feces); Frotteurism (rubbing); Klismaphilia (enema); Mysophilia (filth); Necrophilia (corpses); Telephone Scatologia (lewdness); and Urophilia (urine).</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Included as Other Sexual Deviation or Unspecified Sexual Deviation subtypes of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included under general Sexual Deviation diagnosis.</p>
<p>This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as &quot;psychopathic personality with pathologic sexuality.&quot; The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).</p>
</div>
</div>`,ch=Object.freeze(Object.defineProperty({__proto__:null,attributes:s2,html:a2},Symbol.toStringTag,{value:"Module"})),l2={title:"Voyeuristic Disorder",description:"Intense and recurrent sexual arousal from observing an unsuspecting person who is naked, disrobing, or engaging in sexual activity.",prevalence:"unknown"},u2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Over a period of at least 6 months, recurrent and intense sexual arousal from observing an unsuspecting person who is naked, in the process of disrobing, or engaging in sexual activity, as manifested by fantasies, urges, or behaviors.</li>
<li>The individual has acted on these sexual urges with a nonconsenting person, or the sexual urges or fantasies cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The individual experiencing the arousal and/or acting on the urges is at least 18 years of age.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>In a controlled environment: This specifier is primarily applicable to individuals living in institutional or other settings where opportunities to engage in voyeuristic behavior are restricted.</li>
<li>In full remission: The individual has not acted on the urges with a nonconsenting person, and there has been no distress or impairment in social, occupational, or other areas of functioning, for at least 5 years while in an uncontrolled environment.</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Voyeurism in the Sexual and Gender Identity Disorders section.</p>
<ol>
<li>Over a period of at least 6 months, recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving the act of observing an unsuspecting person who is naked, in the process of disrobing, or engaging in sexual activity.</li>
<li>The fantasies, sexual urges, or behaviors cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Voyeurism in the Psychosexual Disorders section.</p>
<ol>
<li>The individual repeatedly observes unsuspecting people who are naked, in the act of disrobing, or engaging in sexual activity and no sexual activity with the observed people is sought.</li>
<li>The observing is the repeatedly preferred or exclusive method of achieving sexual excitement.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Voyeurism included as a subtype of Sexual Deviations in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section..</p>
<p>This category is for individuals whose sexual interests are directed primarily toward objects other than people of the opposite sex, toward sexual acts not usually associated with coitus, or toward coitus performed under bizarre circumstances as in necrophilia, pedophilia, sexual sadism, and fetishism. Even though many find their practices distasteful, they remain unable to substitute normal sexual behavior for them. This diagnosis is not appropriate for individuals who perform deviant sexual acts because normal sexual objects are not available to them.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Included under general Sexual Deviation diagnosis.</p>
<p>This diagnosis is reserved for deviant sexuality which is not symptomatic of more extensive syndromes, such as schizophrenic and obsessional reactions. The term includes most of the cases formerly classed as &quot;psychopathic personality with pathologic sexuality.&quot; The diagnosis will specify the type of the pathologic behavior, such as homosexuality, transvestism, pedophilia, fetishism, and sexual sadism (including rape, sexual assault, mutilation).</p>
</div>
</div>`,dh=Object.freeze(Object.defineProperty({__proto__:null,attributes:l2,html:u2},Symbol.toStringTag,{value:"Module"})),c2={title:"Paranoid Personality Disorder",description:"A pattern of distrust and suspiciousness such that others' motives are interpreted as malevolent."},d2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>A pervasive distrust and suspiciousness of others such that their motives are interpreted as malevolent, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:
<ol>
<li>Suspects, without sufficient basis, that others are exploiting, harming, or deceiving him or her.</li>
<li>Is preoccupied with unjustified doubts about the loyalty or trustworthiness of friends or associates.</li>
<li>Is reluctant to confide in others because of unwarranted fear that the information will be used maliciously against him or her.</li>
<li>Reads hidden demeaning or threatening meanings into benign remarks or events.</li>
<li>Persistently bears grudges (i.e., is unforgiving of insults, injuries, or slights).</li>
<li>Perceives attacks on his or her character or reputation that are not apparent to others and is quick to react angrily or to counterattack.</li>
<li>Has recurrent suspicions, without justification, regarding fidelity of spouse or sexual partner.</li>
</ol>
</li>
<li>Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, or another psychotic disorder and is not attributable to the physiological effects of another medical condition.<br>
<i>Note, if criteria are met prior to the onset of schizophrenia, add
“premorbid,” i.e., “paranoid personality disorder (premorbid).”</i></li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<ol>
<li>A pervasive distrust and suspiciousness of others such that their motives are interpreted as malevolent, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:
<ol>
<li>suspects, without sufficient basis, that others are exploiting, harming, or deceiving him or her</li>
<li>is preoccupied with unjustified doubts about the loyalty or trustworthiness of friends or associates</li>
<li>is reluctant to confide in others because of unwarranted fear that the information will be used maliciously against him or her</li>
<li>reads hidden demeaning or threatening meanings into benign remarks or events</li>
<li>persistently bears grudges, i.e., is unforgiving of insults, injuries, or slights</li>
<li>perceives attacks on his or her character or reputation that are not apparent to others and is quick to react angrily or to counterattack</li>
<li>has recurrent suspicions, without justification, regarding the fidelity of spouse or sexual partner</li>
</ol>
</li>
<li>Does not occur exclusively during the course of Schizophrenia, a Mood Disorder With Psychotic Features, or another Psychotic Disorder and is not due to the direct physiological effects of a general medical condition.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Paranoid Personality Disorder in the Personality Disorders section. Paranoid Disorders also included as a separate section.</p>
<ol>
<li>Pervasive, unwarranted suspiciousness and mistrust of people as indicated by at least three of the following:
<ol>
<li>expectation of trickery or harm</li>
<li>hypervigilence, manifested by continual scanning of the environment for signs of threat, or taking unneeded precautions</li>
<li>guardedness or secretiveness</li>
<li>avoidance of accepting blame when warranted</li>
<li>questioning the loyalty of others</li>
<li>intense, narrowly focused searching for confirmation of bias, with loss of appreciation of total context</li>
<li>overconcern with hidden motives and special meanings</li>
<li>pathological jealousy</li>
</ol>
</li>
<li>Hypersensitivity as indicated by at least two of the following:
<ol>
<li>tendency to be easily slighted and quick to take offense</li>
<li>exaggeration of difficulties, e.g., &quot;making mountains out of molehills&quot;</li>
<li>readiness to counterattack when any threat is perceived</li>
<li>inability to relax</li>
</ol>
</li>
<li>Restricted affectivity as indicated by at least two of the following:
<ol>
<li>appearance of being &quot;cold&quot; and unemotional</li>
<li>pride taken in always being objective, rational, and unemotional</li>
<li>lack of a true sense of humor</li>
<li>absence of passive, soft, tender, and sentimental feelings</li>
</ol>
</li>
<li>Not due to another mental disorder such as Schizophrenia or a Paranoid Disorder.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Listed as Paranoid Personality in the Personality Disorders section. Paranoid States also included in the Psychoses Not Attributed to Physical Conditions Listed Previously section, including Alcohol Paranoid State.</p>
<p><i>Paranoid Personality</i><br>
This behavioral pattern is characterized by hypersensitivity, rigidity, unwarranted suspicion, jealousy, envy, excessive self-importance, and a tendency to blame others and ascribe evil motives to them. These characteristics often interfere with the patient's ability to maintain satisfactory interpersonal relations. Of course, the presence of suspicion of itself does not justify this diagnosis, since the suspicion may be warranted in some instances.</p>
<p><i>Alcohol Paranoid State</i><br>
This term describes a paranoid state which develops in chronic alcoholics, generally male, and is characterized by excessive jealousy and delusions of infidelity by the spouse. Patients diagnosed under primary paranoid states or schizophrenia should not be included here even if they drink to excess.</p>
<p><i>Paranoid States</i><br>
These are psychotic disorders in which a delusion, generally persecutory or grandiose, is the essential abnormality. Disturbances in mood, behavior and thinking (including hallucinations) are derived from this delusion. This distinguishes paranoid states from the affective psychoses and schizophrenias, in which mood and thought disorders, respectively, are the central abnormalities. Most authorities, however, question whether disorders in this group are distinct clinical entities and not merely variants of schizophrenia or paranoid personality.</p>
<p><i>Paranoia</i><br>
This extremely rare condition is characterized by gradual development of an intricate, complex, and elaborate paranoid system based on and often preceeding logically from misinterpretation of an actual event. Frequently the patient considers himself endowed with unique and superior ability. In spite of a chronic course the condition does not seem to interfere with the rest of the patient's thinking and personality.<br>
<i>Involutional Paranoid State (Involutional Paraphrenia)</i><br>
This paranoid psychosis is characterized by delusion formation with onset in the involutional period. Formerly it was classified as a paranoid variety of involutional psychotic reaction. The absence of conspicuous thought disorders typical of schizophrenia distinguishes it from that group.<br>
<i>Other Paranoid State</i><br>
This is a residual category for paranoid psychotic reactions not classified earlier.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Listed as Paranoid Reactions.</p>
<p>In this group are to be classified those cases showing persistent delusions, generally persecutory or grandiose, ordinarily without hallucinations. The emotional responses and behavior are consistent with the ideas held. Intelligence is well preserved. This category does not include those reactions properly classifiable under Schizophrenic reaction, paranoid type.</p>
<p><i>Paranoia</i><br>
This type of psychotic disorder is extremely rare. It is characterized by an intricate, complex, and slowly developing paranoid system, often logically elaborated after a false interpretation of an actual occurence. Frequently, the patient considers himself endowed with superior or unique ability. The paranoid system is particularly isolated from much of the normal stream of consciousness, without hallucinations and with relative intactness and preservation of the remainder of the personality, in spite of a chronic and prolonged course.<br>
<i>Paranoid States</i><br>
This type of paranoid disorder is characterized by paranoid delusions. It lacks the logical nature of systematization seen in paranoia; yet it does not manifest the bizarre fragmentation and deterioration of the schizophrenic reactions. It is likely to be of relatively short duration, though it may be persistent and chronic.</p>
</div>`,hh=Object.freeze(Object.defineProperty({__proto__:null,attributes:c2,html:d2},Symbol.toStringTag,{value:"Module"})),h2={title:"Schizoid Personality Disorder",description:"A pattern of detachment from social relationships and restricted expression of emotion."},f2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>A pervasive pattern of detachment from social relationships and a restricted range of expression of emotions in interpersonal settings, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:
<ol>
<li>Neither desires not enjoys close relationships, including being part of a family.</li>
<li>Almost always chooses solitary activities.</li>
<li>Has little, if any, interest in having sexual experiences with another person.</li>
<li>Takes pleasure in few, if any, activities.</li>
<li>Lacks close friends or confidants other than first-degree relatives.</li>
<li>Appears indifferent to the priase or criticism of others.</li>
<li>Shows emotional coldness, detachment, or flattened affectivity.</li>
</ol>
</li>
<li>Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, another psychotic disorder, or autism spectrum disorder and is not attributable to the physiological effects of another medical condition.</li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Schizoid Personality Disorder in the Personality Disorders section.</p>
<ol>
<li>A pervasive pattern of detachment from social relationships and a restricted range of expression of emotions in interpersonal settings, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:
<ol>
<li>Neither desires nor enjoys close relationships, including being part of a family.</li>
<li>Almost always chooses solitary activities.</li>
<li>Has little, if any, interest in having sexual experiences with another person.</li>
<li>Takes pleasure in few, if any, activities.</li>
<li>Lacks close friends or confidants other than first-degree relatives.</li>
<li>Appears indifferent to the praise or criticism of others.</li>
<li>Shows emotional coldness, detachment, or flattened affectivity.</li>
</ol>
</li>
<li>Does not occur exclusively during the course of Schizophrenia, a Mood Disorder With Psychotic Features, another Psychotic Disorder, or a Pervasive Developmental Disorder and is not due to the direct physiological effects of a general medical condition.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Includes Schizoid Disorder of Childhood or Adolescence in the Other Disorders of Infancy, Childhood, or Adolescence section, as well as Schizoid Personality Disorder in the Personality Disorders section.</p>
<p><i>Schizoid Disorder of Childhood or Adolescence</i></p>
<ol>
<li>No close friend of similar age other than a relative or a similarly socially isolated child.</li>
<li>No apparent interest in making friends.</li>
<li>No pleasure from usual peer interactions.</li>
<li>General avoidance of nonfamilial social contacts, especially with peers.</li>
<li>No interest in activities that involve other children (such as team sports, clubs).</li>
<li>Duration of the disturbance of at least three months.</li>
<li>Not due to Pervasive Developmental Disorder; Conduct Disorder, Undersocialized, Nonaggressive; or any psychotic disorder, such as Schizophrenia.</li>
<li>If 18 or older, does not meet the criteria for Schizoid Personality Disorder.</li>
</ol>
<p><i>Schizoid Personality Disorder</i><br>
The following are characteristic of the individual's current and long-term functioning, are not limited to episodes of illness, and cause either significant impairment in social or occupational functioning or subjective distress.</p>
<ol>
<li>Emotional coldness and aloofness, and absence of warm, tender feelings for others.</li>
<li>Indifference to praise or criticism or to the feelings of others.</li>
<li>Close friendships with no more than one or two persons, including family members.</li>
<li>No eccentricities of speech, behavior, or thought characteristic of Schizotypal Personality Disorder.</li>
<li>Not due to a psychotic disorder such as Schizophrenia or Paranoid Disorder.</li>
<li>If under 18, does not meet the criteria for Schizoid Disorder of Childhood or Adolescence.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Listed as Schizoid Personality in the Personality Disorders and Certain Other Non-Psychotic Mental Disorders section.</p>
<p>This behavior pattern manifests shyness, over-sensitivity, seclusiveness, avoidance of close or competitive relationships, and often eccentricity. Autistic thinking without loss of capacity to recognize reality is common, as is daydreaming and the inability to express hostility and ordinary aggressive feelings. These patients react to disturbing experiences and conflicts with apparent detachment.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Listed as Schizoid Personality in the Personality Disorders section.</p>
<p>Inherent traits in such personalities are (1) avoidance of close relationships with others, (2) inability to express directly hostility or even ordinary aggressive feelings, and (3) autistic thinking. These qualities result early in coldness, aloofness, emotional detachment, fearfulness, avoidance of competition, and day dreams revolving around the need for omnipotence. As children, they are usually quiet, shy, obedient, sensitive and retiring. At puberty, they frequently become more withdrawn, then manifesting the aggregate of personality traits known as introversion, namely, quietness, seclusiveness, &quot;shut-in-ness&quot;, and unsociability, often with eccentricity.</p>
</div>
</div>`,fh=Object.freeze(Object.defineProperty({__proto__:null,attributes:h2,html:f2},Symbol.toStringTag,{value:"Module"})),p2={title:"Schizotypal Personality Disorder",description:"A pattern of social and interpersonal deficits marked by acute discomfort with, and reduced capacity for, close relationships and cognitive or perceptual distortions and eccentricities of behavior."},m2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>A pervasive pattern of social and interpersonal deficits marked by acute discomfort with, and reduced capacity for, close relationships as well as by cognitive or perceptual distortions and eccentricities of behavior, beginning by early adulthood and present in a variety of contexts, as indicated by five (or more) of the following:
<ol>
<li>Ideas of reference (excluding delusions of reference).</li>
<li>Odd beliefs or magical thinking that influences behavior and is inconsistent with subcultural norms (e.g., superstitiousness, belief in clairvoyance, telepathy, or &quot;sixth sense&quot;; in children and adolescents, bizarre fantasies or preoccupations).</li>
<li>Unusual perceptual experiences, including bodily sensations.</li>
<li>Odd thinking and speech (e.g., vague, circumstantial, metaphorical, overelaborate, or stereotyped).</li>
<li>Suspiciousness or paranoid ideation.</li>
<li>Inappropriate or constricted affect.</li>
<li>Behavior or appearance that is odd, eccentric, or peculiar.</li>
<li>Lack of close friends or confidants other than first-degree relatives.</li>
<li>Excessive social anxiety that does not diminish with familiarity and tends to be associated with paranoid fears rather than negative judgments about self.</li>
</ol>
</li>
<li>Does not occur exclusively during the course of
schizophrenia, a bipolar disorder or depressive disorder with psychotic features, another psychotic disorder, or autism spectrum disorder.</li>
</ol>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Schizotypal Personality Disorder in the Personality Disorders section.</p>
<ol>
<li>A pervasive pattern of social and interpersonal deficits marked by acute discomfort with, and reduced capacity for, close relationships as well as by cognitive or perceptual distortions and eccentricities of behavior, beginning by early adulthood and present in a variety of contexts, as indicated by five (or more) of the following:
<ol>
<li>Ideas of reference (excluding delusions of reference).</li>
<li>Odd beliefs or magical thinking that influences behavior and is inconsistent with subcultural norms (e.g., superstitiousness, belief in clairvoyance, telepathy, or &quot;sixth sense&quot;; in children and adolescents, bizarre fantasies or preoccupations).</li>
<li>Unusual perceptual experiences, including bodily illusions.</li>
<li>Odd thinking and speech (e.g., vague, circumstantial, metaphorical, overelaborate, or stereotyped).</li>
<li>Suspiciousness or paranoid ideation.</li>
<li>Inappropriate or constricted affect.</li>
<li>Behavior or appearance that is odd, eccentric, or peculiar.</li>
<li>Lack of close friends or confidants other than first-degree relatives.</li>
<li>Excessive social anxiety that does not diminish with familiarity and tends to be associated with paranoid fears rather than negative judgments about self.</li>
</ol>
</li>
<li>Does not occur exclusively during the course of
Schizophrenia, a Mood Disorder With Psychotic Features, another Psychotic Disorder, or a Pervasive Developmental Disorder.</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Schizotypal Personality Disorder in the Personality Disorders section, with an introduction to Schizotypal Personality Disorder as it is first broken out from Schizoid Personality in the DSM-III.</p>
<p><i>Intro</i>
Schizoid and Schizotypal Personality Disorders are new diagnostic categories. In the past, the term Schizoid was applied to individuals with defects in the capacity to form social relationships. In addition, the term was applied to individuals with various eccentricities of communication or behavior. Because recent evidence suggests a possible relationship between the latter group of individuals and a family history of chronic Schizophrenia, they are diagnosed in this manual separately as having Schizotypal Personality Disorder. The term Schizotypal is given to this category because, in addition, the features of this disorder are frequently present in individuals with Schizophrenia, Residual Type.<br>
Some Cases previously diagnosed as Borderline, Latent, or Simple Schizophrenia are likely to be classified in this manual as Schizotypal Personality Disorder.<br>
Individuals with defects in the capacity to form social relationships but without eccentricities of communication or behavior are diagnosed here as having Schizoid Personality Disorder, even though the term is more inclusive in other classifications and suggests a relationship to Schizophrenia.</p>
<p><i>Schizotypal Personality Disorder</i><br>
The following characteristics of the individual's current and long-term functioning, are not limited to episodes of illness, and cause either significant impairment in social or occupational functioning or subjective distress.</p>
<ol>
<li>At least four of the following:
<ol>
<li>Magical thinking, e.g., superstitiousness, clairvoyance, telepathy, &quot;6th sense&quot;, &quot;others can feel my feelings&quot; (in children and adolescents, bizarre fantasies or preoccupations).</li>
<li>Ideas of reference.</li>
<li>Social isolation, e.g., no close friends or confidants, social contacts limited to essential everyday tasks.</li>
<li>Recurrent illusions, sensing the presence of a force or a person not actually present (e.g., &quot;I felt as if my dead mother were in the room with me&quot;), depersonalization, or derealization not associated with panic attacks.</li>
<li>Odd speech (without loosening of associations or incoherence), e.g., speech that is digressive, vague, overelaborate, circumstantial, metaphorical.</li>
<li>Inadequate rapport in face-to-face interaction due to constricted or inappropriate affect, e.g., aloof, cold.</li>
<li>Suspiciousness or paranoid ideation.</li>
<li>Undue social anxiety or hypersensitivity to real or imagined criticism.</li>
</ol>
</li>
<li>Does not meet criteria for Schizophrenia.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear (included in Schizoid Personality Disorder).</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Does not appear (included in Schizoid Personality Disorder).</p>
</div>`,ph=Object.freeze(Object.defineProperty({__proto__:null,attributes:p2,html:m2},Symbol.toStringTag,{value:"Module"})),g2={title:"Antisocial Personality Disorder",description:"A pattern of disregard for and violation of the rights of others."},y2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>A pervasive pattern of disregard for and violation of the rights of others, occurring since age 15 years, as indicated by three (or more) of the following:
<ol>
<li>Failure to conform to social norms with respect to lawful behaviors, as indicated by repeatedly performing acts that are grounds for arrest.</li>
<li>Deceitfulness, as indicated by repeated lying, use of aliases, or conning others for personal profit or pleasure.</li>
<li>Impulsivity or failure to plan ahead.</li>
<li>Irritability and aggressiveness, as indicated by repeate physical fights or assaults.</li>
<li>Reckless disregard or safety of self or others.</li>
<li>Consistent irresponsibility, as indicated by repeated failure to sustain consistent work behavior or honor financial obligations.</li>
<li>Lack of remore, as indicated by being indifferent to or rationalizing having hurt, mistreated, or stolen from another.</li>
</ol>
</li>
<li>The individual is at least age 18 years.</li>
<li>There is evidence of conduct disorder with onset before age 15 years.</li>
<li>The occurrence of antisocial behavior is not exclusively during the course of schizophrenia or bipolar disorder.</li>
</ol>
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Antisocial Personality Disorder in the Personality Disorders section.</p>
<ol>
<li>There is a pervasive pattern of disregard for and violation of the rights of others occurring since age 15 years, as indicated by three (or more) of the following:
<ol>
<li>Failure to conform to social norms with respect to lawful behaviors as indicated by repeatedly performing acts that are grounds for arrest.</li>
<li>Deceitfulness, as indicated by repeated lying, use of aliases, or conning others for personal profit or pleasure.</li>
<li>Impulsivity or failure to plan ahead.</li>
<li>Irritability and aggressiveness, as indicated by repeated physical fights or assults.</li>
<li>Reckless disregard for safety of self or others.</li>
<li>Consistent irresponsibility, as indicated by repeated failure to sustain consistent work behavior or honor financial obligations.</li>
<li>Lack of remorse, as indicated by being indifferent to or rationalizing having hurt, mistreated, or stolen from another.</li>
</ol>
</li>
<li>The individual is at least age 18 years.</li>
<li>There is evidence of Conduct Disorder with onset before age 15 years.</li>
<li>The occurrence of antisocial behavior is not exclusively during the course of Schizophrenia or a Manic Episode.</li>
</ol>
</div>
<div class="dsm-timeline">
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Antisocial Personality Disorder in the Personality Disorders section.</p>
<ol>
<li>Current age at least 18.</li>
<li>Onset before age 15 as indicated by a history of three or more of the following before that age:
<ol>
<li>Truancy (positive if it amounted to at least five days per year for at least two years, not including the last year of school).</li>
<li>Expulsion or suspension from school for misbehavior.</li>
<li>Delinquency (arrested or referred to juvenile court because of behavior).</li>
<li>Running away from home overnight at least twice while living in parental or parental surrogate home.</li>
<li>Persistent lying.</li>
<li>Repeated sexual intercourse in a casual relationship.</li>
<li>Repeated drunkenness or substance abuse.</li>
<li>Thefts.</li>
<li>Vandalism.</li>
<li>School grades markedly below expectations in relation to estimated or known IQ (may have resulted in repeating a year).</li>
<li>Chronic violations of rules at home and/or at school (other than truancy).</li>
<li>Initation of fights.</li>
</ol>
</li>
<li>At least four of the following manifestations of the disorder since age 18:
<ol>
<li>Inability to sustain consistent work behavior, as indicated by any of the following: (a) too frequent job changes (e.g., three or more jobs in five years not accounted for by nature of job or economic or seasonal fluctuation), (b) significant unemployment (e.g., six months or more in five years when expected to work), (c) serious absenteeism from work (e.g., average three days or more of lateness or absence per month), (d), walking off several jobs without other jobs in sight (Note: similar behavior in an academic setting during the last few years of school may substitute for this criterion in individuals who by reason of their age or circumstances have not had an opportunity to demonstrate occupational adjustment).</li>
<li>Lack of ability to function as a responsible parent as evidenced by one or more of the following: (a) too frequent job changes (e.g., three or more jobs in five years not accounted for by nature of job or economic or seasonal fluctuation), (b) significant unemployment (e.g., six months or more in fix years when expected to work), (c) serious absenteeism from work (e.g., average three days or more of lateness or absence per month), (d) walking off several jobs without other jobs in sight (Note: similar behavior in an academic settings during the last few years of school may substitute for this criterion in individuals who by reason of their age or circumstances have not had an opportunity to demonstrate occupational adjustment)</li>
</ol>
</li>
</ol>
`,mh=Object.freeze(Object.defineProperty({__proto__:null,attributes:g2,html:y2},Symbol.toStringTag,{value:"Module"})),b2={title:"General Personality Disorder",description:null},v2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>An enduring pattern of inner experience and behavior that deviates markedly from the expectations of the individual's culture. This pattern is manifested in two (or more) of the following areas:
<ol>
<li>Cognition (i.e., ways of perceiving and interpreting self, other people, and events).</li>
<li>Affectivity (i.e., the range, intensity, lability, and appropriateness of emotional response).</li>
<li>Interpersonal functioning.</li>
<li>Impulse control.</li>
</ol>
</li>
<li>The enduring pattern is inflexible and pervasive across a broad range of personal and social situations.</li>
<li>The enduring pattern leads to clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
<li>The pattern is stable and of long duration, and its onset can be traced back at least to adolescence or early adulthood.</li>
<li>The enduring pattern is not better explained as a manifestation or consequence of another mental disorder.</li>
<li>The enduring pattern is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medication condition (e.g., head trauma).</li>
</ol>
</div>
</div>`,gh=Object.freeze(Object.defineProperty({__proto__:null,attributes:b2,html:v2},Symbol.toStringTag,{value:"Module"})),T2={title:"Brief Psychotic Disorder",description:"Psychotic symptoms lasting less than 1 month.",prevalence:"2-7% of first-onset psychosis in several countries",synonyms:null,acronyms:null},E2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Presence of one (or more) of the following symptoms. At
least one of these must be (a), (b), or (c):
<ol>
<li>Delusions</li>
<li>Hallucinations</li>
<li>Disorganized speech (e.g., frequent derailment or incoherence)</li>
<li>Grossly disorganized or catatonic behavior<br>
<i>Note: Do not include a symptom if it is a culturally sanctioned response.</i></li>
</ol>
</li>
<li>Duration of an episode of the disturbance is at least 1 day but less than 1 month, with eventual full return to premorbid level of functioning.</li>
<li>The disturbance is not better explained by major depressive or bipolar disorder with psychotic features or another psychotic disorder such as schizophrenia or catatonia, and is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With marked stressor(s) (brief reactive pscyhosis)</li>
<li>Without marked stressor(s)</li>
<li>With paripartum onset</li>
<li>With catatonia</li>
<li>Severity:
<ul>
<li>0 — Absent</li>
<li>1 — Equivocal</li>
<li>2 — Mild</li>
<li>3 — Moderate</li>
<li>4 — Severe</li>
</ul>
</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Brief Psychotic Disorder.</p>
<ol>
<li>Presence of one (or more) of the following symptoms:
<ol>
<li>Delusions</li>
<li>Hallucinations</li>
<li>Disorganized speech (e.g., frequent derailment or incoherence)</li>
<li>Grossly disorganized or catatonic behavior<br>
<i>Note: Do not include a symptom if it is a culturally sanctioned response.</i></li>
</ol>
</li>
<li>Duration of an episode of the disturbance is at least 1 day but less than 1 month, with eventual full return to premorbid level of functioning.</li>
<li>The disturbance is not better accounted for by a Mood Disorder With Psychotic Features, Schizoaffective Disorder, or Schizophrenia and is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With Marked Stressor(s) (brief reactive psychosis): If symptoms occur shortly after and apparently in response to events that, singly or together, would be markedly stressful to almost anyone in similar circumstances in
the person's culture.</li>
<li>Without Marked Stressor(s): If psychotic symptoms do not occur shortly after, or are not apparently in response to events that, singly or together, would be markedly stressful to almost anyone in similar circumstances in the person's culture.</li>
<li>With Postpartum Onset: If onset within 4 weeks postpartum.</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Brief Reactive Psychosis.</p>
<ol>
<li>Psychotic symptoms appear immediately following a recognizable psychosocial stressor that would evoke significant symptoms of distress in almost anyone.</li>
<li>The clinical picture involves emotional turmoil and at least one of the following psychotic symptoms:
<ol>
<li>Incoherence or loosening of associations</li>
<li>Delusions</li>
<li>Hallucinations</li>
<li>Behavior that is grossly disorganized or catatonic</li>
</ol>
</li>
<li>The psychotic symptoms last more than a few hours but less than two weeks, and there is an eventual return to the premorbid level of functioning.<br>
<i>Note: The diagnosis can be made soon after the onset of the psychotic symptoms without waiting for the expected recovery. If the psychotic symptoms last more than two weeks, the  diagnosis should be changed.</i></li>
<li>No period of increasing psychopathology immediately preceded the psychosocial stressor.</li>
<li>The disturbance is not due to any other mental disorder, such as an Organic Mental Disorder, manic episode, or Factitious Disorder with Psychological Symptoms.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Not listed.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Not listed.</p>
</div>`,yh=Object.freeze(Object.defineProperty({__proto__:null,attributes:T2,html:E2},Symbol.toStringTag,{value:"Module"})),_2={title:"Delusional Disorder",description:"Limited psychotic symptoms (i.e., one or more delusion that may be culturally plausible) lasting more than 1 month but cannot be attributed to any other condition.",prevalence:"0.2%",synonyms:null,acronyms:null},x2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>The presence of one (or more) delusions with a duration of 1 month or longer.</li>
<li>Criterion 1 for schizophrenia has never been met.<br>
<i>Note: Hallucinations, if present, are not prominent and are related to the delusional theme (e.g., the sensation of being infested with insects associated with delusions of infestation).</i></li>
<li>Apart from the impact of the delusion(s) or its ramifications, functioning is not markedly impaired, and behavior is not obviously bizarre or odd.</li>
<li>If manic or major depressive episodes have occurred, these have been brief relative to the duration of the delusional periods.</li>
<li>The disturbance is not attributable to the physiological effects of a substance or another medical condition and is not better explained by another mental disorder, such as body dysmorphic disorder or obsessive-compulsive disorder.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Erotomanic type — The central theme of the delusion is that another person is in love with the individual.</li>
<li>Grandiose type — The central theme of the delusion is the conviction of having some great (but unrecognized) talent or insight or having made some important discovery.</li>
<li>Jealous type — The central theme of the delusion is that their spouse or lover is unfaithful.</li>
<li>Persecutory type — The central theme of the delusion involves the individual's belief that they are being conspired against, cheated, spied upon, followed, poisoned or drugged, maliciously maligned, harassed, or obstructed in the pursuit of long-term goals.</li>
<li>Somatic type — The central theme of the delusion involves bodily functions or sensations.</li>
<li>Mixed type — Applies when there are multiple themes to the delusion(s) and no one predominates.</li>
<li>Unspecified type — Applies when the dominant delusional belief cannot be clearly determined or is not described by any one specific subtype.</li>
<li>With bizarre content — Delusions are deemed bizarre if they are clearly implausible, not understandable, and not derived from ordinary life experiences. For example, a belief that a stranger has removed their internal organs and replaced them with someone else's organs without leaving any wounds or scars.</li>
<li>First episode, currently in acute episode</li>
<li>First episode, currently in partial remission</li>
<li>First episode, currently in full remission</li>
<li>Multiple episodes, currently in acute episode</li>
<li>Multiple episodes, currently in partial remission</li>
<li>Multiple episodes, currently in full remission</li>
<li>Continuous</li>
<li>Unspecified</li>
<li>Severity</li>
</ul>
</div> 
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Delusional Disorder.</p>
<ol>
<li>Nonbizarre delusions (i.e., involving situations that occur in real life, such as being followed, poisoned, infected, loved at a distance, or deceived by spouse or lover, or having a disease) of at least 1 month's duration.</li>
<li>Criterion 1 for Schizophrenia has never been met. Note: Tactile and olfactory hallucinations may be present in Delusional Disorder if they are related to the delusional theme.</li>
<li>Apart from the impact of the delusion(s) or its ramifications, functioning is not markedly impaired and behavior is not obviously odd or bizarre.</li>
<li>If mood episodes have occurred concurrently with delusions, their total duration has been brief relative to the duration of the delusional periods.</li>
<li>The disturbance is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Erotomanic Type: Delusions that another person, usually of higher status, is in love with the individual.</li>
<li>Grandiose Type: Delusions of inflated worth, power, knowledge, identity, or special relationship to a deity or famous person.</li>
<li>Jealous Type: Delusions that the individual's sexual partner is unfaithful.</li>
<li>Persecutory Type: Delusions that the person (or someone to whom the person is close) is being malevolently treated in some way.</li>
<li>Somatic Type: Delusions that the person has some physical defect or general medical condition.</li>
<li>Mixed Type: Delusions characteristic of more than one of the above types but no one theme predominates.</li>
<li>Unspecified Type</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Does not appear.</p>
</div>`,bh=Object.freeze(Object.defineProperty({__proto__:null,attributes:_2,html:x2},Symbol.toStringTag,{value:"Module"})),S2={title:"Other Specified Schizophrenia Spectrum and Other Psychotic Disorder",description:"Psychotic symptoms unable to be classified as a more specific disorder with the reason specified."},w2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<p>This diagnosis is given when there are characteristic symptoms of schizophrenia spectrum and other psychotic disorer that cause significant distress or impairment in social or occupational functioning, but the person does not fit the full criteria for any of the disorders in the class or there is insufficient information to make a more specific diagnosis (e.g., emergency rooms). The &quot;other&quot; diagnosis is used when clinicians choose to communicate the specific reason that the presentation does not meet other diagnosis criteria (e.g., persistent auditory hallucinations).</p>
</div>`,vh=Object.freeze(Object.defineProperty({__proto__:null,attributes:S2,html:w2},Symbol.toStringTag,{value:"Module"})),D2={title:"Psychotic Disorder Due to Another Medical Condition",description:"Psychotic symptoms caused by another medical condition.",prevalence:"0.21-0.54%"},I2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Prominent hallucinations or delusions.</li>
<li>There is evidence from the history, physical examination, or laboratory findings that the disturbance is the direct pathophysiological consequence of another medical condition.</li>
<li>The disturbance is not better explained by another mental disorder.</li>
<li>The disturbance does not occur exclusively during the course of a delirium.</li>
<li>The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With delusions</li>
<li>With hallucinations</li>
<li>Severity (0-4)</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Psychotic Disorder Due to a General Medical Condition.</p>
<h4>Psychotic Disorder to a General Medical Condition</h4>
<ol>
<li>Prominent hallucinations or delusions.</li>
<li>There is evidence from the history, physical examination, or laboratory
findings that the disturbance is the direct physiological consequence of
a general medical condition.</li>
<li>The disturbance is not better accounted for by another mental disorder.</li>
<li>The disturbance does not occur exclusively during the course of a delirium.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With Delusions: if delusions are the predominant symptom</li>
<li>With Hallucinations: if hallucinations are the predominant symptom</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed dispersed among the Organic Mental Disorders.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Listed as Psychosis associated with intracranial infection,  other cerebral condition, and  other physical condition in the Organic Brain Syndromes section.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Listed as Psychotic Reaction to other diagnoses.</p>
</div>`,Th=Object.freeze(Object.defineProperty({__proto__:null,attributes:D2,html:I2},Symbol.toStringTag,{value:"Module"})),k2={title:"Schizoaffective Disorder",description:"Psychotic symptoms that occur both with and without major mood episodes (depression or mania), in which mood episodes are present for the majority of the illness duration.",prevalence:"0.3%",acronyms:null,synonyms:null},C2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li><i>Schizophrenia Symptoms + Major Mood Episode:</i> An uninterrupted period of illness during which there is a major mood episode (major depressive or manic) concurrent with Criterion 1 of schizophrenia.</li>
<li><i>Psychotic-only Period:</i> Delusions or hallucinations for 2 or more weeks in the absence of a major mood episode (depressive or manic) during the lifetime duration of the illness.</li>
<li><i>Mood Symptom Prominence:</i> Symptoms that meet criteria for a major mood episode are present for the majority of the total duration of the active and residual portions of the illness.</li>
<li>The disturbance is not attributable to the effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>First episode, currently in acute episode</li>
<li>First episode, currently in partial remission</li>
<li>First episode, currently in full remission</li>
<li>Multiple episodes, currently in acute episode</li>
<li>Multiple episodes, currently in partial remission</li>
<li>Multiple episodes, currently in full remission</li>
<li>Continuous</li>
<li>Unspecified</li>
<li>Bipolar type (manic or mixed episodes present)</li>
<li>Depressive type (only major depressive episodes present)</li>
<li>With catatonia</li>
<li>Severity of delusions, hallucinations, disorganized speech, and negative symptoms:
<ul>
<li>0 — Absent</li>
<li>1 — Equivocal</li>
<li>2 — Mild</li>
<li>3 — Moderate</li>
<li>4 — Severe</li>
</ul>
</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Schizoaffective Disorder.</p>
<ol>
<li>An uninterrupted period of illness during which, at some time, there is
either a Major Depressive Episode, a Manic Episode, or a Mixed Episode concurrent with symptoms that meet Criterion 1 for Schizophrenia.</li>
<li>During the same period of illness, there have been delusions or hallucinations for at least 2 weeks in the absence of prominent mood
symptoms.</li>
<li>Symptoms that meet criteria for a mood episode are present for a
substantial portion of the total duration of the active and residual periods of the illness.</li>
<li>The disturbance is not due to the direct physiological effects of a
substance (e.g., a drug of abuse, a medication) or a general medical
condition.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Bipolar Type: if the disturbance includes a Manic or a Mixed Episode (or
a Manic or a Mixed Episode and Major Depressive Episodes)</li>
<li>Depressive Type: if the disturbance only includes Major Depressive
Episodes</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Schizoaffective Disorder but without diagnostic criteria due to inadequate research showing it as distinct from Schizophreniform Disorder, Major Depression or Bipolar Disorder with Mood-congruent or Mood-incongruent Psychotic Features, or Schizophrenia with a superimposed Atypical Affective Disorder.<br>
Examples of cases that may appropriately be diagnosed as Schizoaffective
Disorder include:
An episode of affective illness in which preoccupation with a moodincongruent delusion or hallucination dominates the clinical picture
when affective symptoms are no longer present.
An episode of illness in which currently there is a full affective syndrome with prominent mood-incongruent psychotic features but in which inadequate information about the presence of previous nonaffective psychotic features makes it difficult to differentiate between Schizophrenia or Schizophreniform Disorder (with a superimposed Atypical Affective Disorder) and Affective Disorder.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Does not appear.</p>
</div>`,Eh=Object.freeze(Object.defineProperty({__proto__:null,attributes:k2,html:C2},Symbol.toStringTag,{value:"Module"})),A2={title:"Schizophrenia",description:"Delusions, hallucinations, disorganized speech, catatonic or disorganized behavior, and/or diminished emotional expression and motivation lasting more than 6 months.",prevalence:"0.3-0.7%",acronyms:null,synonyms:null},O2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li><i>Characteristic Symptoms: </i>  Two (or more) of the following, each present for a significant portion of time during a 1-month period (or less if successfully treated). At least one must be (a) (b) or (c):
<ol>
<li>Delusions</li>
<li>Hallucinations</li>
<li>Disorganized speech (e.g., derailment or incoherence)</li>
<li>Grossly disorganized or catatonic behavior</li>
<li>Negative symptoms (i.e., diminished emotional expression or avolution)</li>
</ol>
</li>
<li><i>Social/Occupational Dysfunction: </i> For a significant portion of the time since the onset of the disturbance, one or more major areas of functioning such as work, interpersonal relations, or self-care are markedly below the level achieved prior to the onset (or when the onset is in childhood or adolescence, failure to achieve expected level of interpersonal, academic, or occupational achievement).</li>
<li><i>Duration:</i> Continuous signs of the disturbance persist for at least 6 months. This 6-month period must include at least 1 month of symptoms (or less if successfully treated) that meet Criterion A (i.e., active-phase symptoms) and may include periods of prodromal or residual symptoms. During these prodromal or residual periods, the signs of the disturbance may be manifested by only negative symptoms or two or more symptoms listed in Criterion A present in an attenuated form (e.g., odd beliefs, unusual perceptual experiences).</li>
<li><i>Schizoaffective and Mood Disorder Exclusion:</i>  Schizoaffective Disorder and Mood Disorder With Psychotic Features have been ruled out because either (1) no major depressive, manic, or mixed episodes have occurred concurrently with the active-phase symptoms; or (2) if mood episodes have occurred during active-phase symptoms, their total duration has been brief relative to the duration of the active and residual periods.</li>
<li><i> Substance/General Medical Condition Exclusion: </i> The disturbance is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.</li>
<li><i> Relationship to a Pervasive Developmental Disorder: </i> If there is a history of autistic disorder or another pervasive developmental disorder, the additional diagnosis of schizophrenia is made only if prominent delusions or hallucinations are also present for at least a month (or less if successfully treated).</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>First episode, currently in acute episode</li>
<li>First episode, currently in partial remission</li>
<li>First episode, currently in full remission</li>
<li>Multiple episodes, currently in acute episode</li>
<li>Multiple episodes, currently in partial remission</li>
<li>Multiple episodes, currently in full remission</li>
<li>Continuous</li>
<li>Unspecified</li>
<li>With catatonia</li>
<li>Severity of delusions, hallucinations, disorganized speech, and negative symptoms:
<ul>
<li>0 — Absent</li>
<li>1 — Equivocal (e.g., odd or unusual beliefs that are not held with full conviction, fleeting or vague hallucinatory perceptual experiences that are not fully formed or distressing, occasional difficulty staying on topic or a slight loosening of associations, occasional or subtle unusual movements or mannerisms that are not overly bizarre or disruptive)</li>
<li>2 — Mild (e.g., fixed, false beliefs but not highly elaborate, infrequent, non-distressing hallucinations, speech is sometimes difficult to follow due to derailment or incoherence, brief catatonic features, noticeable decrease in facial expressivity or vocal prosody, reduced motivation or social withdrawal while maintaining basic care)</li>
<li>3 — Moderate (clear, well-formed delusions that influence their behavior, frequent, distressing hallucinations that influence their behavior, often difficult to follow due to significant derailment, tangentiality, or incoherence, prominent catatonic features, clear and consistent decrease in emotional expression and marked social withdrawal)</li>
<li>4 — Severe (e.g., delusions are pervasive, highly elaborate, and significantly dictate their behavior, severe and persistent hallucinations that are highly distressing and profoundly influence their actions, speech is almost impossible to follow, characterized by word salad or mutism, prolongued and extreme catatonic features, complete absense of emotional expression, profound avolition, and severe social isolation)</li>
</ul>
</li>
</ul>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Schizophrenia with Subtypes defined.</p>
<ol>
<li><i>Characteristic symptoms:</i> Two (or more) of the following, each present for a significant portion of time during a 1-month period (or less if successfully treated):
<ol>
<li>Delusions</li>
<li>Hallucinations</li>
<li>Disorganized speech (e.g., frequent derailment or incoherence)</li>
<li>Grossly disorganized or catatonic behavior</li>
<li>Negative symptoms, i.e., affective flattening, alogia, or avolition<br>
<i>Note: Only one Criterion A symptom is required if delusions are bizarre or hallucinations consist of a voice keeping up a running commentary on the person's behavior or thoughts, or two or more voices conversing with each other.</i></li>
</ol>
</li>
<li><i>Social/occupational dysfunction:</i> For a significant portion of the time since the onset of the disturbance, one or more major areas of functioning such as work, interpersonal relations, or self-care are markedly below the level achieved prior to the onset (or when the onset is in childhood or adolescence, failure to achieve expected level of interpersonal, academic, or occupational achievement).</li>
<li><i>Duration:</i> Continuous signs of the disturbance persist for at least 6 months. This 6-month period must include at least 1 month of symptoms (or less if successfully treated) that meet Criterion 1 (i.e.,
active-phase symptoms) and may include periods of prodromal or residual symptoms. During these prodromal or residual periods, the signs of the disturbance may be manifested by only negative symptoms or two or more symptoms listed in Criterion 1 present in an attenuated
form (e.g., odd beliefs, unusual perceptual experiences).</li>
<li><i>Schizoaffective and Mood Disorder Exclusion:</i> Schizoaffective Disorder and Mood Disorder With Psychotic Features have been ruled out because either (1) no Major Depressive, Manic, or Mixed Episodes have occurred concurrently with the active-phase symptoms; or (2) if mood episodes have occurred during active-phase symptoms, their total duration has been brief relative to the duration of the active and residual periods.</li>
<li><i>Substance/general medical condition exclusion:</i> The disturbance is not due to the direct physiological effects of a substance (e.g., a drug of abuse, a medication) or a general medical condition.</li>
<li><i>Relationship to a Pervasive Developmental Disorder:</i> If there is a history of Autistic Disorder or another Pervasive Developmental Disorder, the additional diagnosis of Schizophrenia is made only if prominent delusions or hallucinations are also present for at least a month (or less if successfully treated).</li>
</ol>
<h4>Specifier</h4>
<p>Classification of longitudinal course (can be applied only after at least 1 year has elapsed since the initial onset of active-phase symptoms):</p>
<ul>
<li>Episodic With Interepisode Residual Symptoms (episodes are defined by the reemergence of prominent psychotic symptoms); also specify if With Prominent Negative Symptoms</li>
<li>Episodic With No Interepisode Residual Symptoms</li>
<li>Continuous (prominent psychotic symptoms are present throughout the period of observation); also specify if With Prominent Negative Symptoms</li>
<li>Single Episode In Partial Remission; also specify if With Prominent</li>
<li>Negative Symptoms</li>
<li>Single Episode In Full Remission</li>
<li>Other or Unspecified Pattern</li>
</ul>
<h4>Paranoid Type</h4>
<p>A type of Schizophrenia in which the following criteria are met:</p>
<ol>
<li>Preoccupation with one or more delusions or frequent auditory hallucinations.</li>
<li>None of the following is prominent: disorganized speech, disorganized or catatonic behavior, or flat or inappropriate affect.</li>
</ol>
<h4>Disorganized Type</h4>
<p>A type of Schizophrenia in which the following criteria are met:</p>
<ol>
<li>All of the following are prominent:
<ol>
<li>Disorganized speech</li>
<li>Disorganized behavior</li>
<li>Flat or inappropriate affect</li>
</ol>
</li>
<li>The criteria are not met for Catatonic Type.</li>
</ol>
<h4>Catatonic Type</h4>
<p>A type of Schizophrenia in which the clinical picture is dominated by at least two of the following:</p>
<ol>
<li>Motoric immobility as evidenced by catalepsy (including waxy flexibility) or stupor</li>
<li>Excessive motor activity (that is apparently purposeless and not influenced by external stimuli)</li>
<li>Extreme negativism (an apparently motiveless resistance to all instructions or maintenance of a rigid posture against attempts to be moved) or mutism</li>
<li>Peculiarities of voluntary movement as evidenced by posturing (voluntary assumption of inappropriate or bizarre postures), stereotyped movements, prominent mannerisms, or prominent grimacing</li>
<li>Echolalia or echopraxia</li>
</ol>
<h4>Undifferentiated Type</h4>
<p>A type of Schizophrenia in which symptoms that meet Criterion 1 are present, but the criteria are not met for the Paranoid, Disorganized, or Catatonic Type.</p>
<h4>Residual Type</h4>
<p>A type of Schizophrenia in which the following criteria are met:</p>
<ol>
<li>Absence of prominent delusions, hallucinations, disorganized speech, and grossly disorganized or catatonic behavior.</li>
<li>There is continuing evidence of the disturbance, as indicated by the presence of negative symptoms or two or more symptoms listed in Criterion 1 for Schizophrenia, present in an attenuated form (e.g., odd beliefs, unusual perceptual experiences).</li>
</ol>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Schizophrenic Disorder.</p>
<ol>
<li>At least one of the following during a phase of the illness:
<ol>
<li>Bizarre delusions (content is patently absurd and has no possible basis in fact), such as delusions of being controlled, thought broadcasting, thought insertion/or thought withdrawal.</li>
<li>Somatic, grandiose, religious, nihilistic, or other delusions without persecutery or jealous content.</li>
<li>Delusions with persecutory or jealous content if accompanied by hallucinations of any type.</li>
<li>Auditory hallucinations in which either a voice keeps up a running commentary on the individual's behavior or thoughts, or two or more voices converse with each other.</li>
<li>Auditory hallucinations on several occasions with content of more than one or two words, having no apparent relation to depression or elation.</li>
<li>Incoherence, marked loosening of associations, markedly illogical thinking, or marked poverty of content of speech if associated with at least one of the following:
<ol>
<li>Blunted, flat, or inappropriate affect</li>
<li>Delusions or hallucinations</li>
<li>Catatonic or other grossly disorganized behavior</li>
</ol>
</li>
</ol>
</li>
<li>Deterioration from a previous level of functioning in such areas as work, socail relations, and self-care.</li>
<li>Duration: Continuous/signs of th&amp; fitness for at least six months at some time during the person's life, with some signs of the illness at present. The six-month period must include an active phase during which there
were symptoms from 1, with or without a prodromal or residual phase, as defined below.<br>
<i>Prodromal phase:</i> A deterioration in functioning before the active phase of the illness not due to a disturbance in mood or to a Substance Use Disorder and involving at least two of the symptoms noted below.<br>
<i>Residual phase:</i> Persistence, following the active phase of the illness, of at least two of the symptoms noted below, not due to a disturbance in mood or to a Substance Use Disorder.<br>
<i>Prodromal or Residual Symptoms</i>
<ol>
<li>Social isolation or withdrawal</li>
<li>Marked impairment in role functioning as wage-earner, student, or homemaker</li>
<li>Markedly peculiar behavir (e.g., collecting garbage, talking to self in public, or hoarding food)</li>
<li>Marked impairment in personal hygiene and grooming</li>
<li>Blunted, flat, or inappropriate affect</li>
<li>Digressive, vague, overelaborate, circumstantial, or metaphorical speech</li>
<li>Odd or bizarre ideation, or magical thinking, e.g., superstitiousness, clairvoyance, telepathy, &quot;sixth sense,&quot; &quot;others can feel my feelings&quot;, overvalued ideas, ideas of reference</li>
<li>Unusual perceptual experiences, e.g., recurrent illusions, sensing the presence of a force or person not actually present</li>
</ol>
</li>
<li>The full depressive or manic syndrome (criteria 1 and 2 of major depressive or manic episode), if present, developed after any psychotic symptoms, or was brief in duration relative to the duration of the psychotic symptoms in 1.</li>
<li>Onset of prodromal or active phase of the illness before age 45.</li>
<li>Not due to any Organic Mental Disorder or Mental Retardation.</li>
</ol>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Listed as Schizophrenia with Types defined.</p>
<p>This large category includes a group of disorders manifested by characteristic disturbances of thinking, mood and behavior. Disturbances in thinking are marked by alterations of concept formation which may lead to misinterpretation of reality and sometimes to delusions and hallucinations, which frequently appear psychologically self-protective. Corollary mood changes include ambivalent, constricted and inappropriate emotional responsiveness and loss of empathy with others. Behavior may be withdrawn, regressive and bizarre. The schizophrenias, in which the mental status is attributable primarily to a thought disorder, are to be distinguished from the Major affective illnesses (q.v.) which are dominated by a mood disorder. The Paranoid states (q.v.) are distinguished from schizophrenia by the narrowness of their distortions of reality and by the absence of other psychotic symptoms.</p>
<h4>Simple Type</h4>
<p>This psychosis is characterized chiefly by a slow and insidious reduction of external attachments and interests and by apathy and indifference leading to impoverishment of interpersonal relations, mental deterioration, and adjustment on a lower level of functioning. In general, the condition is less dramatically psychotic than are the hebephrenic, catatonic, and paranoid types of schizophrenia. Also, it contrasts with schizoid personality, in which there is little or no progression of the disorder.</p>
<h4>Hebephrenic Type</h4>
<p>This psychosis is characterized by disorganized thinking, shallow and inappropriate affect, unpredictable giggling, silly and regressive behavior and mannerisms, and frequent hypochondriacal complaints. Delusions and hallucinations, if present, are transient and not well
organized.</p>
<h4>Catatonic Type (Excited or Withdrawn)</h4>
<p>It is frequently possible and useful to distinguish two subtypes of catatonic schizophrenia. One is marked by excessive and sometimes violent motor activity and excitement and the other by generalized inhibition manifested by stupor, mutism, negativism, or waxy flexibility. In time, some cases deteriorate to a vegetative state.</p>
<h4>Paranoid Type</h4>
<p>This type of schizophrenia is characterized primarily by the presence of persecutory or grandiose delusions, often associated with hallucinations. Excessive religiosity is sometimes seen. The patient's attitude is frequently hostile and aggressive, and his behavior tends to be consistent with his delusions. In general the disorder does not manifest the gross personality disorganization of the hebephrenic and catatonic types, perhaps because the patient uses the mechanism of projection, which ascribes to others characteristics he cannot accept in himself. Three subtypes of the disorder may sometimes be differentiated, depending on the predominant symptoms: hostile, grandiose, and hallucinatory.</p>
<h4>Acute Schizophrenic Episode</h4>
<p>This diagnosis does not apply to acute episodes of schizophrenic disorders described elsewhere. This condition is distinguished by the acute onset of schizophrenic symptoms, often associated with confusion, perplexity, ideas of reference, emotional turmoil, dreamlike dissociation, and excitement, depression, or fear. The acute onset distinguishes this condition from simple schizophrenia. In time these patients may take on the characteristics of catatonic, hebephrenic or paranoid schizophrenia, in which case their diagnosis should be changed accordingly. In many cases the patient recovers
within weeks, but sometimes his disorganization becomes progressive. More frequently remission is followed by recurrence. (In DSM-I this condition was listed as &quot;Schizophrenia, acute undifferentiated type.&quot;)</p>
<h4>Latent Type</h4>
<p>This category is for patients having clear symptoms of schizophrenia but no history of a psychotic schizophrenic episode. Disorders sometimes designated as incipient, pre-psychotic, pseudoneurotic, pseudopsychopathic, or borderline schizophrenia are categorized here. (This
category includes some patients who were diagnosed in DSM-I under &quot;Schizophrenic reaction, chronic undifferentiated type.&quot; Others formerly included in that DSM-I category are now classified under Schizophrenia, other [and unspecified] types (q.v.).)</p>
<h4>Schizo-affective Type (Excited or Depressed)</h4>
<p>This category is for patients showing a mixture of schizophrenic symptoms and pronounced elation or depression.</p>
<h4>Childhood Type</h4>
<p>This category is for cases in which schizophrenic symptoms appear before puberty. The condition may be manifested by autistic, atypical, and withdrawn behavior; failure to develop identity separate from the mother's; and general unevenness, gross immaturity and inadequacy in development. These developmental defects may result in
mental retardation, which should also be diagnosed. (This category is for use in the United States and does not appear in ICD-8. It is equivalent to &quot;Schizophrenic reaction, childhood type&quot; in DSM-I.)</p>
<h4>Chronic Undifferentiated Type</h4>
<p>This category is for patients who show mixed schizophrenic symptoms and who present definite schizophrenic thought, affect and behavior not classifiable under the other types of schizophrenia. It is
distinguished from Schizoid personality (q.v.). (This category is equivalent to &quot;Schizophrenic reaction, chronic undifferentiated type&quot; in DSM-I except that it does not include cases now diagnosed as Schizophrenia, latent type and Schizophrenia, other [and unspecified]
types.)</p>
<h4>Other and Unspecified Types</h4>
<p>This category is for any type of schizophrenia not previously described. (In DSM-I &quot;Schizophrenic reaction, chronic undifferentiated type&quot; included this category and also what is now called Schizophrenia, latent type and Schizophrenia, chronic undifferentiated type.)</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Listed as Schizophrenic Reactions with Types defined.</p>
<p>This term is synonymous with the formerly used term dementia praecox. It represents a group of psychotic reactions characterized by fundamental disturbances in reality relationships and concept formations, with affective, behavioral, and intellectual disturbances in varying degrees and mixtures. The disorders are marked by strong tendency to retreat from reality, by emotional disharmony, unpredictable disturbances in stream of thought, regressive behavior, and in some, by a tendency to &quot;deterioration.&quot; The predominant symptomatology will be the determining factor in classifying such patients into types.</p>
<h4>Schizophrenic Reaction, Simple Type</h4>
<p>This type of reaction is characterized chiefly by reduction in external attachments and interests and by impoverishment of human relationships. It often involves adjustment on a lower psychobiological level of functioning, usually accompanied by apathy and indifference but rarely by conspicuous delusions or hallucinations. The simple type of schizophrenic reaction characteristically manifests an increase in the severity of symptoms over long periods, usually with apparent mental deterioration, in contrast to the schizoid personality, in which there is little if any change.</p>
<h4>Schizophrenic Reaction, Hebephrenic Type</h4>
<p>These reactions are characterized by shallow, inappropriate affect, unpredictable giggling, silly behavior and mannerisms, delusions, often of a somatic nature, hallucinations, and regressive behavior.</p>
<h4>Schizophrenic Reaction, Catatonic Type</h4>
<p>These reactions are characterized by conspicuous motor behavior, exhibiting either marked generalized inhibition (stupor, mutism, negativism and waxy flexibility) or excessive motor activity and excitement. The individual
may regress to a state of vegetation.</p>
<h4>Schizophrenic Reaction, Paranoid Type</h4>
<p>This type of reaction is characterized by autistic, unrealistic thinking, with mental content composed chiefly of delusions of persecution, and/or of grandeur, ideas of reference, and often hallucinations. It is often characterized by unpredictable'behavior, with a fairly constant attitude of hostility and aggression. Excessive religiosity may be present with or without delusions of persecution. There may be an expansive delusional system of omnipotence, genius, or special ability. The systematized paranoid hypochondriacal states are included in this group.</p>
<h4>Schizophrenic Reaction, Acute Undifferentiated Type</h4>
<p>This reaction includes cases exhibiting a wide variety of schizophrenic symptomatology, such as confusion of thinking and turmoil of emotion, manifested by perplexity, ideas of reference, fear and dream states, and
dissociative phenomena. These symptoms appear acutely, often without apparent precipitating stress, but exhibiting historical evidence of prodromal symptoms. Very often the reaction is accompanied by a pronounced affective coloring of either excitement or depression. The symptoms often clear in a matter of weeks, although there is a tendency for them to recur. Cases usually are grouped here in the first, or an early, attack. If the reaction subsequently progresses, it ordinarily crystallizes into one of the other definable reaction types.</p>
<h4>Schizophrenic Reaction, Chronic Undifferentiated Type</h4>
<p>The chronic schizophrenic reactions exhibit a mixed symptomatology, and when the reaction cannot be classified in any of the more clearly defined types, it will be placed in this group. Patients presenting  definite schizophrenic thought, affect and behavior beyond that of the schizoid personality, but not classifiable as any other type of schizophrenic reaction, will also be placed in this group. This includes the so-called &quot;latent,&quot; &quot;incipient,&quot; and &quot;pre-psychotic&quot; schizophrenic reactions.</p>
<h4>Schizophrenic Reaction, Schizo-affective Type</h4>
<p>This category is intended for those cases showing significant admixtures of schizophrenic and affective reactions. The mental content may be predominantly schizophrenic, with pronounced elation or depression. Cases may show predominantly affective changes with schizophrenic-like thinking or bizarre behavior. The prepsychotic personality may be at variance, or inconsistent, with expectations based on the presenting psychotic symptomatology. On prolonged observation, such cases usually prove to be basically schizophrenic in nature.</p>
<h4>Schizophrenic Reaction, Childhood Type</h4>
<p>Here will be classified those schizophrenic reactions occurring before puberty. The clinical picture may differ from schizophrenic reactions occurring in other age periods because of the immaturity and plasticity of the
patient at the time of onset of the reaction. Psychotic reactions in children, manifesting primarily autism, will be classified here. Special symptomatology may be added to the diagnosis as manifestations.</p>
<h4>Schizophrenic Reaction, Residual Type</h4>
<p>This term is to be applied to those patients who, after a definite psychotic, schizophrenic reaction, have improved sufficiently to be able to get along in the community, but who continue to show recognizable residual disturbance
of thinking, affectivity, and/or behavior.</p>
`,_h=Object.freeze(Object.defineProperty({__proto__:null,attributes:A2,html:O2},Symbol.toStringTag,{value:"Module"})),N2={title:"Schizophreniform Disorder",description:"Delusions, hallucinations, disorganized speech, catatonic or disorganized behavior, and/or diminished emotional expression and motivation lasting 1-6 months.",prevalence:"0.4-1%",synonyms:null,acronyms:null},P2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Two (or more) of the following, each present for a significant portion of time during a 1-month period (or less if successfully treated). At least one of these must be (a), (b), or (c):
<ol>
<li>Delusions</li>
<li>Hallucinations</li>
<li>Disorganized speech (e.g., frequent derailment or
incoherence)</li>
<li>Grossly disorganized or catatonic behavior</li>
<li>Negative symptoms (i.e., diminished emotional expression or avolition)</li>
</ol>
</li>
<li>An episode of the disorder lasts at least 1 month but less than 6 months. When the diagnosis must be made without waiting for recovery, it should be qualified as “provisional.”</li>
<li>Schizoaffective disorder and depressive or bipolar disorder with psychotic features have been ruled out because either 1) no major depressive or manic episodes have occurred concurrently with the active-phase symptoms, or 2) if mood episodes have occurred during active-phase symptoms, they have been present for a minority of the total duration of the active and residual periods of the illness.</li>
<li>The disturbance is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With good prognostic features: This specifier requires the presence of at least two of the following features: onset of prominent psychotic symptoms within 4 weeks of the first noticeable change in usual behavior or functioning; confusion or perplexity; good premorbid social and occupational functioning; and absence of blunted or flat affect.</li>
<li>Without good prognostic features: This specifier is applied if two or more of the above features have not been present.</li>
<li>With catatonia</li>
<li>Severity of delusions, hallucinations, disorganized speech, and negative symptoms:
<ul>
<li>0 — Absent</li>
<li>1 — Equivocal</li>
<li>2 — Mild</li>
<li>3 — Moderate</li>
<li>4 — Severe</li>
</ul>
</li>
</ul>
</div>  
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<ol>
<li>Criteria 1, 4, and 5 of Schizophrenia are met.</li>
<li>An episode of the disorder (including prodromal, active, and residual phases) lasts at least 1 month but less than 6 months. (When the diagnosis must be made without waiting for recovery, it should be qualified as &quot;Provisional.&quot;)</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>Without Good Prognostic Features</li>
<li>With Good Prognostic Features: as evidenced by two (or more) of the following:
<ol>
<li>onset of prominent psychotic symptoms within 4 weeks of the first noticeable change in usual behavior or functioning</li>
<li>confusion or perplexity at the height of the psychotic episode</li>
<li>good premorbid social and occupational functioning</li>
<li>absence of blunted or flat affect</li>
</ol>
</li>
</ul>
</div>  
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Schizophreniform Disorder.</p>
<ol>
<li>Meets all of the criteria for Schizophrenia except for duration.</li>
<li>The illness (including prodromal, active, and residual phases) lasts more than two weeks but less than six months.</li>
</ol>
</div>  
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Does not appear.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Does not appear.</p>
</div>`,xh=Object.freeze(Object.defineProperty({__proto__:null,attributes:N2,html:P2},Symbol.toStringTag,{value:"Module"})),M2={title:"Substance/Medication-Induced Psychotic Disorder",description:"Psychotic symptoms caused by the use of or withdrawal from substances or medications."},R2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<ol>
<li>Presence of one or both of the following symptoms:
<ol>
<li>Delusions</li>
<li>Hallucinations</li>
</ol>
</li>
<li>There is evidence from the history, physical examination, or laboratory findings of booth (a) and (b):
<ol>
<li>The symptoms in Criterion 1 developed during or soon after substance intoxication or withdrawal or after exposure to or withdrawal from a medication.</li>
<li>The involved substance/medication is capable of producing the symptoms in Criterion 1.</li>
</ol>
</li>
<li>The disturbance is not better explained by a psychotic disorder that is not substance/medication-induced. Such evidence of an independent psychotic disorder could include the following:
The symptoms preceded the onset of the substance/medication use; the symptoms persist for a substantial period of time (e.g., about 1 month) after the cessation of acute withdrawal or severe intoxication; or there is other evidence of an independent nonsubstance/medication-induced psychotic disorder (e.g., a history of recurrent non-substance/medication-related episodes).</li>
<li>The disturbance does not occur exclusively during the course of a delirium.</li>
<li>The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With onset during intoxication</li>
<li>With onset during withdrawal</li>
<li>With onset after medication use</li>
<li>Severity (0-4)</li>
</ul>
<p>The ICD-10 includes specifiers for various substances (e.g., alcohol, cannabis, phencyclidine, cocaine, and several others) along with mild, moderate or severe, and without use indicators.</p>
</div>
<div class="dsm-date">
1994
</div>
<div class="dsm-box"> 
<h2>DSM-IV</h2>
<p>Listed as Substance-Induced Psychotic Disorder.</p>
<h4>Substance-Induced Psychotic Disorder</h4>
<ol>
<li>Prominent hallucinations or delusions.<br>
<i>Note: Do not include hallucinations if the person has insight that they are substance induced.</i></li>
<li>There is evidence from the history, physical examination, or laboratory
findings of either (a) or (b):
<ol>
<li>the symptoms in Criterion 1 developed during, or within a month of, Substance Intoxication or Withdrawal</li>
<li>medication use is etiologically related to the disturbance</li>
</ol>
</li>
<li>The disturbance is not better accounted for by a Psychotic Disorder that is not substance induced. Evidence that the symptoms are better accounted for by a Psychotic Disorder that is not substance induced might include the following: the symptoms precede the onset of the substance use (or medication use); the symptoms persist for a substantial period of time (e.g., about a month) after the cessation of acute withdrawal or severe intoxication, or are substantially in excess of what would be expected given the type or amount of the substance used or the duration of use; or there is other evidence that suggests the existence of an independent non-substance-induced Psychotic Disorder (e.g., a history of recurrent non-substance-related episodes).</li>
<li>The disturbance does not occur exclusively during the course of a delirium.</li>
</ol>
<h6>Specifiers</h6>
<ul>
<li>With Onset During Intoxication: if criteria are met for Intoxication with the substance and the symptoms develop during the intoxication
syndrome</li>
<li>With Onset During Withdrawal: if criteria are met for Withdrawal from
the substance and the symptoms develop during, or shortly after, a
withdrawal syndrome</li>
</ul>
</div>
<div class="dsm-date">
1980
</div>
<div class="dsm-box"> 
<h2>DSM-III</h2>
<p>Listed as Substance-induced... hallucinosis, delirium, delusional disorder, withdrawal, affective disorder, etc.</p>
</div>
<div class="dsm-date">
1968
</div>
<div class="dsm-box"> 
<h2>DSM-II</h2>
<p>Listed as &quot;toxic effect of substances chiefly nonmedicinal as to source&quot; and &quot;accidental poisoning by other solid and liquid substances&quot;.</p>
</div>
<div class="dsm-date">
1952
</div>
<div class="dsm-box"> 
<h2>DSM</h2>
<p>Listed as &quot;Acute Brain Syndrome, drug or poison intoxication&quot; and &quot;Acute Brain Syndrome, alcohol intoxication&quot;.</p>
</div>`,Sh=Object.freeze(Object.defineProperty({__proto__:null,attributes:M2,html:R2},Symbol.toStringTag,{value:"Module"})),L2={title:"Unspecified Schizophrenia Spectrum and Other Psychotic Disorder",description:"Psychotic symptoms unable to be classified as a more specific disorder with the reason unspecified."},F2=`<div class="dsm-timeline">
<div class="dsm-date">
2022
</div>
<div class="dsm-box"> 
<h2>DSM-5-TR</h2>
<p>This diagnosis is given when there are characteristic symptoms of schizophrenia spectrum and other psychotic disorer that cause significant distress or impairment in social or occupational functioning, but the person does not fit the full criteria for any of the disorders in the class or there is insufficient information to make a more specific diagnosis (e.g., emergency rooms). The &quot;unspecified&quot; diagnosis is used when clinicians choose not to communicate the specific reason that the presentation does not meet other diagnosis criteria.</p>
</div>`,wh=Object.freeze(Object.defineProperty({__proto__:null,attributes:L2,html:F2},Symbol.toStringTag,{value:"Module"})),B2={title:"Ana",category:"translation",image:"/images/ernst_stöhr_couple_by_a_lake.png"},z2=`<p><i>This is my English translation of Ismael Serrano's song &quot;Ana&quot;.</i></p>
<p>Ana, life is so short<br>
And there are so many goodbyes<br>
Full of empty promises</p>
<p>Ana, what will become of us<br>
When we fall and others take our place?</p>
<p>Ana, where will the next battle be<br>
In which we lose the war against loneliness</p>
<p>Ana, you will hear again<br>
The stones that happiness threw at your window</p>
<p>Ana, life is so short<br>
Maybe I'll become a lie<br>
And won't know you tomorrow</p>
<p>Ana, when I withhold a hug from you<br>
Remember then the year that we forged peace</p>
<p>Ana, maybe I'll leave and never come back<br>
Maybe I'll die and you'll never have to curse me again</p>
<p>Ana, I see you and declare with guilt<br>
That I want your presence more than I want peace</p>
<p>Ana, what do I do with my songs?<br>
With a bundle of frost<br>
With my desire to kill?</p>
<p>Ana, what do I do with the mountains<br>
Of papers that I've signed<br>
Swearing to die or love</p>
<p>Swearing to die or love</p>
<p>Ana</p>
`,Dh=Object.freeze(Object.defineProperty({__proto__:null,attributes:B2,html:z2},Symbol.toStringTag,{value:"Module"})),j2={title:"Canción de las Simples Cosas",category:"translation",image:"/images/carl_moll_lilies.png"},U2=`<p><i>This is my English translation of César Isella's song &quot;Song of the Simple Things&quot;.</i></p>
<p>One bids farewell, insensibly, to the little things<br>
Like a tree in autumn that loses its leaves</p>
<p>In the end, it's sadness that is the slow death to the little things<br>
Those simple things that go on aching in the heart</p>
<p>One always returns to those old places where he loved life<br>
And then he understands how absent are the dear things</p>
<p>For that, my girl, don't go now, dreaming of the return<br>
For love is simple, and the simple things, time devours</p>
<p>Stay here a little longer, in the bright light of midday<br>
Where you'll find the table set, with the bread in the sun</p>
<p>For that, my girl, don't go now, dreaming of the return<br>
For love is simple, and the simple things, time devours</p>
<p>One always returns to those old places where he loved life</p>
`,Ih=Object.freeze(Object.defineProperty({__proto__:null,attributes:j2,html:U2},Symbol.toStringTag,{value:"Module"})),H2={title:"Ese Arar en el Mar",category:"translation",image:"/images/gracia_barrios.png"},$2=`<p><i>This is my English translation of Chabuca Granda's song &quot;That Plowing In the Sea&quot;.</i></p>
<p>When I forget, I will have forgotten<br>
I will live as if sleepwalking, free<br>
I will not long for an answer because I won't have asked<br>
I won't have forgiven, nor offended</p>
<p>I will miss the rumination of my dreams<br>
And the sweet grinding, the hope<br>
That constant making of someone out of something<br>
That yearning for castles in the sky</p>
<p>That plow in the sea of daydreams<br>
That eternal dreaming...<br>
Of adolescence</p>
`,kh=Object.freeze(Object.defineProperty({__proto__:null,attributes:H2,html:$2},Symbol.toStringTag,{value:"Module"})),q2={title:"Gracias a la Vida",category:"translation",image:"/images/chagall.png"},W2=`<p><i>This is my English translation of Violeta Parra's song &quot;Thanks to Life&quot;.</i></p>
<p>Thanks to life that has given me so much<br>
It gave me two stars for eyes<br>
That perfectly distinguish the black from the white<br>
In the vaulted sky, its starry backdrop<br>
And in the crowds, the man that I love</p>
<p>Thanks to life that has given me so much<br>
It gave me hearing<br>
That, in all its breadth<br>
Records the days and the nights<br>
Crickets and canaries<br>
Hammers, turbines, barking dogs and rain showers</p>
<p>Thanks to life that has given me so much<br>
It gave me sound and letters<br>
With them I build the words<br>
That I think and declare<br>
Mother, friend, brother, and luminous light<br>
The path of the soul that I am loving</p>
<p>Thanks to life that has given me so much<br>
It gave me the step<br>
Of my tired feet<br>
With them I walked over cities and puddles<br>
Beaches, deserts, mountains and plains<br>
And your house, your street, your patio</p>
<p>Thanks to life that has given me so much<br>
It gave me a heart<br>
That shakes its frame<br>
When I see the fruit of the human brain<br>
When I see the good so far from the bad<br>
When I look into the depths of your clear eyes</p>
<p>Thanks to life that has given me so much<br>
It gave me laughter and it gave me tears<br>
Thus, I discern joy from sorrow<br>
The two materials that make my song<br>
And all of your song that is the same song<br>
And everyone's song that is my own song</p>
<p>Thanks to life</p>
`,Ch=Object.freeze(Object.defineProperty({__proto__:null,attributes:q2,html:W2},Symbol.toStringTag,{value:"Module"})),V2={title:"Mariella",category:"translation",image:"/images/pelton-departure.jpg"},Y2=`<p><i>This is my Spanish translation of the Leon Bridges' and Khruangbin's beautiful song &quot;Mariella&quot;.</i></p>
<p>Pelo negro como el cielo de medianoche<br>
Ojos como la jungla, eres algo salvaje</p>
<p>Su dulce melodía canta dondequiera que voy<br>
Dando vueltas en mi cabeza, sentado en este camino</p>
<p>Quizás escribiré una carta desde este viejo pueblito<br>
Abajo en Texas<br>
La guardaré para ti</p>
<p>Mariella, Mariella, Mariella, Mariella<br>
Mariella, Mariella, Mari', podemos ir juntos?</p>
<p>Aquí nada cambia, las estaciones pasan<br>
Dijiste 'hola', dijiste 'adios'</p>
<p>Te arrancaste? Mariella, a dónde fuiste?<br>
A algún lugar nuevo, a algún lugar viejo</p>
<p>Quizás yo no quiero vivir solo en un viejo pueblito<br>
Aquí en Texas<br>
Con el recuerdo de ti</p>
<p>Mariella, Mariella, Mariella, Mariella<br>
Mariella, Mariella, Mariella, Mariella<br>
Mariella, Mariella, Mariella, Mariella<br>
Mariella, Mariella, Mariella, aferrándome a ti</p>
`,Ah=Object.freeze(Object.defineProperty({__proto__:null,attributes:V2,html:Y2},Symbol.toStringTag,{value:"Module"})),Q2={title:"Tan Joven y Tan Viejo",category:"translation",image:"/images/twilight.png"},G2=`<p><i>My English translation of Joaquín Sabina's song &quot;So Young and So Old&quot;.</i></p>
<p>The first thing I wanted was to get far away<br>
We, the kids that hated mirrors<br>
Glued Rita Hayworth's gloves and the streets of New York on the sticker album of resignation<br>
I hardly saw that life was winking her eye at me<br>
I asked that at her whim, she dispose of me<br>
She gave me the keys to the forbidden city<br>
All that I have, which is nothing, I gave to her<br>
And like that I grew up flying</p>
<p>And flew so fast my own shadow lost sight of me<br>
I ruined my shirt to erase my footprints<br>
I confused the neon lights for stars<br>
I cheated at poker<br>
I defrauded my friends<br>
On a bench in the park<br>
I slept like a log</p>
<p>For saying what I think without thinking about what I say<br>
They gave me more than a kiss, more than a slap<br>
What I know about forgetting I learned from the moon<br>
What I know about sin I had to look for myself<br>
Like a thief under some girl's skirt whose name I don't like to remember<br>
So for now, no goodbyes guys<br>
I fall asleep at the funerals of my generation<br>
Each night I reinvent myself<br>
I still get drunk<br>
So young and so old<br>
Like a rolling stone</p>
`,Oh=Object.freeze(Object.defineProperty({__proto__:null,attributes:Q2,html:G2},Symbol.toStringTag,{value:"Module"})),K2={title:"Vine del Norte",category:"translation",image:"/images/roberto_matta.png"},X2=`<p><i>This is my English translation of Ismael Serrano's song &quot;I Came from the North&quot;.</i></p>
<p>I came from the north looking for a song and a cross<br>
There crossed a comet, and in its wake was you<br>
In Madrid it would keep on raining, sad like I left it<br>
And in Santiago with its lights, its November burned me</p>
<p>It was after a concert, one night at your college<br>
There I met you once again<br>
&quot;Come party with me tonight&quot;<br>
&quot;I accept your offer gladly, only on one condition:<br>
That this night doesn't end, and that I don't fall in love.&quot;</p>
<p>On our way to the Alameda, you start to tell me of causes, chances, and struggles<br>
In those days and in the past<br>
In front of the Moneda, you hummed Jara<br>
You looked at me, &quot;Standing like that, so strong, you have an air of Guevara about you&quot;</p>
<p>We went into a bar and someone was singing Fito<br>
&quot;At this rate I'm going to fall in love, I just need another pisco&quot;<br>
&quot;Stop telling stories, come up here and sing me one of Silvio's songs&quot;<br>
&quot;Only if you give me a kiss&quot; and everybody sang along with me</p>
<p>We left the bar drunk, holding hands<br>
And in the street, as always, the cops were fucking around<br>
You shouted at them, &quot;Murderers!&quot; and we both started to run<br>
You were laughing and in your laugh I saw myself fall</p>
<p>&quot;Where have you been all this time?&quot;<br>
&quot;It's late, go home&quot;<br>
And in your embrace I thought I heard the Parras singing for us from afar<br>
&quot;I'd better go&quot;<br>
I stayed right there, without you, shouting<br>
&quot;I'll remember you, Amanda&quot;<br>
&quot;I'll remember you, Amanda&quot;</p>
<p>In time, I arrived back at my north<br>
With a song and a cross, with the wake of a comet, with your lie and your light<br>
In Madrid, it kept on raining just how I'd left it<br>
And in Santiago there are so many things… I'm dying to go back today</p>
`,Nh=Object.freeze(Object.defineProperty({__proto__:null,attributes:K2,html:X2},Symbol.toStringTag,{value:"Module"})),J2={title:"Volver a los Diecisiete",category:"translation",image:"/images/chagall_lovers.png"},Z2=`<p><i>This is my English translation of Violeta Parra's song &quot;Back to seventeen&quot; or &quot;To be seventeen again&quot;. I love the original from Parra's album Las Últimas Composiciones as well as a cover done by Camila Gallardo.</i></p>
<p>To go back to seventeen after living a century<br>
Is like deciphering symbols without being an adequate sage<br>
Suddenly being so fragile again, like a second<br>
Feeling so deeply again, like a child in front of God<br>
That is how I feel in this fertile moment</p>
<p>And so it goes, twisting, tangling like ivy on the wall<br>
Sprouting, growing like moss on the stone</p>
<p>I step backward as you step forth<br>
The rainbow of our alliance has penetrated my nest<br>
With all its colors it has passed through my veins<br>
And even the strong chain with which destiny has tied us<br>
Is like a fine diamond that illuminates my tranquil soul</p>
<p>What feeling can do, knowing could not<br>
Nor the clearest process, nor the broadest thought<br>
Everything changes in a moment<br>
Like a condescending magician that gently pulls us away from grudges and violence<br>
Only love with its science brings us back our innocence</p>
<p>And so it goes, twisting, tangling like ivy on the wall<br>
Sprouting, growing like moss on the stone</p>
<p>Love is a whirlwind of original purity<br>
Even to the ferocious animal she whispers her sweet trill<br>
She halts the pilgrims, frees the prisoners<br>
Love, with her care, turns the old man into a boy<br>
Only loving makes evil pure and sincere again</p>
<p>The window flew wide open, as if by magic<br>
Love entered in her cloak like a warm morning<br>
At the sound of her beautiful song the jasmine started to bloom<br>
Flying like a Seraphim, she placed jewels in the sky<br>
And to my seventeenth birthday, the angel returned me</p>
<p>And so it goes, twisting, tangling like ivy on the wall<br>
Sprouting, growing like moss on the stone</p>
`,Ph=Object.freeze(Object.defineProperty({__proto__:null,attributes:J2,html:Z2},Symbol.toStringTag,{value:"Module"})),ex="/jessjessjohnsonson.github.io/assets/2025_Belvedere_Gardens-RT5tNUav.png",tx=Object.freeze(Object.defineProperty({__proto__:null,default:ex},Symbol.toStringTag,{value:"Module"})),nx="/jessjessjohnsonson.github.io/assets/2025_Cats_In_Marrakesh-CAa5P-XE.png",ix=Object.freeze(Object.defineProperty({__proto__:null,default:nx},Symbol.toStringTag,{value:"Module"})),rx="/jessjessjohnsonson.github.io/assets/2025_Tiny_Bernardo_At_the_Guggenheim-PUisG3S8.png",ox=Object.freeze(Object.defineProperty({__proto__:null,default:rx},Symbol.toStringTag,{value:"Module"}));var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uy={exports:{}},dl={},cy={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),sx=Symbol.for("react.portal"),ax=Symbol.for("react.fragment"),lx=Symbol.for("react.strict_mode"),ux=Symbol.for("react.profiler"),cx=Symbol.for("react.provider"),dx=Symbol.for("react.context"),hx=Symbol.for("react.forward_ref"),fx=Symbol.for("react.suspense"),px=Symbol.for("react.memo"),mx=Symbol.for("react.lazy"),gp=Symbol.iterator;function gx(e){return e===null||typeof e!="object"?null:(e=gp&&e[gp]||e["@@iterator"],typeof e=="function"?e:null)}var dy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hy=Object.assign,fy={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=fy,this.updater=n||dy}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function py(){}py.prototype=Nr.prototype;function Rh(e,t,n){this.props=e,this.context=t,this.refs=fy,this.updater=n||dy}var Lh=Rh.prototype=new py;Lh.constructor=Rh;hy(Lh,Nr.prototype);Lh.isPureReactComponent=!0;var yp=Array.isArray,my=Object.prototype.hasOwnProperty,Fh={current:null},gy={key:!0,ref:!0,__self:!0,__source:!0};function yy(e,t,n){var i,r={},o=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)my.call(t,i)&&!gy.hasOwnProperty(i)&&(r[i]=t[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Es,type:e,key:o,ref:s,props:r,_owner:Fh.current}}function yx(e,t){return{$$typeof:Es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Es}function bx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bp=/\/+/g;function Yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bx(""+e.key):t.toString(36)}function fa(e,t,n,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Es:case sx:s=!0}}if(s)return s=e,r=r(s),e=i===""?"."+Yl(s,0):i,yp(r)?(n="",e!=null&&(n=e.replace(bp,"$&/")+"/"),fa(r,t,n,"",function(c){return c})):r!=null&&(Bh(r)&&(r=yx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(bp,"$&/")+"/")+e)),t.push(r)),1;if(s=0,i=i===""?".":i+":",yp(e))for(var a=0;a<e.length;a++){o=e[a];var l=i+Yl(o,a);s+=fa(o,t,n,l,r)}else if(l=gx(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=i+Yl(o,a++),s+=fa(o,t,n,l,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function qs(e,t,n){if(e==null)return e;var i=[],r=0;return fa(e,i,"","",function(o){return t.call(n,o,r++)}),i}function vx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Tt={current:null},pa={transition:null},Tx={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:pa,ReactCurrentOwner:Fh};function by(){throw Error("act(...) is not supported in production builds of React.")}_e.Children={map:qs,forEach:function(e,t,n){qs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qs(e,function(){t++}),t},toArray:function(e){return qs(e,function(t){return t})||[]},only:function(e){if(!Bh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_e.Component=Nr;_e.Fragment=ax;_e.Profiler=ux;_e.PureComponent=Rh;_e.StrictMode=lx;_e.Suspense=fx;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;_e.act=by;_e.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=hy({},e.props),r=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Fh.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)my.call(t,l)&&!gy.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Es,type:e.type,key:r,ref:o,props:i,_owner:s}};_e.createContext=function(e){return e={$$typeof:dx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cx,_context:e},e.Consumer=e};_e.createElement=yy;_e.createFactory=function(e){var t=yy.bind(null,e);return t.type=e,t};_e.createRef=function(){return{current:null}};_e.forwardRef=function(e){return{$$typeof:hx,render:e}};_e.isValidElement=Bh;_e.lazy=function(e){return{$$typeof:mx,_payload:{_status:-1,_result:e},_init:vx}};_e.memo=function(e,t){return{$$typeof:px,type:e,compare:t===void 0?null:t}};_e.startTransition=function(e){var t=pa.transition;pa.transition={};try{e()}finally{pa.transition=t}};_e.unstable_act=by;_e.useCallback=function(e,t){return Tt.current.useCallback(e,t)};_e.useContext=function(e){return Tt.current.useContext(e)};_e.useDebugValue=function(){};_e.useDeferredValue=function(e){return Tt.current.useDeferredValue(e)};_e.useEffect=function(e,t){return Tt.current.useEffect(e,t)};_e.useId=function(){return Tt.current.useId()};_e.useImperativeHandle=function(e,t,n){return Tt.current.useImperativeHandle(e,t,n)};_e.useInsertionEffect=function(e,t){return Tt.current.useInsertionEffect(e,t)};_e.useLayoutEffect=function(e,t){return Tt.current.useLayoutEffect(e,t)};_e.useMemo=function(e,t){return Tt.current.useMemo(e,t)};_e.useReducer=function(e,t,n){return Tt.current.useReducer(e,t,n)};_e.useRef=function(e){return Tt.current.useRef(e)};_e.useState=function(e){return Tt.current.useState(e)};_e.useSyncExternalStore=function(e,t,n){return Tt.current.useSyncExternalStore(e,t,n)};_e.useTransition=function(){return Tt.current.useTransition()};_e.version="18.3.1";cy.exports=_e;var N=cy.exports;const vy=Mh(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex=N,_x=Symbol.for("react.element"),xx=Symbol.for("react.fragment"),Sx=Object.prototype.hasOwnProperty,wx=Ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dx={key:!0,ref:!0,__self:!0,__source:!0};function Ty(e,t,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)Sx.call(t,i)&&!Dx.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:_x,type:e,key:o,ref:s,props:r,_owner:wx.current}}dl.Fragment=xx;dl.jsx=Ty;dl.jsxs=Ty;uy.exports=dl;var Y=uy.exports;function Ey({paintings:e,paintingInfo:t}){const i=Object.entries(e).map(([r,o])=>{const s=r.split("/").pop(),a=t[s];return{filePath:r,module:o,filename:s,...a}}).filter(r=>r.title).sort((r,o)=>r.year-o.year);return Y.jsx("div",{className:"gallery",children:Y.jsx("div",{className:"paintings-row",children:i.map(r=>Y.jsxs("div",{className:"painting-card",children:[Y.jsx("img",{src:r.module.default,alt:r.title,className:"painting-image"}),Y.jsxs("div",{className:"painting-info",children:[Y.jsx("p",{className:"title",children:r.title}),Y.jsx("p",{className:"year",children:r.year})]})]},r.filePath))})})}const Ix="My paintings",kx="/src/content/art/johnson_paintings/2025_Tiny_Bernardo_At_the_Guggenheim.png",zh=Object.assign({"/src/content/art/johnson_paintings/2025_Belvedere_Gardens.png":tx,"/src/content/art/johnson_paintings/2025_Cats_In_Marrakesh.png":ix,"/src/content/art/johnson_paintings/2025_Tiny_Bernardo_At_the_Guggenheim.png":ox});console.log("Paintings found:",zh);const Cx=Object.fromEntries(Object.keys(zh).map(e=>{const t=e.split("/").pop(),n=t.replace(/\.[^/.]+$/,""),[i,...r]=n.split("_"),o=r.join(" ");return[t,{year:Number(i),title:o}]}));function Ax(){return Y.jsx(Ey,{paintings:zh,paintingInfo:Cx})}const jh=Object.freeze(Object.defineProperty({__proto__:null,default:Ax,image:kx,title:Ix},Symbol.toStringTag,{value:"Module"})),Ox="/jessjessjohnsonson.github.io/assets/2025_Bernardo-CaVJWtze.jpg",Nx=Object.freeze(Object.defineProperty({__proto__:null,default:Ox},Symbol.toStringTag,{value:"Module"})),Px="/jessjessjohnsonson.github.io/assets/2025_Bernardo_In_Delanies_Cafe-DxtsBlaF.jpg",Mx=Object.freeze(Object.defineProperty({__proto__:null,default:Px},Symbol.toStringTag,{value:"Module"})),Rx="/jessjessjohnsonson.github.io/assets/2025_Bola%C3%B1o_Scene-DzSzuH5_.jpg",Lx=Object.freeze(Object.defineProperty({__proto__:null,default:Rx},Symbol.toStringTag,{value:"Module"})),Fx="/jessjessjohnsonson.github.io/assets/2025_Desk-CG6SlABL.jpg",Bx=Object.freeze(Object.defineProperty({__proto__:null,default:Fx},Symbol.toStringTag,{value:"Module"})),zx="/jessjessjohnsonson.github.io/assets/2025_Dolomites-BhSArGWH.jpg",jx=Object.freeze(Object.defineProperty({__proto__:null,default:zx},Symbol.toStringTag,{value:"Module"})),Ux="/jessjessjohnsonson.github.io/assets/2025_Karlskirche-DPXl9HZc.jpg",Hx=Object.freeze(Object.defineProperty({__proto__:null,default:Ux},Symbol.toStringTag,{value:"Module"})),$x="/jessjessjohnsonson.github.io/assets/2025_Old_Man_In_Vienna-BDfOEdMo.jpg",qx=Object.freeze(Object.defineProperty({__proto__:null,default:$x},Symbol.toStringTag,{value:"Module"})),Wx="/jessjessjohnsonson.github.io/assets/2025_Venice-DqjVP0j9.jpg",Vx=Object.freeze(Object.defineProperty({__proto__:null,default:Wx},Symbol.toStringTag,{value:"Module"})),Yx="/jessjessjohnsonson.github.io/assets/2025_Waiting_For_Food_In_Cetara-BclIwKjM.jpg",Qx=Object.freeze(Object.defineProperty({__proto__:null,default:Yx},Symbol.toStringTag,{value:"Module"})),Gx="My sketches",Kx="/src/content/art/johnson_sketches/2025_Dolomites.jpg",_y=Object.assign({"/src/content/art/johnson_sketches/2025_Bernardo.jpg":Nx,"/src/content/art/johnson_sketches/2025_Bernardo_In_Delanies_Cafe.jpg":Mx,"/src/content/art/johnson_sketches/2025_Bolaño_Scene.jpg":Lx,"/src/content/art/johnson_sketches/2025_Desk.jpg":Bx,"/src/content/art/johnson_sketches/2025_Dolomites.jpg":jx,"/src/content/art/johnson_sketches/2025_Karlskirche.jpg":Hx,"/src/content/art/johnson_sketches/2025_Old_Man_In_Vienna.jpg":qx,"/src/content/art/johnson_sketches/2025_Venice.jpg":Vx,"/src/content/art/johnson_sketches/2025_Waiting_For_Food_In_Cetara.jpg":Qx}),Xx=Object.fromEntries(Object.keys(_y).map(e=>{const t=e.split("/").pop(),n=t.replace(/\.[^/.]+$/,""),[i,...r]=n.split("_"),o=r.join(" ");return[t,{year:Number(i),title:o}]}));function Jx(){return Y.jsx(Ey,{paintings:_y,paintingInfo:Xx})}const Uh=Object.freeze(Object.defineProperty({__proto__:null,default:Jx,image:Kx,title:Gx},Symbol.toStringTag,{value:"Module"})),Zx="Jesspañol",eS="/src/content/webapps/jesspanish.png",xy="https://jesspanish.netlify.app/";function tS(){return Y.jsxs("div",{children:[Y.jsxs("div",{className:"p-8 text-center",children:[Y.jsx("p",{className:"mb-4",children:"My partner, Bernardo Subercaseaux, graciously started this web app to help me learn Spanish, which at first made me very interested in learning how to edit the code of the game and later on interested in learning Spanish."}),Y.jsx("p",{children:"The app includes a game for practicing:"}),Y.jsxs("ul",{className:"list-disc list-inside space-y-2 ml-6",children:[Y.jsxs("li",{children:[Y.jsx("b",{children:"Verbs and conjugations:"})," Users can practice conjugating verbs in all Spanish tenses (except those used exclusively in journalism) and add more verbs and conjugations to their own dictionary."]}),Y.jsxs("li",{children:[Y.jsx("b",{children:"Vocabulary:"})," Users can practice translating a set of English words to Spanish, Spanish words to English, and can add vocab words to their own dictionary with descriptions and categories."]}),Y.jsxs("li",{children:[Y.jsx("b",{children:"Forming sentences in Spanish:"})," Users try to write a sentence in Spanish using two random words from their vocabulary dictionary. An AI agent checks the grammar, spelling, and proper conjugation of verbs and provides the user with corrections."]}),Y.jsxs("li",{children:[Y.jsx("b",{children:"Translating sentences from English to Spanish:"})," An AI agent writes a sentence in English using two vocab words from the user's dictionary. The user tries to translate the sentence to Spanish, and the AI agent provides corrections."]})]})]}),Y.jsx("div",{style:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center"},children:Y.jsxs("a",{href:xy,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",flexDirection:"column",alignItems:"center",marginTop:"2rem",gap:"8px",textDecoration:"none"},children:[Y.jsx("img",{src:"/src/content/webapps/jesspanish.png",alt:"Jesspanish thumbnail",style:{width:500,height:"auto",borderRadius:8,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}),Y.jsx("span",{style:{padding:"10px 14px",background:"#FDFAF5",color:"rgb(73, 73, 73)",borderRadius:10,fontWeight:600},children:"Check it out here"})]})})]})}const Hh=Object.freeze(Object.defineProperty({__proto__:null,default:tS,image:eS,link:xy,title:Zx},Symbol.toStringTag,{value:"Module"})),nS="Jessprache",iS="/src/content/webapps/jessprache.png",Sy="https://jessprache.netlify.app/";function rS(){return Y.jsxs("div",{children:[Y.jsxs("div",{className:"p-8 text-center",children:[Y.jsx("p",{className:"mb-4",children:'I spent a summer in Vienna, Austria and always enjoyed the way German sounded, so I re-factored Jesspañol to Jessprache to ostensibly learn German. However, as someone told me in Vienna, "life is too short to learn German", and my level of speaking is virtually nonexistent, and my level of comprehension is specific to following yoga class instructions.'}),Y.jsx("p",{children:"The app includes a game for practicing:"}),Y.jsxs("ul",{className:"list-disc list-inside space-y-2 ml-6",children:[Y.jsxs("li",{children:[Y.jsx("b",{children:"Verbs and conjugations:"})," Users can practice conjugating verbs in all German tenses (except those used exclusively in journalism) and add more verbs and conjugations to their own dictionary."]}),Y.jsxs("li",{children:[Y.jsx("b",{children:"Vocabulary:"})," Users can practice translating a set of English words to German, German words to English, and can add vocab words to their own dictionary with descriptions and categories."]}),Y.jsxs("li",{children:[Y.jsx("b",{children:"Forming sentences in German:"})," Users try to write a sentence in German using two random words from their vocabulary dictionary. An AI agent checks the grammar, spelling, and proper conjugation of verbs and provides the user with corrections."]}),Y.jsxs("li",{children:[Y.jsx("b",{children:"Translating sentences from English to German:"})," An AI agent writes a sentence in English using two vocab words from the user's dictionary. The user tries to translate the sentence to German, and the AI agent provides corrections."]})]})]}),Y.jsx("div",{style:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"center"},children:Y.jsxs("a",{href:Sy,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",flexDirection:"column",alignItems:"center",marginTop:"2rem",gap:"8px",textDecoration:"none"},children:[Y.jsx("img",{src:"/src/content/webapps/jessprache.png",alt:"Jessprache thumbnail",style:{width:500,height:"auto",borderRadius:8,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}),Y.jsx("span",{style:{padding:"10px 14px",background:"#FDFAF5",color:"rgb(73, 73, 73)",borderRadius:10,fontWeight:600},children:"Check it out here"})]})})]})}const $h=Object.freeze(Object.defineProperty({__proto__:null,default:rS,image:iS,link:Sy,title:nS},Symbol.toStringTag,{value:"Module"}));var Bu={},wy={exports:{}},Ut={},Dy={exports:{}},Iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(q,X){var E=q.length;q.push(X);e:for(;0<E;){var de=E-1>>>1,me=q[de];if(0<r(me,X))q[de]=X,q[E]=me,E=de;else break e}}function n(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var X=q[0],E=q.pop();if(E!==X){q[0]=E;e:for(var de=0,me=q.length,S=me>>>1;de<S;){var Ae=2*(de+1)-1,ut=q[Ae],xe=Ae+1,$t=q[xe];if(0>r(ut,E))xe<me&&0>r($t,ut)?(q[de]=$t,q[xe]=E,de=xe):(q[de]=ut,q[Ae]=E,de=Ae);else if(xe<me&&0>r($t,E))q[de]=$t,q[xe]=E,de=xe;else break e}}return X}function r(q,X){var E=q.sortIndex-X.sortIndex;return E!==0?E:q.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,h=null,f=3,p=!1,_=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(q){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=q)i(c),X.sortIndex=X.expirationTime,t(l,X);else break;X=n(c)}}function C(q){if(w=!1,b(q),!_)if(n(l)!==null)_=!0,ae(R);else{var X=n(c);X!==null&&Te(C,X.startTime-q)}}function R(q,X){_=!1,w&&(w=!1,m(B),B=-1),p=!0;var E=f;try{for(b(X),h=n(l);h!==null&&(!(h.expirationTime>X)||q&&!G());){var de=h.callback;if(typeof de=="function"){h.callback=null,f=h.priorityLevel;var me=de(h.expirationTime<=X);X=e.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&i(l),b(X)}else i(l);h=n(l)}if(h!==null)var S=!0;else{var Ae=n(c);Ae!==null&&Te(C,Ae.startTime-X),S=!1}return S}finally{h=null,f=E,p=!1}}var y=!1,L=null,B=-1,V=5,Q=-1;function G(){return!(e.unstable_now()-Q<V)}function Z(){if(L!==null){var q=e.unstable_now();Q=q;var X=!0;try{X=L(!0,q)}finally{X?be():(y=!1,L=null)}}else y=!1}var be;if(typeof v=="function")be=function(){v(Z)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,te=se.port2;se.port1.onmessage=Z,be=function(){te.postMessage(null)}}else be=function(){P(Z,0)};function ae(q){L=q,y||(y=!0,be())}function Te(q,X){B=P(function(){q(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){_||p||(_=!0,ae(R))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(q){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var E=f;f=X;try{return q()}finally{f=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,X){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var E=f;f=q;try{return X()}finally{f=E}},e.unstable_scheduleCallback=function(q,X,E){var de=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?de+E:de):E=de,q){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=E+me,q={id:d++,callback:X,priorityLevel:q,startTime:E,expirationTime:me,sortIndex:-1},E>de?(q.sortIndex=E,t(c,q),n(l)===null&&q===n(c)&&(w?(m(B),B=-1):w=!0,Te(C,E-de))):(q.sortIndex=me,t(l,q),_||p||(_=!0,ae(R))),q},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(q){var X=f;return function(){var E=f;f=X;try{return q.apply(this,arguments)}finally{f=E}}}})(Iy);Dy.exports=Iy;var oS=Dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS=N,jt=oS;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ky=new Set,Mo={};function $i(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(Mo[e]=t,e=0;e<t.length;e++)ky.add(t[e])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=Object.prototype.hasOwnProperty,aS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vp={},Tp={};function lS(e){return zu.call(Tp,e)?!0:zu.call(vp,e)?!1:aS.test(e)?Tp[e]=!0:(vp[e]=!0,!1)}function uS(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cS(e,t,n,i){if(t===null||typeof t>"u"||uS(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Et(e,t,n,i,r,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new Et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new Et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new Et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new Et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new Et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new Et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new Et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new Et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new Et(e,5,!1,e.toLowerCase(),null,!1,!1)});var qh=/[\-:]([a-z])/g;function Wh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qh,Wh);lt[t]=new Et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qh,Wh);lt[t]=new Et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qh,Wh);lt[t]=new Et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new Et(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new Et(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vh(e,t,n,i){var r=lt.hasOwnProperty(t)?lt[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cS(t,n,r,i)&&(n=null),i||r===null?lS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var $n=sS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ws=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),Gh=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Oy=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=Ep&&e[Ep]||e["@@iterator"],typeof e=="function"?e:null)}var He=Object.assign,Ql;function uo(e){if(Ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ql=t&&t[1]||""}return`
`+Ql+e}var Gl=!1;function Kl(e,t){if(!e||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?uo(e):""}function dS(e){switch(e.tag){case 5:return uo(e.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function $u(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case ju:return"Profiler";case Yh:return"StrictMode";case Uu:return"Suspense";case Hu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ay:return(e.displayName||"Context")+".Consumer";case Cy:return(e._context.displayName||"Context")+".Provider";case Qh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gh:return t=e.displayName||null,t!==null?t:$u(e.type)||"Memo";case Jn:t=e._payload,e=e._init;try{return $u(e(t))}catch{}}return null}function hS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $u(t);case 8:return t===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ny(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fS(e){var t=Ny(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vs(e){e._valueTracker||(e._valueTracker=fS(e))}function Py(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ny(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qu(e,t){var n=t.checked;return He({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _p(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=pi(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function My(e,t){t=t.checked,t!=null&&Vh(e,"checked",t,!1)}function Wu(e,t){My(e,t);var n=pi(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vu(e,t.type,pi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vu(e,t,n){(t!=="number"||Pa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var co=Array.isArray;function fr(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+pi(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Yu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return He({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(co(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pi(n)}}function Ry(e,t){var n=pi(t.value),i=pi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function wp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ly(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ly(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ys,Fy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ys=Ys||document.createElement("div"),Ys.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ys.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pS=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(e){pS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yo[t]=yo[e]})});function By(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yo.hasOwnProperty(e)&&yo[e]?(""+t).trim():t+"px"}function zy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=By(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var mS=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gu(e,t){if(t){if(mS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Ku(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xu=null;function Kh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ju=null,pr=null,mr=null;function Dp(e){if(e=Ss(e)){if(typeof Ju!="function")throw Error(U(280));var t=e.stateNode;t&&(t=gl(t),Ju(e.stateNode,e.type,t))}}function jy(e){pr?mr?mr.push(e):mr=[e]:pr=e}function Uy(){if(pr){var e=pr,t=mr;if(mr=pr=null,Dp(e),t)for(e=0;e<t.length;e++)Dp(t[e])}}function Hy(e,t){return e(t)}function $y(){}var Xl=!1;function qy(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return Hy(e,t,n)}finally{Xl=!1,(pr!==null||mr!==null)&&($y(),Uy())}}function Lo(e,t){var n=e.stateNode;if(n===null)return null;var i=gl(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var Zu=!1;if(zn)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Zu=!1}function gS(e,t,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var bo=!1,Ma=null,Ra=!1,ec=null,yS={onError:function(e){bo=!0,Ma=e}};function bS(e,t,n,i,r,o,s,a,l){bo=!1,Ma=null,gS.apply(yS,arguments)}function vS(e,t,n,i,r,o,s,a,l){if(bS.apply(this,arguments),bo){if(bo){var c=Ma;bo=!1,Ma=null}else throw Error(U(198));Ra||(Ra=!0,ec=c)}}function qi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ip(e){if(qi(e)!==e)throw Error(U(188))}function TS(e){var t=e.alternate;if(!t){if(t=qi(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Ip(r),e;if(o===i)return Ip(r),t;o=o.sibling}throw Error(U(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(U(189))}}if(n.alternate!==i)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function Vy(e){return e=TS(e),e!==null?Yy(e):null}function Yy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yy(e);if(t!==null)return t;e=e.sibling}return null}var Qy=jt.unstable_scheduleCallback,kp=jt.unstable_cancelCallback,ES=jt.unstable_shouldYield,_S=jt.unstable_requestPaint,We=jt.unstable_now,xS=jt.unstable_getCurrentPriorityLevel,Xh=jt.unstable_ImmediatePriority,Gy=jt.unstable_UserBlockingPriority,La=jt.unstable_NormalPriority,SS=jt.unstable_LowPriority,Ky=jt.unstable_IdlePriority,hl=null,Sn=null;function wS(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:kS,DS=Math.log,IS=Math.LN2;function kS(e){return e>>>=0,e===0?32:31-(DS(e)/IS|0)|0}var Qs=64,Gs=4194304;function ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ho(a):(o&=s,o!==0&&(i=ho(o)))}else s=n&~r,s!==0?i=ho(s):o!==0&&(i=ho(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-hn(t),r=1<<n,i|=e[n],t&=~r;return i}function CS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-hn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=CS(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function tc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xy(){var e=Qs;return Qs<<=1,!(Qs&4194240)&&(Qs=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _s(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function OS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-hn(n),o=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~o}}function Jh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-hn(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var ke=0;function Jy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zy,Zh,e0,t0,n0,nc=!1,Ks=[],si=null,ai=null,li=null,Fo=new Map,Bo=new Map,ei=[],NS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(e,t){switch(e){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":li=null;break;case"pointerover":case"pointerout":Fo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(t.pointerId)}}function Kr(e,t,n,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Ss(t),t!==null&&Zh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function PS(e,t,n,i,r){switch(t){case"focusin":return si=Kr(si,e,t,n,i,r),!0;case"dragenter":return ai=Kr(ai,e,t,n,i,r),!0;case"mouseover":return li=Kr(li,e,t,n,i,r),!0;case"pointerover":var o=r.pointerId;return Fo.set(o,Kr(Fo.get(o)||null,e,t,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Bo.set(o,Kr(Bo.get(o)||null,e,t,n,i,r)),!0}return!1}function i0(e){var t=Ai(e.target);if(t!==null){var n=qi(t);if(n!==null){if(t=n.tag,t===13){if(t=Wy(n),t!==null){e.blockedOn=t,n0(e.priority,function(){e0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ic(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Xu=i,n.target.dispatchEvent(i),Xu=null}else return t=Ss(n),t!==null&&Zh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){ma(e)&&n.delete(t)}function MS(){nc=!1,si!==null&&ma(si)&&(si=null),ai!==null&&ma(ai)&&(ai=null),li!==null&&ma(li)&&(li=null),Fo.forEach(Ap),Bo.forEach(Ap)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,nc||(nc=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,MS)))}function zo(e){function t(r){return Xr(r,e)}if(0<Ks.length){Xr(Ks[0],e);for(var n=1;n<Ks.length;n++){var i=Ks[n];i.blockedOn===e&&(i.blockedOn=null)}}for(si!==null&&Xr(si,e),ai!==null&&Xr(ai,e),li!==null&&Xr(li,e),Fo.forEach(t),Bo.forEach(t),n=0;n<ei.length;n++)i=ei[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)i0(n),n.blockedOn===null&&ei.shift()}var gr=$n.ReactCurrentBatchConfig,Ba=!0;function RS(e,t,n,i){var r=ke,o=gr.transition;gr.transition=null;try{ke=1,ef(e,t,n,i)}finally{ke=r,gr.transition=o}}function LS(e,t,n,i){var r=ke,o=gr.transition;gr.transition=null;try{ke=4,ef(e,t,n,i)}finally{ke=r,gr.transition=o}}function ef(e,t,n,i){if(Ba){var r=ic(e,t,n,i);if(r===null)lu(e,t,i,za,n),Cp(e,i);else if(PS(r,e,t,n,i))i.stopPropagation();else if(Cp(e,i),t&4&&-1<NS.indexOf(e)){for(;r!==null;){var o=Ss(r);if(o!==null&&Zy(o),o=ic(e,t,n,i),o===null&&lu(e,t,i,za,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else lu(e,t,i,null,n)}}var za=null;function ic(e,t,n,i){if(za=null,e=Kh(i),e=Ai(e),e!==null)if(t=qi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return za=e,null}function r0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xS()){case Xh:return 1;case Gy:return 4;case La:case SS:return 16;case Ky:return 536870912;default:return 16}default:return 16}}var ii=null,tf=null,ga=null;function o0(){if(ga)return ga;var e,t=tf,n=t.length,i,r="value"in ii?ii.value:ii.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===r[o-i];i++);return ga=r.slice(e,1<i?1-i:void 0)}function ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xs(){return!0}function Op(){return!1}function Ht(e){function t(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xs:Op,this.isPropagationStopped=Op,this}return He(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=Ht(Pr),xs=He({},Pr,{view:0,detail:0}),FS=Ht(xs),Zl,eu,Jr,fl=He({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Zl=e.screenX-Jr.screenX,eu=e.screenY-Jr.screenY):eu=Zl=0,Jr=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),Np=Ht(fl),BS=He({},fl,{dataTransfer:0}),zS=Ht(BS),jS=He({},xs,{relatedTarget:0}),tu=Ht(jS),US=He({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),HS=Ht(US),$S=He({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qS=Ht($S),WS=He({},Pr,{data:0}),Pp=Ht(WS),VS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=QS[e])?!!t[e]:!1}function rf(){return GS}var KS=He({},xs,{key:function(e){if(e.key){var t=VS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?YS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(e){return e.type==="keypress"?ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),XS=Ht(KS),JS=He({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Ht(JS),ZS=He({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),ew=Ht(ZS),tw=He({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nw=Ht(tw),iw=He({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=Ht(iw),ow=[9,13,27,32],of=zn&&"CompositionEvent"in window,vo=null;zn&&"documentMode"in document&&(vo=document.documentMode);var sw=zn&&"TextEvent"in window&&!vo,s0=zn&&(!of||vo&&8<vo&&11>=vo),Rp=" ",Lp=!1;function a0(e,t){switch(e){case"keyup":return ow.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function aw(e,t){switch(e){case"compositionend":return l0(t);case"keypress":return t.which!==32?null:(Lp=!0,Rp);case"textInput":return e=t.data,e===Rp&&Lp?null:e;default:return null}}function lw(e,t){if(nr)return e==="compositionend"||!of&&a0(e,t)?(e=o0(),ga=tf=ii=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return s0&&t.locale!=="ko"?null:t.data;default:return null}}var uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uw[e.type]:t==="textarea"}function u0(e,t,n,i){jy(i),t=ja(t,"onChange"),0<t.length&&(n=new nf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var To=null,jo=null;function cw(e){T0(e,0)}function pl(e){var t=or(e);if(Py(t))return e}function dw(e,t){if(e==="change")return t}var c0=!1;if(zn){var nu;if(zn){var iu="oninput"in document;if(!iu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),iu=typeof Bp.oninput=="function"}nu=iu}else nu=!1;c0=nu&&(!document.documentMode||9<document.documentMode)}function zp(){To&&(To.detachEvent("onpropertychange",d0),jo=To=null)}function d0(e){if(e.propertyName==="value"&&pl(jo)){var t=[];u0(t,jo,e,Kh(e)),qy(cw,t)}}function hw(e,t,n){e==="focusin"?(zp(),To=t,jo=n,To.attachEvent("onpropertychange",d0)):e==="focusout"&&zp()}function fw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(jo)}function pw(e,t){if(e==="click")return pl(t)}function mw(e,t){if(e==="input"||e==="change")return pl(t)}function gw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pn=typeof Object.is=="function"?Object.is:gw;function Uo(e,t){if(pn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zu.call(t,r)||!pn(e[r],t[r]))return!1}return!0}function jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Up(e,t){var n=jp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jp(n)}}function h0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?h0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function f0(){for(var e=window,t=Pa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pa(e.document)}return t}function sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yw(e){var t=f0(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(i!==null&&sf(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=Up(n,o);var s=Up(n,i);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bw=zn&&"documentMode"in document&&11>=document.documentMode,ir=null,rc=null,Eo=null,oc=!1;function Hp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||ir==null||ir!==Pa(i)||(i=ir,"selectionStart"in i&&sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Eo&&Uo(Eo,i)||(Eo=i,i=ja(rc,"onSelect"),0<i.length&&(t=new nf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ir)))}function Js(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionend:Js("Transition","TransitionEnd")},ru={},p0={};zn&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function ml(e){if(ru[e])return ru[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in p0)return ru[e]=t[n];return e}var m0=ml("animationend"),g0=ml("animationiteration"),y0=ml("animationstart"),b0=ml("transitionend"),v0=new Map,$p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(e,t){v0.set(e,t),$i(t,[e])}for(var ou=0;ou<$p.length;ou++){var su=$p[ou],vw=su.toLowerCase(),Tw=su[0].toUpperCase()+su.slice(1);yi(vw,"on"+Tw)}yi(m0,"onAnimationEnd");yi(g0,"onAnimationIteration");yi(y0,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(b0,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$i("onBeforeInput",["compositionend","keypress","textInput","paste"]);$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function qp(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,vS(i,t,void 0,e),e.currentTarget=null}function T0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;qp(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;qp(r,a,c),o=l}}}if(Ra)throw e=ec,Ra=!1,ec=null,e}function Le(e,t){var n=t[cc];n===void 0&&(n=t[cc]=new Set);var i=e+"__bubble";n.has(i)||(E0(t,e,2,!1),n.add(i))}function au(e,t,n){var i=0;t&&(i|=4),E0(n,e,i,t)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function Ho(e){if(!e[Zs]){e[Zs]=!0,ky.forEach(function(n){n!=="selectionchange"&&(Ew.has(n)||au(n,!1,e),au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zs]||(t[Zs]=!0,au("selectionchange",!1,t))}}function E0(e,t,n,i){switch(r0(t)){case 1:var r=RS;break;case 4:r=LS;break;default:r=ef}n=r.bind(null,t,n,e),r=void 0,!Zu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function lu(e,t,n,i,r){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Ai(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}qy(function(){var c=o,d=Kh(n),h=[];e:{var f=v0.get(e);if(f!==void 0){var p=nf,_=e;switch(e){case"keypress":if(ya(n)===0)break e;case"keydown":case"keyup":p=XS;break;case"focusin":_="focus",p=tu;break;case"focusout":_="blur",p=tu;break;case"beforeblur":case"afterblur":p=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ew;break;case m0:case g0:case y0:p=HS;break;case b0:p=nw;break;case"scroll":p=FS;break;case"wheel":p=rw;break;case"copy":case"cut":case"paste":p=qS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mp}var w=(t&4)!==0,P=!w&&e==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var v=c,b;v!==null;){b=v;var C=b.stateNode;if(b.tag===5&&C!==null&&(b=C,m!==null&&(C=Lo(v,m),C!=null&&w.push($o(v,C,b)))),P)break;v=v.return}0<w.length&&(f=new p(f,_,null,n,d),h.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Xu&&(_=n.relatedTarget||n.fromElement)&&(Ai(_)||_[jn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Ai(_):null,_!==null&&(P=qi(_),_!==P||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(w=Np,C="onMouseLeave",m="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(w=Mp,C="onPointerLeave",m="onPointerEnter",v="pointer"),P=p==null?f:or(p),b=_==null?f:or(_),f=new w(C,v+"leave",p,n,d),f.target=P,f.relatedTarget=b,C=null,Ai(d)===c&&(w=new w(m,v+"enter",_,n,d),w.target=b,w.relatedTarget=P,C=w),P=C,p&&_)t:{for(w=p,m=_,v=0,b=w;b;b=Xi(b))v++;for(b=0,C=m;C;C=Xi(C))b++;for(;0<v-b;)w=Xi(w),v--;for(;0<b-v;)m=Xi(m),b--;for(;v--;){if(w===m||m!==null&&w===m.alternate)break t;w=Xi(w),m=Xi(m)}w=null}else w=null;p!==null&&Wp(h,f,p,w,!1),_!==null&&P!==null&&Wp(h,P,_,w,!0)}}e:{if(f=c?or(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=dw;else if(Fp(f))if(c0)R=mw;else{R=fw;var y=hw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=pw);if(R&&(R=R(e,c))){u0(h,R,n,d);break e}y&&y(e,f,c),e==="focusout"&&(y=f._wrapperState)&&y.controlled&&f.type==="number"&&Vu(f,"number",f.value)}switch(y=c?or(c):window,e){case"focusin":(Fp(y)||y.contentEditable==="true")&&(ir=y,rc=c,Eo=null);break;case"focusout":Eo=rc=ir=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Hp(h,n,d);break;case"selectionchange":if(bw)break;case"keydown":case"keyup":Hp(h,n,d)}var L;if(of)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else nr?a0(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(s0&&n.locale!=="ko"&&(nr||B!=="onCompositionStart"?B==="onCompositionEnd"&&nr&&(L=o0()):(ii=d,tf="value"in ii?ii.value:ii.textContent,nr=!0)),y=ja(c,B),0<y.length&&(B=new Pp(B,e,null,n,d),h.push({event:B,listeners:y}),L?B.data=L:(L=l0(n),L!==null&&(B.data=L)))),(L=sw?aw(e,n):lw(e,n))&&(c=ja(c,"onBeforeInput"),0<c.length&&(d=new Pp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=L))}T0(h,t)})}function $o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ja(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Lo(e,n),o!=null&&i.unshift($o(e,o,r)),o=Lo(e,t),o!=null&&i.push($o(e,o,r))),e=e.return}return i}function Xi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wp(e,t,n,i,r){for(var o=t._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Lo(n,o),l!=null&&s.unshift($o(n,l,a))):r||(l=Lo(n,o),l!=null&&s.push($o(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var _w=/\r\n?/g,xw=/\u0000|\uFFFD/g;function Vp(e){return(typeof e=="string"?e:""+e).replace(_w,`
`).replace(xw,"")}function ea(e,t,n){if(t=Vp(t),Vp(e)!==t&&n)throw Error(U(425))}function Ua(){}var sc=null,ac=null;function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,Sw=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,ww=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(e){return Yp.resolve(null).then(e).catch(Dw)}:uc;function Dw(e){setTimeout(function(){throw e})}function uu(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),zo(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zo(t)}function ui(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),_n="__reactFiber$"+Mr,qo="__reactProps$"+Mr,jn="__reactContainer$"+Mr,cc="__reactEvents$"+Mr,Iw="__reactListeners$"+Mr,kw="__reactHandles$"+Mr;function Ai(e){var t=e[_n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jn]||n[_n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qp(e);e!==null;){if(n=e[_n])return n;e=Qp(e)}return t}e=n,n=e.parentNode}return null}function Ss(e){return e=e[_n]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function gl(e){return e[qo]||null}var dc=[],sr=-1;function bi(e){return{current:e}}function Fe(e){0>sr||(e.current=dc[sr],dc[sr]=null,sr--)}function Me(e,t){sr++,dc[sr]=e.current,e.current=t}var mi={},mt=bi(mi),Dt=bi(!1),Bi=mi;function Sr(e,t){var n=e.type.contextTypes;if(!n)return mi;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function It(e){return e=e.childContextTypes,e!=null}function Ha(){Fe(Dt),Fe(mt)}function Gp(e,t,n){if(mt.current!==mi)throw Error(U(168));Me(mt,t),Me(Dt,n)}function _0(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(U(108,hS(e)||"Unknown",r));return He({},n,i)}function $a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mi,Bi=mt.current,Me(mt,e),Me(Dt,Dt.current),!0}function Kp(e,t,n){var i=e.stateNode;if(!i)throw Error(U(169));n?(e=_0(e,t,Bi),i.__reactInternalMemoizedMergedChildContext=e,Fe(Dt),Fe(mt),Me(mt,e)):Fe(Dt),Me(Dt,n)}var Mn=null,yl=!1,cu=!1;function x0(e){Mn===null?Mn=[e]:Mn.push(e)}function Cw(e){yl=!0,x0(e)}function vi(){if(!cu&&Mn!==null){cu=!0;var e=0,t=ke;try{var n=Mn;for(ke=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Mn=null,yl=!1}catch(r){throw Mn!==null&&(Mn=Mn.slice(e+1)),Qy(Xh,vi),r}finally{ke=t,cu=!1}}return null}var ar=[],lr=0,qa=null,Wa=0,Gt=[],Kt=0,zi=null,Ln=1,Fn="";function Di(e,t){ar[lr++]=Wa,ar[lr++]=qa,qa=e,Wa=t}function S0(e,t,n){Gt[Kt++]=Ln,Gt[Kt++]=Fn,Gt[Kt++]=zi,zi=e;var i=Ln;e=Fn;var r=32-hn(i)-1;i&=~(1<<r),n+=1;var o=32-hn(t)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ln=1<<32-hn(t)+r|n<<r|i,Fn=o+e}else Ln=1<<o|n<<r|i,Fn=e}function af(e){e.return!==null&&(Di(e,1),S0(e,1,0))}function lf(e){for(;e===qa;)qa=ar[--lr],ar[lr]=null,Wa=ar[--lr],ar[lr]=null;for(;e===zi;)zi=Gt[--Kt],Gt[Kt]=null,Fn=Gt[--Kt],Gt[Kt]=null,Ln=Gt[--Kt],Gt[Kt]=null}var zt=null,Ft=null,ze=!1,dn=null;function w0(e,t){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,Ft=ui(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,Ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zi!==null?{id:Ln,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,Ft=null,!0):!1;default:return!1}}function hc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fc(e){if(ze){var t=Ft;if(t){var n=t;if(!Xp(e,t)){if(hc(e))throw Error(U(418));t=ui(n.nextSibling);var i=zt;t&&Xp(e,t)?w0(i,n):(e.flags=e.flags&-4097|2,ze=!1,zt=e)}}else{if(hc(e))throw Error(U(418));e.flags=e.flags&-4097|2,ze=!1,zt=e}}}function Jp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function ta(e){if(e!==zt)return!1;if(!ze)return Jp(e),ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lc(e.type,e.memoizedProps)),t&&(t=Ft)){if(hc(e))throw D0(),Error(U(418));for(;t;)w0(e,t),t=ui(t.nextSibling)}if(Jp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ft=ui(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ft=null}}else Ft=zt?ui(e.stateNode.nextSibling):null;return!0}function D0(){for(var e=Ft;e;)e=ui(e.nextSibling)}function wr(){Ft=zt=null,ze=!1}function uf(e){dn===null?dn=[e]:dn.push(e)}var Aw=$n.ReactCurrentBatchConfig;function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var i=n.stateNode}if(!i)throw Error(U(147,e));var r=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function na(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zp(e){var t=e._init;return t(e._payload)}function I0(e){function t(m,v){if(e){var b=m.deletions;b===null?(m.deletions=[v],m.flags|=16):b.push(v)}}function n(m,v){if(!e)return null;for(;v!==null;)t(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=fi(m,v),m.index=0,m.sibling=null,m}function o(m,v,b){return m.index=b,e?(b=m.alternate,b!==null?(b=b.index,b<v?(m.flags|=2,v):b):(m.flags|=2,v)):(m.flags|=1048576,v)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,v,b,C){return v===null||v.tag!==6?(v=yu(b,m.mode,C),v.return=m,v):(v=r(v,b),v.return=m,v)}function l(m,v,b,C){var R=b.type;return R===tr?d(m,v,b.props.children,C,b.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Jn&&Zp(R)===v.type)?(C=r(v,b.props),C.ref=Zr(m,v,b),C.return=m,C):(C=Sa(b.type,b.key,b.props,null,m.mode,C),C.ref=Zr(m,v,b),C.return=m,C)}function c(m,v,b,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=bu(b,m.mode,C),v.return=m,v):(v=r(v,b.children||[]),v.return=m,v)}function d(m,v,b,C,R){return v===null||v.tag!==7?(v=Li(b,m.mode,C,R),v.return=m,v):(v=r(v,b),v.return=m,v)}function h(m,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yu(""+v,m.mode,b),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ws:return b=Sa(v.type,v.key,v.props,null,m.mode,b),b.ref=Zr(m,null,v),b.return=m,b;case er:return v=bu(v,m.mode,b),v.return=m,v;case Jn:var C=v._init;return h(m,C(v._payload),b)}if(co(v)||Qr(v))return v=Li(v,m.mode,b,null),v.return=m,v;na(m,v)}return null}function f(m,v,b,C){var R=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return R!==null?null:a(m,v,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ws:return b.key===R?l(m,v,b,C):null;case er:return b.key===R?c(m,v,b,C):null;case Jn:return R=b._init,f(m,v,R(b._payload),C)}if(co(b)||Qr(b))return R!==null?null:d(m,v,b,C,null);na(m,b)}return null}function p(m,v,b,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(b)||null,a(v,m,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ws:return m=m.get(C.key===null?b:C.key)||null,l(v,m,C,R);case er:return m=m.get(C.key===null?b:C.key)||null,c(v,m,C,R);case Jn:var y=C._init;return p(m,v,b,y(C._payload),R)}if(co(C)||Qr(C))return m=m.get(b)||null,d(v,m,C,R,null);na(v,C)}return null}function _(m,v,b,C){for(var R=null,y=null,L=v,B=v=0,V=null;L!==null&&B<b.length;B++){L.index>B?(V=L,L=null):V=L.sibling;var Q=f(m,L,b[B],C);if(Q===null){L===null&&(L=V);break}e&&L&&Q.alternate===null&&t(m,L),v=o(Q,v,B),y===null?R=Q:y.sibling=Q,y=Q,L=V}if(B===b.length)return n(m,L),ze&&Di(m,B),R;if(L===null){for(;B<b.length;B++)L=h(m,b[B],C),L!==null&&(v=o(L,v,B),y===null?R=L:y.sibling=L,y=L);return ze&&Di(m,B),R}for(L=i(m,L);B<b.length;B++)V=p(L,m,B,b[B],C),V!==null&&(e&&V.alternate!==null&&L.delete(V.key===null?B:V.key),v=o(V,v,B),y===null?R=V:y.sibling=V,y=V);return e&&L.forEach(function(G){return t(m,G)}),ze&&Di(m,B),R}function w(m,v,b,C){var R=Qr(b);if(typeof R!="function")throw Error(U(150));if(b=R.call(b),b==null)throw Error(U(151));for(var y=R=null,L=v,B=v=0,V=null,Q=b.next();L!==null&&!Q.done;B++,Q=b.next()){L.index>B?(V=L,L=null):V=L.sibling;var G=f(m,L,Q.value,C);if(G===null){L===null&&(L=V);break}e&&L&&G.alternate===null&&t(m,L),v=o(G,v,B),y===null?R=G:y.sibling=G,y=G,L=V}if(Q.done)return n(m,L),ze&&Di(m,B),R;if(L===null){for(;!Q.done;B++,Q=b.next())Q=h(m,Q.value,C),Q!==null&&(v=o(Q,v,B),y===null?R=Q:y.sibling=Q,y=Q);return ze&&Di(m,B),R}for(L=i(m,L);!Q.done;B++,Q=b.next())Q=p(L,m,B,Q.value,C),Q!==null&&(e&&Q.alternate!==null&&L.delete(Q.key===null?B:Q.key),v=o(Q,v,B),y===null?R=Q:y.sibling=Q,y=Q);return e&&L.forEach(function(Z){return t(m,Z)}),ze&&Di(m,B),R}function P(m,v,b,C){if(typeof b=="object"&&b!==null&&b.type===tr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ws:e:{for(var R=b.key,y=v;y!==null;){if(y.key===R){if(R=b.type,R===tr){if(y.tag===7){n(m,y.sibling),v=r(y,b.props.children),v.return=m,m=v;break e}}else if(y.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Jn&&Zp(R)===y.type){n(m,y.sibling),v=r(y,b.props),v.ref=Zr(m,y,b),v.return=m,m=v;break e}n(m,y);break}else t(m,y);y=y.sibling}b.type===tr?(v=Li(b.props.children,m.mode,C,b.key),v.return=m,m=v):(C=Sa(b.type,b.key,b.props,null,m.mode,C),C.ref=Zr(m,v,b),C.return=m,m=C)}return s(m);case er:e:{for(y=b.key;v!==null;){if(v.key===y)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(m,v.sibling),v=r(v,b.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else t(m,v);v=v.sibling}v=bu(b,m.mode,C),v.return=m,m=v}return s(m);case Jn:return y=b._init,P(m,v,y(b._payload),C)}if(co(b))return _(m,v,b,C);if(Qr(b))return w(m,v,b,C);na(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,b),v.return=m,m=v):(n(m,v),v=yu(b,m.mode,C),v.return=m,m=v),s(m)):n(m,v)}return P}var Dr=I0(!0),k0=I0(!1),Va=bi(null),Ya=null,ur=null,cf=null;function df(){cf=ur=Ya=null}function hf(e){var t=Va.current;Fe(Va),e._currentValue=t}function pc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){Ya=e,cf=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function tn(e){var t=e._currentValue;if(cf!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Ya===null)throw Error(U(308));ur=e,Ya.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Oi=null;function ff(e){Oi===null?Oi=[e]:Oi.push(e)}function C0(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,ff(t)):(n.next=r.next,r.next=n),t.interleaved=n,Un(e,i)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zn=!1;function pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ci(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,Se&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Un(e,n)}return r=i.interleaved,r===null?(t.next=t,ff(i)):(t.next=r.next,r.next=t),i.interleaved=t,Un(e,n)}function ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Jh(e,n)}}function em(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qa(e,t,n,i){var r=e.updateQueue;Zn=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,d=c=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,w=a;switch(f=t,p=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=He({},h,f);break e;case 2:Zn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);Ui|=s,e.lanes=s,e.memoizedState=h}}function tm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(U(191,r));r.call(i)}}}var ws={},wn=bi(ws),Wo=bi(ws),Vo=bi(ws);function Ni(e){if(e===ws)throw Error(U(174));return e}function mf(e,t){switch(Me(Vo,t),Me(Wo,e),Me(wn,ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qu(t,e)}Fe(wn),Me(wn,t)}function Ir(){Fe(wn),Fe(Wo),Fe(Vo)}function O0(e){Ni(Vo.current);var t=Ni(wn.current),n=Qu(t,e.type);t!==n&&(Me(Wo,e),Me(wn,n))}function gf(e){Wo.current===e&&(Fe(wn),Fe(Wo))}var je=bi(0);function Ga(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var du=[];function yf(){for(var e=0;e<du.length;e++)du[e]._workInProgressVersionPrimary=null;du.length=0}var va=$n.ReactCurrentDispatcher,hu=$n.ReactCurrentBatchConfig,ji=0,Ue=null,et=null,it=null,Ka=!1,_o=!1,Yo=0,Ow=0;function ht(){throw Error(U(321))}function bf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pn(e[n],t[n]))return!1;return!0}function vf(e,t,n,i,r,o){if(ji=o,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,va.current=e===null||e.memoizedState===null?Rw:Lw,e=n(i,r),_o){o=0;do{if(_o=!1,Yo=0,25<=o)throw Error(U(301));o+=1,it=et=null,t.updateQueue=null,va.current=Fw,e=n(i,r)}while(_o)}if(va.current=Xa,t=et!==null&&et.next!==null,ji=0,it=et=Ue=null,Ka=!1,t)throw Error(U(300));return e}function Tf(){var e=Yo!==0;return Yo=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ue.memoizedState=it=e:it=it.next=e,it}function nn(){if(et===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=it===null?Ue.memoizedState:it.next;if(t!==null)it=t,et=e;else{if(e===null)throw Error(U(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},it===null?Ue.memoizedState=it=e:it=it.next=e}return it}function Qo(e,t){return typeof t=="function"?t(e):t}function fu(e){var t=nn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var i=et,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((ji&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,Ue.lanes|=d,Ui|=d}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,pn(i,t.memoizedState)||(wt=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do o=r.lane,Ue.lanes|=o,Ui|=o,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pu(e){var t=nn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=e(o,s.action),s=s.next;while(s!==r);pn(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function N0(){}function P0(e,t){var n=Ue,i=nn(),r=t(),o=!pn(i.memoizedState,r);if(o&&(i.memoizedState=r,wt=!0),i=i.queue,Ef(L0.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Go(9,R0.bind(null,n,i,r,t),void 0,null),ot===null)throw Error(U(349));ji&30||M0(n,t,r)}return r}function M0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function R0(e,t,n,i){t.value=n,t.getSnapshot=i,F0(t)&&B0(e)}function L0(e,t,n){return n(function(){F0(t)&&B0(e)})}function F0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pn(e,n)}catch{return!0}}function B0(e){var t=Un(e,1);t!==null&&fn(t,e,1,-1)}function nm(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:e},t.queue=e,e=e.dispatch=Mw.bind(null,Ue,e),[t.memoizedState,e]}function Go(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function z0(){return nn().memoizedState}function Ta(e,t,n,i){var r=vn();Ue.flags|=e,r.memoizedState=Go(1|t,n,void 0,i===void 0?null:i)}function bl(e,t,n,i){var r=nn();i=i===void 0?null:i;var o=void 0;if(et!==null){var s=et.memoizedState;if(o=s.destroy,i!==null&&bf(i,s.deps)){r.memoizedState=Go(t,n,o,i);return}}Ue.flags|=e,r.memoizedState=Go(1|t,n,o,i)}function im(e,t){return Ta(8390656,8,e,t)}function Ef(e,t){return bl(2048,8,e,t)}function j0(e,t){return bl(4,2,e,t)}function U0(e,t){return bl(4,4,e,t)}function H0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $0(e,t,n){return n=n!=null?n.concat([e]):null,bl(4,4,H0.bind(null,t,e),n)}function _f(){}function q0(e,t){var n=nn();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&bf(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function W0(e,t){var n=nn();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&bf(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function V0(e,t,n){return ji&21?(pn(n,t)||(n=Xy(),Ue.lanes|=n,Ui|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function Nw(e,t){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var i=hu.transition;hu.transition={};try{e(!1),t()}finally{ke=n,hu.transition=i}}function Y0(){return nn().memoizedState}function Pw(e,t,n){var i=hi(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Q0(e))G0(t,n);else if(n=C0(e,t,n,i),n!==null){var r=vt();fn(n,e,i,r),K0(n,t,i)}}function Mw(e,t,n){var i=hi(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q0(e))G0(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,pn(a,s)){var l=t.interleaved;l===null?(r.next=r,ff(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=C0(e,t,r,i),n!==null&&(r=vt(),fn(n,e,i,r),K0(n,t,i))}}function Q0(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function G0(e,t){_o=Ka=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function K0(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Jh(e,n)}}var Xa={readContext:tn,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},Rw={readContext:tn,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:im,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4194308,4,H0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=vn();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Pw.bind(null,Ue,e),[i.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:nm,useDebugValue:_f,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=nm(!1),t=e[0];return e=Nw.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Ue,r=vn();if(ze){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),ot===null)throw Error(U(349));ji&30||M0(i,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,im(L0.bind(null,i,o,e),[e]),i.flags|=2048,Go(9,R0.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=vn(),t=ot.identifierPrefix;if(ze){var n=Fn,i=Ln;n=(i&~(1<<32-hn(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ow++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lw={readContext:tn,useCallback:q0,useContext:tn,useEffect:Ef,useImperativeHandle:$0,useInsertionEffect:j0,useLayoutEffect:U0,useMemo:W0,useReducer:fu,useRef:z0,useState:function(){return fu(Qo)},useDebugValue:_f,useDeferredValue:function(e){var t=nn();return V0(t,et.memoizedState,e)},useTransition:function(){var e=fu(Qo)[0],t=nn().memoizedState;return[e,t]},useMutableSource:N0,useSyncExternalStore:P0,useId:Y0,unstable_isNewReconciler:!1},Fw={readContext:tn,useCallback:q0,useContext:tn,useEffect:Ef,useImperativeHandle:$0,useInsertionEffect:j0,useLayoutEffect:U0,useMemo:W0,useReducer:pu,useRef:z0,useState:function(){return pu(Qo)},useDebugValue:_f,useDeferredValue:function(e){var t=nn();return et===null?t.memoizedState=e:V0(t,et.memoizedState,e)},useTransition:function(){var e=pu(Qo)[0],t=nn().memoizedState;return[e,t]},useMutableSource:N0,useSyncExternalStore:P0,useId:Y0,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=He({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function mc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:He({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vl={isMounted:function(e){return(e=e._reactInternals)?qi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=vt(),r=hi(e),o=Bn(i,r);o.payload=t,n!=null&&(o.callback=n),t=ci(e,o,r),t!==null&&(fn(t,e,r,i),ba(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=vt(),r=hi(e),o=Bn(i,r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ci(e,o,r),t!==null&&(fn(t,e,r,i),ba(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),i=hi(e),r=Bn(n,i);r.tag=2,t!=null&&(r.callback=t),t=ci(e,r,i),t!==null&&(fn(t,e,i,n),ba(t,e,i))}};function rm(e,t,n,i,r,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):t.prototype&&t.prototype.isPureReactComponent?!Uo(n,i)||!Uo(r,o):!0}function X0(e,t,n){var i=!1,r=mi,o=t.contextType;return typeof o=="object"&&o!==null?o=tn(o):(r=It(t)?Bi:mt.current,i=t.contextTypes,o=(i=i!=null)?Sr(e,r):mi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function om(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function gc(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},pf(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=tn(o):(o=It(t)?Bi:mt.current,r.context=Sr(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(mc(e,t,o,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&vl.enqueueReplaceState(r,r.state,null),Qa(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,t){try{var n="",i=t;do n+=dS(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function mu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bw=typeof WeakMap=="function"?WeakMap:Map;function J0(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Za||(Za=!0,Ic=i),yc(e,t)},n}function Z0(e,t,n){n=Bn(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){yc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){yc(e,t),typeof i!="function"&&(di===null?di=new Set([this]):di.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function sm(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Bw;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=Jw.bind(null,e,t,n),t.then(e,e))}function am(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lm(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,ci(n,t,1))),n.lanes|=1),e)}var zw=$n.ReactCurrentOwner,wt=!1;function bt(e,t,n,i){t.child=e===null?k0(t,null,n,i):Dr(t,e.child,n,i)}function um(e,t,n,i,r){n=n.render;var o=t.ref;return yr(t,r),i=vf(e,t,n,i,o,r),n=Tf(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Hn(e,t,r)):(ze&&n&&af(t),t.flags|=1,bt(e,t,i,r),t.child)}function cm(e,t,n,i,r){if(e===null){var o=n.type;return typeof o=="function"&&!Af(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,eb(e,t,o,i,r)):(e=Sa(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(s,i)&&e.ref===t.ref)return Hn(e,t,r)}return t.flags|=1,e=fi(o,i),e.ref=t.ref,e.return=t,t.child=e}function eb(e,t,n,i,r){if(e!==null){var o=e.memoizedProps;if(Uo(o,i)&&e.ref===t.ref)if(wt=!1,t.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Hn(e,t,r)}return bc(e,t,n,i,r)}function tb(e,t,n){var i=t.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(dr,Mt),Mt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(dr,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Me(dr,Mt),Mt|=i}else o!==null?(i=o.baseLanes|n,t.memoizedState=null):i=n,Me(dr,Mt),Mt|=i;return bt(e,t,r,n),t.child}function nb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bc(e,t,n,i,r){var o=It(n)?Bi:mt.current;return o=Sr(t,o),yr(t,r),n=vf(e,t,n,i,o,r),i=Tf(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Hn(e,t,r)):(ze&&i&&af(t),t.flags|=1,bt(e,t,n,r),t.child)}function dm(e,t,n,i,r){if(It(n)){var o=!0;$a(t)}else o=!1;if(yr(t,r),t.stateNode===null)Ea(e,t),X0(t,n,i),gc(t,n,i,r),i=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=It(n)?Bi:mt.current,c=Sr(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&om(t,s,i,c),Zn=!1;var f=t.memoizedState;s.state=f,Qa(t,i,s,r),l=t.memoizedState,a!==i||f!==l||Dt.current||Zn?(typeof d=="function"&&(mc(t,n,d,i),l=t.memoizedState),(a=Zn||rm(t,n,a,i,f,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,A0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:un(t.type,a),s.props=c,h=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=It(n)?Bi:mt.current,l=Sr(t,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||f!==l)&&om(t,s,i,l),Zn=!1,f=t.memoizedState,s.state=f,Qa(t,i,s,r);var _=t.memoizedState;a!==h||f!==_||Dt.current||Zn?(typeof p=="function"&&(mc(t,n,p,i),_=t.memoizedState),(c=Zn||rm(t,n,c,i,f,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=_),s.props=i,s.state=_,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return vc(e,t,n,i,o,r)}function vc(e,t,n,i,r,o){nb(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return r&&Kp(t,n,!1),Hn(e,t,o);i=t.stateNode,zw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=Dr(t,e.child,null,o),t.child=Dr(t,null,a,o)):bt(e,t,a,o),t.memoizedState=i.state,r&&Kp(t,n,!0),t.child}function ib(e){var t=e.stateNode;t.pendingContext?Gp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gp(e,t.context,!1),mf(e,t.containerInfo)}function hm(e,t,n,i,r){return wr(),uf(r),t.flags|=256,bt(e,t,n,i),t.child}var Tc={dehydrated:null,treeContext:null,retryLane:0};function Ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function rb(e,t,n){var i=t.pendingProps,r=je.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Me(je,r&1),e===null)return fc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_l(s,i,0,null),e=Li(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ec(n),t.memoizedState=Tc,e):xf(t,s));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jw(e,t,s,i,a,r,n);if(o){o=i.fallback,s=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=fi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=fi(a,o):(o=Li(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=e.child.memoizedState,s=s===null?Ec(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Tc,i}return o=e.child,e=o.sibling,i=fi(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function xf(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ia(e,t,n,i){return i!==null&&uf(i),Dr(t,e.child,null,n),e=xf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jw(e,t,n,i,r,o,s){if(n)return t.flags&256?(t.flags&=-257,i=mu(Error(U(422))),ia(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=_l({mode:"visible",children:i.children},r,0,null),o=Li(o,r,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Dr(t,e.child,null,s),t.child.memoizedState=Ec(s),t.memoizedState=Tc,o);if(!(t.mode&1))return ia(e,t,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(U(419)),i=mu(o,i,void 0),ia(e,t,s,i)}if(a=(s&e.childLanes)!==0,wt||a){if(i=ot,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Un(e,r),fn(i,e,r,-1))}return Cf(),i=mu(Error(U(421))),ia(e,t,s,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Zw.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,Ft=ui(r.nextSibling),zt=t,ze=!0,dn=null,e!==null&&(Gt[Kt++]=Ln,Gt[Kt++]=Fn,Gt[Kt++]=zi,Ln=e.id,Fn=e.overflow,zi=t),t=xf(t,i.children),t.flags|=4096,t)}function fm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),pc(e.return,t,n)}function gu(e,t,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function ob(e,t,n){var i=t.pendingProps,r=i.revealOrder,o=i.tail;if(bt(e,t,i.children,n),i=je.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fm(e,n,t);else if(e.tag===19)fm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Me(je,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Ga(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),gu(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Ga(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}gu(t,!0,n,null,o);break;case"together":gu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ui|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uw(e,t,n){switch(t.tag){case 3:ib(t),wr();break;case 5:O0(t);break;case 1:It(t.type)&&$a(t);break;case 4:mf(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;Me(Va,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Me(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?rb(e,t,n):(Me(je,je.current&1),e=Hn(e,t,n),e!==null?e.sibling:null);Me(je,je.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return ob(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Me(je,je.current),i)break;return null;case 22:case 23:return t.lanes=0,tb(e,t,n)}return Hn(e,t,n)}var sb,_c,ab,lb;sb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_c=function(){};ab=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Ni(wn.current);var o=null;switch(n){case"input":r=qu(e,r),i=qu(e,i),o=[];break;case"select":r=He({},r,{value:void 0}),i=He({},i,{value:void 0}),o=[];break;case"textarea":r=Yu(e,r),i=Yu(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ua)}Gu(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Le("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};lb=function(e,t,n,i){n!==i&&(t.flags|=4)};function eo(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Hw(e,t,n){var i=t.pendingProps;switch(lf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return It(t.type)&&Ha(),ft(t),null;case 3:return i=t.stateNode,Ir(),Fe(Dt),Fe(mt),yf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dn!==null&&(Ac(dn),dn=null))),_c(e,t),ft(t),null;case 5:gf(t);var r=Ni(Vo.current);if(n=t.type,e!==null&&t.stateNode!=null)ab(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(U(166));return ft(t),null}if(e=Ni(wn.current),ta(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[_n]=t,i[qo]=o,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",i),Le("close",i);break;case"iframe":case"object":case"embed":Le("load",i);break;case"video":case"audio":for(r=0;r<fo.length;r++)Le(fo[r],i);break;case"source":Le("error",i);break;case"img":case"image":case"link":Le("error",i),Le("load",i);break;case"details":Le("toggle",i);break;case"input":_p(i,o),Le("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Le("invalid",i);break;case"textarea":Sp(i,o),Le("invalid",i)}Gu(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ea(i.textContent,a,e),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ea(i.textContent,a,e),r=["children",""+a]):Mo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Le("scroll",i)}switch(n){case"input":Vs(i),xp(i,o,!0);break;case"textarea":Vs(i),wp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ua)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ly(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(n,{is:i.is}):(e=s.createElement(n),n==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,n),e[_n]=t,e[qo]=i,sb(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ku(n,i),n){case"dialog":Le("cancel",e),Le("close",e),r=i;break;case"iframe":case"object":case"embed":Le("load",e),r=i;break;case"video":case"audio":for(r=0;r<fo.length;r++)Le(fo[r],e);r=i;break;case"source":Le("error",e),r=i;break;case"img":case"image":case"link":Le("error",e),Le("load",e),r=i;break;case"details":Le("toggle",e),r=i;break;case"input":_p(e,i),r=qu(e,i),Le("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=He({},i,{value:void 0}),Le("invalid",e);break;case"textarea":Sp(e,i),r=Yu(e,i),Le("invalid",e);break;default:r=i}Gu(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?zy(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fy(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ro(e,l):typeof l=="number"&&Ro(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Le("scroll",e):l!=null&&Vh(e,o,l,s))}switch(n){case"input":Vs(e),xp(e,i,!1);break;case"textarea":Vs(e),wp(e);break;case"option":i.value!=null&&e.setAttribute("value",""+pi(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?fr(e,!!i.multiple,o,!1):i.defaultValue!=null&&fr(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)lb(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(U(166));if(n=Ni(Vo.current),Ni(wn.current),ta(t)){if(i=t.stateNode,n=t.memoizedProps,i[_n]=t,(o=i.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:ea(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ea(i.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_n]=t,t.stateNode=i}return ft(t),null;case 13:if(Fe(je),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&Ft!==null&&t.mode&1&&!(t.flags&128))D0(),wr(),t.flags|=98560,o=!1;else if(o=ta(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[_n]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ft(t),o=!1}else dn!==null&&(Ac(dn),dn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?tt===0&&(tt=3):Cf())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return Ir(),_c(e,t),e===null&&Ho(t.stateNode.containerInfo),ft(t),null;case 10:return hf(t.type._context),ft(t),null;case 17:return It(t.type)&&Ha(),ft(t),null;case 19:if(Fe(je),o=t.memoizedState,o===null)return ft(t),null;if(i=(t.flags&128)!==0,s=o.rendering,s===null)if(i)eo(o,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ga(e),s!==null){for(t.flags|=128,eo(o,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)o=n,e=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(je,je.current&1|2),t.child}e=e.sibling}o.tail!==null&&We()>Cr&&(t.flags|=128,i=!0,eo(o,!1),t.lanes=4194304)}else{if(!i)if(e=Ga(s),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ze)return ft(t),null}else 2*We()-o.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,i=!0,eo(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=We(),t.sibling=null,n=je.current,Me(je,i?n&1|2:n&1),t):(ft(t),null);case 22:case 23:return kf(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Mt&1073741824&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function $w(e,t){switch(lf(t),t.tag){case 1:return It(t.type)&&Ha(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),Fe(Dt),Fe(mt),yf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gf(t),null;case 13:if(Fe(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(je),null;case 4:return Ir(),null;case 10:return hf(t.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var ra=!1,pt=!1,qw=typeof WeakSet=="function"?WeakSet:Set,J=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){qe(e,t,i)}else n.current=null}function xc(e,t,n){try{n()}catch(i){qe(e,t,i)}}var pm=!1;function Ww(e,t){if(sc=Ba,e=f0(),sf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++c===r&&(a=s),f===o&&++d===i&&(l=s),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ac={focusedElem:e,selectionRange:n},Ba=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,P=_.memoizedState,m=t.stateNode,v=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:un(t.type,w),P);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(C){qe(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return _=pm,pm=!1,_}function xo(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&xc(t,n,o)}r=r.next}while(r!==i)}}function Tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Sc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ub(e){var t=e.alternate;t!==null&&(e.alternate=null,ub(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_n],delete t[qo],delete t[cc],delete t[Iw],delete t[kw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cb(e){return e.tag===5||e.tag===3||e.tag===4}function mm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ua));else if(i!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}function Dc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}var st=null,cn=!1;function Yn(e,t,n){for(n=n.child;n!==null;)db(e,t,n),n=n.sibling}function db(e,t,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:pt||cr(n,t);case 6:var i=st,r=cn;st=null,Yn(e,t,n),st=i,cn=r,st!==null&&(cn?(e=st,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(cn?(e=st,n=n.stateNode,e.nodeType===8?uu(e.parentNode,n):e.nodeType===1&&uu(e,n),zo(e)):uu(st,n.stateNode));break;case 4:i=st,r=cn,st=n.stateNode.containerInfo,cn=!0,Yn(e,t,n),st=i,cn=r;break;case 0:case 11:case 14:case 15:if(!pt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&xc(n,t,s),r=r.next}while(r!==i)}Yn(e,t,n);break;case 1:if(!pt&&(cr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){qe(n,t,a)}Yn(e,t,n);break;case 21:Yn(e,t,n);break;case 22:n.mode&1?(pt=(i=pt)||n.memoizedState!==null,Yn(e,t,n),pt=i):Yn(e,t,n);break;default:Yn(e,t,n)}}function gm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qw),t.forEach(function(i){var r=eD.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ln(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,cn=!1;break e;case 3:st=a.stateNode.containerInfo,cn=!0;break e;case 4:st=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(st===null)throw Error(U(160));db(o,s,r),st=null,cn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){qe(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hb(t,e),t=t.sibling}function hb(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(t,e),bn(e),i&4){try{xo(3,e,e.return),Tl(3,e)}catch(w){qe(e,e.return,w)}try{xo(5,e,e.return)}catch(w){qe(e,e.return,w)}}break;case 1:ln(t,e),bn(e),i&512&&n!==null&&cr(n,n.return);break;case 5:if(ln(t,e),bn(e),i&512&&n!==null&&cr(n,n.return),e.flags&32){var r=e.stateNode;try{Ro(r,"")}catch(w){qe(e,e.return,w)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&My(r,o),Ku(a,s);var c=Ku(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?zy(r,h):d==="dangerouslySetInnerHTML"?Fy(r,h):d==="children"?Ro(r,h):Vh(r,d,h,c)}switch(a){case"input":Wu(r,o);break;case"textarea":Ry(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?fr(r,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?fr(r,!!o.multiple,o.defaultValue,!0):fr(r,!!o.multiple,o.multiple?[]:"",!1))}r[qo]=o}catch(w){qe(e,e.return,w)}}break;case 6:if(ln(t,e),bn(e),i&4){if(e.stateNode===null)throw Error(U(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(w){qe(e,e.return,w)}}break;case 3:if(ln(t,e),bn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(t.containerInfo)}catch(w){qe(e,e.return,w)}break;case 4:ln(t,e),bn(e);break;case 13:ln(t,e),bn(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Df=We())),i&4&&gm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pt=(c=pt)||d,ln(t,e),pt=c):ln(t,e),bn(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(J=e,d=e.child;d!==null;){for(h=J=d;J!==null;){switch(f=J,p=f.child,f.tag){case 0:case 11:case 14:case 15:xo(4,f,f.return);break;case 1:cr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{t=i,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(w){qe(i,n,w)}}break;case 5:cr(f,f.return);break;case 22:if(f.memoizedState!==null){bm(h);continue}}p!==null?(p.return=f,J=p):bm(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=By("display",s))}catch(w){qe(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){qe(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ln(t,e),bn(e),i&4&&gm(e);break;case 21:break;default:ln(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cb(n)){var i=n;break e}n=n.return}throw Error(U(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ro(r,""),i.flags&=-33);var o=mm(e);Dc(e,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=mm(e);wc(e,a,s);break;default:throw Error(U(161))}}catch(l){qe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vw(e,t,n){J=e,fb(e)}function fb(e,t,n){for(var i=(e.mode&1)!==0;J!==null;){var r=J,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ra;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||pt;a=ra;var c=pt;if(ra=s,(pt=l)&&!c)for(J=r;J!==null;)s=J,l=s.child,s.tag===22&&s.memoizedState!==null?vm(r):l!==null?(l.return=s,J=l):vm(r);for(;o!==null;)J=o,fb(o),o=o.sibling;J=r,ra=a,pt=c}ym(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,J=o):ym(e)}}function ym(e){for(;J!==null;){var t=J;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||Tl(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!pt)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&tm(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tm(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&zo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}pt||t.flags&512&&Sc(t)}catch(f){qe(t,t.return,f)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function bm(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function vm(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tl(4,t)}catch(l){qe(t,n,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(l){qe(t,r,l)}}var o=t.return;try{Sc(t)}catch(l){qe(t,o,l)}break;case 5:var s=t.return;try{Sc(t)}catch(l){qe(t,s,l)}}}catch(l){qe(t,t.return,l)}if(t===e){J=null;break}var a=t.sibling;if(a!==null){a.return=t.return,J=a;break}J=t.return}}var Yw=Math.ceil,Ja=$n.ReactCurrentDispatcher,Sf=$n.ReactCurrentOwner,en=$n.ReactCurrentBatchConfig,Se=0,ot=null,Xe=null,at=0,Mt=0,dr=bi(0),tt=0,Ko=null,Ui=0,El=0,wf=0,So=null,St=null,Df=0,Cr=1/0,Pn=null,Za=!1,Ic=null,di=null,oa=!1,ri=null,el=0,wo=0,kc=null,_a=-1,xa=0;function vt(){return Se&6?We():_a!==-1?_a:_a=We()}function hi(e){return e.mode&1?Se&2&&at!==0?at&-at:Aw.transition!==null?(xa===0&&(xa=Xy()),xa):(e=ke,e!==0||(e=window.event,e=e===void 0?16:r0(e.type)),e):1}function fn(e,t,n,i){if(50<wo)throw wo=0,kc=null,Error(U(185));_s(e,n,i),(!(Se&2)||e!==ot)&&(e===ot&&(!(Se&2)&&(El|=n),tt===4&&ti(e,at)),kt(e,i),n===1&&Se===0&&!(t.mode&1)&&(Cr=We()+500,yl&&vi()))}function kt(e,t){var n=e.callbackNode;AS(e,t);var i=Fa(e,e===ot?at:0);if(i===0)n!==null&&kp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&kp(n),t===1)e.tag===0?Cw(Tm.bind(null,e)):x0(Tm.bind(null,e)),ww(function(){!(Se&6)&&vi()}),n=null;else{switch(Jy(i)){case 1:n=Xh;break;case 4:n=Gy;break;case 16:n=La;break;case 536870912:n=Ky;break;default:n=La}n=Eb(n,pb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pb(e,t){if(_a=-1,xa=0,Se&6)throw Error(U(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var i=Fa(e,e===ot?at:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=tl(e,i);else{t=i;var r=Se;Se|=2;var o=gb();(ot!==e||at!==t)&&(Pn=null,Cr=We()+500,Ri(e,t));do try{Kw();break}catch(a){mb(e,a)}while(!0);df(),Ja.current=o,Se=r,Xe!==null?t=0:(ot=null,at=0,t=tt)}if(t!==0){if(t===2&&(r=tc(e),r!==0&&(i=r,t=Cc(e,r))),t===1)throw n=Ko,Ri(e,0),ti(e,i),kt(e,We()),n;if(t===6)ti(e,i);else{if(r=e.current.alternate,!(i&30)&&!Qw(r)&&(t=tl(e,i),t===2&&(o=tc(e),o!==0&&(i=o,t=Cc(e,o))),t===1))throw n=Ko,Ri(e,0),ti(e,i),kt(e,We()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(U(345));case 2:Ii(e,St,Pn);break;case 3:if(ti(e,i),(i&130023424)===i&&(t=Df+500-We(),10<t)){if(Fa(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){vt(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=uc(Ii.bind(null,e,St,Pn),t);break}Ii(e,St,Pn);break;case 4:if(ti(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var s=31-hn(i);o=1<<s,s=t[s],s>r&&(r=s),i&=~o}if(i=r,i=We()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yw(i/1960))-i,10<i){e.timeoutHandle=uc(Ii.bind(null,e,St,Pn),i);break}Ii(e,St,Pn);break;case 5:Ii(e,St,Pn);break;default:throw Error(U(329))}}}return kt(e,We()),e.callbackNode===n?pb.bind(null,e):null}function Cc(e,t){var n=So;return e.current.memoizedState.isDehydrated&&(Ri(e,t).flags|=256),e=tl(e,t),e!==2&&(t=St,St=n,t!==null&&Ac(t)),e}function Ac(e){St===null?St=e:St.push.apply(St,e)}function Qw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!pn(o(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ti(e,t){for(t&=~wf,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),i=1<<n;e[n]=-1,t&=~i}}function Tm(e){if(Se&6)throw Error(U(327));br();var t=Fa(e,0);if(!(t&1))return kt(e,We()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var i=tc(e);i!==0&&(t=i,n=Cc(e,i))}if(n===1)throw n=Ko,Ri(e,0),ti(e,t),kt(e,We()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ii(e,St,Pn),kt(e,We()),null}function If(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(Cr=We()+500,yl&&vi())}}function Hi(e){ri!==null&&ri.tag===0&&!(Se&6)&&br();var t=Se;Se|=1;var n=en.transition,i=ke;try{if(en.transition=null,ke=1,e)return e()}finally{ke=i,en.transition=n,Se=t,!(Se&6)&&vi()}}function kf(){Mt=dr.current,Fe(dr)}function Ri(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sw(n)),Xe!==null)for(n=Xe.return;n!==null;){var i=n;switch(lf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ha();break;case 3:Ir(),Fe(Dt),Fe(mt),yf();break;case 5:gf(i);break;case 4:Ir();break;case 13:Fe(je);break;case 19:Fe(je);break;case 10:hf(i.type._context);break;case 22:case 23:kf()}n=n.return}if(ot=e,Xe=e=fi(e.current,null),at=Mt=t,tt=0,Ko=null,wf=El=Ui=0,St=So=null,Oi!==null){for(t=0;t<Oi.length;t++)if(n=Oi[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Oi=null}return e}function mb(e,t){do{var n=Xe;try{if(df(),va.current=Xa,Ka){for(var i=Ue.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ka=!1}if(ji=0,it=et=Ue=null,_o=!1,Yo=0,Sf.current=null,n===null||n.return===null){tt=1,Ko=t,Xe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=at,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=am(s);if(p!==null){p.flags&=-257,lm(p,s,a,o,t),p.mode&1&&sm(o,c,t),t=p,l=c;var _=t.updateQueue;if(_===null){var w=new Set;w.add(l),t.updateQueue=w}else _.add(l);break e}else{if(!(t&1)){sm(o,c,t),Cf();break e}l=Error(U(426))}}else if(ze&&a.mode&1){var P=am(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),lm(P,s,a,o,t),uf(kr(l,a));break e}}o=l=kr(l,a),tt!==4&&(tt=2),So===null?So=[o]:So.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=J0(o,l,t);em(o,m);break e;case 1:a=l;var v=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(di===null||!di.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Z0(o,a,t);em(o,C);break e}}o=o.return}while(o!==null)}bb(n)}catch(R){t=R,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function gb(){var e=Ja.current;return Ja.current=Xa,e===null?Xa:e}function Cf(){(tt===0||tt===3||tt===2)&&(tt=4),ot===null||!(Ui&268435455)&&!(El&268435455)||ti(ot,at)}function tl(e,t){var n=Se;Se|=2;var i=gb();(ot!==e||at!==t)&&(Pn=null,Ri(e,t));do try{Gw();break}catch(r){mb(e,r)}while(!0);if(df(),Se=n,Ja.current=i,Xe!==null)throw Error(U(261));return ot=null,at=0,tt}function Gw(){for(;Xe!==null;)yb(Xe)}function Kw(){for(;Xe!==null&&!ES();)yb(Xe)}function yb(e){var t=Tb(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?bb(e):Xe=t,Sf.current=null}function bb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$w(n,t),n!==null){n.flags&=32767,Xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Xe=null;return}}else if(n=Hw(n,t,Mt),n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);tt===0&&(tt=5)}function Ii(e,t,n){var i=ke,r=en.transition;try{en.transition=null,ke=1,Xw(e,t,n,i)}finally{en.transition=r,ke=i}return null}function Xw(e,t,n,i){do br();while(ri!==null);if(Se&6)throw Error(U(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(OS(e,o),e===ot&&(Xe=ot=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oa||(oa=!0,Eb(La,function(){return br(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=en.transition,en.transition=null;var s=ke;ke=1;var a=Se;Se|=4,Sf.current=null,Ww(e,n),hb(n,e),yw(ac),Ba=!!sc,ac=sc=null,e.current=n,Vw(n),_S(),Se=a,ke=s,en.transition=o}else e.current=n;if(oa&&(oa=!1,ri=e,el=r),o=e.pendingLanes,o===0&&(di=null),wS(n.stateNode),kt(e,We()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Za)throw Za=!1,e=Ic,Ic=null,e;return el&1&&e.tag!==0&&br(),o=e.pendingLanes,o&1?e===kc?wo++:(wo=0,kc=e):wo=0,vi(),null}function br(){if(ri!==null){var e=Jy(el),t=en.transition,n=ke;try{if(en.transition=null,ke=16>e?16:e,ri===null)var i=!1;else{if(e=ri,ri=null,el=0,Se&6)throw Error(U(331));var r=Se;for(Se|=4,J=e.current;J!==null;){var o=J,s=o.child;if(J.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:xo(8,d,o)}var h=d.child;if(h!==null)h.return=d,J=h;else for(;J!==null;){d=J;var f=d.sibling,p=d.return;if(ub(d),d===c){J=null;break}if(f!==null){f.return=p,J=f;break}J=p}}}var _=o.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}J=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,J=s;else e:for(;J!==null;){if(o=J,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xo(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,J=m;break e}J=o.return}}var v=e.current;for(J=v;J!==null;){s=J;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,J=b;else e:for(s=v;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tl(9,a)}}catch(R){qe(a,a.return,R)}if(a===s){J=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,J=C;break e}J=a.return}}if(Se=r,vi(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(hl,e)}catch{}i=!0}return i}finally{ke=n,en.transition=t}}return!1}function Em(e,t,n){t=kr(n,t),t=J0(e,t,1),e=ci(e,t,1),t=vt(),e!==null&&(_s(e,1,t),kt(e,t))}function qe(e,t,n){if(e.tag===3)Em(e,e,n);else for(;t!==null;){if(t.tag===3){Em(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(di===null||!di.has(i))){e=kr(n,e),e=Z0(t,e,1),t=ci(t,e,1),e=vt(),t!==null&&(_s(t,1,e),kt(t,e));break}}t=t.return}}function Jw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(at&n)===n&&(tt===4||tt===3&&(at&130023424)===at&&500>We()-Df?Ri(e,0):wf|=n),kt(e,t)}function vb(e,t){t===0&&(e.mode&1?(t=Gs,Gs<<=1,!(Gs&130023424)&&(Gs=4194304)):t=1);var n=vt();e=Un(e,t),e!==null&&(_s(e,t,n),kt(e,n))}function Zw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vb(e,n)}function eD(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(U(314))}i!==null&&i.delete(t),vb(e,n)}var Tb;Tb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,Uw(e,t,n);wt=!!(e.flags&131072)}else wt=!1,ze&&t.flags&1048576&&S0(t,Wa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ea(e,t),e=t.pendingProps;var r=Sr(t,mt.current);yr(t,n),r=vf(null,t,i,e,r,n);var o=Tf();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,It(i)?(o=!0,$a(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pf(t),r.updater=vl,t.stateNode=r,r._reactInternals=t,gc(t,i,e,n),t=vc(null,t,i,!0,o,n)):(t.tag=0,ze&&o&&af(t),bt(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Ea(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=nD(i),e=un(i,e),r){case 0:t=bc(null,t,i,e,n);break e;case 1:t=dm(null,t,i,e,n);break e;case 11:t=um(null,t,i,e,n);break e;case 14:t=cm(null,t,i,un(i.type,e),n);break e}throw Error(U(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:un(i,r),bc(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:un(i,r),dm(e,t,i,r,n);case 3:e:{if(ib(t),e===null)throw Error(U(387));i=t.pendingProps,o=t.memoizedState,r=o.element,A0(e,t),Qa(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=kr(Error(U(423)),t),t=hm(e,t,i,n,r);break e}else if(i!==r){r=kr(Error(U(424)),t),t=hm(e,t,i,n,r);break e}else for(Ft=ui(t.stateNode.containerInfo.firstChild),zt=t,ze=!0,dn=null,n=k0(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),i===r){t=Hn(e,t,n);break e}bt(e,t,i,n)}t=t.child}return t;case 5:return O0(t),e===null&&fc(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,s=r.children,lc(i,r)?s=null:o!==null&&lc(i,o)&&(t.flags|=32),nb(e,t),bt(e,t,s,n),t.child;case 6:return e===null&&fc(t),null;case 13:return rb(e,t,n);case 4:return mf(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Dr(t,null,i,n):bt(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:un(i,r),um(e,t,i,r,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,s=r.value,Me(Va,i._currentValue),i._currentValue=s,o!==null)if(pn(o.value,s)){if(o.children===r.children&&!Dt.current){t=Hn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Bn(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pc(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(U(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}bt(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,yr(t,n),r=tn(r),i=i(r),t.flags|=1,bt(e,t,i,n),t.child;case 14:return i=t.type,r=un(i,t.pendingProps),r=un(i.type,r),cm(e,t,i,r,n);case 15:return eb(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:un(i,r),Ea(e,t),t.tag=1,It(i)?(e=!0,$a(t)):e=!1,yr(t,n),X0(t,i,r),gc(t,i,r,n),vc(null,t,i,!0,e,n);case 19:return ob(e,t,n);case 22:return tb(e,t,n)}throw Error(U(156,t.tag))};function Eb(e,t){return Qy(e,t)}function tD(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,n,i){return new tD(e,t,n,i)}function Af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nD(e){if(typeof e=="function")return Af(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qh)return 11;if(e===Gh)return 14}return 2}function fi(e,t){var n=e.alternate;return n===null?(n=Zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sa(e,t,n,i,r,o){var s=2;if(i=e,typeof e=="function")Af(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case tr:return Li(n.children,r,o,t);case Yh:s=8,r|=8;break;case ju:return e=Zt(12,n,t,r|2),e.elementType=ju,e.lanes=o,e;case Uu:return e=Zt(13,n,t,r),e.elementType=Uu,e.lanes=o,e;case Hu:return e=Zt(19,n,t,r),e.elementType=Hu,e.lanes=o,e;case Oy:return _l(n,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cy:s=10;break e;case Ay:s=9;break e;case Qh:s=11;break e;case Gh:s=14;break e;case Jn:s=16,i=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Zt(s,n,t,r),t.elementType=e,t.type=i,t.lanes=o,t}function Li(e,t,n,i){return e=Zt(7,e,i,t),e.lanes=n,e}function _l(e,t,n,i){return e=Zt(22,e,i,t),e.elementType=Oy,e.lanes=n,e.stateNode={isHidden:!1},e}function yu(e,t,n){return e=Zt(6,e,null,t),e.lanes=n,e}function bu(e,t,n){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iD(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Of(e,t,n,i,r,o,s,a,l){return e=new iD(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Zt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(o),e}function rD(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function _b(e){if(!e)return mi;e=e._reactInternals;e:{if(qi(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(It(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(It(n))return _0(e,n,t)}return t}function xb(e,t,n,i,r,o,s,a,l){return e=Of(n,i,!0,e,r,o,s,a,l),e.context=_b(null),n=e.current,i=vt(),r=hi(n),o=Bn(i,r),o.callback=t??null,ci(n,o,r),e.current.lanes=r,_s(e,r,i),kt(e,i),e}function xl(e,t,n,i){var r=t.current,o=vt(),s=hi(r);return n=_b(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(o,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=ci(r,t,s),e!==null&&(fn(e,r,s,o),ba(e,r,s)),s}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nf(e,t){_m(e,t),(e=e.alternate)&&_m(e,t)}function oD(){return null}var Sb=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pf(e){this._internalRoot=e}Sl.prototype.render=Pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));xl(e,t,null,null)};Sl.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hi(function(){xl(null,e,null,null)}),t[jn]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=t0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ei.length&&t!==0&&t<ei[n].priority;n++);ei.splice(n,0,e),n===0&&i0(e)}};function Mf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xm(){}function sD(e,t,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=nl(s);o.call(c)}}var s=xb(t,i,e,0,null,!1,!1,"",xm);return e._reactRootContainer=s,e[jn]=s.current,Ho(e.nodeType===8?e.parentNode:e),Hi(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nl(l);a.call(c)}}var l=Of(e,0,!1,null,null,!1,!1,"",xm);return e._reactRootContainer=l,e[jn]=l.current,Ho(e.nodeType===8?e.parentNode:e),Hi(function(){xl(t,l,n,i)}),l}function Dl(e,t,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=nl(s);a.call(l)}}xl(t,s,e,r)}else s=sD(n,t,e,r,i);return nl(s)}Zy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ho(t.pendingLanes);n!==0&&(Jh(t,n|1),kt(t,We()),!(Se&6)&&(Cr=We()+500,vi()))}break;case 13:Hi(function(){var i=Un(e,1);if(i!==null){var r=vt();fn(i,e,1,r)}}),Nf(e,1)}};Zh=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=vt();fn(t,e,134217728,n)}Nf(e,134217728)}};e0=function(e){if(e.tag===13){var t=hi(e),n=Un(e,t);if(n!==null){var i=vt();fn(n,e,t,i)}Nf(e,t)}};t0=function(){return ke};n0=function(e,t){var n=ke;try{return ke=e,t()}finally{ke=n}};Ju=function(e,t,n){switch(t){case"input":if(Wu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=gl(i);if(!r)throw Error(U(90));Py(i),Wu(i,r)}}}break;case"textarea":Ry(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};Hy=If;$y=Hi;var aD={usingClientEntryPoint:!1,Events:[Ss,or,gl,jy,Uy,If]},to={findFiberByHostInstance:Ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lD={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vy(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||oD,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{hl=sa.inject(lD),Sn=sa}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aD;Ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(t))throw Error(U(200));return rD(e,t,null,n)};Ut.createRoot=function(e,t){if(!Mf(e))throw Error(U(299));var n=!1,i="",r=Sb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Of(e,1,!1,null,null,n,!1,i,r),e[jn]=t.current,Ho(e.nodeType===8?e.parentNode:e),new Pf(t)};Ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Vy(t),e=e===null?null:e.stateNode,e};Ut.flushSync=function(e){return Hi(e)};Ut.hydrate=function(e,t,n){if(!wl(t))throw Error(U(200));return Dl(null,e,t,!0,n)};Ut.hydrateRoot=function(e,t,n){if(!Mf(e))throw Error(U(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Sb;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=xb(t,null,e,1,n??null,r,!1,o,s),e[jn]=t.current,Ho(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Sl(t)};Ut.render=function(e,t,n){if(!wl(t))throw Error(U(200));return Dl(null,e,t,!1,n)};Ut.unmountComponentAtNode=function(e){if(!wl(e))throw Error(U(40));return e._reactRootContainer?(Hi(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1};Ut.unstable_batchedUpdates=If;Ut.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!wl(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Dl(e,t,n,!1,i)};Ut.version="18.3.1-next-f1338f8080-20240426";function wb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wb)}catch(e){console.error(e)}}wb(),wy.exports=Ut;var Db=wy.exports,Sm=Db;Bu.createRoot=Sm.createRoot,Bu.hydrateRoot=Sm.hydrateRoot;var Rf={};Object.defineProperty(Rf,"__esModule",{value:!0});Rf.parse=mD;Rf.serialize=gD;const uD=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,cD=/^[\u0021-\u003A\u003C-\u007E]*$/,dD=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,hD=/^[\u0020-\u003A\u003D-\u007E]*$/,fD=Object.prototype.toString,pD=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function mD(e,t){const n=new pD,i=e.length;if(i<2)return n;const r=(t==null?void 0:t.decode)||yD;let o=0;do{const s=e.indexOf("=",o);if(s===-1)break;const a=e.indexOf(";",o),l=a===-1?i:a;if(s>l){o=e.lastIndexOf(";",s-1)+1;continue}const c=wm(e,o,s),d=Dm(e,s,c),h=e.slice(c,d);if(n[h]===void 0){let f=wm(e,s+1,l),p=Dm(e,l,f);const _=r(e.slice(f,p));n[h]=_}o=l+1}while(o<i);return n}function wm(e,t,n){do{const i=e.charCodeAt(t);if(i!==32&&i!==9)return t}while(++t<n);return n}function Dm(e,t,n){for(;t>n;){const i=e.charCodeAt(--t);if(i!==32&&i!==9)return t+1}return n}function gD(e,t,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!uD.test(e))throw new TypeError(`argument name is invalid: ${e}`);const r=i(t);if(!cD.test(r))throw new TypeError(`argument val is invalid: ${t}`);let o=e+"="+r;if(!n)return o;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);o+="; Max-Age="+n.maxAge}if(n.domain){if(!dD.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);o+="; Domain="+n.domain}if(n.path){if(!hD.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);o+="; Path="+n.path}if(n.expires){if(!bD(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);o+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.partitioned&&(o+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"none":o+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return o}function yD(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function bD(e){return fD.call(e)==="[object Date]"}/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ib=e=>{throw TypeError(e)},vD=(e,t,n)=>t.has(e)||Ib("Cannot "+n),vu=(e,t,n)=>(vD(e,t,"read from private field"),n?n.call(e):t.get(e)),TD=(e,t,n)=>t.has(e)?Ib("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Im="popstate";function ED(e={}){function t(i,r){let{pathname:o,search:s,hash:a}=i.location;return Xo("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:gi(r)}return xD(t,n,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Je(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _D(){return Math.random().toString(36).substring(2,10)}function km(e,t){return{usr:e.state,key:e.key,idx:t}}function Xo(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ti(t):t,state:n,key:t&&t.key||i||_D()}}function gi({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ti(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function xD(e,t,n,i={}){let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a="POP",l=null,c=d();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function d(){return(s.state||{idx:null}).idx}function h(){a="POP";let P=d(),m=P==null?null:P-c;c=P,l&&l({action:a,location:w.location,delta:m})}function f(P,m){a="PUSH";let v=Xo(w.location,P,m);c=d()+1;let b=km(v,c),C=w.createHref(v);try{s.pushState(b,"",C)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(C)}o&&l&&l({action:a,location:w.location,delta:1})}function p(P,m){a="REPLACE";let v=Xo(w.location,P,m);c=d();let b=km(v,c),C=w.createHref(v);s.replaceState(b,"",C),o&&l&&l({action:a,location:w.location,delta:0})}function _(P){return kb(P)}let w={get action(){return a},get location(){return e(r,s)},listen(P){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Im,h),l=P,()=>{r.removeEventListener(Im,h),l=null}},createHref(P){return t(r,P)},createURL:_,encodeLocation(P){let m=_(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(P){return s.go(P)}};return w}function kb(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:gi(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var po,Cm=class{constructor(e){if(TD(this,po,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(vu(this,po).has(e))return vu(this,po).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){vu(this,po).set(e,t)}};po=new WeakMap;var SD=new Set(["lazy","caseSensitive","path","id","index","children"]);function wD(e){return SD.has(e)}var DD=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function ID(e){return DD.has(e)}function kD(e){return e.index===!0}function il(e,t,n=[],i={}){return e.map((r,o)=>{let s=[...n,String(o)],a=typeof r.id=="string"?r.id:s.join("-");if(Ee(r.index!==!0||!r.children,"Cannot specify children on an index route"),Ee(!i[a],`Found a route id collision on id "${a}".  Route id's must be globally unique within Data Router usages`),kD(r)){let l={...r,...t(r),id:a};return i[a]=l,l}else{let l={...r,...t(r),id:a,children:void 0};return i[a]=l,r.children&&(l.children=il(r.children,t,s,i)),l}})}function ni(e,t,n="/"){return wa(e,t,n,!1)}function wa(e,t,n,i){let r=typeof t=="string"?Ti(t):t,o=rn(r.pathname||"/",n);if(o==null)return null;let s=Cb(e);AD(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=UD(o);a=zD(s[l],c,i)}return a}function CD(e,t){let{route:n,pathname:i,params:r}=e;return{id:n.id,pathname:i,params:r,data:t[n.id],handle:n.handle}}function Cb(e,t=[],n=[],i=""){let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let c=Dn([i,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Ee(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),Cb(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:FD(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of Ab(o.path))r(o,s,l)}),t}function Ab(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=Ab(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function AD(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:BD(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var OD=/^:[\w-]+$/,ND=3,PD=2,MD=1,RD=10,LD=-2,Am=e=>e==="*";function FD(e,t){let n=e.split("/"),i=n.length;return n.some(Am)&&(i+=LD),t&&(i+=PD),n.filter(r=>!Am(r)).reduce((r,o)=>r+(OD.test(o)?ND:o===""?MD:RD),i)}function BD(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function zD(e,t,n=!1){let{routesMeta:i}=e,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=o==="/"?t:t.slice(o.length)||"/",h=rl({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=rl({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(r,h.params),s.push({params:r,pathname:Dn([o,h.pathname]),pathnameBase:qD(Dn([o,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(o=Dn([o,h.pathnameBase]))}return s}function rl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=jD(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,{paramName:d,isOptional:h},f)=>{if(d==="*"){let _=a[f]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const p=a[f];return h&&!p?c[d]=void 0:c[d]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function jD(e,t=!1,n=!0){Je(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function UD(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Je(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function rn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function HD(e,t="/"){let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?Ti(e):e;return{pathname:n?n.startsWith("/")?n:$D(n,t):t,search:WD(i),hash:VD(r)}}function $D(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Tu(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ob(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lf(e){let t=Ob(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function Ff(e,t,n,i=!1){let r;typeof e=="string"?r=Ti(e):(r={...e},Ee(!r.pathname||!r.pathname.includes("?"),Tu("?","pathname","search",r)),Ee(!r.pathname||!r.pathname.includes("#"),Tu("#","pathname","hash",r)),Ee(!r.search||!r.search.includes("#"),Tu("#","search","hash",r)));let o=e===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!i&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}a=h>=0?t[h]:"/"}let l=HD(r,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}var Dn=e=>e.join("/").replace(/\/\/+/g,"/"),qD=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),WD=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,VD=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ol=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Jo(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Nb=["POST","PUT","PATCH","DELETE"],YD=new Set(Nb),QD=["GET",...Nb],GD=new Set(QD),KD=new Set([301,302,303,307,308]),XD=new Set([307,308]),Eu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},JD={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},no={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Bf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ZD=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Pb="remix-router-transitions",Mb=Symbol("ResetLoaderData");function eI(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Ee(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],r=e.mapRouteProperties||ZD,o={},s=il(e.routes,r,void 0,o),a,l=e.basename||"/",c=e.dataStrategy||oI,d={unstable_middleware:!1,...e.future},h=null,f=new Set,p=null,_=null,w=null,P=e.hydrationData!=null,m=ni(s,e.history.location,l),v=!1,b=null,C;if(m==null&&!e.patchRoutesOnNavigation){let D=Qt(404,{pathname:e.history.location.pathname}),{matches:I,route:A}=Hm(s);C=!0,m=I,b={[A.id]:D}}else if(m&&!e.hydrationData&&js(m,s,e.history.location.pathname).active&&(m=null),m)if(m.some(D=>D.route.lazy))C=!1;else if(!m.some(D=>D.route.loader))C=!0;else{let D=e.hydrationData?e.hydrationData.loaderData:null,I=e.hydrationData?e.hydrationData.errors:null;if(I){let A=m.findIndex(j=>I[j.route.id]!==void 0);C=m.slice(0,A+1).every(j=>!Nc(j.route,D,I))}else C=m.every(A=>!Nc(A.route,D,I))}else{C=!1,m=[];let D=js(null,s,e.history.location.pathname);D.active&&D.matches&&(v=!0,m=D.matches)}let R,y={historyAction:e.history.action,location:e.history.location,matches:m,initialized:C,navigation:Eu,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||b,fetchers:new Map,blockers:new Map},L="POP",B=!1,V,Q=!1,G=new Map,Z=null,be=!1,se=!1,te=new Set,ae=new Map,Te=0,q=-1,X=new Map,E=new Set,de=new Map,me=new Map,S=new Set,Ae=new Map,ut,xe=null;function $t(){if(h=e.history.listen(({action:D,location:I,delta:A})=>{if(ut){ut(),ut=void 0;return}Je(Ae.size===0||A!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let j=Wt({currentLocation:y.location,nextLocation:I,historyAction:D});if(j&&A!=null){let K=new Promise(ne=>{ut=ne});e.history.go(A*-1),an(j,{state:"blocked",location:I,proceed(){an(j,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),K.then(()=>e.history.go(A))},reset(){let ne=new Map(y.blockers);ne.set(j,no),$e({blockers:ne})}});return}return On(D,I)}),n){gI(t,G);let D=()=>yI(t,G);t.addEventListener("pagehide",D),Z=()=>t.removeEventListener("pagehide",D)}return y.initialized||On("POP",y.location,{initialHydration:!0}),R}function gn(){h&&h(),Z&&Z(),f.clear(),V&&V.abort(),y.fetchers.forEach((D,I)=>ye(I)),y.blockers.forEach((D,I)=>ct(I))}function qn(D){return f.add(D),()=>f.delete(D)}function $e(D,I={}){y={...y,...D};let A=[],j=[];y.fetchers.forEach((K,ne)=>{K.state==="idle"&&(S.has(ne)?A.push(ne):j.push(ne))}),S.forEach(K=>{!y.fetchers.has(K)&&!ae.has(K)&&A.push(K)}),[...f].forEach(K=>K(y,{deletedFetchers:A,viewTransitionOpts:I.viewTransitionOpts,flushSync:I.flushSync===!0})),A.forEach(K=>ye(K)),j.forEach(K=>y.fetchers.delete(K))}function sn(D,I,{flushSync:A}={}){var oe,he;let j=y.actionData!=null&&y.navigation.formMethod!=null&&Lt(y.navigation.formMethod)&&y.navigation.state==="loading"&&((oe=D.state)==null?void 0:oe._isRedirect)!==!0,K;I.actionData?Object.keys(I.actionData).length>0?K=I.actionData:K=null:j?K=y.actionData:K=null;let ne=I.loaderData?jm(y.loaderData,I.loaderData,I.matches||[],I.errors):y.loaderData,le=y.blockers;le.size>0&&(le=new Map(le),le.forEach((re,ge)=>le.set(ge,no)));let ee=B===!0||y.navigation.formMethod!=null&&Lt(y.navigation.formMethod)&&((he=D.state)==null?void 0:he._isRedirect)!==!0;a&&(s=a,a=void 0),be||L==="POP"||(L==="PUSH"?e.history.push(D,D.state):L==="REPLACE"&&e.history.replace(D,D.state));let ie;if(L==="POP"){let re=G.get(y.location.pathname);re&&re.has(D.pathname)?ie={currentLocation:y.location,nextLocation:D}:G.has(D.pathname)&&(ie={currentLocation:D,nextLocation:y.location})}else if(Q){let re=G.get(y.location.pathname);re?re.add(D.pathname):(re=new Set([D.pathname]),G.set(y.location.pathname,re)),ie={currentLocation:y.location,nextLocation:D}}$e({...I,actionData:K,loaderData:ne,historyAction:L,location:D,initialized:!0,navigation:Eu,revalidation:"idle",restoreScrollPosition:pp(D,I.matches||y.matches),preventScrollReset:ee,blockers:le},{viewTransitionOpts:ie,flushSync:A===!0}),L="POP",B=!1,Q=!1,be=!1,se=!1,xe==null||xe.resolve(),xe=null}async function Ms(D,I){if(typeof D=="number"){e.history.go(D);return}let A=Oc(y.location,y.matches,l,D,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:j,submission:K,error:ne}=Om(!1,A,I),le=y.location,ee=Xo(y.location,j,I&&I.state);ee={...ee,...e.history.encodeLocation(ee)};let ie=I&&I.replace!=null?I.replace:void 0,oe="PUSH";ie===!0?oe="REPLACE":ie===!1||K!=null&&Lt(K.formMethod)&&K.formAction===y.location.pathname+y.location.search&&(oe="REPLACE");let he=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,re=(I&&I.flushSync)===!0,ge=Wt({currentLocation:le,nextLocation:ee,historyAction:oe});if(ge){an(ge,{state:"blocked",location:ee,proceed(){an(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),Ms(D,I)},reset(){let Oe=new Map(y.blockers);Oe.set(ge,no),$e({blockers:Oe})}});return}await On(oe,ee,{submission:K,pendingError:ne,preventScrollReset:he,replace:I&&I.replace,enableViewTransition:I&&I.viewTransition,flushSync:re})}function Ul(){xe||(xe=bI()),$r(),$e({revalidation:"loading"});let D=xe.promise;return y.navigation.state==="submitting"?D:y.navigation.state==="idle"?(On(y.historyAction,y.location,{startUninterruptedRevalidation:!0}),D):(On(L||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation,enableViewTransition:Q===!0}),D)}async function On(D,I,A){V&&V.abort(),V=null,L=D,be=(A&&A.startUninterruptedRevalidation)===!0,I1(y.location,y.matches),B=(A&&A.preventScrollReset)===!0,Q=(A&&A.enableViewTransition)===!0;let j=a||s,K=A&&A.overrideNavigation,ne=A!=null&&A.initialHydration&&y.matches&&y.matches.length>0&&!v?y.matches:ni(j,I,l),le=(A&&A.flushSync)===!0;if(ne&&y.initialized&&!se&&dI(y.location,I)&&!(A&&A.submission&&Lt(A.submission.formMethod))){sn(I,{matches:ne},{flushSync:le});return}let ee=js(ne,j,I.pathname);if(ee.active&&ee.matches&&(ne=ee.matches),!ne){let{error:dt,notFoundMatches:Ot,route:we}=ql(I.pathname);sn(I,{matches:Ot,loaderData:{},errors:{[we.id]:dt}},{flushSync:le});return}V=new AbortController;let ie=Zi(e.history,I,V.signal,A&&A.submission),oe=new Cm(e.unstable_getContext?await e.unstable_getContext():void 0),he;if(A&&A.pendingError)he=[ki(ne).route.id,{type:"error",error:A.pendingError}];else if(A&&A.submission&&Lt(A.submission.formMethod)){let dt=await Rs(ie,I,A.submission,ne,oe,ee.active,A&&A.initialHydration===!0,{replace:A.replace,flushSync:le});if(dt.shortCircuited)return;if(dt.pendingActionResult){let[Ot,we]=dt.pendingActionResult;if(Rt(we)&&Jo(we.error)&&we.error.status===404){V=null,sn(I,{matches:dt.matches,loaderData:{},errors:{[Ot]:we.error}});return}}ne=dt.matches||ne,he=dt.pendingActionResult,K=_u(I,A.submission),le=!1,ee.active=!1,ie=Zi(e.history,ie.url,ie.signal)}let{shortCircuited:re,matches:ge,loaderData:Oe,errors:Ze}=await Ls(ie,I,ne,oe,ee.active,K,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,A&&A.initialHydration===!0,le,he);re||(V=null,sn(I,{matches:ge||ne,...Um(he),loaderData:Oe,errors:Ze}))}async function Rs(D,I,A,j,K,ne,le,ee={}){$r();let ie=pI(I,A);if($e({navigation:ie},{flushSync:ee.flushSync===!0}),ne){let re=await Us(j,I.pathname,D.signal);if(re.type==="aborted")return{shortCircuited:!0};if(re.type==="error"){let ge=ki(re.partialMatches).route.id;return{matches:re.partialMatches,pendingActionResult:[ge,{type:"error",error:re.error}]}}else if(re.matches)j=re.matches;else{let{notFoundMatches:ge,error:Oe,route:Ze}=ql(I.pathname);return{matches:ge,pendingActionResult:[Ze.id,{type:"error",error:Oe}]}}}let oe,he=mo(j,I);if(!he.route.action&&!he.route.lazy)oe={type:"error",error:Qt(405,{method:D.method,pathname:I.pathname,routeId:he.route.id})};else{let re=vr(r,o,D,j,he,le?[]:i,K),ge=await _i(D,re,K,null);if(oe=ge[he.route.id],!oe){for(let Oe of j)if(ge[Oe.route.id]){oe=ge[Oe.route.id];break}}if(D.signal.aborted)return{shortCircuited:!0}}if(Pi(oe)){let re;return ee&&ee.replace!=null?re=ee.replace:re=Fm(oe.response.headers.get("Location"),new URL(D.url),l)===y.location.pathname+y.location.search,await Nn(D,oe,!0,{submission:A,replace:re}),{shortCircuited:!0}}if(Rt(oe)){let re=ki(j,he.route.id);return(ee&&ee.replace)!==!0&&(L="PUSH"),{matches:j,pendingActionResult:[re.route.id,oe,he.route.id]}}return{matches:j,pendingActionResult:[he.route.id,oe]}}async function Ls(D,I,A,j,K,ne,le,ee,ie,oe,he,re){let ge=ne||_u(I,le),Oe=le||ee||qm(ge),Ze=!be&&!oe;if(K){if(Ze){let Yt=Hr(re);$e({navigation:ge,...Yt!==void 0?{actionData:Yt}:{}},{flushSync:he})}let Ce=await Us(A,I.pathname,D.signal);if(Ce.type==="aborted")return{shortCircuited:!0};if(Ce.type==="error"){let Yt=ki(Ce.partialMatches).route.id;return{matches:Ce.partialMatches,loaderData:{},errors:{[Yt]:Ce.error}}}else if(Ce.matches)A=Ce.matches;else{let{error:Yt,notFoundMatches:Vn,route:$s}=ql(I.pathname);return{matches:Vn,loaderData:{},errors:{[$s.id]:Yt}}}}let dt=a||s,{dsMatches:Ot,revalidatingFetchers:we}=Nm(D,j,r,o,e.history,y,A,Oe,I,oe?[]:i,oe===!0,se,te,S,de,E,dt,l,e.patchRoutesOnNavigation!=null,re);if(q=++Te,!e.dataStrategy&&!Ot.some(Ce=>Ce.shouldLoad)&&we.length===0){let Ce=qt();return sn(I,{matches:A,loaderData:{},errors:re&&Rt(re[1])?{[re[0]]:re[1].error}:null,...Um(re),...Ce?{fetchers:new Map(y.fetchers)}:{}},{flushSync:he}),{shortCircuited:!0}}if(Ze){let Ce={};if(!K){Ce.navigation=ge;let Yt=Hr(re);Yt!==void 0&&(Ce.actionData=Yt)}we.length>0&&(Ce.fetchers=Hl(we)),$e(Ce,{flushSync:he})}we.forEach(Ce=>{Ye(Ce.key),Ce.controller&&ae.set(Ce.key,Ce.controller)});let qr=()=>we.forEach(Ce=>Ye(Ce.key));V&&V.signal.addEventListener("abort",qr);let{loaderResults:Si,fetcherResults:Wr}=await zs(Ot,we,D,j);if(D.signal.aborted)return{shortCircuited:!0};V&&V.signal.removeEventListener("abort",qr),we.forEach(Ce=>ae.delete(Ce.key));let Vt=aa(Si);if(Vt)return await Nn(D,Vt.result,!0,{replace:ie}),{shortCircuited:!0};if(Vt=aa(Wr),Vt)return E.add(Vt.key),await Nn(D,Vt.result,!0,{replace:ie}),{shortCircuited:!0};let{loaderData:Vr,errors:Yr}=zm(y,A,Si,re,we,Wr);oe&&y.errors&&(Yr={...y.errors,...Yr});let Wl=qt(),wi=Wn(q),Hs=Wl||wi||we.length>0;return{matches:A,loaderData:Vr,errors:Yr,...Hs?{fetchers:new Map(y.fetchers)}:{}}}function Hr(D){if(D&&!Rt(D[1]))return{[D[0]]:D[1].data};if(y.actionData)return Object.keys(y.actionData).length===0?null:y.actionData}function Hl(D){return D.forEach(I=>{let A=y.fetchers.get(I.key),j=io(void 0,A?A.data:void 0);y.fetchers.set(I.key,j)}),new Map(y.fetchers)}async function Fs(D,I,A,j){Ye(D);let K=(j&&j.flushSync)===!0,ne=a||s,le=Oc(y.location,y.matches,l,A,I,j==null?void 0:j.relative),ee=ni(ne,le,l),ie=js(ee,ne,le);if(ie.active&&ie.matches&&(ee=ie.matches),!ee){W(D,I,Qt(404,{pathname:le}),{flushSync:K});return}let{path:oe,submission:he,error:re}=Om(!0,le,j);if(re){W(D,I,re,{flushSync:K});return}let ge=mo(ee,oe),Oe=new Cm(e.unstable_getContext?await e.unstable_getContext():void 0),Ze=(j&&j.preventScrollReset)===!0;if(he&&Lt(he.formMethod)){await Bs(D,I,oe,ge,ee,Oe,ie.active,K,Ze,he);return}de.set(D,{routeId:I,path:oe}),await $l(D,I,oe,ge,ee,Oe,ie.active,K,Ze,he)}async function Bs(D,I,A,j,K,ne,le,ee,ie,oe){$r(),de.delete(D);function he(Qe){if(!Qe.route.action&&!Qe.route.lazy){let Ki=Qt(405,{method:oe.formMethod,pathname:A,routeId:I});return W(D,I,Ki,{flushSync:ee}),!0}return!1}if(!le&&he(j))return;let re=y.fetchers.get(D);M(D,mI(oe,re),{flushSync:ee});let ge=new AbortController,Oe=Zi(e.history,A,ge.signal,oe);if(le){let Qe=await Us(K,A,Oe.signal,D);if(Qe.type==="aborted")return;if(Qe.type==="error"){W(D,I,Qe.error,{flushSync:ee});return}else if(Qe.matches){if(K=Qe.matches,j=mo(K,A),he(j))return}else{W(D,I,Qt(404,{pathname:A}),{flushSync:ee});return}}ae.set(D,ge);let Ze=Te,dt=vr(r,o,Oe,K,j,i,ne),we=(await _i(Oe,dt,ne,D))[j.route.id];if(Oe.signal.aborted){ae.get(D)===ge&&ae.delete(D);return}if(S.has(D)){if(Pi(we)||Rt(we)){M(D,Gn(void 0));return}}else{if(Pi(we))if(ae.delete(D),q>Ze){M(D,Gn(void 0));return}else return E.add(D),M(D,io(oe)),Nn(Oe,we,!1,{fetcherSubmission:oe,preventScrollReset:ie});if(Rt(we)){W(D,I,we.error);return}}let qr=y.navigation.location||y.location,Si=Zi(e.history,qr,ge.signal),Wr=a||s,Vt=y.navigation.state!=="idle"?ni(Wr,y.navigation.location,l):y.matches;Ee(Vt,"Didn't find any matches after fetcher action");let Vr=++Te;X.set(D,Vr);let Yr=io(oe,we.data);y.fetchers.set(D,Yr);let{dsMatches:Wl,revalidatingFetchers:wi}=Nm(Si,ne,r,o,e.history,y,Vt,oe,qr,i,!1,se,te,S,de,E,Wr,l,e.patchRoutesOnNavigation!=null,[j.route.id,we]);wi.filter(Qe=>Qe.key!==D).forEach(Qe=>{let Ki=Qe.key,mp=y.fetchers.get(Ki),A1=io(void 0,mp?mp.data:void 0);y.fetchers.set(Ki,A1),Ye(Ki),Qe.controller&&ae.set(Ki,Qe.controller)}),$e({fetchers:new Map(y.fetchers)});let Hs=()=>wi.forEach(Qe=>Ye(Qe.key));ge.signal.addEventListener("abort",Hs);let{loaderResults:Ce,fetcherResults:Yt}=await zs(Wl,wi,Si,ne);if(ge.signal.aborted)return;if(ge.signal.removeEventListener("abort",Hs),X.delete(D),ae.delete(D),wi.forEach(Qe=>ae.delete(Qe.key)),y.fetchers.has(D)){let Qe=Gn(we.data);y.fetchers.set(D,Qe)}let Vn=aa(Ce);if(Vn)return Nn(Si,Vn.result,!1,{preventScrollReset:ie});if(Vn=aa(Yt),Vn)return E.add(Vn.key),Nn(Si,Vn.result,!1,{preventScrollReset:ie});let{loaderData:$s,errors:Vl}=zm(y,Vt,Ce,void 0,wi,Yt);Wn(Vr),y.navigation.state==="loading"&&Vr>q?(Ee(L,"Expected pending action"),V&&V.abort(),sn(y.navigation.location,{matches:Vt,loaderData:$s,errors:Vl,fetchers:new Map(y.fetchers)})):($e({errors:Vl,loaderData:jm(y.loaderData,$s,Vt,Vl),fetchers:new Map(y.fetchers)}),se=!1)}async function $l(D,I,A,j,K,ne,le,ee,ie,oe){let he=y.fetchers.get(D);M(D,io(oe,he?he.data:void 0),{flushSync:ee});let re=new AbortController,ge=Zi(e.history,A,re.signal);if(le){let we=await Us(K,A,ge.signal,D);if(we.type==="aborted")return;if(we.type==="error"){W(D,I,we.error,{flushSync:ee});return}else if(we.matches)K=we.matches,j=mo(K,A);else{W(D,I,Qt(404,{pathname:A}),{flushSync:ee});return}}ae.set(D,re);let Oe=Te,Ze=vr(r,o,ge,K,j,i,ne),Ot=(await _i(ge,Ze,ne,D))[j.route.id];if(ae.get(D)===re&&ae.delete(D),!ge.signal.aborted){if(S.has(D)){M(D,Gn(void 0));return}if(Pi(Ot))if(q>Oe){M(D,Gn(void 0));return}else{E.add(D),await Nn(ge,Ot,!1,{preventScrollReset:ie});return}if(Rt(Ot)){W(D,I,Ot.error);return}M(D,Gn(Ot.data))}}async function Nn(D,I,A,{submission:j,fetcherSubmission:K,preventScrollReset:ne,replace:le}={}){I.response.headers.has("X-Remix-Revalidate")&&(se=!0);let ee=I.response.headers.get("Location");Ee(ee,"Expected a Location header on the redirect Response"),ee=Fm(ee,new URL(D.url),l);let ie=Xo(y.location,ee,{_isRedirect:!0});if(n){let Ze=!1;if(I.response.headers.has("X-Remix-Reload-Document"))Ze=!0;else if(Bf.test(ee)){const dt=kb(ee,!0);Ze=dt.origin!==t.location.origin||rn(dt.pathname,l)==null}if(Ze){le?t.location.replace(ee):t.location.assign(ee);return}}V=null;let oe=le===!0||I.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:he,formAction:re,formEncType:ge}=y.navigation;!j&&!K&&he&&re&&ge&&(j=qm(y.navigation));let Oe=j||K;if(XD.has(I.response.status)&&Oe&&Lt(Oe.formMethod))await On(oe,ie,{submission:{...Oe,formAction:ee},preventScrollReset:ne||B,enableViewTransition:A?Q:void 0});else{let Ze=_u(ie,j);await On(oe,ie,{overrideNavigation:Ze,fetcherSubmission:K,preventScrollReset:ne||B,enableViewTransition:A?Q:void 0})}}async function _i(D,I,A,j){let K,ne={};try{K=await sI(c,D,I,j,A,!1)}catch(le){return I.filter(ee=>ee.shouldLoad).forEach(ee=>{ne[ee.route.id]={type:"error",error:le}}),ne}if(D.signal.aborted)return ne;for(let[le,ee]of Object.entries(K))if(hI(ee)){let ie=ee.result;ne[le]={type:"redirect",response:uI(ie,D,le,I,l)}}else ne[le]=await lI(ee);return ne}async function zs(D,I,A,j){let K=_i(A,D,j,null),ne=Promise.all(I.map(async ie=>{if(ie.matches&&ie.match&&ie.request&&ie.controller){let he=(await _i(ie.request,ie.matches,j,ie.key))[ie.match.route.id];return{[ie.key]:he}}else return Promise.resolve({[ie.key]:{type:"error",error:Qt(404,{pathname:ie.path})}})})),le=await K,ee=(await ne).reduce((ie,oe)=>Object.assign(ie,oe),{});return{loaderResults:le,fetcherResults:ee}}function $r(){se=!0,de.forEach((D,I)=>{ae.has(I)&&te.add(I),Ye(I)})}function M(D,I,A={}){y.fetchers.set(D,I),$e({fetchers:new Map(y.fetchers)},{flushSync:(A&&A.flushSync)===!0})}function W(D,I,A,j={}){let K=ki(y.matches,I);ye(D),$e({errors:{[K.route.id]:A},fetchers:new Map(y.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function ce(D){return me.set(D,(me.get(D)||0)+1),S.has(D)&&S.delete(D),y.fetchers.get(D)||JD}function ye(D){let I=y.fetchers.get(D);ae.has(D)&&!(I&&I.state==="loading"&&X.has(D))&&Ye(D),de.delete(D),X.delete(D),E.delete(D),S.delete(D),te.delete(D),y.fetchers.delete(D)}function Ie(D){let I=(me.get(D)||0)-1;I<=0?(me.delete(D),S.add(D)):me.set(D,I),$e({fetchers:new Map(y.fetchers)})}function Ye(D){let I=ae.get(D);I&&(I.abort(),ae.delete(D))}function yn(D){for(let I of D){let A=ce(I),j=Gn(A.data);y.fetchers.set(I,j)}}function qt(){let D=[],I=!1;for(let A of E){let j=y.fetchers.get(A);Ee(j,`Expected fetcher: ${A}`),j.state==="loading"&&(E.delete(A),D.push(A),I=!0)}return yn(D),I}function Wn(D){let I=[];for(let[A,j]of X)if(j<D){let K=y.fetchers.get(A);Ee(K,`Expected fetcher: ${A}`),K.state==="loading"&&(Ye(A),X.delete(A),I.push(A))}return yn(I),I.length>0}function xi(D,I){let A=y.blockers.get(D)||no;return Ae.get(D)!==I&&Ae.set(D,I),A}function ct(D){y.blockers.delete(D),Ae.delete(D)}function an(D,I){let A=y.blockers.get(D)||no;Ee(A.state==="unblocked"&&I.state==="blocked"||A.state==="blocked"&&I.state==="blocked"||A.state==="blocked"&&I.state==="proceeding"||A.state==="blocked"&&I.state==="unblocked"||A.state==="proceeding"&&I.state==="unblocked",`Invalid blocker state transition: ${A.state} -> ${I.state}`);let j=new Map(y.blockers);j.set(D,I),$e({blockers:j})}function Wt({currentLocation:D,nextLocation:I,historyAction:A}){if(Ae.size===0)return;Ae.size>1&&Je(!1,"A router only supports one blocker at a time");let j=Array.from(Ae.entries()),[K,ne]=j[j.length-1],le=y.blockers.get(K);if(!(le&&le.state==="proceeding")&&ne({currentLocation:D,nextLocation:I,historyAction:A}))return K}function ql(D){let I=Qt(404,{pathname:D}),A=a||s,{matches:j,route:K}=Hm(A);return{notFoundMatches:j,route:K,error:I}}function D1(D,I,A){if(p=D,w=I,_=A||null,!P&&y.navigation===Eu){P=!0;let j=pp(y.location,y.matches);j!=null&&$e({restoreScrollPosition:j})}return()=>{p=null,w=null,_=null}}function fp(D,I){return _&&_(D,I.map(j=>CD(j,y.loaderData)))||D.key}function I1(D,I){if(p&&w){let A=fp(D,I);p[A]=w()}}function pp(D,I){if(p){let A=fp(D,I),j=p[A];if(typeof j=="number")return j}return null}function js(D,I,A){if(e.patchRoutesOnNavigation)if(D){if(Object.keys(D[0].params).length>0)return{active:!0,matches:wa(I,A,l,!0)}}else return{active:!0,matches:wa(I,A,l,!0)||[]};return{active:!1,matches:null}}async function Us(D,I,A,j){if(!e.patchRoutesOnNavigation)return{type:"success",matches:D};let K=D;for(;;){let ne=a==null,le=a||s,ee=o;try{await e.patchRoutesOnNavigation({signal:A,path:I,matches:K,fetcherKey:j,patch:(he,re)=>{A.aborted||Pm(he,re,le,ee,r)}})}catch(he){return{type:"error",error:he,partialMatches:K}}finally{ne&&!A.aborted&&(s=[...s])}if(A.aborted)return{type:"aborted"};let ie=ni(le,I,l);if(ie)return{type:"success",matches:ie};let oe=wa(le,I,l,!0);if(!oe||K.length===oe.length&&K.every((he,re)=>he.route.id===oe[re].route.id))return{type:"success",matches:null};K=oe}}function k1(D){o={},a=il(D,r,void 0,o)}function C1(D,I){let A=a==null;Pm(D,I,a||s,o,r),A&&(s=[...s],$e({}))}return R={get basename(){return l},get future(){return d},get state(){return y},get routes(){return s},get window(){return t},initialize:$t,subscribe:qn,enableScrollRestoration:D1,navigate:Ms,fetch:Fs,revalidate:Ul,createHref:D=>e.history.createHref(D),encodeLocation:D=>e.history.encodeLocation(D),getFetcher:ce,deleteFetcher:Ie,dispose:gn,getBlocker:xi,deleteBlocker:ct,patchRoutes:C1,_internalFetchControllers:ae,_internalSetRoutes:k1},R}function tI(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Oc(e,t,n,i,r,o){let s,a;if(r){s=[];for(let c of t)if(s.push(c),c.route.id===r){a=c;break}}else s=t,a=t[t.length-1];let l=Ff(i||".",Lf(s),rn(e.pathname,n)||e.pathname,o==="path");if(i==null&&(l.search=e.search,l.hash=e.hash),(i==null||i===""||i===".")&&a){let c=zf(l.search);if(a.route.index&&!c)l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index";else if(!a.route.index&&c){let d=new URLSearchParams(l.search),h=d.getAll("index");d.delete("index"),h.filter(p=>p).forEach(p=>d.append("index",p));let f=d.toString();l.search=f?`?${f}`:""}}return n!=="/"&&(l.pathname=l.pathname==="/"?n:Dn([n,l.pathname])),gi(l)}function Om(e,t,n){if(!n||!tI(n))return{path:t};if(n.formMethod&&!fI(n.formMethod))return{path:t,error:Qt(405,{method:n.formMethod})};let i=()=>({path:t,error:Qt(400,{type:"invalid-body"})}),o=(n.formMethod||"get").toUpperCase(),s=jb(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Lt(o))return i();let h=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((f,[p,_])=>`${f}${p}=${_}
`,""):String(n.body);return{path:t,submission:{formMethod:o,formAction:s,formEncType:n.formEncType,formData:void 0,json:void 0,text:h}}}else if(n.formEncType==="application/json"){if(!Lt(o))return i();try{let h=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:o,formAction:s,formEncType:n.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}Ee(typeof FormData=="function","FormData is not available in this environment");let a,l;if(n.formData)a=Mc(n.formData),l=n.formData;else if(n.body instanceof FormData)a=Mc(n.body),l=n.body;else if(n.body instanceof URLSearchParams)a=n.body,l=Bm(a);else if(n.body==null)a=new URLSearchParams,l=new FormData;else try{a=new URLSearchParams(n.body),l=Bm(a)}catch{return i()}let c={formMethod:o,formAction:s,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:l,json:void 0,text:void 0};if(Lt(c.formMethod))return{path:t,submission:c};let d=Ti(t);return e&&d.search&&zf(d.search)&&a.append("index",""),d.search=`?${a}`,{path:gi(d),submission:c}}function Nm(e,t,n,i,r,o,s,a,l,c,d,h,f,p,_,w,P,m,v,b){var be;let C=b?Rt(b[1])?b[1].error:b[1].data:void 0,R=r.createURL(o.location),y=r.createURL(l),L;if(d&&o.errors){let se=Object.keys(o.errors)[0];L=s.findIndex(te=>te.route.id===se)}else if(b&&Rt(b[1])){let se=b[0];L=s.findIndex(te=>te.route.id===se)-1}let B=b?b[1].statusCode:void 0,V=B&&B>=400,Q={currentUrl:R,currentParams:((be=o.matches[0])==null?void 0:be.params)||{},nextUrl:y,nextParams:s[0].params,...a,actionResult:C,actionStatus:B},G=s.map((se,te)=>{let{route:ae}=se,Te=null;if(L!=null&&te>L?Te=!1:ae.lazy?Te=!0:ae.loader==null?Te=!1:d?Te=Nc(ae,o.loaderData,o.errors):nI(o.loaderData,o.matches[te],se)&&(Te=!0),Te!==null)return Pc(n,i,e,se,c,t,Te);let q=V?!1:h||R.pathname+R.search===y.pathname+y.search||R.search!==y.search||iI(o.matches[te],se),X={...Q,defaultShouldRevalidate:q},E=sl(se,X);return Pc(n,i,e,se,c,t,E,X)}),Z=[];return _.forEach((se,te)=>{if(d||!s.some(S=>S.route.id===se.routeId)||p.has(te))return;let ae=o.fetchers.get(te),Te=ae&&ae.state!=="idle"&&ae.data===void 0,q=ni(P,se.path,m);if(!q){if(v&&Te)return;Z.push({key:te,routeId:se.routeId,path:se.path,matches:null,match:null,request:null,controller:null});return}if(w.has(te))return;let X=mo(q,se.path),E=new AbortController,de=Zi(r,se.path,E.signal),me=null;if(f.has(te))f.delete(te),me=vr(n,i,de,q,X,c,t);else if(Te)h&&(me=vr(n,i,de,q,X,c,t));else{let S={...Q,defaultShouldRevalidate:V?!1:h};sl(X,S)&&(me=vr(n,i,de,q,X,c,t,S))}me&&Z.push({key:te,routeId:se.routeId,path:se.path,matches:me,match:X,request:de,controller:E})}),{dsMatches:G,revalidatingFetchers:Z}}function Nc(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,r=n!=null&&n[e.id]!==void 0;return!i&&r?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!r}function nI(e,t,n){let i=!t||n.route.id!==t.route.id,r=!e.hasOwnProperty(n.route.id);return i||r}function iI(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function sl(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function Pm(e,t,n,i,r){let o;if(e){let l=i[e];Ee(l,`No route found to patch children into: routeId = ${e}`),l.children||(l.children=[]),o=l.children}else o=n;let s=t.filter(l=>!o.some(c=>Rb(l,c))),a=il(s,r,[e||"_","patch",String((o==null?void 0:o.length)||"0")],i);o.push(...a)}function Rb(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>{var r;return(r=t.children)==null?void 0:r.some(o=>Rb(n,o))}):!1}var Mm=new WeakMap,Lb=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let r=n[t.id];if(Ee(r,"No route found in manifest"),!r.lazy||typeof r.lazy!="object")return;let o=r.lazy[e];if(!o)return;let s=Mm.get(r);s||(s={},Mm.set(r,s));let a=s[e];if(a)return a;let l=(async()=>{let c=wD(e),h=r[e]!==void 0&&e!=="hasErrorBoundary";if(c)Je(!c,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),s[e]=Promise.resolve();else if(h)Je(!1,`Route "${r.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let f=await o();f!=null&&(Object.assign(r,{[e]:f}),Object.assign(r,i(r)))}typeof r.lazy=="object"&&(r.lazy[e]=void 0,Object.values(r.lazy).every(f=>f===void 0)&&(r.lazy=void 0))})();return s[e]=l,l},Rm=new WeakMap;function rI(e,t,n,i,r){let o=n[e.id];if(Ee(o,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let d=Rm.get(o);if(d)return{lazyRoutePromise:d,lazyHandlerPromise:d};let h=(async()=>{Ee(typeof e.lazy=="function","No lazy route function found");let f=await e.lazy(),p={};for(let _ in f){let w=f[_];if(w===void 0)continue;let P=ID(_),v=o[_]!==void 0&&_!=="hasErrorBoundary";P?Je(!P,"Route property "+_+" is not a supported property to be returned from a lazy route function. This property will be ignored."):v?Je(!v,`Route "${o.id}" has a static property "${_}" defined but its lazy function is also returning a value for this property. The lazy route property "${_}" will be ignored.`):p[_]=w}Object.assign(o,p),Object.assign(o,{...i(o),lazy:void 0})})();return Rm.set(o,h),h.catch(()=>{}),{lazyRoutePromise:h,lazyHandlerPromise:h}}let s=Object.keys(e.lazy),a=[],l;for(let d of s){if(r&&r.includes(d))continue;let h=Lb({key:d,route:e,manifest:n,mapRouteProperties:i});h&&(a.push(h),d===t&&(l=h))}let c=a.length>0?Promise.all(a).then(()=>{}):void 0;return c==null||c.catch(()=>{}),l==null||l.catch(()=>{}),{lazyRoutePromise:c,lazyHandlerPromise:l}}async function Lm(e){let t=e.matches.filter(r=>r.shouldLoad),n={};return(await Promise.all(t.map(r=>r.resolve()))).forEach((r,o)=>{n[t[o].route.id]=r}),n}async function oI(e){return e.matches.some(t=>t.route.unstable_middleware)?Fb(e,!1,()=>Lm(e),(t,n)=>({[n]:{type:"error",result:t}})):Lm(e)}async function Fb(e,t,n,i){let{matches:r,request:o,params:s,context:a}=e,l={handlerResult:void 0};try{let c=r.flatMap(h=>h.route.unstable_middleware?h.route.unstable_middleware.map(f=>[h.route.id,f]):[]),d=await Bb({request:o,params:s,context:a},c,t,l,n);return t?d:l.handlerResult}catch(c){if(!l.middlewareError)throw c;let d=await i(l.middlewareError.error,l.middlewareError.routeId);return l.handlerResult?Object.assign(l.handlerResult,d):d}}async function Bb(e,t,n,i,r,o=0){let{request:s}=e;if(s.signal.aborted)throw s.signal.reason?s.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${s.method} ${s.url}`);let a=t[o];if(!a)return i.handlerResult=await r(),i.handlerResult;let[l,c]=a,d=!1,h,f=async()=>{if(d)throw new Error("You may only call `next()` once per middleware");d=!0,await Bb(e,t,n,i,r,o+1)};try{let p=await c({request:e.request,params:e.params,context:e.context},f);return d?p===void 0?h:p:f()}catch(p){throw i.middlewareError?i.middlewareError.error!==p&&(i.middlewareError={routeId:l,error:p}):i.middlewareError={routeId:l,error:p},p}}function zb(e,t,n,i,r){let o=Lb({key:"unstable_middleware",route:i.route,manifest:t,mapRouteProperties:e}),s=rI(i.route,Lt(n.method)?"action":"loader",t,e,r);return{middleware:o,route:s.lazyRoutePromise,handler:s.lazyHandlerPromise}}function Pc(e,t,n,i,r,o,s,a=null){let l=!1,c=zb(e,t,n,i,r);return{...i,_lazyPromises:c,shouldLoad:s,unstable_shouldRevalidateArgs:a,unstable_shouldCallHandler(d){return l=!0,a?typeof d=="boolean"?sl(i,{...a,defaultShouldRevalidate:d}):sl(i,a):s},resolve(d){return l||s||d&&n.method==="GET"&&(i.route.lazy||i.route.loader)?aI({request:n,match:i,lazyHandlerPromise:c==null?void 0:c.handler,lazyRoutePromise:c==null?void 0:c.route,handlerOverride:d,scopedContext:o}):Promise.resolve({type:"data",result:void 0})}}}function vr(e,t,n,i,r,o,s,a=null){return i.map(l=>l.route.id!==r.route.id?{...l,shouldLoad:!1,unstable_shouldRevalidateArgs:a,unstable_shouldCallHandler:()=>!1,_lazyPromises:zb(e,t,n,l,o),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Pc(e,t,n,l,o,s,!0,a))}async function sI(e,t,n,i,r,o){n.some(c=>{var d;return(d=c._lazyPromises)==null?void 0:d.middleware})&&await Promise.all(n.map(c=>{var d;return(d=c._lazyPromises)==null?void 0:d.middleware}));let s={request:t,params:n[0].params,context:r,matches:n},l=await e({...s,fetcherKey:i,unstable_runClientMiddleware:c=>{let d=s;return Fb(d,!1,()=>c({...d,fetcherKey:i,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}),(h,f)=>({[f]:{type:"error",result:h}}))}});try{await Promise.all(n.flatMap(c=>{var d,h;return[(d=c._lazyPromises)==null?void 0:d.handler,(h=c._lazyPromises)==null?void 0:h.route]}))}catch{}return l}async function aI({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:r,scopedContext:o}){let s,a,l=Lt(e.method),c=l?"action":"loader",d=h=>{let f,p=new Promise((P,m)=>f=m);a=()=>f(),e.signal.addEventListener("abort",a);let _=P=>typeof h!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${c}" [routeId: ${t.route.id}]`)):h({request:e,params:t.params,context:o},...P!==void 0?[P]:[]),w=(async()=>{try{return{type:"data",result:await(r?r(m=>_(m)):_())}}catch(P){return{type:"error",result:P}}})();return Promise.race([w,p])};try{let h=l?t.route.action:t.route.loader;if(n||i)if(h){let f,[p]=await Promise.all([d(h).catch(_=>{f=_}),n,i]);if(f!==void 0)throw f;s=p}else{await n;let f=l?t.route.action:t.route.loader;if(f)[s]=await Promise.all([d(f),i]);else if(c==="action"){let p=new URL(e.url),_=p.pathname+p.search;throw Qt(405,{method:e.method,pathname:_,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(h)s=await d(h);else{let f=new URL(e.url),p=f.pathname+f.search;throw Qt(404,{pathname:p})}}catch(h){return{type:"error",result:h}}finally{a&&e.signal.removeEventListener("abort",a)}return s}async function lI(e){var i,r,o,s,a,l;let{result:t,type:n}=e;if(Ub(t)){let c;try{let d=t.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?t.body==null?c=null:c=await t.json():c=await t.text()}catch(d){return{type:"error",error:d}}return n==="error"?{type:"error",error:new ol(t.status,t.statusText,c),statusCode:t.status,headers:t.headers}:{type:"data",data:c,statusCode:t.status,headers:t.headers}}return n==="error"?$m(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:(i=t.init)==null?void 0:i.status,headers:(r=t.init)!=null&&r.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new ol(((o=t.init)==null?void 0:o.status)||500,void 0,t.data),statusCode:Jo(t)?t.status:void 0,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Jo(t)?t.status:void 0}:$m(t)?{type:"data",data:t.data,statusCode:(a=t.init)==null?void 0:a.status,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function uI(e,t,n,i,r){let o=e.headers.get("Location");if(Ee(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Bf.test(o)){let s=i.slice(0,i.findIndex(a=>a.route.id===n)+1);o=Oc(new URL(t.url),s,r,o),e.headers.set("Location",o)}return e}function Fm(e,t,n){if(Bf.test(e)){let i=e,r=i.startsWith("//")?new URL(t.protocol+i):new URL(i),o=rn(r.pathname,n)!=null;if(r.origin===t.origin&&o)return r.pathname+r.search+r.hash}return e}function Zi(e,t,n,i){let r=e.createURL(jb(t)).toString(),o={signal:n};if(i&&Lt(i.formMethod)){let{formMethod:s,formEncType:a}=i;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(i.json)):a==="text/plain"?o.body=i.text:a==="application/x-www-form-urlencoded"&&i.formData?o.body=Mc(i.formData):o.body=i.formData}return new Request(r,o)}function Mc(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function Bm(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function cI(e,t,n,i=!1,r=!1){let o={},s=null,a,l=!1,c={},d=n&&Rt(n[1])?n[1].error:void 0;return e.forEach(h=>{if(!(h.route.id in t))return;let f=h.route.id,p=t[f];if(Ee(!Pi(p),"Cannot handle redirect results in processLoaderData"),Rt(p)){let _=p.error;if(d!==void 0&&(_=d,d=void 0),s=s||{},r)s[f]=_;else{let w=ki(e,f);s[w.route.id]==null&&(s[w.route.id]=_)}i||(o[f]=Mb),l||(l=!0,a=Jo(p.error)?p.error.status:500),p.headers&&(c[f]=p.headers)}else o[f]=p.data,p.statusCode&&p.statusCode!==200&&!l&&(a=p.statusCode),p.headers&&(c[f]=p.headers)}),d!==void 0&&n&&(s={[n[0]]:d},n[2]&&(o[n[2]]=void 0)),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:c}}function zm(e,t,n,i,r,o){let{loaderData:s,errors:a}=cI(t,n,i);return r.filter(l=>!l.matches||l.matches.some(c=>c.shouldLoad)).forEach(l=>{let{key:c,match:d,controller:h}=l,f=o[c];if(Ee(f,"Did not find corresponding fetcher result"),!(h&&h.signal.aborted))if(Rt(f)){let p=ki(e.matches,d==null?void 0:d.route.id);a&&a[p.route.id]||(a={...a,[p.route.id]:f.error}),e.fetchers.delete(c)}else if(Pi(f))Ee(!1,"Unhandled fetcher revalidation redirect");else{let p=Gn(f.data);e.fetchers.set(c,p)}}),{loaderData:s,errors:a}}function jm(e,t,n,i){let r=Object.entries(t).filter(([,o])=>o!==Mb).reduce((o,[s,a])=>(o[s]=a,o),{});for(let o of n){let s=o.route.id;if(!t.hasOwnProperty(s)&&e.hasOwnProperty(s)&&o.route.loader&&(r[s]=e[s]),i&&i.hasOwnProperty(s))break}return r}function Um(e){return e?Rt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ki(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function Hm(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Qt(e,{pathname:t,routeId:n,method:i,type:r,message:o}={}){let s="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&t&&n?a=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:r==="invalid-body"&&(a="Unable to encode submission body")):e===403?(s="Forbidden",a=`Route "${n}" does not match URL "${t}"`):e===404?(s="Not Found",a=`No route matches URL "${t}"`):e===405&&(s="Method Not Allowed",i&&t&&n?a=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(a=`Invalid request method "${i.toUpperCase()}"`)),new ol(e||500,s,new Error(a),!0)}function aa(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,r]=t[n];if(Pi(r))return{key:i,result:r}}}function jb(e){let t=typeof e=="string"?Ti(e):e;return gi({...t,hash:""})}function dI(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function hI(e){return Ub(e.result)&&KD.has(e.result.status)}function Rt(e){return e.type==="error"}function Pi(e){return(e&&e.type)==="redirect"}function $m(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Ub(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function fI(e){return GD.has(e.toUpperCase())}function Lt(e){return YD.has(e.toUpperCase())}function zf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function mo(e,t){let n=typeof t=="string"?Ti(t).search:t.search;if(e[e.length-1].route.index&&zf(n||""))return e[e.length-1];let i=Ob(e);return i[i.length-1]}function qm(e){let{formMethod:t,formAction:n,formEncType:i,text:r,formData:o,json:s}=e;if(!(!t||!n||!i)){if(r!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(o!=null)return{formMethod:t,formAction:n,formEncType:i,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:s,text:void 0}}}function _u(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function pI(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function io(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function mI(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Gn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function gI(e,t){try{let n=e.sessionStorage.getItem(Pb);if(n){let i=JSON.parse(n);for(let[r,o]of Object.entries(i||{}))o&&Array.isArray(o)&&t.set(r,new Set(o||[]))}}catch{}}function yI(e,t){if(t.size>0){let n={};for(let[i,r]of t)n[i]=[...r];try{e.sessionStorage.setItem(Pb,JSON.stringify(n))}catch(i){Je(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function bI(){let e,t,n=new Promise((i,r)=>{e=async o=>{i(o);try{await n}catch{}},t=async o=>{r(o);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Wi=N.createContext(null);Wi.displayName="DataRouter";var Ds=N.createContext(null);Ds.displayName="DataRouterState";var jf=N.createContext({isTransitioning:!1});jf.displayName="ViewTransition";var Hb=N.createContext(new Map);Hb.displayName="Fetchers";var vI=N.createContext(null);vI.displayName="Await";var kn=N.createContext(null);kn.displayName="Navigation";var Il=N.createContext(null);Il.displayName="Location";var Cn=N.createContext({outlet:null,matches:[],isDataRoute:!1});Cn.displayName="Route";var Uf=N.createContext(null);Uf.displayName="RouteError";function TI(e,{relative:t}={}){Ee(Is(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=N.useContext(kn),{hash:r,pathname:o,search:s}=ks(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:Dn([n,o])),i.createHref({pathname:a,search:s,hash:r})}function Is(){return N.useContext(Il)!=null}function Vi(){return Ee(Is(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Il).location}var $b="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qb(e){N.useContext(kn).static||N.useLayoutEffect(e)}function EI(){let{isDataRoute:e}=N.useContext(Cn);return e?RI():_I()}function _I(){Ee(Is(),"useNavigate() may be used only in the context of a <Router> component.");let e=N.useContext(Wi),{basename:t,navigator:n}=N.useContext(kn),{matches:i}=N.useContext(Cn),{pathname:r}=Vi(),o=JSON.stringify(Lf(i)),s=N.useRef(!1);return qb(()=>{s.current=!0}),N.useCallback((l,c={})=>{if(Je(s.current,$b),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=Ff(l,JSON.parse(o),r,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Dn([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,o,r,e])}var xI=N.createContext(null);function SI(e){let t=N.useContext(Cn).outlet;return t&&N.createElement(xI.Provider,{value:e},t)}function ks(e,{relative:t}={}){let{matches:n}=N.useContext(Cn),{pathname:i}=Vi(),r=JSON.stringify(Lf(n));return N.useMemo(()=>Ff(e,JSON.parse(r),i,t==="path"),[e,r,i,t])}function wI(e,t,n,i){Ee(Is(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=N.useContext(kn),{matches:o}=N.useContext(Cn),s=o[o.length-1],a=s?s.params:{},l=s?s.pathname:"/",c=s?s.pathnameBase:"/",d=s&&s.route;{let m=d&&d.path||"";Yb(l,!d||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let h=Vi(),f;f=h;let p=f.pathname||"/",_=p;if(c!=="/"){let m=c.replace(/^\//,"").split("/");_="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let w=ni(e,{pathname:_});return Je(d||w!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Je(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),AI(w&&w.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Dn([c,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:Dn([c,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,i)}function DI(){let e=MI(),t=Jo(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:o},"ErrorBoundary")," or"," ",N.createElement("code",{style:o},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:r},n):null,s)}var II=N.createElement(DI,null),kI=class extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?N.createElement(Cn.Provider,{value:this.props.routeContext},N.createElement(Uf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function CI({routeContext:e,match:t,children:n}){let i=N.useContext(Wi);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(Cn.Provider,{value:e},n)}function AI(e,t=[],n=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id])!==void 0);Ee(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),r=r.slice(0,Math.min(r.length,l+1))}let s=!1,a=-1;if(n)for(let l=0;l<r.length;l++){let c=r[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=l),c.route.id){let{loaderData:d,errors:h}=n,f=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!h||h[c.route.id]===void 0);if(c.route.lazy||f){s=!0,a>=0?r=r.slice(0,a+1):r=[r[0]];break}}}return r.reduceRight((l,c,d)=>{let h,f=!1,p=null,_=null;n&&(h=o&&c.route.id?o[c.route.id]:void 0,p=c.route.errorElement||II,s&&(a<0&&d===0?(Yb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,_=null):a===d&&(f=!0,_=c.route.hydrateFallbackElement||null)));let w=t.concat(r.slice(0,d+1)),P=()=>{let m;return h?m=p:f?m=_:c.route.Component?m=N.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=l,N.createElement(CI,{match:c,routeContext:{outlet:l,matches:w,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?N.createElement(kI,{location:n.location,revalidation:n.revalidation,component:p,error:h,children:P(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):P()},null)}function Hf(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OI(e){let t=N.useContext(Wi);return Ee(t,Hf(e)),t}function Wb(e){let t=N.useContext(Ds);return Ee(t,Hf(e)),t}function NI(e){let t=N.useContext(Cn);return Ee(t,Hf(e)),t}function kl(e){let t=NI(e),n=t.matches[t.matches.length-1];return Ee(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function PI(){return kl("useRouteId")}function Vb(){let e=Wb("useLoaderData"),t=kl("useLoaderData");return e.loaderData[t]}function MI(){var i;let e=N.useContext(Uf),t=Wb("useRouteError"),n=kl("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function RI(){let{router:e}=OI("useNavigate"),t=kl("useNavigate"),n=N.useRef(!1);return qb(()=>{n.current=!0}),N.useCallback(async(r,o={})=>{Je(n.current,$b),n.current&&(typeof r=="number"?e.navigate(r):await e.navigate(r,{fromRouteId:t,...o}))},[e,t])}var Wm={};function Yb(e,t,n){!t&&!Wm[e]&&(Wm[e]=!0,Je(!1,n))}var Vm={};function Ym(e,t){!e&&!Vm[t]&&(Vm[t]=!0,console.warn(t))}function LI(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Je(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:N.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Je(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:N.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Je(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:N.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var FI=["HydrateFallback","hydrateFallbackElement"],BI=class{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",e(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",t(n))}})}};function zI({router:e,flushSync:t}){let[n,i]=N.useState(e.state),[r,o]=N.useState(),[s,a]=N.useState({isTransitioning:!1}),[l,c]=N.useState(),[d,h]=N.useState(),[f,p]=N.useState(),_=N.useRef(new Map),w=N.useCallback((b,{deletedFetchers:C,flushSync:R,viewTransitionOpts:y})=>{b.fetchers.forEach((B,V)=>{B.data!==void 0&&_.current.set(V,B.data)}),C.forEach(B=>_.current.delete(B)),Ym(R===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let L=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(Ym(y==null||L,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!y||!L){t&&R?t(()=>i(b)):N.startTransition(()=>i(b));return}if(t&&R){t(()=>{d&&(l&&l.resolve(),d.skipTransition()),a({isTransitioning:!0,flushSync:!0,currentLocation:y.currentLocation,nextLocation:y.nextLocation})});let B=e.window.document.startViewTransition(()=>{t(()=>i(b))});B.finished.finally(()=>{t(()=>{c(void 0),h(void 0),o(void 0),a({isTransitioning:!1})})}),t(()=>h(B));return}d?(l&&l.resolve(),d.skipTransition(),p({state:b,currentLocation:y.currentLocation,nextLocation:y.nextLocation})):(o(b),a({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}))},[e.window,t,d,l]);N.useLayoutEffect(()=>e.subscribe(w),[e,w]),N.useEffect(()=>{s.isTransitioning&&!s.flushSync&&c(new BI)},[s]),N.useEffect(()=>{if(l&&r&&e.window){let b=r,C=l.promise,R=e.window.document.startViewTransition(async()=>{N.startTransition(()=>i(b)),await C});R.finished.finally(()=>{c(void 0),h(void 0),o(void 0),a({isTransitioning:!1})}),h(R)}},[r,l,e.window]),N.useEffect(()=>{l&&r&&n.location.key===r.location.key&&l.resolve()},[l,d,n.location,r]),N.useEffect(()=>{!s.isTransitioning&&f&&(o(f.state),a({isTransitioning:!0,flushSync:!1,currentLocation:f.currentLocation,nextLocation:f.nextLocation}),p(void 0))},[s.isTransitioning,f]);let P=N.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:b=>e.navigate(b),push:(b,C,R)=>e.navigate(b,{state:C,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(b,C,R)=>e.navigate(b,{replace:!0,state:C,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[e]),m=e.basename||"/",v=N.useMemo(()=>({router:e,navigator:P,static:!1,basename:m}),[e,P,m]);return N.createElement(N.Fragment,null,N.createElement(Wi.Provider,{value:v},N.createElement(Ds.Provider,{value:n},N.createElement(Hb.Provider,{value:_.current},N.createElement(jf.Provider,{value:s},N.createElement($I,{basename:m,location:n.location,navigationType:n.historyAction,navigator:P},N.createElement(jI,{routes:e.routes,future:e.future,state:n})))))),null)}var jI=N.memo(UI);function UI({routes:e,future:t,state:n}){return wI(e,void 0,n,t)}function HI(e){return SI(e.context)}function $I({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:r,static:o=!1}){Ee(!Is(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=N.useMemo(()=>({basename:s,navigator:r,static:o,future:{}}),[s,r,o]);typeof n=="string"&&(n=Ti(n));let{pathname:l="/",search:c="",hash:d="",state:h=null,key:f="default"}=n,p=N.useMemo(()=>{let _=rn(l,s);return _==null?null:{location:{pathname:_,search:c,hash:d,state:h,key:f},navigationType:i}},[s,l,c,d,h,f,i]);return Je(p!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:N.createElement(kn.Provider,{value:a},N.createElement(Il.Provider,{children:t,value:p}))}var Da="get",Ia="application/x-www-form-urlencoded";function Cl(e){return e!=null&&typeof e.tagName=="string"}function qI(e){return Cl(e)&&e.tagName.toLowerCase()==="button"}function WI(e){return Cl(e)&&e.tagName.toLowerCase()==="form"}function VI(e){return Cl(e)&&e.tagName.toLowerCase()==="input"}function YI(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function QI(e,t){return e.button===0&&(!t||t==="_self")&&!YI(e)}var la=null;function GI(){if(la===null)try{new FormData(document.createElement("form"),0),la=!1}catch{la=!0}return la}var KI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xu(e){return e!=null&&!KI.has(e)?(Je(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ia}"`),null):e}function XI(e,t){let n,i,r,o,s;if(WI(e)){let a=e.getAttribute("action");i=a?rn(a,t):null,n=e.getAttribute("method")||Da,r=xu(e.getAttribute("enctype"))||Ia,o=new FormData(e)}else if(qI(e)||VI(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(i=l?rn(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Da,r=xu(e.getAttribute("formenctype"))||xu(a.getAttribute("enctype"))||Ia,o=new FormData(a,e),!GI()){let{name:c,type:d,value:h}=e;if(d==="image"){let f=c?`${c}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else c&&o.append(c,h)}}else{if(Cl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Da,i=null,r=Ia,s=e}return o&&r==="text/plain"&&(s=o,o=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:o,body:s}}function $f(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function JI(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ZI(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function ek(e,t,n){let i=await Promise.all(e.map(async r=>{let o=t.routes[r.route.id];if(o){let s=await JI(o,n);return s.links?s.links():[]}return[]}));return rk(i.flat(1).filter(ZI).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Qm(e,t,n,i,r,o){let s=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,a=(l,c)=>{var d;return n[c].pathname!==l.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return o==="assets"?t.filter((l,c)=>s(l,c)||a(l,c)):o==="data"?t.filter((l,c)=>{var h;let d=i.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(s(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function tk(e,t,{includeHydrateFallback:n}={}){return nk(e.map(i=>{let r=t.routes[i.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o}).flat(1))}function nk(e){return[...new Set(e)]}function ik(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function rk(e,t){let n=new Set;return new Set(t),e.reduce((i,r)=>{let o=JSON.stringify(ik(r));return n.has(o)||(n.add(o),i.push({key:o,link:r})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ok=new Set([100,101,204,205]);function sk(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&rn(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Qb(){let e=N.useContext(Wi);return $f(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ak(){let e=N.useContext(Ds);return $f(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var qf=N.createContext(void 0);qf.displayName="FrameworkContext";function Gb(){let e=N.useContext(qf);return $f(e,"You must render this element inside a <HydratedRouter> element"),e}function lk(e,t){let n=N.useContext(qf),[i,r]=N.useState(!1),[o,s]=N.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:d,onTouchStart:h}=t,f=N.useRef(null);N.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let w=m=>{m.forEach(v=>{s(v.isIntersecting)})},P=new IntersectionObserver(w,{threshold:.5});return f.current&&P.observe(f.current),()=>{P.disconnect()}}},[e]),N.useEffect(()=>{if(i){let w=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(w)}}},[i]);let p=()=>{r(!0)},_=()=>{r(!1),s(!1)};return n?e!=="intent"?[o,f,{}]:[o,f,{onFocus:ro(a,p),onBlur:ro(l,_),onMouseEnter:ro(c,p),onMouseLeave:ro(d,_),onTouchStart:ro(h,p)}]:[!1,f,{}]}function ro(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function uk({page:e,...t}){let{router:n}=Qb(),i=N.useMemo(()=>ni(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?N.createElement(dk,{page:e,matches:i,...t}):null}function ck(e){let{manifest:t,routeModules:n}=Gb(),[i,r]=N.useState([]);return N.useEffect(()=>{let o=!1;return ek(e,t,n).then(s=>{o||r(s)}),()=>{o=!0}},[e,t,n]),i}function dk({page:e,matches:t,...n}){let i=Vi(),{manifest:r,routeModules:o}=Gb(),{basename:s}=Qb(),{loaderData:a,matches:l}=ak(),c=N.useMemo(()=>Qm(e,t,l,r,i,"data"),[e,t,l,r,i]),d=N.useMemo(()=>Qm(e,t,l,r,i,"assets"),[e,t,l,r,i]),h=N.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let _=new Set,w=!1;if(t.forEach(m=>{var b;let v=r.routes[m.route.id];!v||!v.hasLoader||(!c.some(C=>C.route.id===m.route.id)&&m.route.id in a&&((b=o[m.route.id])!=null&&b.shouldRevalidate)||v.hasClientLoader?w=!0:_.add(m.route.id))}),_.size===0)return[];let P=sk(e,s);return w&&_.size>0&&P.searchParams.set("_routes",t.filter(m=>_.has(m.route.id)).map(m=>m.route.id).join(",")),[P.pathname+P.search]},[s,a,i,r,c,t,e,o]),f=N.useMemo(()=>tk(d,r),[d,r]),p=ck(d);return N.createElement(N.Fragment,null,h.map(_=>N.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...n})),f.map(_=>N.createElement("link",{key:_,rel:"modulepreload",href:_,...n})),p.map(({key:_,link:w})=>N.createElement("link",{key:_,...w})))}function hk(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Kb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kb&&(window.__reactRouterVersion="7.6.2")}catch{}function fk(e,t){return eI({basename:t==null?void 0:t.basename,unstable_getContext:t==null?void 0:t.unstable_getContext,future:t==null?void 0:t.future,history:ED({window:t==null?void 0:t.window}),hydrationData:pk(),routes:e,mapRouteProperties:LI,hydrationRouteProperties:FI,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function pk(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:mk(e.errors)}),e}function mk(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,r]of t)if(r&&r.__type==="RouteErrorResponse")n[i]=new ol(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let o=window[r.__subType];if(typeof o=="function")try{let s=new o(r.message);s.stack="",n[i]=s}catch{}}if(n[i]==null){let o=new Error(r.message);o.stack="",n[i]=o}}else n[i]=r;return n}var Xb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Al=N.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:r,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d,viewTransition:h,...f},p){let{basename:_}=N.useContext(kn),w=typeof c=="string"&&Xb.test(c),P,m=!1;if(typeof c=="string"&&w&&(P=c,Kb))try{let V=new URL(window.location.href),Q=c.startsWith("//")?new URL(V.protocol+c):new URL(c),G=rn(Q.pathname,_);Q.origin===V.origin&&G!=null?c=G+Q.search+Q.hash:m=!0}catch{Je(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=TI(c,{relative:r}),[b,C,R]=lk(i,f),y=vk(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:r,viewTransition:h});function L(V){t&&t(V),V.defaultPrevented||y(V)}let B=N.createElement("a",{...f,...R,href:P||v,onClick:m||o?t:L,ref:hk(p,C),target:l,"data-discover":!w&&n==="render"?"true":void 0});return b&&!w?N.createElement(N.Fragment,null,B,N.createElement(uk,{page:v})):B});Al.displayName="Link";var gk=N.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:r=!1,style:o,to:s,viewTransition:a,children:l,...c},d){let h=ks(s,{relative:c.relative}),f=Vi(),p=N.useContext(Ds),{navigator:_,basename:w}=N.useContext(kn),P=p!=null&&Sk(h)&&a===!0,m=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,v=f.pathname,b=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(v=v.toLowerCase(),b=b?b.toLowerCase():null,m=m.toLowerCase()),b&&w&&(b=rn(b,w)||b);const C=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let R=v===m||!r&&v.startsWith(m)&&v.charAt(C)==="/",y=b!=null&&(b===m||!r&&b.startsWith(m)&&b.charAt(m.length)==="/"),L={isActive:R,isPending:y,isTransitioning:P},B=R?t:void 0,V;typeof i=="function"?V=i(L):V=[i,R?"active":null,y?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let Q=typeof o=="function"?o(L):o;return N.createElement(Al,{...c,"aria-current":B,className:V,ref:d,style:Q,to:s,viewTransition:a},typeof l=="function"?l(L):l)});gk.displayName="NavLink";var yk=N.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:r,state:o,method:s=Da,action:a,onSubmit:l,relative:c,preventScrollReset:d,viewTransition:h,...f},p)=>{let _=_k(),w=xk(a,{relative:c}),P=s.toLowerCase()==="get"?"get":"post",m=typeof a=="string"&&Xb.test(a),v=b=>{if(l&&l(b),b.defaultPrevented)return;b.preventDefault();let C=b.nativeEvent.submitter,R=(C==null?void 0:C.getAttribute("formmethod"))||s;_(C||b.currentTarget,{fetcherKey:t,method:R,navigate:n,replace:r,state:o,relative:c,preventScrollReset:d,viewTransition:h})};return N.createElement("form",{ref:p,method:P,action:w,onSubmit:i?l:v,...f,"data-discover":!m&&e==="render"?"true":void 0})});yk.displayName="Form";function bk(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jb(e){let t=N.useContext(Wi);return Ee(t,bk(e)),t}function vk(e,{target:t,replace:n,state:i,preventScrollReset:r,relative:o,viewTransition:s}={}){let a=EI(),l=Vi(),c=ks(e,{relative:o});return N.useCallback(d=>{if(QI(d,t)){d.preventDefault();let h=n!==void 0?n:gi(l)===gi(c);a(e,{replace:h,state:i,preventScrollReset:r,relative:o,viewTransition:s})}},[l,a,c,n,i,t,e,r,o,s])}var Tk=0,Ek=()=>`__${String(++Tk)}__`;function _k(){let{router:e}=Jb("useSubmit"),{basename:t}=N.useContext(kn),n=PI();return N.useCallback(async(i,r={})=>{let{action:o,method:s,encType:a,formData:l,body:c}=XI(i,t);if(r.navigate===!1){let d=r.fetcherKey||Ek();await e.fetch(d,n,r.action||o,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||s,formEncType:r.encType||a,flushSync:r.flushSync})}else await e.navigate(r.action||o,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||s,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[e,t,n])}function xk(e,{relative:t}={}){let{basename:n}=N.useContext(kn),i=N.useContext(Cn);Ee(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),o={...ks(e||".",{relative:t})},s=Vi();if(e==null){o.search=s.search;let a=new URLSearchParams(o.search),l=a.getAll("index");if(l.some(d=>d==="")){a.delete("index"),l.filter(h=>h).forEach(h=>a.append("index",h));let d=a.toString();o.search=d?`?${d}`:""}}return(!e||e===".")&&r.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Dn([n,o.pathname])),gi(o)}function Sk(e,t={}){let n=N.useContext(jf);Ee(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Jb("useViewTransitionState"),r=ks(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=rn(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=rn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return rl(r.pathname,s)!=null||rl(r.pathname,o)!=null}[...ok];/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wk(e){return N.createElement(zI,{flushSync:Db.flushSync,...e})}function Dk(){return Y.jsxs("div",{className:"header_bar",children:[Y.jsxs("p",{style:{fontSize:"15px"},children:["Get in touch with me at ",Y.jsx("a",{style:{fontStyle:"italic",fontSize:"15px"},href:"mailto: jessjessjohnsonson@gmail.com",children:"jessjessjohnsonson@gmail.com"})]}),Y.jsx(Al,{to:"/",children:Y.jsx("button",{className:"home_button",children:"Home"})})]})}function Ik(){return Y.jsxs(Y.Fragment,{children:[Y.jsx(Dk,{}),Y.jsx(HI,{})]})}function Gm(){const{header_text:e,children:t}=Vb();if(!t||t.length===0)return Y.jsx("p",{className:"no-posts",children:"No content found"});let n=4,i=[];for(let r=0;r<n;r++)i.push([]);for(let r=0;r<t.length;r++)i[r%n].push(t[r]);return Y.jsxs(Y.Fragment,{children:[e?Y.jsx("p",{className:"page_header_text",children:e}):Y.jsx("p",{style:{height:"80px"}}),Y.jsx("div",{className:"card_container",style:{display:"flex",gap:"1rem"},children:i.map((r,o)=>Y.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"1rem"},children:r.map(s=>Y.jsx(kk,{post:s},s.link))},o))})]})}function kk({post:e}){const{title:t,image:n,description:i,link:r}=e;return Y.jsxs(Al,{to:r,className:"card",children:[n&&Y.jsx("div",{className:"card_image_container",children:Y.jsx("img",{src:n,alt:t,loading:"lazy",className:"card_image"})}),Y.jsxs("div",{className:"card_content",children:[Y.jsx("h2",{className:"card_title",children:t}),i&&Y.jsx("p",{className:"card_description",children:i})]})]})}function Km(e){const t=[],n=String(e||"");let i=n.indexOf(","),r=0,o=!1;for(;!o;){i===-1&&(i=n.length,o=!0);const s=n.slice(r,i).trim();(s||!o)&&t.push(s),r=i+1,i=n.indexOf(",",r)}return t}function Zb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Ck=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ak=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ok={};function Xm(e,t){return(Ok.jsx?Ak:Ck).test(e)}const Nk=/[ \t\n\f\r]/g;function Pk(e){return typeof e=="object"?e.type==="text"?Jm(e.value):!1:Jm(e)}function Jm(e){return e.replace(Nk,"")===""}let Cs=class{constructor(t,n,i){this.normal=n,this.property=t,i&&(this.space=i)}};Cs.prototype.normal={};Cs.prototype.property={};Cs.prototype.space=void 0;function ev(e,t){const n={},i={};for(const r of e)Object.assign(n,r.property),Object.assign(i,r.normal);return new Cs(n,i,t)}function Zo(e){return e.toLowerCase()}let At=class{constructor(t,n){this.attribute=n,this.property=t}};At.prototype.attribute="";At.prototype.booleanish=!1;At.prototype.boolean=!1;At.prototype.commaOrSpaceSeparated=!1;At.prototype.commaSeparated=!1;At.prototype.defined=!1;At.prototype.mustUseProperty=!1;At.prototype.number=!1;At.prototype.overloadedBoolean=!1;At.prototype.property="";At.prototype.spaceSeparated=!1;At.prototype.space=void 0;let Mk=0;const pe=Yi(),Ge=Yi(),Rc=Yi(),H=Yi(),Ne=Yi(),Tr=Yi(),Nt=Yi();function Yi(){return 2**++Mk}const Lc=Object.freeze(Object.defineProperty({__proto__:null,boolean:pe,booleanish:Ge,commaOrSpaceSeparated:Nt,commaSeparated:Tr,number:H,overloadedBoolean:Rc,spaceSeparated:Ne},Symbol.toStringTag,{value:"Module"})),Su=Object.keys(Lc);let Wf=class extends At{constructor(t,n,i,r){let o=-1;if(super(t,n),Zm(this,"space",r),typeof i=="number")for(;++o<Su.length;){const s=Su[o];Zm(this,Su[o],(i&Lc[s])===Lc[s])}}};Wf.prototype.defined=!0;function Zm(e,t,n){n&&(e[t]=n)}function Rr(e){const t={},n={};for(const[i,r]of Object.entries(e.properties)){const o=new Wf(i,e.transform(e.attributes||{},i),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),t[i]=o,n[Zo(i)]=i,n[Zo(o.attribute)]=i}return new Cs(t,n,e.space)}const tv=Rr({properties:{ariaActiveDescendant:null,ariaAtomic:Ge,ariaAutoComplete:null,ariaBusy:Ge,ariaChecked:Ge,ariaColCount:H,ariaColIndex:H,ariaColSpan:H,ariaControls:Ne,ariaCurrent:null,ariaDescribedBy:Ne,ariaDetails:null,ariaDisabled:Ge,ariaDropEffect:Ne,ariaErrorMessage:null,ariaExpanded:Ge,ariaFlowTo:Ne,ariaGrabbed:Ge,ariaHasPopup:null,ariaHidden:Ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ne,ariaLevel:H,ariaLive:null,ariaModal:Ge,ariaMultiLine:Ge,ariaMultiSelectable:Ge,ariaOrientation:null,ariaOwns:Ne,ariaPlaceholder:null,ariaPosInSet:H,ariaPressed:Ge,ariaReadOnly:Ge,ariaRelevant:null,ariaRequired:Ge,ariaRoleDescription:Ne,ariaRowCount:H,ariaRowIndex:H,ariaRowSpan:H,ariaSelected:Ge,ariaSetSize:H,ariaSort:null,ariaValueMax:H,ariaValueMin:H,ariaValueNow:H,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function nv(e,t){return t in e?e[t]:t}function iv(e,t){return nv(e,t.toLowerCase())}const Rk=Rr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Tr,acceptCharset:Ne,accessKey:Ne,action:null,allow:null,allowFullScreen:pe,allowPaymentRequest:pe,allowUserMedia:pe,alt:null,as:null,async:pe,autoCapitalize:null,autoComplete:Ne,autoFocus:pe,autoPlay:pe,blocking:Ne,capture:null,charSet:null,checked:pe,cite:null,className:Ne,cols:H,colSpan:null,content:null,contentEditable:Ge,controls:pe,controlsList:Ne,coords:H|Tr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:pe,defer:pe,dir:null,dirName:null,disabled:pe,download:Rc,draggable:Ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:pe,formTarget:null,headers:Ne,height:H,hidden:Rc,high:H,href:null,hrefLang:null,htmlFor:Ne,httpEquiv:Ne,id:null,imageSizes:null,imageSrcSet:null,inert:pe,inputMode:null,integrity:null,is:null,isMap:pe,itemId:null,itemProp:Ne,itemRef:Ne,itemScope:pe,itemType:Ne,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:pe,low:H,manifest:null,max:null,maxLength:H,media:null,method:null,min:null,minLength:H,multiple:pe,muted:pe,name:null,nonce:null,noModule:pe,noValidate:pe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:pe,optimum:H,pattern:null,ping:Ne,placeholder:null,playsInline:pe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:pe,referrerPolicy:null,rel:Ne,required:pe,reversed:pe,rows:H,rowSpan:H,sandbox:Ne,scope:null,scoped:pe,seamless:pe,selected:pe,shadowRootClonable:pe,shadowRootDelegatesFocus:pe,shadowRootMode:null,shape:null,size:H,sizes:null,slot:null,span:H,spellCheck:Ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:H,step:null,style:null,tabIndex:H,target:null,title:null,translate:null,type:null,typeMustMatch:pe,useMap:null,value:Ge,width:H,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ne,axis:null,background:null,bgColor:null,border:H,borderColor:null,bottomMargin:H,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:pe,declare:pe,event:null,face:null,frame:null,frameBorder:null,hSpace:H,leftMargin:H,link:null,longDesc:null,lowSrc:null,marginHeight:H,marginWidth:H,noResize:pe,noHref:pe,noShade:pe,noWrap:pe,object:null,profile:null,prompt:null,rev:null,rightMargin:H,rules:null,scheme:null,scrolling:Ge,standby:null,summary:null,text:null,topMargin:H,valueType:null,version:null,vAlign:null,vLink:null,vSpace:H,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:pe,disableRemotePlayback:pe,prefix:null,property:null,results:H,security:null,unselectable:null},space:"html",transform:iv}),Lk=Rr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Nt,accentHeight:H,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:H,amplitude:H,arabicForm:null,ascent:H,attributeName:null,attributeType:null,azimuth:H,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:H,by:null,calcMode:null,capHeight:H,className:Ne,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:H,diffuseConstant:H,direction:null,display:null,dur:null,divisor:H,dominantBaseline:null,download:pe,dx:null,dy:null,edgeMode:null,editable:null,elevation:H,enableBackground:null,end:null,event:null,exponent:H,externalResourcesRequired:null,fill:null,fillOpacity:H,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Tr,g2:Tr,glyphName:Tr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:H,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:H,horizOriginX:H,horizOriginY:H,id:null,ideographic:H,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:H,k:H,k1:H,k2:H,k3:H,k4:H,kernelMatrix:Nt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:H,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:H,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:H,overlineThickness:H,paintOrder:null,panose1:null,path:null,pathLength:H,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ne,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:H,pointsAtY:H,pointsAtZ:H,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Nt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Nt,rev:Nt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Nt,requiredFeatures:Nt,requiredFonts:Nt,requiredFormats:Nt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:H,specularExponent:H,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:H,strikethroughThickness:H,string:null,stroke:null,strokeDashArray:Nt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:H,strokeOpacity:H,strokeWidth:null,style:null,surfaceScale:H,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Nt,tabIndex:H,tableValues:null,target:null,targetX:H,targetY:H,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Nt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:H,underlineThickness:H,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:H,values:null,vAlphabetic:H,vMathematical:H,vectorEffect:null,vHanging:H,vIdeographic:H,version:null,vertAdvY:H,vertOriginX:H,vertOriginY:H,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:H,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:nv}),rv=Rr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),ov=Rr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:iv}),sv=Rr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Fk={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Bk=/[A-Z]/g,eg=/-[a-z]/g,zk=/^data[-\w.:]+$/i;function Vf(e,t){const n=Zo(t);let i=t,r=At;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&zk.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(eg,Uk);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!eg.test(o)){let s=o.replace(Bk,jk);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}r=Wf}return new r(i,t)}function jk(e){return"-"+e.toLowerCase()}function Uk(e){return e.charAt(1).toUpperCase()}const Ol=ev([tv,Rk,rv,ov,sv],"html"),Lr=ev([tv,Lk,rv,ov,sv],"svg");function tg(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function av(e){return e.join(" ").trim()}var Yf={},ng=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Hk=/\n/g,$k=/^\s*/,qk=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Wk=/^:\s*/,Vk=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Yk=/^[;\s]*/,Qk=/^\s+|\s+$/g,Gk=`
`,ig="/",rg="*",Ci="",Kk="comment",Xk="declaration",Jk=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,i=1;function r(_){var w=_.match(Hk);w&&(n+=w.length);var P=_.lastIndexOf(Gk);i=~P?_.length-P:i+_.length}function o(){var _={line:n,column:i};return function(w){return w.position=new s(_),c(),w}}function s(_){this.start=_,this.end={line:n,column:i},this.source=t.source}s.prototype.content=e;function a(_){var w=new Error(t.source+":"+n+":"+i+": "+_);if(w.reason=_,w.filename=t.source,w.line=n,w.column=i,w.source=e,!t.silent)throw w}function l(_){var w=_.exec(e);if(w){var P=w[0];return r(P),e=e.slice(P.length),w}}function c(){l($k)}function d(_){var w;for(_=_||[];w=h();)w!==!1&&_.push(w);return _}function h(){var _=o();if(!(ig!=e.charAt(0)||rg!=e.charAt(1))){for(var w=2;Ci!=e.charAt(w)&&(rg!=e.charAt(w)||ig!=e.charAt(w+1));)++w;if(w+=2,Ci===e.charAt(w-1))return a("End of comment missing");var P=e.slice(2,w-2);return i+=2,r(P),e=e.slice(w),i+=2,_({type:Kk,comment:P})}}function f(){var _=o(),w=l(qk);if(w){if(h(),!l(Wk))return a("property missing ':'");var P=l(Vk),m=_({type:Xk,property:og(w[0].replace(ng,Ci)),value:P?og(P[0].replace(ng,Ci)):Ci});return l(Yk),m}}function p(){var _=[];d(_);for(var w;w=f();)w!==!1&&(_.push(w),d(_));return _}return c(),p()};function og(e){return e?e.replace(Qk,Ci):Ci}var Zk=Na&&Na.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yf,"__esModule",{value:!0});Yf.default=tC;var eC=Zk(Jk);function tC(e,t){var n=null;if(!e||typeof e!="string")return n;var i=(0,eC.default)(e),r=typeof t=="function";return i.forEach(function(o){if(o.type==="declaration"){var s=o.property,a=o.value;r?t(s,a,o):a&&(n=n||{},n[s]=a)}}),n}var Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});Nl.camelCase=void 0;var nC=/^--[a-zA-Z0-9_-]+$/,iC=/-([a-z])/g,rC=/^[^-]+$/,oC=/^-(webkit|moz|ms|o|khtml)-/,sC=/^-(ms)-/,aC=function(e){return!e||rC.test(e)||nC.test(e)},lC=function(e,t){return t.toUpperCase()},sg=function(e,t){return"".concat(t,"-")},uC=function(e,t){return t===void 0&&(t={}),aC(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(sC,sg):e=e.replace(oC,sg),e.replace(iC,lC))};Nl.camelCase=uC;var cC=Na&&Na.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},dC=cC(Yf),hC=Nl;function Fc(e,t){var n={};return!e||typeof e!="string"||(0,dC.default)(e,function(i,r){i&&r&&(n[(0,hC.camelCase)(i,t)]=r)}),n}Fc.default=Fc;var fC=Fc;const pC=Mh(fC),Pl=lv("end"),An=lv("start");function lv(e){return t;function t(n){const i=n&&n.position&&n.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function mC(e){const t=An(e),n=Pl(e);if(t&&n)return{start:t,end:n}}function Do(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ag(e.position):"start"in e||"end"in e?ag(e):"line"in e||"column"in e?Bc(e):""}function Bc(e){return lg(e&&e.line)+":"+lg(e&&e.column)}function ag(e){return Bc(e&&e.start)+"-"+Bc(e&&e.end)}function lg(e){return e&&typeof e=="number"?e:1}class gt extends Error{constructor(t,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?r=t:!o.cause&&t&&(s=!0,r=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?o.ruleId=i:(o.source=i.slice(0,l),o.ruleId=i.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=a?a.line:void 0,this.name=Do(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}gt.prototype.file="";gt.prototype.name="";gt.prototype.reason="";gt.prototype.message="";gt.prototype.stack="";gt.prototype.column=void 0;gt.prototype.line=void 0;gt.prototype.ancestors=void 0;gt.prototype.cause=void 0;gt.prototype.fatal=void 0;gt.prototype.place=void 0;gt.prototype.ruleId=void 0;gt.prototype.source=void 0;const Qf={}.hasOwnProperty,gC=new Map,yC=/[A-Z]/g,bC=new Set(["table","tbody","thead","tfoot","tr"]),vC=new Set(["td","th"]),uv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function TC(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let i;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=kC(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=IC(n,t.jsx,t.jsxs)}const r={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:i,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Lr:Ol,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=cv(r,e,void 0);return o&&typeof o!="string"?o:r.create(e,r.Fragment,{children:o||void 0},void 0)}function cv(e,t,n){if(t.type==="element")return EC(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return _C(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return SC(e,t,n);if(t.type==="mdxjsEsm")return xC(e,t);if(t.type==="root")return wC(e,t,n);if(t.type==="text")return DC(e,t)}function EC(e,t,n){const i=e.schema;let r=i;t.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=Lr,e.schema=r),e.ancestors.push(t);const o=hv(e,t.tagName,!1),s=CC(e,t);let a=Kf(e,t);return bC.has(t.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!Pk(l):!0})),dv(e,s,o,t),Gf(s,a),e.ancestors.pop(),e.schema=i,e.create(t,o,s,n)}function _C(e,t){if(t.data&&t.data.estree&&e.evaluater){const i=t.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}es(e,t.position)}function xC(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);es(e,t.position)}function SC(e,t,n){const i=e.schema;let r=i;t.name==="svg"&&i.space==="html"&&(r=Lr,e.schema=r),e.ancestors.push(t);const o=t.name===null?e.Fragment:hv(e,t.name,!0),s=AC(e,t),a=Kf(e,t);return dv(e,s,o,t),Gf(s,a),e.ancestors.pop(),e.schema=i,e.create(t,o,s,n)}function wC(e,t,n){const i={};return Gf(i,Kf(e,t)),e.create(t,e.Fragment,i,n)}function DC(e,t){return t.value}function dv(e,t,n,i){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=i)}function Gf(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function IC(e,t,n){return i;function i(r,o,s,a){const c=Array.isArray(s.children)?n:t;return a?c(o,s,a):c(o,s)}}function kC(e,t){return n;function n(i,r,o,s){const a=Array.isArray(o.children),l=An(i);return t(r,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function CC(e,t){const n={};let i,r;for(r in t.properties)if(r!=="children"&&Qf.call(t.properties,r)){const o=OC(e,r,t.properties[r]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&vC.has(t.tagName)?i=a:n[s]=a}}if(i){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function AC(e,t){const n={};for(const i of t.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const o=i.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else es(e,t.position);else{const r=i.name;let o;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const a=i.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else es(e,t.position);else o=i.value===null?!0:i.value;n[r]=o}return n}function Kf(e,t){const n=[];let i=-1;const r=e.passKeys?new Map:gC;for(;++i<t.children.length;){const o=t.children[i];let s;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const c=r.get(l)||0;s=l+"-"+c,r.set(l,c+1)}}const a=cv(e,o,s);a!==void 0&&n.push(a)}return n}function OC(e,t,n){const i=Vf(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?Zb(n):av(n)),i.property==="style"){let r=typeof n=="object"?n:NC(e,String(n));return e.stylePropertyNameCase==="css"&&(r=PC(r)),["style",r]}return[e.elementAttributeNameCase==="react"&&i.space?Fk[i.property]||i.property:i.attribute,n]}}function NC(e,t){try{return pC(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const i=n,r=new gt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=uv+"#cannot-parse-style-attribute",r}}function hv(e,t,n){let i;if(!n)i={type:"Literal",value:t};else if(t.includes(".")){const r=t.split(".");let o=-1,s;for(;++o<r.length;){const a=Xm(r[o])?{type:"Identifier",name:r[o]}:{type:"Literal",value:r[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}i=s}else i=Xm(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(i.type==="Literal"){const r=i.value;return Qf.call(e.components,r)?e.components[r]:r}if(e.evaluater)return e.evaluater.evaluateExpression(i);es(e)}function es(e,t){const n=new gt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=uv+"#cannot-handle-mdx-estrees-without-createevaluater",n}function PC(e){const t={};let n;for(n in e)Qf.call(e,n)&&(t[MC(n)]=e[n]);return t}function MC(e){let t=e.replace(yC,RC);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function RC(e){return"-"+e.toLowerCase()}const wu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},LC={};function FC(e,t){const n=LC,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return fv(e,i,r)}function fv(e,t,n){if(BC(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ug(e.children,t,n)}return Array.isArray(e)?ug(e,t,n):""}function ug(e,t,n){const i=[];let r=-1;for(;++r<e.length;)i[r]=fv(e[r],t,n);return i.join("")}function BC(e){return!!(e&&typeof e=="object")}const cg=document.createElement("i");function Xf(e){const t="&"+e+";";cg.innerHTML=t;const n=cg.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function In(e,t,n,i){const r=e.length;let o=0,s;if(t<0?t=-t>r?0:r+t:t=t>r?r:t,n=n>0?n:0,i.length<1e4)s=Array.from(i),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<i.length;)s=i.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function Xt(e,t){return e.length>0?(In(e,e.length,0,t),e):t}const dg={}.hasOwnProperty;function zC(e){const t={};let n=-1;for(;++n<e.length;)jC(t,e[n]);return t}function jC(e,t){let n;for(n in t){const r=(dg.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){dg.call(r,s)||(r[s]=[]);const a=o[s];UC(r[s],Array.isArray(a)?a:a?[a]:[])}}}function UC(e,t){let n=-1;const i=[];for(;++n<t.length;)(t[n].add==="after"?e:i).push(t[n]);In(e,0,0,i)}function pv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Er(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const xn=Ei(/[A-Za-z]/),Bt=Ei(/[\dA-Za-z]/),HC=Ei(/[#-'*+\--9=?A-Z^-~]/);function zc(e){return e!==null&&(e<32||e===127)}const jc=Ei(/\d/),$C=Ei(/[\dA-Fa-f]/),qC=Ei(/[!-/:-@[-`{-~]/);function ue(e){return e!==null&&e<-2}function Ct(e){return e!==null&&(e<0||e===32)}function De(e){return e===-2||e===-1||e===32}const WC=Ei(new RegExp("\\p{P}|\\p{S}","u")),VC=Ei(/\s/);function Ei(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Fr(e){const t=[];let n=-1,i=0,r=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&Bt(e.charCodeAt(n+1))&&Bt(e.charCodeAt(n+2)))r=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),r=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(i,n),encodeURIComponent(s)),i=n+r+1,s=""),r&&(n+=r,r=0)}return t.join("")+e.slice(i)}function Re(e,t,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return De(l)?(e.enter(n),a(l)):t(l)}function a(l){return De(l)&&o++<r?(e.consume(l),a):(e.exit(n),t(l))}}const YC={tokenize:QC};function QC(e){const t=e.attempt(this.parser.constructs.contentInitial,i,r);let n;return t;function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Re(e,t,"linePrefix")}function r(a){return e.enter("paragraph"),o(a)}function o(a){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return ue(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const GC={tokenize:KC},hg={tokenize:XC};function KC(e){const t=this,n=[];let i=0,r,o,s;return a;function a(b){if(i<n.length){const C=n[i];return t.containerState=C[1],e.attempt(C[0].continuation,l,c)(b)}return c(b)}function l(b){if(i++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&v();const C=t.events.length;let R=C,y;for(;R--;)if(t.events[R][0]==="exit"&&t.events[R][1].type==="chunkFlow"){y=t.events[R][1].end;break}m(i);let L=C;for(;L<t.events.length;)t.events[L][1].end={...y},L++;return In(t.events,R+1,0,t.events.slice(C)),t.events.length=L,c(b)}return a(b)}function c(b){if(i===n.length){if(!r)return f(b);if(r.currentConstruct&&r.currentConstruct.concrete)return _(b);t.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(hg,d,h)(b)}function d(b){return r&&v(),m(i),f(b)}function h(b){return t.parser.lazy[t.now().line]=i!==n.length,s=t.now().offset,_(b)}function f(b){return t.containerState={},e.attempt(hg,p,_)(b)}function p(b){return i++,n.push([t.currentConstruct,t.containerState]),f(b)}function _(b){if(b===null){r&&v(),m(0),e.consume(b);return}return r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:o}),w(b)}function w(b){if(b===null){P(e.exit("chunkFlow"),!0),m(0),e.consume(b);return}return ue(b)?(e.consume(b),P(e.exit("chunkFlow")),i=0,t.interrupt=void 0,a):(e.consume(b),w)}function P(b,C){const R=t.sliceStream(b);if(C&&R.push(null),b.previous=o,o&&(o.next=b),o=b,r.defineSkip(b.start),r.write(R),t.parser.lazy[b.start.line]){let y=r.events.length;for(;y--;)if(r.events[y][1].start.offset<s&&(!r.events[y][1].end||r.events[y][1].end.offset>s))return;const L=t.events.length;let B=L,V,Q;for(;B--;)if(t.events[B][0]==="exit"&&t.events[B][1].type==="chunkFlow"){if(V){Q=t.events[B][1].end;break}V=!0}for(m(i),y=L;y<t.events.length;)t.events[y][1].end={...Q},y++;In(t.events,B+1,0,t.events.slice(L)),t.events.length=y}}function m(b){let C=n.length;for(;C-- >b;){const R=n[C];t.containerState=R[1],R[0].exit.call(t,e)}n.length=b}function v(){r.write([null]),o=void 0,r=void 0,t.containerState._closeFlow=void 0}}function XC(e,t,n){return Re(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function fg(e){if(e===null||Ct(e)||VC(e))return 1;if(WC(e))return 2}function Jf(e,t,n){const i=[];let r=-1;for(;++r<e.length;){const o=e[r].resolveAll;o&&!i.includes(o)&&(t=o(t,n),i.push(o))}return t}const Uc={name:"attention",resolveAll:JC,tokenize:ZC};function JC(e,t){let n=-1,i,r,o,s,a,l,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(i=n;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[i][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[i][1].end.offset-e[i][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const h={...e[i][1].end},f={...e[n][1].start};pg(h,-l),pg(f,l),s={type:l>1?"strongSequence":"emphasisSequence",start:h,end:{...e[i][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:l>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[n][1].start}},r={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[i][1].end={...s.start},e[n][1].start={...a.end},c=[],e[i][1].end.offset-e[i][1].start.offset&&(c=Xt(c,[["enter",e[i][1],t],["exit",e[i][1],t]])),c=Xt(c,[["enter",r,t],["enter",s,t],["exit",s,t],["enter",o,t]]),c=Xt(c,Jf(t.parser.constructs.insideSpan.null,e.slice(i+1,n),t)),c=Xt(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",r,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=Xt(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,In(e,i-1,n-i+3,c),n=i+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function ZC(e,t){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=fg(i);let o;return s;function s(l){return o=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===o)return e.consume(l),a;const c=e.exit("attentionSequence"),d=fg(l),h=!d||d===2&&r||n.includes(l),f=!r||r===2&&d||n.includes(i);return c._open=!!(o===42?h:h&&(r||!f)),c._close=!!(o===42?f:f&&(d||!h)),t(l)}}function pg(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const eA={name:"autolink",tokenize:tA};function tA(e,t,n){let i=0;return r;function r(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return xn(p)?(e.consume(p),s):p===64?n(p):c(p)}function s(p){return p===43||p===45||p===46||Bt(p)?(i=1,a(p)):c(p)}function a(p){return p===58?(e.consume(p),i=0,l):(p===43||p===45||p===46||Bt(p))&&i++<32?(e.consume(p),a):(i=0,c(p))}function l(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||zc(p)?n(p):(e.consume(p),l)}function c(p){return p===64?(e.consume(p),d):HC(p)?(e.consume(p),c):n(p)}function d(p){return Bt(p)?h(p):n(p)}function h(p){return p===46?(e.consume(p),i=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||Bt(p))&&i++<63){const _=p===45?f:h;return e.consume(p),_}return n(p)}}const Ml={partial:!0,tokenize:nA};function nA(e,t,n){return i;function i(o){return De(o)?Re(e,r,"linePrefix")(o):r(o)}function r(o){return o===null||ue(o)?t(o):n(o)}}const mv={continuation:{tokenize:rA},exit:oA,name:"blockQuote",tokenize:iA};function iA(e,t,n){const i=this;return r;function r(s){if(s===62){const a=i.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return De(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function rA(e,t,n){const i=this;return r;function r(s){return De(s)?Re(e,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(mv,t,n)(s)}}function oA(e){e.exit("blockQuote")}const gv={name:"characterEscape",tokenize:sA};function sA(e,t,n){return i;function i(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),r}function r(o){return qC(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const yv={name:"characterReference",tokenize:aA};function aA(e,t,n){const i=this;let r=0,o,s;return a;function a(h){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),l}function l(h){return h===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(h),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,s=Bt,d(h))}function c(h){return h===88||h===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(h),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=$C,d):(e.enter("characterReferenceValue"),o=7,s=jc,d(h))}function d(h){if(h===59&&r){const f=e.exit("characterReferenceValue");return s===Bt&&!Xf(i.sliceSerialize(f))?n(h):(e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(h)&&r++<o?(e.consume(h),d):n(h)}}const mg={partial:!0,tokenize:uA},gg={concrete:!0,name:"codeFenced",tokenize:lA};function lA(e,t,n){const i=this,r={partial:!0,tokenize:R};let o=0,s=0,a;return l;function l(y){return c(y)}function c(y){const L=i.events[i.events.length-1];return o=L&&L[1].type==="linePrefix"?L[2].sliceSerialize(L[1],!0).length:0,a=y,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(y)}function d(y){return y===a?(s++,e.consume(y),d):s<3?n(y):(e.exit("codeFencedFenceSequence"),De(y)?Re(e,h,"whitespace")(y):h(y))}function h(y){return y===null||ue(y)?(e.exit("codeFencedFence"),i.interrupt?t(y):e.check(mg,w,C)(y)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(y))}function f(y){return y===null||ue(y)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),h(y)):De(y)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Re(e,p,"whitespace")(y)):y===96&&y===a?n(y):(e.consume(y),f)}function p(y){return y===null||ue(y)?h(y):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),_(y))}function _(y){return y===null||ue(y)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),h(y)):y===96&&y===a?n(y):(e.consume(y),_)}function w(y){return e.attempt(r,C,P)(y)}function P(y){return e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),m}function m(y){return o>0&&De(y)?Re(e,v,"linePrefix",o+1)(y):v(y)}function v(y){return y===null||ue(y)?e.check(mg,w,C)(y):(e.enter("codeFlowValue"),b(y))}function b(y){return y===null||ue(y)?(e.exit("codeFlowValue"),v(y)):(e.consume(y),b)}function C(y){return e.exit("codeFenced"),t(y)}function R(y,L,B){let V=0;return Q;function Q(te){return y.enter("lineEnding"),y.consume(te),y.exit("lineEnding"),G}function G(te){return y.enter("codeFencedFence"),De(te)?Re(y,Z,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(te):Z(te)}function Z(te){return te===a?(y.enter("codeFencedFenceSequence"),be(te)):B(te)}function be(te){return te===a?(V++,y.consume(te),be):V>=s?(y.exit("codeFencedFenceSequence"),De(te)?Re(y,se,"whitespace")(te):se(te)):B(te)}function se(te){return te===null||ue(te)?(y.exit("codeFencedFence"),L(te)):B(te)}}}function uA(e,t,n){const i=this;return r;function r(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return i.parser.lazy[i.now().line]?n(s):t(s)}}const Du={name:"codeIndented",tokenize:dA},cA={partial:!0,tokenize:hA};function dA(e,t,n){const i=this;return r;function r(c){return e.enter("codeIndented"),Re(e,o,"linePrefix",5)(c)}function o(c){const d=i.events[i.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(c):n(c)}function s(c){return c===null?l(c):ue(c)?e.attempt(cA,s,l)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||ue(c)?(e.exit("codeFlowValue"),s(c)):(e.consume(c),a)}function l(c){return e.exit("codeIndented"),t(c)}}function hA(e,t,n){const i=this;return r;function r(s){return i.parser.lazy[i.now().line]?n(s):ue(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),r):Re(e,o,"linePrefix",5)(s)}function o(s){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):ue(s)?r(s):n(s)}}const fA={name:"codeText",previous:mA,resolve:pA,tokenize:gA};function pA(e){let t=e.length-4,n=3,i,r;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(i=n;++i<t;)if(e[i][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(i=n-1,t++;++i<=t;)r===void 0?i!==t&&e[i][1].type!=="lineEnding"&&(r=i):(i===t||e[i][1].type==="lineEnding")&&(e[r][1].type="codeTextData",i!==r+2&&(e[r][1].end=e[i-1][1].end,e.splice(r+2,i-r-2),t-=i-r-2,i=r+2),r=void 0);return e}function mA(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function gA(e,t,n){let i=0,r,o;return s;function s(h){return e.enter("codeText"),e.enter("codeTextSequence"),a(h)}function a(h){return h===96?(e.consume(h),i++,a):(e.exit("codeTextSequence"),l(h))}function l(h){return h===null?n(h):h===32?(e.enter("space"),e.consume(h),e.exit("space"),l):h===96?(o=e.enter("codeTextSequence"),r=0,d(h)):ue(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),l):(e.enter("codeTextData"),c(h))}function c(h){return h===null||h===32||h===96||ue(h)?(e.exit("codeTextData"),l(h)):(e.consume(h),c)}function d(h){return h===96?(e.consume(h),r++,d):r===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(h)):(o.type="codeTextData",c(h))}}class yA{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(t,i):t>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(t,n,i){const r=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&oo(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),oo(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),oo(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);oo(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);oo(this.left,n.reverse())}}}function oo(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function bv(e){const t={};let n=-1,i,r,o,s,a,l,c;const d=new yA(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(i=d.get(n),n&&i[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(t,bA(d,n)),n=t[n],c=!0);else if(i[1]._container){for(o=n,r=void 0;o--;)if(s=d.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(r&&(d.get(r)[1].type="lineEndingBlank"),s[1].type="lineEnding",r=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;r&&(i[1].end={...d.get(r)[1].start},a=d.slice(r,n),a.unshift(i),d.splice(r,n-r+1,a))}}return In(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function bA(e,t){const n=e.get(t)[1],i=e.get(t)[2];let r=t-1;const o=[];let s=n._tokenizer;s||(s=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],c={};let d,h,f=-1,p=n,_=0,w=0;const P=[w];for(;p;){for(;e.get(++r)[1]!==p;);o.push(r),p._tokenizer||(d=i.sliceStream(p),p.next||d.push(null),h&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),h=p,p=p.next}for(p=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(w=f+1,P.push(w),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):P.pop(),f=P.length;f--;){const m=a.slice(P[f],P[f+1]),v=o.pop();l.push([v,v+m.length-1]),e.splice(v,2,m)}for(l.reverse(),f=-1;++f<l.length;)c[_+l[f][0]]=_+l[f][1],_+=l[f][1]-l[f][0]-1;return c}const vA={resolve:EA,tokenize:_A},TA={partial:!0,tokenize:xA};function EA(e){return bv(e),e}function _A(e,t){let n;return i;function i(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?o(a):ue(a)?e.check(TA,s,o)(a):(e.consume(a),r)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function xA(e,t,n){const i=this;return r;function r(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),Re(e,o,"linePrefix")}function o(s){if(s===null||ue(s))return n(s);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(i.parser.constructs.flow,n,t)(s)}}function vv(e,t,n,i,r,o,s,a,l){const c=l||Number.POSITIVE_INFINITY;let d=0;return h;function h(m){return m===60?(e.enter(i),e.enter(r),e.enter(o),e.consume(m),e.exit(o),f):m===null||m===32||m===41||zc(m)?n(m):(e.enter(i),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),w(m))}function f(m){return m===62?(e.enter(o),e.consume(m),e.exit(o),e.exit(r),e.exit(i),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===62?(e.exit("chunkString"),e.exit(a),f(m)):m===null||m===60||ue(m)?n(m):(e.consume(m),m===92?_:p)}function _(m){return m===60||m===62||m===92?(e.consume(m),p):p(m)}function w(m){return!d&&(m===null||m===41||Ct(m))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(i),t(m)):d<c&&m===40?(e.consume(m),d++,w):m===41?(e.consume(m),d--,w):m===null||m===32||m===40||zc(m)?n(m):(e.consume(m),m===92?P:w)}function P(m){return m===40||m===41||m===92?(e.consume(m),w):w(m)}}function Tv(e,t,n,i,r,o){const s=this;let a=0,l;return c;function c(p){return e.enter(i),e.enter(r),e.consume(p),e.exit(r),e.enter(o),d}function d(p){return a>999||p===null||p===91||p===93&&!l||p===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(p):p===93?(e.exit(o),e.enter(r),e.consume(p),e.exit(r),e.exit(i),t):ue(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===null||p===91||p===93||ue(p)||a++>999?(e.exit("chunkString"),d(p)):(e.consume(p),l||(l=!De(p)),p===92?f:h)}function f(p){return p===91||p===92||p===93?(e.consume(p),a++,h):h(p)}}function Ev(e,t,n,i,r,o){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(i),e.enter(r),e.consume(f),e.exit(r),s=f===40?41:f,l):n(f)}function l(f){return f===s?(e.enter(r),e.consume(f),e.exit(r),e.exit(i),t):(e.enter(o),c(f))}function c(f){return f===s?(e.exit(o),l(s)):f===null?n(f):ue(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Re(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===s||f===null||ue(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?h:d)}function h(f){return f===s||f===92?(e.consume(f),d):d(f)}}function Io(e,t){let n;return i;function i(r){return ue(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n=!0,i):De(r)?Re(e,i,n?"linePrefix":"lineSuffix")(r):t(r)}}const SA={name:"definition",tokenize:DA},wA={partial:!0,tokenize:IA};function DA(e,t,n){const i=this;let r;return o;function o(p){return e.enter("definition"),s(p)}function s(p){return Tv.call(i,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return r=Er(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),l):n(p)}function l(p){return Ct(p)?Io(e,c)(p):c(p)}function c(p){return vv(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(wA,h,h)(p)}function h(p){return De(p)?Re(e,f,"whitespace")(p):f(p)}function f(p){return p===null||ue(p)?(e.exit("definition"),i.parser.defined.push(r),t(p)):n(p)}}function IA(e,t,n){return i;function i(a){return Ct(a)?Io(e,r)(a):n(a)}function r(a){return Ev(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return De(a)?Re(e,s,"whitespace")(a):s(a)}function s(a){return a===null||ue(a)?t(a):n(a)}}const kA={name:"hardBreakEscape",tokenize:CA};function CA(e,t,n){return i;function i(o){return e.enter("hardBreakEscape"),e.consume(o),r}function r(o){return ue(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const AA={name:"headingAtx",resolve:OA,tokenize:NA};function OA(e,t){let n=e.length-2,i=3,r,o;return e[i][1].type==="whitespace"&&(i+=2),n-2>i&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&e[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:e[i][1].start,end:e[n][1].end},o={type:"chunkText",start:e[i][1].start,end:e[n][1].end,contentType:"text"},In(e,i,n-i+1,[["enter",r,t],["enter",o,t],["exit",o,t],["exit",r,t]])),e}function NA(e,t,n){let i=0;return r;function r(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&i++<6?(e.consume(d),s):d===null||Ct(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||ue(d)?(e.exit("atxHeading"),t(d)):De(d)?Re(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||Ct(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const PA=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],yg=["pre","script","style","textarea"],MA={concrete:!0,name:"htmlFlow",resolveTo:FA,tokenize:BA},RA={partial:!0,tokenize:jA},LA={partial:!0,tokenize:zA};function FA(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function BA(e,t,n){const i=this;let r,o,s,a,l;return c;function c(S){return d(S)}function d(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),h}function h(S){return S===33?(e.consume(S),f):S===47?(e.consume(S),o=!0,w):S===63?(e.consume(S),r=3,i.interrupt?t:E):xn(S)?(e.consume(S),s=String.fromCharCode(S),P):n(S)}function f(S){return S===45?(e.consume(S),r=2,p):S===91?(e.consume(S),r=5,a=0,_):xn(S)?(e.consume(S),r=4,i.interrupt?t:E):n(S)}function p(S){return S===45?(e.consume(S),i.interrupt?t:E):n(S)}function _(S){const Ae="CDATA[";return S===Ae.charCodeAt(a++)?(e.consume(S),a===Ae.length?i.interrupt?t:Z:_):n(S)}function w(S){return xn(S)?(e.consume(S),s=String.fromCharCode(S),P):n(S)}function P(S){if(S===null||S===47||S===62||Ct(S)){const Ae=S===47,ut=s.toLowerCase();return!Ae&&!o&&yg.includes(ut)?(r=1,i.interrupt?t(S):Z(S)):PA.includes(s.toLowerCase())?(r=6,Ae?(e.consume(S),m):i.interrupt?t(S):Z(S)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(S):o?v(S):b(S))}return S===45||Bt(S)?(e.consume(S),s+=String.fromCharCode(S),P):n(S)}function m(S){return S===62?(e.consume(S),i.interrupt?t:Z):n(S)}function v(S){return De(S)?(e.consume(S),v):Q(S)}function b(S){return S===47?(e.consume(S),Q):S===58||S===95||xn(S)?(e.consume(S),C):De(S)?(e.consume(S),b):Q(S)}function C(S){return S===45||S===46||S===58||S===95||Bt(S)?(e.consume(S),C):R(S)}function R(S){return S===61?(e.consume(S),y):De(S)?(e.consume(S),R):b(S)}function y(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),l=S,L):De(S)?(e.consume(S),y):B(S)}function L(S){return S===l?(e.consume(S),l=null,V):S===null||ue(S)?n(S):(e.consume(S),L)}function B(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||Ct(S)?R(S):(e.consume(S),B)}function V(S){return S===47||S===62||De(S)?b(S):n(S)}function Q(S){return S===62?(e.consume(S),G):n(S)}function G(S){return S===null||ue(S)?Z(S):De(S)?(e.consume(S),G):n(S)}function Z(S){return S===45&&r===2?(e.consume(S),ae):S===60&&r===1?(e.consume(S),Te):S===62&&r===4?(e.consume(S),de):S===63&&r===3?(e.consume(S),E):S===93&&r===5?(e.consume(S),X):ue(S)&&(r===6||r===7)?(e.exit("htmlFlowData"),e.check(RA,me,be)(S)):S===null||ue(S)?(e.exit("htmlFlowData"),be(S)):(e.consume(S),Z)}function be(S){return e.check(LA,se,me)(S)}function se(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),te}function te(S){return S===null||ue(S)?be(S):(e.enter("htmlFlowData"),Z(S))}function ae(S){return S===45?(e.consume(S),E):Z(S)}function Te(S){return S===47?(e.consume(S),s="",q):Z(S)}function q(S){if(S===62){const Ae=s.toLowerCase();return yg.includes(Ae)?(e.consume(S),de):Z(S)}return xn(S)&&s.length<8?(e.consume(S),s+=String.fromCharCode(S),q):Z(S)}function X(S){return S===93?(e.consume(S),E):Z(S)}function E(S){return S===62?(e.consume(S),de):S===45&&r===2?(e.consume(S),E):Z(S)}function de(S){return S===null||ue(S)?(e.exit("htmlFlowData"),me(S)):(e.consume(S),de)}function me(S){return e.exit("htmlFlow"),t(S)}}function zA(e,t,n){const i=this;return r;function r(s){return ue(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return i.parser.lazy[i.now().line]?n(s):t(s)}}function jA(e,t,n){return i;function i(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Ml,t,n)}}const UA={name:"htmlText",tokenize:HA};function HA(e,t,n){const i=this;let r,o,s;return a;function a(E){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(E),l}function l(E){return E===33?(e.consume(E),c):E===47?(e.consume(E),R):E===63?(e.consume(E),b):xn(E)?(e.consume(E),B):n(E)}function c(E){return E===45?(e.consume(E),d):E===91?(e.consume(E),o=0,_):xn(E)?(e.consume(E),v):n(E)}function d(E){return E===45?(e.consume(E),p):n(E)}function h(E){return E===null?n(E):E===45?(e.consume(E),f):ue(E)?(s=h,Te(E)):(e.consume(E),h)}function f(E){return E===45?(e.consume(E),p):h(E)}function p(E){return E===62?ae(E):E===45?f(E):h(E)}function _(E){const de="CDATA[";return E===de.charCodeAt(o++)?(e.consume(E),o===de.length?w:_):n(E)}function w(E){return E===null?n(E):E===93?(e.consume(E),P):ue(E)?(s=w,Te(E)):(e.consume(E),w)}function P(E){return E===93?(e.consume(E),m):w(E)}function m(E){return E===62?ae(E):E===93?(e.consume(E),m):w(E)}function v(E){return E===null||E===62?ae(E):ue(E)?(s=v,Te(E)):(e.consume(E),v)}function b(E){return E===null?n(E):E===63?(e.consume(E),C):ue(E)?(s=b,Te(E)):(e.consume(E),b)}function C(E){return E===62?ae(E):b(E)}function R(E){return xn(E)?(e.consume(E),y):n(E)}function y(E){return E===45||Bt(E)?(e.consume(E),y):L(E)}function L(E){return ue(E)?(s=L,Te(E)):De(E)?(e.consume(E),L):ae(E)}function B(E){return E===45||Bt(E)?(e.consume(E),B):E===47||E===62||Ct(E)?V(E):n(E)}function V(E){return E===47?(e.consume(E),ae):E===58||E===95||xn(E)?(e.consume(E),Q):ue(E)?(s=V,Te(E)):De(E)?(e.consume(E),V):ae(E)}function Q(E){return E===45||E===46||E===58||E===95||Bt(E)?(e.consume(E),Q):G(E)}function G(E){return E===61?(e.consume(E),Z):ue(E)?(s=G,Te(E)):De(E)?(e.consume(E),G):V(E)}function Z(E){return E===null||E===60||E===61||E===62||E===96?n(E):E===34||E===39?(e.consume(E),r=E,be):ue(E)?(s=Z,Te(E)):De(E)?(e.consume(E),Z):(e.consume(E),se)}function be(E){return E===r?(e.consume(E),r=void 0,te):E===null?n(E):ue(E)?(s=be,Te(E)):(e.consume(E),be)}function se(E){return E===null||E===34||E===39||E===60||E===61||E===96?n(E):E===47||E===62||Ct(E)?V(E):(e.consume(E),se)}function te(E){return E===47||E===62||Ct(E)?V(E):n(E)}function ae(E){return E===62?(e.consume(E),e.exit("htmlTextData"),e.exit("htmlText"),t):n(E)}function Te(E){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),q}function q(E){return De(E)?Re(e,X,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):X(E)}function X(E){return e.enter("htmlTextData"),s(E)}}const Zf={name:"labelEnd",resolveAll:VA,resolveTo:YA,tokenize:QA},$A={tokenize:GA},qA={tokenize:KA},WA={tokenize:XA};function VA(e){let t=-1;const n=[];for(;++t<e.length;){const i=e[t][1];if(n.push(e[t]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",t+=r}}return e.length!==n.length&&In(e,0,e.length,n),e}function YA(e,t){let n=e.length,i=0,r,o,s,a;for(;n--;)if(r=e[n][1],o){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;e[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(o=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(s=n);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[o+i+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,t],["enter",c,t]],a=Xt(a,e.slice(o+1,o+i+3)),a=Xt(a,[["enter",d,t]]),a=Xt(a,Jf(t.parser.constructs.insideSpan.null,e.slice(o+i+4,s-3),t)),a=Xt(a,[["exit",d,t],e[s-2],e[s-1],["exit",c,t]]),a=Xt(a,e.slice(s+1)),a=Xt(a,[["exit",l,t]]),In(e,o,e.length,a),e}function QA(e,t,n){const i=this;let r=i.events.length,o,s;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){o=i.events[r][1];break}return a;function a(f){return o?o._inactive?h(f):(s=i.parser.defined.includes(Er(i.sliceSerialize({start:o.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),l):n(f)}function l(f){return f===40?e.attempt($A,d,s?d:h)(f):f===91?e.attempt(qA,d,s?c:h)(f):s?d(f):h(f)}function c(f){return e.attempt(WA,d,h)(f)}function d(f){return t(f)}function h(f){return o._balanced=!0,n(f)}}function GA(e,t,n){return i;function i(h){return e.enter("resource"),e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),r}function r(h){return Ct(h)?Io(e,o)(h):o(h)}function o(h){return h===41?d(h):vv(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function s(h){return Ct(h)?Io(e,l)(h):d(h)}function a(h){return n(h)}function l(h){return h===34||h===39||h===40?Ev(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):d(h)}function c(h){return Ct(h)?Io(e,d)(h):d(h)}function d(h){return h===41?(e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),e.exit("resource"),t):n(h)}}function KA(e,t,n){const i=this;return r;function r(a){return Tv.call(i,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return i.parser.defined.includes(Er(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function XA(e,t,n){return i;function i(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),r}function r(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const JA={name:"labelStartImage",resolveAll:Zf.resolveAll,tokenize:ZA};function ZA(e,t,n){const i=this;return r;function r(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):t(a)}}const e3={name:"labelStartLink",resolveAll:Zf.resolveAll,tokenize:t3};function t3(e,t,n){const i=this;return r;function r(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(s):t(s)}}const Iu={name:"lineEnding",tokenize:n3};function n3(e,t){return n;function n(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),Re(e,t,"linePrefix")}}const ka={name:"thematicBreak",tokenize:i3};function i3(e,t,n){let i=0,r;return o;function o(c){return e.enter("thematicBreak"),s(c)}function s(c){return r=c,a(c)}function a(c){return c===r?(e.enter("thematicBreakSequence"),l(c)):i>=3&&(c===null||ue(c))?(e.exit("thematicBreak"),t(c)):n(c)}function l(c){return c===r?(e.consume(c),i++,l):(e.exit("thematicBreakSequence"),De(c)?Re(e,a,"whitespace")(c):a(c))}}const xt={continuation:{tokenize:a3},exit:u3,name:"list",tokenize:s3},r3={partial:!0,tokenize:c3},o3={partial:!0,tokenize:l3};function s3(e,t,n){const i=this,r=i.events[i.events.length-1];let o=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,s=0;return a;function a(p){const _=i.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(_==="listUnordered"?!i.containerState.marker||p===i.containerState.marker:jc(p)){if(i.containerState.type||(i.containerState.type=_,e.enter(_,{_container:!0})),_==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(ka,n,c)(p):c(p);if(!i.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(p)}return n(p)}function l(p){return jc(p)&&++s<10?(e.consume(p),l):(!i.interrupt||s<2)&&(i.containerState.marker?p===i.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):n(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||p,e.check(Ml,i.interrupt?n:d,e.attempt(r3,f,h))}function d(p){return i.containerState.initialBlankLine=!0,o++,f(p)}function h(p){return De(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return i.containerState.size=o+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function a3(e,t,n){const i=this;return i.containerState._closeFlow=void 0,e.check(Ml,r,o);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,Re(e,t,"listItemIndent",i.containerState.size+1)(a)}function o(a){return i.containerState.furtherBlankLines||!De(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,s(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(o3,t,s)(a))}function s(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,Re(e,e.attempt(xt,t,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function l3(e,t,n){const i=this;return Re(e,r,"listItemIndent",i.containerState.size+1);function r(o){const s=i.events[i.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===i.containerState.size?t(o):n(o)}}function u3(e){e.exit(this.containerState.type)}function c3(e,t,n){const i=this;return Re(e,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(o){const s=i.events[i.events.length-1];return!De(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const bg={name:"setextUnderline",resolveTo:d3,tokenize:h3};function d3(e,t){let n=e.length,i,r,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){i=n;break}e[n][1].type==="paragraph"&&(r=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[r][1].type="setextHeadingText",o?(e.splice(r,0,["enter",s,t]),e.splice(o+1,0,["exit",e[i][1],t]),e[i][1].end={...e[o][1].end}):e[i][1]=s,e.push(["exit",s,t]),e}function h3(e,t,n){const i=this;let r;return o;function o(c){let d=i.events.length,h;for(;d--;)if(i.events[d][1].type!=="lineEnding"&&i.events[d][1].type!=="linePrefix"&&i.events[d][1].type!=="content"){h=i.events[d][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||h)?(e.enter("setextHeadingLine"),r=c,s(c)):n(c)}function s(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===r?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),De(c)?Re(e,l,"lineSuffix")(c):l(c))}function l(c){return c===null||ue(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const f3={tokenize:p3};function p3(e){const t=this,n=e.attempt(Ml,i,e.attempt(this.parser.constructs.flowInitial,r,Re(e,e.attempt(this.parser.constructs.flow,r,e.attempt(vA,r)),"linePrefix")));return n;function i(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const m3={resolveAll:xv()},g3=_v("string"),y3=_v("text");function _v(e){return{resolveAll:xv(e==="text"?b3:void 0),tokenize:t};function t(n){const i=this,r=this.parser.constructs[e],o=n.attempt(r,s,a);return s;function s(d){return c(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return c(d)?(n.exit("data"),o(d)):(n.consume(d),l)}function c(d){if(d===null)return!0;const h=r[d];let f=-1;if(h)for(;++f<h.length;){const p=h[f];if(!p.previous||p.previous.call(i,i.previous))return!0}return!1}}}function xv(e){return t;function t(n,i){let r=-1,o;for(;++r<=n.length;)o===void 0?n[r]&&n[r][1].type==="data"&&(o=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==o+2&&(n[o][1].end=n[r-1][1].end,n.splice(o+2,r-o-2),r=o+2),o=void 0);return e?e(n,i):n}}function b3(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const i=e[n-1][1],r=t.sliceStream(i);let o=r.length,s=-1,a=0,l;for(;o--;){const c=r[o];if(typeof c=="string"){for(s=c.length;c.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(c===-2)l=!0,a++;else if(c!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const c={type:n===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...c.start},i.start.offset===i.end.offset?Object.assign(i,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const v3={42:xt,43:xt,45:xt,48:xt,49:xt,50:xt,51:xt,52:xt,53:xt,54:xt,55:xt,56:xt,57:xt,62:mv},T3={91:SA},E3={[-2]:Du,[-1]:Du,32:Du},_3={35:AA,42:ka,45:[bg,ka],60:MA,61:bg,95:ka,96:gg,126:gg},x3={38:yv,92:gv},S3={[-5]:Iu,[-4]:Iu,[-3]:Iu,33:JA,38:yv,42:Uc,60:[eA,UA],91:e3,92:[kA,gv],93:Zf,95:Uc,96:fA},w3={null:[Uc,m3]},D3={null:[42,95]},I3={null:[]},k3=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:D3,contentInitial:T3,disable:I3,document:v3,flow:_3,flowInitial:E3,insideSpan:w3,string:x3,text:S3},Symbol.toStringTag,{value:"Module"}));function C3(e,t,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},o=[];let s=[],a=[];const l={attempt:L(R),check:L(y),consume:v,enter:b,exit:C,interrupt:L(y,{interrupt:!0})},c={code:null,containerState:{},defineSkip:w,events:[],now:_,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:h};let d=t.tokenize.call(c,l);return t.resolveAll&&o.push(t),c;function h(G){return s=Xt(s,G),P(),s[s.length-1]!==null?[]:(B(t,0),c.events=Jf(o,c.events,c),c.events)}function f(G,Z){return O3(p(G),Z)}function p(G){return A3(s,G)}function _(){const{_bufferIndex:G,_index:Z,line:be,column:se,offset:te}=i;return{_bufferIndex:G,_index:Z,line:be,column:se,offset:te}}function w(G){r[G.line]=G.column,Q()}function P(){let G;for(;i._index<s.length;){const Z=s[i._index];if(typeof Z=="string")for(G=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===G&&i._bufferIndex<Z.length;)m(Z.charCodeAt(i._bufferIndex));else m(Z)}}function m(G){d=d(G)}function v(G){ue(G)?(i.line++,i.column=1,i.offset+=G===-3?2:1,Q()):G!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++)),c.previous=G}function b(G,Z){const be=Z||{};return be.type=G,be.start=_(),c.events.push(["enter",be,c]),a.push(be),be}function C(G){const Z=a.pop();return Z.end=_(),c.events.push(["exit",Z,c]),Z}function R(G,Z){B(G,Z.from)}function y(G,Z){Z.restore()}function L(G,Z){return be;function be(se,te,ae){let Te,q,X,E;return Array.isArray(se)?me(se):"tokenize"in se?me([se]):de(se);function de(xe){return $t;function $t(gn){const qn=gn!==null&&xe[gn],$e=gn!==null&&xe.null,sn=[...Array.isArray(qn)?qn:qn?[qn]:[],...Array.isArray($e)?$e:$e?[$e]:[]];return me(sn)(gn)}}function me(xe){return Te=xe,q=0,xe.length===0?ae:S(xe[q])}function S(xe){return $t;function $t(gn){return E=V(),X=xe,xe.partial||(c.currentConstruct=xe),xe.name&&c.parser.constructs.disable.null.includes(xe.name)?ut():xe.tokenize.call(Z?Object.assign(Object.create(c),Z):c,l,Ae,ut)(gn)}}function Ae(xe){return G(X,E),te}function ut(xe){return E.restore(),++q<Te.length?S(Te[q]):ae}}}function B(G,Z){G.resolveAll&&!o.includes(G)&&o.push(G),G.resolve&&In(c.events,Z,c.events.length-Z,G.resolve(c.events.slice(Z),c)),G.resolveTo&&(c.events=G.resolveTo(c.events,c))}function V(){const G=_(),Z=c.previous,be=c.currentConstruct,se=c.events.length,te=Array.from(a);return{from:se,restore:ae};function ae(){i=G,c.previous=Z,c.currentConstruct=be,c.events.length=se,a=te,Q()}}function Q(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function A3(e,t){const n=t.start._index,i=t.start._bufferIndex,r=t.end._index,o=t.end._bufferIndex;let s;if(n===r)s=[e[n].slice(i,o)];else{if(s=e.slice(n,r),i>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(i):s.shift()}o>0&&s.push(e[r].slice(0,o))}return s}function O3(e,t){let n=-1;const i=[];let r;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&r)continue;s=" ";break}default:s=String.fromCharCode(o)}r=o===-2,i.push(s)}return i.join("")}function N3(e){const i={constructs:zC([k3,...(e||{}).extensions||[]]),content:r(YC),defined:[],document:r(GC),flow:r(f3),lazy:{},string:r(g3),text:r(y3)};return i;function r(o){return s;function s(a){return C3(i,o,a)}}}function P3(e){for(;!bv(e););return e}const vg=/[\0\t\n\r]/g;function M3(){let e=1,t="",n=!0,i;return r;function r(o,s,a){const l=[];let c,d,h,f,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),h=0,t="",n&&(o.charCodeAt(0)===65279&&h++,n=void 0);h<o.length;){if(vg.lastIndex=h,c=vg.exec(o),f=c&&c.index!==void 0?c.index:o.length,p=o.charCodeAt(f),!c){t=o.slice(h);break}if(p===10&&h===f&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),h<f&&(l.push(o.slice(h,f)),e+=f-h),p){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:i=!0,e=1}h=f+1}return a&&(i&&l.push(-5),t&&l.push(t),l.push(null)),l}}const R3=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function L3(e){return e.replace(R3,F3)}function F3(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),o=r===120||r===88;return pv(n.slice(o?2:1),o?16:10)}return Xf(n)||e}const Sv={}.hasOwnProperty;function B3(e,t,n){return typeof t!="string"&&(n=t,t=void 0),z3(n)(P3(N3(n).document().write(M3()(e,t,!0))))}function z3(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Fs),autolinkProtocol:V,autolinkEmail:V,atxHeading:o(Rs),blockQuote:o($e),characterEscape:V,characterReference:V,codeFenced:o(sn),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(sn,s),codeText:o(Ms,s),codeTextData:V,data:V,codeFlowValue:V,definition:o(Ul),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(On),hardBreakEscape:o(Ls),hardBreakTrailing:o(Ls),htmlFlow:o(Hr,s),htmlFlowData:V,htmlText:o(Hr,s),htmlTextData:V,image:o(Hl),label:s,link:o(Fs),listItem:o($l),listItemValue:f,listOrdered:o(Bs,h),listUnordered:o(Bs),paragraph:o(Nn),reference:S,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Rs),strong:o(_i),thematicBreak:o($r)},exit:{atxHeading:l(),atxHeadingSequence:R,autolink:l(),autolinkEmail:qn,autolinkProtocol:gn,blockQuote:l(),characterEscapeValue:Q,characterReferenceMarkerHexadecimal:ut,characterReferenceMarkerNumeric:ut,characterReferenceValue:xe,characterReference:$t,codeFenced:l(P),codeFencedFence:w,codeFencedFenceInfo:p,codeFencedFenceMeta:_,codeFlowValue:Q,codeIndented:l(m),codeText:l(te),codeTextData:Q,data:Q,definition:l(),definitionDestinationString:C,definitionLabelString:v,definitionTitleString:b,emphasis:l(),hardBreakEscape:l(Z),hardBreakTrailing:l(Z),htmlFlow:l(be),htmlFlowData:Q,htmlText:l(se),htmlTextData:Q,image:l(Te),label:X,labelText:q,lineEnding:G,link:l(ae),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Ae,resourceDestinationString:E,resourceTitleString:de,resource:me,setextHeading:l(B),setextHeadingLineSequence:L,setextHeadingText:y,strong:l(),thematicBreak:l()}};wv(t,(e||{}).mdastExtensions||[]);const n={};return i;function i(M){let W={type:"root",children:[]};const ce={stack:[W],tokenStack:[],config:t,enter:a,exit:c,buffer:s,resume:d,data:n},ye=[];let Ie=-1;for(;++Ie<M.length;)if(M[Ie][1].type==="listOrdered"||M[Ie][1].type==="listUnordered")if(M[Ie][0]==="enter")ye.push(Ie);else{const Ye=ye.pop();Ie=r(M,Ye,Ie)}for(Ie=-1;++Ie<M.length;){const Ye=t[M[Ie][0]];Sv.call(Ye,M[Ie][1].type)&&Ye[M[Ie][1].type].call(Object.assign({sliceSerialize:M[Ie][2].sliceSerialize},ce),M[Ie][1])}if(ce.tokenStack.length>0){const Ye=ce.tokenStack[ce.tokenStack.length-1];(Ye[1]||Tg).call(ce,void 0,Ye[0])}for(W.position={start:Qn(M.length>0?M[0][1].start:{line:1,column:1,offset:0}),end:Qn(M.length>0?M[M.length-2][1].end:{line:1,column:1,offset:0})},Ie=-1;++Ie<t.transforms.length;)W=t.transforms[Ie](W)||W;return W}function r(M,W,ce){let ye=W-1,Ie=-1,Ye=!1,yn,qt,Wn,xi;for(;++ye<=ce;){const ct=M[ye];switch(ct[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ct[0]==="enter"?Ie++:Ie--,xi=void 0;break}case"lineEndingBlank":{ct[0]==="enter"&&(yn&&!xi&&!Ie&&!Wn&&(Wn=ye),xi=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:xi=void 0}if(!Ie&&ct[0]==="enter"&&ct[1].type==="listItemPrefix"||Ie===-1&&ct[0]==="exit"&&(ct[1].type==="listUnordered"||ct[1].type==="listOrdered")){if(yn){let an=ye;for(qt=void 0;an--;){const Wt=M[an];if(Wt[1].type==="lineEnding"||Wt[1].type==="lineEndingBlank"){if(Wt[0]==="exit")continue;qt&&(M[qt][1].type="lineEndingBlank",Ye=!0),Wt[1].type="lineEnding",qt=an}else if(!(Wt[1].type==="linePrefix"||Wt[1].type==="blockQuotePrefix"||Wt[1].type==="blockQuotePrefixWhitespace"||Wt[1].type==="blockQuoteMarker"||Wt[1].type==="listItemIndent"))break}Wn&&(!qt||Wn<qt)&&(yn._spread=!0),yn.end=Object.assign({},qt?M[qt][1].start:ct[1].end),M.splice(qt||ye,0,["exit",yn,ct[2]]),ye++,ce++}if(ct[1].type==="listItemPrefix"){const an={type:"listItem",_spread:!1,start:Object.assign({},ct[1].start),end:void 0};yn=an,M.splice(ye,0,["enter",an,ct[2]]),ye++,ce++,Wn=void 0,xi=!0}}}return M[W][1]._spread=Ye,ce}function o(M,W){return ce;function ce(ye){a.call(this,M(ye),ye),W&&W.call(this,ye)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(M,W,ce){this.stack[this.stack.length-1].children.push(M),this.stack.push(M),this.tokenStack.push([W,ce||void 0]),M.position={start:Qn(W.start),end:void 0}}function l(M){return W;function W(ce){M&&M.call(this,ce),c.call(this,ce)}}function c(M,W){const ce=this.stack.pop(),ye=this.tokenStack.pop();if(ye)ye[0].type!==M.type&&(W?W.call(this,M,ye[0]):(ye[1]||Tg).call(this,M,ye[0]));else throw new Error("Cannot close `"+M.type+"` ("+Do({start:M.start,end:M.end})+"): it’s not open");ce.position.end=Qn(M.end)}function d(){return FC(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function f(M){if(this.data.expectingFirstListItemValue){const W=this.stack[this.stack.length-2];W.start=Number.parseInt(this.sliceSerialize(M),10),this.data.expectingFirstListItemValue=void 0}}function p(){const M=this.resume(),W=this.stack[this.stack.length-1];W.lang=M}function _(){const M=this.resume(),W=this.stack[this.stack.length-1];W.meta=M}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function P(){const M=this.resume(),W=this.stack[this.stack.length-1];W.value=M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const M=this.resume(),W=this.stack[this.stack.length-1];W.value=M.replace(/(\r?\n|\r)$/g,"")}function v(M){const W=this.resume(),ce=this.stack[this.stack.length-1];ce.label=W,ce.identifier=Er(this.sliceSerialize(M)).toLowerCase()}function b(){const M=this.resume(),W=this.stack[this.stack.length-1];W.title=M}function C(){const M=this.resume(),W=this.stack[this.stack.length-1];W.url=M}function R(M){const W=this.stack[this.stack.length-1];if(!W.depth){const ce=this.sliceSerialize(M).length;W.depth=ce}}function y(){this.data.setextHeadingSlurpLineEnding=!0}function L(M){const W=this.stack[this.stack.length-1];W.depth=this.sliceSerialize(M).codePointAt(0)===61?1:2}function B(){this.data.setextHeadingSlurpLineEnding=void 0}function V(M){const ce=this.stack[this.stack.length-1].children;let ye=ce[ce.length-1];(!ye||ye.type!=="text")&&(ye=zs(),ye.position={start:Qn(M.start),end:void 0},ce.push(ye)),this.stack.push(ye)}function Q(M){const W=this.stack.pop();W.value+=this.sliceSerialize(M),W.position.end=Qn(M.end)}function G(M){const W=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ce=W.children[W.children.length-1];ce.position.end=Qn(M.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(W.type)&&(V.call(this,M),Q.call(this,M))}function Z(){this.data.atHardBreak=!0}function be(){const M=this.resume(),W=this.stack[this.stack.length-1];W.value=M}function se(){const M=this.resume(),W=this.stack[this.stack.length-1];W.value=M}function te(){const M=this.resume(),W=this.stack[this.stack.length-1];W.value=M}function ae(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=W,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function Te(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=W,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function q(M){const W=this.sliceSerialize(M),ce=this.stack[this.stack.length-2];ce.label=L3(W),ce.identifier=Er(W).toLowerCase()}function X(){const M=this.stack[this.stack.length-1],W=this.resume(),ce=this.stack[this.stack.length-1];if(this.data.inReference=!0,ce.type==="link"){const ye=M.children;ce.children=ye}else ce.alt=W}function E(){const M=this.resume(),W=this.stack[this.stack.length-1];W.url=M}function de(){const M=this.resume(),W=this.stack[this.stack.length-1];W.title=M}function me(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function Ae(M){const W=this.resume(),ce=this.stack[this.stack.length-1];ce.label=W,ce.identifier=Er(this.sliceSerialize(M)).toLowerCase(),this.data.referenceType="full"}function ut(M){this.data.characterReferenceType=M.type}function xe(M){const W=this.sliceSerialize(M),ce=this.data.characterReferenceType;let ye;ce?(ye=pv(W,ce==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ye=Xf(W);const Ie=this.stack[this.stack.length-1];Ie.value+=ye}function $t(M){const W=this.stack.pop();W.position.end=Qn(M.end)}function gn(M){Q.call(this,M);const W=this.stack[this.stack.length-1];W.url=this.sliceSerialize(M)}function qn(M){Q.call(this,M);const W=this.stack[this.stack.length-1];W.url="mailto:"+this.sliceSerialize(M)}function $e(){return{type:"blockquote",children:[]}}function sn(){return{type:"code",lang:null,meta:null,value:""}}function Ms(){return{type:"inlineCode",value:""}}function Ul(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function On(){return{type:"emphasis",children:[]}}function Rs(){return{type:"heading",depth:0,children:[]}}function Ls(){return{type:"break"}}function Hr(){return{type:"html",value:""}}function Hl(){return{type:"image",title:null,url:"",alt:null}}function Fs(){return{type:"link",title:null,url:"",children:[]}}function Bs(M){return{type:"list",ordered:M.type==="listOrdered",start:null,spread:M._spread,children:[]}}function $l(M){return{type:"listItem",spread:M._spread,checked:null,children:[]}}function Nn(){return{type:"paragraph",children:[]}}function _i(){return{type:"strong",children:[]}}function zs(){return{type:"text",value:""}}function $r(){return{type:"thematicBreak"}}}function Qn(e){return{line:e.line,column:e.column,offset:e.offset}}function wv(e,t){let n=-1;for(;++n<t.length;){const i=t[n];Array.isArray(i)?wv(e,i):j3(e,i)}}function j3(e,t){let n;for(n in t)if(Sv.call(t,n))switch(n){case"canContainEols":{const i=t[n];i&&e[n].push(...i);break}case"transforms":{const i=t[n];i&&e[n].push(...i);break}case"enter":case"exit":{const i=t[n];i&&Object.assign(e[n],i);break}}}function Tg(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Do({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Do({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Do({start:t.start,end:t.end})+") is still open")}function U3(e){const t=this;t.parser=n;function n(i){return B3(i,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function H3(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function $3(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function q3(e,t){const n=t.value?t.value+`
`:"",i={};t.lang&&(i.className=["language-"+t.lang]);let r={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return t.meta&&(r.data={meta:t.meta}),e.patch(t,r),r=e.applyData(t,r),r={type:"element",tagName:"pre",properties:{},children:[r]},e.patch(t,r),r}function W3(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function V3(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Y3(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(t.identifier).toUpperCase(),r=Fr(i.toLowerCase()),o=e.footnoteOrder.indexOf(i);let s,a=e.footnoteCounts.get(i);a===void 0?(a=0,e.footnoteOrder.push(i),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(i,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,c),e.applyData(t,c)}function Q3(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function G3(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Dv(e,t){const n=t.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+i}];const r=e.all(t),o=r[0];o&&o.type==="text"?o.value="["+o.value:r.unshift({type:"text",value:"["});const s=r[r.length-1];return s&&s.type==="text"?s.value+=i:r.push({type:"text",value:i}),r}function K3(e,t){const n=String(t.identifier).toUpperCase(),i=e.definitionById.get(n);if(!i)return Dv(e,t);const r={src:Fr(i.url||""),alt:t.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,o),e.applyData(t,o)}function X3(e,t){const n={src:Fr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const i={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,i),e.applyData(t,i)}function J3(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,i),e.applyData(t,i)}function Z3(e,t){const n=String(t.identifier).toUpperCase(),i=e.definitionById.get(n);if(!i)return Dv(e,t);const r={href:Fr(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function e6(e,t){const n={href:Fr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const i={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function t6(e,t,n){const i=e.all(t),r=n?n6(n):Iv(t),o={},s=[];if(typeof t.checked=="boolean"){const d=i[0];let h;d&&d.type==="element"&&d.tagName==="p"?h=d:(h={type:"element",tagName:"p",properties:{},children:[]},i.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<i.length;){const d=i[a];(r||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!r?s.push(...d.children):s.push(d)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,c),e.applyData(t,c)}function n6(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let i=-1;for(;!t&&++i<n.length;)t=Iv(n[i])}return t}function Iv(e){const t=e.spread;return t??e.children.length>1}function i6(e,t){const n={},i=e.all(t);let r=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++r<i.length;){const s=i[r];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function r6(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function o6(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function s6(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function a6(e,t){const n=e.all(t),i=n.shift(),r=[];if(i){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(t.children[0],s),r.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=An(t.children[1]),l=Pl(t.children[t.children.length-1]);a&&l&&(s.position={start:a,end:l}),r.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function l6(e,t,n){const i=n?n.children:void 0,o=(i?i.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let l=-1;const c=[];for(;++l<a;){const h=t.children[l],f={},p=s?s[l]:void 0;p&&(f.align=p);let _={type:"element",tagName:o,properties:f,children:[]};h&&(_.children=e.all(h),e.patch(h,_),_=e.applyData(h,_)),c.push(_)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function u6(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Eg=9,_g=32;function c6(e){const t=String(e),n=/\r?\n|\r/g;let i=n.exec(t),r=0;const o=[];for(;i;)o.push(xg(t.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(t);return o.push(xg(t.slice(r),r>0,!1)),o.join("")}function xg(e,t,n){let i=0,r=e.length;if(t){let o=e.codePointAt(i);for(;o===Eg||o===_g;)i++,o=e.codePointAt(i)}if(n){let o=e.codePointAt(r-1);for(;o===Eg||o===_g;)r--,o=e.codePointAt(r-1)}return r>i?e.slice(i,r):""}function d6(e,t){const n={type:"text",value:c6(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function h6(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const f6={blockquote:H3,break:$3,code:q3,delete:W3,emphasis:V3,footnoteReference:Y3,heading:Q3,html:G3,imageReference:K3,image:X3,inlineCode:J3,linkReference:Z3,link:e6,listItem:t6,list:i6,paragraph:r6,root:o6,strong:s6,table:a6,tableCell:u6,tableRow:l6,text:d6,thematicBreak:h6,toml:ua,yaml:ua,definition:ua,footnoteDefinition:ua};function ua(){}const kv=-1,Rl=0,ko=1,al=2,ep=3,tp=4,np=5,ip=6,Cv=7,Av=8,Sg=typeof self=="object"?self:globalThis,p6=(e,t)=>{const n=(r,o)=>(e.set(o,r),r),i=r=>{if(e.has(r))return e.get(r);const[o,s]=t[r];switch(o){case Rl:case kv:return n(s,r);case ko:{const a=n([],r);for(const l of s)a.push(i(l));return a}case al:{const a=n({},r);for(const[l,c]of s)a[i(l)]=i(c);return a}case ep:return n(new Date(s),r);case tp:{const{source:a,flags:l}=s;return n(new RegExp(a,l),r)}case np:{const a=n(new Map,r);for(const[l,c]of s)a.set(i(l),i(c));return a}case ip:{const a=n(new Set,r);for(const l of s)a.add(i(l));return a}case Cv:{const{name:a,message:l}=s;return n(new Sg[a](l),r)}case Av:return n(BigInt(s),r);case"BigInt":return n(Object(BigInt(s)),r);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(new Sg[o](s),r)};return i},wg=e=>p6(new Map,e)(0),Ji="",{toString:m6}={},{keys:g6}=Object,so=e=>{const t=typeof e;if(t!=="object"||!e)return[Rl,t];const n=m6.call(e).slice(8,-1);switch(n){case"Array":return[ko,Ji];case"Object":return[al,Ji];case"Date":return[ep,Ji];case"RegExp":return[tp,Ji];case"Map":return[np,Ji];case"Set":return[ip,Ji];case"DataView":return[ko,n]}return n.includes("Array")?[ko,n]:n.includes("Error")?[Cv,n]:[al,n]},ca=([e,t])=>e===Rl&&(t==="function"||t==="symbol"),y6=(e,t,n,i)=>{const r=(s,a)=>{const l=i.push(s)-1;return n.set(a,l),l},o=s=>{if(n.has(s))return n.get(s);let[a,l]=so(s);switch(a){case Rl:{let d=s;switch(l){case"bigint":a=Av,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return r([kv],s)}return r([a,d],s)}case ko:{if(l){let f=s;return l==="DataView"?f=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(f=new Uint8Array(s)),r([l,[...f]],s)}const d=[],h=r([a,d],s);for(const f of s)d.push(o(f));return h}case al:{if(l)switch(l){case"BigInt":return r([l,s.toString()],s);case"Boolean":case"Number":case"String":return r([l,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const d=[],h=r([a,d],s);for(const f of g6(s))(e||!ca(so(s[f])))&&d.push([o(f),o(s[f])]);return h}case ep:return r([a,s.toISOString()],s);case tp:{const{source:d,flags:h}=s;return r([a,{source:d,flags:h}],s)}case np:{const d=[],h=r([a,d],s);for(const[f,p]of s)(e||!(ca(so(f))||ca(so(p))))&&d.push([o(f),o(p)]);return h}case ip:{const d=[],h=r([a,d],s);for(const f of s)(e||!ca(so(f)))&&d.push(o(f));return h}}const{message:c}=s;return r([a,{name:l,message:c}],s)};return o},Dg=(e,{json:t,lossy:n}={})=>{const i=[];return y6(!(t||n),!!t,new Map,i)(e),i},Ar=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?wg(Dg(e,t)):structuredClone(e):(e,t)=>wg(Dg(e,t));function b6(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function v6(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function T6(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||b6,i=e.options.footnoteBackLabel||v6,r=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[l]);if(!c)continue;const d=e.all(c),h=String(c.identifier).toUpperCase(),f=Fr(h.toLowerCase());let p=0;const _=[],w=e.footnoteCounts.get(h);for(;w!==void 0&&++p<=w;){_.length>0&&_.push({type:"text",value:" "});let v=typeof n=="string"?n:n(l,p);typeof v=="string"&&(v={type:"text",value:v}),_.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,p),className:["data-footnote-backref"]},children:Array.isArray(v)?v:[v]})}const P=d[d.length-1];if(P&&P.type==="element"&&P.tagName==="p"){const v=P.children[P.children.length-1];v&&v.type==="text"?v.value+=" ":P.children.push({type:"text",value:" "}),P.children.push(..._)}else d.push(..._);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(c,m),a.push(m)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Ar(s),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Ov=function(e){if(e==null)return S6;if(typeof e=="function")return Ll(e);if(typeof e=="object")return Array.isArray(e)?E6(e):_6(e);if(typeof e=="string")return x6(e);throw new Error("Expected function, string, or object as test")};function E6(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ov(e[n]);return Ll(i);function i(...r){let o=-1;for(;++o<t.length;)if(t[o].apply(this,r))return!0;return!1}}function _6(e){const t=e;return Ll(n);function n(i){const r=i;let o;for(o in e)if(r[o]!==t[o])return!1;return!0}}function x6(e){return Ll(t);function t(n){return n&&n.type===e}}function Ll(e){return t;function t(n,i,r){return!!(w6(n)&&e.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function S6(){return!0}function w6(e){return e!==null&&typeof e=="object"&&"type"in e}const Nv=[],D6=!0,Ig=!1,I6="skip";function k6(e,t,n,i){let r;typeof t=="function"&&typeof n!="function"?(i=n,n=t):r=t;const o=Ov(r),s=i?-1:1;a(e,void 0,[])();function a(l,c,d){const h=l&&typeof l=="object"?l:{};if(typeof h.type=="string"){const p=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=Nv,_,w,P;if((!t||o(l,c,d[d.length-1]||void 0))&&(p=C6(n(l,d)),p[0]===Ig))return p;if("children"in l&&l.children){const m=l;if(m.children&&p[0]!==I6)for(w=(i?m.children.length:-1)+s,P=d.concat(m);w>-1&&w<m.children.length;){const v=m.children[w];if(_=a(v,w,P)(),_[0]===Ig)return _;w=typeof _[1]=="number"?_[1]:w+s}}return p}}}function C6(e){return Array.isArray(e)?e:typeof e=="number"?[D6,e]:e==null?Nv:[e]}function rp(e,t,n,i){let r,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,r=n):(o=t,s=n,r=i),k6(e,o,a,r);function a(l,c){const d=c[c.length-1],h=d?d.children.indexOf(l):void 0;return s(l,h,d)}}const Hc={}.hasOwnProperty,A6={};function O6(e,t){const n=t||A6,i=new Map,r=new Map,o=new Map,s={...f6,...n.handlers},a={all:c,applyData:P6,definitionById:i,footnoteById:r,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:n,patch:N6,wrap:R6};return rp(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const h=d.type==="definition"?i:r,f=String(d.identifier).toUpperCase();h.has(f)||h.set(f,d)}}),a;function l(d,h){const f=d.type,p=a.handlers[f];if(Hc.call(a.handlers,f)&&p)return p(a,d,h);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in d){const{children:w,...P}=d,m=Ar(P);return m.children=a.all(d),m}return Ar(d)}return(a.options.unknownHandler||M6)(a,d,h)}function c(d){const h=[];if("children"in d){const f=d.children;let p=-1;for(;++p<f.length;){const _=a.one(f[p],d);if(_){if(p&&f[p-1].type==="break"&&(!Array.isArray(_)&&_.type==="text"&&(_.value=kg(_.value)),!Array.isArray(_)&&_.type==="element")){const w=_.children[0];w&&w.type==="text"&&(w.value=kg(w.value))}Array.isArray(_)?h.push(..._):h.push(_)}}}return h}}function N6(e,t){e.position&&(t.position=mC(e))}function P6(e,t){let n=t;if(e&&e.data){const i=e.data.hName,r=e.data.hChildren,o=e.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const s="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,Ar(o)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function M6(e,t){const n=t.data||{},i="value"in t&&!(Hc.call(n,"hProperties")||Hc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function R6(e,t){const n=[];let i=-1;for(t&&n.push({type:"text",value:`
`});++i<e.length;)i&&n.push({type:"text",value:`
`}),n.push(e[i]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function kg(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Cg(e,t){const n=O6(e,t),i=n.one(e,void 0),r=T6(n),o=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&o.children.push({type:"text",value:`
`},r),o}function L6(e,t){return e&&"run"in e?async function(n,i){const r=Cg(n,{file:i,...t});await e.run(r,i)}:function(n,i){return Cg(n,{file:i,...e||t})}}function Ag(e){if(e)throw e}var Ca=Object.prototype.hasOwnProperty,Pv=Object.prototype.toString,Og=Object.defineProperty,Ng=Object.getOwnPropertyDescriptor,Pg=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Pv.call(t)==="[object Array]"},Mg=function(t){if(!t||Pv.call(t)!=="[object Object]")return!1;var n=Ca.call(t,"constructor"),i=t.constructor&&t.constructor.prototype&&Ca.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!i)return!1;var r;for(r in t);return typeof r>"u"||Ca.call(t,r)},Rg=function(t,n){Og&&n.name==="__proto__"?Og(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Lg=function(t,n){if(n==="__proto__")if(Ca.call(t,n)){if(Ng)return Ng(t,n).value}else return;return t[n]},F6=function e(){var t,n,i,r,o,s,a=arguments[0],l=1,c=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<c;++l)if(t=arguments[l],t!=null)for(n in t)i=Lg(a,n),r=Lg(t,n),a!==r&&(d&&r&&(Mg(r)||(o=Pg(r)))?(o?(o=!1,s=i&&Pg(i)?i:[]):s=i&&Mg(i)?i:{},Rg(a,{name:n,newValue:e(d,s,r)})):typeof r<"u"&&Rg(a,{name:n,newValue:r}));return a};const ku=Mh(F6);function $c(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function B6(){const e=[],t={run:n,use:i};return t;function n(...r){let o=-1;const s=r.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...r);function a(l,...c){const d=e[++o];let h=-1;if(l){s(l);return}for(;++h<r.length;)(c[h]===null||c[h]===void 0)&&(c[h]=r[h]);r=c,d?z6(d,a)(...c):s(null,...c)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return e.push(r),t}}function z6(e,t){let n;return i;function i(...s){const a=e.length>s.length;let l;a&&s.push(r);try{l=e.apply(this,s)}catch(c){const d=c;if(a&&n)throw d;return r(d)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,r):l instanceof Error?r(l):o(l))}function r(s,...a){n||(n=!0,t(s,...a))}function o(s){r(null,s)}}const Tn={basename:j6,dirname:U6,extname:H6,join:$6,sep:"/"};function j6(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');As(e);let n=0,i=-1,r=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;r--;)if(e.codePointAt(r)===47){if(o){n=r+1;break}}else i<0&&(o=!0,i=r+1);return i<0?"":e.slice(n,i)}if(t===e)return"";let s=-1,a=t.length-1;for(;r--;)if(e.codePointAt(r)===47){if(o){n=r+1;break}}else s<0&&(o=!0,s=r+1),a>-1&&(e.codePointAt(r)===t.codePointAt(a--)?a<0&&(i=r):(a=-1,i=s));return n===i?i=s:i<0&&(i=e.length),e.slice(n,i)}function U6(e){if(As(e),e.length===0)return".";let t=-1,n=e.length,i;for(;--n;)if(e.codePointAt(n)===47){if(i){t=n;break}}else i||(i=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function H6(e){As(e);let t=e.length,n=-1,i=0,r=-1,o=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){i=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?r<0?r=t:o!==1&&(o=1):r>-1&&(o=-1)}return r<0||n<0||o===0||o===1&&r===n-1&&r===i+1?"":e.slice(r,n)}function $6(...e){let t=-1,n;for(;++t<e.length;)As(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":q6(n)}function q6(e){As(e);const t=e.codePointAt(0)===47;let n=W6(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function W6(e,t){let n="",i=0,r=-1,o=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(r===s-1||o===1))if(r!==s-1&&o===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=s,o=0;continue}}else if(n.length>0){n="",i=0,r=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+e.slice(r+1,s):n=e.slice(r+1,s),i=s-r-1;r=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function As(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const V6={cwd:Y6};function Y6(){return"/"}function qc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Q6(e){if(typeof e=="string")e=new URL(e);else if(!qc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return G6(e)}function G6(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const i=t.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(t)}const Cu=["history","path","basename","stem","extname","dirname"];class Mv{constructor(t){let n;t?qc(t)?n={path:t}:typeof t=="string"||K6(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":V6.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Cu.length;){const o=Cu[i];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let r;for(r in n)Cu.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?Tn.basename(this.path):void 0}set basename(t){Ou(t,"basename"),Au(t,"basename"),this.path=Tn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Tn.dirname(this.path):void 0}set dirname(t){Fg(this.basename,"dirname"),this.path=Tn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Tn.extname(this.path):void 0}set extname(t){if(Au(t,"extname"),Fg(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Tn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){qc(t)&&(t=Q6(t)),Ou(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Tn.basename(this.path,this.extname):void 0}set stem(t){Ou(t,"stem"),Au(t,"stem"),this.path=Tn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,i){const r=this.message(t,n,i);throw r.fatal=!0,r}info(t,n,i){const r=this.message(t,n,i);return r.fatal=void 0,r}message(t,n,i){const r=new gt(t,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Au(e,t){if(e&&e.includes(Tn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Tn.sep+"`")}function Ou(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Fg(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function K6(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const X6=function(e){const i=this.constructor.prototype,r=i[e],o=function(){return r.apply(o,arguments)};return Object.setPrototypeOf(o,i),o},J6={}.hasOwnProperty;class op extends X6{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=B6()}copy(){const t=new op;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];t.use(...i)}return t.data(ku(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Mu("data",this.frozen),this.namespace[t]=n,this):J6.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Mu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(t,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=da(t),i=this.parser||this.Parser;return Nu("parse",i),i(String(n),n)}process(t,n){const i=this;return this.freeze(),Nu("process",this.parser||this.Parser),Pu("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(o,s){const a=da(t),l=i.parse(a);i.run(l,a,function(d,h,f){if(d||!h||!f)return c(d);const p=h,_=i.stringify(p,f);tO(_)?f.value=_:f.result=_,c(d,f)});function c(d,h){d||!h?s(d):o?o(h):n(void 0,h)}}}processSync(t){let n=!1,i;return this.freeze(),Nu("processSync",this.parser||this.Parser),Pu("processSync",this.compiler||this.Compiler),this.process(t,r),zg("processSync","process",n),i;function r(o,s){n=!0,Ag(o),i=s}}run(t,n,i){Bg(t),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?o(void 0,i):new Promise(o);function o(s,a){const l=da(n);r.run(t,l,c);function c(d,h,f){const p=h||t;d?a(d):s?s(p):i(void 0,p,f)}}}runSync(t,n){let i=!1,r;return this.run(t,n,o),zg("runSync","run",i),r;function o(s,a){Ag(s),r=a,i=!0}}stringify(t,n){this.freeze();const i=da(n),r=this.compiler||this.Compiler;return Pu("stringify",r),Bg(t),r(t,i)}use(t,...n){const i=this.attachers,r=this.namespace;if(Mu("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...h]=c;l(d,h)}else s(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function s(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(r.settings=ku(!0,r.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const h=c[d];o(h)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,d){let h=-1,f=-1;for(;++h<i.length;)if(i[h][0]===c){f=h;break}if(f===-1)i.push([c,...d]);else if(d.length>0){let[p,..._]=d;const w=i[f][1];$c(w)&&$c(p)&&(p=ku(!0,w,p)),i[f]=[c,p,..._]}}}}const Z6=new op().freeze();function Nu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Pu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Mu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Bg(e){if(!$c(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function zg(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function da(e){return eO(e)?e:new Mv(e)}function eO(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function tO(e){return typeof e=="string"||nO(e)}function nO(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const iO="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",jg=[],Ug={allowDangerousHtml:!0},rO=/^(https?|ircs?|mailto|xmpp)$/i,oO=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function sO(e){const t=aO(e),n=lO(e);return uO(t.runSync(t.parse(n),n),e)}function aO(e){const t=e.rehypePlugins||jg,n=e.remarkPlugins||jg,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Ug}:Ug;return Z6().use(U3).use(n).use(L6,i).use(t)}function lO(e){const t=e.children||"",n=new Mv;return typeof t=="string"&&(n.value=t),n}function uO(e,t){const n=t.allowedElements,i=t.allowElement,r=t.components,o=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,l=t.urlTransform||cO;for(const d of oO)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+iO+d.id,void 0);return rp(e,c),TC(e,{Fragment:Y.Fragment,components:r,ignoreInvalidStyle:!0,jsx:Y.jsx,jsxs:Y.jsxs,passKeys:!0,passNode:!0});function c(d,h,f){if(d.type==="raw"&&f&&typeof h=="number")return s?f.children.splice(h,1):f.children[h]={type:"text",value:d.value},h;if(d.type==="element"){let p;for(p in wu)if(Object.hasOwn(wu,p)&&Object.hasOwn(d.properties,p)){const _=d.properties[p],w=wu[p];(w===null||w.includes(d.tagName))&&(d.properties[p]=l(String(_||""),p,d))}}if(d.type==="element"){let p=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!p&&i&&typeof h=="number"&&(p=!i(d,h,f)),p&&f&&typeof h=="number")return a&&d.children?f.children.splice(h,1,...d.children):f.children.splice(h,1),h}}}function cO(e){const t=e.indexOf(":"),n=e.indexOf("?"),i=e.indexOf("#"),r=e.indexOf("/");return t===-1||r!==-1&&t>r||n!==-1&&t>n||i!==-1&&t>i||rO.test(e.slice(0,t))?e:""}const Hg=/[#.]/g;function dO(e,t){const n=e||"",i={};let r=0,o,s;for(;r<n.length;){Hg.lastIndex=r;const a=Hg.exec(n),l=n.slice(r,a?a.index:n.length);l&&(o?o==="#"?i.id=l:Array.isArray(i.className)?i.className.push(l):i.className=[l]:s=l,r+=l.length),a&&(o=a[0],r++)}return{type:"element",tagName:s||t||"div",properties:i,children:[]}}function Rv(e,t,n){const i=n?mO(n):void 0;function r(o,s,...a){let l;if(o==null){l={type:"root",children:[]};const c=s;a.unshift(c)}else{l=dO(o,t);const c=l.tagName.toLowerCase(),d=i?i.get(c):void 0;if(l.tagName=d||c,hO(s))a.unshift(s);else for(const[h,f]of Object.entries(s))fO(e,l.properties,h,f)}for(const c of a)Wc(l.children,c);return l.type==="element"&&l.tagName==="template"&&(l.content={type:"root",children:l.children},l.children=[]),l}return r}function hO(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const i of n){const r=t[i];if(r&&typeof r=="object"){if(!Array.isArray(r))return!0;const o=r;for(const s of o)if(typeof s!="number"&&typeof s!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function fO(e,t,n,i){const r=Vf(e,n);let o;if(i!=null){if(typeof i=="number"){if(Number.isNaN(i))return;o=i}else typeof i=="boolean"?o=i:typeof i=="string"?r.spaceSeparated?o=tg(i):r.commaSeparated?o=Km(i):r.commaOrSpaceSeparated?o=tg(Km(i).join(" ")):o=$g(r,r.property,i):Array.isArray(i)?o=[...i]:o=r.property==="style"?pO(i):String(i);if(Array.isArray(o)){const s=[];for(const a of o)s.push($g(r,r.property,a));o=s}r.property==="className"&&Array.isArray(t.className)&&(o=t.className.concat(o)),t[r.property]=o}}function Wc(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const n of t)Wc(e,n);else if(typeof t=="object"&&"type"in t)t.type==="root"?Wc(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function $g(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||Zo(n)===Zo(t)))return!0}return n}function pO(e){const t=[];for(const[n,i]of Object.entries(e))t.push([n,i].join(": "));return t.join("; ")}function mO(e){const t=new Map;for(const n of e)t.set(n.toLowerCase(),n);return t}const gO=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],yO=Rv(Ol,"div"),bO=Rv(Lr,"g",gO);function vO(e){const t=String(e),n=[];return{toOffset:r,toPoint:i};function i(o){if(typeof o=="number"&&o>-1&&o<=t.length){let s=0;for(;;){let a=n[s];if(a===void 0){const l=qg(t,n[s-1]);a=l===-1?t.length+1:l+1,n[s]=a}if(a>o)return{line:s+1,column:o-(s>0?n[s-1]:0)+1,offset:o};s++}}}function r(o){if(o&&typeof o.line=="number"&&typeof o.column=="number"&&!Number.isNaN(o.line)&&!Number.isNaN(o.column)){for(;n.length<o.line;){const a=n[n.length-1],l=qg(t,a),c=l===-1?t.length+1:l+1;if(a===c)break;n.push(c)}const s=(o.line>1?n[o.line-2]:0)+o.column-1;if(s<n[o.line-1])return s}}}function qg(e,t){const n=e.indexOf("\r",t),i=e.indexOf(`
`,t);return i===-1?n:n===-1||n+1===i?i:n<i?n:i}const Mi={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Lv={}.hasOwnProperty,TO=Object.prototype;function EO(e,t){const n=t||{};return sp({file:n.file||void 0,location:!1,schema:n.space==="svg"?Lr:Ol,verbose:n.verbose||!1},e)}function sp(e,t){let n;switch(t.nodeName){case"#comment":{const i=t;return n={type:"comment",value:i.data},Aa(e,i,n),n}case"#document":case"#document-fragment":{const i=t,r="mode"in i?i.mode==="quirks"||i.mode==="limited-quirks":!1;if(n={type:"root",children:Fv(e,t.childNodes),data:{quirksMode:r}},e.file&&e.location){const o=String(e.file),s=vO(o),a=s.toPoint(0),l=s.toPoint(o.length);n.position={start:a,end:l}}return n}case"#documentType":{const i=t;return n={type:"doctype"},Aa(e,i,n),n}case"#text":{const i=t;return n={type:"text",value:i.value},Aa(e,i,n),n}default:return n=_O(e,t),n}}function Fv(e,t){let n=-1;const i=[];for(;++n<t.length;){const r=sp(e,t[n]);i.push(r)}return i}function _O(e,t){const n=e.schema;e.schema=t.namespaceURI===Mi.svg?Lr:Ol;let i=-1;const r={};for(;++i<t.attrs.length;){const a=t.attrs[i],l=(a.prefix?a.prefix+":":"")+a.name;Lv.call(TO,l)||(r[l]=a.value)}const s=(e.schema.space==="svg"?bO:yO)(t.tagName,r,Fv(e,t.childNodes));if(Aa(e,t,s),s.tagName==="template"){const a=t,l=a.sourceCodeLocation,c=l&&l.startTag&&hr(l.startTag),d=l&&l.endTag&&hr(l.endTag),h=sp(e,a.content);c&&d&&e.file&&(h.position={start:c.end,end:d.start}),s.content=h}return e.schema=n,s}function Aa(e,t,n){if("sourceCodeLocation"in t&&t.sourceCodeLocation&&e.file){const i=xO(e,n,t.sourceCodeLocation);i&&(e.location=!0,n.position=i)}}function xO(e,t,n){const i=hr(n);if(t.type==="element"){const r=t.children[t.children.length-1];if(i&&!n.endTag&&r&&r.position&&r.position.end&&(i.end=Object.assign({},r.position.end)),e.verbose){const o={};let s;if(n.attrs)for(s in n.attrs)Lv.call(n.attrs,s)&&(o[Vf(e.schema,s).property]=hr(n.attrs[s]));n.startTag;const a=hr(n.startTag),l=n.endTag?hr(n.endTag):void 0,c={opening:a};l&&(c.closing=l),c.properties=o,t.data={position:c}}}return i}function hr(e){const t=Wg({line:e.startLine,column:e.startCol,offset:e.startOffset}),n=Wg({line:e.endLine,column:e.endCol,offset:e.endOffset});return t||n?{start:t,end:n}:void 0}function Wg(e){return e.line&&e.column?e:void 0}class Os{constructor(t,n,i){this.property=t,this.normal=n,i&&(this.space=i)}}Os.prototype.property={};Os.prototype.normal={};Os.prototype.space=null;function Bv(e,t){const n={},i={};let r=-1;for(;++r<e.length;)Object.assign(n,e[r].property),Object.assign(i,e[r].normal);return new Os(n,i,t)}function Vc(e){return e.toLowerCase()}class on{constructor(t,n){this.property=t,this.attribute=n}}on.prototype.space=null;on.prototype.boolean=!1;on.prototype.booleanish=!1;on.prototype.overloadedBoolean=!1;on.prototype.number=!1;on.prototype.commaSeparated=!1;on.prototype.spaceSeparated=!1;on.prototype.commaOrSpaceSeparated=!1;on.prototype.mustUseProperty=!1;on.prototype.defined=!1;let SO=0;const fe=Qi(),Ke=Qi(),zv=Qi(),$=Qi(),Pe=Qi(),_r=Qi(),Pt=Qi();function Qi(){return 2**++SO}const Yc=Object.freeze(Object.defineProperty({__proto__:null,boolean:fe,booleanish:Ke,commaOrSpaceSeparated:Pt,commaSeparated:_r,number:$,overloadedBoolean:zv,spaceSeparated:Pe},Symbol.toStringTag,{value:"Module"})),Ru=Object.keys(Yc);class ap extends on{constructor(t,n,i,r){let o=-1;if(super(t,n),Vg(this,"space",r),typeof i=="number")for(;++o<Ru.length;){const s=Ru[o];Vg(this,Ru[o],(i&Yc[s])===Yc[s])}}}ap.prototype.defined=!0;function Vg(e,t,n){n&&(e[t]=n)}const wO={}.hasOwnProperty;function Br(e){const t={},n={};let i;for(i in e.properties)if(wO.call(e.properties,i)){const r=e.properties[i],o=new ap(i,e.transform(e.attributes||{},i),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),t[i]=o,n[Vc(i)]=i,n[Vc(o.attribute)]=i}return new Os(t,n,e.space)}const jv=Br({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Uv=Br({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Hv(e,t){return t in e?e[t]:t}function $v(e,t){return Hv(e,t.toLowerCase())}const qv=Br({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:$v,properties:{xmlns:null,xmlnsXLink:null}}),Wv=Br({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Ke,ariaAutoComplete:null,ariaBusy:Ke,ariaChecked:Ke,ariaColCount:$,ariaColIndex:$,ariaColSpan:$,ariaControls:Pe,ariaCurrent:null,ariaDescribedBy:Pe,ariaDetails:null,ariaDisabled:Ke,ariaDropEffect:Pe,ariaErrorMessage:null,ariaExpanded:Ke,ariaFlowTo:Pe,ariaGrabbed:Ke,ariaHasPopup:null,ariaHidden:Ke,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Pe,ariaLevel:$,ariaLive:null,ariaModal:Ke,ariaMultiLine:Ke,ariaMultiSelectable:Ke,ariaOrientation:null,ariaOwns:Pe,ariaPlaceholder:null,ariaPosInSet:$,ariaPressed:Ke,ariaReadOnly:Ke,ariaRelevant:null,ariaRequired:Ke,ariaRoleDescription:Pe,ariaRowCount:$,ariaRowIndex:$,ariaRowSpan:$,ariaSelected:Ke,ariaSetSize:$,ariaSort:null,ariaValueMax:$,ariaValueMin:$,ariaValueNow:$,ariaValueText:null,role:null}}),DO=Br({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:$v,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:_r,acceptCharset:Pe,accessKey:Pe,action:null,allow:null,allowFullScreen:fe,allowPaymentRequest:fe,allowUserMedia:fe,alt:null,as:null,async:fe,autoCapitalize:null,autoComplete:Pe,autoFocus:fe,autoPlay:fe,blocking:Pe,capture:null,charSet:null,checked:fe,cite:null,className:Pe,cols:$,colSpan:null,content:null,contentEditable:Ke,controls:fe,controlsList:Pe,coords:$|_r,crossOrigin:null,data:null,dateTime:null,decoding:null,default:fe,defer:fe,dir:null,dirName:null,disabled:fe,download:zv,draggable:Ke,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:fe,formTarget:null,headers:Pe,height:$,hidden:fe,high:$,href:null,hrefLang:null,htmlFor:Pe,httpEquiv:Pe,id:null,imageSizes:null,imageSrcSet:null,inert:fe,inputMode:null,integrity:null,is:null,isMap:fe,itemId:null,itemProp:Pe,itemRef:Pe,itemScope:fe,itemType:Pe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:fe,low:$,manifest:null,max:null,maxLength:$,media:null,method:null,min:null,minLength:$,multiple:fe,muted:fe,name:null,nonce:null,noModule:fe,noValidate:fe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:fe,optimum:$,pattern:null,ping:Pe,placeholder:null,playsInline:fe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:fe,referrerPolicy:null,rel:Pe,required:fe,reversed:fe,rows:$,rowSpan:$,sandbox:Pe,scope:null,scoped:fe,seamless:fe,selected:fe,shadowRootClonable:fe,shadowRootDelegatesFocus:fe,shadowRootMode:null,shape:null,size:$,sizes:null,slot:null,span:$,spellCheck:Ke,src:null,srcDoc:null,srcLang:null,srcSet:null,start:$,step:null,style:null,tabIndex:$,target:null,title:null,translate:null,type:null,typeMustMatch:fe,useMap:null,value:Ke,width:$,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Pe,axis:null,background:null,bgColor:null,border:$,borderColor:null,bottomMargin:$,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:fe,declare:fe,event:null,face:null,frame:null,frameBorder:null,hSpace:$,leftMargin:$,link:null,longDesc:null,lowSrc:null,marginHeight:$,marginWidth:$,noResize:fe,noHref:fe,noShade:fe,noWrap:fe,object:null,profile:null,prompt:null,rev:null,rightMargin:$,rules:null,scheme:null,scrolling:Ke,standby:null,summary:null,text:null,topMargin:$,valueType:null,version:null,vAlign:null,vLink:null,vSpace:$,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:fe,disableRemotePlayback:fe,prefix:null,property:null,results:$,security:null,unselectable:null}}),IO=Br({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Hv,properties:{about:Pt,accentHeight:$,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:$,amplitude:$,arabicForm:null,ascent:$,attributeName:null,attributeType:null,azimuth:$,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:$,by:null,calcMode:null,capHeight:$,className:Pe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:$,diffuseConstant:$,direction:null,display:null,dur:null,divisor:$,dominantBaseline:null,download:fe,dx:null,dy:null,edgeMode:null,editable:null,elevation:$,enableBackground:null,end:null,event:null,exponent:$,externalResourcesRequired:null,fill:null,fillOpacity:$,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:_r,g2:_r,glyphName:_r,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:$,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:$,horizOriginX:$,horizOriginY:$,id:null,ideographic:$,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:$,k:$,k1:$,k2:$,k3:$,k4:$,kernelMatrix:Pt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:$,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:$,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:$,overlineThickness:$,paintOrder:null,panose1:null,path:null,pathLength:$,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Pe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:$,pointsAtY:$,pointsAtZ:$,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Pt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Pt,rev:Pt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Pt,requiredFeatures:Pt,requiredFonts:Pt,requiredFormats:Pt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:$,specularExponent:$,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:$,strikethroughThickness:$,string:null,stroke:null,strokeDashArray:Pt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:$,strokeOpacity:$,strokeWidth:null,style:null,surfaceScale:$,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Pt,tabIndex:$,tableValues:null,target:null,targetX:$,targetY:$,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Pt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:$,underlineThickness:$,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:$,values:null,vAlphabetic:$,vMathematical:$,vectorEffect:null,vHanging:$,vIdeographic:$,version:null,vertAdvY:$,vertOriginX:$,vertOriginY:$,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:$,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),kO=/^data[-\w.:]+$/i,Yg=/-[a-z]/g,CO=/[A-Z]/g;function AO(e,t){const n=Vc(t);let i=t,r=on;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&kO.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Yg,NO);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Yg.test(o)){let s=o.replace(CO,OO);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}r=ap}return new r(i,t)}function OO(e){return"-"+e.toLowerCase()}function NO(e){return e.charAt(1).toUpperCase()}const PO=Bv([Uv,jv,qv,Wv,DO],"html"),Vv=Bv([Uv,jv,qv,Wv,IO],"svg"),Qg={}.hasOwnProperty;function Yv(e,t){const n=t||{};function i(r,...o){let s=i.invalid;const a=i.handlers;if(r&&Qg.call(r,e)){const l=String(r[e]);s=Qg.call(a,l)?a[l]:i.unknown}if(s)return s.call(this,r,...o)}return i.handlers=n.handlers||{},i.invalid=n.invalid,i.unknown=n.unknown,i}const MO={},RO={}.hasOwnProperty,Qv=Yv("type",{handlers:{root:FO,element:HO,text:jO,comment:UO,doctype:zO}});function LO(e,t){const i=(t||MO).space;return Qv(e,i==="svg"?Vv:PO)}function FO(e,t){const n={nodeName:"#document",mode:(e.data||{}).quirksMode?"quirks":"no-quirks",childNodes:[]};return n.childNodes=lp(e.children,n,t),zr(e,n),n}function BO(e,t){const n={nodeName:"#document-fragment",childNodes:[]};return n.childNodes=lp(e.children,n,t),zr(e,n),n}function zO(e){const t={nodeName:"#documentType",name:"html",publicId:"",systemId:"",parentNode:null};return zr(e,t),t}function jO(e){const t={nodeName:"#text",value:e.value,parentNode:null};return zr(e,t),t}function UO(e){const t={nodeName:"#comment",data:e.value,parentNode:null};return zr(e,t),t}function HO(e,t){const n=t;let i=n;e.type==="element"&&e.tagName.toLowerCase()==="svg"&&n.space==="html"&&(i=Vv);const r=[];let o;if(e.properties){for(o in e.properties)if(o!=="children"&&RO.call(e.properties,o)){const l=$O(i,o,e.properties[o]);l&&r.push(l)}}const s=i.space,a={nodeName:e.tagName,tagName:e.tagName,attrs:r,namespaceURI:Mi[s],childNodes:[],parentNode:null};return a.childNodes=lp(e.children,a,i),zr(e,a),e.tagName==="template"&&e.content&&(a.content=BO(e.content,i)),a}function $O(e,t,n){const i=AO(e,t);if(n===!1||n===null||n===void 0||typeof n=="number"&&Number.isNaN(n)||!n&&i.boolean)return;Array.isArray(n)&&(n=i.commaSeparated?Zb(n):av(n));const r={name:i.attribute,value:n===!0?"":String(n)};if(i.space&&i.space!=="html"&&i.space!=="svg"){const o=r.name.indexOf(":");o<0?r.prefix="":(r.name=r.name.slice(o+1),r.prefix=i.attribute.slice(0,o)),r.namespace=Mi[i.space]}return r}function lp(e,t,n){let i=-1;const r=[];if(e)for(;++i<e.length;){const o=Qv(e[i],n);o.parentNode=t,r.push(o)}return r}function zr(e,t){const n=e.position;n&&n.start&&n.end&&(n.start.offset,n.end.offset,t.sourceCodeLocation={startLine:n.start.line,startCol:n.start.column,startOffset:n.start.offset,endLine:n.end.line,endCol:n.end.column,endOffset:n.end.offset})}const qO=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"],WO=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),Be="�";var g;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(g||(g={}));const _t={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function Gv(e){return e>=55296&&e<=57343}function VO(e){return e>=56320&&e<=57343}function YO(e,t){return(e-55296)*1024+9216+t}function Kv(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function Xv(e){return e>=64976&&e<=65007||WO.has(e)}var O;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(O||(O={}));const QO=65536;class GO{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=QO,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,n){const{line:i,col:r,offset:o}=this,s=r+n,a=o+n;return{code:t,startLine:i,endLine:i,startCol:s,endCol:s,startOffset:a,endOffset:a}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const n=this.html.charCodeAt(this.pos+1);if(VO(n))return this.pos++,this._addGap(),YO(t,n)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,g.EOF;return this._err(O.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,n){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=n}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,n){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(n)return this.html.startsWith(t,this.pos);for(let i=0;i<t.length;i++)if((this.html.charCodeAt(this.pos+i)|32)!==t.charCodeAt(i))return!1;return!0}peek(t){const n=this.pos+t;if(n>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,g.EOF;const i=this.html.charCodeAt(n);return i===g.CARRIAGE_RETURN?g.LINE_FEED:i}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,g.EOF;let t=this.html.charCodeAt(this.pos);return t===g.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,g.LINE_FEED):t===g.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,Gv(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===g.LINE_FEED||t===g.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){Kv(t)?this._err(O.controlCharacterInInputStream):Xv(t)&&this._err(O.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var ve;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(ve||(ve={}));function Jv(e,t){for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value;return null}const KO=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),XO=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function JO(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=XO.get(e))!==null&&t!==void 0?t:e}var rt;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(rt||(rt={}));const ZO=32;var oi;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(oi||(oi={}));function Qc(e){return e>=rt.ZERO&&e<=rt.NINE}function eN(e){return e>=rt.UPPER_A&&e<=rt.UPPER_F||e>=rt.LOWER_A&&e<=rt.LOWER_F}function tN(e){return e>=rt.UPPER_A&&e<=rt.UPPER_Z||e>=rt.LOWER_A&&e<=rt.LOWER_Z||Qc(e)}function nN(e){return e===rt.EQUALS||tN(e)}var nt;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(nt||(nt={}));var Rn;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Rn||(Rn={}));class iN{constructor(t,n,i){this.decodeTree=t,this.emitCodePoint=n,this.errors=i,this.state=nt.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Rn.Strict}startEntity(t){this.decodeMode=t,this.state=nt.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case nt.EntityStart:return t.charCodeAt(n)===rt.NUM?(this.state=nt.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=nt.NamedEntity,this.stateNamedEntity(t,n));case nt.NumericStart:return this.stateNumericStart(t,n);case nt.NumericDecimal:return this.stateNumericDecimal(t,n);case nt.NumericHex:return this.stateNumericHex(t,n);case nt.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|ZO)===rt.LOWER_X?(this.state=nt.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=nt.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,i,r){if(n!==i){const o=i-n;this.result=this.result*Math.pow(r,o)+Number.parseInt(t.substr(n,o),r),this.consumed+=o}}stateNumericHex(t,n){const i=n;for(;n<t.length;){const r=t.charCodeAt(n);if(Qc(r)||eN(r))n+=1;else return this.addToNumericResult(t,i,n,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(t,i,n,16),-1}stateNumericDecimal(t,n){const i=n;for(;n<t.length;){const r=t.charCodeAt(n);if(Qc(r))n+=1;else return this.addToNumericResult(t,i,n,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(t,i,n,10),-1}emitNumericEntity(t,n){var i;if(this.consumed<=n)return(i=this.errors)===null||i===void 0||i.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===rt.SEMI)this.consumed+=1;else if(this.decodeMode===Rn.Strict)return 0;return this.emitCodePoint(JO(this.result),this.consumed),this.errors&&(t!==rt.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:i}=this;let r=i[this.treeIndex],o=(r&oi.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const s=t.charCodeAt(n);if(this.treeIndex=rN(i,r,this.treeIndex+Math.max(1,o),s),this.treeIndex<0)return this.result===0||this.decodeMode===Rn.Attribute&&(o===0||nN(s))?0:this.emitNotTerminatedNamedEntity();if(r=i[this.treeIndex],o=(r&oi.VALUE_LENGTH)>>14,o!==0){if(s===rt.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==Rn.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:i}=this,r=(i[n]&oi.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,r,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,i){const{decodeTree:r}=this;return this.emitCodePoint(n===1?r[t]&~oi.VALUE_LENGTH:r[t+1],i),n===3&&this.emitCodePoint(r[t+2],i),i}end(){var t;switch(this.state){case nt.NamedEntity:return this.result!==0&&(this.decodeMode!==Rn.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case nt.NumericDecimal:return this.emitNumericEntity(0,2);case nt.NumericHex:return this.emitNumericEntity(0,3);case nt.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case nt.EntityStart:return 0}}}function rN(e,t,n,i){const r=(t&oi.BRANCH_LENGTH)>>7,o=t&oi.JUMP_TABLE;if(r===0)return o!==0&&i===o?n:-1;if(o){const l=i-o;return l<0||l>=r?-1:e[n+l]-1}let s=n,a=s+r-1;for(;s<=a;){const l=s+a>>>1,c=e[l];if(c<i)s=l+1;else if(c>i)a=l-1;else return e[l+r]}return-1}var F;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(F||(F={}));var Fi;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(Fi||(Fi={}));var Jt;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(Jt||(Jt={}));var k;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(k||(k={}));var u;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(u||(u={}));const oN=new Map([[k.A,u.A],[k.ADDRESS,u.ADDRESS],[k.ANNOTATION_XML,u.ANNOTATION_XML],[k.APPLET,u.APPLET],[k.AREA,u.AREA],[k.ARTICLE,u.ARTICLE],[k.ASIDE,u.ASIDE],[k.B,u.B],[k.BASE,u.BASE],[k.BASEFONT,u.BASEFONT],[k.BGSOUND,u.BGSOUND],[k.BIG,u.BIG],[k.BLOCKQUOTE,u.BLOCKQUOTE],[k.BODY,u.BODY],[k.BR,u.BR],[k.BUTTON,u.BUTTON],[k.CAPTION,u.CAPTION],[k.CENTER,u.CENTER],[k.CODE,u.CODE],[k.COL,u.COL],[k.COLGROUP,u.COLGROUP],[k.DD,u.DD],[k.DESC,u.DESC],[k.DETAILS,u.DETAILS],[k.DIALOG,u.DIALOG],[k.DIR,u.DIR],[k.DIV,u.DIV],[k.DL,u.DL],[k.DT,u.DT],[k.EM,u.EM],[k.EMBED,u.EMBED],[k.FIELDSET,u.FIELDSET],[k.FIGCAPTION,u.FIGCAPTION],[k.FIGURE,u.FIGURE],[k.FONT,u.FONT],[k.FOOTER,u.FOOTER],[k.FOREIGN_OBJECT,u.FOREIGN_OBJECT],[k.FORM,u.FORM],[k.FRAME,u.FRAME],[k.FRAMESET,u.FRAMESET],[k.H1,u.H1],[k.H2,u.H2],[k.H3,u.H3],[k.H4,u.H4],[k.H5,u.H5],[k.H6,u.H6],[k.HEAD,u.HEAD],[k.HEADER,u.HEADER],[k.HGROUP,u.HGROUP],[k.HR,u.HR],[k.HTML,u.HTML],[k.I,u.I],[k.IMG,u.IMG],[k.IMAGE,u.IMAGE],[k.INPUT,u.INPUT],[k.IFRAME,u.IFRAME],[k.KEYGEN,u.KEYGEN],[k.LABEL,u.LABEL],[k.LI,u.LI],[k.LINK,u.LINK],[k.LISTING,u.LISTING],[k.MAIN,u.MAIN],[k.MALIGNMARK,u.MALIGNMARK],[k.MARQUEE,u.MARQUEE],[k.MATH,u.MATH],[k.MENU,u.MENU],[k.META,u.META],[k.MGLYPH,u.MGLYPH],[k.MI,u.MI],[k.MO,u.MO],[k.MN,u.MN],[k.MS,u.MS],[k.MTEXT,u.MTEXT],[k.NAV,u.NAV],[k.NOBR,u.NOBR],[k.NOFRAMES,u.NOFRAMES],[k.NOEMBED,u.NOEMBED],[k.NOSCRIPT,u.NOSCRIPT],[k.OBJECT,u.OBJECT],[k.OL,u.OL],[k.OPTGROUP,u.OPTGROUP],[k.OPTION,u.OPTION],[k.P,u.P],[k.PARAM,u.PARAM],[k.PLAINTEXT,u.PLAINTEXT],[k.PRE,u.PRE],[k.RB,u.RB],[k.RP,u.RP],[k.RT,u.RT],[k.RTC,u.RTC],[k.RUBY,u.RUBY],[k.S,u.S],[k.SCRIPT,u.SCRIPT],[k.SEARCH,u.SEARCH],[k.SECTION,u.SECTION],[k.SELECT,u.SELECT],[k.SOURCE,u.SOURCE],[k.SMALL,u.SMALL],[k.SPAN,u.SPAN],[k.STRIKE,u.STRIKE],[k.STRONG,u.STRONG],[k.STYLE,u.STYLE],[k.SUB,u.SUB],[k.SUMMARY,u.SUMMARY],[k.SUP,u.SUP],[k.TABLE,u.TABLE],[k.TBODY,u.TBODY],[k.TEMPLATE,u.TEMPLATE],[k.TEXTAREA,u.TEXTAREA],[k.TFOOT,u.TFOOT],[k.TD,u.TD],[k.TH,u.TH],[k.THEAD,u.THEAD],[k.TITLE,u.TITLE],[k.TR,u.TR],[k.TRACK,u.TRACK],[k.TT,u.TT],[k.U,u.U],[k.UL,u.UL],[k.SVG,u.SVG],[k.VAR,u.VAR],[k.WBR,u.WBR],[k.XMP,u.XMP]]);function jr(e){var t;return(t=oN.get(e))!==null&&t!==void 0?t:u.UNKNOWN}const z=u,sN={[F.HTML]:new Set([z.ADDRESS,z.APPLET,z.AREA,z.ARTICLE,z.ASIDE,z.BASE,z.BASEFONT,z.BGSOUND,z.BLOCKQUOTE,z.BODY,z.BR,z.BUTTON,z.CAPTION,z.CENTER,z.COL,z.COLGROUP,z.DD,z.DETAILS,z.DIR,z.DIV,z.DL,z.DT,z.EMBED,z.FIELDSET,z.FIGCAPTION,z.FIGURE,z.FOOTER,z.FORM,z.FRAME,z.FRAMESET,z.H1,z.H2,z.H3,z.H4,z.H5,z.H6,z.HEAD,z.HEADER,z.HGROUP,z.HR,z.HTML,z.IFRAME,z.IMG,z.INPUT,z.LI,z.LINK,z.LISTING,z.MAIN,z.MARQUEE,z.MENU,z.META,z.NAV,z.NOEMBED,z.NOFRAMES,z.NOSCRIPT,z.OBJECT,z.OL,z.P,z.PARAM,z.PLAINTEXT,z.PRE,z.SCRIPT,z.SECTION,z.SELECT,z.SOURCE,z.STYLE,z.SUMMARY,z.TABLE,z.TBODY,z.TD,z.TEMPLATE,z.TEXTAREA,z.TFOOT,z.TH,z.THEAD,z.TITLE,z.TR,z.TRACK,z.UL,z.WBR,z.XMP]),[F.MATHML]:new Set([z.MI,z.MO,z.MN,z.MS,z.MTEXT,z.ANNOTATION_XML]),[F.SVG]:new Set([z.TITLE,z.FOREIGN_OBJECT,z.DESC]),[F.XLINK]:new Set,[F.XML]:new Set,[F.XMLNS]:new Set},Gc=new Set([z.H1,z.H2,z.H3,z.H4,z.H5,z.H6]);k.STYLE,k.SCRIPT,k.XMP,k.IFRAME,k.NOEMBED,k.NOFRAMES,k.PLAINTEXT;var T;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(T||(T={}));const Ve={DATA:T.DATA,RCDATA:T.RCDATA,RAWTEXT:T.RAWTEXT,SCRIPT_DATA:T.SCRIPT_DATA,PLAINTEXT:T.PLAINTEXT,CDATA_SECTION:T.CDATA_SECTION};function aN(e){return e>=g.DIGIT_0&&e<=g.DIGIT_9}function go(e){return e>=g.LATIN_CAPITAL_A&&e<=g.LATIN_CAPITAL_Z}function lN(e){return e>=g.LATIN_SMALL_A&&e<=g.LATIN_SMALL_Z}function Kn(e){return lN(e)||go(e)}function Gg(e){return Kn(e)||aN(e)}function ha(e){return e+32}function Zv(e){return e===g.SPACE||e===g.LINE_FEED||e===g.TABULATION||e===g.FORM_FEED}function Kg(e){return Zv(e)||e===g.SOLIDUS||e===g.GREATER_THAN_SIGN}function uN(e){return e===g.NULL?O.nullCharacterReference:e>1114111?O.characterReferenceOutsideUnicodeRange:Gv(e)?O.surrogateCharacterReference:Xv(e)?O.noncharacterCharacterReference:Kv(e)||e===g.CARRIAGE_RETURN?O.controlCharacterReference:null}class cN{constructor(t,n){this.options=t,this.handler=n,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=T.DATA,this.returnState=T.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new GO(n),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new iN(KO,(i,r)=>{this.preprocessor.pos=this.entityStartPos+r-1,this._flushCodePointConsumedAsCharacterReference(i)},n.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(O.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:i=>{this._err(O.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+i)},validateNumericCharacterReference:i=>{const r=uN(i);r&&this._err(r,1)}}:void 0)}_err(t,n=0){var i,r;(r=(i=this.handler).onParseError)===null||r===void 0||r.call(i,this.preprocessor.getError(t,n))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t==null||t())}write(t,n,i){this.active=!0,this.preprocessor.write(t,n),this._runParsingLoop(),this.paused||i==null||i()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let n=0;n<t;n++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,n){return this.preprocessor.startsWith(t,n)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:ve.START_TAG,tagName:"",tagID:u.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:ve.END_TAG,tagName:"",tagID:u.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:ve.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:ve.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,n){this.currentCharacterToken={type:t,chars:n,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,n;const i=this.currentToken;if(Jv(i,this.currentAttr.name)===null){if(i.attrs.push(this.currentAttr),i.location&&this.currentLocation){const r=(t=(n=i.location).attrs)!==null&&t!==void 0?t:n.attrs=Object.create(null);r[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(O.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=jr(t.tagName),t.type===ve.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(O.endTagWithAttributes),t.selfClosing&&this._err(O.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case ve.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case ve.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case ve.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:ve.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,n){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=n;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,n)}_emitCodePoint(t){const n=Zv(t)?ve.WHITESPACE_CHARACTER:t===g.NULL?ve.NULL_CHARACTER:ve.CHARACTER;this._appendCharToCurrentCharacterToken(n,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(ve.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=T.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?Rn.Attribute:Rn.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===T.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===T.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===T.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case T.DATA:{this._stateData(t);break}case T.RCDATA:{this._stateRcdata(t);break}case T.RAWTEXT:{this._stateRawtext(t);break}case T.SCRIPT_DATA:{this._stateScriptData(t);break}case T.PLAINTEXT:{this._statePlaintext(t);break}case T.TAG_OPEN:{this._stateTagOpen(t);break}case T.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case T.TAG_NAME:{this._stateTagName(t);break}case T.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case T.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case T.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case T.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case T.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case T.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case T.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case T.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case T.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case T.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case T.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case T.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case T.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case T.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case T.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case T.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case T.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case T.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case T.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case T.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case T.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case T.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case T.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case T.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case T.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case T.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case T.BOGUS_COMMENT:{this._stateBogusComment(t);break}case T.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case T.COMMENT_START:{this._stateCommentStart(t);break}case T.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case T.COMMENT:{this._stateComment(t);break}case T.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case T.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case T.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case T.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case T.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case T.COMMENT_END:{this._stateCommentEnd(t);break}case T.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case T.DOCTYPE:{this._stateDoctype(t);break}case T.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case T.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case T.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case T.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case T.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case T.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case T.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case T.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case T.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case T.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case T.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case T.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case T.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case T.CDATA_SECTION:{this._stateCdataSection(t);break}case T.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case T.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case T.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case T.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case g.LESS_THAN_SIGN:{this.state=T.TAG_OPEN;break}case g.AMPERSAND:{this._startCharacterReference();break}case g.NULL:{this._err(O.unexpectedNullCharacter),this._emitCodePoint(t);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case g.AMPERSAND:{this._startCharacterReference();break}case g.LESS_THAN_SIGN:{this.state=T.RCDATA_LESS_THAN_SIGN;break}case g.NULL:{this._err(O.unexpectedNullCharacter),this._emitChars(Be);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case g.LESS_THAN_SIGN:{this.state=T.RAWTEXT_LESS_THAN_SIGN;break}case g.NULL:{this._err(O.unexpectedNullCharacter),this._emitChars(Be);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case g.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_LESS_THAN_SIGN;break}case g.NULL:{this._err(O.unexpectedNullCharacter),this._emitChars(Be);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case g.NULL:{this._err(O.unexpectedNullCharacter),this._emitChars(Be);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(Kn(t))this._createStartTagToken(),this.state=T.TAG_NAME,this._stateTagName(t);else switch(t){case g.EXCLAMATION_MARK:{this.state=T.MARKUP_DECLARATION_OPEN;break}case g.SOLIDUS:{this.state=T.END_TAG_OPEN;break}case g.QUESTION_MARK:{this._err(O.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=T.BOGUS_COMMENT,this._stateBogusComment(t);break}case g.EOF:{this._err(O.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(O.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=T.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(Kn(t))this._createEndTagToken(),this.state=T.TAG_NAME,this._stateTagName(t);else switch(t){case g.GREATER_THAN_SIGN:{this._err(O.missingEndTagName),this.state=T.DATA;break}case g.EOF:{this._err(O.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(O.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=T.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=T.BEFORE_ATTRIBUTE_NAME;break}case g.SOLIDUS:{this.state=T.SELF_CLOSING_START_TAG;break}case g.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentTagToken();break}case g.NULL:{this._err(O.unexpectedNullCharacter),n.tagName+=Be;break}case g.EOF:{this._err(O.eofInTag),this._emitEOFToken();break}default:n.tagName+=String.fromCodePoint(go(t)?ha(t):t)}}_stateRcdataLessThanSign(t){t===g.SOLIDUS?this.state=T.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=T.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){Kn(t)?(this.state=T.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=T.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const n=this.currentToken;switch(n.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=T.BEFORE_ATTRIBUTE_NAME,!1;case g.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=T.SELF_CLOSING_START_TAG,!1;case g.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=T.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=T.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===g.SOLIDUS?this.state=T.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=T.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){Kn(t)?(this.state=T.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=T.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=T.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case g.SOLIDUS:{this.state=T.SCRIPT_DATA_END_TAG_OPEN;break}case g.EXCLAMATION_MARK:{this.state=T.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=T.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){Kn(t)?(this.state=T.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=T.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=T.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===g.HYPHEN_MINUS?(this.state=T.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=T.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===g.HYPHEN_MINUS?(this.state=T.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=T.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case g.HYPHEN_MINUS:{this.state=T.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case g.NULL:{this._err(O.unexpectedNullCharacter),this._emitChars(Be);break}case g.EOF:{this._err(O.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case g.HYPHEN_MINUS:{this.state=T.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case g.NULL:{this._err(O.unexpectedNullCharacter),this.state=T.SCRIPT_DATA_ESCAPED,this._emitChars(Be);break}case g.EOF:{this._err(O.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=T.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case g.HYPHEN_MINUS:{this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case g.GREATER_THAN_SIGN:{this.state=T.SCRIPT_DATA,this._emitChars(">");break}case g.NULL:{this._err(O.unexpectedNullCharacter),this.state=T.SCRIPT_DATA_ESCAPED,this._emitChars(Be);break}case g.EOF:{this._err(O.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=T.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===g.SOLIDUS?this.state=T.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:Kn(t)?(this._emitChars("<"),this.state=T.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=T.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){Kn(t)?(this.state=T.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=T.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=T.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(_t.SCRIPT,!1)&&Kg(this.preprocessor.peek(_t.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<_t.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=T.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case g.HYPHEN_MINUS:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case g.NULL:{this._err(O.unexpectedNullCharacter),this._emitChars(Be);break}case g.EOF:{this._err(O.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case g.HYPHEN_MINUS:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case g.NULL:{this._err(O.unexpectedNullCharacter),this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(Be);break}case g.EOF:{this._err(O.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case g.HYPHEN_MINUS:{this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case g.GREATER_THAN_SIGN:{this.state=T.SCRIPT_DATA,this._emitChars(">");break}case g.NULL:{this._err(O.unexpectedNullCharacter),this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(Be);break}case g.EOF:{this._err(O.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===g.SOLIDUS?(this.state=T.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(_t.SCRIPT,!1)&&Kg(this.preprocessor.peek(_t.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<_t.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=T.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.SOLIDUS:case g.GREATER_THAN_SIGN:case g.EOF:{this.state=T.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case g.EQUALS_SIGN:{this._err(O.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=T.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=T.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:case g.SOLIDUS:case g.GREATER_THAN_SIGN:case g.EOF:{this._leaveAttrName(),this.state=T.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case g.EQUALS_SIGN:{this._leaveAttrName(),this.state=T.BEFORE_ATTRIBUTE_VALUE;break}case g.QUOTATION_MARK:case g.APOSTROPHE:case g.LESS_THAN_SIGN:{this._err(O.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case g.NULL:{this._err(O.unexpectedNullCharacter),this.currentAttr.name+=Be;break}default:this.currentAttr.name+=String.fromCodePoint(go(t)?ha(t):t)}}_stateAfterAttributeName(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.SOLIDUS:{this.state=T.SELF_CLOSING_START_TAG;break}case g.EQUALS_SIGN:{this.state=T.BEFORE_ATTRIBUTE_VALUE;break}case g.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentTagToken();break}case g.EOF:{this._err(O.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=T.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.QUOTATION_MARK:{this.state=T.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case g.APOSTROPHE:{this.state=T.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(O.missingAttributeValue),this.state=T.DATA,this.emitCurrentTagToken();break}default:this.state=T.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case g.QUOTATION_MARK:{this.state=T.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case g.AMPERSAND:{this._startCharacterReference();break}case g.NULL:{this._err(O.unexpectedNullCharacter),this.currentAttr.value+=Be;break}case g.EOF:{this._err(O.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case g.APOSTROPHE:{this.state=T.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case g.AMPERSAND:{this._startCharacterReference();break}case g.NULL:{this._err(O.unexpectedNullCharacter),this.currentAttr.value+=Be;break}case g.EOF:{this._err(O.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this._leaveAttrValue(),this.state=T.BEFORE_ATTRIBUTE_NAME;break}case g.AMPERSAND:{this._startCharacterReference();break}case g.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=T.DATA,this.emitCurrentTagToken();break}case g.NULL:{this._err(O.unexpectedNullCharacter),this.currentAttr.value+=Be;break}case g.QUOTATION_MARK:case g.APOSTROPHE:case g.LESS_THAN_SIGN:case g.EQUALS_SIGN:case g.GRAVE_ACCENT:{this._err(O.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case g.EOF:{this._err(O.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this._leaveAttrValue(),this.state=T.BEFORE_ATTRIBUTE_NAME;break}case g.SOLIDUS:{this._leaveAttrValue(),this.state=T.SELF_CLOSING_START_TAG;break}case g.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=T.DATA,this.emitCurrentTagToken();break}case g.EOF:{this._err(O.eofInTag),this._emitEOFToken();break}default:this._err(O.missingWhitespaceBetweenAttributes),this.state=T.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case g.GREATER_THAN_SIGN:{const n=this.currentToken;n.selfClosing=!0,this.state=T.DATA,this.emitCurrentTagToken();break}case g.EOF:{this._err(O.eofInTag),this._emitEOFToken();break}default:this._err(O.unexpectedSolidusInTag),this.state=T.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const n=this.currentToken;switch(t){case g.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentComment(n);break}case g.EOF:{this.emitCurrentComment(n),this._emitEOFToken();break}case g.NULL:{this._err(O.unexpectedNullCharacter),n.data+=Be;break}default:n.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(_t.DASH_DASH,!0)?(this._createCommentToken(_t.DASH_DASH.length+1),this.state=T.COMMENT_START):this._consumeSequenceIfMatch(_t.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(_t.DOCTYPE.length+1),this.state=T.DOCTYPE):this._consumeSequenceIfMatch(_t.CDATA_START,!0)?this.inForeignNode?this.state=T.CDATA_SECTION:(this._err(O.cdataInHtmlContent),this._createCommentToken(_t.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=T.BOGUS_COMMENT):this._ensureHibernation()||(this._err(O.incorrectlyOpenedComment),this._createCommentToken(2),this.state=T.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case g.HYPHEN_MINUS:{this.state=T.COMMENT_START_DASH;break}case g.GREATER_THAN_SIGN:{this._err(O.abruptClosingOfEmptyComment),this.state=T.DATA;const n=this.currentToken;this.emitCurrentComment(n);break}default:this.state=T.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const n=this.currentToken;switch(t){case g.HYPHEN_MINUS:{this.state=T.COMMENT_END;break}case g.GREATER_THAN_SIGN:{this._err(O.abruptClosingOfEmptyComment),this.state=T.DATA,this.emitCurrentComment(n);break}case g.EOF:{this._err(O.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=T.COMMENT,this._stateComment(t)}}_stateComment(t){const n=this.currentToken;switch(t){case g.HYPHEN_MINUS:{this.state=T.COMMENT_END_DASH;break}case g.LESS_THAN_SIGN:{n.data+="<",this.state=T.COMMENT_LESS_THAN_SIGN;break}case g.NULL:{this._err(O.unexpectedNullCharacter),n.data+=Be;break}case g.EOF:{this._err(O.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const n=this.currentToken;switch(t){case g.EXCLAMATION_MARK:{n.data+="!",this.state=T.COMMENT_LESS_THAN_SIGN_BANG;break}case g.LESS_THAN_SIGN:{n.data+="<";break}default:this.state=T.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===g.HYPHEN_MINUS?this.state=T.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=T.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===g.HYPHEN_MINUS?this.state=T.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=T.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==g.GREATER_THAN_SIGN&&t!==g.EOF&&this._err(O.nestedComment),this.state=T.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const n=this.currentToken;switch(t){case g.HYPHEN_MINUS:{this.state=T.COMMENT_END;break}case g.EOF:{this._err(O.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=T.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const n=this.currentToken;switch(t){case g.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentComment(n);break}case g.EXCLAMATION_MARK:{this.state=T.COMMENT_END_BANG;break}case g.HYPHEN_MINUS:{n.data+="-";break}case g.EOF:{this._err(O.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--",this.state=T.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const n=this.currentToken;switch(t){case g.HYPHEN_MINUS:{n.data+="--!",this.state=T.COMMENT_END_DASH;break}case g.GREATER_THAN_SIGN:{this._err(O.incorrectlyClosedComment),this.state=T.DATA,this.emitCurrentComment(n);break}case g.EOF:{this._err(O.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--!",this.state=T.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=T.BEFORE_DOCTYPE_NAME;break}case g.GREATER_THAN_SIGN:{this.state=T.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case g.EOF:{this._err(O.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(O.missingWhitespaceBeforeDoctypeName),this.state=T.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(go(t))this._createDoctypeToken(String.fromCharCode(ha(t))),this.state=T.DOCTYPE_NAME;else switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.NULL:{this._err(O.unexpectedNullCharacter),this._createDoctypeToken(Be),this.state=T.DOCTYPE_NAME;break}case g.GREATER_THAN_SIGN:{this._err(O.missingDoctypeName),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case g.EOF:{this._err(O.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=T.DOCTYPE_NAME}}_stateDoctypeName(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=T.AFTER_DOCTYPE_NAME;break}case g.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentDoctype(n);break}case g.NULL:{this._err(O.unexpectedNullCharacter),n.name+=Be;break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.name+=String.fromCodePoint(go(t)?ha(t):t)}}_stateAfterDoctypeName(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(_t.PUBLIC,!1)?this.state=T.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(_t.SYSTEM,!1)?this.state=T.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(O.invalidCharacterSequenceAfterDoctypeName),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=T.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case g.QUOTATION_MARK:{this._err(O.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=T.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{this._err(O.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=T.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(O.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=T.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(O.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.QUOTATION_MARK:{n.publicId="",this.state=T.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{n.publicId="",this.state=T.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(O.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=T.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(O.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case g.QUOTATION_MARK:{this.state=T.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case g.NULL:{this._err(O.unexpectedNullCharacter),n.publicId+=Be;break}case g.GREATER_THAN_SIGN:{this._err(O.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case g.APOSTROPHE:{this.state=T.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case g.NULL:{this._err(O.unexpectedNullCharacter),n.publicId+=Be;break}case g.GREATER_THAN_SIGN:{this._err(O.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=T.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case g.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentDoctype(n);break}case g.QUOTATION_MARK:{this._err(O.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{this._err(O.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(O.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=T.DATA;break}case g.QUOTATION_MARK:{n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(O.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=T.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case g.QUOTATION_MARK:{this._err(O.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{this._err(O.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(O.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(O.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.QUOTATION_MARK:{n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(O.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(O.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case g.QUOTATION_MARK:{this.state=T.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case g.NULL:{this._err(O.unexpectedNullCharacter),n.systemId+=Be;break}case g.GREATER_THAN_SIGN:{this._err(O.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case g.APOSTROPHE:{this.state=T.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case g.NULL:{this._err(O.unexpectedNullCharacter),n.systemId+=Be;break}case g.GREATER_THAN_SIGN:{this._err(O.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=T.DATA;break}case g.EOF:{this._err(O.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(O.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const n=this.currentToken;switch(t){case g.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=T.DATA;break}case g.NULL:{this._err(O.unexpectedNullCharacter);break}case g.EOF:{this.emitCurrentDoctype(n),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case g.RIGHT_SQUARE_BRACKET:{this.state=T.CDATA_SECTION_BRACKET;break}case g.EOF:{this._err(O.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===g.RIGHT_SQUARE_BRACKET?this.state=T.CDATA_SECTION_END:(this._emitChars("]"),this.state=T.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case g.GREATER_THAN_SIGN:{this.state=T.DATA;break}case g.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=T.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(g.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&Gg(this.preprocessor.peek(1))?T.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){Gg(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===g.SEMICOLON&&this._err(O.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const e1=new Set([u.DD,u.DT,u.LI,u.OPTGROUP,u.OPTION,u.P,u.RB,u.RP,u.RT,u.RTC]),Xg=new Set([...e1,u.CAPTION,u.COLGROUP,u.TBODY,u.TD,u.TFOOT,u.TH,u.THEAD,u.TR]),ll=new Set([u.APPLET,u.CAPTION,u.HTML,u.MARQUEE,u.OBJECT,u.TABLE,u.TD,u.TEMPLATE,u.TH]),dN=new Set([...ll,u.OL,u.UL]),hN=new Set([...ll,u.BUTTON]),Jg=new Set([u.ANNOTATION_XML,u.MI,u.MN,u.MO,u.MS,u.MTEXT]),Zg=new Set([u.DESC,u.FOREIGN_OBJECT,u.TITLE]),fN=new Set([u.TR,u.TEMPLATE,u.HTML]),pN=new Set([u.TBODY,u.TFOOT,u.THEAD,u.TEMPLATE,u.HTML]),mN=new Set([u.TABLE,u.TEMPLATE,u.HTML]),gN=new Set([u.TD,u.TH]);class yN{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,n,i){this.treeAdapter=n,this.handler=i,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=u.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===u.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===F.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,n){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=n,this.currentTagId=n,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,n,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,n){const i=this._indexOf(t);this.items[i]=n,i===this.stackTop&&(this.current=n)}insertAfter(t,n,i){const r=this._indexOf(t)+1;this.items.splice(r,0,n),this.tagIDs.splice(r,0,i),this.stackTop++,r===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,r===this.stackTop)}popUntilTagNamePopped(t){let n=this.stackTop+1;do n=this.tagIDs.lastIndexOf(t,n-1);while(n>0&&this.treeAdapter.getNamespaceURI(this.items[n])!==F.HTML);this.shortenToLength(Math.max(n,0))}shortenToLength(t){for(;this.stackTop>=t;){const n=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(n,this.stackTop<t)}}popUntilElementPopped(t){const n=this._indexOf(t);this.shortenToLength(Math.max(n,0))}popUntilPopped(t,n){const i=this._indexOfTagNames(t,n);this.shortenToLength(Math.max(i,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(Gc,F.HTML)}popUntilTableCellPopped(){this.popUntilPopped(gN,F.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,n){for(let i=this.stackTop;i>=0;i--)if(t.has(this.tagIDs[i])&&this.treeAdapter.getNamespaceURI(this.items[i])===n)return i;return-1}clearBackTo(t,n){const i=this._indexOfTagNames(t,n);this.shortenToLength(i+1)}clearBackToTableContext(){this.clearBackTo(mN,F.HTML)}clearBackToTableBodyContext(){this.clearBackTo(pN,F.HTML)}clearBackToTableRowContext(){this.clearBackTo(fN,F.HTML)}remove(t){const n=this._indexOf(t);n>=0&&(n===this.stackTop?this.pop():(this.items.splice(n,1),this.tagIDs.splice(n,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===u.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const n=this._indexOf(t)-1;return n>=0?this.items[n]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===u.HTML}hasInDynamicScope(t,n){for(let i=this.stackTop;i>=0;i--){const r=this.tagIDs[i];switch(this.treeAdapter.getNamespaceURI(this.items[i])){case F.HTML:{if(r===t)return!0;if(n.has(r))return!1;break}case F.SVG:{if(Zg.has(r))return!1;break}case F.MATHML:{if(Jg.has(r))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,ll)}hasInListItemScope(t){return this.hasInDynamicScope(t,dN)}hasInButtonScope(t){return this.hasInDynamicScope(t,hN)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const n=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case F.HTML:{if(Gc.has(n))return!0;if(ll.has(n))return!1;break}case F.SVG:{if(Zg.has(n))return!1;break}case F.MATHML:{if(Jg.has(n))return!1;break}}}return!0}hasInTableScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===F.HTML)switch(this.tagIDs[n]){case t:return!0;case u.TABLE:case u.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===F.HTML)switch(this.tagIDs[t]){case u.TBODY:case u.THEAD:case u.TFOOT:return!0;case u.TABLE:case u.HTML:return!1}return!0}hasInSelectScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===F.HTML)switch(this.tagIDs[n]){case t:return!0;case u.OPTION:case u.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&e1.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&Xg.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&Xg.has(this.currentTagId);)this.pop()}}const Lu=3;var En;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(En||(En={}));const ey={type:En.Marker};class bN{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,n){const i=[],r=n.length,o=this.treeAdapter.getTagName(t),s=this.treeAdapter.getNamespaceURI(t);for(let a=0;a<this.entries.length;a++){const l=this.entries[a];if(l.type===En.Marker)break;const{element:c}=l;if(this.treeAdapter.getTagName(c)===o&&this.treeAdapter.getNamespaceURI(c)===s){const d=this.treeAdapter.getAttrList(c);d.length===r&&i.push({idx:a,attrs:d})}}return i}_ensureNoahArkCondition(t){if(this.entries.length<Lu)return;const n=this.treeAdapter.getAttrList(t),i=this._getNoahArkConditionCandidates(t,n);if(i.length<Lu)return;const r=new Map(n.map(s=>[s.name,s.value]));let o=0;for(let s=0;s<i.length;s++){const a=i[s];a.attrs.every(l=>r.get(l.name)===l.value)&&(o+=1,o>=Lu&&this.entries.splice(a.idx,1))}}insertMarker(){this.entries.unshift(ey)}pushElement(t,n){this._ensureNoahArkCondition(t),this.entries.unshift({type:En.Element,element:t,token:n})}insertElementAfterBookmark(t,n){const i=this.entries.indexOf(this.bookmark);this.entries.splice(i,0,{type:En.Element,element:t,token:n})}removeEntry(t){const n=this.entries.indexOf(t);n!==-1&&this.entries.splice(n,1)}clearToLastMarker(){const t=this.entries.indexOf(ey);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const n=this.entries.find(i=>i.type===En.Marker||this.treeAdapter.getTagName(i.element)===t);return n&&n.type===En.Element?n:null}getElementEntry(t){return this.entries.find(n=>n.type===En.Element&&n.element===t)}}const Xn={createDocument(){return{nodeName:"#document",mode:Jt.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,n){return{nodeName:e,tagName:e,attrs:n,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,n){const i=e.childNodes.indexOf(n);e.childNodes.splice(i,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,n,i){const r=e.childNodes.find(o=>o.nodeName==="#documentType");if(r)r.name=t,r.publicId=n,r.systemId=i;else{const o={nodeName:"#documentType",name:t,publicId:n,systemId:i,parentNode:null};Xn.appendChild(e,o)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const n=e.childNodes[e.childNodes.length-1];if(Xn.isTextNode(n)){n.value+=t;return}}Xn.appendChild(e,Xn.createTextNode(t))},insertTextBefore(e,t,n){const i=e.childNodes[e.childNodes.indexOf(n)-1];i&&Xn.isTextNode(i)?i.value+=t:Xn.insertBefore(e,Xn.createTextNode(t),n)},adoptAttributes(e,t){const n=new Set(e.attrs.map(i=>i.name));for(let i=0;i<t.length;i++)n.has(t[i].name)||e.attrs.push(t[i])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},t1="html",vN="about:legacy-compat",TN="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",n1=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],EN=[...n1,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],_N=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),i1=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],xN=[...i1,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function ty(e,t){return t.some(n=>e.startsWith(n))}function SN(e){return e.name===t1&&e.publicId===null&&(e.systemId===null||e.systemId===vN)}function wN(e){if(e.name!==t1)return Jt.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===TN)return Jt.QUIRKS;let{publicId:n}=e;if(n!==null){if(n=n.toLowerCase(),_N.has(n))return Jt.QUIRKS;let i=t===null?EN:n1;if(ty(n,i))return Jt.QUIRKS;if(i=t===null?i1:xN,ty(n,i))return Jt.LIMITED_QUIRKS}return Jt.NO_QUIRKS}const ny={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},DN="definitionurl",IN="definitionURL",kN=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),CN=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:F.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:F.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:F.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:F.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:F.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:F.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:F.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:F.XML}],["xml:space",{prefix:"xml",name:"space",namespace:F.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:F.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:F.XMLNS}]]),AN=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),ON=new Set([u.B,u.BIG,u.BLOCKQUOTE,u.BODY,u.BR,u.CENTER,u.CODE,u.DD,u.DIV,u.DL,u.DT,u.EM,u.EMBED,u.H1,u.H2,u.H3,u.H4,u.H5,u.H6,u.HEAD,u.HR,u.I,u.IMG,u.LI,u.LISTING,u.MENU,u.META,u.NOBR,u.OL,u.P,u.PRE,u.RUBY,u.S,u.SMALL,u.SPAN,u.STRONG,u.STRIKE,u.SUB,u.SUP,u.TABLE,u.TT,u.U,u.UL,u.VAR]);function NN(e){const t=e.tagID;return t===u.FONT&&e.attrs.some(({name:i})=>i===Fi.COLOR||i===Fi.SIZE||i===Fi.FACE)||ON.has(t)}function r1(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===DN){e.attrs[t].name=IN;break}}function o1(e){for(let t=0;t<e.attrs.length;t++){const n=kN.get(e.attrs[t].name);n!=null&&(e.attrs[t].name=n)}}function up(e){for(let t=0;t<e.attrs.length;t++){const n=CN.get(e.attrs[t].name);n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace)}}function PN(e){const t=AN.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=jr(e.tagName))}function MN(e,t){return t===F.MATHML&&(e===u.MI||e===u.MO||e===u.MN||e===u.MS||e===u.MTEXT)}function RN(e,t,n){if(t===F.MATHML&&e===u.ANNOTATION_XML){for(let i=0;i<n.length;i++)if(n[i].name===Fi.ENCODING){const r=n[i].value.toLowerCase();return r===ny.TEXT_HTML||r===ny.APPLICATION_XML}}return t===F.SVG&&(e===u.FOREIGN_OBJECT||e===u.DESC||e===u.TITLE)}function LN(e,t,n,i){return(!i||i===F.HTML)&&RN(e,t,n)||(!i||i===F.MATHML)&&MN(e,t)}const FN="hidden",BN=8,zN=3;var x;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(x||(x={}));const jN={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},s1=new Set([u.TABLE,u.TBODY,u.TFOOT,u.THEAD,u.TR]),iy={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:Xn,onParseError:null};class ry{constructor(t,n,i=null,r=null){this.fragmentContext=i,this.scriptHandler=r,this.currentToken=null,this.stopped=!1,this.insertionMode=x.INITIAL,this.originalInsertionMode=x.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...iy,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=n??this.treeAdapter.createDocument(),this.tokenizer=new cN(this.options,this),this.activeFormattingElements=new bN(this.treeAdapter),this.fragmentContextID=i?jr(this.treeAdapter.getTagName(i)):u.UNKNOWN,this._setContextModes(i??this.document,this.fragmentContextID),this.openElements=new yN(this.document,this.treeAdapter,this)}static parse(t,n){const i=new this(n);return i.tokenizer.write(t,!0),i.document}static getFragmentParser(t,n){const i={...iy,...n};t??(t=i.treeAdapter.createElement(k.TEMPLATE,F.HTML,[]));const r=i.treeAdapter.createElement("documentmock",F.HTML,[]),o=new this(i,r,t);return o.fragmentContextID===u.TEMPLATE&&o.tmplInsertionModeStack.unshift(x.IN_TEMPLATE),o._initTokenizerForFragmentParsing(),o._insertFakeRootElement(),o._resetInsertionMode(),o._findFormInFragmentContext(),o}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),n=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,n),n}_err(t,n,i){var r;if(!this.onParseError)return;const o=(r=t.location)!==null&&r!==void 0?r:jN,s={code:n,startLine:o.startLine,startCol:o.startCol,startOffset:o.startOffset,endLine:i?o.startLine:o.endLine,endCol:i?o.startCol:o.endCol,endOffset:i?o.startOffset:o.endOffset};this.onParseError(s)}onItemPush(t,n,i){var r,o;(o=(r=this.treeAdapter).onItemPush)===null||o===void 0||o.call(r,t),i&&this.openElements.stackTop>0&&this._setContextModes(t,n)}onItemPop(t,n){var i,r;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(r=(i=this.treeAdapter).onItemPop)===null||r===void 0||r.call(i,t,this.openElements.current),n){let o,s;this.openElements.stackTop===0&&this.fragmentContext?(o=this.fragmentContext,s=this.fragmentContextID):{current:o,currentTagId:s}=this.openElements,this._setContextModes(o,s)}}_setContextModes(t,n){const i=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===F.HTML;this.currentNotInHTML=!i,this.tokenizer.inForeignNode=!i&&t!==void 0&&n!==void 0&&!this._isIntegrationPoint(n,t)}_switchToTextParsing(t,n){this._insertElement(t,F.HTML),this.tokenizer.state=n,this.originalInsertionMode=this.insertionMode,this.insertionMode=x.TEXT}switchToPlaintextParsing(){this.insertionMode=x.TEXT,this.originalInsertionMode=x.IN_BODY,this.tokenizer.state=Ve.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===k.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==F.HTML))switch(this.fragmentContextID){case u.TITLE:case u.TEXTAREA:{this.tokenizer.state=Ve.RCDATA;break}case u.STYLE:case u.XMP:case u.IFRAME:case u.NOEMBED:case u.NOFRAMES:case u.NOSCRIPT:{this.tokenizer.state=Ve.RAWTEXT;break}case u.SCRIPT:{this.tokenizer.state=Ve.SCRIPT_DATA;break}case u.PLAINTEXT:{this.tokenizer.state=Ve.PLAINTEXT;break}}}_setDocumentType(t){const n=t.name||"",i=t.publicId||"",r=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,n,i,r),t.location){const s=this.treeAdapter.getChildNodes(this.document).find(a=>this.treeAdapter.isDocumentTypeNode(a));s&&this.treeAdapter.setNodeSourceCodeLocation(s,t.location)}}_attachElementToTree(t,n){if(this.options.sourceCodeLocationInfo){const i=n&&{...n,startTag:n};this.treeAdapter.setNodeSourceCodeLocation(t,i)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const i=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(i??this.document,t)}}_appendElement(t,n){const i=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(i,t.location)}_insertElement(t,n){const i=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(i,t.location),this.openElements.push(i,t.tagID)}_insertFakeElement(t,n){const i=this.treeAdapter.createElement(t,F.HTML,[]);this._attachElementToTree(i,null),this.openElements.push(i,n)}_insertTemplate(t){const n=this.treeAdapter.createElement(t.tagName,F.HTML,t.attrs),i=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(n,i),this._attachElementToTree(n,t.location),this.openElements.push(n,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(i,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(k.HTML,F.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,u.HTML)}_appendCommentNode(t,n){const i=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(n,i),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(i,t.location)}_insertCharacters(t){let n,i;if(this._shouldFosterParentOnInsertion()?({parent:n,beforeElement:i}=this._findFosterParentingLocation(),i?this.treeAdapter.insertTextBefore(n,t.chars,i):this.treeAdapter.insertText(n,t.chars)):(n=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(n,t.chars)),!t.location)return;const r=this.treeAdapter.getChildNodes(n),o=i?r.lastIndexOf(i):r.length,s=r[o-1];if(this.treeAdapter.getNodeSourceCodeLocation(s)){const{endLine:l,endCol:c,endOffset:d}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(s,{endLine:l,endCol:c,endOffset:d})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(s,t.location)}_adoptNodes(t,n){for(let i=this.treeAdapter.getFirstChild(t);i;i=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(i),this.treeAdapter.appendChild(n,i)}_setEndLocation(t,n){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&n.location){const i=n.location,r=this.treeAdapter.getTagName(t),o=n.type===ve.END_TAG&&r===n.tagName?{endTag:{...i},endLine:i.endLine,endCol:i.endCol,endOffset:i.endOffset}:{endLine:i.startLine,endCol:i.startCol,endOffset:i.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,o)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let n,i;return this.openElements.stackTop===0&&this.fragmentContext?(n=this.fragmentContext,i=this.fragmentContextID):{current:n,currentTagId:i}=this.openElements,t.tagID===u.SVG&&this.treeAdapter.getTagName(n)===k.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(n)===F.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===u.MGLYPH||t.tagID===u.MALIGNMARK)&&i!==void 0&&!this._isIntegrationPoint(i,n,F.HTML)}_processToken(t){switch(t.type){case ve.CHARACTER:{this.onCharacter(t);break}case ve.NULL_CHARACTER:{this.onNullCharacter(t);break}case ve.COMMENT:{this.onComment(t);break}case ve.DOCTYPE:{this.onDoctype(t);break}case ve.START_TAG:{this._processStartTag(t);break}case ve.END_TAG:{this.onEndTag(t);break}case ve.EOF:{this.onEof(t);break}case ve.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,n,i){const r=this.treeAdapter.getNamespaceURI(n),o=this.treeAdapter.getAttrList(n);return LN(t,r,o,i)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const n=this.activeFormattingElements.entries.findIndex(r=>r.type===En.Marker||this.openElements.contains(r.element)),i=n===-1?t-1:n-1;for(let r=i;r>=0;r--){const o=this.activeFormattingElements.entries[r];this._insertElement(o.token,this.treeAdapter.getNamespaceURI(o.element)),o.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=x.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(u.P),this.openElements.popUntilTagNamePopped(u.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case u.TR:{this.insertionMode=x.IN_ROW;return}case u.TBODY:case u.THEAD:case u.TFOOT:{this.insertionMode=x.IN_TABLE_BODY;return}case u.CAPTION:{this.insertionMode=x.IN_CAPTION;return}case u.COLGROUP:{this.insertionMode=x.IN_COLUMN_GROUP;return}case u.TABLE:{this.insertionMode=x.IN_TABLE;return}case u.BODY:{this.insertionMode=x.IN_BODY;return}case u.FRAMESET:{this.insertionMode=x.IN_FRAMESET;return}case u.SELECT:{this._resetInsertionModeForSelect(t);return}case u.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case u.HTML:{this.insertionMode=this.headElement?x.AFTER_HEAD:x.BEFORE_HEAD;return}case u.TD:case u.TH:{if(t>0){this.insertionMode=x.IN_CELL;return}break}case u.HEAD:{if(t>0){this.insertionMode=x.IN_HEAD;return}break}}this.insertionMode=x.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let n=t-1;n>0;n--){const i=this.openElements.tagIDs[n];if(i===u.TEMPLATE)break;if(i===u.TABLE){this.insertionMode=x.IN_SELECT_IN_TABLE;return}}this.insertionMode=x.IN_SELECT}_isElementCausesFosterParenting(t){return s1.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const n=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case u.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(n)===F.HTML)return{parent:this.treeAdapter.getTemplateContent(n),beforeElement:null};break}case u.TABLE:{const i=this.treeAdapter.getParentNode(n);return i?{parent:i,beforeElement:n}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const n=this._findFosterParentingLocation();n.beforeElement?this.treeAdapter.insertBefore(n.parent,t,n.beforeElement):this.treeAdapter.appendChild(n.parent,t)}_isSpecialElement(t,n){const i=this.treeAdapter.getNamespaceURI(t);return sN[i].has(n)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){g4(this,t);return}switch(this.insertionMode){case x.INITIAL:{ao(this,t);break}case x.BEFORE_HTML:{Co(this,t);break}case x.BEFORE_HEAD:{Ao(this,t);break}case x.IN_HEAD:{Oo(this,t);break}case x.IN_HEAD_NO_SCRIPT:{No(this,t);break}case x.AFTER_HEAD:{Po(this,t);break}case x.IN_BODY:case x.IN_CAPTION:case x.IN_CELL:case x.IN_TEMPLATE:{l1(this,t);break}case x.TEXT:case x.IN_SELECT:case x.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case x.IN_TABLE:case x.IN_TABLE_BODY:case x.IN_ROW:{Fu(this,t);break}case x.IN_TABLE_TEXT:{p1(this,t);break}case x.IN_COLUMN_GROUP:{ul(this,t);break}case x.AFTER_BODY:{cl(this,t);break}case x.AFTER_AFTER_BODY:{Oa(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){m4(this,t);return}switch(this.insertionMode){case x.INITIAL:{ao(this,t);break}case x.BEFORE_HTML:{Co(this,t);break}case x.BEFORE_HEAD:{Ao(this,t);break}case x.IN_HEAD:{Oo(this,t);break}case x.IN_HEAD_NO_SCRIPT:{No(this,t);break}case x.AFTER_HEAD:{Po(this,t);break}case x.TEXT:{this._insertCharacters(t);break}case x.IN_TABLE:case x.IN_TABLE_BODY:case x.IN_ROW:{Fu(this,t);break}case x.IN_COLUMN_GROUP:{ul(this,t);break}case x.AFTER_BODY:{cl(this,t);break}case x.AFTER_AFTER_BODY:{Oa(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){Kc(this,t);return}switch(this.insertionMode){case x.INITIAL:case x.BEFORE_HTML:case x.BEFORE_HEAD:case x.IN_HEAD:case x.IN_HEAD_NO_SCRIPT:case x.AFTER_HEAD:case x.IN_BODY:case x.IN_TABLE:case x.IN_CAPTION:case x.IN_COLUMN_GROUP:case x.IN_TABLE_BODY:case x.IN_ROW:case x.IN_CELL:case x.IN_SELECT:case x.IN_SELECT_IN_TABLE:case x.IN_TEMPLATE:case x.IN_FRAMESET:case x.AFTER_FRAMESET:{Kc(this,t);break}case x.IN_TABLE_TEXT:{lo(this,t);break}case x.AFTER_BODY:{YN(this,t);break}case x.AFTER_AFTER_BODY:case x.AFTER_AFTER_FRAMESET:{QN(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case x.INITIAL:{GN(this,t);break}case x.BEFORE_HEAD:case x.IN_HEAD:case x.IN_HEAD_NO_SCRIPT:case x.AFTER_HEAD:{this._err(t,O.misplacedDoctype);break}case x.IN_TABLE_TEXT:{lo(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,O.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?y4(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case x.INITIAL:{ao(this,t);break}case x.BEFORE_HTML:{KN(this,t);break}case x.BEFORE_HEAD:{JN(this,t);break}case x.IN_HEAD:{mn(this,t);break}case x.IN_HEAD_NO_SCRIPT:{tP(this,t);break}case x.AFTER_HEAD:{iP(this,t);break}case x.IN_BODY:{yt(this,t);break}case x.IN_TABLE:{Or(this,t);break}case x.IN_TABLE_TEXT:{lo(this,t);break}case x.IN_CAPTION:{ZP(this,t);break}case x.IN_COLUMN_GROUP:{hp(this,t);break}case x.IN_TABLE_BODY:{zl(this,t);break}case x.IN_ROW:{jl(this,t);break}case x.IN_CELL:{n4(this,t);break}case x.IN_SELECT:{y1(this,t);break}case x.IN_SELECT_IN_TABLE:{r4(this,t);break}case x.IN_TEMPLATE:{s4(this,t);break}case x.AFTER_BODY:{l4(this,t);break}case x.IN_FRAMESET:{u4(this,t);break}case x.AFTER_FRAMESET:{d4(this,t);break}case x.AFTER_AFTER_BODY:{f4(this,t);break}case x.AFTER_AFTER_FRAMESET:{p4(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?b4(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case x.INITIAL:{ao(this,t);break}case x.BEFORE_HTML:{XN(this,t);break}case x.BEFORE_HEAD:{ZN(this,t);break}case x.IN_HEAD:{eP(this,t);break}case x.IN_HEAD_NO_SCRIPT:{nP(this,t);break}case x.AFTER_HEAD:{rP(this,t);break}case x.IN_BODY:{Bl(this,t);break}case x.TEXT:{$P(this,t);break}case x.IN_TABLE:{ts(this,t);break}case x.IN_TABLE_TEXT:{lo(this,t);break}case x.IN_CAPTION:{e4(this,t);break}case x.IN_COLUMN_GROUP:{t4(this,t);break}case x.IN_TABLE_BODY:{Xc(this,t);break}case x.IN_ROW:{g1(this,t);break}case x.IN_CELL:{i4(this,t);break}case x.IN_SELECT:{b1(this,t);break}case x.IN_SELECT_IN_TABLE:{o4(this,t);break}case x.IN_TEMPLATE:{a4(this,t);break}case x.AFTER_BODY:{T1(this,t);break}case x.IN_FRAMESET:{c4(this,t);break}case x.AFTER_FRAMESET:{h4(this,t);break}case x.AFTER_AFTER_BODY:{Oa(this,t);break}}}onEof(t){switch(this.insertionMode){case x.INITIAL:{ao(this,t);break}case x.BEFORE_HTML:{Co(this,t);break}case x.BEFORE_HEAD:{Ao(this,t);break}case x.IN_HEAD:{Oo(this,t);break}case x.IN_HEAD_NO_SCRIPT:{No(this,t);break}case x.AFTER_HEAD:{Po(this,t);break}case x.IN_BODY:case x.IN_TABLE:case x.IN_CAPTION:case x.IN_COLUMN_GROUP:case x.IN_TABLE_BODY:case x.IN_ROW:case x.IN_CELL:case x.IN_SELECT:case x.IN_SELECT_IN_TABLE:{h1(this,t);break}case x.TEXT:{qP(this,t);break}case x.IN_TABLE_TEXT:{lo(this,t);break}case x.IN_TEMPLATE:{v1(this,t);break}case x.AFTER_BODY:case x.IN_FRAMESET:case x.AFTER_FRAMESET:case x.AFTER_AFTER_BODY:case x.AFTER_AFTER_FRAMESET:{dp(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===g.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case x.IN_HEAD:case x.IN_HEAD_NO_SCRIPT:case x.AFTER_HEAD:case x.TEXT:case x.IN_COLUMN_GROUP:case x.IN_SELECT:case x.IN_SELECT_IN_TABLE:case x.IN_FRAMESET:case x.AFTER_FRAMESET:{this._insertCharacters(t);break}case x.IN_BODY:case x.IN_CAPTION:case x.IN_CELL:case x.IN_TEMPLATE:case x.AFTER_BODY:case x.AFTER_AFTER_BODY:case x.AFTER_AFTER_FRAMESET:{a1(this,t);break}case x.IN_TABLE:case x.IN_TABLE_BODY:case x.IN_ROW:{Fu(this,t);break}case x.IN_TABLE_TEXT:{f1(this,t);break}}}}function UN(e,t){let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagID)||(n=null):(e.activeFormattingElements.removeEntry(n),n=null):d1(e,t),n}function HN(e,t){let n=null,i=e.openElements.stackTop;for(;i>=0;i--){const r=e.openElements.items[i];if(r===t.element)break;e._isSpecialElement(r,e.openElements.tagIDs[i])&&(n=r)}return n||(e.openElements.shortenToLength(Math.max(i,0)),e.activeFormattingElements.removeEntry(t)),n}function $N(e,t,n){let i=t,r=e.openElements.getCommonAncestor(t);for(let o=0,s=r;s!==n;o++,s=r){r=e.openElements.getCommonAncestor(s);const a=e.activeFormattingElements.getElementEntry(s),l=a&&o>=zN;!a||l?(l&&e.activeFormattingElements.removeEntry(a),e.openElements.remove(s)):(s=qN(e,a),i===t&&(e.activeFormattingElements.bookmark=a),e.treeAdapter.detachNode(i),e.treeAdapter.appendChild(s,i),i=s)}return i}function qN(e,t){const n=e.treeAdapter.getNamespaceURI(t.element),i=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs);return e.openElements.replace(t.element,i),t.element=i,i}function WN(e,t,n){const i=e.treeAdapter.getTagName(t),r=jr(i);if(e._isElementCausesFosterParenting(r))e._fosterParentElement(n);else{const o=e.treeAdapter.getNamespaceURI(t);r===u.TEMPLATE&&o===F.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n)}}function VN(e,t,n){const i=e.treeAdapter.getNamespaceURI(n.element),{token:r}=n,o=e.treeAdapter.createElement(r.tagName,i,r.attrs);e._adoptNodes(t,o),e.treeAdapter.appendChild(t,o),e.activeFormattingElements.insertElementAfterBookmark(o,r),e.activeFormattingElements.removeEntry(n),e.openElements.remove(n.element),e.openElements.insertAfter(t,o,r.tagID)}function cp(e,t){for(let n=0;n<BN;n++){const i=UN(e,t);if(!i)break;const r=HN(e,i);if(!r)break;e.activeFormattingElements.bookmark=i;const o=$N(e,r,i.element),s=e.openElements.getCommonAncestor(i.element);e.treeAdapter.detachNode(o),s&&WN(e,s,o),VN(e,r,i)}}function Kc(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function YN(e,t){e._appendCommentNode(t,e.openElements.items[0])}function QN(e,t){e._appendCommentNode(t,e.document)}function dp(e,t){if(e.stopped=!0,t.location){const n=e.fragmentContext?0:2;for(let i=e.openElements.stackTop;i>=n;i--)e._setEndLocation(e.openElements.items[i],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const i=e.openElements.items[0],r=e.treeAdapter.getNodeSourceCodeLocation(i);if(r&&!r.endTag&&(e._setEndLocation(i,t),e.openElements.stackTop>=1)){const o=e.openElements.items[1],s=e.treeAdapter.getNodeSourceCodeLocation(o);s&&!s.endTag&&e._setEndLocation(o,t)}}}}function GN(e,t){e._setDocumentType(t);const n=t.forceQuirks?Jt.QUIRKS:wN(t);SN(t)||e._err(t,O.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode=x.BEFORE_HTML}function ao(e,t){e._err(t,O.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,Jt.QUIRKS),e.insertionMode=x.BEFORE_HTML,e._processToken(t)}function KN(e,t){t.tagID===u.HTML?(e._insertElement(t,F.HTML),e.insertionMode=x.BEFORE_HEAD):Co(e,t)}function XN(e,t){const n=t.tagID;(n===u.HTML||n===u.HEAD||n===u.BODY||n===u.BR)&&Co(e,t)}function Co(e,t){e._insertFakeRootElement(),e.insertionMode=x.BEFORE_HEAD,e._processToken(t)}function JN(e,t){switch(t.tagID){case u.HTML:{yt(e,t);break}case u.HEAD:{e._insertElement(t,F.HTML),e.headElement=e.openElements.current,e.insertionMode=x.IN_HEAD;break}default:Ao(e,t)}}function ZN(e,t){const n=t.tagID;n===u.HEAD||n===u.BODY||n===u.HTML||n===u.BR?Ao(e,t):e._err(t,O.endTagWithoutMatchingOpenElement)}function Ao(e,t){e._insertFakeElement(k.HEAD,u.HEAD),e.headElement=e.openElements.current,e.insertionMode=x.IN_HEAD,e._processToken(t)}function mn(e,t){switch(t.tagID){case u.HTML:{yt(e,t);break}case u.BASE:case u.BASEFONT:case u.BGSOUND:case u.LINK:case u.META:{e._appendElement(t,F.HTML),t.ackSelfClosing=!0;break}case u.TITLE:{e._switchToTextParsing(t,Ve.RCDATA);break}case u.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,Ve.RAWTEXT):(e._insertElement(t,F.HTML),e.insertionMode=x.IN_HEAD_NO_SCRIPT);break}case u.NOFRAMES:case u.STYLE:{e._switchToTextParsing(t,Ve.RAWTEXT);break}case u.SCRIPT:{e._switchToTextParsing(t,Ve.SCRIPT_DATA);break}case u.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=x.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(x.IN_TEMPLATE);break}case u.HEAD:{e._err(t,O.misplacedStartTagForHeadElement);break}default:Oo(e,t)}}function eP(e,t){switch(t.tagID){case u.HEAD:{e.openElements.pop(),e.insertionMode=x.AFTER_HEAD;break}case u.BODY:case u.BR:case u.HTML:{Oo(e,t);break}case u.TEMPLATE:{Gi(e,t);break}default:e._err(t,O.endTagWithoutMatchingOpenElement)}}function Gi(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==u.TEMPLATE&&e._err(t,O.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(u.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,O.endTagWithoutMatchingOpenElement)}function Oo(e,t){e.openElements.pop(),e.insertionMode=x.AFTER_HEAD,e._processToken(t)}function tP(e,t){switch(t.tagID){case u.HTML:{yt(e,t);break}case u.BASEFONT:case u.BGSOUND:case u.HEAD:case u.LINK:case u.META:case u.NOFRAMES:case u.STYLE:{mn(e,t);break}case u.NOSCRIPT:{e._err(t,O.nestedNoscriptInHead);break}default:No(e,t)}}function nP(e,t){switch(t.tagID){case u.NOSCRIPT:{e.openElements.pop(),e.insertionMode=x.IN_HEAD;break}case u.BR:{No(e,t);break}default:e._err(t,O.endTagWithoutMatchingOpenElement)}}function No(e,t){const n=t.type===ve.EOF?O.openElementsLeftAfterEof:O.disallowedContentInNoscriptInHead;e._err(t,n),e.openElements.pop(),e.insertionMode=x.IN_HEAD,e._processToken(t)}function iP(e,t){switch(t.tagID){case u.HTML:{yt(e,t);break}case u.BODY:{e._insertElement(t,F.HTML),e.framesetOk=!1,e.insertionMode=x.IN_BODY;break}case u.FRAMESET:{e._insertElement(t,F.HTML),e.insertionMode=x.IN_FRAMESET;break}case u.BASE:case u.BASEFONT:case u.BGSOUND:case u.LINK:case u.META:case u.NOFRAMES:case u.SCRIPT:case u.STYLE:case u.TEMPLATE:case u.TITLE:{e._err(t,O.abandonedHeadElementChild),e.openElements.push(e.headElement,u.HEAD),mn(e,t),e.openElements.remove(e.headElement);break}case u.HEAD:{e._err(t,O.misplacedStartTagForHeadElement);break}default:Po(e,t)}}function rP(e,t){switch(t.tagID){case u.BODY:case u.HTML:case u.BR:{Po(e,t);break}case u.TEMPLATE:{Gi(e,t);break}default:e._err(t,O.endTagWithoutMatchingOpenElement)}}function Po(e,t){e._insertFakeElement(k.BODY,u.BODY),e.insertionMode=x.IN_BODY,Fl(e,t)}function Fl(e,t){switch(t.type){case ve.CHARACTER:{l1(e,t);break}case ve.WHITESPACE_CHARACTER:{a1(e,t);break}case ve.COMMENT:{Kc(e,t);break}case ve.START_TAG:{yt(e,t);break}case ve.END_TAG:{Bl(e,t);break}case ve.EOF:{h1(e,t);break}}}function a1(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function l1(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function oP(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function sP(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs))}function aP(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,F.HTML),e.insertionMode=x.IN_FRAMESET)}function lP(e,t){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(t,F.HTML)}function uP(e,t){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&Gc.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,F.HTML)}function cP(e,t){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(t,F.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function dP(e,t){const n=e.openElements.tmplCount>0;(!e.formElement||n)&&(e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(t,F.HTML),n||(e.formElement=e.openElements.current))}function hP(e,t){e.framesetOk=!1;const n=t.tagID;for(let i=e.openElements.stackTop;i>=0;i--){const r=e.openElements.tagIDs[i];if(n===u.LI&&r===u.LI||(n===u.DD||n===u.DT)&&(r===u.DD||r===u.DT)){e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.popUntilTagNamePopped(r);break}if(r!==u.ADDRESS&&r!==u.DIV&&r!==u.P&&e._isSpecialElement(e.openElements.items[i],r))break}e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(t,F.HTML)}function fP(e,t){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(t,F.HTML),e.tokenizer.state=Ve.PLAINTEXT}function pP(e,t){e.openElements.hasInScope(u.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(u.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,F.HTML),e.framesetOk=!1}function mP(e,t){const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(k.A);n&&(cp(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),e._reconstructActiveFormattingElements(),e._insertElement(t,F.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function gP(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,F.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function yP(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(u.NOBR)&&(cp(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,F.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function bP(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,F.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function vP(e,t){e.treeAdapter.getDocumentMode(e.document)!==Jt.QUIRKS&&e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._insertElement(t,F.HTML),e.framesetOk=!1,e.insertionMode=x.IN_TABLE}function u1(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,F.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function c1(e){const t=Jv(e,Fi.TYPE);return t!=null&&t.toLowerCase()===FN}function TP(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,F.HTML),c1(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function EP(e,t){e._appendElement(t,F.HTML),t.ackSelfClosing=!0}function _P(e,t){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._appendElement(t,F.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function xP(e,t){t.tagName=k.IMG,t.tagID=u.IMG,u1(e,t)}function SP(e,t){e._insertElement(t,F.HTML),e.skipNextNewLine=!0,e.tokenizer.state=Ve.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=x.TEXT}function wP(e,t){e.openElements.hasInButtonScope(u.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,Ve.RAWTEXT)}function DP(e,t){e.framesetOk=!1,e._switchToTextParsing(t,Ve.RAWTEXT)}function oy(e,t){e._switchToTextParsing(t,Ve.RAWTEXT)}function IP(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,F.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===x.IN_TABLE||e.insertionMode===x.IN_CAPTION||e.insertionMode===x.IN_TABLE_BODY||e.insertionMode===x.IN_ROW||e.insertionMode===x.IN_CELL?x.IN_SELECT_IN_TABLE:x.IN_SELECT}function kP(e,t){e.openElements.currentTagId===u.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,F.HTML)}function CP(e,t){e.openElements.hasInScope(u.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,F.HTML)}function AP(e,t){e.openElements.hasInScope(u.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(u.RTC),e._insertElement(t,F.HTML)}function OP(e,t){e._reconstructActiveFormattingElements(),r1(t),up(t),t.selfClosing?e._appendElement(t,F.MATHML):e._insertElement(t,F.MATHML),t.ackSelfClosing=!0}function NP(e,t){e._reconstructActiveFormattingElements(),o1(t),up(t),t.selfClosing?e._appendElement(t,F.SVG):e._insertElement(t,F.SVG),t.ackSelfClosing=!0}function sy(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,F.HTML)}function yt(e,t){switch(t.tagID){case u.I:case u.S:case u.B:case u.U:case u.EM:case u.TT:case u.BIG:case u.CODE:case u.FONT:case u.SMALL:case u.STRIKE:case u.STRONG:{gP(e,t);break}case u.A:{mP(e,t);break}case u.H1:case u.H2:case u.H3:case u.H4:case u.H5:case u.H6:{uP(e,t);break}case u.P:case u.DL:case u.OL:case u.UL:case u.DIV:case u.DIR:case u.NAV:case u.MAIN:case u.MENU:case u.ASIDE:case u.CENTER:case u.FIGURE:case u.FOOTER:case u.HEADER:case u.HGROUP:case u.DIALOG:case u.DETAILS:case u.ADDRESS:case u.ARTICLE:case u.SEARCH:case u.SECTION:case u.SUMMARY:case u.FIELDSET:case u.BLOCKQUOTE:case u.FIGCAPTION:{lP(e,t);break}case u.LI:case u.DD:case u.DT:{hP(e,t);break}case u.BR:case u.IMG:case u.WBR:case u.AREA:case u.EMBED:case u.KEYGEN:{u1(e,t);break}case u.HR:{_P(e,t);break}case u.RB:case u.RTC:{CP(e,t);break}case u.RT:case u.RP:{AP(e,t);break}case u.PRE:case u.LISTING:{cP(e,t);break}case u.XMP:{wP(e,t);break}case u.SVG:{NP(e,t);break}case u.HTML:{oP(e,t);break}case u.BASE:case u.LINK:case u.META:case u.STYLE:case u.TITLE:case u.SCRIPT:case u.BGSOUND:case u.BASEFONT:case u.TEMPLATE:{mn(e,t);break}case u.BODY:{sP(e,t);break}case u.FORM:{dP(e,t);break}case u.NOBR:{yP(e,t);break}case u.MATH:{OP(e,t);break}case u.TABLE:{vP(e,t);break}case u.INPUT:{TP(e,t);break}case u.PARAM:case u.TRACK:case u.SOURCE:{EP(e,t);break}case u.IMAGE:{xP(e,t);break}case u.BUTTON:{pP(e,t);break}case u.APPLET:case u.OBJECT:case u.MARQUEE:{bP(e,t);break}case u.IFRAME:{DP(e,t);break}case u.SELECT:{IP(e,t);break}case u.OPTION:case u.OPTGROUP:{kP(e,t);break}case u.NOEMBED:case u.NOFRAMES:{oy(e,t);break}case u.FRAMESET:{aP(e,t);break}case u.TEXTAREA:{SP(e,t);break}case u.NOSCRIPT:{e.options.scriptingEnabled?oy(e,t):sy(e,t);break}case u.PLAINTEXT:{fP(e,t);break}case u.COL:case u.TH:case u.TD:case u.TR:case u.HEAD:case u.FRAME:case u.TBODY:case u.TFOOT:case u.THEAD:case u.CAPTION:case u.COLGROUP:break;default:sy(e,t)}}function PP(e,t){if(e.openElements.hasInScope(u.BODY)&&(e.insertionMode=x.AFTER_BODY,e.options.sourceCodeLocationInfo)){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e._setEndLocation(n,t)}}function MP(e,t){e.openElements.hasInScope(u.BODY)&&(e.insertionMode=x.AFTER_BODY,T1(e,t))}function RP(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n))}function LP(e){const t=e.openElements.tmplCount>0,{formElement:n}=e;t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(u.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(u.FORM):n&&e.openElements.remove(n))}function FP(e){e.openElements.hasInButtonScope(u.P)||e._insertFakeElement(k.P,u.P),e._closePElement()}function BP(e){e.openElements.hasInListItemScope(u.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(u.LI),e.openElements.popUntilTagNamePopped(u.LI))}function zP(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilTagNamePopped(n))}function jP(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function UP(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker())}function HP(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(k.BR,u.BR),e.openElements.pop(),e.framesetOk=!1}function d1(e,t){const n=t.tagName,i=t.tagID;for(let r=e.openElements.stackTop;r>0;r--){const o=e.openElements.items[r],s=e.openElements.tagIDs[r];if(i===s&&(i!==u.UNKNOWN||e.treeAdapter.getTagName(o)===n)){e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.stackTop>=r&&e.openElements.shortenToLength(r);break}if(e._isSpecialElement(o,s))break}}function Bl(e,t){switch(t.tagID){case u.A:case u.B:case u.I:case u.S:case u.U:case u.EM:case u.TT:case u.BIG:case u.CODE:case u.FONT:case u.NOBR:case u.SMALL:case u.STRIKE:case u.STRONG:{cp(e,t);break}case u.P:{FP(e);break}case u.DL:case u.UL:case u.OL:case u.DIR:case u.DIV:case u.NAV:case u.PRE:case u.MAIN:case u.MENU:case u.ASIDE:case u.BUTTON:case u.CENTER:case u.FIGURE:case u.FOOTER:case u.HEADER:case u.HGROUP:case u.DIALOG:case u.ADDRESS:case u.ARTICLE:case u.DETAILS:case u.SEARCH:case u.SECTION:case u.SUMMARY:case u.LISTING:case u.FIELDSET:case u.BLOCKQUOTE:case u.FIGCAPTION:{RP(e,t);break}case u.LI:{BP(e);break}case u.DD:case u.DT:{zP(e,t);break}case u.H1:case u.H2:case u.H3:case u.H4:case u.H5:case u.H6:{jP(e);break}case u.BR:{HP(e);break}case u.BODY:{PP(e,t);break}case u.HTML:{MP(e,t);break}case u.FORM:{LP(e);break}case u.APPLET:case u.OBJECT:case u.MARQUEE:{UP(e,t);break}case u.TEMPLATE:{Gi(e,t);break}default:d1(e,t)}}function h1(e,t){e.tmplInsertionModeStack.length>0?v1(e,t):dp(e,t)}function $P(e,t){var n;t.tagID===u.SCRIPT&&((n=e.scriptHandler)===null||n===void 0||n.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function qP(e,t){e._err(t,O.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function Fu(e,t){if(e.openElements.currentTagId!==void 0&&s1.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=x.IN_TABLE_TEXT,t.type){case ve.CHARACTER:{p1(e,t);break}case ve.WHITESPACE_CHARACTER:{f1(e,t);break}}else Ns(e,t)}function WP(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,F.HTML),e.insertionMode=x.IN_CAPTION}function VP(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,F.HTML),e.insertionMode=x.IN_COLUMN_GROUP}function YP(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(k.COLGROUP,u.COLGROUP),e.insertionMode=x.IN_COLUMN_GROUP,hp(e,t)}function QP(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,F.HTML),e.insertionMode=x.IN_TABLE_BODY}function GP(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(k.TBODY,u.TBODY),e.insertionMode=x.IN_TABLE_BODY,zl(e,t)}function KP(e,t){e.openElements.hasInTableScope(u.TABLE)&&(e.openElements.popUntilTagNamePopped(u.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function XP(e,t){c1(t)?e._appendElement(t,F.HTML):Ns(e,t),t.ackSelfClosing=!0}function JP(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,F.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function Or(e,t){switch(t.tagID){case u.TD:case u.TH:case u.TR:{GP(e,t);break}case u.STYLE:case u.SCRIPT:case u.TEMPLATE:{mn(e,t);break}case u.COL:{YP(e,t);break}case u.FORM:{JP(e,t);break}case u.TABLE:{KP(e,t);break}case u.TBODY:case u.TFOOT:case u.THEAD:{QP(e,t);break}case u.INPUT:{XP(e,t);break}case u.CAPTION:{WP(e,t);break}case u.COLGROUP:{VP(e,t);break}default:Ns(e,t)}}function ts(e,t){switch(t.tagID){case u.TABLE:{e.openElements.hasInTableScope(u.TABLE)&&(e.openElements.popUntilTagNamePopped(u.TABLE),e._resetInsertionMode());break}case u.TEMPLATE:{Gi(e,t);break}case u.BODY:case u.CAPTION:case u.COL:case u.COLGROUP:case u.HTML:case u.TBODY:case u.TD:case u.TFOOT:case u.TH:case u.THEAD:case u.TR:break;default:Ns(e,t)}}function Ns(e,t){const n=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,Fl(e,t),e.fosterParentingEnabled=n}function f1(e,t){e.pendingCharacterTokens.push(t)}function p1(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function lo(e,t){let n=0;if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)Ns(e,e.pendingCharacterTokens[n]);else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const m1=new Set([u.CAPTION,u.COL,u.COLGROUP,u.TBODY,u.TD,u.TFOOT,u.TH,u.THEAD,u.TR]);function ZP(e,t){const n=t.tagID;m1.has(n)?e.openElements.hasInTableScope(u.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(u.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=x.IN_TABLE,Or(e,t)):yt(e,t)}function e4(e,t){const n=t.tagID;switch(n){case u.CAPTION:case u.TABLE:{e.openElements.hasInTableScope(u.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(u.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=x.IN_TABLE,n===u.TABLE&&ts(e,t));break}case u.BODY:case u.COL:case u.COLGROUP:case u.HTML:case u.TBODY:case u.TD:case u.TFOOT:case u.TH:case u.THEAD:case u.TR:break;default:Bl(e,t)}}function hp(e,t){switch(t.tagID){case u.HTML:{yt(e,t);break}case u.COL:{e._appendElement(t,F.HTML),t.ackSelfClosing=!0;break}case u.TEMPLATE:{mn(e,t);break}default:ul(e,t)}}function t4(e,t){switch(t.tagID){case u.COLGROUP:{e.openElements.currentTagId===u.COLGROUP&&(e.openElements.pop(),e.insertionMode=x.IN_TABLE);break}case u.TEMPLATE:{Gi(e,t);break}case u.COL:break;default:ul(e,t)}}function ul(e,t){e.openElements.currentTagId===u.COLGROUP&&(e.openElements.pop(),e.insertionMode=x.IN_TABLE,e._processToken(t))}function zl(e,t){switch(t.tagID){case u.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,F.HTML),e.insertionMode=x.IN_ROW;break}case u.TH:case u.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(k.TR,u.TR),e.insertionMode=x.IN_ROW,jl(e,t);break}case u.CAPTION:case u.COL:case u.COLGROUP:case u.TBODY:case u.TFOOT:case u.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=x.IN_TABLE,Or(e,t));break}default:Or(e,t)}}function Xc(e,t){const n=t.tagID;switch(t.tagID){case u.TBODY:case u.TFOOT:case u.THEAD:{e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=x.IN_TABLE);break}case u.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=x.IN_TABLE,ts(e,t));break}case u.BODY:case u.CAPTION:case u.COL:case u.COLGROUP:case u.HTML:case u.TD:case u.TH:case u.TR:break;default:ts(e,t)}}function jl(e,t){switch(t.tagID){case u.TH:case u.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,F.HTML),e.insertionMode=x.IN_CELL,e.activeFormattingElements.insertMarker();break}case u.CAPTION:case u.COL:case u.COLGROUP:case u.TBODY:case u.TFOOT:case u.THEAD:case u.TR:{e.openElements.hasInTableScope(u.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=x.IN_TABLE_BODY,zl(e,t));break}default:Or(e,t)}}function g1(e,t){switch(t.tagID){case u.TR:{e.openElements.hasInTableScope(u.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=x.IN_TABLE_BODY);break}case u.TABLE:{e.openElements.hasInTableScope(u.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=x.IN_TABLE_BODY,Xc(e,t));break}case u.TBODY:case u.TFOOT:case u.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(u.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=x.IN_TABLE_BODY,Xc(e,t));break}case u.BODY:case u.CAPTION:case u.COL:case u.COLGROUP:case u.HTML:case u.TD:case u.TH:break;default:ts(e,t)}}function n4(e,t){const n=t.tagID;m1.has(n)?(e.openElements.hasInTableScope(u.TD)||e.openElements.hasInTableScope(u.TH))&&(e._closeTableCell(),jl(e,t)):yt(e,t)}function i4(e,t){const n=t.tagID;switch(n){case u.TD:case u.TH:{e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=x.IN_ROW);break}case u.TABLE:case u.TBODY:case u.TFOOT:case u.THEAD:case u.TR:{e.openElements.hasInTableScope(n)&&(e._closeTableCell(),g1(e,t));break}case u.BODY:case u.CAPTION:case u.COL:case u.COLGROUP:case u.HTML:break;default:Bl(e,t)}}function y1(e,t){switch(t.tagID){case u.HTML:{yt(e,t);break}case u.OPTION:{e.openElements.currentTagId===u.OPTION&&e.openElements.pop(),e._insertElement(t,F.HTML);break}case u.OPTGROUP:{e.openElements.currentTagId===u.OPTION&&e.openElements.pop(),e.openElements.currentTagId===u.OPTGROUP&&e.openElements.pop(),e._insertElement(t,F.HTML);break}case u.HR:{e.openElements.currentTagId===u.OPTION&&e.openElements.pop(),e.openElements.currentTagId===u.OPTGROUP&&e.openElements.pop(),e._appendElement(t,F.HTML),t.ackSelfClosing=!0;break}case u.INPUT:case u.KEYGEN:case u.TEXTAREA:case u.SELECT:{e.openElements.hasInSelectScope(u.SELECT)&&(e.openElements.popUntilTagNamePopped(u.SELECT),e._resetInsertionMode(),t.tagID!==u.SELECT&&e._processStartTag(t));break}case u.SCRIPT:case u.TEMPLATE:{mn(e,t);break}}}function b1(e,t){switch(t.tagID){case u.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===u.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===u.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===u.OPTGROUP&&e.openElements.pop();break}case u.OPTION:{e.openElements.currentTagId===u.OPTION&&e.openElements.pop();break}case u.SELECT:{e.openElements.hasInSelectScope(u.SELECT)&&(e.openElements.popUntilTagNamePopped(u.SELECT),e._resetInsertionMode());break}case u.TEMPLATE:{Gi(e,t);break}}}function r4(e,t){const n=t.tagID;n===u.CAPTION||n===u.TABLE||n===u.TBODY||n===u.TFOOT||n===u.THEAD||n===u.TR||n===u.TD||n===u.TH?(e.openElements.popUntilTagNamePopped(u.SELECT),e._resetInsertionMode(),e._processStartTag(t)):y1(e,t)}function o4(e,t){const n=t.tagID;n===u.CAPTION||n===u.TABLE||n===u.TBODY||n===u.TFOOT||n===u.THEAD||n===u.TR||n===u.TD||n===u.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(u.SELECT),e._resetInsertionMode(),e.onEndTag(t)):b1(e,t)}function s4(e,t){switch(t.tagID){case u.BASE:case u.BASEFONT:case u.BGSOUND:case u.LINK:case u.META:case u.NOFRAMES:case u.SCRIPT:case u.STYLE:case u.TEMPLATE:case u.TITLE:{mn(e,t);break}case u.CAPTION:case u.COLGROUP:case u.TBODY:case u.TFOOT:case u.THEAD:{e.tmplInsertionModeStack[0]=x.IN_TABLE,e.insertionMode=x.IN_TABLE,Or(e,t);break}case u.COL:{e.tmplInsertionModeStack[0]=x.IN_COLUMN_GROUP,e.insertionMode=x.IN_COLUMN_GROUP,hp(e,t);break}case u.TR:{e.tmplInsertionModeStack[0]=x.IN_TABLE_BODY,e.insertionMode=x.IN_TABLE_BODY,zl(e,t);break}case u.TD:case u.TH:{e.tmplInsertionModeStack[0]=x.IN_ROW,e.insertionMode=x.IN_ROW,jl(e,t);break}default:e.tmplInsertionModeStack[0]=x.IN_BODY,e.insertionMode=x.IN_BODY,yt(e,t)}}function a4(e,t){t.tagID===u.TEMPLATE&&Gi(e,t)}function v1(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(u.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):dp(e,t)}function l4(e,t){t.tagID===u.HTML?yt(e,t):cl(e,t)}function T1(e,t){var n;if(t.tagID===u.HTML){if(e.fragmentContext||(e.insertionMode=x.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===u.HTML){e._setEndLocation(e.openElements.items[0],t);const i=e.openElements.items[1];i&&!(!((n=e.treeAdapter.getNodeSourceCodeLocation(i))===null||n===void 0)&&n.endTag)&&e._setEndLocation(i,t)}}else cl(e,t)}function cl(e,t){e.insertionMode=x.IN_BODY,Fl(e,t)}function u4(e,t){switch(t.tagID){case u.HTML:{yt(e,t);break}case u.FRAMESET:{e._insertElement(t,F.HTML);break}case u.FRAME:{e._appendElement(t,F.HTML),t.ackSelfClosing=!0;break}case u.NOFRAMES:{mn(e,t);break}}}function c4(e,t){t.tagID===u.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==u.FRAMESET&&(e.insertionMode=x.AFTER_FRAMESET))}function d4(e,t){switch(t.tagID){case u.HTML:{yt(e,t);break}case u.NOFRAMES:{mn(e,t);break}}}function h4(e,t){t.tagID===u.HTML&&(e.insertionMode=x.AFTER_AFTER_FRAMESET)}function f4(e,t){t.tagID===u.HTML?yt(e,t):Oa(e,t)}function Oa(e,t){e.insertionMode=x.IN_BODY,Fl(e,t)}function p4(e,t){switch(t.tagID){case u.HTML:{yt(e,t);break}case u.NOFRAMES:{mn(e,t);break}}}function m4(e,t){t.chars=Be,e._insertCharacters(t)}function g4(e,t){e._insertCharacters(t),e.framesetOk=!1}function E1(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==F.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function y4(e,t){if(NN(t))E1(e),e._startTagOutsideForeignContent(t);else{const n=e._getAdjustedCurrentElement(),i=e.treeAdapter.getNamespaceURI(n);i===F.MATHML?r1(t):i===F.SVG&&(PN(t),o1(t)),up(t),t.selfClosing?e._appendElement(t,i):e._insertElement(t,i),t.ackSelfClosing=!0}}function b4(e,t){if(t.tagID===u.P||t.tagID===u.BR){E1(e),e._endTagOutsideForeignContent(t);return}for(let n=e.openElements.stackTop;n>0;n--){const i=e.openElements.items[n];if(e.treeAdapter.getNamespaceURI(i)===F.HTML){e._endTagOutsideForeignContent(t);break}const r=e.treeAdapter.getTagName(i);if(r.toLowerCase()===t.tagName){t.tagName=r,e.openElements.shortenToLength(n);break}}}k.AREA,k.BASE,k.BASEFONT,k.BGSOUND,k.BR,k.COL,k.EMBED,k.FRAME,k.HR,k.IMG,k.INPUT,k.KEYGEN,k.LINK,k.META,k.PARAM,k.SOURCE,k.TRACK,k.WBR;const v4=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,T4=new Set(["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"]),ay={sourceCodeLocationInfo:!0,scriptingEnabled:!1};function _1(e,t){const n=A4(e),i=Yv("type",{handlers:{root:E4,element:_4,text:x4,comment:S1,doctype:S4,raw:D4},unknown:I4}),r={parser:n?new ry(ay):ry.getFragmentParser(void 0,ay),handle(a){i(a,r)},stitches:!1,options:t||{}};i(e,r),Ur(r,An());const o=n?r.parser.document:r.parser.getFragment(),s=EO(o,{file:r.options.file});return r.stitches&&rp(s,"comment",function(a,l,c){const d=a;if(d.value.stitch&&c&&l!==void 0){const h=c.children;return h[l]=d.value.stitch,l}}),s.type==="root"&&s.children.length===1&&s.children[0].type===e.type?s.children[0]:s}function x1(e,t){let n=-1;if(e)for(;++n<e.length;)t.handle(e[n])}function E4(e,t){x1(e.children,t)}function _4(e,t){k4(e,t),x1(e.children,t),C4(e,t)}function x4(e,t){t.parser.tokenizer.state>4&&(t.parser.tokenizer.state=0);const n={type:ve.CHARACTER,chars:e.value,location:Ps(e)};Ur(t,An(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function S4(e,t){const n={type:ve.DOCTYPE,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:Ps(e)};Ur(t,An(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function w4(e,t){t.stitches=!0;const n=O4(e);if("children"in e&&"children"in n){const i=_1({type:"root",children:e.children},t.options);n.children=i.children}S1({type:"comment",value:{stitch:n}},t)}function S1(e,t){const n=e.value,i={type:ve.COMMENT,data:n,location:Ps(e)};Ur(t,An(e)),t.parser.currentToken=i,t.parser._processToken(t.parser.currentToken)}function D4(e,t){if(t.parser.tokenizer.preprocessor.html="",t.parser.tokenizer.preprocessor.pos=-1,t.parser.tokenizer.preprocessor.lastGapPos=-2,t.parser.tokenizer.preprocessor.gapStack=[],t.parser.tokenizer.preprocessor.skipNextNewLine=!1,t.parser.tokenizer.preprocessor.lastChunkWritten=!1,t.parser.tokenizer.preprocessor.endOfChunkHit=!1,t.parser.tokenizer.preprocessor.isEol=!1,w1(t,An(e)),t.parser.tokenizer.write(t.options.tagfilter?e.value.replace(v4,"&lt;$1$2"):e.value,!1),t.parser.tokenizer._runParsingLoop(),t.parser.tokenizer.state===72||t.parser.tokenizer.state===78){t.parser.tokenizer.preprocessor.lastChunkWritten=!0;const n=t.parser.tokenizer._consume();t.parser.tokenizer._callState(n)}}function I4(e,t){const n=e;if(t.options.passThrough&&t.options.passThrough.includes(n.type))w4(n,t);else{let i="";throw T4.has(n.type)&&(i=". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),new Error("Cannot compile `"+n.type+"` node"+i)}}function Ur(e,t){w1(e,t);const n=e.parser.tokenizer.currentCharacterToken;n&&n.location&&(n.location.endLine=e.parser.tokenizer.preprocessor.line,n.location.endCol=e.parser.tokenizer.preprocessor.col+1,n.location.endOffset=e.parser.tokenizer.preprocessor.offset+1,e.parser.currentToken=n,e.parser._processToken(e.parser.currentToken)),e.parser.tokenizer.paused=!1,e.parser.tokenizer.inLoop=!1,e.parser.tokenizer.active=!1,e.parser.tokenizer.returnState=Ve.DATA,e.parser.tokenizer.charRefCode=-1,e.parser.tokenizer.consumedAfterSnapshot=-1,e.parser.tokenizer.currentLocation=null,e.parser.tokenizer.currentCharacterToken=null,e.parser.tokenizer.currentToken=null,e.parser.tokenizer.currentAttr={name:"",value:""}}function w1(e,t){if(t&&t.offset!==void 0){const n={startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:-1,endCol:-1,endOffset:-1};e.parser.tokenizer.preprocessor.lineStartPos=-t.column+1,e.parser.tokenizer.preprocessor.droppedBufferSize=t.offset,e.parser.tokenizer.preprocessor.line=t.line,e.parser.tokenizer.currentLocation=n}}function k4(e,t){const n=e.tagName.toLowerCase();if(t.parser.tokenizer.state===Ve.PLAINTEXT)return;Ur(t,An(e));const i=t.parser.openElements.current;let r="namespaceURI"in i?i.namespaceURI:Mi.html;r===Mi.html&&n==="svg"&&(r=Mi.svg);const o=LO({...e,children:[]},{space:r===Mi.svg?"svg":"html"}),s={type:ve.START_TAG,tagName:n,tagID:jr(n),selfClosing:!1,ackSelfClosing:!1,attrs:"attrs"in o?o.attrs:[],location:Ps(e)};t.parser.currentToken=s,t.parser._processToken(t.parser.currentToken),t.parser.tokenizer.lastStartTagName=n}function C4(e,t){const n=e.tagName.toLowerCase();if(!t.parser.tokenizer.inForeignNode&&qO.includes(n)||t.parser.tokenizer.state===Ve.PLAINTEXT)return;Ur(t,Pl(e));const i={type:ve.END_TAG,tagName:n,tagID:jr(n),selfClosing:!1,ackSelfClosing:!1,attrs:[],location:Ps(e)};t.parser.currentToken=i,t.parser._processToken(t.parser.currentToken),n===t.parser.tokenizer.lastStartTagName&&(t.parser.tokenizer.state===Ve.RCDATA||t.parser.tokenizer.state===Ve.RAWTEXT||t.parser.tokenizer.state===Ve.SCRIPT_DATA)&&(t.parser.tokenizer.state=Ve.DATA)}function A4(e){const t=e.type==="root"?e.children[0]:e;return!!(t&&(t.type==="doctype"||t.type==="element"&&t.tagName.toLowerCase()==="html"))}function Ps(e){const t=An(e)||{line:void 0,column:void 0,offset:void 0},n=Pl(e)||{line:void 0,column:void 0,offset:void 0};return{startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:n.line,endCol:n.column,endOffset:n.offset}}function O4(e){return"children"in e?Ar({...e,children:[]}):Ar(e)}function N4(e){return function(t,n){return _1(t,{...e,file:n})}}function P4(){const{title:e,content:t,type:n}=Vb();return Y.jsx(Y.Fragment,{children:Y.jsxs("div",{className:`post ${n==="jsx"?"jsx-post":""}`,children:[Y.jsx("h1",{children:e}),n==="jsx"?Y.jsx("div",{className:"jsx-content",children:vy.createElement(t.default||t)}):Y.jsx(sO,{rehypePlugins:[N4],children:t})]})})}const M4=Object.assign({"/src/content/art/index.jsx":ns,"/src/content/dsm/anxiety-disorders/index.jsx":is,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":rs,"/src/content/dsm/depressive-disorders/index.jsx":os,"/src/content/dsm/index.jsx":ss,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":as,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ls,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":us,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":cs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":ds,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":hs,"/src/content/dsm/paraphilic-disorders/index.jsx":fs,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":ps,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ms,"/src/content/dsm/personality-disorders/index.jsx":gs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":ys,"/src/content/dsm/trauma-and-stressor-disorders/index.jsx":bs,"/src/content/translations/index.jsx":vs,"/src/content/webapps/index.jsx":Ts});function ly(e=""){const t=e===""?[]:e.split("/");return Object.entries(M4).map(([n,i])=>({rel:n.replace(/^\/src\/content\//,"").replace(/\/index\.[^.]+$/,"").split("/"),module:i})).filter(({rel:n})=>n.length===t.length+1&&t.every((i,r)=>n[r]===i)).map(({rel:n,module:i})=>{var l,c,d;const r=n[n.length-1],o=i.title??((l=i.frontmatter)==null?void 0:l.title)??r.replace(/-/g," "),s=i.description??((c=i.frontmatter)==null?void 0:c.description)??"",a=i.image??((d=i.frontmatter)==null?void 0:d.image)??"";return{title:o,link:`/${r}`,description:s,image:a}})}const R4=Object.assign({"/src/content/dsm/anxiety-disorders/agoraphobia.md":Zc,"/src/content/dsm/anxiety-disorders/anxiety-disorder-due-to-another-medical-condition.md":ed,"/src/content/dsm/anxiety-disorders/generalized-anxiety-disorder.md":td,"/src/content/dsm/anxiety-disorders/other-specified-anxiety-disorder.md":nd,"/src/content/dsm/anxiety-disorders/panic-disorder.md":id,"/src/content/dsm/anxiety-disorders/selective-mutism.md":rd,"/src/content/dsm/anxiety-disorders/separation-anxiety-disorder.md":od,"/src/content/dsm/anxiety-disorders/social-anxiety-disorder.md":sd,"/src/content/dsm/anxiety-disorders/specific-phobia.md":ad,"/src/content/dsm/anxiety-disorders/substance-induced-anxiety-disorder.md":ld,"/src/content/dsm/anxiety-disorders/unspecified-anxiety-disorder.md":ud,"/src/content/dsm/bipolar-and-related-disorders/bipolar-I-disorder.md":cd,"/src/content/dsm/bipolar-and-related-disorders/bipolar-II-disorder.md":dd,"/src/content/dsm/bipolar-and-related-disorders/bipolar-disorder-due-to-another-medical-condition.md":hd,"/src/content/dsm/bipolar-and-related-disorders/cyclothymic-disorder.md":fd,"/src/content/dsm/bipolar-and-related-disorders/other-specified-bipolar-disorder.md":pd,"/src/content/dsm/bipolar-and-related-disorders/substance-induced-bipolar-disorder.md":md,"/src/content/dsm/bipolar-and-related-disorders/unspecified-bipolar-disorder.md":gd,"/src/content/dsm/bipolar-and-related-disorders/unspecified-mood-disorder.md":yd,"/src/content/dsm/depressive-disorders/depressive-disorder-due-to-another-medical-condition.md":bd,"/src/content/dsm/depressive-disorders/dysruptive-mood-dysregulation-disorder.md":vd,"/src/content/dsm/depressive-disorders/major-depressive-disorder.md":Td,"/src/content/dsm/depressive-disorders/other-specified-depressive-disorder.md":Ed,"/src/content/dsm/depressive-disorders/persistent-depressive-disorder.md":_d,"/src/content/dsm/depressive-disorders/premenstrual-dysphoric-disorder.md":xd,"/src/content/dsm/depressive-disorders/substance-induced-depressive-disorder.md":Sd,"/src/content/dsm/depressive-disorders/unspecified-depressive-disorder.md":wd,"/src/content/dsm/depressive-disorders/unspecified-mood-disorder.md":Dd,"/src/content/dsm/neurodevelopmental-disorders/attention-deficit-hyperactivity-disorder.md":Id,"/src/content/dsm/neurodevelopmental-disorders/autism-spectrum-disorder.md":kd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/child-onset-fluency-disorder.md":Cd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/language-disorder.md":Ad,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/social-communication-disorder.md":Od,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/speech-sound-disorder.md":Nd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/unspecified-communication-disorder.md":Pd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/global-developmental-delay.md":Md,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/intellectual-disability.md":Rd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/unspecified-intellectual-developmental-disorder.md":Ld,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/developmental-coordination-disorder.md":Fd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/stereotypic-movement-disorder.md":Bd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/other-specified-tic-disorder.md":zd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/persistent-tic-disorder.md":jd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/provisional-tic-disorder.md":Ud,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/tourettes-disorder.md":Hd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/unspecified-tic-disorder.md":$d,"/src/content/dsm/neurodevelopmental-disorders/other-specified-neurodevelopmental-disorder.md":qd,"/src/content/dsm/neurodevelopmental-disorders/specific-learning-disorder.md":Wd,"/src/content/dsm/neurodevelopmental-disorders/unspecified-neurodevelopmental-disorder.md":Vd,"/src/content/dsm/obsessive-compulsive-disorders/body-dysmorphic-disorder.md":Yd,"/src/content/dsm/obsessive-compulsive-disorders/excoriation-disorder.md":Qd,"/src/content/dsm/obsessive-compulsive-disorders/hoarding-disorder.md":Gd,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder-due-to-another-medical-condition.md":Kd,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder.md":Xd,"/src/content/dsm/obsessive-compulsive-disorders/other-specified-obsessive-compulsive-disorder.md":Jd,"/src/content/dsm/obsessive-compulsive-disorders/substance-induced-obsessive-comulsive-disorder.md":Zd,"/src/content/dsm/obsessive-compulsive-disorders/trichotillomania.md":eh,"/src/content/dsm/obsessive-compulsive-disorders/unspecified-obsessive-compulsive-disorder.md":th,"/src/content/dsm/paraphilic-disorders/exhibitionistic-disorder.md":nh,"/src/content/dsm/paraphilic-disorders/fetishistic-disorder.md":ih,"/src/content/dsm/paraphilic-disorders/frotteuristic-disorder.md":rh,"/src/content/dsm/paraphilic-disorders/other-specified-paraphilic-disorder.md":oh,"/src/content/dsm/paraphilic-disorders/pedophilic-disorder.md":sh,"/src/content/dsm/paraphilic-disorders/sexual-masochism-disorder.md":ah,"/src/content/dsm/paraphilic-disorders/sexual-sadism-disorder.md":lh,"/src/content/dsm/paraphilic-disorders/transvestic-disorder.md":uh,"/src/content/dsm/paraphilic-disorders/unspecified-paraphilic-disorder.md":ch,"/src/content/dsm/paraphilic-disorders/voyeuristic-disorder.md":dh,"/src/content/dsm/personality-disorders/cluster-a/paranoid-personality-disorder.md":hh,"/src/content/dsm/personality-disorders/cluster-a/schizoid-personality-disorder.md":fh,"/src/content/dsm/personality-disorders/cluster-a/schizotypal-personality-disorder.md":ph,"/src/content/dsm/personality-disorders/cluster-b/antisocial-personality-disorder.md":mh,"/src/content/dsm/personality-disorders/general-personality-disorder.md":gh,"/src/content/dsm/schizophrenia-spectrum-disorders/brief-psychotic-disorder.md":yh,"/src/content/dsm/schizophrenia-spectrum-disorders/delusional-disorder.md":bh,"/src/content/dsm/schizophrenia-spectrum-disorders/other-specified-schizophrenia-spectrum-disorder.md":vh,"/src/content/dsm/schizophrenia-spectrum-disorders/psychotic-disorder-due-to-another-medical-condition.md":Th,"/src/content/dsm/schizophrenia-spectrum-disorders/schizoaffective-disorder.md":Eh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophrenia.md":_h,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophreniform-disorder.md":xh,"/src/content/dsm/schizophrenia-spectrum-disorders/substance-induced-psychotic-disorder.md":Sh,"/src/content/dsm/schizophrenia-spectrum-disorders/unspecified-schizophrenia-spectrum-disorder.md":wh,"/src/content/translations/ana.md":Dh,"/src/content/translations/cancion_de_las_simples_cosas.md":Ih,"/src/content/translations/ese_arar_en_el_mar.md":kh,"/src/content/translations/gracias_a_la_vida.md":Ch,"/src/content/translations/mariella.md":Ah,"/src/content/translations/tan_joven_y_tan_viejo.md":Oh,"/src/content/translations/vine_del_norte.md":Nh,"/src/content/translations/volver_a_los_diecisiete.md":Ph}),L4=Object.assign({"/src/content/art/index.jsx":ns,"/src/content/art/paintings.jsx":jh,"/src/content/art/sketches.jsx":Uh,"/src/content/dsm/anxiety-disorders/index.jsx":is,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":rs,"/src/content/dsm/depressive-disorders/index.jsx":os,"/src/content/dsm/index.jsx":ss,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":as,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ls,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":us,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":cs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":ds,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":hs,"/src/content/dsm/paraphilic-disorders/index.jsx":fs,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":ps,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ms,"/src/content/dsm/personality-disorders/index.jsx":gs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":ys,"/src/content/dsm/trauma-and-stressor-disorders/index.jsx":bs,"/src/content/translations/index.jsx":vs,"/src/content/webapps/index.jsx":Ts,"/src/content/webapps/jesspanish.jsx":Hh,"/src/content/webapps/jessprache.jsx":$h}),F4=Object.fromEntries(Object.entries(L4).filter(([e])=>!e.endsWith("index.jsx")));function Jc({category:e}){const t=Object.entries(R4),n=Object.entries(F4);return[...t,...n].map(([r,o])=>B4(r,o))}function B4(e,t){var o,s,a,l;const n=e.split("/").pop(),i=n.endsWith(".jsx"),r=n.replace(i?".jsx":".md","");return i?{postId:r,title:t.title||((o=t.frontmatter)==null?void 0:o.title)||"Untitled",link:`/${r}`,image:t.image||((s=t.frontmatter)==null?void 0:s.image)||"",description:t.description||((a=t.frontmatter)==null?void 0:a.description)||"",category:t.category||((l=t.frontmatter)==null?void 0:l.category)||"",content:t,type:"jsx"}:{postId:r,title:t.attributes.title||"Untitled",link:`/${r}`,image:t.attributes.image||"",description:t.attributes.description||"",category:t.attributes.category||"",content:t.html||"",type:"markdown"}}function z4(e){const t=Object.assign({"/src/content/art/index.jsx":ns,"/src/content/dsm/anxiety-disorders/index.jsx":is,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":rs,"/src/content/dsm/depressive-disorders/index.jsx":os,"/src/content/dsm/index.jsx":ss,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":as,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ls,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":us,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":cs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":ds,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":hs,"/src/content/dsm/paraphilic-disorders/index.jsx":fs,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":ps,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ms,"/src/content/dsm/personality-disorders/index.jsx":gs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":ys,"/src/content/dsm/trauma-and-stressor-disorders/index.jsx":bs,"/src/content/translations/index.jsx":vs,"/src/content/webapps/index.jsx":Ts});for(const[n,i]of Object.entries(t)){const r=n.replace(/^\/src\/content\//,"").replace(/\/index\.[^.]+$/,"");if(r.split("/").pop()===e)return{fullPath:r,module:i}}return null}function j4(e){return Jc({category:"all"}).filter(n=>{const i=Object.assign({"/src/content/dsm/anxiety-disorders/agoraphobia.md":Zc,"/src/content/dsm/anxiety-disorders/anxiety-disorder-due-to-another-medical-condition.md":ed,"/src/content/dsm/anxiety-disorders/generalized-anxiety-disorder.md":td,"/src/content/dsm/anxiety-disorders/other-specified-anxiety-disorder.md":nd,"/src/content/dsm/anxiety-disorders/panic-disorder.md":id,"/src/content/dsm/anxiety-disorders/selective-mutism.md":rd,"/src/content/dsm/anxiety-disorders/separation-anxiety-disorder.md":od,"/src/content/dsm/anxiety-disorders/social-anxiety-disorder.md":sd,"/src/content/dsm/anxiety-disorders/specific-phobia.md":ad,"/src/content/dsm/anxiety-disorders/substance-induced-anxiety-disorder.md":ld,"/src/content/dsm/anxiety-disorders/unspecified-anxiety-disorder.md":ud,"/src/content/dsm/bipolar-and-related-disorders/bipolar-I-disorder.md":cd,"/src/content/dsm/bipolar-and-related-disorders/bipolar-II-disorder.md":dd,"/src/content/dsm/bipolar-and-related-disorders/bipolar-disorder-due-to-another-medical-condition.md":hd,"/src/content/dsm/bipolar-and-related-disorders/cyclothymic-disorder.md":fd,"/src/content/dsm/bipolar-and-related-disorders/other-specified-bipolar-disorder.md":pd,"/src/content/dsm/bipolar-and-related-disorders/substance-induced-bipolar-disorder.md":md,"/src/content/dsm/bipolar-and-related-disorders/unspecified-bipolar-disorder.md":gd,"/src/content/dsm/bipolar-and-related-disorders/unspecified-mood-disorder.md":yd,"/src/content/dsm/depressive-disorders/depressive-disorder-due-to-another-medical-condition.md":bd,"/src/content/dsm/depressive-disorders/dysruptive-mood-dysregulation-disorder.md":vd,"/src/content/dsm/depressive-disorders/major-depressive-disorder.md":Td,"/src/content/dsm/depressive-disorders/other-specified-depressive-disorder.md":Ed,"/src/content/dsm/depressive-disorders/persistent-depressive-disorder.md":_d,"/src/content/dsm/depressive-disorders/premenstrual-dysphoric-disorder.md":xd,"/src/content/dsm/depressive-disorders/substance-induced-depressive-disorder.md":Sd,"/src/content/dsm/depressive-disorders/unspecified-depressive-disorder.md":wd,"/src/content/dsm/depressive-disorders/unspecified-mood-disorder.md":Dd,"/src/content/dsm/neurodevelopmental-disorders/attention-deficit-hyperactivity-disorder.md":Id,"/src/content/dsm/neurodevelopmental-disorders/autism-spectrum-disorder.md":kd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/child-onset-fluency-disorder.md":Cd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/language-disorder.md":Ad,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/social-communication-disorder.md":Od,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/speech-sound-disorder.md":Nd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/unspecified-communication-disorder.md":Pd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/global-developmental-delay.md":Md,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/intellectual-disability.md":Rd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/unspecified-intellectual-developmental-disorder.md":Ld,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/developmental-coordination-disorder.md":Fd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/stereotypic-movement-disorder.md":Bd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/other-specified-tic-disorder.md":zd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/persistent-tic-disorder.md":jd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/provisional-tic-disorder.md":Ud,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/tourettes-disorder.md":Hd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/unspecified-tic-disorder.md":$d,"/src/content/dsm/neurodevelopmental-disorders/other-specified-neurodevelopmental-disorder.md":qd,"/src/content/dsm/neurodevelopmental-disorders/specific-learning-disorder.md":Wd,"/src/content/dsm/neurodevelopmental-disorders/unspecified-neurodevelopmental-disorder.md":Vd,"/src/content/dsm/obsessive-compulsive-disorders/body-dysmorphic-disorder.md":Yd,"/src/content/dsm/obsessive-compulsive-disorders/excoriation-disorder.md":Qd,"/src/content/dsm/obsessive-compulsive-disorders/hoarding-disorder.md":Gd,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder-due-to-another-medical-condition.md":Kd,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder.md":Xd,"/src/content/dsm/obsessive-compulsive-disorders/other-specified-obsessive-compulsive-disorder.md":Jd,"/src/content/dsm/obsessive-compulsive-disorders/substance-induced-obsessive-comulsive-disorder.md":Zd,"/src/content/dsm/obsessive-compulsive-disorders/trichotillomania.md":eh,"/src/content/dsm/obsessive-compulsive-disorders/unspecified-obsessive-compulsive-disorder.md":th,"/src/content/dsm/paraphilic-disorders/exhibitionistic-disorder.md":nh,"/src/content/dsm/paraphilic-disorders/fetishistic-disorder.md":ih,"/src/content/dsm/paraphilic-disorders/frotteuristic-disorder.md":rh,"/src/content/dsm/paraphilic-disorders/other-specified-paraphilic-disorder.md":oh,"/src/content/dsm/paraphilic-disorders/pedophilic-disorder.md":sh,"/src/content/dsm/paraphilic-disorders/sexual-masochism-disorder.md":ah,"/src/content/dsm/paraphilic-disorders/sexual-sadism-disorder.md":lh,"/src/content/dsm/paraphilic-disorders/transvestic-disorder.md":uh,"/src/content/dsm/paraphilic-disorders/unspecified-paraphilic-disorder.md":ch,"/src/content/dsm/paraphilic-disorders/voyeuristic-disorder.md":dh,"/src/content/dsm/personality-disorders/cluster-a/paranoid-personality-disorder.md":hh,"/src/content/dsm/personality-disorders/cluster-a/schizoid-personality-disorder.md":fh,"/src/content/dsm/personality-disorders/cluster-a/schizotypal-personality-disorder.md":ph,"/src/content/dsm/personality-disorders/cluster-b/antisocial-personality-disorder.md":mh,"/src/content/dsm/personality-disorders/general-personality-disorder.md":gh,"/src/content/dsm/schizophrenia-spectrum-disorders/brief-psychotic-disorder.md":yh,"/src/content/dsm/schizophrenia-spectrum-disorders/delusional-disorder.md":bh,"/src/content/dsm/schizophrenia-spectrum-disorders/other-specified-schizophrenia-spectrum-disorder.md":vh,"/src/content/dsm/schizophrenia-spectrum-disorders/psychotic-disorder-due-to-another-medical-condition.md":Th,"/src/content/dsm/schizophrenia-spectrum-disorders/schizoaffective-disorder.md":Eh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophrenia.md":_h,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophreniform-disorder.md":xh,"/src/content/dsm/schizophrenia-spectrum-disorders/substance-induced-psychotic-disorder.md":Sh,"/src/content/dsm/schizophrenia-spectrum-disorders/unspecified-schizophrenia-spectrum-disorder.md":wh,"/src/content/translations/ana.md":Dh,"/src/content/translations/cancion_de_las_simples_cosas.md":Ih,"/src/content/translations/ese_arar_en_el_mar.md":kh,"/src/content/translations/gracias_a_la_vida.md":Ch,"/src/content/translations/mariella.md":Ah,"/src/content/translations/tan_joven_y_tan_viejo.md":Oh,"/src/content/translations/vine_del_norte.md":Nh,"/src/content/translations/volver_a_los_diecisiete.md":Ph}),o=Object.fromEntries(Object.entries(Object.assign({"/src/content/art/index.jsx":ns,"/src/content/art/paintings.jsx":jh,"/src/content/art/sketches.jsx":Uh,"/src/content/dsm/anxiety-disorders/index.jsx":is,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":rs,"/src/content/dsm/depressive-disorders/index.jsx":os,"/src/content/dsm/index.jsx":ss,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":as,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ls,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":us,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":cs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":ds,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":hs,"/src/content/dsm/paraphilic-disorders/index.jsx":fs,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":ps,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ms,"/src/content/dsm/personality-disorders/index.jsx":gs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":ys,"/src/content/dsm/trauma-and-stressor-disorders/index.jsx":bs,"/src/content/translations/index.jsx":vs,"/src/content/webapps/index.jsx":Ts,"/src/content/webapps/jesspanish.jsx":Hh,"/src/content/webapps/jessprache.jsx":$h})).filter(([a])=>!a.endsWith("index.jsx"))),s={...i,...o};for(const[a,l]of Object.entries(s)){const c=a.split("/").pop(),d=c.endsWith(".jsx");if(c.replace(d?".jsx":".md","")===n.postId){const f=a.replace("/src/content/","").split("/");return f.pop(),f.join("/")===e}}return!1})}function U4(e){const t=Object.assign({"/src/content/dsm/anxiety-disorders/agoraphobia.md":Zc,"/src/content/dsm/anxiety-disorders/anxiety-disorder-due-to-another-medical-condition.md":ed,"/src/content/dsm/anxiety-disorders/generalized-anxiety-disorder.md":td,"/src/content/dsm/anxiety-disorders/other-specified-anxiety-disorder.md":nd,"/src/content/dsm/anxiety-disorders/panic-disorder.md":id,"/src/content/dsm/anxiety-disorders/selective-mutism.md":rd,"/src/content/dsm/anxiety-disorders/separation-anxiety-disorder.md":od,"/src/content/dsm/anxiety-disorders/social-anxiety-disorder.md":sd,"/src/content/dsm/anxiety-disorders/specific-phobia.md":ad,"/src/content/dsm/anxiety-disorders/substance-induced-anxiety-disorder.md":ld,"/src/content/dsm/anxiety-disorders/unspecified-anxiety-disorder.md":ud,"/src/content/dsm/bipolar-and-related-disorders/bipolar-I-disorder.md":cd,"/src/content/dsm/bipolar-and-related-disorders/bipolar-II-disorder.md":dd,"/src/content/dsm/bipolar-and-related-disorders/bipolar-disorder-due-to-another-medical-condition.md":hd,"/src/content/dsm/bipolar-and-related-disorders/cyclothymic-disorder.md":fd,"/src/content/dsm/bipolar-and-related-disorders/other-specified-bipolar-disorder.md":pd,"/src/content/dsm/bipolar-and-related-disorders/substance-induced-bipolar-disorder.md":md,"/src/content/dsm/bipolar-and-related-disorders/unspecified-bipolar-disorder.md":gd,"/src/content/dsm/bipolar-and-related-disorders/unspecified-mood-disorder.md":yd,"/src/content/dsm/depressive-disorders/depressive-disorder-due-to-another-medical-condition.md":bd,"/src/content/dsm/depressive-disorders/dysruptive-mood-dysregulation-disorder.md":vd,"/src/content/dsm/depressive-disorders/major-depressive-disorder.md":Td,"/src/content/dsm/depressive-disorders/other-specified-depressive-disorder.md":Ed,"/src/content/dsm/depressive-disorders/persistent-depressive-disorder.md":_d,"/src/content/dsm/depressive-disorders/premenstrual-dysphoric-disorder.md":xd,"/src/content/dsm/depressive-disorders/substance-induced-depressive-disorder.md":Sd,"/src/content/dsm/depressive-disorders/unspecified-depressive-disorder.md":wd,"/src/content/dsm/depressive-disorders/unspecified-mood-disorder.md":Dd,"/src/content/dsm/neurodevelopmental-disorders/attention-deficit-hyperactivity-disorder.md":Id,"/src/content/dsm/neurodevelopmental-disorders/autism-spectrum-disorder.md":kd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/child-onset-fluency-disorder.md":Cd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/language-disorder.md":Ad,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/social-communication-disorder.md":Od,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/speech-sound-disorder.md":Nd,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/unspecified-communication-disorder.md":Pd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/global-developmental-delay.md":Md,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/intellectual-disability.md":Rd,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/unspecified-intellectual-developmental-disorder.md":Ld,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/developmental-coordination-disorder.md":Fd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/stereotypic-movement-disorder.md":Bd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/other-specified-tic-disorder.md":zd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/persistent-tic-disorder.md":jd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/provisional-tic-disorder.md":Ud,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/tourettes-disorder.md":Hd,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/unspecified-tic-disorder.md":$d,"/src/content/dsm/neurodevelopmental-disorders/other-specified-neurodevelopmental-disorder.md":qd,"/src/content/dsm/neurodevelopmental-disorders/specific-learning-disorder.md":Wd,"/src/content/dsm/neurodevelopmental-disorders/unspecified-neurodevelopmental-disorder.md":Vd,"/src/content/dsm/obsessive-compulsive-disorders/body-dysmorphic-disorder.md":Yd,"/src/content/dsm/obsessive-compulsive-disorders/excoriation-disorder.md":Qd,"/src/content/dsm/obsessive-compulsive-disorders/hoarding-disorder.md":Gd,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder-due-to-another-medical-condition.md":Kd,"/src/content/dsm/obsessive-compulsive-disorders/obsessive-compulsive-disorder.md":Xd,"/src/content/dsm/obsessive-compulsive-disorders/other-specified-obsessive-compulsive-disorder.md":Jd,"/src/content/dsm/obsessive-compulsive-disorders/substance-induced-obsessive-comulsive-disorder.md":Zd,"/src/content/dsm/obsessive-compulsive-disorders/trichotillomania.md":eh,"/src/content/dsm/obsessive-compulsive-disorders/unspecified-obsessive-compulsive-disorder.md":th,"/src/content/dsm/paraphilic-disorders/exhibitionistic-disorder.md":nh,"/src/content/dsm/paraphilic-disorders/fetishistic-disorder.md":ih,"/src/content/dsm/paraphilic-disorders/frotteuristic-disorder.md":rh,"/src/content/dsm/paraphilic-disorders/other-specified-paraphilic-disorder.md":oh,"/src/content/dsm/paraphilic-disorders/pedophilic-disorder.md":sh,"/src/content/dsm/paraphilic-disorders/sexual-masochism-disorder.md":ah,"/src/content/dsm/paraphilic-disorders/sexual-sadism-disorder.md":lh,"/src/content/dsm/paraphilic-disorders/transvestic-disorder.md":uh,"/src/content/dsm/paraphilic-disorders/unspecified-paraphilic-disorder.md":ch,"/src/content/dsm/paraphilic-disorders/voyeuristic-disorder.md":dh,"/src/content/dsm/personality-disorders/cluster-a/paranoid-personality-disorder.md":hh,"/src/content/dsm/personality-disorders/cluster-a/schizoid-personality-disorder.md":fh,"/src/content/dsm/personality-disorders/cluster-a/schizotypal-personality-disorder.md":ph,"/src/content/dsm/personality-disorders/cluster-b/antisocial-personality-disorder.md":mh,"/src/content/dsm/personality-disorders/general-personality-disorder.md":gh,"/src/content/dsm/schizophrenia-spectrum-disorders/brief-psychotic-disorder.md":yh,"/src/content/dsm/schizophrenia-spectrum-disorders/delusional-disorder.md":bh,"/src/content/dsm/schizophrenia-spectrum-disorders/other-specified-schizophrenia-spectrum-disorder.md":vh,"/src/content/dsm/schizophrenia-spectrum-disorders/psychotic-disorder-due-to-another-medical-condition.md":Th,"/src/content/dsm/schizophrenia-spectrum-disorders/schizoaffective-disorder.md":Eh,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophrenia.md":_h,"/src/content/dsm/schizophrenia-spectrum-disorders/schizophreniform-disorder.md":xh,"/src/content/dsm/schizophrenia-spectrum-disorders/substance-induced-psychotic-disorder.md":Sh,"/src/content/dsm/schizophrenia-spectrum-disorders/unspecified-schizophrenia-spectrum-disorder.md":wh,"/src/content/translations/ana.md":Dh,"/src/content/translations/cancion_de_las_simples_cosas.md":Ih,"/src/content/translations/ese_arar_en_el_mar.md":kh,"/src/content/translations/gracias_a_la_vida.md":Ch,"/src/content/translations/mariella.md":Ah,"/src/content/translations/tan_joven_y_tan_viejo.md":Oh,"/src/content/translations/vine_del_norte.md":Nh,"/src/content/translations/volver_a_los_diecisiete.md":Ph}),i=Object.fromEntries(Object.entries(Object.assign({"/src/content/art/index.jsx":ns,"/src/content/art/paintings.jsx":jh,"/src/content/art/sketches.jsx":Uh,"/src/content/dsm/anxiety-disorders/index.jsx":is,"/src/content/dsm/bipolar-and-related-disorders/index.jsx":rs,"/src/content/dsm/depressive-disorders/index.jsx":os,"/src/content/dsm/index.jsx":ss,"/src/content/dsm/neurodevelopmental-disorders/communication-disorders/index.jsx":as,"/src/content/dsm/neurodevelopmental-disorders/index.jsx":ls,"/src/content/dsm/neurodevelopmental-disorders/intellectual-development-disorders/index.jsx":us,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/index.jsx":cs,"/src/content/dsm/neurodevelopmental-disorders/motor-disorders/tic-disorders/index.jsx":ds,"/src/content/dsm/obsessive-compulsive-disorders/index.jsx":hs,"/src/content/dsm/paraphilic-disorders/index.jsx":fs,"/src/content/dsm/personality-disorders/cluster-a/index.jsx":ps,"/src/content/dsm/personality-disorders/cluster-b/index.jsx":ms,"/src/content/dsm/personality-disorders/index.jsx":gs,"/src/content/dsm/schizophrenia-spectrum-disorders/index.jsx":ys,"/src/content/dsm/trauma-and-stressor-disorders/index.jsx":bs,"/src/content/translations/index.jsx":vs,"/src/content/webapps/index.jsx":Ts,"/src/content/webapps/jesspanish.jsx":Hh,"/src/content/webapps/jessprache.jsx":$h})).filter(([o])=>!o.endsWith("index.jsx"))),r={...t,...i};for(const o of Object.keys(r)){const s=o.replace("/src/content/","").split("/");if(s.pop(),s[s.length-1]===e){const l=s.join("/");return j4(l)}}return[]}const H4=fk([{path:"/",element:Y.jsx(Ik,{}),children:[{index:!0,element:Y.jsx(Gm,{}),loader:()=>({children:ly("")})},{path:":folderName",element:Y.jsx(Gm,{}),loader:({params:e})=>{var d;const{folderName:t}=e;let n="",i="",r=[];const o=z4(t);if(o){n=o.module.description??((d=o.module.frontmatter)==null?void 0:d.description)??"",i=o.module.header_text??"";const h=ly(o.fullPath);r.push(...h)}const s=U4(t);s.length>0&&r.push(...s);let a=[];if(!o||!o.module.order)console.log("No order array found for folder:",t),console.log("Displaying children in arbitrary order"),a=r;else{for(const h of o.module.order){const f=r.find(p=>p.link===h);f?a.push(f):console.log(`Child with link ${h} not found in children array`)}a.length!==r.length&&(console.log("Ordered children length does not match children length"),console.log("Ordered children:",a),console.log("Children:",r))}if(r=a,r.length>0)return{description:n||"",header_text:i||"",children:r};throw Jc({category:"all"}).find(h=>h.postId===t)?new Response("",{status:302,headers:{Location:`/posts/${t}`}}):new Error(`Content "${t}" not found`)}},{path:"posts/:postId",element:Y.jsx(P4,{}),loader:({params:e})=>{const t=Jc({category:"all"}),{postId:n}=e,i=t.find(r=>r.postId===n);if(!i)throw new Error(`Post "${n}" not found`);return i}}]}]);Bu.createRoot(document.getElementById("root")).render(Y.jsx(vy.StrictMode,{children:Y.jsx(wk,{router:H4})}));
