import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {

    const router = useRouter();

    return (
        <nav className="bg-white">
        <div className="mx-auto">
              <div href="#" className="justify-end space-x-6 flex items-center py-5 px-10 text-gray-700">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/login">
                    <a>Login</a>
                </Link>
                <Link href="/signup">
                    <a>Sign up</a>
                </Link>
            </div>
        </div>
    </nav>
    )
}   