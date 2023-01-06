export function Footer() {
    return (
        <footer style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            borderTop: '1px solid gray',
            bottom: 0,
            marginTop: '2rem',
            padding: '1rem'
        }}>
            <a className='inline' href='https://github.com/wenblack' target={'_blank'}>Created with 💗 by Wender</a>
        </footer>
    );
}