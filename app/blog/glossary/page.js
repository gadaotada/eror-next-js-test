
const triggerServerErr = async () => {
    'use server';

    throw new Error('Server error')
}

export default function GlossaryPage() {

    return (
        <div>
            <h1>Glossary</h1>
            <p>
                This is a glossary of terms.
            </p>
            <form action={triggerServerErr}>
                <button type="submit" >
                    Trigger server error
                </button>
            </form>
        </div>
    )
}