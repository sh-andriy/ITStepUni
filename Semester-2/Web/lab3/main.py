import os


def create_character_files(file_path):
    # Create a dictionary to store character names and their replicas
    characters = {}

    # Read data from the scenario.txt file
    with open(file_path, 'r') as file:
        for line in file:
            # Split each line into character and replica
            parts = line.strip().split(':')

            if len(parts) == 2:
                character = parts[0].strip()
                replica = parts[1].strip()

                # Check if character already exists in the dictionary
                if character in characters:
                    characters[character].append(replica)
                else:
                    characters[character] = [replica]

    # Create a 'replicas' directory if it doesn't exist
    if not os.path.exists('replicas'):
        os.makedirs('replicas')

    # Create separate files for each character
    for character, replicas in characters.items():
        file_name = f'replicas_{character}.txt'
        file_path = os.path.join('replicas', file_name)

        # Write replicas of the character to their respective file
        with open(file_path, 'w') as file:
            for replica in replicas:
                file.write(replica + '\n')

    print('Character files created successfully.')

# Call the function with the file path
file_path = 'scenario.txt'
create_character_files(file_path)
