import appimage from "/src/assets/webapp_images/jessprache.png"
export const title = "Jessprache";
export const image = appimage;
export const link = "https://jessprache.netlify.app/";

export default function Jessprache() {
    return (
        <div>
            <div className="p-8 text-center">
                <p className="mb-4">I spent a summer in Vienna, Austria and always enjoyed the way German sounded, so I re-factored Jesspañol to Jessprache to ostensibly learn German.
                    However, as someone told me in Vienna, "life is too short to learn German", and my level of speaking is virtually nonexistent, and my level of comprehension is specific to following yoga class instructions.</p>

                <p >The app includes a game for practicing:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                    <li><b>Verbs and conjugations:</b> Users can practice conjugating verbs in all German tenses (except those used exclusively in journalism) and add more verbs and conjugations to their own dictionary.</li>
                    <li><b>Vocabulary:</b> Users can practice translating a set of English words to German, German words to English, and can add vocab words to their own dictionary with descriptions and categories.</li>
                    <li><b>Forming sentences in German:</b> Users try to write a sentence in German using two random words from their vocabulary dictionary. An AI agent checks the grammar, spelling, and proper conjugation of verbs and provides the user with corrections.</li>
                    <li><b>Translating sentences from English to German:</b> An AI agent writes a sentence in English using two vocab words from the user's dictionary. The user tries to translate the sentence to German, and the AI agent provides corrections.</li>
                </ul>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "2rem",
                        gap: "8px",
                        textDecoration: "none",
                    }}
                >
                    <img
                        src= {appimage}
                        alt="Jessprache thumbnail"
                        style={{
                            width: 500,
                            height: "auto",
                            borderRadius: 8,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        }}
                    />
                    <span
                        style={{
                            padding: "10px 14px",
                            background: "#FDFAF5",
                            color: "rgb(73, 73, 73)",
                            borderRadius: 10,
                            fontWeight: 600,
                        }}
                    >
                        Check it out here
                    </span>
                </a>
            </div>
        </div>
    );
}
