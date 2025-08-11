<template>
    <div class="row">
        <div class="col-xl-12">
            <div class="product-tab-box tabs-box">
                <div class="mission-tabs">

                    <!-- Description Tab -->
                    <input type="radio" name="tabs" id="tab-one" checked>
                    <label for="tab-one" class="tab-btn">Beschrijving</label>
                    <div class="tab">
                        <div class="active-tab">
                            <div class="content">
                                <div class="product-details-content">
                                    <div class="desc-content-box">
                                        <p>{{ currentProductTab.description }}</p>
                                        
                                        <p>{{ currentProductTab.description2 }}</p>
                                        
                                        <p>{{ currentProductTab.description3 }}</p>
                                        
                                        <p>{{ currentProductTab.description4 }}</p>
                                        
                                        <p>{{ currentProductTab.description5 }}</p>
                                        
                                        <p>{{ currentProductTab.description6 }}</p>
                                        
                                        <p>{{ currentProductTab.description7 }}</p>
                                        
                                        <p><strong>{{ currentProductTab.summaryTitle }}</strong></p>
                                        <ul>
                                            <li>{{ currentProductTab.summary1 }}</li>
                                            <li>{{ currentProductTab.summary2 }}</li>
                                            <li>{{ currentProductTab.summary3 }}</li>
                                        </ul>
                                        
                                        <p>{{ currentProductTab.application }}</p>
                                        
                                        <p class="desc-content-box_bottom">{{ currentProductTab.conclusion }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Additional Info Tab -->
                    <input type="radio" name="tabs" id="tab-two">
                    <label for="tab-two" class="tab-btn">Technische Info</label>
                    <div class="tab">
                        <div class="active-tab">
                            <div class="content">
                                <ul class="additionali_nfo list-unstyled">
                                    <li><span>Product Type:</span> {{ currentProductTab.type }}</li>
                                    <li><span>Toepassing:</span> {{ currentProductTab.application }}</li>
                                    <li><span>Dosering:</span> {{ currentProductTab.dosage }}</li>
                                    <li><span>Frequentie:</span> {{ currentProductTab.frequency }}</li>
                                    <li><span>Verpakking:</span> {{ currentProductTab.packaging }}</li>
                                    <li><span>Houdbaarheid:</span> {{ currentProductTab.shelfLife }}</li>
                                    <li><span>Certificering:</span> {{ currentProductTab.certification }}</li>
                                    <li><span>Veiligheid:</span> {{ currentProductTab.safety }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Reviews Tab -->
                    <input type="radio" name="tabs" id="tab-three">
                    <label for="tab-three" class="tab-btn">Voordelen</label>
                    <div class="tab">
                        <div class="active-tab">
                            <div class="content">
                                <div class="reviews-box">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="product_reviews_box">
                                                <h3 class="product_reviews_title">Belangrijkste Voordelen</h3>

                                                <div class="product_reviews_single">
                                                    <div class="product_reviews_content">
                                                        <h3>{{ currentProductTab.benefit1.title }} <span>{{ currentProductTab.benefit1.subtitle }}</span></h3>
                                                        <p>{{ currentProductTab.benefit1.description }}</p>
                                                    </div>
                                                </div>

                                                <div class="product_reviews_single">
                                                    <div class="product_reviews_content">
                                                        <h3>{{ currentProductTab.benefit2.title }} <span>{{ currentProductTab.benefit2.subtitle }}</span></h3>
                                                        <p>{{ currentProductTab.benefit2.description }}</p>
                                                    </div>
                                                </div>

                                                <div class="product_reviews_single">
                                                    <div class="product_reviews_content">
                                                        <h3>{{ currentProductTab.benefit3.title }} <span>{{ currentProductTab.benefit3.subtitle }}</span></h3>
                                                        <p>{{ currentProductTab.benefit3.description }}</p>
                                                    </div>
                                                </div>

                                                <div class="product_reviews_single">
                                                    <div class="product_reviews_content">
                                                        <h3>{{ currentProductTab.benefit4.title }} <span>{{ currentProductTab.benefit4.subtitle }}</span></h3>
                                                        <p>{{ currentProductTab.benefit4.description }}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-xl-12">
                                            <div class="add_review_box">
                                                <h3 class="add_review_title">Interesse in dit product?</h3>
                                                <p>Neem contact op voor meer informatie over onze producten en distributiemogelijkheden.</p>
                                                <div class="review_submit_btn">
                                                    <a href="/distributeur" class="thm-btn">Distributeur Aanvraag</a>
                                                    <a href="/contact" class="thm-btn" style="margin-left: 15px;">Contact Opnemen</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import review1 from '~/assets/images/shop/review-1.png'
import review2 from '~/assets/images/shop/review-2.png'

// Get the current route to determine which product to show
const route = useRoute()
const productId = route.query.product || 'natural-nano-mix'

// Define product tab content
const productTabs = {
    'natural-nano-mix': {
        description: 'Plant Vitales Natural Nano Mix is een revolutionaire biostimulant die meer dan 80 essentiële mineralen en sporenelementen levert in de vorm van nanodeeltjes, nauwkeurig samengesteld naar de natuurlijke samenstelling van vulkanisch gesteente. De combinatie van deze natuurlijke elementen in nanoformaat zorgt voor een uitzonderlijk hoge biologische beschikbaarheid, waardoor planten deze direct en efficiënt kunnen opnemen.',
        description2: 'Door het gebruik van nanotechnologie zijn de elementen extreem klein (<100 nm) met een hoog reactief oppervlak, wat een optimale interactie met plantencellen mogelijk maakt. Dit stimuleert enzymatische processen, hormoonbalans en het metabolisme op moleculair niveau, wat leidt tot verbeterde fysiologische functies binnen de plant.',
        description3: 'Deze nano-elementenmix bevat alle macro- en micronutriënten die noodzakelijk zijn voor de diverse biochemische reacties binnen de plant, waaronder zink, koper, mangaan, molybdeen, ijzer, selenium, en vele andere sporenelementen die in klassieke meststoffen vaak ontbreken of slecht opneembaar zijn. De natuurlijke samenstelling, geïnspireerd op vulkanisch gesteente, levert een breed spectrum aan elementen die in perfecte verhouding met elkaar samenwerken.',
        description4: 'De directe beschikbaarheid van deze elementen verhoogt de fotosynthese-efficiëntie en verbetert de productie van suikers en aminozuren, wat leidt tot een hogere Brix-waarde. Dit is een cruciale indicator voor de suikerrijkdom, smaak en voedingswaarde van fruit en groenten, en speelt een belangrijke rol bij het verbeteren van de kwaliteit van de oogst.',
        description5: 'Naast het verbeteren van de groei en kwaliteit, versterkt Plant Vitales Natural Nano Mix ook de weerstand van planten tegen abiotische stressfactoren zoals droogte, hitte, en pathogene aanvallen. De nano-elementen activeren antioxidatieve enzymen en stimuleren het immuunsysteem van de plant, waardoor planten robuuster en veerkrachtiger worden.',
        description6: 'De formulering is helder en stabiel, geschikt voor toepassing via bladbespuiting of fertirrigatie. De aanbevolen dosering is 1 liter per hectare verdund in 200 tot 500 liter water, wat zorgt voor een optimale verdeling en opname. Het product voldoet aan de strengste Europese regelgeving voor biostimulanten en landbouwproducten en is veilig voor mens, dier en milieu.',
        description7: 'Door het gebruik van Plant Vitales Natural Nano Mix verhoogt u niet alleen de opbrengst en kwaliteit van gewassen, maar draagt u ook bij aan duurzame landbouwpraktijken die de bodem en het ecosysteem respecteren.',
        summaryTitle: 'Samenvattend onderscheidt Plant Vitales Natural Nano Mix zich door:',
        summary1: 'Een unieke, natuurgetrouwe samenstelling van meer dan 80 elementen in nanovorm voor maximale opname',
        summary2: 'Directe stimulatie van plantmetabolisme met zichtbare verhoging van Brix-waarde en voedingskwaliteit',
        summary3: 'Versterking van natuurlijke stressweerstand door activatie van antioxidatieve processen en immuunsysteem',
        application: 'Met Plant Vitales Natural Nano Mix investeert u in de toekomst van landbouw door een wetenschappelijk onderbouwde, natuurlijke en effectieve biostimulatie die leidt tot gezondere, krachtigere gewassen met hogere opbrengsten en betere voedingswaarde.',
        conclusion: 'Met Plant Vitales Natural Nano Mix investeert u in de toekomst van landbouw door een wetenschappelijk onderbouwde, natuurlijke en effectieve biostimulatie die leidt tot gezondere, krachtigere gewassen met hogere opbrengsten en betere voedingswaarde.',
        type: 'Nano-mineralen Biostimulant',
        application: 'Bladvoeding en bodemtoepassing',
        dosage: '1 liter per hectare verdund in 200-500 liter water',
        frequency: '1-2x per week tijdens groeiseizoen',
        packaging: '1L, 5L, 20L containers',
        shelfLife: '24 maanden bij juiste opslag',
        certification: 'Voldoet aan Europese regelgeving voor biostimulanten',
        safety: 'Veilig voor mens, dier en milieu',
        benefit1: {
            title: 'Directe Opname',
            subtitle: 'Nano-formaat',
            description: 'Meer dan 80 natuurlijke elementen in nanovorm voor maximale biologische beschikbaarheid en directe plantopname. De extreem kleine deeltjes (<100 nm) zorgen voor optimale interactie met plantencellen.'
        },
        benefit2: {
            title: 'Verhoogde Brix-waarde',
            subtitle: 'Kwaliteitsverbetering',
            description: 'Stimuleert de productie van suikers en aminozuren, wat leidt tot een hogere Brix-waarde. Dit verbetert de smaak, voedingswaarde en kwaliteit van fruit en groenten aanzienlijk.'
        },
        benefit3: {
            title: 'Stressweerstand',
            subtitle: 'Natuurlijke Bescherming',
            description: 'Versterkt de weerstand van planten tegen abiotische stressfactoren zoals droogte, hitte en pathogene aanvallen. Activeert antioxidatieve enzymen en stimuleert het immuunsysteem van de plant.'
        },
        benefit4: {
            title: 'Duurzame Landbouw',
            subtitle: 'Milieuvriendelijk',
            description: 'Natuurlijke samenstelling geïnspireerd op vulkanisch gesteente. Draagt bij aan duurzame landbouwpraktijken die de bodem en het ecosysteem respecteren.'
        }
    },
    'sioh4': {
        description: 'Plant Vitales SioH4 is een geavanceerd biostimulant dat orthosiliciumzuur (Si(OH)4) levert, de biologisch beschikbare vorm van silicium die direct door planten kan worden opgenomen. Silicium is een essentieel element dat een belangrijke rol speelt in de versterking van celwanden, het stimuleren van de plantweerstand en het verbeteren van de opname en het transport van voedingsstoffen.',
        description2: 'De moleculaire structuur van orthosiliciumzuur zorgt voor een hoge oplosbaarheid en stabiliteit, waardoor het snel en efficiënt kan worden opgenomen via blad of wortels. Na opname wordt silicium getransporteerd naar celwanden en tussenliggende cellagen waar het wordt omgezet in polymeren die de mechanische stevigheid verhogen. Dit versterkt de fysieke barrière tegen pathogenen, insecten en omgevingsstress zoals wind en mechanische beschadiging.',
        description3: 'Plant Vitales SioH4 stimuleert ook het aanmaken van lignine en andere fenolische verbindingen die de plantencelwand verder verstevigen en fungeren als antioxidanten. Dit verhoogt de weerstand tegen schimmel- en bacteriële infecties en verbetert de tolerantie tegen droogte, hitte en zoutstress. Silicium beïnvloedt daarnaast positieve regulatie van genen die betrokken zijn bij stressrespons en celreparatie, wat bijdraagt aan een verhoogde veerkracht van het gewas.',
        description4: 'Een bijkomend effect van Plant Vitales SioH4 is de verbetering van de opname en het transport van belangrijke mineralen zoals calcium, borium en magnesium. Silicium ondersteunt de vorming van transporteiwitten en vergemakkelijkt de mobiliteit van deze nutriënten binnen de plant, wat leidt tot een efficiënter metabolisme en gezondere groei.',
        description5: 'De orthosiliciumzuur-oplossing is helder, stabiel en vrij van onzuiverheden, wat een betrouwbare en consistente werking garandeert. De formule is geschikt voor bladbespuiting en irrigatie en kan eenvoudig worden geïntegreerd in bestaande teeltsystemen. De aanbevolen dosering ligt tussen 1 en 2 liter per hectare.',
        description6: 'Plant Vitales SioH4 is veilig toepasbaar in diverse gewassen en draagt bij aan duurzame landbouw door natuurlijke plantversterking zonder chemische residuen. De nanotechnologische aspecten van de formulering zorgen voor een verbeterde bioavailability, zonder toxiciteitsrisico\'s. Dit product voldoet volledig aan de Europese regelgeving voor biostimulanten en landbouwproducten.',
        description7: '',
        summaryTitle: 'Unieke werking van Plant Vitales SioH4 samengevat:',
        summary1: 'Versterkt celwandstructuur en mechanische stevigheid van planten',
        summary2: 'Verhoogt natuurlijke weerstand tegen biotische en abiotische stressfactoren',
        summary3: 'Optimaliseert opname en transport van essentiële mineralen',
        application: 'Met Plant Vitales SioH4 bevordert u niet alleen een robuust en gezond gewas, maar ook een verhoogde opbrengst en een verbeterde productkwaliteit. Dit maakt het een onmisbare ondersteuning voor moderne, efficiënte en duurzame teeltsystemen.',
        conclusion: 'Met Plant Vitales SioH4 bevordert u niet alleen een robuust en gezond gewas, maar ook een verhoogde opbrengst en een verbeterde productkwaliteit. Dit maakt het een onmisbare ondersteuning voor moderne, efficiënte en duurzame teeltsystemen.',
        type: 'Orthosiliciumzuur Oplossing',
        application: 'Bladvoeding en bodemtoepassing',
        dosage: '1-2 liter per hectare',
        frequency: '1x per week tijdens groeiseizoen',
        packaging: '1L, 5L, 20L containers',
        shelfLife: '18 maanden bij juiste opslag',
        certification: 'Voldoet aan Europese regelgeving voor biostimulanten',
        safety: 'Veilig voor mens, dier en milieu',
        benefit1: {
            title: 'Versterkte Celwanden',
            subtitle: 'Structurele Integriteit',
            description: 'Orthosiliciumzuur wordt omgezet in polymeren die de mechanische stevigheid van plantencellen verhogen. Dit creëert een fysieke barrière tegen pathogenen, insecten en omgevingsstress.'
        },
        benefit2: {
            title: 'Stressresistentie',
            subtitle: 'Natuurlijke Bescherming',
            description: 'Verhoogt de weerstand tegen biotische en abiotische stressfactoren. Activeert antioxidatieve processen en verbetert tolerantie tegen droogte, hitte en zoutstress.'
        },
        benefit3: {
            title: 'Nutrientopname',
            subtitle: 'Verbeterde Transport',
            description: 'Optimaliseert de opname en het transport van essentiële mineralen zoals calcium, borium en magnesium. Ondersteunt de vorming van transporteiwitten voor efficiënter metabolisme.'
        },
        benefit4: {
            title: 'Duurzame Teelt',
            subtitle: 'Natuurlijke Versterking',
            description: 'Veilig toepasbaar in diverse gewassen zonder chemische residuen. Draagt bij aan duurzame landbouw door natuurlijke plantversterking.'
        }
    },
    'aunps': {
        description: 'Plant Vitales AuNPs is een hooggeconcentreerde biostimulant op basis van stabiele colloïdale goudnanodeeltjes (AuNPs), geformuleerd om de biologische processen in planten doelgericht te activeren. De werking is gebaseerd op wetenschappelijk bewezen interacties tussen edelmetalen in nanovorm en plantaardige cellulaire systemen.',
        description2: 'Goud op nanoschaal bezit unieke katalytische eigenschappen, waaronder elektronische ladingsoverdracht en oppervlakteactiviteit, die inwerken op fotochemische en hormonale routes van de plant. De nanodeeltjes in Plant Vitales AuNPs zijn elektrolytisch gestabiliseerd, zodat ze consistent actief blijven binnen het fysiologisch bereik van plantenweefsel.',
        description3: 'Na applicatie, bijvoorbeeld via bladtoepassing of fertirrigatie, worden de goudnanodeeltjes efficiënt opgenomen en gedistribueerd door het apoplastisch en symplastisch transportsysteem. In de chloroplasten verbeteren ze de doorstroming van elektronen in het fotosysteem II en verhogen ze de vorming van ATP en NADPH.',
        description4: 'Dit leidt tot een directe versterking van het fotosynthetisch rendement, resulterend in meer suikers, verhoogde biomassa en verbeterde plantgroei. Tegelijkertijd activeren deze AuNPs specifieke genroutes betrokken bij oxidatiestress en celstabiliteit. Door de verhoogde expressie van antioxidatieve enzymen zoals superoxide dismutase (SOD), catalase en peroxidase, wordt de opbouw van reactieve zuurstofsoorten (ROS) onder stress beperkt.',
        description5: 'Hierdoor blijft de celstructuur functioneel en worden schade aan membranen en chloroplasten effectief onderdrukt. De plant behoudt haar metabole capaciteit, ook bij hittestress, droogte, hoge stralingsintensiteit of zoutophoping.',
        description6: 'Een derde aangrijpingspunt van Plant Vitales AuNPs is de invloed op endogene hormoonhuishouding. AuNPs beïnvloeden de biosynthese van auxinen en cytokininen, groeihormonen die de wortelvorming en celdeling aansturen. Deze hormonale modulatie leidt tot diepere wortelontwikkeling, betere opname van water en nutriënten, en een robuustere celstructuur.',
        description7: 'Bij verscheidene gewassen is via onafhankelijke studies aangetoond dat nano-goud wortelarchitectuur en scheutontwikkeling positief beïnvloedt – zelfs bij beperkte voedingsinput. De combinatie met zorgvuldig geselecteerde micronutriënten in gebonden vorm vergroot de metabole respons van het gewas. De interactie tussen edelmetaal-oppervlakken en sporenmetalen maakt de elementen niet alleen beter opneembaar, maar versnelt ook hun rol als cofactoren in enzymatische processen. Hierdoor worden bijvoorbeeld stikstofassimilatie, fosfaatmobilisatie en suikersynthese versneld – en dit met slechts een minimale hoeveelheid actieve stof per hectare.',
        summaryTitle: 'Unieke werking van Plant Vitales AuNPs samengevat:',
        summary1: 'Stimulatie van fotosynthese-efficiëntie via chloroplastinteractie',
        summary2: 'Actieve oxidatieve bescherming onder stressomstandigheden',
        summary3: 'Hormonale activatie voor wortelontwikkeling en celdeling',
        application: 'Deze drie pijlers maken Plant Vitales AuNPs tot een baanbrekend hulpmiddel binnen duurzame en technologisch geavanceerde landbouw. Door de unieke werking op cellulair niveau stijgt niet alleen de opbrengst, maar wordt ook de gewaskwaliteit verhoogd: meer droge stof, betere vruchtzetting en een gelijkmatigere ontwikkeling.',
        conclusion: 'Toepassing van Plant Vitales AuNPs draagt bij aan een systeembenadering in plantgezondheid. Het is geen traditionele input, maar een doelgerichte activator van plantmetabolisme, met een meetbaar en herhaalbaar effect. Daarmee past het product naadloos binnen de toekomstvisie van moderne landbouw – waarin efficiëntie, precisie en duurzaamheid samenkomen.',
        type: 'Nano-Goud Biostimulant',
        application: 'Bladvoeding en fertirrigatie',
        dosage: '1 liter per hectare',
        frequency: '1x per 2 weken tijdens groeiseizoen',
        packaging: '500ml, 1L, 5L containers',
        shelfLife: '36 maanden bij juiste opslag',
        certification: 'Voldoet aan Europese regelgeving voor biostimulanten (Verordening (EU) 2019/1009)',
        safety: 'Vrij van EDTA, mengverspreiders en chemische dragers',
        benefit1: {
            title: 'Fotosynthese Stimulatie',
            subtitle: 'Chloroplast Interactie',
            description: 'Verbetering van elektronenstroming in fotosysteem II, verhoogde ATP en NADPH vorming. Leidt tot directe versterking van fotosynthetisch rendement en meer suikerproductie.'
        },
        benefit2: {
            title: 'Oxidatieve Bescherming',
            subtitle: 'Stress Weerbaarheid',
            description: 'Activering van antioxidatieve enzymen (SOD, catalase, peroxidase) voor bescherming tegen reactieve zuurstofsoorten. Behoud van celstructuur onder extreme omstandigheden.'
        },
        benefit3: {
            title: 'Hormonale Activatie',
            subtitle: 'Wortelontwikkeling',
            description: 'Invloed op biosynthese van auxinen en cytokininen voor diepere wortelontwikkeling en betere opname van water en nutriënten. Stimuleert celdeling en celstructuur.'
        },
        benefit4: {
            title: 'Metabole Versnelling',
            subtitle: 'Enzymatische Processen',
            description: 'Versnelling van stikstofassimilatie, fosfaatmobilisatie en suikersynthese door interactie tussen edelmetaal-oppervlakken en sporenmetalen. Minimale hoeveelheid actieve stof per hectare.'
        }
    },
    'ptnps': {
        description: 'Plant Vitales PtNPs is een geavanceerde biostimulant geformuleerd met stabiele colloïdale platinum-nanodeeltjes (PtNPs). Dankzij zijn superieure redoxcapaciteit, enzymatische interactie en structurele stabiliteit activeert nano-platinum diepgaande celprocessen die resulteren in vitalere gewassen met een verhoogd regeneratief vermogen en weerstand tegen stress.',
        description2: 'Nano-platinum onderscheidt zich door zijn uitzonderlijk vermogen om als redoxbuffer op te treden in plantenweefsels. Binnen de mitochondriën en chloroplasten ondersteunt het de optimalisatie van elektronentransportketens, waardoor energie-efficiëntie bij zowel fotosynthese als ademhaling toeneemt. Hierdoor worden de productie van ATP en andere energiedragende moleculen verhoogd, wat leidt tot een versnelde celdeling, verbeterde bladontwikkeling en hogere energievoorraad voor generatieve groei.',
        description3: 'Plant Vitales PtNPs versterkt daarnaast het intracellulaire antioxidatieve systeem door het activeren van redoxgevoelige enzymen zoals glutathionreductase, ascorbaatperoxidase en monodehydroascorbaat-reductase. Hierdoor worden schadelijke reactieve zuurstofsoorten (ROS) geneutraliseerd voordat ze schade kunnen toebrengen aan membranen, eiwitten en DNA. De algehele celvitaliteit blijft daardoor intact, zelfs onder zware abiotische stresscondities zoals droogte, hitte of nutriëntentekorten.',
        description4: 'Bovendien beïnvloedt PtNPs de expressie van groeigerelateerde genen via signaalroutes zoals MAPK en ROS-afhankelijke transcriptie. Dit resulteert in een verbeterde regulatie van de celdeling en differentiatie, met als zichtbaar gevolg een gelijkmatiger gewasopbouw, sterkere scheutontwikkeling en een verhoogde verdraagzaamheid tegenover omgevingsveranderingen. Nano-platinum fungeert op die manier als een katalytische regulator van morfogenese.',
        description5: 'Plant Vitales PtNPs bevat daarnaast functioneel gebonden sporenelementen die essentieel zijn voor enzymatische processen en eiwitsynthese. In combinatie met nano-platinum worden deze micronutriënten efficiënter opgenomen en benut door de plant. Dit leidt tot verhoogde metabolische activiteit en een verbeterde voedingsstatus in elk groeistadium.',
        description6: 'De formulering van Plant Vitales PtNPs maakt gebruik van gecontroleerde colloïdale stabilisatie en een uniforme deeltjesverdeling binnen het nanobereik. Hierdoor is een veilige en consistente opname gegarandeerd zonder risico op accumulatie of fytotoxiciteit. De formule bevat geen synthetische chelaten of residugevoelige hulpstoffen, en is volledig conform de Europese wetgeving voor biostimulanten.',
        description7: '',
        summaryTitle: 'Unieke werking van Plant Vitales PtNPs samengevat:',
        summary1: 'Optimaliseert redoxbalans en energievoorziening op cellulair niveau',
        summary2: 'Stimuleert celdeling en morfogenese voor versnelde plantontwikkeling',
        summary3: 'Verhoogt antioxidatieve bescherming tegen abiotische stress',
        application: 'Plant Vitales PtNPs is inzetbaar in alle teeltsystemen – van glastuinbouw tot open veld – en geschikt voor zowel bladtoepassing als wortelabsorptie. De aanbevolen dosering bedraagt 1 liter per hectare. Door de gerichte werking op celademhaling, redox-homeostase en groeisignalering vormt het een krachtige aanvulling binnen precisielandbouw en high-performance teelten.',
        conclusion: 'Deze biostimulant biedt niet enkel een tijdelijke boost, maar draagt bij aan structurele verbetering van plantvitaliteit, opbrengstzekerheid en teeltweerbaarheid. Daarmee sluit Plant Vitales PtNPs naadloos aan op de nieuwe generatie landbouwproducten die technologie, efficiëntie en duurzaamheid combineren.',
        type: 'Nano-Platina Biostimulant',
        application: 'Bladtoepassing en wortelabsorptie',
        dosage: '1 liter per hectare',
        frequency: '1x per 3 weken tijdens groeiseizoen',
        packaging: '250ml, 500ml, 1L containers',
        shelfLife: '48 maanden bij juiste opslag',
        certification: 'Voldoet aan Europese wetgeving voor biostimulanten',
        safety: 'Vrij van synthetische chelaten en residugevoelige hulpstoffen',
        benefit1: {
            title: 'Redoxbalans Optimalisatie',
            subtitle: 'Energievoorziening',
            description: 'Ondersteunt optimalisatie van elektronentransportketens in mitochondriën en chloroplasten. Verhoogt energie-efficiëntie bij fotosynthese en ademhaling voor meer ATP productie.'
        },
        benefit2: {
            title: 'Celdeling Stimulatie',
            subtitle: 'Morfogenese',
            description: 'Beïnvloedt groeigerelateerde genen via MAPK en ROS-afhankelijke transcriptie. Resulteert in versnelde celdeling, gelijkmatiger gewasopbouw en sterkere scheutontwikkeling.'
        },
        benefit3: {
            title: 'Antioxidatieve Bescherming',
            subtitle: 'Stressweerbaarheid',
            description: 'Activeert redoxgevoelige enzymen (glutathionreductase, ascorbaatperoxidase) voor neutralisatie van reactieve zuurstofsoorten. Behoudt celvitaliteit onder extreme stresscondities.'
        },
        benefit4: {
            title: 'Structurele Verbetering',
            subtitle: 'Duurzame Vitaliteit',
            description: 'Draagt bij aan structurele verbetering van plantvitaliteit, opbrengstzekerheid en teeltweerbaarheid. Geen tijdelijke boost maar langdurige celversterking.'
        }
    }
}

// Get current product tab content based on route
const currentProductTab = computed(() => {
    return productTabs[productId] || productTabs['natural-nano-mix']
})
</script>

<style scoped>
.mission-tabs {
    display: flex;
    flex-wrap: wrap;
}

.mission-tabs label {
    order: 1;
    display: block;
    padding: 17px 50px;
    margin-right: 0.2rem;
    cursor: pointer;
    background: #5e9054;
    font-weight: 500;
    transition: background ease 0.2s;
    font-size: 19px;
    text-transform: uppercase;
    color: #fff;
}

.mission-tabs .tab {
    order: 99;
    flex-grow: 1;
    width: 100%;
    display: none;
    padding: 1rem;
    background: #F4F5F8;
}

.default-tabs .mission-tabs .text {
    position: relative;
    font-size: 20px;
    font-weight: 300;
    color: #5e9054;
    line-height: 1.7em;
    letter-spacing: 2px;
}

.mission-tabs input[type="radio"] {
    display: none;
}

.mission-tabs input[type="radio"]:checked+label {
    background: #F4F5F8;
    color: #222;
}

.mission-tabs input[type="radio"]:checked+label+.tab {
    display: block;
}

@media (max-width: 45em) {

    .mission-tabs .tab,
    .mission-tabs label {
        order: initial;
    }

    .mission-tabs label {
        width: 100%;
        margin-right: 0;
        margin-top: 0.2rem;
    }
}
</style>