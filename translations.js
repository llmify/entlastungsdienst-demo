// Translation system for KI-Lerncoach
const translations = {
    de: {
        // Dashboard
        'greeting': 'Hallo Maria!',
        'how_can_help': 'Wie kann ich dir heute helfen?',
        'assess_competencies': 'Kompetenzen einschätzen',
        'develop_competencies': 'Kompetenzen entwickeln',
        'reflect_experiences': 'Erfahrungen reflektieren',
        'my_competencies': 'Meine Kompetenzen',

        // Assessment
        'competency_assessment': 'Kompetenz-Einstufung',
        'assessment_intro': 'Dieser Test hilft uns, deine aktuellen Kompetenzen zu verstehen.',
        'duration': 'Dauer:',
        'duration_time': 'ca. 15-20 Minuten',
        'private': 'Privat:',
        'private_text': 'Nur du siehst die Ergebnisse (ausser du gibst sie frei)',
        'covered_areas': 'Abgedeckte Bereiche:',
        'can_ask_questions': 'Du kannst jederzeit Fragen stellen, wenn etwas unklar ist.',
        'start_test': 'Test starten',

        // Learning Path
        'my_learning_path': 'Mein Lernpfad',
        'your_personalized_path': 'Dein personalisierter Lernweg',
        'assessment_recommendation': 'Empfehlung aus deinem Assessment:',
        'assessment_recommendation_text': 'Basierend auf deiner Kompetenz-Einstufung empfehlen wir dir, mit den markierten Bereichen zu beginnen.',
        'completed': 'Abgeschlossen',
        'completed_100': 'Abgeschlossen (100%)',
        'in_progress': 'In Arbeit',
        'in_progress_40': 'In Arbeit (40%) • Vom Assessment empfohlen',
        'not_started': 'Noch nicht begonnen',
        'not_started_0': 'Noch nicht begonnen (0%)',
        'not_required': 'Nicht erforderlich',
        'test_passed': 'Test bestanden',
        'from_assessment_recommended': 'Vom Assessment empfohlen',
        'overall_progress': 'Gesamtfortschritt:',

        // Competency Areas
        'self_care': 'Selbstsorge',
        'meaningful_activities': 'Sinnstiftende Alltagsgestaltung',
        'social_participation': 'Soziale Teilhabe',
        'counseling_coordination': 'Beratungs- und Alltagskoordination',
        'household_management': 'Gemeinsame Haushaltsführung',
        'care_situations': 'Betreuung in Pflegesituationen',

        // Chat
        'enter_message': 'Nachricht eingeben...',
        'progress': 'Fortschritt',
        'assessment_progress': 'Assessment-Fortschritt',

        // Competencies Page
        'detail_view': 'Detailansicht:',
        'last_updated': 'Zuletzt aktualisiert:',
        'continue': 'Weitermachen',
        'areas_fulfilled': 'von 6 Bereichen erfüllt',
        'download_certificate': 'Zertifikat herunterladen',
        'available_when': '(verfügbar ab 6/6 erfüllt)',
        'share_with_office': 'An Geschäftsstelle freigeben',

        // Admin Page
        'office': 'Geschäftsstelle',
        'competency_overview': 'Kompetenz-Übersicht',
        'search': 'Suche...',
        'all': 'Alle',
        'fulfilled': 'Erfüllt',
        'open': 'Offen',
        'status': 'Status:',
        'status_fulfilled': 'erfüllt',

        // Abbreviated competency names for admin grid
        'counseling_coord_short': 'Beratungs- u. Alltagskoordination',
        'household_mgmt_short': 'Gem. Haushaltsführung',

        // Sidebar Menu
        'menu': 'Menü',
        'admin_panel': 'Geschäftsstelle',
        'dashboard': 'Dashboard',
        'help': 'Hilfe',
        'logout': 'Abmelden',
        'not_available_betreuer': 'Für Betreuer nicht verfügbar',

        // Common
        'back': 'Zurück'
    },

    en: {
        // Dashboard
        'greeting': 'Hello Maria!',
        'how_can_help': 'How can I help you today?',
        'assess_competencies': 'Assess Competencies',
        'develop_competencies': 'Develop Competencies',
        'reflect_experiences': 'Reflect on Experiences',
        'my_competencies': 'My Competencies',

        // Assessment
        'competency_assessment': 'Competency Assessment',
        'assessment_intro': 'This test helps us understand your current competencies.',
        'duration': 'Duration:',
        'duration_time': 'approx. 15-20 minutes',
        'private': 'Private:',
        'private_text': 'Only you see the results (unless you share them)',
        'covered_areas': 'Covered Areas:',
        'can_ask_questions': 'You can ask questions at any time if something is unclear.',
        'start_test': 'Start Test',

        // Learning Path
        'my_learning_path': 'My Learning Path',
        'your_personalized_path': 'Your Personalized Learning Journey',
        'assessment_recommendation': 'Recommendation from your Assessment:',
        'assessment_recommendation_text': 'Based on your competency assessment, we recommend starting with the highlighted areas.',
        'completed': 'Completed',
        'completed_100': 'Completed (100%)',
        'in_progress': 'In Progress',
        'in_progress_40': 'In Progress (40%) • Recommended from Assessment',
        'not_started': 'Not Started Yet',
        'not_started_0': 'Not Started Yet (0%)',
        'not_required': 'Not Required',
        'test_passed': 'Test Passed',
        'from_assessment_recommended': 'Recommended from Assessment',
        'overall_progress': 'Overall Progress:',

        // Competency Areas
        'self_care': 'Self-Care',
        'meaningful_activities': 'Meaningful Daily Activities',
        'social_participation': 'Social Participation',
        'counseling_coordination': 'Counseling and Daily Coordination',
        'household_management': 'Shared Household Management',
        'care_situations': 'Care in Nursing Situations',

        // Chat
        'enter_message': 'Enter message...',
        'progress': 'Progress',
        'assessment_progress': 'Assessment Progress',

        // Competencies Page
        'detail_view': 'Detailed View:',
        'last_updated': 'Last updated:',
        'continue': 'Continue',
        'areas_fulfilled': 'of 6 areas fulfilled',
        'download_certificate': 'Download Certificate',
        'available_when': '(available at 6/6 fulfilled)',
        'share_with_office': 'Share with Office',

        // Admin Page
        'office': 'Office',
        'competency_overview': 'Competency Overview',
        'search': 'Search...',
        'all': 'All',
        'fulfilled': 'Fulfilled',
        'open': 'Open',
        'status': 'Status:',
        'status_fulfilled': 'fulfilled',

        // Abbreviated competency names for admin grid
        'counseling_coord_short': 'Counseling & Daily Coord.',
        'household_mgmt_short': 'Shared Household Mgmt.',

        // Sidebar Menu
        'menu': 'Menu',
        'admin_panel': 'Office',
        'dashboard': 'Dashboard',
        'help': 'Help',
        'logout': 'Logout',
        'not_available_betreuer': 'Not available for caregivers',

        // Common
        'back': 'Back'
    },

    fr: {
        // Dashboard
        'greeting': 'Bonjour Maria!',
        'how_can_help': 'Comment puis-je vous aider aujourd\'hui?',
        'assess_competencies': 'Évaluer les Compétences',
        'develop_competencies': 'Développer les Compétences',
        'reflect_experiences': 'Réfléchir aux Expériences',
        'my_competencies': 'Mes Compétences',

        // Assessment
        'competency_assessment': 'Évaluation des Compétences',
        'assessment_intro': 'Ce test nous aide à comprendre vos compétences actuelles.',
        'duration': 'Durée:',
        'duration_time': 'environ 15-20 minutes',
        'private': 'Privé:',
        'private_text': 'Seul vous voyez les résultats (sauf si vous les partagez)',
        'covered_areas': 'Domaines Couverts:',
        'can_ask_questions': 'Vous pouvez poser des questions à tout moment si quelque chose n\'est pas clair.',
        'start_test': 'Démarrer le Test',

        // Learning Path
        'my_learning_path': 'Mon Parcours d\'Apprentissage',
        'your_personalized_path': 'Votre Parcours d\'Apprentissage Personnalisé',
        'assessment_recommendation': 'Recommandation de votre Évaluation:',
        'assessment_recommendation_text': 'Sur la base de votre évaluation des compétences, nous vous recommandons de commencer par les domaines mis en évidence.',
        'completed': 'Terminé',
        'completed_100': 'Terminé (100%)',
        'in_progress': 'En Cours',
        'in_progress_40': 'En Cours (40%) • Recommandé par l\'Évaluation',
        'not_started': 'Pas Encore Commencé',
        'not_started_0': 'Pas Encore Commencé (0%)',
        'not_required': 'Non Requis',
        'test_passed': 'Test Réussi',
        'from_assessment_recommended': 'Recommandé par l\'Évaluation',
        'overall_progress': 'Progrès Global:',

        // Competency Areas
        'self_care': 'Soins Personnels',
        'meaningful_activities': 'Activités Quotidiennes Significatives',
        'social_participation': 'Participation Sociale',
        'counseling_coordination': 'Conseil et Coordination Quotidienne',
        'household_management': 'Gestion Commune du Ménage',
        'care_situations': 'Soins dans les Situations de Soins Infirmiers',

        // Chat
        'enter_message': 'Entrez un message...',
        'progress': 'Progrès',
        'assessment_progress': 'Progrès de l\'Évaluation',

        // Competencies Page
        'detail_view': 'Vue Détaillée:',
        'last_updated': 'Dernière mise à jour:',
        'continue': 'Continuer',
        'areas_fulfilled': 'sur 6 domaines remplis',
        'download_certificate': 'Télécharger le Certificat',
        'available_when': '(disponible à 6/6 remplis)',
        'share_with_office': 'Partager avec le Bureau',

        // Admin Page
        'office': 'Bureau',
        'competency_overview': 'Aperçu des Compétences',
        'search': 'Recherche...',
        'all': 'Tous',
        'fulfilled': 'Remplis',
        'open': 'Ouverts',
        'status': 'Statut:',
        'status_fulfilled': 'remplis',

        // Abbreviated competency names for admin grid
        'counseling_coord_short': 'Conseil et Coord. Quotidienne',
        'household_mgmt_short': 'Gestion Commune du Ménage',

        // Sidebar Menu
        'menu': 'Menu',
        'admin_panel': 'Bureau',
        'dashboard': 'Tableau de bord',
        'help': 'Aide',
        'logout': 'Déconnexion',
        'not_available_betreuer': 'Non disponible pour les soignants',

        // Common
        'back': 'Retour'
    },

    it: {
        // Dashboard
        'greeting': 'Ciao Maria!',
        'how_can_help': 'Come posso aiutarti oggi?',
        'assess_competencies': 'Valutare le Competenze',
        'develop_competencies': 'Sviluppare le Competenze',
        'reflect_experiences': 'Riflettere sulle Esperienze',
        'my_competencies': 'Le Mie Competenze',

        // Assessment
        'competency_assessment': 'Valutazione delle Competenze',
        'assessment_intro': 'Questo test ci aiuta a comprendere le tue competenze attuali.',
        'duration': 'Durata:',
        'duration_time': 'circa 15-20 minuti',
        'private': 'Privato:',
        'private_text': 'Solo tu vedi i risultati (a meno che non li condividi)',
        'covered_areas': 'Aree Coperte:',
        'can_ask_questions': 'Puoi fare domande in qualsiasi momento se qualcosa non è chiaro.',
        'start_test': 'Inizia il Test',

        // Learning Path
        'my_learning_path': 'Il Mio Percorso di Apprendimento',
        'your_personalized_path': 'Il Tuo Percorso di Apprendimento Personalizzato',
        'assessment_recommendation': 'Raccomandazione dalla tua Valutazione:',
        'assessment_recommendation_text': 'In base alla valutazione delle tue competenze, ti consigliamo di iniziare con le aree evidenziate.',
        'completed': 'Completato',
        'completed_100': 'Completato (100%)',
        'in_progress': 'In Corso',
        'in_progress_40': 'In Corso (40%) • Raccomandato dalla Valutazione',
        'not_started': 'Non Ancora Iniziato',
        'not_started_0': 'Non Ancora Iniziato (0%)',
        'not_required': 'Non Richiesto',
        'test_passed': 'Test Superato',
        'from_assessment_recommended': 'Raccomandato dalla Valutazione',
        'overall_progress': 'Progresso Complessivo:',

        // Competency Areas
        'self_care': 'Cura di Sé',
        'meaningful_activities': 'Attività Quotidiane Significative',
        'social_participation': 'Partecipazione Sociale',
        'counseling_coordination': 'Consulenza e Coordinamento Quotidiano',
        'household_management': 'Gestione Condivisa della Casa',
        'care_situations': 'Assistenza nelle Situazioni di Cura',

        // Chat
        'enter_message': 'Inserisci un messaggio...',
        'progress': 'Progresso',
        'assessment_progress': 'Progresso della Valutazione',

        // Competencies Page
        'detail_view': 'Vista Dettagliata:',
        'last_updated': 'Ultimo aggiornamento:',
        'continue': 'Continua',
        'areas_fulfilled': 'di 6 aree completate',
        'download_certificate': 'Scarica Certificato',
        'available_when': '(disponibile a 6/6 completate)',
        'share_with_office': 'Condividi con l\'Ufficio',

        // Admin Page
        'office': 'Ufficio',
        'competency_overview': 'Panoramica delle Competenze',
        'search': 'Cerca...',
        'all': 'Tutti',
        'fulfilled': 'Completati',
        'open': 'Aperti',
        'status': 'Stato:',
        'status_fulfilled': 'completati',

        // Abbreviated competency names for admin grid
        'counseling_coord_short': 'Consulenza e Coord. Quotidiano',
        'household_mgmt_short': 'Gestione Condivisa Casa',

        // Sidebar Menu
        'menu': 'Menu',
        'admin_panel': 'Ufficio',
        'dashboard': 'Pannello di controllo',
        'help': 'Aiuto',
        'logout': 'Disconnetti',
        'not_available_betreuer': 'Non disponibile per operatori',

        // Common
        'back': 'Indietro'
    },

    sq: {
        // Dashboard
        'greeting': 'Përshëndetje Maria!',
        'how_can_help': 'Si mund të të ndihmoj sot?',
        'assess_competencies': 'Vlerëso Kompetencat',
        'develop_competencies': 'Zhvillo Kompetencat',
        'reflect_experiences': 'Reflekto mbi Përvojat',
        'my_competencies': 'Kompetencat e Mia',

        // Assessment
        'competency_assessment': 'Vlerësimi i Kompetencave',
        'assessment_intro': 'Ky test na ndihmon të kuptojmë kompetencat tuaja aktuale.',
        'duration': 'Kohëzgjatja:',
        'duration_time': 'rreth 15-20 minuta',
        'private': 'Privat:',
        'private_text': 'Vetëm ti i sheh rezultatet (përveç nëse i ndani)',
        'covered_areas': 'Fusha të Mbuluara:',
        'can_ask_questions': 'Mund të bëni pyetje në çdo kohë nëse diçka nuk është e qartë.',
        'start_test': 'Fillo Testin',

        // Learning Path
        'my_learning_path': 'Rruga Ime e Mësimit',
        'your_personalized_path': 'Rruga Juaj e Personalizuar e Mësimit',
        'assessment_recommendation': 'Rekomandimi nga Vlerësimi juaj:',
        'assessment_recommendation_text': 'Bazuar në vlerësimin tuaj të kompetencave, rekomandojmë të filloni me fushat e theksuara.',
        'completed': 'Përfunduar',
        'completed_100': 'Përfunduar (100%)',
        'in_progress': 'Në Progres',
        'in_progress_40': 'Në Progres (40%) • Rekomanduar nga Vlerësimi',
        'not_started': 'Akoma Nuk Ka Filluar',
        'not_started_0': 'Akoma Nuk Ka Filluar (0%)',
        'not_required': 'Nuk Kërkohet',
        'test_passed': 'Testi i Kaluar',
        'from_assessment_recommended': 'Rekomanduar nga Vlerësimi',
        'overall_progress': 'Progresi i Përgjithshëm:',

        // Competency Areas
        'self_care': 'Kujdesi Vetjak',
        'meaningful_activities': 'Aktivitete të Rëndësishme Ditore',
        'social_participation': 'Pjesëmarrja Sociale',
        'counseling_coordination': 'Këshillim dhe Koordinim i Përditshëm',
        'household_management': 'Menaxhimi i Përbashkët i Shtëpisë',
        'care_situations': 'Kujdesi në Situata Infermierike',

        // Chat
        'enter_message': 'Shkruani një mesazh...',
        'progress': 'Progresi',
        'assessment_progress': 'Progresi i Vlerësimit',

        // Competencies Page
        'detail_view': 'Pamja e Detajuar:',
        'last_updated': 'Përditësuar së fundmi:',
        'continue': 'Vazhdo',
        'areas_fulfilled': 'nga 6 fusha të plotësuara',
        'download_certificate': 'Shkarko Çertifikatën',
        'available_when': '(në dispozicion në 6/6 të plotësuara)',
        'share_with_office': 'Ndaj me Zyrën',

        // Admin Page
        'office': 'Zyra',
        'competency_overview': 'Përmbledhja e Kompetencave',
        'search': 'Kërko...',
        'all': 'Të Gjitha',
        'fulfilled': 'Plotësuar',
        'open': 'Hapur',
        'status': 'Statusi:',
        'status_fulfilled': 'plotësuar',

        // Abbreviated competency names for admin grid
        'counseling_coord_short': 'Këshillim dhe Koord. e Përditshme',
        'household_mgmt_short': 'Menaxh. i Përbashkët i Shtëpisë',

        // Sidebar Menu
        'menu': 'Menu',
        'admin_panel': 'Zyra',
        'dashboard': 'Paneli kryesor',
        'help': 'Ndihmë',
        'logout': 'Dilni',
        'not_available_betreuer': 'Jo e disponueshme për kujdestarë',

        // Common
        'back': 'Kthehu'
    }
};

// Language switcher function
function switchLanguage(lang) {
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language selector display
    const langSelectors = document.querySelectorAll('.lang-selector');
    const langCodes = { 'de': 'DE', 'en': 'EN', 'fr': 'FR', 'it': 'IT', 'sq': 'SQ' };
    langSelectors.forEach(selector => {
        const textNode = Array.from(selector.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
            textNode.textContent = ' ' + langCodes[lang];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language or default to German
    const savedLang = localStorage.getItem('preferredLanguage') || 'de';
    switchLanguage(savedLang);

    // Add click event to language selector
    const langSelectors = document.querySelectorAll('.lang-selector');
    langSelectors.forEach(selector => {
        selector.style.cursor = 'pointer';
        selector.addEventListener('click', function() {
            const currentLang = localStorage.getItem('preferredLanguage') || 'de';
            const languages = ['de', 'sq', 'en', 'fr', 'it'];
            const currentIndex = languages.indexOf(currentLang);
            const nextLang = languages[(currentIndex + 1) % languages.length];
            switchLanguage(nextLang);
        });
    });
});
