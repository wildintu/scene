import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

export const SubmitBtn = () => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className="Button violet">Login</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay" />
			<Dialog.Content className="DialogContent">
				<Dialog.Title className="DialogTitle">Welcome!</Dialog.Title>
				<Dialog.Description className="DialogDescription">
					Please login with your email and password.
				</Dialog.Description>
				<fieldset className="Fieldset">
					<label className="Label" htmlFor="email">
						Email
					</label>
					<input className="Input" id="email" />
				</fieldset>
				<fieldset className="Fieldset">
					<label className="Label" htmlFor="password">
						Password
					</label>
					<input className="Input" id="password" />
				</fieldset>
				<div
					style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
				>
					<Dialog.Close asChild>
						<button className="Button green">Submit</button>
					</Dialog.Close>
				</div>
				<Dialog.Close asChild>
					<button className="IconButton" aria-label="Close">
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);
