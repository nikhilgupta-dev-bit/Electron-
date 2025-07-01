import { Inngest } from "inngest";
import User from "../models/User.js"; // Adjust the path as needed


// Create a client to send and receive events
export const inngest = new Inngest({ id: "Electron" });

// Export the client to use in your functions
export const syncCreation = inngest.createFunction(
    {
        id: "sync-user-from-clerk",
        event: "clerk/user.created",
    },
    async ({ event }) => {
        const { id, first_name, last_name, image_url, email_address } = event.data;
        const userData = {
            _id: id,
            name: `${first_name} ${last_name}`,
            email: Array.isArray(email_address) && email_address.length > 0 && email_address[0].email_address
                ? email_address[0].email_address
                : "",
            image: image_url
        };
        await connect();
        await User.create(userData);
    }
);

// ingest function to update user data
export const syncUserUpdate = inngest.createFunction(
    {
        id: "user-from-clerk-update",
        event: "clerk/user.updated",
    },
    async ({ event }) => {
        const { id, first_name, last_name, image_url, email_address } = event.data;
        const userData = {
            name: `${first_name} ${last_name}`,
            image: image_url
        };
        await connect();
        await User.findByIdAndUpdate(
            id,
            userData,
            { new: true }
        );
    }
);

// ingest function to delete user data
export const syncUserDelete = inngest.createFunction(
    {
        id: "user-from-clerk-delete",
        event: "clerk/user.deleted",
    },
    async ({ event }) => {
        const { id } = event.data;
        await connect();
        await User.findByIdAndDelete(id);
    }
);
