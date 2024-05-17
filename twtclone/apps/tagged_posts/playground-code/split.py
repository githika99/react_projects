def split_text_and_hashtags(text):
  """
  This function splits a text string containing hashtags into the text itself
  and a list of hashtags.

  Args:
      text: The text string to split.

  Returns:
      A tuple containing the text and a list of hashtags.
  """
  words = text.split()
  hashtags = [word[1:] for word in words if word.startswith('#')]
  text = ' '.join([word for word in words if not word.startswith('#')])
  return text, hashtags

# Example usage
text = "The sky is falling  #news #gossip"
text, hashtags = split_text_and_hashtags(text)
print(text)  # Output: The sky is falling
print(hashtags)  # Output: ['#news', '#gossip']

