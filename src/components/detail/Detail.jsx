import './detail.css';
import { useUser } from '../../lib/context/user';

export default function Detail() {
	const logout = useUser();

	const handleLogout = async () => {
		try {
			// Log the user out
			await logout();
			// Redirect to the login page after successful logout
			window.location.replace('/login');
		} catch (error) {
			// Handle any errors during logout
			console.error('Logout failed:', error);
		}
	};
	return (
		<div className='detail'>
			<div className='user'>
				<img
					src='https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt=''
				/>
				<h2>Jane Doe</h2>
				<p>
					Vivamus commodo, odio sed fringilla pretium, sem nulla feugiat odio,
					in cursus elit dolor et ex.
				</p>
			</div>
			<div className='info'>
				<div className='option'>
					<div className='title'>
						<span>Chat Settings</span>
						<img src='./arrowUp.png' alt='' />
					</div>
				</div>
				<div className='option'>
					<div className='title'>
						<span>Privacy & help</span>
						<img src='./arrowUp.png' alt='' />
					</div>
				</div>
				<div className='option'>
					<div className='title'>
						<span>Shared photos</span>
						<img src='./arrowDown.png' alt='' />
					</div>
					<div className='photos'>
						<div className='photoItem'>
							<div className='photoDetail'>
								<img
									src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
									alt=''
								/>
								<span>image_2024.png</span>
							</div>
							<img src='./download2.png' alt='' className='icon2' />
						</div>
						<div className='photoItem'>
							<div className='photoDetail'>
								<img
									src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
									alt=''
								/>
								<span>image_2024.png</span>
							</div>
							<img src='./download2.png' alt='' className='icon2' />
						</div>
						<div className='photoItem'>
							<div className='photoDetail'>
								<img
									src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
									alt=''
								/>
								<span>image_2024.png</span>
							</div>
							<img src='./download2.png' alt='' className='icon2' />
						</div>
					</div>
				</div>
				<div className='option'>
					<div className='title'>
						<span>Shared Files</span>
						<img src='./arrowUp.png' alt='' />
					</div>
				</div>
				<button>Block User</button>
				<button className='logout' onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	);
}
