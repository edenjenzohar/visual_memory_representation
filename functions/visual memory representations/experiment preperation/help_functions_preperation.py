def remove_bad_images(bad_targets,df):
    df = df.drop(index=bad_targets)
    return df